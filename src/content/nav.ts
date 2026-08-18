export type NavLink = {
  label: string;
  href: string;
  /** Short line shown in the desktop mega-dropdown. */
  blurb?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    children: [
      {
        label: "Managed SOC / MDR",
        href: "/managed-soc",
        blurb: "Continuous monitoring, detection, investigation and response.",
      },
      {
        label: "Penetration Testing",
        href: "/penetration-testing",
        blurb: "Network, web, API, Active Directory and cloud assessments.",
      },
      {
        label: "Security Audits & Compliance",
        href: "/security-audit",
        blurb: "Gap assessments, risk reviews and ISO 27001 readiness.",
      },
      {
        label: "Incident Response",
        href: "/managed-soc#incident-response",
        blurb: "Containment, escalation and coordinated remediation.",
      },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Managed SOC / MDR", href: "/managed-soc" },
      { label: "Penetration Testing", href: "/penetration-testing" },
      { label: "Security Audits & Compliance", href: "/security-audit" },
      { label: "Incident Response", href: "/managed-soc#incident-response" },
      { label: "Threat Hunting", href: "/managed-soc#threat-hunting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Request an Assessment", href: "/request-assessment" },
      { label: "Security Disclosure", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];
