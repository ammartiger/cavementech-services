import Link from "next/link";
import { footerNav } from "@/content/nav";
import { contactLinks, site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  const contactRows = [
    {
      icon: "mail" as const,
      label: site.contact.email,
      href: contactLinks.mailto,
      external: false,
    },
    {
      icon: "phone" as const,
      label: site.contact.phone,
      href: contactLinks.tel,
      external: false,
    },
    {
      icon: "map-pin" as const,
      label: site.contact.address,
      href: null,
      external: false,
    },
  ];

  return (
    <footer className="relative border-t border-line bg-surface/50">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/30 to-transparent"
      />

      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          {/* Identity + contact */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">
              {site.tagline} — security operations, offensive security and
              continuous assurance for organisations across Pakistan.
            </p>

            <ul className="mt-7 space-y-3 text-[0.875rem]">
              {contactRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-2.5 text-ink-muted"
                >
                  <Icon
                    name={row.icon}
                    className="size-4 shrink-0 text-ink-faint"
                  />
                  {row.href ? (
                    <a
                      href={row.href}
                      className="transition-colors hover:text-brand"
                    >
                      {row.label}
                    </a>
                  ) : (
                    <span>{row.label}</span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand/30 bg-brand/8 px-3.5 py-2 text-[0.8125rem] font-medium text-brand transition-colors hover:border-brand/60 hover:bg-brand/12"
            >
              Message us on WhatsApp
              <Icon name="arrow-right" className="size-3.5" />
            </a>

            <a
              href={site.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-1.5 text-[0.8125rem] text-ink-subtle transition-colors hover:text-brand"
            >
              cavementech.com — research &amp; write-ups
              <Icon name="external" className="size-3.5" />
            </a>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="mono-label text-ink-subtle">{group.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.875rem] text-ink-muted transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Coverage statement — deliberately not a 24/7 claim */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5 text-[0.8125rem] text-ink-subtle">
            <span className="relative flex size-2 shrink-0">
              <span className="motion-flow absolute inline-flex size-full animate-blink rounded-full bg-active/70" />
              <span className="relative inline-flex size-2 rounded-full bg-active" />
            </span>
            {site.coverageStatement}
          </p>
          <p className="text-[0.8125rem] text-ink-faint">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
