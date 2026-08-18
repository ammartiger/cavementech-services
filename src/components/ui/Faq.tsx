"use client";

import { useState } from "react";
import type { Faq } from "@/content/faq";
import { Icon } from "./Icon";

/**
 * FAQ accordion built on native <button> + aria-expanded rather than
 * <details>, so the open/close transition can be animated consistently across
 * browsers while keeping full keyboard and screen-reader semantics.
 *
 * Answers stay in the DOM at all times (height-collapsed, aria-hidden when
 * closed) so the matching FAQPage JSON-LD always has visible on-page support.
 */
export function FaqList({
  faqs,
  className = "",
}: {
  faqs: Faq[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={faq.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-brand"
              >
                <span className="text-[1.0625rem] font-medium text-ink">
                  {faq.q}
                </span>
                <Icon
                  name="chevron-down"
                  className={`mt-1 size-5 shrink-0 text-ink-subtle transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p className="pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-muted">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
