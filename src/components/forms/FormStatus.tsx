"use client";

import { Icon } from "@/components/ui/Icon";
import { Detail } from "@/components/ui/Placeholder";
import { site, isPlaceholder } from "@/content/site";
import { mailtoFallback, type SubmitState } from "@/lib/forms";

/** Inline spinner used on the submit button. */
export function Spinner({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} motion-flow animate-spin`}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.5"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SuccessPanel({
  title = "Request received.",
  body = "Thank you. We'll review what you've sent and respond with next steps and any questions we need answered to scope properly.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div
      role="status"
      className="panel-lit hairline-top flex flex-col items-center p-10 text-center"
    >
      <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-active/30 bg-active/10 text-active">
        <Icon name="shield-check" className="size-7" />
      </span>
      <h3 className="mt-6 text-h3 text-ink">{title}</h3>
      <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">
        {body}
      </p>
    </div>
  );
}

/**
 * Rendered when NEXT_PUBLIC_FORM_ENDPOINT has not been configured.
 *
 * Rather than silently failing or pretending to submit, the form tells the
 * visitor plainly and hands them a working mailto: fallback carrying everything
 * they already typed — so a genuine enquiry is never lost to a missing
 * configuration value.
 */
export function UnconfiguredPanel({
  formName,
  values,
}: {
  formName: string;
  values: Record<string, string | string[]>;
}) {
  const email = site.contact.email;
  const pending = isPlaceholder(email);

  return (
    <div
      role="status"
      className="rounded-xl border border-brand/30 bg-brand/6 p-6"
    >
      <div className="flex items-start gap-3">
        <Icon name="info" className="mt-0.5 size-5 shrink-0 text-brand" />
        <div>
          <p className="text-[0.9375rem] font-medium text-ink">
            Form delivery is not connected yet
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            This site is deployed as a static build, so submissions are handled
            by a form endpoint that has not been configured. Set{" "}
            <code className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[0.75rem] text-ink">
              NEXT_PUBLIC_FORM_ENDPOINT
            </code>{" "}
            at build time to enable it.
          </p>

          {pending ? (
            <p className="mt-3 text-sm text-ink-muted">
              In the meantime, contact us at <Detail value={email} />.
            </p>
          ) : (
            <a
              href={mailtoFallback(email, formName, values)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface-2 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand/50"
            >
              <Icon name="mail" className="size-4" />
              Send this as an email instead
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ErrorPanel({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-sev-critical/40 bg-sev-critical/8 p-5"
    >
      <div className="flex items-start gap-3">
        <Icon
          name="alert"
          className="mt-0.5 size-[1.125rem] shrink-0 text-sev-critical"
        />
        <div>
          <p className="text-[0.9375rem] font-medium text-ink">
            Submission failed
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Renders whichever non-idle state applies, above the form actions. */
export function FormFeedback({
  state,
  formName,
  values,
}: {
  state: SubmitState;
  formName: string;
  values: Record<string, string | string[]>;
}) {
  if (state.status === "error") return <ErrorPanel message={state.message} />;
  if (state.status === "unconfigured")
    return <UnconfiguredPanel formName={formName} values={values} />;
  return null;
}
