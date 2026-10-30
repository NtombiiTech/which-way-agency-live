"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window)) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      animation = element.animate(
        [{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 650, delay: delay * 1000, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "backwards" },
      );
      observer.disconnect();
    }, { threshold: 0.12 });
    const stop = () => { if (preference.matches) { animation?.cancel(); observer.disconnect(); } };
    preference.addEventListener("change", stop);
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); preference.removeEventListener("change", stop); };
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
