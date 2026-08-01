"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

export function HeroVideo() {
  const reduce = useReducedMotion();

  return (
    <section className="hero-video">
      <motion.div
        className="hero-media"
        initial={reduce ? false : { opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <video autoPlay muted loop playsInline preload="metadata" poster="/videos/hero-desktop-poster.webp" aria-hidden="true">
          <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="hero-scrim" aria-hidden="true" />

      <motion.div
        className="shell hero-copy"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
      >
        <motion.h1 variants={rise}>Experiences people remember.</motion.h1>
        <motion.p variants={rise}>
          We shape brand stories, live moments and cultural connections from first idea to final applause.
        </motion.p>
        <motion.div className="hero-actions" variants={rise}>
          <Link className="button button-primary" href="/work">
            View our work <ArrowDownRight weight="bold" aria-hidden="true" />
          </Link>
          <Link className="button button-ghost" href="/proposal">
            Request proposal <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] } },
};
