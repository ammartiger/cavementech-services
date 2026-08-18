"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in ms, for revealing lists item by item. */
  delay?: number;
  as?: ElementType;
  /** Anchor target, for sections linked from navigation. */
  id?: string;
};

/**
 * Scroll-reveal wrapper.
 *
 * Uses a single IntersectionObserver per element and disconnects immediately
 * after the first intersection — no scroll listeners, no layout thrash. Content
 * is present in the DOM at all times (opacity/transform only), so it remains
 * available to search engines and assistive technology regardless of state.
 *
 * Respects prefers-reduced-motion via the .reveal utility in globals.css, which
 * neutralises the initial offset when reduced motion is requested.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser cannot observe, show immediately rather than hiding content.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${shown ? "reveal-shown" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
