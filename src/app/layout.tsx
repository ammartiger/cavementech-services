import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { organizationSchema } from "@/lib/seo";

/**
 * Fonts are self-hosted by next/font at build time — no runtime request to a
 * third-party font CDN. That keeps the Content-Security-Policy tight and
 * removes a render-blocking external dependency.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Managed SOC & Cybersecurity Services in Pakistan | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} ${site.serviceLine}`,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: site.url,
    siteName: `${site.name} ${site.serviceLine}`,
    title: `Managed SOC & Cybersecurity Services | ${site.name}`,
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Managed SOC & Cybersecurity Services | ${site.name}`,
    description: site.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-PK"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Content-Security-Policy delivered as a meta tag.

          GitHub Pages does not allow custom response headers, so the policy is
          set here. Header-based delivery is stronger (it can carry
          frame-ancestors and is not parser-dependent) — if this site later
          moves behind a CDN or reverse proxy, move this policy, HSTS,
          X-Content-Type-Options and Referrer-Policy to response headers.
          See public/_headers, which is already written for that migration.

          'unsafe-inline' on style-src is required by Next.js for its inlined
          critical CSS and by React for the `style` props used in this app.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            // 'unsafe-eval' is added in development only — React's dev build
            // uses eval() for debugging features. It is never emitted in the
            // production export.
            process.env.NODE_ENV === "development"
              ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
              : "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data:",
            "font-src 'self' data:",
            // ws: is development-only, for the Next dev server's hot-reload
            // socket. The production export has no websocket connection.
            process.env.NODE_ENV === "development"
              ? "connect-src 'self' https: ws:"
              : "connect-src 'self' https:",
            "form-action 'self' https:",
            "base-uri 'self'",
            "object-src 'none'",
            // frame-ancestors is deliberately absent: browsers ignore it when
            // delivered via <meta>, so listing it here would only produce a
            // console error and false assurance. It is set in public/_headers
            // for hosts that support response headers. GitHub Pages does not,
            // so clickjacking protection is not enforced there — this is
            // documented in README.md rather than papered over.
            "upgrade-insecure-requests",
          ].join("; ")}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="min-h-dvh antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
