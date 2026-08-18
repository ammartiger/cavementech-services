import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { whyUs } from "@/content/services";

const ICONS: IconName[] = [
  "crosshair",
  "radar",
  "clipboard-check",
  "users",
  "refresh",
  "layers",
];

export function WhyUsSection() {
  return (
    <Section id="why-us" aria-labelledby="why-heading">
      <div className="container-x">
        <SectionHeading
          id="why-heading"
          eyebrow="Why us"
          title="Both sides of the same problem, under one roof."
          lead="Defending an environment and attacking one require the same knowledge applied in opposite directions. Keeping both in one organisation is what makes each of them better."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 70}
              className="group relative pl-6"
            >
              {/* Left rail that lights on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-y-1 left-0 w-px bg-line transition-colors duration-300 group-hover:bg-brand/60"
              />
              <Icon
                name={ICONS[i]}
                className="size-5 text-brand/70 transition-colors duration-300 group-hover:text-brand"
              />
              <h3 className="mt-4 text-h3 text-ink">{item.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
