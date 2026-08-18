import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SignalPipeline } from "@/components/viz/SignalPipeline";
import { site } from "@/content/site";

const MICRO_POINTS = [
  { icon: "radar" as const, label: "Continuous monitoring" },
  { icon: "users" as const, label: "Analyst-led investigation" },
  { icon: "crosshair" as const, label: "Offensive validation" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background: fine grid, masked so it fades out before the content edge */}
      <div
        aria-hidden="true"
        className="grid-field absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_35%,transparent_100%)] opacity-70"
      />
      {/* Amber horizon glow behind the headline */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,179,36,0.13),transparent_65%)] blur-2xl"
      />
      {/* Cool counter-glow on the visual side */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-56 hidden h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(62,201,221,0.08),transparent_65%)] blur-2xl lg:block"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-20">
          {/* ------------------------- Copy ------------------------- */}
          <div>
            <Reveal>
              <p className="mono-label inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface-2/70 px-3.5 py-1.5 text-ink-muted">
                <span className="relative flex size-1.5">
                  <span className="motion-flow absolute inline-flex size-full animate-blink rounded-full bg-brand" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
                </span>
                Managed SOC · MDR · Offensive Security
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-display text-ink">
                Your security operations team,{" "}
                <span className="text-brand-gradient">
                  without building one.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lead text-ink-muted">
                Managed SOC and Managed Detection and Response (MDR), backed by
                penetration testing — to detect threats, investigate them
                properly, coordinate response, and continuously validate that
                your defences actually work.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/request-assessment" size="lg" icon="arrow-right">
                  Request a Security Assessment
                </Button>
                <Button href="/managed-soc" size="lg" variant="ghost">
                  Explore Managed SOC
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
                {MICRO_POINTS.map((point) => (
                  <li
                    key={point.label}
                    className="flex items-center gap-2 text-sm text-ink-subtle"
                  >
                    <Icon
                      name={point.icon}
                      className="size-4 text-brand/80"
                    />
                    {point.label}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8125rem] text-ink-faint">
                {site.coverageStatement}
              </p>
            </Reveal>
          </div>

          {/* ------------------------ Visual ------------------------ */}
          <Reveal delay={200} className="relative">
            <div className="panel-lit hairline-top relative overflow-hidden p-5 shadow-2xl shadow-black/50 sm:p-6">
              <div className="flex items-center justify-between gap-4 pb-4">
                <p className="mono-label text-ink-subtle">Signal pipeline</p>
                <p className="rounded-md border border-line-strong bg-surface-3 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-faint">
                  Illustrative
                </p>
              </div>
              <SignalPipeline className="w-full" />
            </div>

            {/* Caption clarifying the figures are conceptual */}
            <p className="mt-3 px-1 text-xs leading-relaxed text-ink-faint">
              Conceptual illustration of how security telemetry is reduced to
              actionable incidents. Figures are examples, not service statistics.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
