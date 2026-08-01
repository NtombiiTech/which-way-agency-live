"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const storyFrames = [
  { src: "/media/rnb-04.webp", alt: "Guests sharing a live music experience" },
  { src: "/media/mercedes-02.webp", alt: "A live event produced for Mercedes-Benz" },
  { src: "/media/amcor-04.webp", alt: "A community brand experience in motion" },
] as const;

export function StoryChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeStepRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const updateStep = () => {
      frameRef.current = null;

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
      const nextStep = Math.min(storyFrames.length - 1, Math.floor(progress * storyFrames.length));

      if (nextStep !== activeStepRef.current) {
        activeStepRef.current = nextStep;
        setActiveStep(nextStep);
      }
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateStep);
    };

    updateStep();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const storyComplete = activeStep === storyFrames.length - 1;

  return (
    <section ref={sectionRef} className="story-chapter" aria-labelledby="story-heading">
      <div className="story-stage">
        <div className="story-backdrops" aria-hidden="true">
          {storyFrames.map((frame, index) => (
            <Image
              key={frame.src}
              src={frame.src}
              alt=""
              fill
              sizes="100vw"
              quality={60}
              className={`story-backdrop${index === activeStep ? " is-active" : ""}`}
            />
          ))}
        </div>
        <div className="story-wash" aria-hidden="true" />

        <div className="shell story-content">
          <p className="story-kicker">The stories people carry forward</p>
          <h2 id="story-heading" className={`story-lines${storyComplete ? " is-complete" : ""}`}>
            <span className={`story-line${activeStep >= 0 ? " is-revealed" : ""}${activeStep === 0 ? " is-current" : ""}`}>
              Every brand has a
              <span className="story-fragment">
                <Image
                  src={storyFrames[0].src}
                  alt={storyFrames[0].alt}
                  fill
                  sizes="(max-width: 767px) 72px, 160px"
                  quality={60}
                />
              </span>
              story.
            </span>
            <span className={`story-line${activeStep >= 1 ? " is-revealed" : ""}${activeStep === 1 ? " is-current" : ""}`}>
              Worth
              <span className="story-fragment story-fragment-tall">
                <Image
                  src={storyFrames[1].src}
                  alt={storyFrames[1].alt}
                  fill
                  sizes="(max-width: 767px) 56px, 112px"
                  quality={60}
                />
              </span>
              telling.
            </span>
            <span className={`story-line${activeStep >= 2 ? " is-revealed" : ""}${activeStep === 2 ? " is-current" : ""}`}>
              Worth
              <span className="story-fragment">
                <Image
                  src={storyFrames[2].src}
                  alt={storyFrames[2].alt}
                  fill
                  sizes="(max-width: 767px) 72px, 160px"
                  quality={60}
                />
              </span>
              remembering.
            </span>
          </h2>

          <Link className={`story-action text-link${storyComplete ? " is-visible" : ""}`} href="/work">
            Explore the stories <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
