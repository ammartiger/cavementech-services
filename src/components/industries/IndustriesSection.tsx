import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/content/industries";

const ICON_MAP: Record<string, IconName> = {
  cloud: "cloud",
  bank: "bank",
  health: "health",
  education: "education",
  factory: "factory",
  briefcase: "briefcase",
  shield: "shield",
  cart: "cart",
};

export function IndustriesSection() {
  return (
    <Section
      id="industries"
      tone="raised"
      divider
      aria-labelledby="industries-heading"
    >
      <div className="container-x">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Different sectors. Different pressure. Same underlying question."
          lead="What you need monitored, how fast you need to respond and what evidence you need to produce all change by sector. The discipline behind it doesn't."
          align="center"
          maxWidth="max-w-3xl"
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal
              as="li"
              key={industry.id}
              delay={(i % 4) * 60}
              className="group bg-surface transition-colors duration-300 hover:bg-surface-2"
            >
              <Link
                href={`/industries#${industry.id}`}
                className="flex h-full flex-col p-6"
              >
                <Icon
                  name={ICON_MAP[industry.icon] ?? "shield"}
                  className="size-6 text-ink-faint transition-colors duration-300 group-hover:text-brand"
                />
                <h3 className="mt-4 text-[0.9375rem] font-semibold text-ink">
                  {industry.name}
                </h3>
                <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-subtle">
                  {industry.pressure}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View focus
                  <Icon name="arrow-right" className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
