"use client";

import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const reduce = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (reduce === false) video.current?.play().catch(() => setPlaying(false));
    else video.current?.pause();
  }, [reduce]);

  async function togglePlayback() {
    if (!video.current) return;
    if (!video.current.paused) video.current.pause();
    else await video.current.play().catch(() => setPlaying(false));
  }

  return (
    <section className="hero-video" aria-labelledby="agency-title">
      <div className="hero-media">
        <video ref={video} muted loop playsInline preload="metadata" poster="/videos/hero-desktop-poster.webp" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
          <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="shell hero-copy">
        <h1 id="agency-title"><span>Which Way</span><span>Agency</span></h1>
        <p>A creative agency connecting brands, talent and culture.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/work">Explore our work <ArrowUpRight weight="bold" aria-hidden="true" /></Link>
          <Link className="hero-project-link" href="/proposal">Have a brief? Let’s talk <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <button className="hero-playback" onClick={togglePlayback} aria-label={playing ? "Pause background film" : "Play background film"}>
        {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
      </button>
    </section>
  );
}
