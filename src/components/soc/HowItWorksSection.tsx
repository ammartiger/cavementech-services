import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { socProcess } from "@/content/soc";

export function HowItWorksSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <Section
      id="how-it-works"
      tone="raised"
      divider
      aria-labelledby="how-heading"
    >
      <div className="container-x">
        {showHeading ? (
          <SectionHeading
            id="how-heading"
            eyebrow="How your SOC works"
            title="Six steps from connection to continuous improvement."
            lead="Onboarding is a defined sequence, not an open-ended project. Each step has an owner, an output and an agreed definition of done."
          />
        ) : null}

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {socProcess.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              delay={(i % 3) * 70}
              className="group relative bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 sm:p-8"
            >
              {/* Top accent that fills on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-brand to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-baseline gap-4">
                <span className="font-mono text-3xl font-medium tabular-nums text-brand/25 transition-colors duration-300 group-hover:text-brand/60">
                  {step.step}
                </span>
                <h3 className="text-h3 text-ink">{step.title}</h3>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
