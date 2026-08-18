import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path with leading slash, e.g. "/managed-soc". Omit for the homepage. */
  path?: string;
};

/**
 * Builds per-page metadata with a canonical URL, Open Graph and Twitter cards.
 *
 * The card at /og.png is produced by scripts/generate-og.mjs during prebuild.
 * The app/opengraph-image file convention is deliberately not used: under
 * `output: "export"` Next emits the meta tags for it but never writes the PNG
 * into out/, so the image URL would 404 on a static host.
 */
export function pageMeta({
  title,
  description,
  path = "/",
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${site.name} ${site.serviceLine}`,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: `${site.url}/og.png`,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.url}/og.png`],
    },
  };
}

/* ==========================================================================
   JSON-LD builders
   ========================================================================== */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: `${site.name} ${site.serviceLine}`,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    sameAs: [site.parentSite],
    // Contact details are intentionally omitted until real values replace the
    // placeholders in content/site.ts — structured data must not be fabricated.
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: { "@type": "Place", name: "Global" },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    url: `${site.url}/insights/${input.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/insights/${input.slug}`,
    },
  };
}
