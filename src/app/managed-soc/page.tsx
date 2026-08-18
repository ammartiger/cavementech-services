import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile, IllustrativeNotice } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { FaqList } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArchitectureSection } from "@/components/soc/ArchitectureSection";
import { HowItWorksSection } from "@/components/soc/HowItWorksSection";
import { AlertFlowSection } from "@/components/soc/AlertFlowSection";
import { SlaSection } from "@/components/services/SlaSection";
import { CtaSection } from "@/components/services/CtaSection";
import { TenancyDiagram } from "@/components/viz/TenancyDiagram";
import { CustomerPortal } from "@/components/viz/CustomerPortal";
import { socCapabilities } from "@/content/soc";
import { socFaqs } from "@/content/faq";
import { pageMeta, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Managed SOC & MDR Services",
  description:
    "Managed SOC and MDR: continuous monitoring, alert triage, threat detection, analyst-led investigation, incident response and threat hunting, scoped to your environment.",
  path: "/managed-soc",
});

const CAPABILITY_ICONS: Record<string, IconName> = {
  "continuous-monitoring": "radar",
  "alert-triage": "filter",
  "threat-detection": "target",
  investigation: "search",
  "incident-response": "siren",
  "threat-hunting": "crosshair",
  "security-reporting": "report",
};

export default function ManagedSocPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Managed SOC & MDR",
          serviceType: "Managed Detection and Response",
          description:
            "Continuous security monitoring, threat detection, analyst-led investigation and coordinated incident response.",
          path: "/managed-soc",
        })}
      />
      <JsonLd data={faqSchema(socFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Managed SOC / MDR", path: "/managed-soc" },
        ])}
      />

      <PageHero
        eyebrow="Managed SOC / MDR"
        crumbs={[{ label: "Managed SOC / MDR" }]}
        title="Security operations, delivered as a service."
        lead="Managed Detection and Response (MDR) gives you the capability of an internal security operations centre — telemetry, detection, investigation and response — without building, staffing or retaining one."
        primary={{
          label: "Request a Security Assessment",
          href: "/request-assessment",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
        aside={
          <div>
            <CustomerPortal />
            <IllustrativeNotice className="mt-3" />
          </div>
        }
      />

      {/* -------------------- Capabilities in depth -------------------- */}
      <Section aria-labelledby="capabilities-heading">
        <div className="container-x">
          <SectionHeading
            id="capabilities-heading"
            eyebrow="What's included"
            title="Seven functions that have to work together."
            lead="Buying any one of these in isolation produces data. Running them as a single operation produces security outcomes."
          />

          <div className="mt-14 space-y-5">
            {socCapabilities.map((cap, i) => (
              <Reveal key={cap.id} delay={(i % 3) * 60} id={cap.id}>
                <Card className="scroll-mt-28">
                  <div className="grid gap-6 lg:grid-cols-[auto_1fr_1.4fr] lg:items-start lg:gap-10">
                    <IconTile name={CAPABILITY_ICONS[cap.id] ?? "shield"} />
                    <div>
                      <h3 className="text-h3 text-ink">{cap.title}</h3>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                        {cap.summary}
                      </p>
                    </div>
                    <div className="space-y-3 border-line pt-1 lg:border-l lg:pl-10">
                      {cap.detail.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[0.9375rem] leading-relaxed text-ink-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ArchitectureSection />
      <AlertFlowSection />
      <HowItWorksSection />

      {/* -------------------- Customer separation -------------------- */}
      <Section
        id="architecture-separation"
        tone="raised"
        divider
        aria-labelledby="separation-heading"
      >
        <div className="container-x">
          <SectionHeading
            id="separation-heading"
            eyebrow="Security architecture"
            title="Your data stays yours."
            lead="Analysts operate across monitored environments so expertise compounds. Customer data does not travel with them — each environment is logically separated and access-controlled."
            align="center"
            maxWidth="max-w-3xl"
          />

          <Reveal className="mt-14">
            <div className="panel-lit hairline-top p-4 sm:p-7">
              <div className="scroll-x -mx-4 px-4 sm:mx-0 sm:px-0">
                <TenancyDiagram className="h-auto w-full min-w-[36rem]" />
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-8 max-w-3xl">
            <IllustrativeNotice>
              Conceptual architecture. Specific platform, topology and control
              implementation details are shared under NDA during scoping rather
              than published.
            </IllustrativeNotice>
          </div>
        </div>
      </Section>

      <SlaSection />

      {/* -------------------- FAQ -------------------- */}
      <Section aria-labelledby="soc-faq-heading">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <SectionHeading
              id="soc-faq-heading"
              eyebrow="Questions"
              title="Managed SOC, answered."
              maxWidth="max-w-md"
            />
            <Reveal delay={80}>
              <FaqList faqs={socFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Get started"
        title="See what monitoring your environment would actually involve."
        body="We start by understanding what you run, what you already have in place and where the real risk sits — then scope monitoring against that, not against a package."
        primary={{
          label: "Request a Security Assessment",
          href: "/request-assessment",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
      />
    </>
  );
}
