import { alertWorkflow } from "@/content/soc";
import { Icon } from "@/components/ui/Icon";

/**
 * Alert → customer communication workflow.
 *
 * A vertical rail rather than a horizontal chain: seven stages do not read well
 * side by side, and the vertical form leaves room for the note under each stage.
 * The customer-notification stage is deliberately the visual peak — it is the
 * only point in the sequence the customer experiences, and that is the selling
 * point.
 */
export function AlertWorkflow({ className = "" }: { className?: string }) {
  const notifyIndex = alertWorkflow.findIndex(
    (s) => s.label === "Customer Notification",
  );

  return (
    <ol className={`relative ${className}`}>
      {/* Rail */}
      <span
        aria-hidden="true"
        className="absolute left-[15px] top-3 bottom-3 w-px bg-linear-to-b from-signal/50 via-line-strong to-brand/50"
      />

      {alertWorkflow.map((stage, i) => {
        const isNotify = i === notifyIndex;
        const isLast = i === alertWorkflow.length - 1;
        return (
          <li key={stage.label} className="relative flex gap-5 pb-7 last:pb-0">
            {/* Node */}
            <span className="relative z-10 mt-0.5 flex size-8 shrink-0 items-center justify-center">
              <span
                className={`flex size-8 items-center justify-center rounded-full border ${
                  isNotify
                    ? "border-brand/50 bg-brand/12 text-brand"
                    : isLast
                      ? "border-line-bright bg-surface-3 text-ink-muted"
                      : "border-line-strong bg-surface-2 text-ink-subtle"
                }`}
              >
                {isNotify ? (
                  <Icon name="mail" className="size-4" />
                ) : (
                  <span className="font-mono text-[0.625rem] tabular-nums">
                    {i + 1}
                  </span>
                )}
              </span>
            </span>

            <div className="min-w-0 flex-1 pt-1">
              <p
                className={`text-[0.9375rem] font-medium ${
                  isNotify ? "text-brand" : "text-ink"
                }`}
              >
                {stage.label}
              </p>
              <p className="mt-0.5 text-sm text-ink-subtle">{stage.note}</p>
            </div>

            {/* Volume indicator — the funnel narrowing, shown as a bar */}
            <span
              aria-hidden="true"
              className="mt-3 hidden h-1 shrink-0 self-start rounded-full sm:block"
              style={{
                width: `${Math.max(10, 92 - i * 13)}px`,
                background:
                  i < 2
                    ? "linear-gradient(90deg,#1d7f8f,#3ec9dd)"
                    : i < 5
                      ? "linear-gradient(90deg,#2a3242,#4b5567)"
                      : "linear-gradient(90deg,#b8830f,#f5b324)",
              }}
            />
          </li>
        );
      })}
    </ol>
  );
}
