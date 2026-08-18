/**
 * FAQ content. Rendered on-page and emitted as FAQPage JSON-LD.
 * Keep answers factual — this content is machine-read by search engines.
 */

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "What is Managed Detection and Response (MDR)?",
    a: "Managed Detection and Response is a service where an external security team collects security telemetry from your environment, detects suspicious activity, investigates it, and coordinates the response to confirmed incidents. It provides the operational capability of a security operations centre without the organisation building and staffing one internally.",
  },
  {
    q: "How is this different from buying a SIEM or an EDR product?",
    a: "Those products generate detections. They do not investigate them, decide whether an alert matters, reconstruct an attack timeline or coordinate containment. A managed SOC provides the analysts and process that turn tooling output into decisions and actions.",
  },
  {
    q: "Do you provide 24/7 monitoring?",
    a: "Monitoring coverage is scoped to your requirements, including 24/7 options. Coverage hours, response targets and escalation paths are agreed during scoping rather than sold as a fixed package.",
  },
  {
    q: "Are we too small for a managed SOC?",
    a: "No. The service is scoped by environment size and risk, which is precisely why organisations that cannot justify their own security team use it. Small and mid-sized organisations with Microsoft 365, Active Directory or Entra ID, Windows endpoints and servers are a core part of who this is built for.",
  },
  {
    q: "What makes an offensive-security background relevant to monitoring?",
    a: "Detection content is only as good as the understanding of the attacks it is meant to catch. Because the same organisation performs penetration testing and Active Directory assessments, detection logic is written against techniques observed in real engagements, and monitoring gaps found during testing are fed directly back into detection.",
  },
  {
    q: "What happens during a security assessment request?",
    a: "You share basic details about your environment — size, systems in use, existing security tooling and what is prompting the enquiry. We use that to establish scope and discuss which combination of monitoring, testing or assurance work fits, before any commercial discussion.",
  },
];

export const socFaqs: Faq[] = [
  {
    q: "What telemetry do you need from our environment?",
    a: "Typically endpoint and server security telemetry, identity and authentication logs, cloud platform audit logs, and network or firewall logs. The exact set is agreed during scoping based on which systems carry your actual risk.",
  },
  {
    q: "Will we receive raw alerts?",
    a: "No. Triage and investigation happen before you are contacted. You receive classified, evidenced incidents with a recommended course of action — not an alert feed.",
  },
  {
    q: "Can you take response actions on our behalf?",
    a: "Where you pre-authorise them. Response authority — such as isolating a host, disabling an account or blocking an address — is agreed in advance and documented so there is no ambiguity during an incident.",
  },
  {
    q: "How is our data kept separate from other customers?",
    a: "Customer telemetry is logically separated with access controls that restrict each customer's access to their own environment. Analysts work across customers; customers do not.",
  },
];

export const pentestFaqs: Faq[] = [
  {
    q: "How is a penetration test different from a vulnerability scan?",
    a: "A vulnerability scan identifies known weaknesses across a broad surface. A penetration test establishes what an attacker can actually achieve by chaining weaknesses, configuration issues and design decisions together, and demonstrates the resulting impact.",
  },
  {
    q: "Will testing disrupt our production systems?",
    a: "Rules of engagement, testing windows and out-of-scope systems are agreed in writing before any testing begins. Techniques with a realistic risk of disruption are either excluded or scheduled and coordinated with your team.",
  },
  {
    q: "What do we receive at the end?",
    a: "A report covering the attack paths identified, demonstrated impact, supporting evidence, and prioritised remediation guidance — plus a walkthrough session for the technical team and a summary suitable for leadership.",
  },
  {
    q: "Can testing be used to validate our detection capability?",
    a: "Yes. A purple-team engagement runs the attack alongside your defenders so that each technique is mapped against whether it was detected, and detection content is tuned collaboratively during the exercise.",
  },
];

export const auditFaqs: Faq[] = [
  {
    q: "Can you certify us against ISO 27001?",
    a: "No. Certification can only be issued by an accredited certification body. We provide readiness support and assessment: gap analysis, documentation and control implementation guidance, and internal readiness review before your external audit.",
  },
  {
    q: "What is the difference between an audit and a gap assessment?",
    a: "A gap assessment measures your current controls against a target framework and produces a roadmap to close the difference. An audit independently verifies how controls are actually implemented and operated in practice.",
  },
  {
    q: "Do you help with remediation, or only assessment?",
    a: "Both. Assessment output is a prioritised remediation plan, and we can support delivery of that plan — including implementing monitoring for the control gaps that require ongoing detection rather than a one-off fix.",
  },
];
