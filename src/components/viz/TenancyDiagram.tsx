/**
 * Multi-customer security architecture (conceptual).
 *
 * Deliberately conceptual: it shows the separation model — per-customer
 * isolation of collected telemetry, with access controls restricting each
 * customer to their own environment while analysts operate across the estate —
 * without disclosing platform, topology or control implementation details.
 */

const CUSTOMERS = [
  { label: "Customer A", x: 60 },
  { label: "Customer B", x: 310 },
  { label: "Customer C", x: 560 },
];

export function TenancyDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 486"
      className={className}
      role="img"
      aria-labelledby="tenancy-title tenancy-desc"
    >
      <title id="tenancy-title">
        Customer separation model for managed security operations
      </title>
      <desc id="tenancy-desc">
        Each customer environment sends telemetry over an encrypted channel into
        a collection layer. Collected data is held in logically separated,
        per-customer stores. SOC analysts operate across monitored environments
        under authorisation, while each customer&apos;s own access is restricted
        to their environment only.
      </desc>

      <defs>
        <linearGradient id="ten-flow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ec9dd" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3ec9dd" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* ---------- Customer environments ---------- */}
      {CUSTOMERS.map((c, i) => (
        <g key={c.label}>
          <rect
            x={c.x}
            y={8}
            width={180}
            height={54}
            rx={11}
            fill="#171c27"
            stroke="#2a3242"
          />
          <text
            x={c.x + 90}
            y={31}
            textAnchor="middle"
            fill="#eef2f8"
            fontSize="13"
            fontWeight="500"
          >
            {c.label}
          </text>
          <text
            x={c.x + 90}
            y={47}
            textAnchor="middle"
            fill="#6d778a"
            fontSize="9"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.1em"
          >
            OWN ENVIRONMENT
          </text>

          {/* Encrypted collection path */}
          <path
            d={`M ${c.x + 90} 62 L ${c.x + 90} 138`}
            stroke="url(#ten-flow)"
            strokeWidth="1.5"
            strokeDasharray="3 6"
            className="motion-flow animate-flow"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}

      <text
        x={400}
        y={92}
        textAnchor="middle"
        fill="#3ec9dd"
        fontSize="9"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.14em"
      >
        ENCRYPTED IN TRANSIT
      </text>

      {/* ---------- Collection layer ---------- */}
      <rect
        x={60}
        y={138}
        width={680}
        height={48}
        rx={11}
        fill="#0e1720"
        stroke="#1d7f8f"
      />
      <text
        x={400}
        y={167}
        textAnchor="middle"
        fill="#eef2f8"
        fontSize="13"
        fontWeight="500"
      >
        Secure telemetry collection
      </text>

      {/* ---------- Isolated per-customer stores ---------- */}
      {CUSTOMERS.map((c, i) => (
        <g key={`store-${c.label}`}>
          <path
            d={`M ${c.x + 90} 186 L ${c.x + 90} 224`}
            stroke="#2a3242"
            strokeWidth="1.25"
            strokeDasharray="3 6"
            className="motion-flow animate-flow"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
          <rect
            x={c.x}
            y={224}
            width={180}
            height={78}
            rx={11}
            fill="#11151e"
            stroke="#2a3242"
          />
          {/* Lock glyph */}
          <g transform={`translate(${c.x + 18} 244)`}>
            <rect
              x="0"
              y="5"
              width="13"
              height="10"
              rx="2"
              fill="none"
              stroke="#f5b324"
              strokeWidth="1.3"
            />
            <path
              d="M3 5V3.2a3.5 3.5 0 0 1 7 0V5"
              fill="none"
              stroke="#f5b324"
              strokeWidth="1.3"
            />
          </g>
          <text
            x={c.x + 40}
            y={257}
            fill="#eef2f8"
            fontSize="12"
            fontWeight="500"
          >
            {`Tenant ${c.label.slice(-1)} data`}
          </text>
          <text
            x={c.x + 18}
            y={280}
            fill="#6d778a"
            fontSize="9"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.09em"
          >
            LOGICALLY SEPARATED
          </text>
          <text
            x={c.x + 18}
            y={293}
            fill="#6d778a"
            fontSize="9"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.09em"
          >
            ACCESS CONTROLLED
          </text>
        </g>
      ))}

      {/* Isolation boundaries between tenant lanes */}
      {[280, 530].map((x) => (
        <line
          key={x}
          x1={x}
          y1={214}
          x2={x}
          y2={312}
          stroke="#2a3242"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      ))}

      {/* ---------- Central SOC ---------- */}
      {CUSTOMERS.map((c, i) => (
        <path
          key={`soc-${c.label}`}
          d={`M ${c.x + 90} 302 C ${c.x + 90} 336, 400 334, 400 356`}
          stroke="#b8830f"
          strokeOpacity="0.45"
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="3 6"
          className="motion-flow animate-flow"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}

      <rect
        x={230}
        y={356}
        width={340}
        height={58}
        rx={13}
        fill="#1a1509"
        stroke="#b8830f"
      />
      <text
        x={400}
        y={382}
        textAnchor="middle"
        fill="#ffc94d"
        fontSize="13.5"
        fontWeight="600"
      >
        Central SOC operations
      </text>
      <text
        x={400}
        y={400}
        textAnchor="middle"
        fill="#a3adbe"
        fontSize="9"
        fontFamily="var(--font-jetbrains), monospace"
        letterSpacing="0.1em"
      >
        AUTHORISED ANALYST ACCESS
      </text>

      {/* ---------- Legend ---------- */}
      <g>
        <circle cx={196} cy={444} r={3} fill="#f5b324" />
        <text x={208} y={448} fill="#a3adbe" fontSize="11">
          Analysts: authorised across monitored environments
        </text>
        <circle cx={196} cy={466} r={3} fill="#3ec9dd" />
        <text x={208} y={470} fill="#a3adbe" fontSize="11">
          Customers: access restricted to their own environment
        </text>
      </g>
    </svg>
  );
}
