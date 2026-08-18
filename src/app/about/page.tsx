import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { WhyUsSection } from "@/components/services/WhyUsSection";
import { site } from "@/content/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Who we are and how we work: managed security operations backed by offensive-security expertise, built to make enterprise-grade security operations accessible to organisations of every size.",
  path: "/about",
});

/**
 * Team placeholders.
 *
 * Deliberately empty of credentials. The brief is explicit that certifications,
 * affiliations and achievements must not be invented — so each entry carries
 * only a bracketed name and role until real details are supplied here.
 */
const TEAM = [
  { name: "[FOUNDER NAME]", role: "[ROLE]" },
  { name: "[TEAM MEMBER NAME]", role: "[ROLE]" },
  { name: "[TEAM MEMBER NAME]", role: "[ROLE]" },
];

const PRINCIPLES = [
  {
    title: "Say what we can evidence",
    body: "If we haven't tested it, measured it or delivered it, we don't claim it. That applies to this website as much as to a report.",
  },
  {
    title: "Scope before selling",
    body: "A proposal that isn't grounded in your actual environment is a guess with a price attached. We scope first, including when scoping reveals you need less than you asked for.",
  },
  {
    title: "Leave the client more capable",
    body: "Findings are explained, not just listed. The objective is that your team understands the issue well enough to prevent the next one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About"
        crumbs={[{ label: "About" }]}
        title="Security operations, built by people who also break things."
        lead="We run managed detection and response, and we run offensive security engagements. Keeping both disciplines in one place is a deliberate choice — each makes the other measurably better."
      />

      {/* -------------------- Mission & vision -------------------- */}
      <Section aria-labelledby="mission-heading">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <IconTile name="target" />
                <h2 id="mission-heading" className="mt-5 text-h3 text-ink">
                  Mission
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Help organisations build practical, continuously improving
                  cybersecurity defences without the cost and complexity of
                  building a large internal security team.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card className="h-full">
                <IconTile name="layers" tone="signal" />
                <h2 className="mt-5 text-h3 text-ink">Vision</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Make enterprise-grade security operations accessible to
                  organisations of every size — so that the quality of your
                  defence is not determined by the size of your security budget.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------- Origin -------------------- */}
      <Section tone="raised" divider spacing="tight" aria-labelledby="origin-heading">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              id="origin-heading"
              eyebrow="Background"
              title="Where this comes from."
              maxWidth="max-w-md"
            />
            <Reveal delay={80} className="space-y-5">
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                CavemenTech began as a technical publication — write-ups on
                penetration testing, capture-the-flag work and applied security
                research, published openly at{" "}
                <a
                  href={site.parentSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline underline-offset-4 hover:text-brand-bright"
                >
                  cavementech.com
                </a>
                .
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                This services practice grew out of the same work. The recurring
                pattern in offensive engagements was not exotic exploitation — it
                was ordinary attack paths that nobody was watching for. Finding
                them once is useful. Detecting them continuously is what actually
                changes an organisation&apos;s exposure.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                That is the whole premise: run the offensive work and the
                monitoring together, so that what one discipline learns, the
                other immediately applies.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------- Principles -------------------- */}
      <Section aria-labelledby="principles-heading">
        <div className="container-x">
          <SectionHeading
            id="principles-heading"
            eyebrow="How we work"
            title="Three commitments we hold ourselves to."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <Card className="h-full">
                  <span className="font-mono text-2xl font-medium text-brand/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-h3 text-ink">{principle.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {principle.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <WhyUsSection />

      {/* -------------------- Team -------------------- */}
      <Section tone="raised" divider aria-labelledby="team-heading">
        <div className="container-x">
          <SectionHeading
            id="team-heading"
            eyebrow="Team"
            title="The people who would work on your account."
            lead="Named team details are published here once confirmed. We don't list credentials, affiliations or headcounts we can't stand behind."
          />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal as="li" key={i} delay={i * 70}>
                <div className="panel-lit hairline-top flex h-full flex-col items-start p-7">
                  {/* Neutral avatar placeholder — no stock photography */}
                  <span
                    aria-hidden="true"
                    className="flex size-14 items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface-2 text-ink-faint"
                  >
                    <Icon name="identity" className="size-6" />
                  </span>
                  <p className="mt-5 inline-flex rounded-md border border-dashed border-line-strong bg-surface-2/60 px-2 py-0.5 font-mono text-[0.8125rem] text-ink-subtle">
                    {member.name}
                  </p>
                  <p className="mt-2 inline-flex rounded-md border border-dashed border-line-strong bg-surface-2/60 px-2 py-0.5 font-mono text-[0.75rem] text-ink-faint">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={100}
            className="mt-10 rounded-xl border border-line bg-surface-2/50 p-6"
          >
            <div className="flex items-start gap-3">
              <Icon
                name="info"
                className="mt-0.5 size-[1.125rem] shrink-0 text-signal"
              />
              <p className="text-sm leading-relaxed text-ink-muted">
                Placeholders shown above are intentional. Team names, roles and
                individual certifications are supplied during scoping, and
                published here only once they are confirmed — we would rather
                show an obvious gap than an invented credential.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------- Case studies -------------------- */}
      <Section aria-labelledby="cases-heading">
        <div className="container-x">
          <SectionHeading
            id="cases-heading"
            eyebrow="Case studies"
            title="Case studies coming soon."
            lead="We will publish engagement write-ups once we have client permission to do so. Until then this section stays empty rather than being filled with invented customers, logos or results."
            maxWidth="max-w-3xl"
          />

          <Reveal className="mt-10">
            <div className="panel flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:gap-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-dashed border-line-strong bg-surface-2 text-ink-faint">
                <Icon name="report" className="size-5" />
              </span>
              <div>
                <p className="text-[0.9375rem] font-medium text-ink">
                  Want to see relevant examples now?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  Ask during scoping. We can walk through anonymised,
                  permission-cleared examples of the attack paths and detection
                  gaps we most commonly find in environments like yours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaSection
        eyebrow="Next step"
        title="Work with us."
        body="Start with a scoping conversation. We'll tell you what we'd do, what it would involve from your side, and whether we're the right fit."
      />
    </>
  );
}
