"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function ServicesStack({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const panels = Array.from(stack.querySelectorAll<HTMLElement>(".service-panel"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      panels.forEach((panel) => panel.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    panels.forEach((panel) => observer.observe(panel));
    stack.classList.add("has-motion");

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={stackRef} className="services-stack shell">
      {children}
    </section>
  );
}
