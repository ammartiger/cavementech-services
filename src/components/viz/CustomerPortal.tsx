import { Icon } from "@/components/ui/Icon";
import {
  IncidentRow,
  SeverityPill,
  StatTile,
  WindowChrome,
} from "./DashboardChrome";

/**
 * Customer security portal — conceptual product interface.
 *
 * The organisation shown is deliberately generic ("Your organisation") rather
 * than a named company: nothing here should imply a real customer. All figures
 * illustrate the reporting concept only.
 */

const ACTIVITY = [
  {
    severity: "high" as const,
    title: "Possible account compromise",
    asset: "user: j.okafor@ · Entra ID sign-in",
    meta: "Today 09:14",
  },
  {
    severity: "medium" as const,
    title: "Suspicious PowerShell activity",
    asset: "WS-024 · encoded command",
    meta: "Today 04:38",
  },
  {
    severity: "low" as const,
    title: "Vulnerability detected",
    asset: "WEB01 · outdated component",
    meta: "Yesterday",
  },
];

export function CustomerPortal({ className = "" }: { className?: string }) {
  return (
    <WindowChrome
      title="Customer Security Portal"
      status="Monitoring active"
      className={className}
    >
      <div className="p-4 sm:p-5">
        {/* Org header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[0.9375rem] font-semibold text-ink">
              Your organisation
            </p>
            <p className="mono-label mt-1 text-[0.5625rem] text-ink-subtle">
              Security posture
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-active/30 bg-active/10 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-active">
            <Icon name="shield-check" className="size-3.5" />
            Covered
          </span>
        </div>

        {/* Incident counts */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Open incidents" value="4" accent="brand" />
          <StatTile label="Critical" value="1" accent="critical" />
          <StatTile label="High" value="2" accent="high" />
          <StatTile label="Medium" value="1" accent="medium" />
        </div>

        {/* Coverage summary */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            { label: "Endpoints", value: "184" },
            { label: "Servers", value: "22" },
            { label: "Identities", value: "216" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-line bg-surface-2/60 px-3.5 py-3"
            >
              <p className="mono-label text-[0.5625rem] text-ink-subtle">
                {s.label}
              </p>
              <p className="mt-1 font-mono text-lg text-ink tabular-nums">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div className="mt-3 overflow-hidden rounded-xl border border-line bg-surface-2/40">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <p className="mono-label text-[0.5625rem] text-ink-subtle">
              Recent activity
            </p>
            <p className="font-mono text-[0.625rem] text-ink-faint">
              last 7 days
            </p>
          </div>
          <ul>
            {ACTIVITY.map((a) => (
              <IncidentRow key={a.title} {...a} />
            ))}
          </ul>
        </div>

        {/* Incident detail preview */}
        <div className="mt-3 rounded-xl border border-line bg-surface-2/60 p-4">
          <div className="flex items-center gap-2.5">
            <SeverityPill severity="high" />
            <p className="text-[0.8125rem] font-medium text-ink">
              INC-2481 · Possible account compromise
            </p>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[0.6875rem] sm:grid-cols-3">
            {[
              ["Detected", "09:14:22"],
              ["Triaged", "09:19:05"],
              ["Notified", "09:24:41"],
              ["Status", "Contained"],
              ["Analyst", "Assigned"],
              ["Evidence", "6 artefacts"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-ink-faint uppercase tracking-[0.08em]">
                  {k}
                </dt>
                <dd className="mt-0.5 text-ink-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </WindowChrome>
  );
}
