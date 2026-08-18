/**
 * Hero visualization — the signal pipeline.
 *
 * Communicates the core value proposition in a single glance: a large volume of
 * raw security telemetry is progressively reduced, by analytics and then by
 * human analysts, into a small number of actionable incidents. The funnel
 * narrows visually at each stage so the reduction is legible before any label
 * is read.
 *
 * The figures are conceptual, not company statistics — the panel is labelled
 * accordingly by the caller (see components/hero/Hero.tsx).
 *
 * Pure SVG with a fixed viewBox so it scales cleanly from 320px to 720px wide
 * without reflow. Animation is limited to dash-offset flow on the connectors
 * and a single status pulse; both carry the `motion-flow` class, which
 * globals.css disables under prefers-reduced-motion.
 */

const SOURCES = ["ENDPOINTS", "SERVERS", "IDENTITY", "CLOUD", "NETWORK"];

const STAGES = [
  {
    x: 40,
    y: 104,
    w: 480,
    label: "Security telemetry collected",
    value: "1,284,000",
    unit: "events",
    accent: "signal" as const,
  },
  {
    x: 92,
    y: 190,
    w: 376,
    label: "Detection & analytics",
    value: "2,140",
    unit: "detections",
    accent: "signal" as const,
  },
  {
    x: 144,
    y: 276,
    w: 272,
    label: "Analyst triage & investigation",
    value: "37",
    unit: "escalated",
    accent: "neutral" as const,
  },
];

export function SignalPipeline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 490"
      className={className}
      role="img"
      aria-labelledby="pipeline-title pipeline-desc"
    >
      <title id="pipeline-title">
        Security signal pipeline, from raw telemetry to actionable incidents
      </title>
      <desc id="pipeline-desc">
        Telemetry from endpoints, servers, identity, cloud and network sources is
        collected, reduced by detection analytics, triaged and investigated by
        analysts, and delivered as a small number of confirmed, actionable
        incidents. Figures shown are illustrative of the concept.
      </desc>

      <defs>
        <linearGradient id="sp-flow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ec9dd" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3ec9dd" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="sp-brand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5b324" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f5b324" stopOpacity="0.06" />
        </linearGradient>
        <filter id="sp-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ---------- Source chips ---------- */}
      {SOURCES.map((source, i) => {
        const x = 12 + i * 110;
        return (
          <g key={source}>
            <rect
              x={x}
              y={8}
              width={96}
              height={40}
              rx={9}
              fill="#171c27"
              stroke="#2a3242"
            />
            <text
              x={x + 48}
              y={32}
              textAnchor="middle"
              fill="#a3adbe"
              fontSize="9.5"
              fontFamily="var(--font-jetbrains), monospace"
              letterSpacing="0.1em"
            >
              {source}
            </text>
          </g>
        );
      })}

      {/* ---------- Convergence from sources into collection ---------- */}
      {[60, 170, 280, 390, 500].map((cx, i) => (
        <path
          key={cx}
          d={`M ${cx} 48 C ${cx} 76, 280 76, 280 104`}
          stroke="url(#sp-flow)"
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="3 7"
          className="motion-flow animate-flow"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}

      {/* ---------- Funnel stages ---------- */}
      {STAGES.map((stage, i) => (
        <g key={stage.label}>
          <rect
            x={stage.x}
            y={stage.y}
            width={stage.w}
            height={52}
            rx={11}
            fill="#11151e"
            stroke={stage.accent === "signal" ? "#1d7f8f" : "#2a3242"}
            strokeOpacity={stage.accent === "signal" ? 0.6 : 1}
          />
          <text
            x={stage.x + 18}
            y={stage.y + 22}
            fill="#eef2f8"
            fontSize="12.5"
            fontWeight="500"
          >
            {stage.label}
          </text>
          <text
            x={stage.x + 18}
            y={stage.y + 39}
            fill="#6d778a"
            fontSize="10"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.06em"
          >
            {stage.value} {stage.unit}
          </text>

          {/* Stage index marker */}
          <text
            x={stage.x + stage.w - 16}
            y={stage.y + 32}
            textAnchor="end"
            fill={stage.accent === "signal" ? "#3ec9dd" : "#4b5567"}
            fontSize="9.5"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.14em"
          >
            {`0${i + 1}`}
          </text>

          {/* Connector down to the next stage */}
          <path
            d={`M 280 ${stage.y + 52} L 280 ${stage.y + 86}`}
            stroke="#2a3242"
            strokeWidth="1.25"
            strokeDasharray="3 6"
            className="motion-flow animate-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <path
            d={`M 274 ${stage.y + 79} l 6 7 l 6 -7`}
            stroke="#3a4557"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* ---------- Output: actionable incidents ---------- */}
      <g>
        <rect
          x={160}
          y={362}
          width={240}
          height={66}
          rx={13}
          fill="url(#sp-brand)"
          stroke="#f5b324"
          strokeOpacity="0.45"
        />
        <circle
          cx={186}
          cy={388}
          r={3}
          fill="#f5b324"
          filter="url(#sp-glow)"
          className="motion-flow animate-blink"
        />
        <text x={200} y={392} fill="#ffc94d" fontSize="13" fontWeight="600">
          3 actionable incidents
        </text>
        <text
          x={200}
          y={410}
          fill="#a3adbe"
          fontSize="10"
          fontFamily="var(--font-jetbrains), monospace"
          letterSpacing="0.06em"
        >
          DELIVERED WITH EVIDENCE
        </text>
      </g>

      {/* ---------- Footer note ---------- */}
      <text
        x={280}
        y={458}
        textAnchor="middle"
        fill="#4b5567"
        fontSize="9.5"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.12em"
      >
        NOISE REDUCED · CONTEXT ADDED · DECISION READY
      </text>
    </svg>
  );
}
