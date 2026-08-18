import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SocArchitecture } from "@/components/viz/SocArchitecture";
import { Icon } from "@/components/ui/Icon";

const NOTES = [
  {
    icon: "layers" as const,
    title: "Collected, not scraped",
    body: "Telemetry is collected from sources you approve, over encrypted channels, at a depth agreed during scoping.",
  },
  {
    icon: "git-branch" as const,
    title: "Correlated across sources",
    body: "An identity event, an endpoint detection and a firewall log describe one story. They are only useful together.",
  },
  {
    icon: "refresh" as const,
    title: "Improved continuously",
    body: "What incidents and offensive engagements reveal becomes new detection content, so coverage compounds.",
  },
];

export function ArchitectureSection() {
  return (
    <Section id="architecture" aria-labelledby="architecture-heading">
      <div className="container-x">
        <SectionHeading
          id="architecture-heading"
          eyebrow="How the SOC is built"
          title="From your estate to an incident you can act on."
          lead="Security telemetry moves through collection, analytics and detection before it ever reaches an analyst — and nothing reaches you until a human has established what it means."
        />

        <Reveal className="mt-14">
          <div className="panel-lit hairline-top p-4 sm:p-7">
            <div className="scroll-x -mx-4 px-4 sm:mx-0 sm:px-0">
              <SocArchitecture className="h-auto w-full min-w-[42rem]" />
            </div>
          </div>
          <p className="mt-3 text-xs text-ink-faint sm:hidden">
            Scroll the diagram horizontally to see the full flow.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {NOTES.map((note, i) => (
            <Reveal
              key={note.title}
              delay={i * 80}
              className="rounded-xl border border-line bg-surface-2/40 p-5"
            >
              <Icon name={note.icon} className="size-5 text-brand/80" />
              <h3 className="mt-3.5 text-[0.9375rem] font-medium text-ink">
                {note.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {note.body}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-faint">
          Source types shown describe the customer-side systems telemetry is
          collected from. They do not imply vendor partnerships, certifications
          or endorsements.
        </p>
      </div>
    </Section>
  );
}
