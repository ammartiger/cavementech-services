/**
 * Team profiles.
 *
 * Credentials listed here are those held by the named individuals and
 * confirmed by them. Ammar Hassan's are cross-checked against his public
 * profile at ammarhassan.me.
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  /** Headline credentials shown as pills under the name. */
  credentials: string[];
  /** Longer-form credential list, shown in a secondary line. */
  additional?: string[];
  bio: string;
  /** Recognition, only where genuinely awarded. */
  highlight?: string;
  link?: { label: string; href: string };
  /** Seed for the generated abstract avatar — keeps it stable per person. */
  seed: number;
};

export const team: TeamMember[] = [
  {
    id: "ammar-hassan",
    name: "Ammar Hassan",
    role: "Founder & Chief Executive Officer",
    credentials: ["CEH Master", "MSIS", "eJPT", "CEI"],
    additional: [
      "EC-Council Certified Instructor",
      "Microsoft SC-900",
      "Azure Administrator",
      "HCIP",
      "CNSP",
      "CAP",
    ],
    highlight: "Featured by EC-Council as a top ethical hacker worldwide",
    bio: "Offensive security practitioner and information security trainer. Holds an MS in Information Security from NUST alongside a Master of Computer Science, and teaches ethical hacking as an EC-Council Certified Instructor. Leads detection engineering, ensuring the SOC's detection content reflects how intrusions actually unfold rather than how they are documented.",
    link: { label: "ammarhassan.me", href: "https://ammarhassan.me" },
    seed: 17,
  },
  {
    id: "sarmad-idrees",
    name: "Sarmad Idrees",
    role: "Offensive Security Lead",
    credentials: ["OSCP+"],
    bio: "Leads penetration testing engagements across network, web application and Active Directory environments. OSCP+ certification requires demonstrated, hands-on exploitation under exam conditions and ongoing renewal — the practical standard that separates verified capability from a scanner report.",
    seed: 41,
  },
  {
    id: "waqar",
    name: "Waqar",
    role: "Security Operations Lead",
    credentials: ["MSIS"],
    bio: "Runs day-to-day security operations: telemetry onboarding, alert triage, investigation and incident coordination. Holds an MS in Information Security, and owns the discipline that turns detection output into decisions customers can act on.",
    seed: 73,
  },
];
