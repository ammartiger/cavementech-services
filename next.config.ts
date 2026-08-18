import type { NextConfig } from "next";

/**
 * Static export configuration for GitHub Pages.
 *
 * The site is served from the custom domain services.cavementech.com (see
 * public/CNAME), so no basePath/assetPrefix is required. Because the export is
 * fully static there is no Next.js server at runtime: no API routes, no server
 * actions, no middleware. Form submissions are posted directly to a configured
 * third-party form endpoint - see src/lib/forms.ts.
 */
const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves /path/ as /path/index.html; trailing slashes keep the
  // exported directory structure and the router in agreement.
  trailingSlash: true,
  images: {
    // No Image Optimization server exists in a static export. All imagery on
    // this site is hand-authored SVG, so this costs nothing.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
