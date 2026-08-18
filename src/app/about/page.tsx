import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { WhyUsSection } from "@/components/services/WhyUsSection";
import { AbstractAvatar, NodeField } from "@/components/viz/AbstractArt";
import { team } from "@/content/team";
import { site } from "@/content/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Managed security operations backed by offensive-security expertise, built in Pakistan to make enterprise-grade security operations accessible to organisations of every size.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "Say what we can evidence",
    body: "If we haven't tested it, measured it or delivered it, we don't claim it. That applies to this website as much as to a report.",
  },
  {
    title: "Scope before selling",
    body: "A proposal that isn't grounded in your actual environment is a guess with a price attached. We scope first — including when scoping reveals you need less than you asked for.",
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
        lead="We run managed detection and response, and we run offensive security engagements. Keeping both disciplines in one team is a deliberate choice — each makes the other measurably better."
        aside={
          <div className="panel-lit hairline-top overflow-hidden p-6">
            <NodeField className="h-auto w-full" />
            <p className="mt-4 text-xs leading-relaxed text-ink-faint">
              Attack paths are rarely a single exploit. They are a route through
              systems that each looked acceptable on their own.
            </p>
          </div>
        }
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
                  organisations of every size in Pakistan — so the quality of
                  your defence is not decided by the size of your security
                  budget.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------- Origin -------------------- */}
      <Section
        tone="raised"
        divider
        spacing="tight"
        aria-labelledby="origin-heading"
      >
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
                pattern in offensive engagements was not exotic exploitation —
                it was ordinary attack paths that nobody was watching for.
                Finding them once is useful. Detecting them continuously is what
                actually changes an organisation&apos;s exposure.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                The other pattern was structural. Pakistani organisations facing
                real regulatory pressure from PTA, the State Bank and overseas
                customers were being offered either a compliance checkbox
                exercise or an enterprise contract priced for a different
                market. Very little in between actually defended anything.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                That is the whole premise: run the offensive work and the
                monitoring together, price it in rupees, and scope it to what an
                organisation genuinely runs.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------- Team -------------------- */}
      <Section aria-labelledby="team-heading">
        <div className="container-x">
          <SectionHeading
            id="team-heading"
            eyebrow="Team"
            title="The people who would work on your account."
            lead="A small team by design. You deal directly with the practitioners doing the work, not an account manager relaying messages to them."
          />

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal as="li" key={member.id} delay={i * 90}>
                <Card className="flex h-full flex-col">
                  <AbstractAvatar seed={member.seed} className="size-16" />

                  <h3 className="mt-5 text-h3 text-ink">{member.name}</h3>
                  <p className="mt-1 text-[0.875rem] text-brand">
                    {member.role}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {member.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="rounded-md border border-brand/30 bg-brand/8 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-brand"
                      >
                        {credential}
                      </li>
                    ))}
                  </ul>

                  {member.highlight ? (
                    <p className="mt-4 flex items-start gap-2 rounded-lg border border-line bg-surface-2/60 px-3 py-2.5 text-[0.8125rem] leading-relaxed text-ink-muted">
                      <Icon
                        name="target"
                        className="mt-0.5 size-3.5 shrink-0 text-brand"
                      />
                      {member.highlight}
                    </p>
                  ) : null}

                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {member.bio}
                  </p>

                  {member.additional ? (
                    <p className="mt-4 border-t border-line pt-4 text-[0.75rem] leading-relaxed text-ink-subtle">
                      <span className="mono-label text-ink-faint">
                        Also holds ·{" "}
                      </span>
                      {member.additional.join(" · ")}
                    </p>
                  ) : null}

                  {member.link ? (
                    <a
                      href={member.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand transition-colors hover:text-brand-bright"
                    >
                      {member.link.label}
                      <Icon name="external" className="size-3.5" />
                    </a>
                  ) : null}
                </Card>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <WhyUsSection />

      {/* -------------------- Case studies -------------------- */}
      <Section tone="raised" divider aria-labelledby="cases-heading">
        <div className="container-x">
          <SectionHeading
            id="cases-heading"
            eyebrow="Case studies"
            title="Case studies coming soon."
            lead="We publish engagement write-ups only with client permission. Until we have it, this section stays empty rather than being filled with invented customers, logos or results."
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
                  Ask during scoping. We can walk you through anonymised,
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
