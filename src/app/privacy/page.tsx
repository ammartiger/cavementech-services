import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { contactLinks, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy Policy",
    description:
      "How CavemenTech Security Services collects, uses and retains the personal data you submit through this website.",
    path: "/privacy",
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

function Mail() {
  return (
    <a
      href={contactLinks.mailto}
      className="text-brand underline underline-offset-4 hover:text-brand-bright"
    >
      {site.contact.email}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Privacy Policy" }]}
        title="Privacy Policy"
        lead={`How personal data submitted through this website is collected, used and retained. Effective ${EFFECTIVE_DATE}.`}
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <LegalSection heading="Who we are">
              <p>
                This website is operated by {site.legalName}, a cybersecurity
                services provider based in {site.contact.address}. We provide
                managed security operations, penetration testing and security
                assurance services.
              </p>
              <p>
                For any question about this policy or about how we handle your
                data, contact us at <Mail /> or on {site.contact.phone}.
              </p>
            </LegalSection>

            <LegalSection heading="What we collect">
              <p>
                We collect only what you choose to send us. Through the
                assessment and contact form, that is: your name, company, role,
                business email address, phone number, and the details you
                provide about your environment — organisation size, approximate
                endpoint and server counts, cloud platforms, existing security
                tooling, compliance obligations, desired coverage and your
                message.
              </p>
              <p>
                We do not run analytics, advertising or tracking scripts on this
                site, and we do not set any cookies. There is no account system,
                so we hold no credentials. We never ask for passwords, card
                details, CNIC numbers or other identity documents through this
                website, and you should not send them to us by email.
              </p>
            </LegalSection>

            <LegalSection heading="Why we use it">
              <p>
                Solely to respond to your enquiry: to understand what you need,
                scope a potential engagement, prepare a proposal, and maintain a
                record of our correspondence with you.
              </p>
              <p>
                We do not sell, rent or trade your data. We do not add you to a
                marketing list on the basis of an enquiry, and we do not share
                your details with third parties for their own purposes.
              </p>
            </LegalSection>

            <LegalSection heading="How your submission reaches us">
              <p>
                This website is a static site with no server-side application of
                our own. When you submit the form, your details are transmitted
                over an encrypted connection to a third-party form processing
                provider, which forwards them to our monitored mailbox. That
                provider processes the submission on our behalf and may store it
                temporarily.
              </p>
              <p>
                If you would prefer your details not to pass through a
                third-party processor, contact us directly by phone, WhatsApp or
                email instead of using the form — those routes reach us without
                the intermediary.
              </p>
            </LegalSection>

            <LegalSection heading="How long we keep it">
              <p>
                Enquiries that do not lead to an engagement are retained for up
                to 24 months and then deleted, so we have context if you come
                back to us. Where an enquiry does lead to an engagement, the
                related records are retained for the duration of that engagement
                and for as long afterwards as our contractual and business
                records require.
              </p>
              <p>
                You can ask us to delete your enquiry sooner at any time and we
                will do so, unless we are required to retain it.
              </p>
            </LegalSection>

            <LegalSection heading="Confidentiality of engagement data">
              <p>
                Security assessment findings, penetration test reports and
                monitoring data belonging to our clients are held under the
                confidentiality terms of the relevant engagement agreement, not
                under this website policy. Such data is logically separated per
                client with access restricted to authorised personnel, and it is
                never used as marketing material or published without explicit
                written permission.
              </p>
            </LegalSection>

            <LegalSection heading="Your rights">
              <p>
                You may ask us to tell you what personal data of yours we hold,
                to correct it if it is wrong, to provide you with a copy, or to
                delete it. Email <Mail /> and we will action the request.
              </p>
              <p>
                Pakistan&apos;s dedicated personal data protection legislation
                is still developing. Where a specific legal framework applies to
                you — because of your sector, your location, or a contract you
                have with us — we will honour the rights it gives you.
              </p>
            </LegalSection>

            <LegalSection heading="Security of this website">
              <p>
                The site is served over HTTPS and applies a Content Security
                Policy. It contains no secrets, no database and no server-side
                application code. It loads no third-party scripts and
                self-hosts its fonts, so browsing it does not expose you to
                external trackers.
              </p>
              <p>
                Some hardening headers — notably frame-ancestors, HSTS preload
                and X-Content-Type-Options — require response-header control
                that our current static host does not provide. We state that
                openly rather than implying protection that is not in place. See
                our{" "}
                <a
                  href="/security"
                  className="text-brand underline underline-offset-4 hover:text-brand-bright"
                >
                  security page
                </a>{" "}
                for the full position and for how to report a vulnerability.
              </p>
            </LegalSection>

            <LegalSection heading="Changes to this policy">
              <p>
                If we change this policy we will update the effective date at
                the top of this page. Material changes affecting how we use data
                already collected will be communicated directly to affected
                individuals where we hold contact details for them.
              </p>
              <p className="text-ink-faint">
                Effective {EFFECTIVE_DATE}. Questions: <Mail />.
              </p>
            </LegalSection>
          </div>
        </div>
      </Section>
    </>
  );
}
