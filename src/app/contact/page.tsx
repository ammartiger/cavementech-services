import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Detail } from "@/components/ui/Placeholder";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch about managed SOC and MDR, penetration testing, security audits, compliance readiness or incident response.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title="Talk to a security expert."
        lead="Whether you know exactly what you need or only that something isn't right, a scoping conversation costs you nothing."
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <ContactForm />

            <aside className="lg:pt-2">
              <Reveal>
                <h2 className="mono-label text-brand">Direct contact</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-brand/80">
                      <Icon name="mail" className="size-4" />
                    </span>
                    <div>
                      <p className="text-[0.8125rem] text-ink-subtle">Email</p>
                      <p className="mt-1">
                        <Detail
                          value={site.contact.email}
                          linkPrefix="mailto:"
                        />
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-brand/80">
                      <Icon name="phone" className="size-4" />
                    </span>
                    <div>
                      <p className="text-[0.8125rem] text-ink-subtle">Phone</p>
                      <p className="mt-1">
                        <Detail value={site.contact.phone} linkPrefix="tel:" />
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-brand/80">
                      <Icon name="map-pin" className="size-4" />
                    </span>
                    <div>
                      <p className="text-[0.8125rem] text-ink-subtle">
                        Operating region
                      </p>
                      <p className="mt-1">
                        <Detail value={site.contact.region} />
                      </p>
                    </div>
                  </li>
                </ul>
              </Reveal>

              <Reveal
                delay={120}
                className="mt-9 rounded-xl border border-sev-critical/30 bg-sev-critical/6 p-6"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    name="siren"
                    className="mt-0.5 size-[1.125rem] shrink-0 text-sev-critical"
                  />
                  <div>
                    <p className="text-[0.9375rem] font-medium text-ink">
                      Active incident?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      If you believe you are in the middle of a security
                      incident, say so in the first line of your message and
                      call if a number is listed above. Existing customers
                      should use the escalation path agreed during onboarding.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={160}
                className="mt-6 rounded-xl border border-line bg-surface-2/50 p-6"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    name="shield"
                    className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
                  />
                  <div>
                    <p className="text-[0.9375rem] font-medium text-ink">
                      Reporting a vulnerability?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      Please use the process on our{" "}
                      <a
                        href="/security"
                        className="text-brand underline underline-offset-4 hover:text-brand-bright"
                      >
                        security page
                      </a>{" "}
                      rather than this form.
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
