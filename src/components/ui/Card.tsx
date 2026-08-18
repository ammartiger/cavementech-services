import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/**
 * Surface card with a hairline border and an amber edge-glow on hover.
 * The glow is a pseudo-element gradient rather than a box-shadow so it stays
 * cheap to composite during scroll.
 */
export function Card({
  children,
  className = "",
  interactive = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={`panel-lit hairline-top relative overflow-hidden p-6 sm:p-7 ${
        interactive
          ? "transition-colors duration-300 hover:border-line-bright"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Icon tile used at the top of feature cards. */
export function IconTile({
  name,
  tone = "brand",
  className = "",
}: {
  name: IconName;
  tone?: "brand" | "signal" | "neutral";
  className?: string;
}) {
  const tones = {
    brand:
      "border-brand/25 bg-brand/10 text-brand shadow-[inset_0_1px_0_0_rgba(245,179,36,0.15)]",
    signal: "border-signal/25 bg-signal/10 text-signal",
    neutral: "border-line-strong bg-surface-3 text-ink-muted",
  };
  return (
    <span
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl border ${tones[tone]} ${className}`}
    >
      <Icon name={name} className="size-[1.375rem]" />
    </span>
  );
}

/** Feature card: icon, title, body, optional link. */
export function FeatureCard({
  icon,
  title,
  children,
  href,
  linkLabel = "Learn more",
  tone = "brand",
  className = "",
}: {
  icon: IconName;
  title: string;
  children: ReactNode;
  href?: string;
  linkLabel?: string;
  tone?: "brand" | "signal" | "neutral";
  className?: string;
}) {
  return (
    <Card interactive={!!href} className={`group flex flex-col ${className}`}>
      <IconTile name={icon} tone={tone} />
      <h3 className="mt-5 text-h3 text-ink">{title}</h3>
      <div className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
        {children}
      </div>
      {href ? (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-bright"
        >
          {linkLabel}
          <Icon
            name="arrow-right"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      ) : null}
    </Card>
  );
}

/** Compact tick list used inside service cards. */
export function CheckList({
  items,
  className = "",
  tone = "brand",
}: {
  items: readonly string[];
  className?: string;
  tone?: "brand" | "signal";
}) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] text-ink-muted">
          <Icon
            name="check"
            className={`mt-1 size-4 shrink-0 ${
              tone === "brand" ? "text-brand" : "text-signal"
            }`}
            strokeWidth={2}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Labels a UI mockup as conceptual. Required wherever the site shows a product
 * interface that is not backed by live data.
 */
export function IllustrativeNotice({
  children = "Illustrative interface — representative of the reporting concept, not live customer data.",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-start gap-2 text-xs leading-relaxed text-ink-subtle ${className}`}
    >
      <Icon name="info" className="mt-px size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
