import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { insights, insightCategories } from "@/content/insights";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "Practical writing on security operations, threat detection, Active Directory security, penetration testing, cloud security, incident response and compliance.",
  path: "/insights",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const published = insights.filter((i) => i.status === "published");
  const planned = insights.filter((i) => i.status === "planned");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />

      <PageHero
        eyebrow="Insights"
        crumbs={[{ label: "Insights" }]}
        title="Practical security writing."
        lead="Notes on how security operations, detection and offensive testing actually work — written for people who have to make decisions, not for search engines."
      />

      {/* Category index — descriptive, not a filter control, since every
          article is listed on this single page. */}
      <Section spacing="tight">
        <div className="container-x">
          <Reveal>
            <p className="mono-label text-ink-subtle">Topics</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {insightCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-lg border border-line bg-surface-2/60 px-3 py-1.5 text-[0.8125rem] text-ink-muted"
                >
                  {category}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Published */}
      <Section spacing="tight" aria-labelledby="articles-heading">
        <div className="container-x">
          <h2 id="articles-heading" className="sr-only">
            Published articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {published.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group panel-lit hairline-top flex h-full flex-col p-6 transition-colors duration-300 hover:border-line-bright sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label text-brand">{article.category}</p>
                    {article.date ? (
                      <time
                        dateTime={article.date}
                        className="font-mono text-[0.6875rem] text-ink-faint"
                      >
                        {formatDate(article.date)}
                      </time>
                    ) : null}
                  </div>
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

      {/* Planned — rendered as non-links so nothing points at an empty page */}
      {planned.length > 0 ? (
        <Section spacing="tight" aria-labelledby="planned-heading">
          <div className="container-x">
            <Reveal>
              <h2
                id="planned-heading"
                className="mono-label text-ink-subtle"
              >
                In progress
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                Topics currently being written. These are listed rather than
                linked — we don&apos;t publish placeholder pages.
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {planned.map((article, i) => (
                <Reveal
                  as="li"
                  key={article.slug}
                  delay={(i % 4) * 60}
                  className="rounded-xl border border-dashed border-line-strong bg-surface/40 p-5"
                >
                  <p className="mono-label text-[0.5625rem] text-ink-faint">
                    {article.category}
                  </p>
                  <p className="mt-3 text-[0.9375rem] font-medium leading-snug text-ink-muted">
                    {article.title}
                  </p>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-faint">
                    {article.excerpt}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <CtaSection
        eyebrow="Next step"
        title="Prefer a conversation to an article?"
        body="If something here maps to a problem you're actually facing, a scoping call will get you further than another blog post."
        showSteps={false}
      />
    </>
  );
}
