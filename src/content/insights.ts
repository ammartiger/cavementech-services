/**
 * Insights / articles.
 *
 * Authorship note: articles are attributed to the company, not to invented
 * individuals. When real authors exist, add an `author` field here and surface
 * it in the article template.
 *
 * `status: "planned"` articles render as an upcoming-topic card rather than a
 * link, so nothing on the site links to an empty page. Move an entry to
 * `status: "published"` and add `body` sections to publish it.
 */

export type InsightCategory =
  | "SOC & MDR"
  | "Threat Detection"
  | "Active Directory Security"
  | "Penetration Testing"
  | "Cloud Security"
  | "Incident Response"
  | "Compliance"
  | "Cybersecurity Strategy";

export const insightCategories: InsightCategory[] = [
  "SOC & MDR",
  "Threat Detection",
  "Active Directory Security",
  "Penetration Testing",
  "Cloud Security",
  "Incident Response",
  "Compliance",
  "Cybersecurity Strategy",
];

export type InsightSection = { heading: string; paragraphs: string[] };

export type Insight = {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  readingTime: string;
  status: "published" | "planned";
  /** ISO date; only set for published articles. */
  date?: string;
  body?: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "why-siem-alerts-alone-dont-create-a-soc",
    title: "Why SIEM Alerts Alone Don't Create a SOC",
    category: "SOC & MDR",
    excerpt:
      "A SIEM produces alerts. A SOC produces decisions. The distance between the two is where most security programmes quietly fail.",
    readingTime: "6 min read",
    status: "published",
    date: "2026-07-14",
    body: [
      {
        heading: "The tool is not the capability",
        paragraphs: [
          "Deploying a SIEM is a procurement event. Operating one is an ongoing discipline. Organisations routinely complete the first and assume they have acquired the second.",
          "A SIEM correlates events and raises alerts against rules. It does not know that the finance director travels every third week, that the backup service legitimately authenticates at 03:00, or that a particular server was rebuilt yesterday. Those facts are what separate a real detection from noise, and they live with people, not rules.",
        ],
      },
      {
        heading: "What actually has to happen after the alert",
        paragraphs: [
          "Every alert needs someone to establish context, decide whether the activity is expected, determine scope if it is not, and then decide what to do about it. That sequence is the work. The alert is only the trigger for it.",
          "Without that sequence, alerts accumulate. Teams respond by tuning aggressively — not because the detections are wrong, but because nobody has time to investigate them. Coverage quietly narrows until the platform mostly reports events nobody acts on.",
        ],
      },
      {
        heading: "Detection content decays",
        paragraphs: [
          "Environments change constantly: new applications, new identity configurations, new endpoints, changed network paths. Detection logic written against last year's estate degrades against this year's.",
          "Maintaining detection content is a permanent engineering commitment. It is the part of a SOC that is least visible from outside and most responsible for whether it works.",
        ],
      },
      {
        heading: "The honest test",
        paragraphs: [
          "Ask a straightforward question of any monitoring capability: if an attacker authenticated as a privileged user from an unusual location tonight, who would see it, how long would it take, and what would they do next?",
          "If the answer is a tool name rather than a person and a process, the capability is not yet a SOC. That is the gap managed security operations is intended to close.",
        ],
      },
    ],
  },
  {
    slug: "active-directory-attack-paths-organizations-miss",
    title: "5 Active Directory Attack Paths Organizations Miss",
    category: "Active Directory Security",
    excerpt:
      "Domain compromise rarely starts with an exploit. It usually starts with a permission somebody granted years ago and nobody has reviewed since.",
    readingTime: "8 min read",
    status: "published",
    date: "2026-06-23",
    body: [
      {
        heading: "1. Nested group membership nobody has audited",
        paragraphs: [
          "Privileged groups accumulate members indirectly. A service desk group is added to a support group, which is added to a workstation admin group, which holds rights somewhere it should not.",
          "The effective permission set is rarely what the org chart implies. Attack-path analysis reveals membership chains that no single administrator can see from the console.",
        ],
      },
      {
        heading: "2. Delegation left over from a migration",
        paragraphs: [
          "Unconstrained and poorly scoped constrained delegation frequently survives migrations and consolidation projects. The system that needed it has often been decommissioned; the configuration remains.",
          "Delegation misconfiguration converts a single compromised host into a route to privileged credentials.",
        ],
      },
      {
        heading: "3. Certificate services misconfiguration",
        paragraphs: [
          "AD Certificate Services is powerful, widely deployed and rarely reviewed with the same rigour as domain controllers. Template permissions that allow requesters to specify an arbitrary subject can enable authentication as another account.",
          "Because the resulting authentication is legitimate by design, it is also difficult to detect without specific monitoring in place.",
        ],
      },
      {
        heading: "4. Credentials cached where they should not be",
        paragraphs: [
          "Privileged accounts used to log into ordinary workstations leave material behind. Once an attacker holds a foothold on that workstation, the tier separation intended to contain them no longer exists.",
          "This is a process failure more than a technical one, which is why it survives tooling upgrades.",
        ],
      },
      {
        heading: "5. Service accounts with weak or ancient credentials",
        paragraphs: [
          "Service accounts often carry elevated rights, non-expiring passwords and configurations that make their credentials requestable by any authenticated user.",
          "The combination is one of the most reliable privilege-escalation routes available inside a domain, and one of the cheapest to fix once identified.",
        ],
      },
      {
        heading: "Why detection matters as much as remediation",
        paragraphs: [
          "Each of these paths produces observable activity. Whether it is observed depends on collecting the right telemetry and having detection content written for the specific technique.",
          "That is the practical argument for combining assessment with monitoring: the assessment establishes which paths exist, and monitoring establishes whether anyone is walking them.",
        ],
      },
    ],
  },
  {
    slug: "what-does-a-managed-soc-actually-do",
    title: "What Does a Managed SOC Actually Do?",
    category: "SOC & MDR",
    excerpt:
      "A plain-language walkthrough of what happens between a security event occurring in your environment and someone telling you about it.",
    readingTime: "7 min read",
    status: "published",
    date: "2026-05-30",
    body: [
      {
        heading: "It collects telemetry from the systems that matter",
        paragraphs: [
          "Endpoints, servers, identity providers, cloud platforms, network infrastructure and business applications each produce security-relevant records. Individually they are fragments; together they describe behaviour.",
          "The first job is getting the right sources connected and normalised — not every source, but the ones that provide visibility into how an intrusion would progress.",
        ],
      },
      {
        heading: "It applies detection logic, then discards most of the output",
        paragraphs: [
          "Detection rules and analytics flag activity worth a look. The overwhelming majority of what they flag is legitimate, and establishing that quickly is a core part of the work.",
          "Triage exists so the volume never reaches you. This is the difference between a monitoring service and an alert-forwarding service.",
        ],
      },
      {
        heading: "It investigates what survives triage",
        paragraphs: [
          "Investigation reconstructs the sequence: what initiated the activity, what the account or host did next, what it touched, and whether it is ongoing.",
          "The output is a timeline with supporting evidence — the thing your team needs in order to make a decision.",
        ],
      },
      {
        heading: "It responds, within agreed authority",
        paragraphs: [
          "Response actions are agreed in advance: which hosts can be isolated, which accounts can be disabled, who is called and in what order. Agreeing this during an incident wastes the only resource that matters.",
          "Coordination continues through containment and remediation rather than ending at notification.",
        ],
      },
      {
        heading: "It improves, continuously",
        paragraphs: [
          "Every incident and every hunt produces information about where visibility was thin. That feeds detection engineering.",
          "A managed SOC that is not producing new detection content is not improving your position — it is only maintaining it.",
        ],
      },
    ],
  },
  {
    slug: "penetration-testing-vs-vulnerability-assessment",
    title: "Penetration Testing vs Vulnerability Assessment",
    category: "Penetration Testing",
    excerpt:
      "They are commonly sold as the same thing and priced very differently. Here is what actually separates them, and when each is the right choice.",
    readingTime: "5 min read",
    status: "published",
    date: "2026-05-08",
    body: [
      {
        heading: "Different questions",
        paragraphs: [
          "A vulnerability assessment answers: what known weaknesses exist across this estate? It favours breadth, repeatability and automation.",
          "A penetration test answers: what can an attacker actually achieve here? It favours depth, chaining and human judgement.",
        ],
      },
      {
        heading: "Different output",
        paragraphs: [
          "A vulnerability assessment produces a prioritised inventory of findings. A penetration test produces demonstrated impact — this specific route led to this specific access.",
          "The distinction matters for decision-making. An inventory of medium-severity findings is difficult to prioritise. A demonstrated route to your customer database is not.",
        ],
      },
      {
        heading: "Different frequency",
        paragraphs: [
          "Vulnerability assessment is a recurring hygiene activity and should run continuously or on a short cycle.",
          "Penetration testing is periodic and event-driven: annually, before a major release, after significant infrastructure change, or when a customer requires independent validation.",
        ],
      },
      {
        heading: "You need both, for different reasons",
        paragraphs: [
          "Vulnerability management keeps the volume of exploitable weaknesses low. Penetration testing establishes whether the ones that remain — combined with configuration and design decisions — add up to a viable attack path.",
          "Buying one and describing it as the other is the most common way organisations end up with less assurance than they believe they have.",
        ],
      },
    ],
  },
  {
    slug: "how-to-build-a-security-monitoring-strategy",
    title: "How to Build a Security Monitoring Strategy",
    category: "Cybersecurity Strategy",
    excerpt:
      "Start from the attacks you actually need to detect, not from the log sources you happen to have available.",
    readingTime: "7 min read",
    status: "published",
    date: "2026-04-19",
    body: [
      {
        heading: "Start with what you are protecting",
        paragraphs: [
          "Monitoring everything equally is the fastest route to monitoring nothing effectively. Identify the systems and data whose compromise would genuinely disrupt the business.",
          "That list is usually shorter than expected, and it dictates everything downstream.",
        ],
      },
      {
        heading: "Work backwards from plausible attacks",
        paragraphs: [
          "For each critical asset, describe how it would realistically be reached: through which identities, which hosts, which network paths, which applications.",
          "Each step in those routes is a detection opportunity. This is what turns monitoring from a data-collection exercise into a defensive design.",
        ],
      },
      {
        heading: "Map telemetry to those opportunities",
        paragraphs: [
          "Only now does the question of log sources arise — and it arrives with a clear test: does this source let us observe a step in a route that matters?",
          "Sources that fail that test are storage cost, not security value.",
        ],
      },
      {
        heading: "Decide what happens when something fires",
        paragraphs: [
          "A detection with no defined response is a notification, not a control. Establish who acts, what authority they hold and what the escalation path is before go-live.",
          "This is also where coverage hours get decided honestly: an alert nobody sees until Monday has a different value to one seen in ten minutes.",
        ],
      },
      {
        heading: "Validate, then iterate",
        paragraphs: [
          "Test the detections. Run the scenario. Establish empirically whether the activity is observed and whether the response works.",
          "Strategy that has never been validated is a document. Strategy that has been tested is a capability.",
        ],
      },
    ],
  },
  {
    slug: "microsoft-365-identity-attacks",
    title: "Detecting Identity Attacks in Microsoft 365",
    category: "Threat Detection",
    excerpt:
      "Most intrusions into mid-market organisations begin with an identity, not an exploit. Here is what to watch.",
    readingTime: "6 min read",
    status: "planned",
  },
  {
    slug: "incident-response-first-hour",
    title: "The First Hour of an Incident",
    category: "Incident Response",
    excerpt:
      "What to do, what to avoid, and which decisions made in the first sixty minutes determine how the rest of the response goes.",
    readingTime: "6 min read",
    status: "planned",
  },
  {
    slug: "cloud-security-attack-paths",
    title: "Cloud Attack Paths Start With Identity",
    category: "Cloud Security",
    excerpt:
      "Why cloud compromise is usually a permissions problem, and how to assess it before it becomes an incident.",
    readingTime: "7 min read",
    status: "planned",
  },
  {
    slug: "iso-27001-readiness-what-to-expect",
    title: "ISO 27001 Readiness: What to Expect",
    category: "Compliance",
    excerpt:
      "A realistic view of the work involved between deciding to certify and being ready for an external audit.",
    readingTime: "8 min read",
    status: "planned",
  },
];

export const publishedInsights = insights.filter((i) => i.status === "published");

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug && i.status === "published");
}
