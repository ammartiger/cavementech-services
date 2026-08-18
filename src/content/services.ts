/**
 * Service catalogue: the three pillars, offensive-security engagements and
 * security-assurance engagements.
 *
 * Wording note: nothing here claims accreditation to issue certifications. The
 * assurance services are described as readiness, assessment and gap analysis
 * support, which is what they are.
 */

export type ServicePillar = {
  id: string;
  eyebrow: string;
  title: string;
  href: string;
  summary: string;
  points: string[];
  cta: { label: string; href: string };
};

export const servicePillars: ServicePillar[] = [
  {
    id: "managed-soc",
    eyebrow: "Primary service",
    title: "Managed SOC & MDR",
    href: "/managed-soc",
    summary:
      "Continuous monitoring, detection, investigation and coordinated response across your endpoints, servers, identities and cloud environments.",
    points: [
      "Security telemetry collection and correlation",
      "Alert triage and noise reduction",
      "Analyst-led investigation",
      "Incident response and containment",
      "Threat hunting and detection engineering",
    ],
    cta: { label: "Explore Managed SOC", href: "/managed-soc" },
  },
  {
    id: "offensive-security",
    eyebrow: "Offensive security",
    title: "Penetration Testing",
    href: "/penetration-testing",
    summary:
      "Controlled, scoped assessments that establish how an attacker would actually reach your critical systems and data — and whether anyone would notice.",
    points: [
      "External and internal network testing",
      "Web application and API security testing",
      "Active Directory security assessment",
      "Cloud configuration and identity review",
      "Red and purple team exercises",
    ],
    cta: { label: "Request a Penetration Test", href: "/penetration-testing" },
  },
  {
    id: "security-assurance",
    eyebrow: "Security assurance",
    title: "Audits & Compliance",
    href: "/security-audit",
    summary:
      "Independent assessment of where your controls actually stand, plus readiness support for the requirements Pakistani organisations are held to — PTA, SBP, SECP and ISO 27001.",
    points: [
      "PTA CTDISR readiness and gap assessment",
      "SBP ETGRM control assessment",
      "ISO 27001 readiness support",
      "Cybersecurity gap and risk assessments",
      "Vendor and third-party security review",
    ],
    cta: { label: "Assess Your Security Posture", href: "/security-audit" },
  },
];

/** Trust / value strip directly under the hero (spec §7). */
export const trustPoints = [
  "Continuous Security Monitoring",
  "Threat Detection & Response",
  "Offensive Security Expertise",
  "Compliance & Security Assurance",
  "Human-Led Security Operations",
] as const;

/** The alert-fatigue problem statement (spec §8). */
export const alertSources = [
  "Suspicious logins",
  "Endpoint detections",
  "Vulnerability notifications",
  "Firewall events",
  "Identity anomalies",
  "Phishing reports",
  "PowerShell activity",
  "Lateral movement indicators",
] as const;

export const missingCapabilities = [
  "Analysts available outside business hours",
  "Threat hunters",
  "Detection engineers",
  "Incident responders",
  "SIEM and log-analytics expertise",
] as const;

/* ==========================================================================
   Offensive security engagements
   ========================================================================== */

export type Engagement = {
  id: string;
  title: string;
  summary: string;
  scope: string[];
};

