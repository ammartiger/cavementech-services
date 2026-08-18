import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pakistanFrameworks } from "@/content/compliance";

/**
 * Regulatory frameworks relevant to Pakistani organisations.
 *
 * The "our role" line on each card is the important part — it states exactly
 * what we do and, where a mandatory audit must be performed by an approved or
 * accredited third party, says so outright.
 */
export function FrameworksSection() {
  return (
    <Section id="frameworks" aria-labelledby="frameworks-heading">
      <div className="container-x">
        <SectionHeading
          id="frameworks-heading"
          eyebrow="Pakistan regulatory landscape"
          title="The requirements you're actually being held to."
          lead="Which apply to you depends on your sector and your customers. For each one: who it covers, what it demands, and precisely what we do about it."
          maxWidth="max-w-3xl"
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-2">
          {pakistanFrameworks.map((framework, i) => (
            <Reveal
              as="li"
              key={framework.id}
              id={framework.id}
              delay={(i % 2) * 70}
              className="scroll-mt-28"
            >
              <div className="panel-lit hairline-top flex h-full flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-[1.0625rem] font-semibold text-ink">
                    {framework.short}
                  </h3>
                  <span className="rounded-md border border-line-strong bg-surface-3 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-ink-subtle">
                    {framework.regulator}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.8125rem] text-ink-subtle">
                  {framework.full}
                </p>

                <dl className="mt-5 space-y-4 text-[0.875rem] leading-relaxed">
                  <div>
                    <dt className="mono-label text-ink-faint">Applies to</dt>
                    <dd className="mt-1 text-ink-muted">
                      {framework.appliesTo}
                    </dd>
                  </div>
                  <div>
                    <dt className="mono-label text-ink-faint">What it requires</dt>
                    <dd className="mt-1 text-ink-muted">{framework.summary}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex-1 rounded-lg border border-brand/20 bg-brand/6 p-4">
                  <p className="mono-label mb-2 text-brand">What we do</p>
                  <p className="text-[0.875rem] leading-relaxed text-ink-muted">
                    {framework.ourRole}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal
          delay={80}
          className="mt-8 rounded-xl border border-signal/25 bg-signal/5 p-6"
        >
          <div className="flex items-start gap-3">
            <Icon
              name="info"
              className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
            />
            <p className="text-sm leading-relaxed text-ink-muted">
              Two limits worth stating plainly, because the industry routinely
              blurs them. The mandatory PTA CTDISR compliance audit must be
              carried out by a <strong className="text-ink">PTA-approved auditor</strong>,
              and ISO/IEC 27001 certification is issued by an{" "}
              <strong className="text-ink">accredited certification body</strong>.
              We are neither. We do the readiness, gap assessment, remediation
              and evidence work that makes those engagements go smoothly — and
              we will tell you when you need to appoint someone else.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
