"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  CheckboxGroup,
  Honeypot,
  SelectField,
  TextArea,
  TextField,
} from "./Field";
import { FormFeedback, Spinner, SuccessPanel } from "./FormStatus";
import {
  maxLength,
  minLength,
  required,
  submitForm,
  validEmail,
  validPhoneOptional,
  type FieldErrors,
  type SubmitState,
} from "@/lib/forms";

const FORM_NAME = "Contact Enquiry";

const EMPLOYEES = [
  "1–20",
  "21–50",
  "51–200",
  "201–500",
  "501–1,000",
  "1,000+",
] as const;

const ENDPOINTS = [
  "Under 50",
  "50–150",
  "150–500",
  "500–1,500",
  "1,500+",
] as const;

const SERVICES = [
  "Managed SOC / MDR",
  "Penetration Testing",
  "Security Audit",
  "Compliance",
  "Incident Response",
  "Security Assessment",
] as const;

type Values = {
  name: string;
  company: string;
  email: string;
  phone: string;
  employees: string;
  endpoints: string;
  securityStack: string;
  message: string;
};

const INITIAL: Values = {
  name: "",
  company: "",
  email: "",
  phone: "",
  employees: "",
  endpoints: "",
  securityStack: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<Values>(INITIAL);
  const [services, setServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const startedAt = useRef(Date.now());
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  /* Incremented on every rejected submit. The focus effect keys off this
     rather than off `errors`, so it fires once per failed attempt and does not
     steal focus again while the visitor is correcting fields. */
  const [failedAttempt, setFailedAttempt] = useState(0);

  useEffect(() => {
    // Runs after the error summary has rendered, so the ref is populated —
    // a requestAnimationFrame call inside the submit handler fires too early.
    if (failedAttempt > 0) errorSummaryRef.current?.focus();
  }, [failedAttempt]);

  const set = (key: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: "" } : e));
  };

  const payload = useMemo(() => ({ ...values, services }), [values, services]);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    const nameError = required(values.name, "Name");
    if (nameError) next.name = nameError;

    const companyError = required(values.company, "Company");
    if (companyError) next.company = companyError;

    const emailError = validEmail(values.email);
    if (emailError) next.email = emailError;

    const phoneError = validPhoneOptional(values.phone);
    if (phoneError) next.phone = phoneError;

    const messageRequired = required(values.message, "Message");
    if (messageRequired) next.message = messageRequired;
    else {
      const tooShort = minLength(values.message, 20, "Message");
      if (tooShort) next.message = tooShort;
      const tooLong = maxLength(values.message, 4000, "Message");
      if (tooLong) next.message = tooLong;
    }

    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.values(found).some(Boolean)) {
      setFailedAttempt((n) => n + 1);
      return;
    }

    setState({ status: "submitting" });
    const result = await submitForm({
      values: payload,
      honeypot,
      startedAt: startedAt.current,
      formName: FORM_NAME,
    });
    setState(result);
  }

  if (state.status === "success") {
    return (
      <SuccessPanel
        title="Message received."
        body="Thank you for getting in touch. We'll respond to your enquiry directly — if it's time-sensitive, say so in a follow-up and we'll prioritise it."
      />
    );
  }

  const errorList = Object.entries(errors).filter(([, v]) => v);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="panel-lit hairline-top relative p-6 sm:p-8"
    >
      <Honeypot value={honeypot} onChange={setHoneypot} />

      {errorList.length > 0 ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-7 rounded-xl border border-sev-critical/40 bg-sev-critical/8 p-5 outline-none"
        >
          <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
            <Icon name="alert" className="size-4 text-sev-critical" />
            {errorList.length === 1
              ? "There is 1 problem with this form"
              : `There are ${errorList.length} problems with this form`}
          </p>
          <ul className="mt-2.5 space-y-1 pl-6 text-sm text-ink-muted">
            {errorList.map(([key, message]) => (
              <li key={key} className="list-disc">
                {message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          required
          autoComplete="name"
        />
        <TextField
          id="company"
          label="Company"
          value={values.company}
          onChange={set("company")}
          error={errors.company}
          required
          autoComplete="organization"
        />
        <TextField
          id="email"
          label="Business email"
          type="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          required
          autoComplete="email"
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          autoComplete="tel"
        />
        <SelectField
          id="employees"
          label="Number of employees"
          value={values.employees}
          onChange={set("employees")}
          options={EMPLOYEES}
        />
        <SelectField
          id="endpoints"
          label="Number of endpoints"
          value={values.endpoints}
          onChange={set("endpoints")}
          options={ENDPOINTS}
        />
        <TextField
          id="securityStack"
          label="Current security stack"
          value={values.securityStack}
          onChange={set("securityStack")}
          placeholder="e.g. Microsoft Defender, Fortinet, no SIEM"
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-7">
        <CheckboxGroup
          legend="Services you're interested in"
          options={SERVICES}
          selected={services}
          onToggle={(option) =>
            setServices((s) =>
              s.includes(option) ? s.filter((x) => x !== option) : [...s, option],
            )
          }
        />
      </div>

      <div className="mt-7">
        <TextArea
          id="message"
          label="Message"
          value={values.message}
          onChange={set("message")}
          error={errors.message}
          required
          rows={6}
          placeholder="Tell us what you're trying to solve. The more context you give, the more useful our first response will be."
        />
      </div>

      <div className="mt-8 space-y-5 border-t border-line pt-8">
        <FormFeedback state={state} formName={FORM_NAME} values={payload} />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            size="lg"
            disabled={state.status === "submitting"}
            className="w-full sm:w-auto"
          >
            {state.status === "submitting" ? (
              <span className="flex items-center gap-2">
                <Spinner />
                Sending…
              </span>
            ) : (
              "Request a Security Assessment"
            )}
          </Button>
          <p className="text-xs leading-relaxed text-ink-faint sm:max-w-xs">
            We use these details only to respond to your enquiry. See our{" "}
            <a
              href="/privacy"
              className="text-ink-subtle underline underline-offset-2 hover:text-brand"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
