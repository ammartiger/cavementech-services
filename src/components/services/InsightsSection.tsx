import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { publishedInsights } from "@/content/insights";

export function InsightsSection() {
  const featured = publishedInsights.slice(0, 3);

  return (
    <Section id="insights" aria-labelledby="insights-heading">
      <div className="container-x">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="insights-heading"
            eyebrow="Insights"
            title="Practical security writing, not vendor content."
            maxWidth="max-w-2xl"
          />
          <Reveal delay={80} className="shrink-0">
            <Button href="/insights" variant="secondary" icon="arrow-right">
              All insights
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <Link
                href={`/insights/${article.slug}`}
                className="group panel-lit hairline-top flex h-full flex-col p-6 transition-colors duration-300 hover:border-line-bright sm:p-7"
              >
                <p className="mono-label text-brand">{article.category}</p>
                <h3 className="mt-4 text-[1.0625rem] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-brand">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink-faint">
                    {article.readingTime}
                  </span>
                  <Icon
                    name="arrow-right"
                    className="size-4 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
