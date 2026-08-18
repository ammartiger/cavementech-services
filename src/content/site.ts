/**
 * Single source of truth for company-level facts, contact details and legal
 * metadata.
 *
 * IMPORTANT — placeholder policy:
 * Values wrapped in square brackets (e.g. "[PHONE]") are deliberate
 * placeholders. Nothing on this site fabricates a customer, certification,
 * award, statistic, partnership, address or phone number. Replace the
 * bracketed values here and every page picks the change up automatically.
 * Anything still bracketed is rendered in a muted "pending" style by the UI so
 * it is obvious at a glance what still needs real data.
 */

export const site = {
  name: "CavemenTech",
  /** Used in page titles and the nav lockup. */
  serviceLine: "Security Services",
  legalName: "[REGISTERED COMPANY NAME]",
  domain: "services.cavementech.com",
  url: "https://services.cavementech.com",
  parentSite: "https://cavementech.com",

  tagline: "Managed Cyber Defense",
  positioning:
    "Security Operations. Offensive Security. Continuous Assurance.",

  /** ~155 chars, used as the default meta description. */
  description:
    "Managed SOC, MDR, penetration testing and security audits for organizations that need continuous threat detection, expert incident response and independent validation.",

  contact: {
    /** Replace with a real, monitored mailbox. */
    email: "[EMAIL]",
    salesEmail: "[SALES EMAIL]",
    /** Security contact for vulnerability reports (see /security). */
    securityEmail: "[SECURITY EMAIL]",
    phone: "[PHONE]",
    address: "[ADDRESS]",
    /** Displayed on the contact page as the operating region. */
    region: "[OPERATING REGION]",
  },

  social: {
    linkedin: "[LINKEDIN URL]",
    x: "[X / TWITTER URL]",
    github: "[GITHUB URL]",
  },

  /**
   * Coverage language. Per the brief, the site must support the concept of
   * 24/7 operations without claiming they are already running. Change
   * `continuousCoverageLive` to true only when 24/7 staffing genuinely exists,
   * then update `coverageStatement` accordingly.
   */
  continuousCoverageLive: false,
  coverageStatement:
    "Flexible monitoring coverage, including 24/7 options, scoped to your operational requirements.",

  founded: "[YEAR FOUNDED]",
} as const;

/** True when a value is still an unfilled placeholder. */
export function isPlaceholder(value: string): boolean {
  return /^\[.*\]$/.test(value.trim());
}
