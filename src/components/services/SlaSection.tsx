import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { slaDimensions } from "@/content/soc";

/**
 * Service-level positioning.
 *
 * No published response-time guarantees: a headline SLA that has not been
 * agreed against a specific environment is marketing, not a commitment. This
 * section sets out the dimensions service levels are actually scoped against.
 */
export function SlaSection() {
  return (
    <Section
      id="service-levels"
      tone="raised"
      divider
      aria-labelledby="sla-heading"
    >
      <div className="container-x">
        <SectionHeading
          id="sla-heading"
          eyebrow="Service levels"
          title="Scoped to your requirements, agreed in writing."
          lead="We don't publish a headline response time, because a number set before anyone has seen your environment isn't a commitment — it's a marketing figure. Service levels are defined against the dimensions below and written into the agreement."
          maxWidth="max-w-3xl"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {slaDimensions.map((dimension, i) => (
            <Reveal
              key={dimension.title}
              delay={(i % 3) * 60}
              className="bg-surface p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.6875rem] text-brand/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[0.9375rem] font-semibold text-ink">
                  {dimension.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                {dimension.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact" icon="arrow-right">
            Discuss your security operations requirements
          </Button>
          <p className="flex items-center gap-2 text-sm text-ink-subtle">
            <Icon name="clock" className="size-4 text-ink-faint" />
            Coverage options include 24/7, scoped during onboarding.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
