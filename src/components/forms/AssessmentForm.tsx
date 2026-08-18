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
  isConsumerEmail,
  maxLength,
  required,
  submitForm,
  validEmail,
  validPhoneOptional,
  type FieldErrors,
  type SubmitState,
} from "@/lib/forms";

const FORM_NAME = "Security Assessment Request";

const COMPANY_SIZE = [
  "1–20 employees",
  "21–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,000+ employees",
] as const;

const ENDPOINT_COUNT = [
  "Under 50",
  "50–150",
  "150–500",
  "500–1,500",
  "1,500+",
] as const;

const SERVER_COUNT = ["None", "1–10", "11–50", "51–150", "150+"] as const;

const CLOUD_ENV = [
  "Microsoft 365 / Entra ID",
  "Microsoft Azure",
  "Amazon Web Services",
  "Google Cloud",
  "Multiple cloud providers",
  "On-premises only",
  "Not sure",
] as const;

const MONITORING_HOURS = [
  "Business hours",
  "Extended hours",
  "24/7",
  "Not sure yet — advise us",
] as const;

const SECURITY_TEAM = [
  "No dedicated security staff",
  "IT team handles security",
  "One security specialist",
  "Small security team (2–5)",
  "Established security team (6+)",
  "Outsourced to an MSP",
] as const;

const SERVICES = [
  "Managed SOC / MDR",
  "Penetration Testing",
  "Security Audit",
  "Compliance / ISO 27001 Readiness",
  "Incident Response",
  "Active Directory Assessment",
  "Cloud Security Assessment",
  "Not sure — advise us",
] as const;

const TIMELINE = [
  "Immediate — active concern",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Researching / budgeting",
] as const;

type Values = {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  companySize: string;
  endpoints: string;
  servers: string;
  cloud: string;
  securityTools: string;
  monitoringHours: string;
  securityTeam: string;
  compliance: string;
  timeline: string;
  message: string;
};

const INITIAL: Values = {
  name: "",
  company: "",
  email: "",
  phone: "",
  role: "",
  companySize: "",
  endpoints: "",
  servers: "",
  cloud: "",
  securityTools: "",
  monitoringHours: "",
  securityTeam: "",
  compliance: "",
  timeline: "",
  message: "",
};

export function AssessmentForm() {
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
    // Clear the field error as soon as the visitor starts correcting it.
    setErrors((e) => (e[key] ? { ...e, [key]: "" } : e));
  };

  const payload = useMemo(
    () => ({ ...values, services }),
    [values, services],
  );

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

    if (!values.companySize) next.companySize = "Select a company size.";
    if (!values.endpoints) next.endpoints = "Select an approximate count.";
    if (services.length === 0)
      next.services = "Select at least one service you're interested in.";

    const messageError = maxLength(values.message, 4000, "Message");
    if (messageError) next.message = messageError;

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
        title="Assessment request received."
        body="Thank you. We'll review the details you've provided and come back with a proposed scope, the questions we still need answered, and how we'd suggest sequencing the work."
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

      {/* Error summary */}
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

      {/* ---------------- Contact ---------------- */}
      <fieldset>
        <legend className="mono-label mb-5 text-brand">
          01 — Who we&apos;re speaking to
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="name"
            label="Full name"
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
            hint={
              values.email && isConsumerEmail(values.email)
                ? "A company address helps us verify the enquiry faster."
                : undefined
            }
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
          <TextField
            id="role"
            label="Role"
            value={values.role}
            onChange={set("role")}
            placeholder="e.g. IT Manager, CTO, Head of Risk"
            className="sm:col-span-2"
          />
        </div>
      </fieldset>

      {/* ---------------- Environment ---------------- */}
      <fieldset className="mt-10 border-t border-line pt-8">
        <legend className="mono-label mb-5 text-brand">
          02 — Your environment
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            id="companySize"
            label="Company size"
            value={values.companySize}
            onChange={set("companySize")}
            options={COMPANY_SIZE}
            error={errors.companySize}
            required
          />
          <SelectField
            id="endpoints"
            label="Approximate endpoints"
            value={values.endpoints}
            onChange={set("endpoints")}
            options={ENDPOINT_COUNT}
            error={errors.endpoints}
            hint="Laptops, desktops and mobile devices."
            required
          />
          <SelectField
            id="servers"
            label="Approximate servers"
            value={values.servers}
            onChange={set("servers")}
            options={SERVER_COUNT}
          />
          <SelectField
            id="cloud"
            label="Cloud environment"
            value={values.cloud}
            onChange={set("cloud")}
            options={CLOUD_ENV}
          />
          <SelectField
            id="securityTeam"
            label="Current security capability"
            value={values.securityTeam}
            onChange={set("securityTeam")}
            options={SECURITY_TEAM}
          />
          <SelectField
            id="monitoringHours"
            label="Desired monitoring coverage"
            value={values.monitoringHours}
            onChange={set("monitoringHours")}
            options={MONITORING_HOURS}
          />
          <TextField
            id="securityTools"
            label="Existing security tools"
            value={values.securityTools}
            onChange={set("securityTools")}
            placeholder="e.g. Microsoft Defender, firewall vendor, SIEM"
            className="sm:col-span-2"
          />
          <TextField
            id="compliance"
            label="Compliance requirements"
            value={values.compliance}
            onChange={set("compliance")}
            placeholder="e.g. ISO 27001, customer security questionnaires, sector regulation"
            className="sm:col-span-2"
          />
        </div>
      </fieldset>

      {/* ---------------- Interest ---------------- */}
      <fieldset className="mt-10 border-t border-line pt-8">
        <legend className="mono-label mb-5 text-brand">
          03 — What you&apos;re looking for
        </legend>
        <CheckboxGroup
          legend="Services of interest"
          options={SERVICES}
          selected={services}
          onToggle={(option) => {
            setServices((s) =>
              s.includes(option)
                ? s.filter((x) => x !== option)
                : [...s, option],
            );
            setErrors((e) => (e.services ? { ...e, services: "" } : e));
          }}
          error={errors.services}
          required
        />
        <div className="mt-5 grid gap-5">
          <SelectField
            id="timeline"
            label="Timeline"
            value={values.timeline}
            onChange={set("timeline")}
            options={TIMELINE}
          />
          <TextArea
            id="message"
            label="What's prompting this?"
            value={values.message}
            onChange={set("message")}
            error={errors.message}
            placeholder="A customer requirement, a recent incident, an audit, board pressure, or simply not knowing where you stand. Anything you can share helps us scope accurately."
            rows={5}
          />
        </div>
      </fieldset>

      {/* ---------------- Submit ---------------- */}
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
