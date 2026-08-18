import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

type Crumb = { label: string; href?: string };

/**
 * Shared masthead for interior pages. Keeps every page opening on the same
 * rhythm as the homepage hero without repeating its weight.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [],
  primary,
  secondary,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden="true"
        className="grid-field absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_30%_0%,#000_25%,transparent_100%)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,179,36,0.1),transparent_65%)] blur-2xl"
      />

      <div className="container-x relative">
        {crumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-ink-subtle">
              <li>
                <Link href="/" className="transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <Icon
                    name="chevron-right"
                    className="size-3 text-ink-faint"
                  />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-brand"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink-muted">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div
          className={
            aside
              ? "grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
              : ""
          }
        >
          <div className={aside ? "" : "max-w-3xl"}>
            <Reveal>
              <p className="mono-label text-brand">{eyebrow}</p>
              <h1 className="mt-5 text-h1 text-ink">{title}</h1>
              {lead ? (
                <p className="mt-6 max-w-2xl text-lead text-ink-muted">{lead}</p>
              ) : null}
            </Reveal>

            {primary || secondary ? (
              <Reveal delay={100}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  {primary ? (
                    <Button href={primary.href} size="lg" icon="arrow-right">
                      {primary.label}
                    </Button>
                  ) : null}
                  {secondary ? (
                    <Button href={secondary.href} size="lg" variant="ghost">
                      {secondary.label}
                    </Button>
                  ) : null}
                </div>
              </Reveal>
            ) : null}
          </div>

          {aside ? <Reveal delay={140}>{aside}</Reveal> : null}
        </div>
      </div>
    </section>
  );
}
