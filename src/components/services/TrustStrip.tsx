import { Icon, type IconName } from "@/components/ui/Icon";
import { trustPoints } from "@/content/services";

/**
 * Value strip directly beneath the hero.
 *
 * Deliberately text and icons only. The brief forbids fabricated customer
 * logos, certifications or awards, and a row of invented badges would
 * undermine exactly the trust this strip exists to build.
 */
const ICONS: IconName[] = [
  "radar",
  "siren",
  "crosshair",
  "clipboard-check",
  "users",
];

export function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface/50">
      <div className="container-x">
        <ul className="grid grid-cols-2 divide-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {trustPoints.map((point, i) => (
            <li
              key={point}
              className={`flex items-center gap-3 px-1 py-5 lg:justify-center lg:px-5 ${
                i === trustPoints.length - 1 && trustPoints.length % 2 !== 0
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <Icon
                name={ICONS[i]}
                className="size-[1.125rem] shrink-0 text-brand/70"
              />
              <span className="text-[0.8125rem] font-medium leading-tight text-ink-muted">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
