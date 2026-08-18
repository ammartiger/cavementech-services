/**
 * Pricing content.
 *
 * A single honest entry point rather than an invented rate card: the starting
 * figure is real, and everything that would move it is stated openly instead of
 * being discovered later in a proposal.
 */

export const pricingIncluded = [
  "Telemetry collection from your endpoints, servers, identities and cloud",
  "Detection content, written and maintained against real attacker techniques",
  "Alert triage — you never receive the raw queue",
  "Analyst-led investigation with a reconstructed attack timeline",
  "Incident notification with evidence and a recommended course of action",
  "Response coordination within the authority you pre-approve",
  "Regular security reporting for both engineers and leadership",
] as const;

export const pricingFactors = [
  {
    title: "Estate size",
    body: "Number of endpoints, servers and identities actually in scope — not a headcount-based band.",
  },
  {
    title: "Coverage hours",
    body: "Business hours, extended hours or continuous coverage, including 24/7 options.",
  },
  {
    title: "Environment complexity",
    body: "Number and type of telemetry sources, and how much normalisation they require.",
  },
  {
    title: "Response authority",
    body: "Whether we are pre-authorised to contain, or escalate only.",
  },
  {
    title: "Compliance obligations",
    body: "Evidence and reporting requirements from PTA, SBP, SECP or your customers.",
  },
  {
    title: "Engagement mix",
    body: "Whether monitoring is combined with penetration testing or assurance work.",
  },
] as const;

/**
 * Commitments about how we price — each one is a thing we will actually do,
 * not a slogan.
 */
export const pricingPrinciples = [
  {
    title: "Scoped before quoted",
    body: "We establish what you run and where the risk sits before quoting. A number produced before that is a guess with a price attached.",
  },
  {
    title: "Priced in rupees",
    body: "Billing in PKR, so your costs do not move with the exchange rate. No dollar-denominated surprises at renewal.",
  },
  {
    title: "No padding",
    body: "We will tell you when a smaller engagement answers your question — including when the honest answer is that you do not need us yet.",
  },
] as const;