export const pentestServices: Engagement[] = [
  {
    id: "external-network",
    title: "External Network Penetration Testing",
    summary:
      "Establish what an attacker can reach, enumerate and exploit from the internet, before someone else does it uninvited.",
    scope: [
      "Attack-surface discovery and service enumeration",
      "Exposed management interfaces and remote access",
      "Authentication weaknesses and credential exposure",
      "Unpatched and misconfigured internet-facing services",
      "Exploitation and verified proof of impact",
    ],
  },
  {
    id: "internal-network",
    title: "Internal Network Penetration Testing",
    summary:
      "Assume a foothold exists. Establish how far it goes, how fast, and what it reaches.",
    scope: [
      "Lateral movement and internal attack paths",
      "Credential harvesting and reuse",
      "Network segmentation effectiveness",
      "Privilege escalation to domain or infrastructure control",
      "Access to business-critical systems and data",
    ],
  },
  {
    id: "web-application",
    title: "Web Application Security Testing",
    summary:
      "Manual, business-logic-aware testing of your applications — not a scanner report with a cover page.",
    scope: [
      "Authentication and session management",
      "Authorisation and access-control enforcement",
      "Injection and input-handling flaws",
      "Business-logic abuse",
      "Client-side and OWASP Top 10 risk categories",
    ],
  },
  {
    id: "api-security",
    title: "API Security Testing",
    summary:
      "APIs fail differently to web front-ends. They are tested as their own attack surface.",
    scope: [
      "Authentication and token handling",
      "Object and function level authorisation",
      "Rate limiting and resource consumption",
      "Business-logic and workflow abuse",
      "Data exposure in responses",
    ],
  },
  {
    id: "active-directory",
    title: "Active Directory Security Assessment",
    summary:
      "Active Directory is the control plane of most enterprise networks. It is assessed as such.",
    scope: [
      "Kerberos security and delegation configuration",
      "Privilege escalation and attack-path analysis",
      "ACL and object permission review",
      "AD Certificate Services (AD CS) misconfiguration",
      "Credential exposure and lateral movement",
      "Group Policy and identity security posture",
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud Security Assessment",
    summary:
      "Cloud breaches are rarely exploits. They are identity, configuration and trust-relationship failures.",
    scope: [
      "Identity and access management review",
      "Configuration and hardening assessment",
      "Storage and data exposure",
      "Privilege escalation and attack paths",
      "Logging and monitoring coverage",
    ],
  },
  {
    id: "red-purple-team",
    title: "Red & Purple Team Exercises",
    summary:
      "Realistic attack simulation used to validate whether detection and response actually work under pressure.",
    scope: [
      "Objective-based attack simulation",
      "Detection and response validation",
      "Collaborative purple-team detection tuning",
      "Documented attack timeline against defender timeline",
      "Prioritised detection-improvement plan",
    ],
  },
];

/* ==========================================================================
   Security assurance engagements
   ========================================================================== */

export const auditServices: Engagement[] = [
  {
    id: "gap-assessment",
    title: "Cybersecurity Gap Assessment",
    summary:
      "A structured view of the distance between your current controls and where they need to be.",
    scope: [
      "Control coverage against a chosen framework",
      "Technical and organisational gaps",
      "Prioritised, costed remediation roadmap",
      "Quick wins separated from structural work",
    ],
  },
  {
    id: "security-audit",
    title: "Security Audit",
    summary:
      "Independent review of how security is actually implemented and operated — not how it is documented.",
    scope: [
      "Technical control verification",
      "Configuration and hardening review",
      "Access control and privilege review",
      "Logging, monitoring and retention review",
    ],
  },
  {
    id: "risk-assessment",
    title: "Cybersecurity Risk Assessment",
    summary:
      "Risk expressed in terms of business impact and likelihood, so leadership can make funding decisions.",
    scope: [
      "Asset and data criticality mapping",
      "Threat and scenario analysis",
      "Existing control effectiveness",
      "Residual risk and treatment options",
    ],
  },
  {
    id: "iso-27001-readiness",
    title: "ISO 27001 Readiness Support",
    summary:
      "Preparation and assessment support ahead of formal certification by an accredited certification body.",
    scope: [
      "Scope definition and gap analysis against ISO/IEC 27001",
      "ISMS documentation and policy support",
      "Control implementation guidance",
      "Internal readiness review before external audit",
    ],
  },
  {
    id: "policy-review",
    title: "Security Policy Assessment",
    summary:
      "Policies that reflect how the organisation actually operates, and are enforceable in practice.",
    scope: [
      "Policy set review and gap identification",
      "Alignment with technical reality",
      "Practicality and enforceability review",
      "Drafting and revision support",
    ],
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    summary:
      "Broad, repeatable identification and prioritisation of known weaknesses across your estate.",
    scope: [
      "Authenticated and unauthenticated scanning",
      "Validation to remove false positives",
      "Risk-based prioritisation",
      "Remediation tracking support",
    ],
  },
  {
    id: "vendor-security",
    title: "Vendor & Third-Party Security Assessment",
    summary:
      "Your suppliers' security becomes your exposure. Assess it before it becomes your incident.",
    scope: [
      "Third-party security questionnaire review",
      "Evidence validation",
      "Risk rating and escalation criteria",
      "Contractual security requirement support",
    ],
  },
  {
    id: "pta-ctdisr",
    title: "PTA CTDISR Readiness",
    summary:
      "Preparation for the Critical Telecom Data and Infrastructure Security Regulations that PTA licensees are held to.",
    scope: [
      "Gap assessment against CTDISR control areas",
      "ISMS and incident response capability build-out",
      "Evidence pack preparation ahead of the formal audit",
      "Remediation of findings before an approved auditor attends",
      "Note: the mandatory compliance audit itself must be performed by a PTA-approved auditor",
    ],
  },
  {
    id: "sbp-etgrm",
    title: "SBP ETGRM & Financial Sector Assessment",
    summary:
      "Control assessment against State Bank of Pakistan expectations for banks, MFBs, DFIs and payment sector entities.",
    scope: [
      "Gap assessment against the ETGRM framework",
      "Technical verification that documented controls actually operate",
      "Payment flow and digital channel security review",
      "Outsourcing and third-party risk assessment",
      "Board and audit-committee reporting pack",
    ],
  },
  {
    id: "regulatory-assessment",
    title: "SECP & Sector Requirement Assessment",
    summary:
      "Assessment support against the security requirements applying to your regulator, your sector and your customers.",
    scope: [
      "Applicable requirement mapping (SECP, sector circulars, customer contracts)",
      "Control gap identification",
      "Evidence readiness review",
      "Remediation planning",
    ],
  },
];

/* ==========================================================================
   Differentiation (spec §20)
   ========================================================================== */

export const whyUs = [
  {
    title: "Offensive Security Expertise",
    body: "Our detection engineering is written by people who spend the rest of their time breaking into environments. We understand how compromises actually happen, not how they are described in vendor documentation.",
  },
  {
    title: "Security Operations",
    body: "Continuous monitoring, investigation and response — the operational discipline that turns security tooling into an actual defensive capability.",
  },
  {
    title: "Practical Security",
    body: "Recommendations are scoped to what your organisation can realistically implement, sequenced by risk reduction per unit of effort.",
  },
  {
    title: "Human-Led",
    body: "Automation handles scale and correlation. Judgement calls about whether something is an incident stay with an analyst.",
  },
  {
    title: "Continuous Improvement",
    body: "Every incident, hunt and offensive engagement produces detection content. Coverage compounds over time rather than going stale.",
  },
  {
    title: "One Security Partner",
    body: "Monitoring, testing and assurance under one organisation, so findings from one discipline immediately strengthen the others.",
  },
] as const;
