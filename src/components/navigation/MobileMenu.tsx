"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { primaryNav } from "@/content/nav";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

/**
 * Full-screen mobile navigation.
 *
 * Rather than shrinking the desktop bar, this reorganises the structure for
 * touch: services are expanded inline with their descriptions (no nested
 * tapping), secondary links follow, and both conversion actions sit at the
 * bottom within thumb reach as full-width targets.
 *
 * Implements a focus trap, background scroll lock and Escape-to-close.
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      /*
       * overflow-hidden is load-bearing: the panel parks at translate-x-full
       * while closed, which sits outside the viewport. A fixed element is
       * positioned against the viewport rather than the body, so body's
       * overflow-x cannot clip it — without this the closed menu adds ~49px of
       * horizontal page scroll on small screens.
       */
      className={`fixed inset-0 z-100 overflow-hidden lg:hidden ${
        open ? "" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <div
        className={`absolute inset-0 bg-base/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-surface transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-line-strong hover:bg-surface-2"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="scroll-x flex-1 overflow-y-auto overscroll-contain px-5 py-6"
        >
          {primaryNav.map((item) => (
            <div key={item.label} className="mb-7 last:mb-0">
              {item.children ? (
                <>
                  <p className="mono-label mb-3 text-ink-subtle">
                    {item.label}
                  </p>
                  <ul className="space-y-1">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          tabIndex={open ? 0 : -1}
                          className="block rounded-xl border border-line bg-surface-2/50 px-4 py-3.5 transition-colors active:bg-surface-3"
                        >
                          <span className="block text-[0.9375rem] font-medium text-ink">
                            {child.label}
                          </span>
                          {child.blurb ? (
                            <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-subtle">
                              {child.blurb}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href!}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-between border-b border-line py-3 text-lg text-ink transition-colors active:text-brand"
                >
                  {item.label}
                  <Icon
                    name="chevron-right"
                    className="size-4 text-ink-faint"
                  />
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="shrink-0 space-y-2.5 border-t border-line bg-surface-2/50 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Button
            href="/request-assessment"
            size="lg"
            className="w-full"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
          >
            Request a Security Assessment
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="w-full"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
          >
            Talk to a Security Expert
          </Button>
        </div>
      </div>
    </div>
  );
}
