/**
 * Hand-authored 24×24 stroke icon set.
 *
 * Kept in-repo rather than pulled from an icon package so the whole set stays
 * visually consistent (1.5px stroke, round caps, same optical weight) and adds
 * zero runtime dependency or bundle cost beyond the paths actually used.
 */

export type IconName =
  | "shield"
  | "shield-check"
  | "radar"
  | "crosshair"
  | "clipboard-check"
  | "activity"
  | "eye"
  | "filter"
  | "search"
  | "route"
  | "siren"
  | "report"
  | "server"
  | "laptop"
  | "identity"
  | "cloud"
  | "firewall"
  | "app"
  | "database"
  | "lock"
  | "key"
  | "users"
  | "bank"
  | "health"
  | "education"
  | "factory"
  | "briefcase"
  | "cart"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "close"
  | "menu"
  | "chevron-down"
  | "chevron-right"
  | "alert"
  | "info"
  | "clock"
  | "layers"
  | "git-branch"
  | "refresh"
  | "target"
  | "bug"
  | "mail"
  | "phone"
  | "map-pin"
  | "external"
  | "spinner"
  | "sparkline";

type PathSet = { d: string; fill?: boolean }[];

const ICONS: Record<IconName, PathSet> = {
  shield: [{ d: "M12 3 4.5 6v5.4c0 4.4 3.1 8.5 7.5 9.6 4.4-1.1 7.5-5.2 7.5-9.6V6L12 3Z" }],
  "shield-check": [
    { d: "M12 3 4.5 6v5.4c0 4.4 3.1 8.5 7.5 9.6 4.4-1.1 7.5-5.2 7.5-9.6V6L12 3Z" },
    { d: "m9 12 2.2 2.2L15.5 10" },
  ],
  radar: [
    { d: "M12 12 6.9 6.9" },
    { d: "M12 3a9 9 0 1 0 9 9" },
    { d: "M12 7.5a4.5 4.5 0 1 0 4.5 4.5" },
    { d: "M14.5 3.2 12 12" },
  ],
  crosshair: [
    { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" },
    { d: "M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" },
  ],
  "clipboard-check": [
    { d: "M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15" },
    { d: "M9.75 3h4.5A.75.75 0 0 1 15 3.75V5.4a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V3.75A.75.75 0 0 1 9.75 3Z" },
    { d: "m9.5 13 1.8 1.8 3.4-3.6" },
  ],
  activity: [{ d: "M3 12h3.6l2.4-6 3.6 12 2.4-6H21" }],
  eye: [
    { d: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" },
    { d: "M12 14.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" },
  ],
  filter: [{ d: "M3.5 5h17l-6.6 7.8v5.5l-3.8 2.2v-7.7L3.5 5Z" }],
  search: [
    { d: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" },
    { d: "m16.2 16.2 4.3 4.3" },
  ],
  route: [
    { d: "M6 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" },
    { d: "M18 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" },
    { d: "M8.5 17.5h5a4 4 0 0 0 0-8h-3a4 4 0 0 1 0-8h1" },
  ],
  siren: [
    { d: "M7 18v-5a5 5 0 0 1 10 0v5" },
    { d: "M5 18h14a1 1 0 0 1 1 1v1.5H4V19a1 1 0 0 1 1-1Z" },
    { d: "M12 3.5V2M4.6 7 3.3 6.2M19.4 7l1.3-.8" },
  ],
  report: [
    { d: "M5 3.5h9.5L19 8v12.5H5V3.5Z" },
    { d: "M14 3.5V8h5" },
    { d: "M8.5 13v4M12 11v6M15.5 14.5V17" },
  ],
  server: [
    { d: "M4 4.5h16v5H4v-5ZM4 14.5h16v5H4v-5Z" },
    { d: "M7.5 7h.01M7.5 17h.01" },
  ],
  laptop: [
    { d: "M5.5 5.5h13v9h-13v-9Z" },
    { d: "M3 18.5h18" },
  ],
  identity: [
    { d: "M12 11.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z" },
    { d: "M5.5 20a6.5 6.5 0 0 1 13 0" },
  ],
  cloud: [
    { d: "M7 18.5h10a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.6 11 3.75 3.75 0 0 0 7 18.5Z" },
  ],
  firewall: [
    { d: "M3.5 5h17v14h-17V5Z" },
    { d: "M3.5 9.7h17M3.5 14.4h17M9 5v4.7M15 9.7v4.7M9 14.4V19" },
  ],
  app: [
    { d: "M3.5 5h17v14h-17V5Z" },
    { d: "M3.5 9h17" },
    { d: "M6.5 7h.01M9 7h.01" },
  ],
  database: [
    { d: "M12 7.5c4.1 0 7.5-1.1 7.5-2.5S16.1 2.5 12 2.5 4.5 3.6 4.5 5 7.9 7.5 12 7.5Z" },
    { d: "M19.5 5v14c0 1.4-3.4 2.5-7.5 2.5S4.5 20.4 4.5 19V5" },
    { d: "M19.5 12c0 1.4-3.4 2.5-7.5 2.5S4.5 13.4 4.5 12" },
  ],
  lock: [
    { d: "M6 10.5h12v10H6v-10Z" },
    { d: "M8.75 10.5V7.6a3.25 3.25 0 0 1 6.5 0v2.9" },
  ],
  key: [
    { d: "M15.5 10.5a4 4 0 1 0-3.9 4l1.4 1.4-1.4 1.4 1.4 1.4-1.4 1.4 1.4 1.4" },
  ],
  users: [
    { d: "M9 11.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z" },
    { d: "M2.5 20a6.5 6.5 0 0 1 13 0" },
    { d: "M16 5.4a3.25 3.25 0 0 1 0 6.2M17.5 14.6A6.5 6.5 0 0 1 21.5 20" },
  ],
  bank: [
    { d: "M3.5 9.5 12 4l8.5 5.5" },
    { d: "M5.5 9.5v9M18.5 9.5v9M9.5 9.5v9M14.5 9.5v9" },
    { d: "M3 20.5h18" },
  ],
  health: [
    { d: "M12 20.5s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 8a4.4 4.4 0 0 1 7.5 2.9c0 5-7.5 9.6-7.5 9.6Z" },
  ],
  education: [
    { d: "m12 4 9.5 4.5L12 13 2.5 8.5 12 4Z" },
    { d: "M6.5 10.7V16c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-5.3" },
  ],
  factory: [
    { d: "M3.5 20.5V11l5.5 3.5V11l5.5 3.5V6.5h6v14h-17Z" },
    { d: "M17.5 11.5h.01M17.5 15.5h.01" },
  ],
  briefcase: [
    { d: "M3.5 7.5h17v13h-17v-13Z" },
    { d: "M9 7.5V5.4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.1" },
    { d: "M3.5 12.5h17" },
  ],
  cart: [
    { d: "M2.5 4h2.3l2.2 11h10.4l2.1-8H6" },
    { d: "M9 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" },
  ],
  "arrow-right": [{ d: "M4.5 12h15M13.5 6l6 6-6 6" }],
  "arrow-up-right": [{ d: "M7 17 17 7M8.5 7H17v8.5" }],
  check: [{ d: "m5 12.5 4.5 4.5L19 7.5" }],
  close: [{ d: "m6 6 12 12M18 6 6 18" }],
  menu: [{ d: "M4 7h16M4 12h16M4 17h16" }],
  "chevron-down": [{ d: "m6 9.5 6 6 6-6" }],
  "chevron-right": [{ d: "m9.5 6 6 6-6 6" }],
  alert: [
    { d: "M12 3.5 21 19.5H3L12 3.5Z" },
    { d: "M12 10v4M12 16.8h.01" },
  ],
  info: [
    { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" },
    { d: "M12 11v5.5M12 7.8h.01" },
  ],
  clock: [
    { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" },
    { d: "M12 7v5.2l3.2 2" },
  ],
  layers: [
    { d: "m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" },
    { d: "m3.5 12 8.5 4.5L20.5 12" },
    { d: "m3.5 16.5 8.5 4.5 8.5-4.5" },
  ],
  "git-branch": [
    { d: "M6.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6.5 21.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" },
    { d: "M6.5 6.5v11M6.5 13.5h6a5 5 0 0 0 5-2.5" },
  ],
  refresh: [
    { d: "M20 11.5a8 8 0 0 0-14-4.7" },
    { d: "M4 12.5a8 8 0 0 0 14 4.7" },
    { d: "M6 3v4h4M18 21v-4h-4" },
  ],
  target: [
    { d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" },
    { d: "M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" },
    { d: "M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" },
  ],
  bug: [
    { d: "M8 8.5a4 4 0 0 1 8 0v5a4 4 0 0 1-8 0v-5Z" },
    { d: "M8 11H4.5M19.5 11H16M8 15l-3 2M19 17l-3-2M8.5 7 6.5 5M15.5 7l2-2" },
  ],
  mail: [
    { d: "M3.5 5.5h17v13h-17v-13Z" },
    { d: "m3.5 6.5 8.5 6 8.5-6" },
  ],
  phone: [
    { d: "M8.4 3.5H5.2A1.7 1.7 0 0 0 3.5 5.4c0 8.4 6.7 15.1 15.1 15.1a1.7 1.7 0 0 0 1.9-1.7v-3.2l-4.2-1.4-1.9 2.2a13 13 0 0 1-6.3-6.3l2.2-1.9L8.4 3.5Z" },
  ],
  "map-pin": [
    { d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" },
    { d: "M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" },
  ],
  external: [
    { d: "M13.5 4.5H19.5V10.5" },
    { d: "M19.5 4.5 11 13" },
    { d: "M18 14.5v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6h4" },
  ],
  spinner: [{ d: "M12 3.5a8.5 8.5 0 0 1 8.5 8.5" }],
  sparkline: [{ d: "M3 16.5 7.5 10l3.5 3.5L15 7l2.5 4 3.5-5" }],
};

type IconProps = {
  name: IconName;
  className?: string;
  /**
   * Icons are decorative by default (aria-hidden). Pass a title only when the
   * icon is the sole carrier of meaning, e.g. a button with no visible label.
   */
  title?: string;
  strokeWidth?: number;
};

export function Icon({
  name,
  className = "size-5",
  title,
  strokeWidth = 1.5,
}: IconProps) {
  const paths = ICONS[name];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths.map((p, i) => (
        <path key={i} d={p.d} />
      ))}
    </svg>
  );
}
