import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { alertSources, missingCapabilities } from "@/content/services";

export function ProblemSection() {
  return (
    <Section id="problem" aria-labelledby="problem-heading">
      <div className="container-x">
        <SectionHeading
          id="problem-heading"
          eyebrow="The problem"
          title={
            <>
              Security alerts are easy.{" "}
              <span className="text-ink-subtle">
                Knowing which ones matter isn&apos;t.
              </span>
            </>
          }
          lead="Most organisations are not short of security data. They are short of the time, context and expertise required to turn it into decisions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* What arrives */}
          <Reveal className="panel-lit hairline-top p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-line-strong bg-surface-3 text-ink-muted">
                <Icon name="activity" className="size-[1.125rem]" />
              </span>
              <h3 className="text-h3 text-ink">What arrives every day</h3>
            </div>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
              Thousands of events, across every tool you own, with no shared
              context between them:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {alertSources.map((source) => (
                <li
                  key={source}
                  className="rounded-lg border border-line bg-surface-2/70 px-2.5 py-1.5 font-mono text-[0.75rem] text-ink-subtle"
                >
                  {source}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-ink-muted">
              Almost all of it is legitimate activity. Establishing which part
              isn&apos;t is the entire job — and it has to happen before anything
              else can.
            </p>
          </Reveal>

          {/* What is missing */}
          <Reveal
            delay={100}
            className="panel-lit hairline-top relative overflow-hidden p-7 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,rgba(240,71,91,0.09),transparent_70%)]"
            />
            <div className="relative flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-sev-critical/30 bg-sev-critical/10 text-sev-critical">
                <Icon name="alert" className="size-[1.125rem]" />
              </span>
              <h3 className="text-h3 text-ink">What most teams don&apos;t have</h3>
            </div>
            <ul className="relative mt-6 space-y-3.5">
              {missingCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon
                    name="close"
                    className="mt-1 size-3.5 shrink-0 text-sev-critical/70"
                    strokeWidth={2}
                  />
                  <span className="text-[0.9375rem] text-ink-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="relative mt-7 border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-ink">
              Your firewall doesn&apos;t investigate an identity attack. Your
              endpoint agent doesn&apos;t reconstruct the full attack path. Your
              SIEM doesn&apos;t decide whether an alert requires immediate
              action.{" "}
              <span className="font-medium text-brand">
                A security team does. Our managed SOC provides that team.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
