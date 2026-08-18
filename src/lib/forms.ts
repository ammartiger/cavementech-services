/**
 * Form handling for a fully static site.
 *
 * ARCHITECTURE / INTEGRATION POINT
 * --------------------------------
 * This site is exported statically and hosted on GitHub Pages, so there is no
 * origin server to receive a POST. Submissions are sent to a third-party form
 * endpoint configured at build time via NEXT_PUBLIC_FORM_ENDPOINT
 * (e.g. Formspree, Web3Forms, Basin, or your own serverless function).
 *
 * Security notes, stated plainly:
 *  - The endpoint URL is public by design. It is not a secret and must not be
 *    treated as one. Never place an API key or token in this file or in any
 *    NEXT_PUBLIC_* variable — they are compiled into the client bundle.
 *  - Client-side validation here is a UX affordance only. Authoritative
 *    validation, rate limiting, spam scoring and abuse protection MUST be
 *    enforced by the receiving endpoint. Configure them there.
 *  - Anti-spam measures below (honeypot + submission-timing check) raise the
 *    cost of naive bots. They are not a substitute for server-side controls.
 *
 * To switch providers, change NEXT_PUBLIC_FORM_ENDPOINT and, if required,
 * adjust `buildPayload` to match the provider's expected field format.
 */

export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export const isFormEndpointConfigured = FORM_ENDPOINT.length > 0;

/** Minimum milliseconds between form render and submit. Below this, treat as a bot. */
const MIN_FILL_TIME_MS = 2500;

export type FieldErrors = Record<string, string>;

/* ==========================================================================
   Validators
   ========================================================================== */

/**
 * Pragmatic email check. Deliberately not RFC 5322 — over-strict patterns
 * reject valid addresses, and the receiving endpoint verifies deliverability.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Free-mailbox domains, flagged (not blocked) on business-email fields. */
const CONSUMER_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "mail.com",
  "yandex.com",
]);

export function isConsumerEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? CONSUMER_DOMAINS.has(domain) : false;
}

export function required(value: string, label: string): string | undefined {
  if (!value || value.trim().length === 0) return `${label} is required.`;
  return undefined;
}

export function validEmail(value: string): string | undefined {
  if (!value || value.trim().length === 0)
    return "Business email is required.";
  if (!EMAIL_RE.test(value.trim()))
    return "Enter a valid email address.";
  return undefined;
}

export function minLength(
  value: string,
  n: number,
  label: string,
): string | undefined {
  if (value.trim().length > 0 && value.trim().length < n)
    return `${label} must be at least ${n} characters.`;
  return undefined;
}

export function maxLength(
  value: string,
  n: number,
  label: string,
): string | undefined {
  if (value.length > n) return `${label} must be ${n} characters or fewer.`;
  return undefined;
}

/** Permissive phone check — international formats vary too much to be strict. */
export function validPhoneOptional(value: string): string | undefined {
  if (!value || value.trim().length === 0) return undefined;
  if (!/^[+()\d\s.-]{6,24}$/.test(value.trim()))
    return "Enter a valid phone number, or leave this blank.";
  return undefined;
}

/* ==========================================================================
   Submission
   ========================================================================== */

export type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "unconfigured" };

export type SubmitArgs = {
  /** Flat field map. Values are sent as-is; the endpoint is authoritative. */
  values: Record<string, string | string[]>;
  /** Honeypot value — must be empty for a genuine submission. */
  honeypot: string;
  /** Epoch ms captured when the form mounted. */
  startedAt: number;
  /** Human-readable label so the receiving inbox can distinguish forms. */
  formName: string;
};

function buildPayload(args: SubmitArgs): Record<string, unknown> {
  const flattened: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(args.values)) {
    flattened[key] = Array.isArray(value) ? value.join(", ") : value;
  }
  return {
    ...flattened,
    _form: args.formName,
    // Most providers use `_subject` to set the notification subject line.
    _subject: `[${args.formName}] ${
      (args.values.company as string) || "New enquiry"
    }`,
  };
}

/**
 * Submits the form. Returns a SubmitState rather than throwing so callers can
 * render error states directly.
 */
export async function submitForm(args: SubmitArgs): Promise<SubmitState> {
  // Honeypot: a hidden field only an automated agent would populate.
  if (args.honeypot.trim().length > 0) {
    // Report success to the bot without sending anything onward.
    return { status: "success" };
  }

  // Timing check: forms completed implausibly fast are almost certainly bots.
  if (Date.now() - args.startedAt < MIN_FILL_TIME_MS) {
    return {
      status: "error",
      message: "That submission came through unusually fast. Please try again.",
    };
  }

  if (!isFormEndpointConfigured) {
    return { status: "unconfigured" };
  }

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(buildPayload(args)),
    });

    if (!response.ok) {
      return {
        status: "error",
        message:
          "We could not submit the form just now. Please try again, or email us directly.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message:
        "A network error prevented submission. Check your connection and try again.",
    };
  }
}

/**
 * Builds a mailto: fallback so a visitor is never left without a route to
 * contact us when the endpoint is unconfigured or unreachable.
 */
export function mailtoFallback(
  email: string,
  formName: string,
  values: Record<string, string | string[]>,
): string {
  const body = Object.entries(values)
    .filter(([, v]) => (Array.isArray(v) ? v.length > 0 : v.trim().length > 0))
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(
    `[${formName}]`,
  )}&body=${encodeURIComponent(body)}`;
}
