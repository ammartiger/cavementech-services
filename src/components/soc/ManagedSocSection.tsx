import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildVsManaged, socCapabilities } from "@/content/soc";

const CAPABILITY_ICONS: Record<string, IconName> = {
  "continuous-monitoring": "radar",
  "alert-triage": "filter",
  "threat-detection": "target",
  investigation: "search",
  "incident-response": "siren",
  "threat-hunting": "crosshair",
  "security-reporting": "report",
};

export function ManagedSocSection() {
  return (
    <Section id="managed-soc" tone="raised" divider aria-labelledby="soc-heading">
      <div className="container-x">
        <SectionHeading
          id="soc-heading"
          eyebrow="Primary service — Managed SOC / MDR"
          title="A security operations team without the cost of building one."
          lead="Managed Detection and Response (MDR) delivers the capability an internal security operations centre would provide — telemetry, detection, investigation and response — as an operated service scoped to your environment."
          maxWidth="max-w-4xl"
        />

        {/* Capabilities */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socCapabilities.map((cap, i) => (
            <Reveal key={cap.id} delay={(i % 3) * 70}>
              <Card
                className="h-full"
                interactive
              >
                <IconTile name={CAPABILITY_ICONS[cap.id] ?? "shield"} />
                <h3 className="mt-5 text-h3 text-ink">{cap.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {cap.summary}
                </p>
              </Card>
            </Reveal>
          ))}

          {/* Closing card in the grid — keeps the 3-col rhythm and carries the CTA */}
          <Reveal delay={140}>
            <Card className="flex h-full flex-col justify-between border-brand/25 bg-linear-to-br from-brand/8 to-transparent">
              <div>
                <IconTile name="shield-check" />
                <h3 className="mt-5 text-h3 text-ink">
                  Delivered as one service
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Scoped to your estate, your risk and your operating hours —
                  not sold as a fixed bundle you partly need.
                </p>
              </div>
              <Button
                href="/managed-soc"
                variant="secondary"
                size="sm"
                icon="arrow-right"
                className="mt-6 self-start"
              >
                Managed SOC in detail
              </Button>
            </Card>
          </Reveal>
        </div>

        {/* Build vs managed comparison */}
        <Reveal className="mt-16">
          <div className="panel overflow-hidden">
            <div className="grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Traditional */}
              <div className="p-7 sm:p-8">
                <p className="mono-label text-ink-subtle">
                  {buildVsManaged.traditional.title}
                </p>
                <ul className="mt-6 space-y-3">
                  {buildVsManaged.traditional.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9375rem] text-ink-subtle"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rounded-full bg-ink-faint"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-line pt-5 text-sm text-ink-faint">
                  Every line is a hiring decision, a licence, or both — and none
                  of them produce security on their own.
                </p>
              </div>

              {/* Managed */}
              <div className="relative bg-linear-to-b from-brand/6 to-transparent p-7 sm:p-8">
                <p className="mono-label text-brand">
                  {buildVsManaged.managed.title}
                </p>
                <ul className="mt-6 space-y-3">
                  {buildVsManaged.managed.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9375rem] text-ink"
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
                <p className="mt-7 border-t border-line pt-5 text-sm text-ink-muted">
                  One engagement, one accountable partner, and an outcome you can
                  actually measure.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
