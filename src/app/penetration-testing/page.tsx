import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, CheckList, IconTile } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FaqList } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { ValidationLoop } from "@/components/viz/ValidationLoop";
import { pentestServices } from "@/content/services";
import { pentestFaqs } from "@/content/faq";
import { pageMeta, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Penetration Testing Services",
  description:
    "External and internal network penetration testing, web application and API security testing, Active Directory security assessment, cloud security review and red/purple team exercises.",
  path: "/penetration-testing",
});

const ICONS: Record<string, IconName> = {
  "external-network": "cloud",
  "internal-network": "route",
  "web-application": "app",
  "api-security": "git-branch",
  "active-directory": "identity",
  "cloud-security": "layers",
  "red-purple-team": "target",
};

const DELIVERABLES = [
  {
    icon: "report" as const,
    title: "Technical report",
    body: "Every finding with reproduction steps, evidence, affected assets and a severity rating grounded in demonstrated impact rather than a generic CVSS lookup.",
  },
  {
    icon: "route" as const,
    title: "Attack path narrative",
    body: "The chain, start to finish: initial access, escalation, movement and objective. This is what makes a report useful to people who have to prioritise the fix.",
  },
  {
    icon: "clipboard-check" as const,
    title: "Prioritised remediation",
    body: "What to fix first, what can wait, and which items are structural rather than a patch. Sequenced by risk reduction per unit of effort.",
  },
  {
    icon: "users" as const,
    title: "Walkthrough & retest",
    body: "A session with your technical team to work through the findings, and retesting to confirm remediation actually closed what it was meant to.",
  },
];

export default function PenetrationTestingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Penetration Testing",
          serviceType: "Penetration Testing and Offensive Security",
          description:
            "Scoped, authorised penetration testing across network, web application, API, Active Directory and cloud environments, including red and purple team exercises.",
          path: "/penetration-testing",
        })}
      />
      <JsonLd data={faqSchema(pentestFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Penetration Testing", path: "/penetration-testing" },
        ])}
      />

      <PageHero
        eyebrow="Offensive security"
        crumbs={[{ label: "Penetration Testing" }]}
        title="Find the path an attacker would take."
        lead="Scoped, authorised testing that establishes what is genuinely reachable, what it leads to, and what it would cost the business — evidenced, chained and manually verified."
        primary={{
          label: "Request a Penetration Test",
          href: "/request-assessment",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
      />

      {/* -------------------- Engagements -------------------- */}
      <Section aria-labelledby="engagements-heading">
        <div className="container-x">
          <SectionHeading
            id="engagements-heading"
            eyebrow="Engagements"
            title="Testing scoped to how your environment is actually built."
            lead="Each engagement type answers a different question. Most organisations need a combination, sequenced over time rather than bought all at once."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {pentestServices.map((service, i) => (
              <Reveal key={service.id} id={service.id} delay={(i % 2) * 80}>
                <Card className="h-full scroll-mt-28">
                  <div className="flex items-start gap-4">
                    <IconTile name={ICONS[service.id] ?? "bug"} />
                    <div>
                      <h2 className="text-h3 text-ink">{service.title}</h2>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="mono-label mb-4 text-ink-subtle">
                      Typical scope
                    </p>
                    <CheckList items={service.scope} />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* -------------------- Validation loop -------------------- */}
      <Section tone="raised" divider aria-labelledby="validate-heading">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                id="validate-heading"
                eyebrow="Purple team"
                title="Testing that improves your detection, not just your patch list."
                lead="A finding that gets fixed protects you against that one issue. A finding that also becomes detection content protects you against the whole technique."
                maxWidth="max-w-xl"
              />
              <Reveal delay={100} className="mt-8 space-y-4">
                <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                  Because we run the SOC as well, an engagement can be executed
                  against live monitoring: each technique is mapped to whether it
                  was detected, how quickly, and what the analyst saw.
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                  What was missed gets written into detection content during the
                  exercise, then re-tested. That is the difference between a
                  report and an improvement.
                </p>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ValidationLoop className="mx-auto h-auto w-full max-w-[32rem]" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------- Deliverables -------------------- */}
      <Section aria-labelledby="deliverables-heading">
        <div className="container-x">
          <SectionHeading
            id="deliverables-heading"
            eyebrow="What you receive"
            title="A report your engineers will actually use."
            lead="Findings without reproduction steps, evidence or prioritisation create work rather than reducing risk."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <Card className="h-full">
                  <IconTile name={item.icon} tone="neutral" />
                  <h3 className="mt-5 text-h3 text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={80}
            className="mt-10 rounded-xl border border-line bg-surface-2/50 p-6"
          >
            <div className="flex items-start gap-3">
              <Icon
                name="info"
                className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
              />
              <p className="text-sm leading-relaxed text-ink-muted">
                Rules of engagement, testing windows, out-of-scope systems and
                escalation contacts are agreed in writing before any testing
                begins. Individual tester certifications are provided on request
                during scoping — we don&apos;t publish credential badges we
                haven&apos;t verified against the specific people who would run
                your engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------- FAQ -------------------- */}
      <Section tone="raised" divider aria-labelledby="pentest-faq-heading">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <SectionHeading
              id="pentest-faq-heading"
              eyebrow="Questions"
              title="Penetration testing, answered."
              maxWidth="max-w-md"
            />
            <Reveal delay={80}>
              <FaqList faqs={pentestFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Next step"
        title="Scope a penetration test."
        body="Tell us what you want tested and why. We'll come back with a scope, an approach and a timeline — and tell you if a different engagement would serve you better."
        primary={{
          label: "Request a Penetration Test",
          href: "/request-assessment",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
      />
    </>
  );
}
