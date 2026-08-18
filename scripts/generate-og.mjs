/**
 * Generates public/og.png — the Open Graph / Twitter card — at build time.
 *
 * Why a script rather than app/opengraph-image.tsx:
 * with `output: "export"`, Next emits the og:image meta tags for that file
 * convention but does not write the PNG into out/, so the URL 404s on a static
 * host. Rendering it here produces a real file that ships with the export and
 * works on any host.
 *
 * Run via `npm run build` (wired into the prebuild step).
 */

// Imported as "next/og.js" rather than "next/og": Next's package exports map
// does not expose the bare "./og" subpath to plain Node ESM, only to its own
// bundler resolution. The .js specifier resolves the same module.
import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = join(ROOT, "public", "og.png");

const BRAND = "#f5b324";
const INK = "#eef2f8";
const MUTED = "#a3adbe";
const SUBTLE = "#6d778a";
const FAINT = "#4b5567";
const BASE = "#07090d";

const NAME = "CavemenTech";
const SERVICE_LINE = "Security Services";
const DOMAIN = "services.cavementech.com";

function card() {
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BASE,
        padding: 72,
        position: "relative",
      },
    },
    // Amber horizon glow
    h("div", {
      style: {
        position: "absolute",
        top: -340,
        left: 160,
        width: 940,
        height: 660,
        borderRadius: 9999,
        background:
          "radial-gradient(circle at center, rgba(245,179,36,0.22), rgba(7,9,13,0) 65%)",
        display: "flex",
      },
    }),
    // Top accent rule
    h("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        background: `linear-gradient(90deg, ${BRAND}, #b8830f 45%, ${BASE})`,
        display: "flex",
      },
    }),

    // ---- Brand lockup ----
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 18 } },
      h(
        "svg",
        { width: 56, height: 56, viewBox: "0 0 32 32" },
        h("path", {
          d: "M16 1.75 28.25 6.6v10.9c0 6.6-5.05 11.55-12.25 13.75C8.8 29.05 3.75 24.1 3.75 17.5V6.6L16 1.75Z",
          fill: "#151b26",
          stroke: "#3a4557",
          strokeWidth: 1,
        }),
        h("path", {
          d: "M16 7.5 21.5 17 16 14.2 10.5 17 16 7.5Z",
          fill: BRAND,
        }),
        h("path", {
          d: "M16 16.6 21.5 19.4 16 25.5 10.5 19.4 16 16.6Z",
          fill: BRAND,
          fillOpacity: 0.55,
        }),
      ),
      h(
        "div",
        { style: { display: "flex", flexDirection: "column" } },
        h(
          "span",
          {
            style: {
              color: INK,
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -0.5,
            },
          },
          NAME,
        ),
        h(
          "span",
          {
            style: {
              color: SUBTLE,
              fontSize: 16,
              letterSpacing: 3.5,
              marginTop: 5,
            },
          },
          SERVICE_LINE.toUpperCase(),
        ),
      ),
    ),

    // ---- Headline ----
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h(
        "span",
        {
          style: {
            color: BRAND,
            fontSize: 20,
            letterSpacing: 4,
            marginBottom: 26,
          },
        },
        "MANAGED SOC · MDR · OFFENSIVE SECURITY",
      ),
      h(
        "span",
        {
          style: {
            color: INK,
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -2.2,
            maxWidth: 950,
          },
        },
        "Your security operations team, without building one.",
      ),
    ),

    // ---- Footer strip ----
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 34,
          borderTop: "1px solid #1b2130",
          paddingTop: 30,
        },
      },
      ...["Detect", "Investigate", "Respond", "Validate"].map((word) =>
        h(
          "span",
          {
            key: word,
            style: {
              color: MUTED,
              fontSize: 23,
              display: "flex",
              alignItems: "center",
              gap: 12,
            },
          },
          h("span", {
            style: {
              width: 7,
              height: 7,
              borderRadius: 9999,
              background: BRAND,
              display: "flex",
            },
          }),
          word,
        ),
      ),
      h(
        "span",
        { style: { color: FAINT, fontSize: 21, marginLeft: "auto" } },
        DOMAIN,
      ),
    ),
  );
}

const response = new ImageResponse(card(), { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());

await mkdir(dirname(OUTPUT), { recursive: true });
await writeFile(OUTPUT, buffer);

console.log(
  `[og] wrote public/og.png — ${(buffer.length / 1024).toFixed(1)} KB`,
);
