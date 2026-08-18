import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  "Tell us about your environment",
  "We scope what's actually needed",
  "You get a written assessment plan",
];

/**
 * Terminal conversion block. Reused at the foot of every major page, with the
 * heading and copy adjusted per page so it never reads as boilerplate.
 */
export function CtaSection({
  eyebrow = "Next step",
  title = "Find out where you actually stand.",
  body = "A security assessment establishes what you have, what it covers, and what it misses. No obligation, no pressure, and no pricing conversation until scope is clear.",
  primary = { label: "Request a Security Assessment", href: "/request-assessment" },
  secondary = { label: "Talk to a Security Expert", href: "/contact" },
  showSteps = true,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  showSteps?: boolean;
}) {
  return (
    <section
      className="relative overflow-hidden border-t border-line py-24 sm:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Ambient field */}
      <div
        aria-hidden="true"
        className="grid-field absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_20%,transparent_100%)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[26rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,179,36,0.11),transparent_65%)] blur-2xl"
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mono-label justify-center text-brand">{eyebrow}</p>
          <h2 id="cta-heading" className="mt-5 text-h2 text-ink">
            {title}
          </h2>
          <p className="mt-5 text-lead text-ink-muted">{body}</p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primary.href} size="lg" icon="arrow-right">
              {primary.label}
            </Button>
            <Button href={secondary.href} size="lg" variant="ghost">
              {secondary.label}
            </Button>
          </div>

          {showSteps ? (
            <ul className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-7">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-2 text-[0.8125rem] text-ink-subtle"
                >
                  <span className="flex size-5 items-center justify-center rounded-full border border-line-strong font-mono text-[0.625rem] text-brand/70">
                    {i + 1}
                  </span>
                  {step}
                  {i < STEPS.length - 1 ? (
                    <Icon
                      name="chevron-right"
                      className="hidden size-3.5 text-ink-faint sm:block"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
