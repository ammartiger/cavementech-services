import { site } from "@/content/site";

/**
 * Brand mark.
 *
 * The shield is built from angular facets rather than a smooth curve — a nod to
 * knapped stone (CavemenTech) read as a sharpened edge, which is also the
 * positioning: defensive shield, offensive edge. The amber facet carries the
 * accent inherited from the cavementech.com identity.
 */
export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="cmt-mark-a" x1="16" y1="2" x2="16" y2="30.5">
          <stop offset="0%" stopColor="#ffc94d" />
          <stop offset="100%" stopColor="#c9900f" />
        </linearGradient>
        <linearGradient id="cmt-mark-b" x1="4" y1="4" x2="28" y2="30">
          <stop offset="0%" stopColor="#2a3242" />
          <stop offset="100%" stopColor="#151b26" />
        </linearGradient>
      </defs>

      {/* Shield body */}
      <path
        d="M16 1.75 28.25 6.6v10.9c0 6.6-5.05 11.55-12.25 13.75C8.8 29.05 3.75 24.1 3.75 17.5V6.6L16 1.75Z"
        fill="url(#cmt-mark-b)"
        stroke="#3a4557"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Sharpened facet — the offensive edge */}
      <path
        d="M16 1.75 28.25 6.6v10.9c0 6.6-5.05 11.55-12.25 13.75V1.75Z"
        fill="url(#cmt-mark-a)"
        fillOpacity="0.16"
      />

      {/* Chiselled inner blade */}
      <path
        d="M16 7.5 21.5 17 16 14.2 10.5 17 16 7.5Z"
        fill="url(#cmt-mark-a)"
      />
      <path
        d="M16 16.6 21.5 19.4 16 25.5 10.5 19.4 16 16.6Z"
        fill="url(#cmt-mark-a)"
        fillOpacity="0.55"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  showServiceLine = true,
}: {
  className?: string;
  showServiceLine?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.9375rem] font-semibold tracking-tight text-ink">
          {site.name}
        </span>
        {showServiceLine ? (
          <span className="mono-label mt-1 text-[0.5625rem] text-ink-subtle">
            {site.serviceLine}
          </span>
        ) : null}
      </span>
    </span>
  );
}
