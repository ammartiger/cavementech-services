/**
 * Regulatory and standards context for the Pakistani market.
 *
 * Accuracy policy for this file:
 *  - Each entry describes who the requirement applies to and what we actually
 *    do about it. We provide readiness, gap assessment and remediation support.
 *  - We are NOT a PTA-approved auditor and NOT an accredited certification
 *    body. Where a mandatory audit must be performed by an approved or
 *    accredited third party, that is stated plainly in `ourRole`. Blurring that
 *    line would be a compliance misrepresentation — from a company selling
 *    compliance services, that is disqualifying.
 */

export type Framework = {
  id: string;
  short: string;
  full: string;
  regulator: string;
  appliesTo: string;
  summary: string;
  /** Exactly what we do — and, where relevant, what we cannot do. */
  ourRole: string;
};

export const pakistanFrameworks: Framework[] = [
  {
    id: "ctdisr",
    short: "PTA CTDISR",
    full: "Critical Telecom Data and Infrastructure Security Regulations, 2020",
    regulator: "Pakistan Telecommunication Authority (PTA)",
    appliesTo:
      "PTA licensees — telecom operators, internet service providers and other licensed service providers.",
    summary:
      "Requires licensees to implement an information security management system, establish incident response capability, undergo periodic third-party security audits, and meet data localisation and infrastructure protection obligations.",
    ourRole:
      "We perform readiness and gap assessment against CTDISR control areas, help you close the gaps, and prepare your evidence pack. The mandatory compliance audit itself must be carried out by a PTA-approved auditor — we are not one, and we will tell you where to go for it.",
  },
  {
    id: "sbp-etgrm",
    short: "SBP ETGRM",
    full: "Enterprise Technology Governance & Risk Management Framework for Financial Institutions",
    regulator: "State Bank of Pakistan (SBP)",
    appliesTo:
      "Banks, development finance institutions and microfinance banks regulated by SBP.",
    summary:
      "Sets expectations for technology governance, information security, risk management, change control, business continuity and outsourcing oversight across regulated financial institutions.",
    ourRole:
      "Control gap assessment against the framework, technical verification that documented controls actually operate, remediation planning, and continuous monitoring for the control areas that require ongoing detection rather than a one-off fix.",
  },
  {
    id: "sbp-psops",
    short: "SBP Payment Systems",
    full: "Regulatory expectations for Payment System Operators and Payment Service Providers",
    regulator: "State Bank of Pakistan (SBP)",
    appliesTo:
      "PSOs, PSPs, EMIs and fintech organisations operating under SBP authorisation.",
    summary:
      "Security expectations covering transaction integrity, customer data protection, fraud controls, access management and incident reporting for digital payment infrastructure.",
    ourRole:
      "Security assessment of payment flows and supporting infrastructure, application and API penetration testing, and monitoring tuned to fraud-adjacent and account-takeover patterns.",
  },
  {
    id: "peca",
    short: "PECA 2016",
    full: "Prevention of Electronic Crimes Act, 2016",
    regulator: "Federal law — enforced by NCCIA",
    appliesTo: "All organisations and individuals in Pakistan.",
    summary:
      "Criminalises unauthorised access to information systems and data, among other electronic offences.",
    ourRole:
      "This is why every offensive engagement we run is preceded by written authorisation defining scope, testing windows and out-of-scope systems. Security testing without that authorisation is not a grey area in Pakistan — it is an offence, and we do not perform it.",
  },
  {
    id: "ncert",
    short: "NCERT",
    full: "National Computer Emergency Response Team",
    regulator: "Ministry of IT & Telecommunication",
    appliesTo:
      "Sectoral CERTs and organisations operating critical information infrastructure.",
    summary:
      "National coordination point for cyber incident reporting, advisories and response across sectors.",
    ourRole:
      "We help you build the internal incident response capability and reporting workflow that sectoral obligations assume you already have, and support you through coordination when an incident requires it.",
  },
  {
    id: "secp",
    short: "SECP Requirements",
    full: "SECP cybersecurity and technology risk expectations",
    regulator: "Securities & Exchange Commission of Pakistan (SECP)",
    appliesTo:
      "Non-bank financial companies, insurance companies, brokerages and listed entities.",
    summary:
      "Technology governance, cybersecurity and operational resilience expectations for SECP-regulated entities.",
    ourRole:
      "Gap assessment, control testing, policy review and board-level risk reporting suitable for submission to your regulator or audit committee.",
  },
  {
    id: "data-protection",
    short: "Data Protection",
    full: "Personal data protection obligations",
    regulator: "Sector regulators; national legislation developing",
    appliesTo: "Any organisation processing personal data of individuals in Pakistan.",
    summary:
      "Pakistan's dedicated personal data protection legislation is still developing, but SBP and PTA already impose consumer data protection obligations on their regulated sectors, and international customers increasingly impose their own contractually.",
    ourRole:
      "We assess where personal data actually lives in your estate, who can reach it, and whether access is logged — the technical groundwork any data protection regime will require, whichever form the final legislation takes.",
  },
  {
    id: "iso-27001",
    short: "ISO/IEC 27001",
    full: "ISO/IEC 27001 Information Security Management",
    regulator: "Accredited certification bodies",
    appliesTo:
      "Any organisation seeking internationally recognised certification, commonly driven by export customers and enterprise procurement.",
    summary:
      "International standard for establishing and operating an information security management system.",
    ourRole:
      "Scope definition, gap analysis, ISMS documentation support, control implementation guidance and internal readiness review before your external audit. Certification itself is issued by an accredited certification body — not by us.",
  },
];

/** Shown where a compact list is more appropriate than full cards. */
export const frameworkShortlist = pakistanFrameworks.map((f) => f.short);
