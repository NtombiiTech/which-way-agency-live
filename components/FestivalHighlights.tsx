"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Pause, Play, SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FilmId = "sphe-d" | "rnb-2026";

const films = [
  {
    id: "sphe-d" as const,
    title: "SPHE D & Friends",
    kicker: "From open ground to opening moment",
    event: "Keep Newcastle Alive With Possibilities",
    date: "Newcastle",
    description:
      "A behind-the-scenes look at the build: site preparation, marquee construction, stage design, sound and the production detail that turns an idea into a live experience.",
    video: "/videos/sphe-d-and-friends-setup.mp4",
    poster: "/videos/sphe-d-and-friends-poster.webp",
    duration: "00:32",
    href: "/work/sphe-d-and-friends",
  },
  {
    id: "rnb-2026" as const,
    title: "R&B and Soulful Groove 2026",
    kicker: "The room came alive",
    event: "Festival highlights",
    date: "14 June 2026",
    description:
      "The finished experience in motion: live performance, audience energy, hospitality and branded moments held together as one soulful celebration.",
    video: "/videos/rnb-soulful-groove-2026.mp4",
    poster: "/videos/rnb-soulful-groove-2026-poster.webp",
    duration: "01:34",
    href: "/work/rnb-soulful-groove-2026",
  },
] as const;

export function FestivalHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Record<FilmId, HTMLVideoElement | null>>({
    "sphe-d": null,
    "rnb-2026": null,
  });
  const [playing, setPlaying] = useState<FilmId | null>(null);
  const [soundOn, setSoundOn] = useState<Record<FilmId, boolean>>({
    "sphe-d": false,
    "rnb-2026": false,
  });

  useGSAP(
    () => {
      if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>(".festival-film").forEach((film) => {
        const frame = film.querySelector<HTMLElement>(".festival-frame");
        const copy = film.querySelector<HTMLElement>(".festival-film-copy");

        gsap.fromTo(
          frame,
          { scale: 0.86, opacity: 0.52 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: film,
              start: "top 88%",
              end: "center 48%",
              scrub: 0.9,
            },
          },
        );

        gsap.fromTo(
          copy,
          { y: 72, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: film,
              start: "top 78%",
              end: "center 55%",
              scrub: 0.7,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  async function togglePlayback(id: FilmId) {
    const target = videoRefs.current[id];
    if (!target) return;

    for (const film of films) {
      if (film.id !== id) videoRefs.current[film.id]?.pause();
    }

    if (target.paused) {
      try {
        await target.play();
        setPlaying(id);
      } catch {
        setPlaying(null);
      }
    } else {
      target.pause();
      setPlaying(null);
    }
  }

  function toggleSound(id: FilmId) {
    const target = videoRefs.current[id];
    if (!target) return;

    const next = !soundOn[id];
    target.muted = !next;
    setSoundOn((current) => ({ ...current, [id]: next }));
  }

  return (
    <section ref={sectionRef} className="festival-highlights" aria-labelledby="festival-title">
      <div className="shell festival-intro">
        <div>
          <p className="festival-kicker">Festival highlights</p>
          <h2 id="festival-title">
            The work behind <span className="festival-title-reel" aria-hidden="true" /> the moment.
          </h2>
        </div>
        <div className="festival-intro-side">
          <p>
            Two perspectives on live experience: the precision it takes to build it, and the energy people carry away.
          </p>
          <a href="#festival-films" className="festival-jump">
            Watch the films <ArrowDown weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div id="festival-films" className="shell festival-film-stack">
        {films.map((film, index) => {
          const isPlaying = playing === film.id;
          const hasSound = soundOn[film.id];

          return (
            <article key={film.id} className={`festival-film festival-film-${index + 1}`}>
              <div className="festival-frame">
                <video
                  ref={(node) => {
                    videoRefs.current[film.id] = node;
                  }}
                  src={film.video}
                  poster={film.poster}
                  preload="none"
                  playsInline
                  muted={!hasSound}
                  onPlay={() => setPlaying(film.id)}
                  onPause={() => setPlaying((current) => (current === film.id ? null : current))}
                  onEnded={() => setPlaying(null)}
                />
                <div className="festival-frame-wash" aria-hidden="true" />
                <button
                  type="button"
                  className={`festival-play${isPlaying ? " is-playing" : ""}`}
                  onClick={() => togglePlayback(film.id)}
                  aria-label={`Play ${film.title}`}
                  aria-hidden={isPlaying}
                  tabIndex={isPlaying ? -1 : 0}
                >
                  <Play weight="fill" aria-hidden="true" />
                  <span>Play film</span>
                </button>
                <div className="festival-frame-meta">
                  <span>{film.duration}</span>
                  <div className="festival-frame-controls">
                    {isPlaying && (
                      <button
                        type="button"
                        onClick={() => togglePlayback(film.id)}
                        aria-label={`Pause ${film.title}`}
                      >
                        <Pause weight="fill" aria-hidden="true" />
                        Pause
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleSound(film.id)}
                      aria-label={`${hasSound ? "Mute" : "Turn sound on for"} ${film.title}`}
                    >
                      {hasSound ? <SpeakerHigh weight="fill" aria-hidden="true" /> : <SpeakerSlash weight="fill" aria-hidden="true" />}
                      {hasSound ? "Sound on" : "Sound off"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="festival-film-copy">
                <p className="festival-film-kicker">{film.kicker}</p>
                <h3>{film.title}</h3>
                <p className="festival-film-event">{film.event}</p>
                <p className="festival-film-description">{film.description}</p>
                <div className="festival-film-detail">
                  <span>{film.date}</span>
                  <span>{index === 0 ? "Concept to execution" : "Live experience"}</span>
                </div>
                <Link href={film.href} className="festival-case-link">
                  View case study <ArrowUpRight weight="bold" aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
