import { isPlaceholder } from "@/content/site";

/**
 * Renders a company detail, styling it distinctly while it is still an
 * unfilled placeholder from content/site.ts.
 *
 * This is deliberate: the brief forbids fabricating contact details,
 * certifications or addresses, and a visibly-pending value is far safer than a
 * plausible-looking invented one. Once the real value is set in site.ts, this
 * renders as ordinary text with no extra styling.
 */
export function Detail({
  value,
  className = "",
  /** Wraps a filled value in a mailto:/tel: link when given. */
  linkPrefix,
}: {
  value: string;
  className?: string;
  linkPrefix?: "mailto:" | "tel:";
}) {
  if (isPlaceholder(value)) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong bg-surface-2/60 px-2 py-0.5 font-mono text-[0.75rem] text-ink-subtle ${className}`}
        title="Pending — replace this value in src/content/site.ts"
      >
        {value}
      </span>
    );
  }

  if (linkPrefix) {
    const href = `${linkPrefix}${value.replace(/\s+/g, "")}`;
    return (
      <a
        href={href}
        className={`text-ink transition-colors hover:text-brand ${className}`}
      >
        {value}
      </a>
    );
  }

  return <span className={className}>{value}</span>;
}
