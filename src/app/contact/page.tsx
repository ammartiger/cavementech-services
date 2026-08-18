import type { Metadata } from "next";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { ContactMethods } from "@/components/forms/ContactMethods";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { contactLinks, site } from "@/content/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact & Request a Security Assessment",
  description:
    "Call, WhatsApp or email CavemenTech about managed SOC, MDR, penetration testing, security audits and PTA, SBP or ISO 27001 readiness — or send us your environment details for a scoped quote.",
  path: "/contact",
});

const WHAT_HAPPENS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "phone",
    title: "A person responds",
    body: "Your enquiry is read and answered by someone who does the work — not routed into an automated marketing sequence.",
  },
  {
    icon: "search",
    title: "We scope honestly",
    body: "If a smaller engagement answers your question, we say so — including when the honest answer is that you don't need us yet.",
  },
  {
    icon: "report",
    title: "You get it in writing",
    body: "A proposed scope, an approach, a timeline and a price in rupees that you can take to a budget holder.",
  },
];

const NO_SURPRISES = [
  "No obligation to proceed",
  "Pricing quoted in PKR, fixed in writing",
  "Your details used only to respond to you",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title="Talk to a security expert."
        lead="Call, message or email us directly — or send your environment details below and we'll come back with a scoped proposal. Whether you know exactly what you need or only that something isn't right, a scoping conversation costs you nothing."
      />

      {/* -------------------- Direct contact, first -------------------- */}
      <Section spacing="tight" aria-labelledby="reach-heading">
        <div className="container-x">
          <h2 id="reach-heading" className="mono-label text-brand">
            Reach us directly
          </h2>
          <div className="mt-6">
            <ContactMethods />
          </div>
        </div>
      </Section>

      {/* -------------------- Urgent / disclosure notices -------------------- */}
      <Section spacing="tight">
        <div className="container-x">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal className="rounded-xl border border-sev-critical/30 bg-sev-critical/6 p-6">
              <div className="flex items-start gap-3">
                <Icon
                  name="siren"
                  className="mt-0.5 size-[1.125rem] shrink-0 text-sev-critical"
                />
                <div>
                  <p className="text-[0.9375rem] font-medium text-ink">
                    Dealing with an active incident?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Call{" "}
                    <a
                      href={contactLinks.tel}
                      className="font-medium text-ink underline underline-offset-4 hover:text-brand"
                    >
                      {site.contact.phone}
                    </a>{" "}
                    rather than filling in the form. Existing customers should
                    use the escalation path agreed during onboarding.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="rounded-xl border border-line bg-surface-2/50 p-6">
              <div className="flex items-start gap-3">
                <Icon
                  name="shield"
                  className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
                />
                <div>
                  <p className="text-[0.9375rem] font-medium text-ink">
                    Reporting a vulnerability?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Please follow the process on our{" "}
                    <a
                      href="/security"
                      className="text-brand underline underline-offset-4 hover:text-brand-bright"
                    >
                      security page
                    </a>{" "}
                    rather than using this form, so it reaches the right people.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------- Assessment form -------------------- */}
      <Section id="assessment" divider aria-labelledby="assessment-heading">
        <div className="container-x">
          <SectionHeading
            id="assessment-heading"
            eyebrow="Security assessment"
            title="Or send us your environment details."
            lead="The more we know about what you run, the more useful and more accurate our first response will be. Nothing here commits you to anything."
            maxWidth="max-w-2xl"
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
            <AssessmentForm />

            <aside className="lg:pt-2">
              <Reveal>
                <h3 className="mono-label text-brand">What happens next</h3>
                <ul className="mt-6 space-y-6">
                  {WHAT_HAPPENS.map((item, i) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-brand/80">
                        <Icon name={item.icon} className="size-4" />
                      </span>
                      <div>
                        <p className="text-[0.9375rem] font-medium text-ink">
                          <span className="mr-2 font-mono text-xs text-ink-faint">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={120}
                className="mt-9 rounded-xl border border-line bg-surface-2/50 p-6"
              >
                <ul className="space-y-3">
                  {NO_SURPRISES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 size-4 shrink-0 text-active"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={180}
                className="mt-6 rounded-xl border border-brand/25 bg-linear-to-br from-brand/8 to-transparent p-6"
              >
                <p className="text-sm leading-relaxed text-ink-muted">
                  Prefer not to fill in a form? Call{" "}
                  <a
                    href={contactLinks.tel}
                    className="font-medium text-brand underline underline-offset-4 hover:text-brand-bright"
                  >
                    {site.contact.phone}
                  </a>{" "}
                  or message us on{" "}
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand underline underline-offset-4 hover:text-brand-bright"
                  >
                    WhatsApp
                  </a>
                  . We can gather the same details in a five-minute
                  conversation.
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
