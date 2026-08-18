import { IllustrativeNotice } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CustomerPortal } from "@/components/viz/CustomerPortal";
import { SocDashboard } from "@/components/viz/SocDashboard";

export function PortalSection() {
  return (
    <Section
      id="portal"
      tone="raised"
      divider
      aria-labelledby="portal-heading"
    >
      <div className="container-x">
        <SectionHeading
          id="portal-heading"
          eyebrow="What you see"
          title="Two views of the same operation."
          lead="Analysts work the full queue across monitored environments. You see your environment: open incidents, what was found, what was done about it, and what needs your decision."
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <p className="mono-label mb-4 text-ink-subtle">
              Analyst view — operations console
            </p>
            <SocDashboard />
          </Reveal>

          <Reveal delay={120}>
            <p className="mono-label mb-4 text-brand">
              Customer view — your portal
            </p>
            <CustomerPortal />
          </Reveal>
        </div>

        <Reveal delay={80} className="mx-auto mt-8 max-w-3xl">
          <IllustrativeNotice>
            Both interfaces are shown as a conceptual product design. The
            figures, incidents and identifiers are illustrative examples — they
            are not live data, customer data, or a statement of environments
            monitored.
          </IllustrativeNotice>
        </Reveal>
      </div>
    </Section>
  );
}
