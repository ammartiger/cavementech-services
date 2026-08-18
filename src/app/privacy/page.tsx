import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalNotice, LegalSection } from "@/components/ui/LegalNotice";
import { Detail } from "@/components/ui/Placeholder";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy Policy",
    description:
      "How CavemenTech Security Services handles personal data collected through this website.",
    path: "/privacy",
  }),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Privacy Policy" }]}
        title="Privacy Policy"
        lead="How personal data submitted through this website is collected, used and retained."
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <LegalNotice document="privacy policy" />

            <div className="mt-10">
              <LegalSection heading="Who we are">
                <p>
                  This website is operated by <Detail value={site.legalName} />,
                  trading as {site.name}. Contact:{" "}
                  <Detail value={site.contact.email} linkPrefix="mailto:" />.
                </p>
                <p>
                  The registered entity, registration number, registered address
                  and — where required — the data protection representative or
                  Data Protection Officer must be stated here.
                </p>
              </LegalSection>

              <LegalSection heading="What data we collect">
                <p>
                  Information you submit through the contact and security
                  assessment forms: your name, company, business email, phone
                  number, role, and the details you provide about your
                  environment and requirements.
                </p>
                <p>
                  This section must also cover any data collected automatically
                  — server logs, analytics, and cookies — and state accurately
                  which of these are actually in use.
                </p>
              </LegalSection>

              <LegalSection heading="How we use it">
                <p>
                  To respond to your enquiry, scope a potential engagement and
                  maintain a record of the correspondence.
                </p>
                <p>
                  The lawful basis for each processing purpose must be stated
                  here, along with whether any data is used for marketing and how
                  consent for that is obtained and withdrawn.
                </p>
              </LegalSection>

              <LegalSection heading="Form processing and third parties">
                <p>
                  Because this site is served as a static build, form
                  submissions are transmitted to a third-party form processing
                  provider rather than to a server we operate.
                </p>
                <p>
                  The provider must be named here, along with where it processes
                  data, the safeguards applied to any international transfer, and
                  a link to its own privacy terms.
                </p>
              </LegalSection>

              <LegalSection heading="Retention">
                <p>
                  Actual retention periods for enquiry data, engagement records
                  and correspondence must be stated here, together with what
                  triggers deletion.
                </p>
              </LegalSection>

              <LegalSection heading="Your rights">
                <p>
                  Depending on your jurisdiction you may have rights of access,
                  rectification, erasure, restriction, portability and objection,
                  and the right to complain to a supervisory authority.
                </p>
                <p>
                  The applicable rights, how to exercise them, the response
                  timeframe and the relevant supervisory authority must be stated
                  here.
                </p>
              </LegalSection>

              <LegalSection heading="Security">
                <p>
                  This site is served over HTTPS and does not collect
                  credentials, payment details or special category data through
                  any form.
                </p>
                <p>
                  Organisational and technical measures protecting enquiry data
                  once received must be described here.
                </p>
              </LegalSection>

              <LegalSection heading="Changes and contact">
                <p>
                  How changes to this policy are communicated, and the contact
                  route for privacy queries, must be stated here. Contact:{" "}
                  <Detail value={site.contact.email} linkPrefix="mailto:" />.
                </p>
                <p className="text-ink-faint">
                  Last updated: [DATE — set when the reviewed policy is
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
