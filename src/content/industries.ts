/**
 * Industry positioning.
 *
 * Wording note: sector-specific regulations are referenced only as context that
 * organisations in that sector commonly work under. Nothing here claims we
 * certify, attest or guarantee regulatory outcomes, and no customer in any
 * sector is named or implied.
 */

export type Industry = {
  id: string;
  name: string;
  /** Icon key resolved by components/ui/IndustryIcon.tsx */
  icon: string;
  pressure: string;
  focus: string[];
};

export const industries: Industry[] = [
  {
    id: "technology",
    name: "Technology & SaaS",
    icon: "cloud",
    pressure:
      "Customer security questionnaires, rapid release cycles and cloud estates that change faster than documentation.",
    focus: [
      "Cloud and identity monitoring",
      "Application and API security testing",
      "Security evidence for enterprise customer reviews",
    ],
  },
  {
    id: "financial-services",
    name: "Financial Services",
    icon: "bank",
    pressure:
      "High-value targeting, fraud-adjacent attack patterns and sustained supervisory scrutiny of security controls.",
    focus: [
      "Identity and privileged access monitoring",
      "Detection tuned to fraud and account-takeover patterns",
      "Control assessment and audit readiness",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "health",
    pressure:
      "Sensitive patient data, clinical systems that cannot simply be taken offline, and mixed legacy estates.",
    focus: [
      "Monitoring that accounts for clinical availability constraints",
      "Access control and data-exposure review",
      "Ransomware readiness and response planning",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: "education",
    pressure:
      "Open networks, large transient user populations and constrained security budgets.",
    focus: [
      "Identity and credential-abuse detection",
      "Segmentation and internal attack-path testing",
      "Cost-proportionate monitoring coverage",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    pressure:
      "Production downtime as the dominant risk, alongside converging IT and operational technology networks.",
    focus: [
      "IT/OT boundary and segmentation review",
      "Availability-aware response playbooks",
      "Supply-chain and vendor access assessment",
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    icon: "briefcase",
    pressure:
      "Confidential client data, heavy email exposure and client-driven security due diligence.",
    focus: [
      "Microsoft 365 and identity monitoring",
      "Business email compromise detection",
      "Client security due-diligence support",
    ],
  },
  {
    id: "government-public",
    name: "Government & Public Sector",
    icon: "shield",
    pressure:
      "Targeted threat activity, public accountability and procurement-driven security requirements.",
    focus: [
      "Continuous monitoring against targeted activity",
      "Independent security assessment",
      "Documented control evidence",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: "cart",
    pressure:
      "Payment flows, credential stuffing at scale and revenue that stops the moment the platform does.",
    focus: [
      "Application and API security testing",
      "Automated-abuse and account-takeover detection",
      "Cardholder-environment control assessment",
    ],
  },
];
