import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FacetBlock } from "@/components/viz/AbstractArt";
import {
  pricingFactors,
  pricingIncluded,
  pricingPrinciples,
} from "@/content/pricing";
import { site } from "@/content/site";

export function PricingSection() {
  const { currencySymbol, startingFrom, unit, note } = site.pricing;

  return (
    <Section id="pricing" divider aria-labelledby="pricing-heading">
      <div className="container-x">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing"
          title="Enterprise-grade security operations, priced for Pakistani organisations."
          lead="Billed in rupees, scoped to what you actually run. No dollar-denominated surprises at renewal, and no rate card that ignores your environment."
          maxWidth="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          {/* ---------------- Price anchor ---------------- */}
          <Reveal className="panel-lit hairline-top relative overflow-hidden p-7 sm:p-9">
            <FacetBlock
              className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 opacity-40"
            />

            <div className="relative">
              <p className="mono-label text-brand">Managed SOC / MDR</p>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm text-ink-subtle">Starting from</span>
                <span className="font-mono text-5xl font-medium tracking-tight text-ink sm:text-6xl">
                  {currencySymbol} {startingFrom}
                </span>
              </div>
              <p className="mt-2 text-lead text-ink-muted">{unit}</p>

              <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">
                {note}
              </p>

              <div className="mt-8 border-t border-line pt-7">
                <p className="mono-label mb-5 text-ink-subtle">
                  What that covers
                </p>
                <ul className="space-y-2.5">
                  {pricingIncluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9375rem] text-ink-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-1 size-4 shrink-0 text-brand"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" icon="arrow-right">
                  Get a scoped quote
                </Button>
                <Button href="/managed-soc" variant="ghost">
                  What&apos;s included
                </Button>
              </div>
            </div>
          </Reveal>

          {/* ---------------- What moves the price ---------------- */}
          <div className="flex flex-col gap-6">
            <Reveal delay={100} className="panel-lit hairline-top p-7 sm:p-8">
              <h3 className="text-h3 text-ink">What moves the number</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                Stated openly, so nothing appears for the first time in a
                proposal.
              </p>
              <dl className="mt-6 space-y-4">
                {pricingFactors.map((factor) => (
                  <div key={factor.title}>
                    <dt className="text-[0.9375rem] font-medium text-ink">
                      {factor.title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {factor.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal
              delay={160}
              className="rounded-2xl border border-brand/25 bg-linear-to-br from-brand/8 to-transparent p-7 sm:p-8"
            >
              <ul className="space-y-5">
                {pricingPrinciples.map((principle) => (
                  <li key={principle.title} className="flex gap-3.5">
                    <Icon
                      name="shield-check"
                      className="mt-0.5 size-[1.125rem] shrink-0 text-brand"
                    />
                    <div>
                      <p className="text-[0.9375rem] font-medium text-ink">
                        {principle.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {principle.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Other services pricing note */}
        <Reveal
          delay={80}
          className="mt-8 rounded-xl border border-line bg-surface-2/50 p-6"
        >
          <div className="flex items-start gap-3">
            <Icon
              name="info"
              className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
            />
            <p className="text-sm leading-relaxed text-ink-muted">
              Penetration testing and security assurance engagements are priced
              per engagement rather than per endpoint, because they are scoped by
              what is being tested and how deeply — not by how many machines you
              own. Tell us what you need assessed and you will get a fixed
              written quote before any work starts.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
