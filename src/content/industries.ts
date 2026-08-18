/**
 * Industry positioning for the Pakistani market.
 *
 * Wording note: regulators and frameworks are referenced only as the
 * environment organisations in that sector operate under. Nothing here claims
 * we certify, attest to or guarantee a regulatory outcome, and no customer in
 * any sector is named or implied.
 */

export type Industry = {
  id: string;
  name: string;
  /** Icon key resolved by the consuming component. */
  icon: string;
  /** Regulator or driver, shown as a small tag. */
  driver?: string;
  pressure: string;
  focus: string[];
};

export const industries: Industry[] = [
  {
    id: "banking",
    name: "Banking & Microfinance",
    icon: "bank",
    driver: "SBP",
    pressure:
      "State Bank expectations on technology governance and information security, sustained targeting of digital channels, and inspection cycles that require evidence rather than intent.",
    focus: [
      "SBP ETGRM control gap assessment",
      "Privileged access and identity monitoring",
      "Detection tuned to account-takeover and fraud patterns",
      "Board and audit-committee reporting",
    ],
  },
  {
    id: "fintech-payments",
    name: "Fintech & Payments",
    icon: "cart",
    driver: "SBP · PSO/PSP",
    pressure:
      "Authorisation conditions, rapid product release cycles, and payment flows where a security failure is immediately a financial one.",
    focus: [
      "Application and API penetration testing",
      "Payment flow and digital channel review",
      "Automated-abuse and fraud detection",
      "Security evidence for partner banks and regulators",
    ],
  },
  {
    id: "telecom-isp",
    name: "Telecom & ISPs",
    icon: "radar",
    driver: "PTA · CTDISR",
    pressure:
      "CTDISR obligations covering information security management, incident response capability, third-party audits and data localisation — with licence standing attached to compliance.",
    focus: [
      "CTDISR readiness and gap assessment",
      "Incident response capability build-out",
      "Evidence preparation ahead of the approved-auditor engagement",
      "Continuous monitoring of critical infrastructure",
    ],
  },
  {
    id: "technology",
    name: "Technology & IT Exports",
    icon: "cloud",
    driver: "Customer due diligence",
    pressure:
      "Overseas clients making security questionnaires and ISO 27001 a condition of contract, alongside cloud estates that change faster than documentation.",
    focus: [
      "ISO 27001 readiness support",
      "Cloud and identity monitoring",
      "Application and API security testing",
      "Security evidence packs for enterprise procurement",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: "cart",
    driver: "PCI DSS · Payment partners",
    pressure:
      "Credential stuffing at scale, payment integrations under scrutiny, and revenue that stops the moment the platform does.",
    focus: [
      "Web application and API testing",
      "Account-takeover and automated-abuse detection",
      "Cardholder environment control assessment",
      "Availability-aware response planning",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Textile",
    icon: "factory",
    driver: "Buyer requirements",
    pressure:
      "Production downtime as the dominant risk, converging IT and operational technology networks, and international buyers increasingly auditing supplier security.",
    focus: [
      "IT/OT boundary and segmentation review",
      "Availability-aware response playbooks",
      "Supply-chain and vendor access assessment",
      "Ransomware readiness",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "health",
    driver: "Patient data",
    pressure:
      "Sensitive patient records, clinical systems that cannot simply be taken offline, and mixed estates with long-lived legacy equipment.",
    focus: [
      "Monitoring that respects clinical availability constraints",
      "Access control and data-exposure review",
      "Ransomware readiness and response planning",
      "Segmentation of clinical and administrative networks",
    ],
  },
  {
    id: "education",
    name: "Education & Universities",
    icon: "education",
    driver: "Research & student data",
    pressure:
      "Open networks, large transient user populations, research data of genuine value, and security budgets that rarely match the attack surface.",
    focus: [
      "Identity and credential-abuse detection",
      "Segmentation and internal attack-path testing",
      "Cost-proportionate monitoring coverage",
      "Student and research data protection review",
    ],
  },
  {
    id: "government-public",
    name: "Government & Public Sector",
    icon: "shield",
    driver: "NCERT · Sector CERTs",
    pressure:
      "Targeted threat activity, national incident-reporting expectations, and procurement rules that require demonstrable security control.",
    focus: [
      "Continuous monitoring against targeted activity",
      "Independent security assessment",
      "Incident reporting workflow aligned to sector CERT expectations",
      "Documented control evidence",
    ],
  },
];
