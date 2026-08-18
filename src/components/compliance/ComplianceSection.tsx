import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { auditServices } from "@/content/services";

export function ComplianceSection() {
  return (
    <Section id="security-audit" aria-labelledby="compliance-heading">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              id="compliance-heading"
              eyebrow="Security assurance"
              title="Know where your controls actually stand."
              lead="Independent assessment of what is implemented, what is documented, and the distance between the two — with a remediation plan sequenced by risk reduction rather than by framework order."
              maxWidth="max-w-xl"
            />

            <Reveal
              delay={100}
              className="mt-8 rounded-xl border border-line bg-surface-2/50 p-6"
            >
              <div className="flex items-start gap-3">
                <Icon
                  name="info"
                  className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
                />
                <div>
                  <p className="text-[0.9375rem] font-medium text-ink">
                    Readiness and assessment support
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    We prepare organisations for certification and customer
                    audits, and assess controls independently. We are not a
                    certification body — formal certification is issued by an
                    accredited certification body, and we say so plainly rather
                    than blurring the line.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160} className="mt-8">
              <Button href="/security-audit" icon="arrow-right">
                Security audits &amp; compliance
              </Button>
            </Reveal>
          </div>

          {/* Service list */}
          <Reveal delay={80}>
            <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
              {auditServices.map((service) => (
                <li
                  key={service.id}
                  className="group bg-surface/60 p-5 transition-colors duration-300 hover:bg-surface-2 sm:px-6"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      name="clipboard-check"
                      className="mt-0.5 size-[1.125rem] shrink-0 text-ink-faint transition-colors duration-300 group-hover:text-brand"
                    />
                    <div>
                      <h3 className="text-[0.9375rem] font-medium text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
