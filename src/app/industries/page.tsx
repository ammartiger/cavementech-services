import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, CheckList, IconTile } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { industries } from "@/content/industries";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Managed SOC, penetration testing and security assurance for banking, fintech, telecom, technology, e-commerce, manufacturing, healthcare, education and public sector organisations across Pakistan.",
  path: "/industries",
});

const ICON_MAP: Record<string, IconName> = {
  cloud: "cloud",
  radar: "radar",
  bank: "bank",
  health: "health",
  education: "education",
  factory: "factory",
  briefcase: "briefcase",
  shield: "shield",
  cart: "cart",
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />

      <PageHero
        eyebrow="Industries"
        crumbs={[{ label: "Industries" }]}
        title="Same discipline. Different pressure."
        lead="What needs monitoring, how fast you must respond and what evidence you have to produce all change by sector. We scope against your reality rather than a generic template."
        primary={{
          label: "Request a Security Assessment",
          href: "/contact",
        }}
      />

      <Section aria-labelledby="sectors-heading">
        <div className="container-x">
          <SectionHeading
            id="sectors-heading"
            eyebrow="Sectors"
            title="Where the risk actually concentrates."
            lead="For each sector below: the pressure that defines it, and where our work usually focuses as a result."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal key={industry.id} id={industry.id} delay={(i % 2) * 70}>
                <Card className="h-full scroll-mt-28">
                  <div className="flex items-start gap-4">
                    <IconTile name={ICON_MAP[industry.icon] ?? "shield"} />
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-h3 text-ink">{industry.name}</h2>
                        {industry.driver ? (
                          <span className="rounded-md border border-brand/30 bg-brand/8 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-brand">
                            {industry.driver}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                        {industry.pressure}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="mono-label mb-4 text-ink-subtle">
                      Where we focus
                    </p>
                    <CheckList items={industry.focus} />
                  </div>
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
                Regulatory context is described only as the environment
                organisations in a sector commonly operate under. We do not
                certify, attest to, or guarantee any regulatory outcome, and
                nothing here should be read as a claim about specific
                customers.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaSection
        eyebrow="Next step"
        title="Tell us what your sector demands of you."
        body="Customer questionnaires, a regulator, a board, an insurer or an incident — whatever is driving the requirement, we'll scope the work that satisfies it."
      />
    </>
  );
}
