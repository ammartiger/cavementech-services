import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalNotice, LegalSection } from "@/components/ui/LegalNotice";
import { Detail } from "@/components/ui/Placeholder";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Terms of Service",
    description:
      "Terms governing use of the CavemenTech Security Services website.",
    path: "/terms",
  }),
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Terms of Service" }]}
        title="Terms of Service"
        lead="Terms governing use of this website. Service delivery is governed separately by the engagement contract."
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <LegalNotice document="terms of service document" />

            <div className="mt-10">
              <LegalSection heading="Scope">
                <p>
                  These terms cover use of this website only. Any security
                  services we deliver are governed by a separate written
                  engagement agreement, including scope, rules of engagement,
                  liability, confidentiality and service levels.
                </p>
                <p>
                  The relationship between these terms and the engagement
                  agreement, and which prevails in conflict, must be stated here.
                </p>
              </LegalSection>

              <LegalSection heading="Use of this website">
                <p>
                  Acceptable use, prohibited activity, and the position on
                  automated access and scraping must be stated here.
                </p>
                <p>
                  Note: unauthorised security testing of this website is covered
                  by our{" "}
                  <a
                    href="/security"
                    className="text-brand underline underline-offset-4 hover:text-brand-bright"
                  >
                    security disclosure policy
                  </a>
                  , which sets out what is and is not authorised.
                </p>
              </LegalSection>

              <LegalSection heading="No advice or warranty">
                <p>
                  Content on this site is general information about our services.
                  It is not security, legal or regulatory advice for your
                  specific circumstances, and should not be relied on as such.
                </p>
                <p>
                  The full disclaimer and warranty position must be drafted here.
                </p>
              </LegalSection>

              <LegalSection heading="Intellectual property">
                <p>
                  Ownership of site content, diagrams and written material, and
                  the terms on which any of it may be reproduced, must be stated
                  here.
                </p>
              </LegalSection>

              <LegalSection heading="Limitation of liability">
                <p>
                  The limitation of liability for use of this website must be
                  drafted here by a qualified adviser, including any statutory
                  limits that cannot be excluded in the applicable jurisdiction.
                </p>
              </LegalSection>

              <LegalSection heading="Governing law">
                <p>
                  The governing law and jurisdiction for disputes must be stated
                  here.
                </p>
              </LegalSection>

              <LegalSection heading="Contact">
                <p>
                  Questions about these terms:{" "}
                  <Detail value={site.contact.email} linkPrefix="mailto:" />.
                  Operated by <Detail value={site.legalName} />.
                </p>
                <p className="text-ink-faint">
                  Last updated: [DATE — set when the reviewed terms are
                  published].
                </p>
              </LegalSection>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
