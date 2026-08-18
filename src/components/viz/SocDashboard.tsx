import {
  IncidentRow,
  StatTile,
  VolumeBars,
  WindowChrome,
} from "./DashboardChrome";

/**
 * SOC operations console — conceptual product interface.
 *
 * Every figure here is illustrative of the interface concept. Nothing on this
 * screen is a claim about customers monitored, endpoints under management or
 * incidents handled; the caller renders an explicit notice alongside it.
 */

const DETECTIONS = [
  {
    severity: "critical" as const,
    title: "Possible credential compromise",
    asset: "CUST-0011 · DC01",
    meta: "5m",
  },
  {
    severity: "high" as const,
    title: "Suspicious PowerShell activity",
    asset: "CUST-0042 · WS-1180",
    meta: "12m",
  },
  {
    severity: "high" as const,
    title: "Impossible travel — privileged account",
    asset: "CUST-0007 · Entra ID",
    meta: "26m",
  },
  {
    severity: "medium" as const,
    title: "Multiple authentication failures",
    asset: "CUST-0031 · VPN-GW",
    meta: "41m",
  },
  {
    severity: "medium" as const,
    title: "Unsigned binary executed from temp",
    asset: "CUST-0019 · WS-0342",
    meta: "58m",
  },
];

export function SocDashboard({ className = "" }: { className?: string }) {
  return (
    <WindowChrome
      title="Security Operations Console"
      status="Monitoring active"
      className={className}
    >
      <div className="p-4 sm:p-5">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Environments" value="24" />
          <StatTile label="Assets in scope" value="4,821" />
          <StatTile label="Open incidents" value="17" accent="brand" />
          <StatTile label="Mean triage" value="6m" />
        </div>

        {/* Severity breakdown */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          <StatTile label="Critical" value="2" accent="critical" />
          <StatTile label="High" value="7" accent="high" />
          <StatTile label="Medium" value="8" accent="medium" />
        </div>

        {/* Event volume */}
        <div className="mt-3 rounded-xl border border-line bg-surface-2/60 p-3.5">
          <div className="flex items-baseline justify-between">
            <p className="mono-label text-[0.5625rem] text-ink-subtle">
              Event volume · 24h
            </p>
            <p className="font-mono text-[0.6875rem] text-ink-subtle">
              1.28M ingested
            </p>
          </div>
          <VolumeBars
            className="mt-3"
            values={[
              32, 28, 41, 37, 52, 44, 61, 58, 72, 66, 81, 74, 92, 86, 78, 69,
              84, 71, 63, 57, 66, 49, 44, 38,
            ]}
          />
        </div>

        {/* Recent detections */}
        <div className="mt-3 overflow-hidden rounded-xl border border-line bg-surface-2/40">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <p className="mono-label text-[0.5625rem] text-ink-subtle">
              Recent detections
            </p>
            <p className="font-mono text-[0.625rem] text-ink-faint">
              live queue
            </p>
          </div>
          <ul>
            {DETECTIONS.map((d) => (
              <IncidentRow key={d.title} {...d} />
            ))}
          </ul>
        </div>
      </div>
    </WindowChrome>
  );
}
