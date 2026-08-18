# CavemenTech Security Services

Marketing and lead-generation site for the CavemenTech managed security practice —
Managed SOC / MDR (primary), penetration testing, and security audits & compliance.
Built for the Pakistani market.

Deployed as a **static export** to GitHub Pages at `services.cavementech.com`.

---

## Stack

| Concern   | Choice                                    |
| --------- | ----------------------------------------- |
| Framework | Next.js 16 (App Router), `output: export` |
| UI        | React 19, TypeScript (strict)             |
| Styling   | Tailwind CSS v4 (CSS-first `@theme`)      |
| Fonts     | Inter + JetBrains Mono, self-hosted       |
| Graphics  | Hand-authored inline SVG — no image deps  |
| Hosting   | GitHub Pages via GitHub Actions           |

There is no backend. No API routes, no server actions, no middleware, no database.

---

## Local development

```bash
npm install
```

```bash
npm run dev
```

| Script              | Does                                                       |
| ------------------- | ---------------------------------------------------------- |
| `npm run dev`       | Dev server on http://localhost:3000                        |
| `npm run build`     | Generates `public/og.png`, then exports the site to `out/`  |
| `npm run typecheck` | `tsc --noEmit`                                             |
| `npm run og`        | Regenerates the Open Graph card only                       |

---

## Where the content lives

All copy, service descriptions, articles, team details and company facts are
typed data in `src/content/` — **not** hardcoded inside components. Editing
content should never require touching a component.

| File            | Contains                                                       |
| --------------- | -------------------------------------------------------------- |
| `site.ts`       | Company facts, contact details, pricing, coverage statement     |
| `team.ts`       | Team members, roles and verified credentials                    |
| `pricing.ts`    | What the entry price covers and what moves it                   |
| `compliance.ts` | PTA, SBP, SECP, PECA, NCERT and ISO 27001 positioning           |
| `nav.ts`        | Header and footer navigation                                    |
| `services.ts`   | Three service pillars, pentest and audit engagements, "why us"  |
| `soc.ts`        | SOC capabilities, delivery process, alert workflow, SLA axes    |
| `industries.ts` | Sector positioning                                              |
| `insights.ts`   | Articles (published and planned)                                |
| `faq.ts`        | FAQ content — also emitted as FAQPage JSON-LD                   |

### Company details are live

Contact details, team credentials and pricing are real and confirmed. No
bracketed placeholders remain anywhere in the site.

| Fact                    | Value                            |
| ----------------------- | -------------------------------- |
| Email                   | contact@cavementech.com          |
| Phone / WhatsApp        | +92 339 3396940                  |
| Location                | Rawalpindi, Pakistan             |
| Managed SOC entry price | Rs 10,000 per endpoint / server  |

**One flag to leave alone:** `continuousCoverageLive` in `site.ts` stays `false`
until 24/7 staffing genuinely exists. The whole site's coverage language keys off
it, and currently says "including 24/7 options" rather than claiming 24/7
operation.

### Market positioning

The site targets Pakistan, which shapes more than the currency:

- Pricing in PKR, presented as a starting point rather than a rate card
- Sector mix built around SBP-regulated banking, PTA-licensed telecom, fintech
  and payments, IT exports, manufacturing, healthcare, education and public sector
- Compliance content covers PTA CTDISR, SBP ETGRM, SECP, PECA 2016, NCERT and
  ISO/IEC 27001 — see `src/content/compliance.ts`
- WhatsApp is a first-class contact channel alongside phone and email
- Locale is `en-PK` throughout

**Two claims this site deliberately never makes.** We are not a PTA-approved
auditor, and not an accredited certification body. The mandatory CTDISR
compliance audit and ISO 27001 certification both require appointing someone
else, and every page mentioning those frameworks says so explicitly. Do not
soften that wording — from a company selling compliance services, blurring it is
a misrepresentation.

---

## Forms

Contact and assessment request are a **single page** at `/contact`: direct
contact channels first (phone, WhatsApp, email), then the full assessment form.
There is no separate `/request-assessment` route.

