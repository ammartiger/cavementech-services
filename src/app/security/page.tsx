import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Security & Vulnerability Disclosure",
  description:
    "How to report a security vulnerability in CavemenTech Security Services infrastructure, and what is in and out of scope.",
  path: "/security",
});

const IN_SCOPE = [
  "This website (services.cavementech.com)",
  "Publicly reachable infrastructure we operate",
];

const OUT_OF_SCOPE = [
  "Denial-of-service or volumetric testing of any kind",
  "Social engineering of staff, customers or suppliers",
  "Physical security testing",
  "Automated scanning that degrades availability for others",
  "Any customer environment we monitor — those are not ours to authorise",
  "Reports generated solely by automated scanners with no demonstrated impact",
];

const EXPECTATIONS = [
  {
    title: "Report privately, first",
    body: "Give us a reasonable opportunity to remediate before any public disclosure. We will keep you updated on progress rather than going quiet.",
  },
  {
    title: "Include enough to reproduce",
    body: "Clear steps, the affected URL or component, and what impact you were able to demonstrate. A proof of concept is more useful than a severity label.",
  },
  {
    title: "Minimise impact",
    body: "Use only the access needed to demonstrate the issue. Do not access, modify or exfiltrate data belonging to anyone else, and stop as soon as impact is established.",
  },
  {
    title: "No compensation offered",
    body: "We do not currently operate a paid bug bounty. We will acknowledge your report and, if you want, credit you once the issue is resolved.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        crumbs={[{ label: "Security" }]}
        title="Vulnerability disclosure."
        lead="We run offensive security engagements for a living, so we know what a good disclosure process looks like. Here is ours."
      />

      {/* Contact */}
      <Section spacing="tight">
        <div className="container-x">
          <Reveal className="panel-lit hairline-top p-7 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                <Icon name="shield-check" className="size-6" />
              </span>
              <div>
                <h2 className="text-h3 text-ink">Report a vulnerability</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Email your report to{" "}
                  <a
                    href={`mailto:${site.contact.securityEmail}?subject=${encodeURIComponent(
                      "Security vulnerability report",
                    )}`}
                    className="font-medium text-brand underline underline-offset-4 hover:text-brand-bright"
                  >
                    {site.contact.securityEmail}
                  </a>{" "}
                  with &ldquo;Security vulnerability report&rdquo; in the
                  subject line. We aim to acknowledge reports promptly and will
                  tell you what we intend to do about the issue and roughly
                  when.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-subtle">
                  Please use email rather than the contact form for security
                  reports, so it is triaged as a disclosure rather than a sales
                  enquiry.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Scope */}
      <Section spacing="tight" aria-labelledby="scope-heading">
        <div className="container-x">
          <SectionHeading
            id="scope-heading"
            eyebrow="Scope"
            title="What is authorised, and what isn't."
            lead="Testing outside the scope below is not authorised. That matters here more than most places: under the Prevention of Electronic Crimes Act 2016, unauthorised access to an information system is a criminal offence in Pakistan — and we cannot consent on behalf of customers whose environments we monitor."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="panel-lit hairline-top p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-active/30 bg-active/10 text-active">
                  <Icon name="check" className="size-4" strokeWidth={2.5} />
                </span>
                <h3 className="text-h3 text-ink">In scope</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {IN_SCOPE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] text-ink-muted"
                  >
                    <Icon
                      name="check"
                      className="mt-1 size-4 shrink-0 text-active"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="panel-lit hairline-top p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-sev-critical/30 bg-sev-critical/10 text-sev-critical">
                  <Icon name="close" className="size-4" strokeWidth={2.5} />
                </span>
                <h3 className="text-h3 text-ink">Out of scope</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {OUT_OF_SCOPE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] text-ink-muted"
                  >
                    <Icon
                      name="close"
                      className="mt-1 size-3.5 shrink-0 text-sev-critical/70"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Expectations */}
      <Section spacing="tight" aria-labelledby="expectations-heading">
        <div className="container-x">
          <SectionHeading
            id="expectations-heading"
            eyebrow="Ground rules"
            title="What we ask, and what you get."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {EXPECTATIONS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 70}
                className="rounded-xl border border-line bg-surface-2/40 p-6"
              >
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Site security posture — honest about static hosting constraints */}
      <Section spacing="tight" aria-labelledby="posture-heading">
        <div className="container-x">
          <Reveal className="rounded-xl border border-line bg-surface-2/50 p-7">
            <div className="flex items-start gap-3">
              <Icon
                name="info"
                className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
              />
              <div>
                <h2 id="posture-heading" className="text-h3 text-ink">
                  About this site
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  This is a static site. It holds no database, runs no
                  server-side application code, and stores no credentials or
                  secrets in the client bundle. Form submissions are sent
                  directly to a third-party form provider — validation, rate
                  limiting and abuse protection are enforced there.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  A Content-Security-Policy is applied. Some hardening headers —
                  notably frame-ancestors, HSTS preload and
                  X-Content-Type-Options — require response-header control that
                  the current static host does not provide. We would rather state
                  that plainly than imply protection that isn&apos;t in place.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
