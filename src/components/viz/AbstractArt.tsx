/**
 * Abstract, non-representational artwork.
 *
 * Deliberately not photography and deliberately not people: stock imagery of
 * anonymous figures at screens is the visual cliché this site is trying to
 * avoid, and using photos of people who do not work here would be a
 * misrepresentation. These are generated compositions built from the same
 * design tokens as the rest of the site, so they scale losslessly and cost
 * nothing to load.
 */

/** Deterministic PRNG so a given seed always yields the same composition. */
function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

/**
 * Avatar substitute for a team member. Generates a stable abstract composition
 * from a numeric seed — recognisable and distinct per person, without
 * pretending to be a likeness.
 */
export function AbstractAvatar({
  seed,
  className = "size-16",
}: {
  seed: number;
  className?: string;
}) {
  const rand = rng(seed);
  const id = `av${seed}`;

  const rings = Array.from({ length: 3 }, (_, i) => ({
    r: 15 + i * 9 + rand() * 4,
    rot: rand() * 360,
    dash: 4 + rand() * 10,
  }));

  const shards = Array.from({ length: 5 }, () => ({
    angle: rand() * 360,
    len: 12 + rand() * 16,
    w: 2 + rand() * 4,
  }));

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffc94d" />
          <stop offset="100%" stopColor="#b8830f" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor="#f5b324" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#f5b324" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="100" height="100" rx="24" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}-clip)`}>
        <rect width="100" height="100" fill="#11151e" />
        <circle cx="50" cy="50" r="42" fill={`url(#${id}-glow)`} />

        {/* Concentric orbits */}
        {rings.map((ring, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={ring.r}
            fill="none"
            stroke={i === 1 ? "#3ec9dd" : "#2a3242"}
            strokeOpacity={i === 1 ? 0.5 : 1}
            strokeWidth="1"
            strokeDasharray={`${ring.dash} ${ring.dash * 0.7}`}
            transform={`rotate(${ring.rot} 50 50)`}
          />
        ))}

        {/* Radial shards */}
        {shards.map((shard, i) => (
          <rect
            key={i}
            x="50"
            y={50 - shard.w / 2}
            width={shard.len}
            height={shard.w}
            rx={shard.w / 2}
            fill={`url(#${id}-g)`}
            fillOpacity={0.25 + (i % 3) * 0.25}
            transform={`rotate(${shard.angle} 50 50)`}
          />
        ))}

        {/* Core */}
        <circle cx="50" cy="50" r="7" fill="#07090d" stroke="#f5b324" />
        <circle cx="50" cy="50" r="2.5" fill="#f5b324" />
      </g>
      <rect
        width="100"
        height="100"
        rx="24"
        fill="none"
        stroke="#2a3242"
      />
    </svg>
  );
}

/**
 * Wide atmospheric band — layered contour lines suggesting terrain or a signal
 * field. Used as a section divider / backdrop.
 */
export function ContourField({ className = "" }: { className?: string }) {
  const rand = rng(9182);
  const lines = Array.from({ length: 14 }, (_, i) => {
    const y = 30 + i * 13;
    const amp = 10 + rand() * 22;
    const phase = rand() * 100;
    let d = `M -20 ${y}`;
    for (let x = 0; x <= 1240; x += 40) {
      const yy = y + Math.sin((x + phase) / 130) * amp * (1 - i / 26);
      d += ` L ${x} ${yy.toFixed(1)}`;
    }
    return { d, i };
  });

  return (
    <svg
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cf-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5b324" stopOpacity="0" />
          <stop offset="35%" stopColor="#f5b324" stopOpacity="0.5" />
          <stop offset="65%" stopColor="#3ec9dd" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3ec9dd" stopOpacity="0" />
        </linearGradient>
      </defs>
      {lines.map(({ d, i }) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="url(#cf-fade)"
          strokeOpacity={0.16 + (i % 4) * 0.07}
          strokeWidth={i % 5 === 0 ? 1.2 : 0.7}
        />
      ))}
    </svg>
  );
}

/**
 * Node constellation — a sparse mesh of connected points. Reads as a network
 * without resorting to the usual glowing-globe imagery.
 */
export function NodeField({ className = "" }: { className?: string }) {
  const rand = rng(4471);
  const nodes = Array.from({ length: 26 }, () => ({
    x: rand() * 600,
    y: rand() * 340,
    r: 1 + rand() * 2.4,
  }));

  // Connect each node to its nearest few neighbours.
  const edges: { a: number; b: number; d: number }[] = [];
  nodes.forEach((n, i) => {
    const near = nodes
      .map((m, j) => ({ j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
      .filter((e) => e.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2);
    near.forEach((e) => {
      if (i < e.j) edges.push({ a: i, b: e.j, d: e.d });
    });
  });

  return (
    <svg viewBox="0 0 600 340" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="nf-glow">
          <stop offset="0%" stopColor="#f5b324" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#f5b324" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="170" rx="260" ry="150" fill="url(#nf-glow)" />

      {edges.map((e, i) => (
        <line
          key={i}
          x1={nodes[e.a].x}
          y1={nodes[e.a].y}
          x2={nodes[e.b].x}
          y2={nodes[e.b].y}
          stroke="#2a3242"
          strokeWidth="0.8"
          strokeOpacity={Math.max(0.15, 1 - e.d / 180)}
        />
      ))}

      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={i % 7 === 0 ? "#f5b324" : i % 5 === 0 ? "#3ec9dd" : "#4b5567"}
          fillOpacity={i % 7 === 0 ? 0.9 : 0.65}
        />
      ))}
    </svg>
  );
}

/**
 * Layered shield facets — abstract, used as a decorative anchor beside copy
 * blocks that would otherwise be text-only.
 */
export function FacetBlock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fb-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5b324" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f5b324" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="fb-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ec9dd" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#3ec9dd" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {[0, 1, 2, 3].map((i) => {
        const s = 1 - i * 0.17;
        const o = i * 16;
        return (
          <path
            key={i}
            d={`M 200 ${40 + o} L ${200 + 150 * s} ${120 + o} L ${200 + 150 * s} ${
              250 + o
            } L 200 ${340 + o * 0.4} L ${200 - 150 * s} ${250 + o} L ${
              200 - 150 * s
            } ${120 + o} Z`}
            fill={i % 2 === 0 ? "url(#fb-a)" : "url(#fb-b)"}
            stroke={i === 0 ? "#f5b324" : "#2a3242"}
            strokeOpacity={i === 0 ? 0.45 : 0.7}
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
