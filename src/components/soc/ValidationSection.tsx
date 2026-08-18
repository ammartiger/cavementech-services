import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ValidationLoop } from "@/components/viz/ValidationLoop";

const OWNED = ["SIEM", "EDR", "Firewall", "MFA", "Security policies", "Backups"];

export function ValidationSection() {
  return (
    <Section id="validation" aria-labelledby="validation-heading">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Copy */}
          <div>
            <SectionHeading
              id="validation-heading"
              eyebrow="The differentiator"
              title={
                <>
                  We don&apos;t just defend.{" "}
                  <span className="text-brand-gradient">
                    We test the defence.
                  </span>
                </>
              }
              lead="Most organisations can list the security controls they own. Very few can tell you whether those controls would actually catch an attacker."
              maxWidth="max-w-xl"
            />

            <Reveal delay={100} className="mt-9">
              <p className="mono-label text-ink-subtle">
                You may already have
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {OWNED.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface-2/70 px-3 py-1.5 text-[0.8125rem] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-brand/25 bg-linear-to-br from-brand/8 to-transparent p-6">
                <p className="flex items-start gap-3 text-lead text-ink">
                  <Icon
                    name="crosshair"
                    className="mt-1 size-5 shrink-0 text-brand"
                  />
                  <span>
                    But the question that matters is simpler:{" "}
                    <span className="font-medium text-brand">
                      would your security team detect a real attack?
                    </span>
                  </span>
                </p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Because we run controlled offensive assessments as well as the
                  SOC, that question gets an evidenced answer — and every gap it
                  exposes becomes detection content rather than a finding in a
                  report nobody actions.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/penetration-testing" icon="arrow-right">
                  Explore offensive security
                </Button>
                <Button href="/contact" variant="ghost">
                  Validate my defences
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Loop diagram */}
          <Reveal delay={140} className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(245,179,36,0.07),transparent_70%)] blur-2xl"
            />
            <ValidationLoop className="relative mx-auto h-auto w-full max-w-[34rem]" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
