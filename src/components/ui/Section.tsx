import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Adds a hairline divider above the section. */
  divider?: boolean;
  /** Vertical rhythm. "tight" for stacked related sections. */
  spacing?: "tight" | "normal" | "loose";
  /** Applies an alternate surface tone to break up long pages. */
  tone?: "base" | "raised";
  "aria-labelledby"?: string;
};

const SPACING = {
  tight: "py-14 sm:py-16",
  normal: "py-20 sm:py-24 lg:py-28",
  loose: "py-24 sm:py-32 lg:py-36",
};

export function Section({
  id,
  children,
  className = "",
  divider = false,
  spacing = "normal",
  tone = "base",
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${SPACING[spacing]} ${
        tone === "raised" ? "bg-surface/40" : ""
      } ${divider ? "border-t border-line" : ""} ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mono-label flex items-center gap-2.5 text-brand ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-px w-6 bg-linear-to-r from-brand to-transparent"
      />
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  /** Renders the heading at the given level; visual size is unchanged. */
  as?: "h1" | "h2" | "h3";
  className?: string;
  maxWidth?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  as: Tag = "h2",
  className = "",
  maxWidth = "max-w-3xl",
}: HeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${maxWidth} ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      ) : null}
      <Tag
        id={id}
        className={`text-h2 text-ink ${eyebrow ? "mt-5" : ""}`}
      >
        {title}
      </Tag>
      {lead ? (
        <p className="mt-5 text-lead text-ink-muted">{lead}</p>
      ) : null}
    </Reveal>
  );
}
