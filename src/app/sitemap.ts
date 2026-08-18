import type { MetadataRoute } from "next";
import { publishedInsights } from "@/content/insights";
import { site } from "@/content/site";

/**
 * Static sitemap. Legal pages are excluded deliberately — they are marked
 * noindex and carry no search value.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "monthly" | "weekly" | "yearly" }[] =
    [
      { path: "/", priority: 1, changeFrequency: "monthly" },
      { path: "/managed-soc", priority: 0.9, changeFrequency: "monthly" },
      { path: "/penetration-testing", priority: 0.9, changeFrequency: "monthly" },
      { path: "/security-audit", priority: 0.8, changeFrequency: "monthly" },
      { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
      { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
      { path: "/about", priority: 0.6, changeFrequency: "monthly" },
      { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
      { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
      { path: "/request-assessment", priority: 0.9, changeFrequency: "yearly" },
      { path: "/security", priority: 0.4, changeFrequency: "yearly" },
    ];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...publishedInsights.map((article) => ({
      url: `${site.url}/insights/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

/** Required by output: "export" — these routes are generated once at build time. */
export const dynamic = "force-static";
