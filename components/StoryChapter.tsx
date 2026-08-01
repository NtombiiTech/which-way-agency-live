"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const storyFrames = [
  { src: "/media/rnb-04.webp", alt: "Guests sharing a live music experience" },
  { src: "/media/mercedes-02.webp", alt: "A live event produced for Mercedes-Benz" },
  { src: "/media/amcor-04.webp", alt: "A community brand experience in motion" },
];

export function StoryChapter() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const lines = gsap.utils.toArray<HTMLElement>(".story-line");
        const backdrops = gsap.utils.toArray<HTMLElement>(".story-backdrop");
        const fragments = gsap.utils.toArray<HTMLElement>(".story-fragment");

        gsap.set(lines, { opacity: 0.14, yPercent: 28 });
        gsap.set(backdrops, { opacity: 0, scale: 1.08 });
        gsap.set(fragments, { scale: 0.72, rotate: -3 });
        gsap.set(".story-action", { opacity: 0, y: 24 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "+=210%",
            pin: ".story-stage",
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        lines.forEach((line, index) => {
          const position = index * 1.05;

          timeline
            .to(backdrops[index], { opacity: 0.72, scale: 1, duration: 0.8, ease: "none" }, position)
            .to(line, { opacity: 1, yPercent: 0, duration: 0.7, ease: "none" }, position)
            .to(fragments[index], { scale: 1, rotate: 0, duration: 0.7, ease: "none" }, position + 0.08);

          if (index > 0) {
            timeline
              .to(backdrops[index - 1], { opacity: 0, duration: 0.45, ease: "none" }, position)
              .to(lines[index - 1], { opacity: 0.42, duration: 0.35, ease: "none" }, position);
          }
        });

        timeline
          .to(lines, { opacity: 1, duration: 0.55, ease: "none" }, 3.05)
          .to(".story-action", { opacity: 1, y: 0, duration: 0.5, ease: "none" }, 3.12);
      });

      media.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        const lines = gsap.utils.toArray<HTMLElement>(".story-line");
        const backdrops = gsap.utils.toArray<HTMLElement>(".story-backdrop");
        const fragments = gsap.utils.toArray<HTMLElement>(".story-fragment");

        gsap.set(lines, { opacity: 0.14, yPercent: 24 });
        gsap.set(backdrops, { opacity: 0, scale: 1.08 });
        gsap.set(backdrops[0], { opacity: 0.58 });
        gsap.set(fragments, { scale: 0.72, rotate: -3 });
        gsap.set(".story-action", { opacity: 0, y: 20 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.65,
          },
        });

        lines.forEach((line, index) => {
          const position = index * 0.9;

          timeline
            .to(backdrops[index], { opacity: 0.68, scale: 1, duration: 0.65, ease: "none" }, position)
            .to(line, { opacity: 1, yPercent: 0, duration: 0.6, ease: "none" }, position)
            .to(fragments[index], { scale: 1, rotate: 0, duration: 0.6, ease: "none" }, position + 0.06);

          if (index > 0) {
            timeline
              .to(backdrops[index - 1], { opacity: 0, duration: 0.35, ease: "none" }, position)
              .to(lines[index - 1], { opacity: 0.46, duration: 0.3, ease: "none" }, position);
          }
        });

        timeline
          .to(lines, { opacity: 1, duration: 0.45, ease: "none" }, 2.72)
          .to(".story-action", { opacity: 1, y: 0, duration: 0.4, ease: "none" }, 2.76);
      });

      return () => media.revert();
    },
    { scope: section },
  );

  return (
    <section ref={section} className="story-chapter" aria-labelledby="story-heading">
      <div className="story-stage">
        <div className="story-backdrops" aria-hidden="true">
          {storyFrames.map((frame) => (
            <Image key={frame.src} src={frame.src} alt="" fill sizes="100vw" className="story-backdrop" />
          ))}
        </div>
        <div className="story-wash" aria-hidden="true" />

        <div className="shell story-content">
          <p className="story-kicker">The stories people carry forward</p>
          <h2 id="story-heading" className="story-lines">
            <span className="story-line">
              Every brand has a
              <span className="story-fragment">
                <Image src={storyFrames[0].src} alt={storyFrames[0].alt} fill sizes="160px" />
              </span>
              story.
            </span>
            <span className="story-line">
              Worth
              <span className="story-fragment story-fragment-tall">
                <Image src={storyFrames[1].src} alt={storyFrames[1].alt} fill sizes="160px" />
              </span>
              telling.
            </span>
            <span className="story-line">
              Worth
              <span className="story-fragment">
                <Image src={storyFrames[2].src} alt={storyFrames[2].alt} fill sizes="160px" />
              </span>
              remembering.
            </span>
          </h2>

          <Link className="story-action text-link" href="/work">
            Explore the stories <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
