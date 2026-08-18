/**
 * FAQ content. Rendered on-page and emitted as FAQPage JSON-LD.
 * Keep answers factual — this content is machine-read by search engines.
 */

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "What is Managed Detection and Response (MDR)?",
    a: "Managed Detection and Response is a service where an external security team collects security telemetry from your environment, detects suspicious activity, investigates it, and tells you directly when something requires action. It provides the operational capability of a security operations centre without your organisation building and staffing one.",
  },
  {
    q: "What does it cost?",
    a: "Managed SOC starts from Rs 10,000 per endpoint or server. Final pricing depends on how many systems are actually in scope, the coverage hours you need, how complex your environment is, and whether monitoring is combined with penetration testing or assurance work. We scope before quoting and confirm pricing in writing.",
  },
  {
    q: "Do you monitor continuously, and how would we find out about an incident?",
    a: "Monitoring runs continuously across the systems in scope. When activity is confirmed as a genuine threat, we contact you directly on the channel you nominate during onboarding — phone, WhatsApp or email — with what happened, what it affected, how urgent it is and what we recommend. You do not have to watch a dashboard to find out.",
  },
  {
    q: "How is this different from buying a SIEM or an EDR product?",
    a: "Those products generate detections. They do not investigate them, decide whether an alert matters, reconstruct an attack timeline, or call you when it counts. A managed SOC provides the analysts and process that turn tooling output into decisions and actions.",
  },
  {
    q: "Do you provide 24/7 monitoring?",
    a: "Monitoring coverage is scoped to your requirements, including 24/7 options. Coverage hours, response targets and escalation paths are agreed during scoping rather than sold as a fixed package.",
  },
  {
    q: "Can you help with PTA, SBP or ISO 27001 requirements?",
    a: "Yes — as readiness and assessment support. We perform gap assessment against PTA CTDISR control areas, SBP ETGRM expectations, SECP requirements and ISO/IEC 27001, help you close the gaps, and prepare your evidence. Note that the mandatory CTDISR compliance audit must be carried out by a PTA-approved auditor, and ISO 27001 certification is issued by an accredited certification body — we are neither, and we say so upfront.",
  },
  {
    q: "Are we too small for a managed SOC?",
    a: "No. The service is scoped by environment size and risk, which is precisely why organisations that cannot justify their own security team use it. Small and mid-sized organisations running Microsoft 365, Active Directory or Entra ID, Windows endpoints and servers are a core part of who this is built for.",
  },
  {
    q: "What makes an offensive-security background relevant to monitoring?",
    a: "Detection content is only as good as the understanding of the attacks it is meant to catch. Because the same team performs penetration testing and Active Directory assessments, detection logic is written against techniques observed in real engagements, and monitoring gaps found during testing feed directly back into detection.",
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
    q: "How will you notify us when something happens?",
    a: "On the channel and to the people you nominate during onboarding. Critical incidents get a phone call; lower severities get written notification by WhatsApp or email. Every notification states what we detected, what it affected, the severity, the supporting evidence and our recommended action.",
  },
  {
    q: "Can you take response actions on our behalf?",
    a: "Where you pre-authorise them. Response authority — such as isolating a host, disabling an account or blocking an address — is agreed in advance and documented so there is no ambiguity during an incident.",
  },
  {
    q: "How is our data kept separate from other customers?",
    a: "Customer telemetry is logically separated with access controls that restrict each customer's access to their own environment. Analysts work across customers; customers do not.",
  },
  {
    q: "How is Managed SOC priced?",
    a: "From Rs 10,000 per endpoint or server, billed in Pakistani rupees so your costs do not move with the exchange rate. What moves the figure is estate size, coverage hours, environment complexity, response authority and any compliance evidence requirements.",
  },
];

export const pentestFaqs: Faq[] = [
  {
    q: "How is a penetration test different from a vulnerability scan?",
    a: "A vulnerability scan identifies known weaknesses across a broad surface. A penetration test establishes what an attacker can actually achieve by chaining weaknesses, configuration issues and design decisions together, and demonstrates the resulting impact.",
  },
  {
    q: "Do you need written authorisation before testing?",
    a: "Always. Under the Prevention of Electronic Crimes Act 2016, unauthorised access to an information system is a criminal offence in Pakistan. Every engagement begins with a signed authorisation defining scope, testing windows, out-of-scope systems and escalation contacts. We do not test without it.",
  },
  {
    q: "Will testing disrupt our production systems?",
    a: "Rules of engagement, testing windows and out-of-scope systems are agreed in writing before any testing begins. Techniques with a realistic risk of disruption are either excluded or scheduled and coordinated with your team.",
  },
  {
    q: "What do we receive at the end?",
    a: "A report covering the attack paths identified, demonstrated impact, supporting evidence, and prioritised remediation guidance — plus a walkthrough session for your technical team, a summary suitable for leadership, and retesting to confirm fixes actually closed the issue.",
  },
  {
    q: "Can testing be used to validate our detection capability?",
    a: "Yes. A purple-team engagement runs the attack alongside your defenders so each technique is mapped against whether it was detected, and detection content is tuned collaboratively during the exercise.",
  },
];

export const auditFaqs: Faq[] = [
  {
    q: "Can you perform our mandatory PTA CTDISR audit?",
    a: "No. The formal CTDISR compliance audit must be performed by a PTA-approved auditor, and we are not on that list. What we do is the work around it: gap assessment against the control areas, building the incident response capability the regulations assume, remediating findings and preparing your evidence pack so the approved auditor's engagement goes smoothly.",
  },
  {
    q: "Can you certify us against ISO 27001?",
    a: "No. Certification can only be issued by an accredited certification body. We provide readiness support and assessment: scope definition, gap analysis, ISMS documentation, control implementation guidance, and internal readiness review before your external audit.",
  },
  {
    q: "What can you do for SBP-regulated institutions?",
    a: "Gap assessment against the State Bank's Enterprise Technology Governance & Risk Management framework, technical verification that documented controls actually operate, payment channel security review, outsourcing and third-party risk assessment, and reporting suitable for your board and audit committee.",
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
