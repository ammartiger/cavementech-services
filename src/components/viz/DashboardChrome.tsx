import type { ReactNode } from "react";

/**
 * Shared building blocks for the two product-interface mockups.
 *
 * These are built in HTML/CSS rather than SVG so text stays crisp at any zoom,
 * reflows properly on small screens, and remains selectable and readable by
 * assistive technology.
 */

export type Severity = "critical" | "high" | "medium" | "low";

const SEVERITY_STYLES: Record<Severity, string> = {
  critical: "border-sev-critical/40 bg-sev-critical/12 text-sev-critical",
  high: "border-sev-high/40 bg-sev-high/12 text-sev-high",
  medium: "border-sev-medium/40 bg-sev-medium/12 text-sev-medium",
  low: "border-sev-low/40 bg-sev-low/12 text-sev-low",
};

export function SeverityPill({
  severity,
  className = "",
}: {
  severity: Severity;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-[0.625rem] font-medium uppercase tracking-[0.1em] ${SEVERITY_STYLES[severity]} ${className}`}
    >
      {severity}
    </span>
  );
}

/** Window chrome so the mockup reads as an application, not a web section. */
export function WindowChrome({
  title,
  status,
  children,
  className = "",
}: {
  title: string;
  status?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2/80 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-bright" />
          <span className="size-2.5 rounded-full bg-line-bright" />
          <span className="size-2.5 rounded-full bg-line-bright" />
        </span>
        <p className="mono-label truncate text-ink-subtle">{title}</p>
        {status ? (
          <p className="ml-auto flex shrink-0 items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-active">
            <span className="relative flex size-1.5">
              <span className="motion-flow absolute inline-flex size-full animate-blink rounded-full bg-active" />
              <span className="relative inline-flex size-1.5 rounded-full bg-active" />
            </span>
            {status}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

/** Large metric tile. */
export function StatTile({
  label,
  value,
  accent = "neutral",
  className = "",
}: {
  label: string;
  value: string;
  accent?: "neutral" | "brand" | "critical" | "high" | "medium";
  className?: string;
}) {
  const accents = {
    neutral: "text-ink",
    brand: "text-brand",
    critical: "text-sev-critical",
    high: "text-sev-high",
    medium: "text-sev-medium",
  };
  return (
    <div
      className={`rounded-xl border border-line bg-surface-2/60 p-3.5 ${className}`}
    >
      <p className="mono-label text-[0.5625rem] text-ink-subtle">{label}</p>
      <p
        className={`mt-1.5 font-mono text-2xl font-medium tabular-nums ${accents[accent]}`}
      >
        {value}
      </p>
    </div>
  );
}

/** Single row in a detections / incidents list. */
export function IncidentRow({
  severity,
  title,
  asset,
  meta,
}: {
  severity: Severity;
  title: string;
  asset: string;
  meta: string;
}) {
  return (
    <li className="flex items-start gap-3 border-b border-line px-4 py-3 last:border-b-0">
      <SeverityPill severity={severity} className="mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[0.8125rem] font-medium text-ink">
          {title}
        </p>
        <p className="mt-0.5 font-mono text-[0.6875rem] text-ink-subtle">
          {asset}
        </p>
      </div>
      <p className="shrink-0 font-mono text-[0.6875rem] text-ink-faint">
        {meta}
      </p>
    </li>
  );
}

/**
 * Compact event-volume bars. Heights are fixed, illustrative values — this is
 * a shape, not a data claim.
 */
export function VolumeBars({
  values,
  className = "",
}: {
  values: number[];
  className?: string;
}) {
  const max = Math.max(...values);
  return (
    <div
      className={`flex h-12 items-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm bg-linear-to-t from-signal/25 to-signal/70"
          style={{ height: `${Math.max(8, (v / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}
