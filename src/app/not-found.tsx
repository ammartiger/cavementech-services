import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { primaryNav, type NavLink } from "@/content/nav";

export default function NotFound() {
  // Flatten the nav into concrete links: dropdown children where they exist,
  // otherwise the top-level item itself.
  const destinations: NavLink[] = primaryNav
    .flatMap<NavLink>((item) =>
      item.children
        ? item.children
        : item.href
          ? [{ label: item.label, href: item.href }]
          : [],
    )
    .slice(0, 6);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-field absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_25%,transparent_100%)] opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,179,36,0.1),transparent_65%)] blur-2xl"
      />

      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="mono-label rounded-full border border-line-strong bg-surface-2/70 px-3.5 py-1.5 text-ink-muted">
          Error 404
        </p>

        <h1 className="mt-7 text-h1 text-ink">
          That page isn&apos;t{" "}
          <span className="text-brand-gradient">where you looked.</span>
        </h1>

        <p className="mt-6 max-w-lg text-lead text-ink-muted">
          The link may be out of date, or the page may have moved. Nothing is
          broken on your side.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg" icon="arrow-right">
            Back to home
          </Button>
          <Button href="/contact" size="lg" variant="ghost">
            Contact us
          </Button>
        </div>

        <nav aria-label="Popular pages" className="mt-14 w-full max-w-2xl">
          <p className="mono-label justify-center text-ink-subtle">
            Or try one of these
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {destinations.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-lg border border-line bg-surface-2/40 px-4 py-3 text-left text-[0.875rem] text-ink-muted transition-colors hover:border-line-bright hover:text-ink"
                >
                  {item.label}
                  <Icon
                    name="arrow-right"
                    className="size-3.5 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
