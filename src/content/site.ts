/**
 * Single source of truth for company-level facts, contact details and legal
 * metadata.
 *
 * All values here are real and confirmed by the business owner. Every page,
 * form, footer and structured-data block reads from this file — change a value
 * once and it propagates site-wide.
 */

export const site = {
  name: "CavemenTech",
  /** Used in page titles and the nav lockup. */
  serviceLine: "Security Services",
  legalName: "CavemenTech",
  domain: "services.cavementech.com",
  url: "https://services.cavementech.com",
  parentSite: "https://cavementech.com",

  tagline: "Managed Cyber Defense",
  positioning: "Security Operations. Offensive Security. Continuous Assurance.",

  /** ~155 chars, used as the default meta description. */
  description:
    "Managed SOC, MDR, penetration testing and security audits in Pakistan. Continuous monitoring, expert incident response and PTA, SBP and ISO 27001 readiness support.",

  contact: {
    email: "contact@cavementech.com",
    /** Sales and security enquiries route to the same monitored mailbox. */
    salesEmail: "contact@cavementech.com",
    securityEmail: "contact@cavementech.com",
    /** Display form. */
    phone: "+92 339 3396940",
    /** E.164, used for tel: and wa.me links. */
    phoneE164: "+923393396940",
    /** wa.me requires the number without a plus or separators. */
    whatsapp: "923393396940",
    address: "Rawalpindi, Pakistan",
    city: "Rawalpindi",
    country: "Pakistan",
    countryCode: "PK",
    region: "Pakistan — serving organisations nationwide",
    /** Pakistan Standard Time, UTC+5. Used for response-window copy. */
    timezone: "PKT (UTC+5)",
    businessHours: "Monday – Saturday, 9:00 – 18:00 PKT",
  },

  /**
   * Coverage language. The site supports the concept of 24/7 operations
   * without claiming they are already running. Set `continuousCoverageLive` to
   * true only when 24/7 staffing genuinely exists, then update
   * `coverageStatement` accordingly.
   */
  continuousCoverageLive: false,
  coverageStatement:
    "Flexible monitoring coverage, including 24/7 options, scoped to your operational requirements.",

  /**
   * Entry pricing. Deliberately expressed as a starting point rather than a
   * rate card — final pricing depends on estate size, coverage hours and
   * environment complexity, all of which are established during scoping.
   */
  pricing: {
    currency: "PKR",
    currencySymbol: "Rs",
    startingFrom: "10,000",
    unit: "per endpoint / server",
    /** Shown wherever the starting price appears. */
    note: "Final pricing depends on estate size, coverage hours and environment complexity, and is confirmed in writing after scoping.",
  },
} as const;

/**
 * Convenience links built from the contact details above, so no component has
 * to hand-assemble a tel:, mailto: or wa.me URL.
 */
export const contactLinks = {
  tel: `tel:${site.contact.phoneE164}`,
  mailto: `mailto:${site.contact.email}`,
  whatsapp: `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hello CavemenTech — I would like to discuss security services for my organisation.",
  )}`,
} as const;
