import type { Metadata } from "next";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Request a Security Assessment",
  description:
    "Tell us about your environment and we'll scope the monitoring, testing or assurance work that fits — no obligation and no pricing conversation until scope is clear.",
  path: "/request-assessment",
});

const WHAT_HAPPENS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "mail",
    title: "We read it properly",
    body: "A person reviews what you send. You will not receive an automated sequence of marketing emails.",
  },
  {
    icon: "search",
    title: "We scope honestly",
    body: "If a smaller engagement would answer your question, we will say so — including when the answer is that you don't need us yet.",
  },
  {
    icon: "report",
    title: "You get something written",
    body: "A proposed scope, an approach and a timeline you can take to a budget holder.",
  },
];

const NO_SURPRISES = [
  "No obligation to proceed",
  "No pricing pressure before scope is agreed",
  "Your details are used only to respond",
];

export default function RequestAssessmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Request a Security Assessment", path: "/request-assessment" },
        ])}
      />

      <PageHero
        eyebrow="Security assessment"
        crumbs={[{ label: "Request an Assessment" }]}
        title="Find out where you actually stand."
        lead="The more we know about your environment, the more useful our first response will be. Nothing here commits you to anything."
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
            <div>
              <AssessmentForm />
            </div>

            {/* Reassurance rail */}
            <aside className="lg:pt-2">
              <Reveal>
                <h2 className="mono-label text-brand">What happens next</h2>
                <ul className="mt-6 space-y-6">
                  {WHAT_HAPPENS.map((item, i) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-line-strong bg-surface-2 text-brand/80">
                        <Icon name={item.icon} className="size-4" />
                      </span>
                      <div>
                        <p className="text-[0.9375rem] font-medium text-ink">
                          <span className="mr-2 font-mono text-xs text-ink-faint">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={120}
                className="mt-9 rounded-xl border border-line bg-surface-2/50 p-6"
              >
                <ul className="space-y-3">
                  {NO_SURPRISES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 size-4 shrink-0 text-active"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={180} className="mt-9">
                <p className="text-sm leading-relaxed text-ink-subtle">
                  Prefer to talk first? The{" "}
                  <a
                    href="/contact"
                    className="text-brand underline underline-offset-4 hover:text-brand-bright"
                  >
                    contact page
                  </a>{" "}
                  is a shorter form for general enquiries.
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
