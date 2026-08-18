import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/services/TrustStrip";
import { ProblemSection } from "@/components/services/ProblemSection";
import { ManagedSocSection } from "@/components/soc/ManagedSocSection";
import { ArchitectureSection } from "@/components/soc/ArchitectureSection";
import { AlertFlowSection } from "@/components/soc/AlertFlowSection";
import { HowItWorksSection } from "@/components/soc/HowItWorksSection";
import { ValidationSection } from "@/components/soc/ValidationSection";
import { PentestSection } from "@/components/pentesting/PentestSection";
import { ComplianceSection } from "@/components/compliance/ComplianceSection";
import { IndustriesSection } from "@/components/industries/IndustriesSection";
import { WhyUsSection } from "@/components/services/WhyUsSection";
import { PortalSection } from "@/components/soc/PortalSection";
import { SlaSection } from "@/components/services/SlaSection";
import { InsightsSection } from "@/components/services/InsightsSection";
import { CtaSection } from "@/components/services/CtaSection";
import { FaqList } from "@/components/ui/Faq";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeFaqs } from "@/content/faq";
import { site } from "@/content/site";
import { faqSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Managed SOC & Cybersecurity Services | ${site.name}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Managed SOC & MDR",
          serviceType: "Managed Detection and Response",
          description:
            "Managed security operations: continuous monitoring, threat detection, analyst-led investigation and coordinated incident response, backed by offensive security testing.",
          path: "/managed-soc",
        })}
      />
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero />
      <TrustStrip />
      <ProblemSection />
      <ManagedSocSection />
      <ArchitectureSection />
      <AlertFlowSection />
      <HowItWorksSection />
      <ValidationSection />
      <PentestSection />
      <ComplianceSection />
      <IndustriesSection />
      <WhyUsSection />
      <PortalSection />
      <SlaSection />
      <InsightsSection />

      {/* FAQ */}
      <Section id="faq" divider aria-labelledby="faq-heading">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <SectionHeading
              id="faq-heading"
              eyebrow="Questions"
              title="Straight answers."
              lead="If something here is unclear, ask — a scoping conversation costs you nothing."
              maxWidth="max-w-md"
            />
            <Reveal delay={80}>
              <FaqList faqs={homeFaqs} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
