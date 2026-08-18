import { telemetrySources } from "@/content/soc";

/**
 * Managed SOC architecture diagram.
 *
 * Reads top to bottom: the customer estate produces telemetry, telemetry is
 * collected securely, the SOC applies analytics and detection, analysts
 * investigate, and confirmed incidents are driven back to the customer. The
 * loop on the right is the part most architecture diagrams omit — findings
 * feeding back into detection content, which is what makes coverage improve
 * rather than decay.
 *
 * Fixed viewBox; the caller wraps this in `.scroll-x` so it scrolls
 * horizontally on narrow screens rather than shrinking into illegibility.
 */

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  tone?: "neutral" | "signal" | "brand" | "muted";
};

const TONES = {
  neutral: { fill: "#11151e", stroke: "#2a3242", text: "#eef2f8" },
  signal: { fill: "#0e1720", stroke: "#1d7f8f", text: "#eef2f8" },
  brand: { fill: "#1a1509", stroke: "#b8830f", text: "#ffc94d" },
  muted: { fill: "#171c27", stroke: "#2a3242", text: "#a3adbe" },
};

function Box({ x, y, w, h, title, sub, tone = "neutral" }: BoxProps) {
  const t = TONES[tone];
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={11}
        fill={t.fill}
        stroke={t.stroke}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        fill={t.text}
        fontSize="13"
        fontWeight="500"
      >
        {title}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fill="#6d778a"
          fontSize="9.5"
          fontFamily="var(--font-jetbrains), monospace"
          letterSpacing="0.1em"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function FlowArrow({
  x,
  from,
  to,
  delay = 0,
}: {
  x: number;
  from: number;
  to: number;
  delay?: number;
}) {
  return (
    <g>
      <path
        d={`M ${x} ${from} L ${x} ${to - 8}`}
        stroke="#2a3242"
        strokeWidth="1.25"
        strokeDasharray="3 6"
        className="motion-flow animate-flow"
        style={{ animationDelay: `${delay}s` }}
      />
      <path
        d={`M ${x - 5} ${to - 12} l 5 6 l 5 -6`}
        stroke="#3a4557"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

export function SocArchitecture({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 640"
      className={className}
      role="img"
      aria-labelledby="soc-arch-title soc-arch-desc"
    >
      <title id="soc-arch-title">Managed SOC architecture</title>
      <desc id="soc-arch-desc">
        Telemetry from the customer environment — endpoint security, Windows,
        Linux, Active Directory, Microsoft 365, firewall, cloud and applications
        — is securely collected and passed to the managed SOC. There it is
        processed by security analytics and a detection engine, investigated by
        SOC analysts, and escalated through incident response back to the
        customer. Findings feed back into detection content as a continuous
        improvement loop.
      </desc>

      <defs>
        <linearGradient id="arch-flow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ec9dd" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3ec9dd" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* ================= Customer environment ================= */}
      <rect
        x={30}
        y={8}
        width={840}
        height={106}
        rx={14}
        fill="none"
        stroke="#2a3242"
        strokeDasharray="5 5"
      />
      <text
        x={48}
        y={32}
        fill="#6d778a"
        fontSize="9.5"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.16em"
      >
        CUSTOMER ENVIRONMENT
      </text>

      {telemetrySources.map((source, i) => {
        const x = 38 + i * 104;
        return (
          <g key={source}>
            <rect
              x={x}
              y={50}
              width={96}
              height={46}
              rx={9}
              fill="#171c27"
              stroke="#2a3242"
            />
            <text
              x={x + 48}
              y={i % 2 === 0 ? 71 : 71}
              textAnchor="middle"
              fill="#a3adbe"
              fontSize="9"
              fontFamily="var(--font-jetbrains), monospace"
              letterSpacing="0.06em"
            >
              {source.split(" ")[0].toUpperCase()}
            </text>
            {source.split(" ")[1] ? (
              <text
                x={x + 48}
                y={83}
                textAnchor="middle"
                fill="#6d778a"
                fontSize="9"
                fontFamily="var(--font-jetbrains), monospace"
                letterSpacing="0.06em"
              >
                {source.split(" ")[1].toUpperCase()}
              </text>
            ) : null}
          </g>
        );
      })}

      {/* Convergence into collection */}
      {[86, 190, 294, 398, 502, 606, 710, 814].map((cx, i) => (
        <path
          key={cx}
          d={`M ${cx} 96 C ${cx} 124, 450 124, 450 150`}
          stroke="url(#arch-flow)"
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="3 7"
          className="motion-flow animate-flow"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}

      <Box
        x={140}
        y={150}
        w={620}
        h={46}
        title="Secure telemetry collection"
        tone="signal"
      />

      <FlowArrow x={450} from={196} to={226} />

      {/* ================= Managed SOC ================= */}
      <rect
        x={100}
        y={226}
        width={700}
        height={310}
        rx={18}
        fill="#0b0e14"
        stroke="#b8830f"
        strokeOpacity="0.3"
      />
      <text
        x={122}
        y={250}
        fill="#f5b324"
        fontSize="9.5"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.16em"
      >
        MANAGED SOC
      </text>

      <Box
        x={140}
        y={262}
        w={280}
        h={52}
        title="Security analytics"
        sub="SIEM / CORRELATION"
        tone="signal"
      />
      <Box
        x={480}
        y={262}
        w={280}
        h={52}
        title="Detection engine"
        sub="BEHAVIOURAL RULES"
        tone="signal"
      />

      {/* Merge into analyst review */}
      <path
        d="M 280 314 C 280 330, 450 326, 450 338"
        stroke="#2a3242"
        strokeWidth="1.25"
        fill="none"
        strokeDasharray="3 6"
        className="motion-flow animate-flow"
      />
      <path
        d="M 620 314 C 620 330, 450 326, 450 338"
        stroke="#2a3242"
        strokeWidth="1.25"
        fill="none"
        strokeDasharray="3 6"
        className="motion-flow animate-flow"
        style={{ animationDelay: "0.3s" }}
      />

      <Box
        x={300}
        y={338}
        w={300}
        h={52}
        title="SOC analysts"
        sub="HUMAN JUDGEMENT"
        tone="brand"
      />
      <FlowArrow x={450} from={390} to={414} delay={0.2} />

      <Box x={300} y={414} w={300} h={48} title="Investigation" />
      <FlowArrow x={450} from={462} to={482} delay={0.4} />

      <Box x={300} y={482} w={300} h={48} title="Incident response" />

      {/* ================= Back to customer ================= */}
      <FlowArrow x={450} from={530} to={566} delay={0.6} />
      <Box
        x={340}
        y={566}
        w={220}
        h={48}
        title="Customer"
        sub="ACTIONABLE INCIDENT"
        tone="muted"
      />

      {/* ================= Improvement loop ================= */}
      <path
        d="M 600 506 C 706 506, 836 500, 836 396 C 836 306, 806 288, 762 288"
        stroke="#f5b324"
        strokeOpacity="0.45"
        strokeWidth="1.25"
        fill="none"
        strokeDasharray="4 6"
        className="motion-flow animate-flow"
      />
      <path
        d="M 770 282 l -8 6 l 8 6"
        stroke="#f5b324"
        strokeOpacity="0.6"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x={856}
        y={400}
        fill="#b8830f"
        fontSize="9"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.14em"
        transform="rotate(-90 856 400)"
        textAnchor="middle"
      >
        DETECTION IMPROVEMENT
      </text>
    </svg>
  );
}
