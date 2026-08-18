import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaSection } from "@/components/services/CtaSection";
import { getInsight, publishedInsights } from "@/content/insights";
import { site } from "@/content/site";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

type Params = { slug: string };

/** Static export requires the full set of routes up front. */
export function generateStaticParams(): Params[] {
  return publishedInsights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return pageMeta({ title: "Not found", description: "" });

  return {
    ...pageMeta({
      title: article.title,
      description: article.excerpt,
      path: `/insights/${article.slug}`,
    }),
    openGraph: {
      type: "article",
      title: `${article.title} | ${site.name}`,
      description: article.excerpt,
      url: `${site.url}/insights/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const related = publishedInsights
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          slug: article.slug,
          date: article.date ?? "",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ])}
      />

      <PageHero
        eyebrow={article.category}
        crumbs={[
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
        title={article.title}
        lead={article.excerpt}
      />

      <Section spacing="tight">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            {/* Byline — attributed to the organisation, never an invented person */}
            <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-6">
              <span className="flex items-center gap-2 text-sm text-ink-muted">
                <Icon name="shield" className="size-4 text-brand/70" />
                {site.name} Security Team
              </span>
              {article.date ? (
                <time
                  dateTime={article.date}
                  className="font-mono text-[0.75rem] text-ink-faint"
                >
                  {formatDate(article.date)}
                </time>
              ) : null}
              <span className="font-mono text-[0.75rem] text-ink-faint">
                {article.readingTime}
              </span>
            </Reveal>

            <article className="mt-10">
              {article.body?.map((section, i) => (
                <Reveal key={section.heading} delay={i * 40} className="mb-10">
                  <h2 className="text-h3 text-ink">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[1.0625rem] leading-[1.75] text-ink-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </article>

            <Reveal className="mt-12 rounded-xl border border-brand/25 bg-linear-to-br from-brand/8 to-transparent p-6">
              <p className="text-[0.9375rem] leading-relaxed text-ink">
                If this maps to something you&apos;re dealing with, a scoping
                conversation will get you further than another article.
              </p>
              <Link
                href="/request-assessment"
                className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand transition-colors hover:text-brand-bright"
              >
                Request a security assessment
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Reveal>

            {related.length > 0 ? (
              <div className="mt-14 border-t border-line pt-10">
                <p className="mono-label text-ink-subtle">Related reading</p>
                <ul className="mt-6 space-y-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/insights/${item.slug}`}
                        className="group flex items-start justify-between gap-6 rounded-xl border border-line bg-surface-2/40 p-5 transition-colors hover:border-line-bright"
                      >
                        <div>
                          <p className="mono-label text-brand">
                            {item.category}
                          </p>
                          <p className="mt-2 text-[0.9375rem] font-medium text-ink transition-colors group-hover:text-brand">
                            {item.title}
                          </p>
                        </div>
                        <Icon
                          name="arrow-right"
                          className="mt-1 size-4 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      <CtaSection showSteps={false} />
    </>
  );
}
