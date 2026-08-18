# CavemenTech Security Services

Marketing and lead-generation site for the CavemenTech managed security practice —
Managed SOC / MDR (primary), penetration testing, and security audits & compliance.

Deployed as a **static export** to GitHub Pages at `services.cavementech.com`.

---

## Stack

| Concern    | Choice                                    |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 16 (App Router), `output: export` |
| UI         | React 19, TypeScript (strict)             |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)      |
| Fonts      | Inter + JetBrains Mono, self-hosted        |
| Graphics   | Hand-authored inline SVG — no image deps  |
| Hosting    | GitHub Pages via GitHub Actions           |

There is no backend. No API routes, no server actions, no middleware, no database.

---

## Local development

```bash
npm install
npm run dev
```

| Script              | Does                                                    |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Dev server on http://localhost:3000                     |
| `npm run build`     | Generates `public/og.png`, then exports the site to `out/` |
| `npm run typecheck` | `tsc --noEmit`                                          |
| `npm run og`        | Regenerates the Open Graph card only                    |

---

## Where the content lives

All copy, service descriptions, articles and company details are typed data in
`src/content/` — **not** hardcoded inside components. Editing content should
never require touching a component.

| File            | Contains                                                        |
| --------------- | --------------------------------------------------------------- |
| `site.ts`       | Company name, contact details, coverage statement, placeholders |
| `nav.ts`        | Header and footer navigation                                    |
| `services.ts`   | Three service pillars, pentest and audit engagements, "why us"  |
| `soc.ts`        | SOC capabilities, delivery process, alert workflow, SLA axes    |
| `industries.ts` | Sector positioning                                              |
| `insights.ts`   | Articles (published and planned)                                |
| `faq.ts`        | FAQ content — also emitted as FAQPage JSON-LD                   |

### Placeholders — read this before launch

Values in square brackets (`[EMAIL]`, `[PHONE]`, `[FOUNDER NAME]`) are
deliberate. Nothing on this site fabricates a customer, certification, award,
statistic, partnership, address or phone number.

The UI renders unfilled placeholders in a visibly "pending" dashed style, so
what still needs real data is obvious at a glance. Fill them in
`src/content/site.ts` and every page updates.

**Outstanding before public launch:**

- [ ] Real contact details in `src/content/site.ts`
- [ ] Registered legal entity name and address
- [ ] Team names and roles in `src/app/about/page.tsx`
- [ ] **Legally reviewed** privacy policy and terms — the current pages are
      section outlines explicitly marked as not-yet-reviewed, not binding text
- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` configured (see below)
- [ ] Set `continuousCoverageLive: true` in `site.ts` **only** once 24/7
      staffing genuinely exists

---

## Forms

Because the site is static, forms POST directly to a third-party form endpoint
configured at build time:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-provider.example/f/xxxxx
```

Set it as a GitHub Actions **repository variable** (not a secret — it is a public
URL compiled into the client bundle). Works with Formspree, Web3Forms, Basin, or
your own serverless function.

If the variable is unset, forms still validate fully and show a clear
"not connected yet" state with a `mailto:` fallback carrying everything the
visitor typed — an enquiry is never silently lost.

### Security division of responsibility

Client-side (`src/lib/forms.ts`) provides: field validation, a honeypot field,
and a submission-timing check. **This is UX and bot friction, not security.**

The receiving endpoint **must** enforce: authoritative server-side validation,
rate limiting, and spam/abuse scoring. Configure these at the provider.

Never put an API key in `NEXT_PUBLIC_*` — those are compiled into the bundle.

---

## Security posture of this site

Implemented:

- Content-Security-Policy via `<meta>` (`src/app/layout.tsx`)
- No secrets in the client bundle; no third-party scripts; no analytics
- Fonts self-hosted — zero external network requests at runtime
- `strict-origin-when-cross-origin` referrer policy
- All JSON-LD is escaped before injection

**Honest limitation:** GitHub Pages cannot set custom response headers, so
`frame-ancestors`, HSTS preload, `X-Content-Type-Options` and
`Permissions-Policy` are **not enforced** in the current deployment.
`frame-ancestors` in particular is ignored by browsers when delivered via
`<meta>`, so clickjacking protection is absent on Pages.

`public/_headers` already contains the full hardened header set and takes effect
the moment the site moves behind Cloudflare Pages, Netlify, or any reverse proxy.
This limitation is also stated plainly on the public `/security` page.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: install → typecheck →
build → publish `out/` to GitHub Pages.

### One-time setup

1. **Settings → Pages → Source: GitHub Actions**
2. **Settings → Pages → Custom domain:** `services.cavementech.com`
   (`public/CNAME` is already committed, so this should populate itself)
3. Add a DNS record at your domain provider:
   ```
   CNAME   services   <your-github-username>.github.io
   ```
4. Enable **Enforce HTTPS** once the certificate provisions
5. Optionally add the `NEXT_PUBLIC_FORM_ENDPOINT` repository variable

> **Private repository note:** GitHub Pages will not serve from a private
> repository on the Free plan. Either upgrade to GitHub Pro/Team, or make the
> repository public when you are ready to launch. The site builds and exports
> identically either way — this only affects hosting.

---

## Accessibility

Targets WCAG 2.2 AA. Verified rather than assumed:

- Every text tier in the grey ramp clears 4.5:1 against the darkest surface it
  is used on; the ramp was respaced after an audit found the lowest tier at
  2.65:1
- Form control borders use a dedicated `--color-field` token meeting the 3:1
  requirement for UI component boundaries
- Focus ring is brand amber at 10.8:1
- Failed form submission moves focus to an error summary listing every problem
- Mobile menu implements a focus trap, scroll lock and Escape-to-close
- All decorative SVG is `aria-hidden`; diagrams carry `role="img"` with
  `<title>`/`<desc>`
- `prefers-reduced-motion` disables all animation, including SVG data flows

Re-run the checks:

```bash
npm run build
```

---

## Project structure

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Shell, fonts, CSP, Organization JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system (Tailwind v4 @theme)
│   ├── managed-soc/        # Primary service
│   ├── penetration-testing/
│   ├── security-audit/
│   ├── how-it-works/
│   ├── industries/
│   ├── about/
│   ├── insights/[slug]/    # Articles
│   ├── contact/
│   ├── request-assessment/ # Primary conversion
│   ├── privacy/ terms/ security/
│   ├── sitemap.ts robots.ts
│   └── not-found.tsx
├── components/
│   ├── navigation/ hero/ services/ soc/ pentesting/
│   ├── compliance/ industries/ forms/ footer/
│   ├── viz/                # SVG diagrams + dashboard mockups
│   └── ui/                 # Primitives
├── content/                # All copy and data
└── lib/                    # seo.ts, forms.ts
scripts/generate-og.mjs     # Builds public/og.png at prebuild
```

---

## Conventions

- **No fabricated facts.** If it can't be evidenced, it doesn't ship. Product
  mockups are labelled "Illustrative interface"; funnel figures are labelled as
  conceptual examples.
- **No 24/7 claim** until it is true — see `coverageStatement` in `site.ts`.
- **No certification claims.** Assurance work is described as readiness and
  assessment support; ISO 27001 certification is issued by accredited bodies.
- Diagrams are inline SVG components so they inherit design tokens and stay
  crisp at any resolution.
