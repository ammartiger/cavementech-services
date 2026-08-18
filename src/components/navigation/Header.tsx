"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/content/nav";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Solidify the bar once the hero starts scrolling under it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menus on route change. */
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  /* Escape closes the dropdown; click-away closes it too. */
  useEffect(() => {
    if (!openMenu) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  /** Small delay on mouse-out so the pointer can travel into the panel. */
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#0a0c10]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-base/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x">
          <div className="flex h-18 items-center justify-between gap-6">
            <Link
              href="/"
              className="shrink-0 rounded-md"
              aria-label={`CavemenTech Security Services — home`}
            >
              <Logo />
            </Link>

            {/* ---------------- Desktop navigation ---------------- */}
            <nav
              ref={navRef}
              aria-label="Primary"
              className="hidden items-center gap-1 lg:flex"
            >
              {primaryNav.map((item) => {
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href!}
                      className={`rounded-lg px-3 py-2 text-[0.9375rem] transition-colors ${
                        isActive(item.href)
                          ? "text-brand"
                          : "text-ink-muted hover:text-ink"
                      }`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const open = openMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenMenu(item.label);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(open ? null : item.label)}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[0.9375rem] transition-colors ${
                        open || item.children.some((c) => isActive(c.href))
                          ? "text-brand"
                          : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <Icon
                        name="chevron-down"
                        className={`size-3.5 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                        strokeWidth={2}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        open
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="panel-lit hairline-top overflow-hidden p-2 shadow-2xl shadow-black/60">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="group/item block rounded-xl p-3.5 transition-colors hover:bg-surface-3"
                            tabIndex={open ? 0 : -1}
                          >
                            <span className="flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
                              {child.label}
                              <Icon
                                name="arrow-right"
                                className="size-3.5 text-brand opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                                strokeWidth={2}
                              />
                            </span>
                            {child.blurb ? (
                              <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-subtle">
                                {child.blurb}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* ---------------- Actions ---------------- */}
            <div className="flex items-center gap-2">
              <Button
                href="/contact"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Request Assessment
              </Button>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-line-strong hover:bg-surface-2 lg:hidden"
              >
                <Icon name="menu" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
