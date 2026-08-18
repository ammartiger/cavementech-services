/**
 * Managed SOC / MDR content: capabilities, delivery process, the alert-to-
 * incident workflow and the service-level dimensions we scope against.
 *
 * Technology names listed here describe the customer-side estate we collect
 * telemetry from — not vendor partnerships or certifications.
 */

export type Capability = {
  id: string;
  title: string;
  summary: string;
  detail: string[];
};

export const socCapabilities: Capability[] = [
  {
    id: "continuous-monitoring",
    title: "We Monitor. We Inform You.",
    summary:
      "Your endpoints, servers, identities, cloud workloads and network are watched continuously — and the moment something matters, you hear it from us.",
    detail: [
      "Security telemetry is collected from the systems that actually matter to your business, then normalised so events from different sources can be correlated against each other. Monitoring runs continuously; you do not have to watch anything yourself.",
      "The second half is the part that matters: when activity is confirmed as a genuine threat, we contact you directly — with what happened, what it affected, how urgent it is and what we recommend doing next. You are never left to discover an incident from a dashboard nobody opened.",
    ],
  },
  {
    id: "alert-triage",
    title: "Alert Triage",
    summary:
      "Separating the handful of events that require action from the thousands that do not.",
    detail: [
      "Every detection is assessed against asset criticality, user context, prior behaviour and known-good activity in your environment before it reaches you.",
      "Tuning is continuous. A detection that produces noise is investigated and refined, not silenced.",
    ],
  },
  {
    id: "threat-detection",
    title: "Threat Detection",
    summary:
      "Detection content mapped to real attacker behaviour, not just signatures.",
    detail: [
      "Suspicious authentication, privilege escalation, credential access, persistence, defence evasion, lateral movement and command-and-control patterns.",
      "Detection logic is written and maintained by the same people who run offensive assessments — so it reflects how intrusions actually unfold.",
    ],
  },
  {
    id: "investigation",
    title: "Investigation",
    summary:
      "Analysts reconstruct what happened, in what order, and what it touched.",
    detail: [
      "An alert is a single frame. Investigation produces the timeline: initial access, what the account or host did next, what data or systems were in scope, and whether the activity is contained.",
      "You receive the reconstructed narrative and the evidence behind it, not a raw event dump.",
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    summary:
      "Confirmed incidents are classified, escalated and driven to containment.",
    detail: [
      "Response actions are agreed with you in advance so there is no ambiguity during an incident about who can isolate a host, disable an account or block an address.",
      "We coordinate with your IT team, your MSP or your vendors as required, and stay engaged through remediation.",
    ],
  },
  {
    id: "threat-hunting",
    title: "Threat Hunting",
    summary:
      "Proactively looking for what automated detection did not flag.",
    detail: [
      "Hypothesis-driven hunts across collected telemetry, informed by current attacker tradecraft and by findings from our own offensive engagements.",
      "Hunts that find something become new detection content. Hunts that find nothing still tell you where your visibility gaps are.",
    ],
  },
  {
    id: "customer-notification",
    title: "Direct Notification",
    summary:
      "Confirmed incidents reach a human on your side by phone, WhatsApp or email — whichever route you nominate.",
    detail: [
      "You tell us during onboarding who should be contacted, on which channel, and at what severity. Critical incidents get a call; lower severities get written notification. Nothing important waits in a queue for someone to notice it.",
      "Every notification carries the same structure: what we detected, what it affected, our assessment of severity, the evidence behind it, and the action we recommend — so the person receiving it can decide immediately rather than asking follow-up questions.",
    ],
  },
  {
    id: "security-reporting",
    title: "Security Reporting",
    summary:
      "Regular reporting written to be read by both engineers and executives.",
    detail: [
      "Incident summaries, detection coverage, recurring weaknesses and prioritised recommendations you can actually action.",
      "Reporting is designed to support PTA, SBP and SECP evidence requirements, and board reporting, without being padded to look substantial.",
    ],
  },
];

/** The six-step delivery model. */
export const socProcess = [
  {
    step: "01",
    title: "Connect",
    body: "Security agents and log sources are connected to the monitoring platform. We agree scope, asset criticality and escalation paths before anything goes live.",
  },
  {
    step: "02",
    title: "Collect",
    body: "Telemetry is collected from endpoints, servers, identity providers, applications and network infrastructure, then normalised into a common event model.",
  },
  {
    step: "03",
    title: "Detect",
    body: "Detection rules and security analytics identify suspicious activity — authentication anomalies, privilege changes, malware behaviour, persistence and lateral movement.",
  },
  {
    step: "04",
    title: "Investigate",
    body: "Analysts correlate related events, establish what actually happened, and determine whether the activity is benign, suspicious or a confirmed incident.",
  },
  {
    step: "05",
    title: "Respond",
    body: "Confirmed incidents are classified and escalated through the agreed path, with containment and remediation actions coordinated against pre-approved playbooks.",
  },
  {
    step: "06",
    title: "Improve",
    body: "Findings from incidents, hunts and offensive assessments feed back into detection content, so coverage improves against the attacks that matter to you.",
  },
] as const;

/** Alert → customer communication workflow (spec §17). */
export const alertWorkflow = [
  { label: "Security Event", note: "Raw telemetry from your estate" },
  { label: "Automated Detection", note: "Analytics and detection rules" },
  { label: "SOC Analyst Review", note: "Human assessment of context" },
  { label: "Investigation", note: "Timeline and scope reconstruction" },
  { label: "Incident Classification", note: "Severity and impact assigned" },
  { label: "Customer Notification", note: "Actionable incident, with evidence" },
  { label: "Response / Remediation", note: "Containment and follow-through" },
] as const;

/** Telemetry sources shown in the architecture diagram. */
export const telemetrySources = [
  "Endpoint Security",
  "Windows",
  "Linux",
  "Active Directory",
  "Microsoft 365",
  "Firewall",
  "Cloud",
  "Applications",
] as const;

/** Dimensions that service levels are scoped against (spec §18 — no fake SLAs). */
export const slaDimensions = [
  {
    title: "Monitoring Coverage",
    body: "Which systems, identities and environments are in scope, and at what depth.",
  },
  {
    title: "Response Requirements",
    body: "Target acknowledgement and escalation timelines for each severity level.",
  },
  {
    title: "Operating Hours",
    body: "Business-hours, extended-hours or continuous coverage, including 24/7 options.",
  },
  {
    title: "Business Criticality",
    body: "Which assets and processes justify the fastest response, and which do not.",
  },
  {
    title: "Organisation Size",
    body: "Endpoint and server counts, user population and rate of change.",
  },
  {
    title: "Response Authority",
    body: "Which containment actions we are pre-authorised to take on your behalf.",
  },
] as const;

/** Traditional in-house build vs managed operations (spec §39). */
export const buildVsManaged = {
  traditional: {
    title: "Building it yourself",
    items: [
      "SIEM licensing and engineering",
      "EDR tooling and tuning",
      "Log storage and retention",
      "Detection engineering capability",
      "Analyst headcount across shifts",
      "Incident response expertise",
      "Recruitment, training and retention",
    ],
  },
  managed: {
    title: "Managed security operations",
    items: [
      "Security telemetry collection",
      "Detection content, maintained",
      "Alert triage and noise reduction",
      "Human analyst investigation",
      "Coordinated incident response",
      "Threat hunting",
      "Offensive validation of the result",
    ],
  },
} as const;