Because the site is static, the form POSTs directly to a third-party form
endpoint configured at build time:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-provider.example/f/xxxxx
```

Set it as a GitHub Actions **repository variable** — not a secret, since it is a
public URL compiled into the client bundle. Works with Formspree, Web3Forms,
Basin, or your own serverless function.

If the variable is unset, the form still validates fully and offers email,
WhatsApp and phone fallbacks carrying everything the visitor typed, so an
enquiry is never silently lost.

### Security division of responsibility

Client-side (`src/lib/forms.ts`) provides field validation, a honeypot field and
a submission-timing check. **That is UX and bot friction, not security.**

The receiving endpoint **must** enforce authoritative server-side validation,
rate limiting, and spam/abuse scoring. Configure these at the provider.

Never put an API key in a `NEXT_PUBLIC_*` variable — those are compiled into the
bundle and are readable by anyone.

---

## Security posture of this site

Implemented:

- Content-Security-Policy via `<meta>` (`src/app/layout.tsx`), with `unsafe-eval`
  and `ws:` scoped to development only — never emitted in the production export
- No secrets in the client bundle; no third-party scripts; no analytics; no cookies
- Fonts self-hosted — zero external network requests at runtime
- `strict-origin-when-cross-origin` referrer policy
- All JSON-LD escaped before injection

**Honest limitation:** GitHub Pages cannot set custom response headers, so
`frame-ancestors`, HSTS preload, `X-Content-Type-Options` and
`Permissions-Policy` are **not enforced** in the current deployment.
`frame-ancestors` in particular is ignored by browsers when delivered via
`<meta>`, so clickjacking protection is absent on Pages.

`public/_headers` already contains the full hardened header set and takes effect
the moment the site moves behind Cloudflare Pages, Netlify, or any reverse proxy.
This limitation is stated plainly on the public `/security` page too.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: install → typecheck →
build → publish `out/` to GitHub Pages.

### One-time setup

1. **Settings → Pages → Source: GitHub Actions**
2. **Settings → Pages → Custom domain:** `services.cavementech.com`
   (`public/CNAME` is committed, so this populates itself)
3. Add a DNS record at Cloudflare:

   ```
   CNAME   services   ammartiger.github.io
   ```

   Set it to **DNS only (grey cloud)**, not Proxied. GitHub cannot complete its
   TLS certificate challenge through Cloudflare's proxy, so "Enforce HTTPS" stays
   greyed out and the certificate never provisions. It can be switched back to
   proxied after the certificate issues.

4. Enable **Enforce HTTPS** once the certificate appears
5. Add the `NEXT_PUBLIC_FORM_ENDPOINT` repository variable to activate the form

> **Repository visibility:** GitHub Pages will not serve from a private
> repository on the Free plan — the API returns HTTP 422. The repo is public for
> this reason. Making it private again stops Pages hosting unless the account
> upgrades to Pro/Team.

---

## Accessibility

Targets WCAG 2.2 AA. Verified rather than assumed:

- Every text tier in the grey ramp clears 4.5:1 against the darkest surface it is
  used on; the ramp was respaced after an audit found the lowest tier at 2.65:1
- Form control borders use a dedicated `--color-field` token meeting the 3:1
  requirement for UI component boundaries
- Focus ring is brand amber at 10.8:1
- Failed form submission moves focus to an error summary listing every problem
- Mobile menu implements a focus trap, scroll lock and Escape-to-close
- All decorative SVG is `aria-hidden`; diagrams carry `role="img"` with
  `<title>` and `<desc>`
- `prefers-reduced-motion` disables all animation, including SVG data flows

---

## Project structure

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Shell, fonts, CSP, ProfessionalService JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system (Tailwind v4 @theme)
│   ├── managed-soc/        # Primary service
│   ├── penetration-testing/
│   ├── security-audit/     # Includes PK regulatory frameworks section
│   ├── how-it-works/
│   ├── industries/
│   ├── about/              # Team with verified credentials
│   ├── insights/[slug]/    # Articles
│   ├── contact/            # Merged contact + assessment request
│   ├── privacy/ terms/ security/
│   ├── sitemap.ts robots.ts
│   └── not-found.tsx
├── components/
│   ├── navigation/ hero/ services/ soc/ pentesting/
│   ├── compliance/ industries/ forms/ footer/
│   ├── viz/                # SVG diagrams, dashboards, abstract artwork
│   └── ui/                 # Primitives
├── content/                # All copy and data
└── lib/                    # seo.ts, forms.ts
scripts/generate-og.mjs     # Builds public/og.png at prebuild
```

---

## Conventions

- **No fabricated facts.** If it can't be evidenced, it doesn't ship. Product
  mockups are labelled "Illustrative interface"; funnel figures are labelled as
  conceptual examples; case studies stay empty until a client permits publication.
- **No 24/7 claim** until it is true — see `coverageStatement` in `site.ts`.
- **No certification or approved-auditor claims.** Assurance work is described as
  readiness, gap assessment and remediation support.
- **No photographs of people.** Team avatars and decorative artwork are generated
  abstract SVG (`components/viz/AbstractArt.tsx`) — stock photos of people who
  don't work here would be a misrepresentation.
- Diagrams are inline SVG components so they inherit design tokens and stay crisp
  at any resolution.
