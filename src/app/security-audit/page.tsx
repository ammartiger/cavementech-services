import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, CheckList, IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { FaqList } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { auditServices } from "@/content/services";
import { auditFaqs } from "@/content/faq";
import { pageMeta, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Security Audits & Compliance",
  description:
    "Cybersecurity gap assessments, security audits, risk assessments, ISO 27001 readiness support, policy review and vendor security assessment.",
  path: "/security-audit",
});

const PHASES = [
  {
    step: "01",
    title: "Establish scope",
    body: "What is in scope, which framework or requirement set applies, and what evidence already exists.",
  },
  {
    step: "02",
    title: "Assess",
    body: "Technical control verification, configuration review, documentation review and interviews with the people who operate the controls.",
  },
  {
    step: "03",
    title: "Analyse the gap",
    body: "Where controls are absent, partially implemented, documented but not operating, or operating but not evidenced.",
  },
  {
    step: "04",
    title: "Report & prioritise",
    body: "Findings with business context and a remediation roadmap sequenced by risk reduction and realistic effort.",
  },
  {
    step: "05",
    title: "Support remediation",
    body: "Optional delivery support, including implementing monitoring for gaps that need ongoing detection rather than a one-time fix.",
  },
];

export default function SecurityAuditPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Security Audits & Compliance",
          serviceType: "Security Assessment and Compliance Readiness",
          description:
            "Independent security audits, cybersecurity gap assessments, risk assessments and ISO 27001 readiness support.",
          path: "/security-audit",
        })}
      />
      <JsonLd data={faqSchema(auditFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Security Audits & Compliance", path: "/security-audit" },
        ])}
      />

      <PageHero
        eyebrow="Security assurance"
        crumbs={[{ label: "Security Audits & Compliance" }]}
        title="Know where your controls actually stand."
        lead="Independent assessment of what is implemented, what is documented, and the distance between the two — with a remediation plan you can actually execute."
        primary={{
          label: "Assess Your Security Posture",
          href: "/request-assessment",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
      />

      {/* -------------------- Scope of accreditation notice -------------------- */}
      <Section spacing="tight" aria-labelledby="scope-heading">
        <div className="container-x">
          <Reveal className="rounded-2xl border border-signal/25 bg-signal/5 p-7 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-signal/30 bg-signal/10 text-signal">
                <Icon name="info" className="size-[1.375rem]" />
              </span>
              <div>
                <h2 id="scope-heading" className="text-h3 text-ink">
                  Readiness and assessment support — not certification
                </h2>
                <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-ink-muted">
                  Formal certification against standards such as ISO/IEC 27001
                  can only be issued by an accredited certification body. We are
                  not one, and we don&apos;t imply otherwise. What we provide is
                  the work that comes before and around it: gap analysis, control
                  implementation guidance, documentation support, independent
                  assessment, and internal readiness review before your external
                  audit.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------- Services -------------------- */}
      <Section aria-labelledby="assurance-heading">
        <div className="container-x">
          <SectionHeading
            id="assurance-heading"
            eyebrow="Engagements"
            title="Assessment work, matched to the question you're being asked."
            lead="A customer security questionnaire, a board risk review and a certification programme need different work. Buying the wrong one wastes a budget cycle."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {auditServices.map((service, i) => (
              <Reveal key={service.id} id={service.id} delay={(i % 2) * 70}>
                <Card className="h-full scroll-mt-28">
                  <div className="flex items-start gap-4">
                    <IconTile name="clipboard-check" tone="neutral" />
                    <div>
                      <h2 className="text-h3 text-ink">{service.title}</h2>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="mono-label mb-4 text-ink-subtle">Covers</p>
                    <CheckList items={service.scope} tone="signal" />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------- Delivery phases -------------------- */}
      <Section tone="raised" divider aria-labelledby="phases-heading">
        <div className="container-x">
          <SectionHeading
            id="phases-heading"
            eyebrow="How an assessment runs"
            title="Five phases, with a defined output at each."
            lead="You should know at the outset what you will have at the end, and be able to tell whether it arrived."
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {PHASES.map((phase, i) => (
              <Reveal
                as="li"
                key={phase.step}
                delay={i * 60}
                className="bg-surface p-6"
              >
                <span className="font-mono text-2xl font-medium text-brand/30">
                  {phase.step}
                </span>
                <h3 className="mt-3 text-[0.9375rem] font-semibold text-ink">
                  {phase.title}
                </h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                  {phase.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* -------------------- FAQ -------------------- */}
      <Section aria-labelledby="audit-faq-heading">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <SectionHeading
              id="audit-faq-heading"
              eyebrow="Questions"
              title="Audits and compliance, answered."
              maxWidth="max-w-md"
            />
            <Reveal delay={80}>
              <FaqList faqs={auditFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Next step"
        title="Establish your actual position."
        body="Tell us what's driving the assessment — a customer requirement, a certification target, a board question or a genuine unknown — and we'll scope the work that answers it."
        primary={{
          label: "Assess Your Security Posture",
          href: "/request-assessment",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
      />
    </>
  );
}
