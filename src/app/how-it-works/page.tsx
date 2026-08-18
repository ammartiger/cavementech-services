import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { HowItWorksSection } from "@/components/soc/HowItWorksSection";
import { ArchitectureSection } from "@/components/soc/ArchitectureSection";
import { AlertFlowSection } from "@/components/soc/AlertFlowSection";
import { SlaSection } from "@/components/services/SlaSection";
import { CtaSection } from "@/components/services/CtaSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How It Works",
  description:
    "How managed security operations are delivered: onboarding, telemetry collection, detection, investigation, incident response and continuous improvement.",
  path: "/how-it-works",
});

const ONBOARDING: { icon: IconName; week: string; title: string; body: string }[] =
  [
    {
      icon: "search",
      week: "Scoping",
      title: "Understand the environment",
      body: "What you run, what matters most, what you already have in place and where the real risk sits. This determines everything downstream — collecting from the wrong sources is the most common way monitoring programmes fail quietly.",
    },
    {
      icon: "route",
      week: "Design",
      title: "Agree coverage and authority",
      body: "Which systems are in scope, which severity levels get which response, who is contacted and in what order, and which containment actions we are pre-authorised to take without waiting for a decision.",
    },
    {
      icon: "layers",
      week: "Connect",
      title: "Establish telemetry",
      body: "Log sources and security agents are connected, validated and checked for gaps. We confirm that what we expect to receive is actually arriving before anything is treated as covered.",
    },
    {
      icon: "target",
      week: "Tune",
      title: "Baseline and tune",
      body: "Every environment has legitimate activity that looks suspicious in isolation. The tuning period establishes what normal looks like for you, so detections mean something when they fire.",
    },
    {
      icon: "shield-check",
      week: "Operate",
      title: "Go live",
      body: "Monitoring moves into steady-state operation, with regular reporting and a review cycle that revisits coverage as your environment changes.",
    },
  ];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />

      <PageHero
        eyebrow="Delivery model"
        crumbs={[{ label: "How It Works" }]}
        title="What actually happens, from first call to steady state."
        lead="Security services are easy to describe vaguely. This page sets out the sequence, what each stage produces, and what we need from you at each point."
        primary={{
          label: "Request a Security Assessment",
          href: "/contact",
        }}
        secondary={{ label: "Talk to a Security Expert", href: "/contact" }}
      />

      {/* -------------------- Onboarding -------------------- */}
      <Section aria-labelledby="onboarding-heading">
        <div className="container-x">
          <SectionHeading
            id="onboarding-heading"
            eyebrow="Onboarding"
            title="Five stages before anything is called covered."
            lead="Onboarding is a defined project with an end point, not an open-ended integration effort. You should always know which stage you are in and what it produces."
          />

          <ol className="mt-14 space-y-4">
            {ONBOARDING.map((stage, i) => (
              <Reveal as="li" key={stage.title} delay={(i % 3) * 60}>
                <div className="panel-lit hairline-top grid gap-5 p-6 sm:grid-cols-[auto_10rem_1fr] sm:items-start sm:gap-8 sm:p-7">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <Icon name={stage.icon} className="size-[1.375rem]" />
                  </span>
                  <div>
                    <p className="mono-label text-ink-subtle">
                      {String(i + 1).padStart(2, "0")} · {stage.week}
                    </p>
                    <h3 className="mt-2 text-h3 text-ink">{stage.title}</h3>
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                    {stage.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <HowItWorksSection />
      <ArchitectureSection />
      <AlertFlowSection />
      <SlaSection />

      <CtaSection
        eyebrow="Next step"
        title="Start with a scoping conversation."
        body="Thirty minutes is usually enough to establish whether there is a fit, what shape an engagement would take, and what you'd need internally to support it."
      />
    </>
  );
}
