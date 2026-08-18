import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { contactLinks, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Terms of Service",
    description:
      "Terms governing use of the CavemenTech Security Services website. Service delivery is governed separately by the engagement agreement.",
    path: "/terms",
  }),
  robots: { index: false, follow: true },
};

const EFFECTIVE_DATE = "18 August 2026";

function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="text-h3 text-ink">{heading}</h2>
      <div className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Terms of Service" }]}
        title="Terms of Service"
        lead={`Terms governing use of this website. Effective ${EFFECTIVE_DATE}.`}
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <LegalSection heading="Scope of these terms">
              <p>
                These terms cover your use of this website only. Any security
                services we deliver to you are governed by a separate written
                engagement agreement covering scope, rules of engagement,
                confidentiality, liability, service levels and commercial terms.
              </p>
              <p>
                Where these terms and a signed engagement agreement differ, the
                engagement agreement prevails for everything relating to service
                delivery.
              </p>
            </LegalSection>

            <LegalSection heading="Use of this website">
              <p>
                You may read, reference and share this site freely. You may not
                use it to distribute malware, attempt to gain unauthorised
                access to it or to any system it connects to, or submit content
                through our forms that is unlawful, abusive or deliberately
                misleading.
              </p>
              <p>
                Security testing of this website is governed by our{" "}
                <a
                  href="/security"
                  className="text-brand underline underline-offset-4 hover:text-brand-bright"
                >
                  vulnerability disclosure policy
                </a>
                , which sets out precisely what is in scope and what is not.
                Testing outside that scope is not authorised, and under the
                Prevention of Electronic Crimes Act 2016 unauthorised access to
                an information system is a criminal offence in Pakistan.
              </p>
            </LegalSection>

            <LegalSection heading="Information, not advice">
              <p>
                Content on this site — including service descriptions, articles
                and diagrams — is general information about what we do. It is
                not security, legal or regulatory advice tailored to your
                circumstances, and you should not act on it as though it were.
              </p>
              <p>
                References to regulatory frameworks such as PTA CTDISR, State
                Bank of Pakistan requirements, SECP expectations or ISO/IEC
                27001 describe the environment organisations operate under. We
                are not a PTA-approved auditor and not an accredited
                certification body; we provide readiness, gap assessment and
                remediation support, and we say so wherever those frameworks are
                mentioned.
              </p>
            </LegalSection>

            <LegalSection heading="Illustrative material">
              <p>
                Product interface mockups, architecture diagrams and any figures
                shown alongside them are illustrative of the service concept.
                They are labelled as such on the page. They are not live data,
                not customer data, and not a statement of how many environments
                we monitor or how many incidents we have handled.
              </p>
              <p>
                Pricing shown on this site is a starting point, not a quotation.
                A binding price is issued only in writing after scoping.
              </p>
            </LegalSection>

            <LegalSection heading="Intellectual property">
              <p>
                The content, design, diagrams and written material on this site
                belong to {site.legalName}. You may quote or link to it with
                attribution. You may not reproduce it wholesale, or present it
                as your own or as another organisation&apos;s work.
              </p>
            </LegalSection>

            <LegalSection heading="Availability and liability">
              <p>
                We aim to keep this site available and accurate, but we provide
                it as-is. We do not warrant that it will be uninterrupted, or
                that every detail will remain current as regulations and our
                services evolve.
              </p>
              <p>
                To the extent permitted by law, we are not liable for loss
                arising from reliance on general information published here. Any
                liability relating to services we actually deliver is dealt with
                in the engagement agreement for that work. Nothing here limits
                liability that cannot lawfully be limited.
              </p>
            </LegalSection>

            <LegalSection heading="Governing law">
              <p>
                These terms are governed by the laws of the Islamic Republic of
                Pakistan, and the courts of Pakistan have jurisdiction over any
                dispute arising from them.
              </p>
            </LegalSection>

            <LegalSection heading="Contact">
              <p>
                Questions about these terms:{" "}
                <a
                  href={contactLinks.mailto}
                  className="text-brand underline underline-offset-4 hover:text-brand-bright"
                >
                  {site.contact.email}
                </a>{" "}
                or {site.contact.phone}. Operated by {site.legalName},{" "}
                {site.contact.address}.
              </p>
              <p className="text-ink-faint">Effective {EFFECTIVE_DATE}.</p>
            </LegalSection>
          </div>
        </div>
      </Section>
    </>
  );
}
