/**
 * Continuous security validation loop.
 *
 * The offensive-security differentiator, expressed as a cycle: a controlled
 * attack is run, and each defensive stage is measured against it. What the
 * exercise reveals becomes detection content, and the cycle repeats. The
 * questions on each node are the point — they are what a validation exercise
 * actually answers.
 */

const NODES = [
  { cx: 280, cy: 90, title: "Controlled attack", sub: "SCOPED & AUTHORISED", tone: "brand" },
  { cx: 461, cy: 221, title: "Detection", sub: "DID IT FIRE?", tone: "signal" },
  { cx: 392, cy: 434, title: "Investigation", sub: "WAS IT UNDERSTOOD?", tone: "signal" },
  { cx: 168, cy: 434, title: "Response", sub: "WAS IT CONTAINED?", tone: "signal" },
  { cx: 99, cy: 221, title: "Improvement", sub: "WHAT CHANGES?", tone: "brand" },
] as const;

/* Arc segments between adjacent nodes, trimmed so they clear the node boxes. */
const ARCS = [
  "M 332.4 97.4 A 190 190 0 0 1 437.5 173.8",
  "M 469.9 286.6 A 190 190 0 0 1 421.2 407.1",
  "M 319.5 465.8 A 190 190 0 0 1 190.8 447.7",
  "M 109.2 363.3 A 190 190 0 0 1 95.6 234.1",
  "M 122.5 173.8 A 190 190 0 0 1 227.6 97.4",
];

export function ValidationLoop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 560"
      className={className}
      role="img"
      aria-labelledby="loop-title loop-desc"
    >
      <title id="loop-title">Continuous security validation cycle</title>
      <desc id="loop-desc">
        A five-stage cycle: a scoped, authorised attack is executed; detection is
        measured on whether it fired; investigation is measured on whether the
        activity was understood; response is measured on whether it was
        contained; and the findings drive detection improvement before the cycle
        repeats.
      </desc>

      <defs>
        <marker
          id="loop-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b8830f" />
        </marker>
        <radialGradient id="loop-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5b324" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f5b324" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Core glow + guide ring */}
      <circle cx={280} cy={280} r={150} fill="url(#loop-core)" />
      <circle
        cx={280}
        cy={280}
        r={190}
        fill="none"
        stroke="#1b2130"
        strokeWidth="1"
      />

      {/* Flow arcs */}
      {ARCS.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="#b8830f"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          markerEnd="url(#loop-arrow)"
          className="motion-flow animate-flow"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}

      {/* Centre label */}
      <text
        x={280}
        y={266}
        textAnchor="middle"
        fill="#6d778a"
        fontSize="9.5"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.18em"
      >
        ATTACK-INFORMED DEFENCE
      </text>
      <text
        x={280}
        y={294}
        textAnchor="middle"
        fill="#eef2f8"
        fontSize="19"
        fontWeight="600"
        letterSpacing="-0.02em"
      >
        Continuous
      </text>
      <text
        x={280}
        y={318}
        textAnchor="middle"
        fill="#eef2f8"
        fontSize="19"
        fontWeight="600"
        letterSpacing="-0.02em"
      >
        security validation
      </text>

      {/* Nodes */}
      {NODES.map((n, i) => {
        const w = 154;
        const h = 54;
        const x = n.cx - w / 2;
        const y = n.cy - h / 2;
        const brand = n.tone === "brand";
        return (
          <g key={n.title}>
            <rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx={12}
              fill={brand ? "#1a1509" : "#11151e"}
              stroke={brand ? "#b8830f" : "#2a3242"}
            />
            <text
              x={n.cx}
              y={n.cy - 4}
              textAnchor="middle"
              fill={brand ? "#ffc94d" : "#eef2f8"}
              fontSize="13"
              fontWeight="600"
            >
              {n.title}
            </text>
            <text
              x={n.cx}
              y={n.cy + 13}
              textAnchor="middle"
              fill="#6d778a"
              fontSize="8.5"
              fontFamily="var(--font-jetbrains), monospace"
              letterSpacing="0.1em"
            >
              {n.sub}
            </text>
            {/* Step index */}
            <circle
              cx={x + 12}
              cy={y + 12}
              r={9}
              fill="#07090d"
              stroke={brand ? "#b8830f" : "#2a3242"}
            />
            <text
              x={x + 12}
              y={y + 15.5}
              textAnchor="middle"
              fill={brand ? "#f5b324" : "#6d778a"}
              fontSize="8.5"
              fontFamily="var(--font-jetbrains), monospace"
            >
              {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
