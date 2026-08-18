import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AlertWorkflow } from "@/components/viz/AlertWorkflow";

export function AlertFlowSection() {
  return (
    <Section id="alert-flow" aria-labelledby="alert-flow-heading">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="alert-flow-heading"
              eyebrow="What reaches you"
              title="Actionable incidents, not alert noise."
              lead="Everything between a raw event and your inbox is our work, not yours. By the time you are contacted, the activity has been detected, reviewed by an analyst, investigated and classified."
              maxWidth="max-w-xl"
            />

            <Reveal delay={120} className="mt-9 space-y-5">
              <div className="rounded-xl border border-line bg-surface-2/50 p-6">
                <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
                  An alert-forwarding service moves the problem to you with extra
                  steps. Your team still has to establish context, still has to
                  investigate, and still has to decide — only now with less
                  information than the tool that raised it.
                </p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink">
                  A managed SOC absorbs that work.{" "}
                  <span className="font-medium text-brand">
                    You receive a classified incident with evidence and a
                    recommended course of action.
                  </span>
                </p>
              </div>

              <Button href="/how-it-works" variant="ghost" icon="arrow-right">
                See the full delivery model
              </Button>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="panel-lit hairline-top p-7 sm:p-8">
              <p className="mono-label mb-7 text-ink-subtle">
                Event to notification
              </p>
              <AlertWorkflow />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
