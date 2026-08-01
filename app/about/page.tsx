import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Which Way Agency, a South African creative agency shaping experiences and building impact.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <Image src="/videos/hero-desktop-poster.webp" alt="Which Way Agency brand film" fill priority sizes="100vw" className="media-cover" />
        <div className="about-hero-overlay" aria-hidden="true" />
        <Reveal className="shell about-hero-copy">
          <p className="eyebrow">About Which Way</p>
          <h1>Direction for ideas that deserve to be felt.</h1>
        </Reveal>
      </section>

      <section className="section shell about-intro">
        <Reveal>
          <p className="about-lead">
            Which Way Agency helps brands, businesses, organisations and communities turn meaningful ideas into unforgettable experiences.
          </p>
        </Reveal>
        <Reveal className="about-body" delay={0.08}>
          <p>
            We work from concept to execution, connecting strategic thinking, creative direction and practical delivery. The goal is simple: create work that makes sense for the brand and matters to the people experiencing it.
          </p>
          <p>
            Our roots are South African and our outlook is global. We let the work, the people and the places carry that identity naturally.
          </p>
        </Reveal>
      </section>

      <section className="shell values-grid">
        <Reveal className="value-large">
          <h2>Meaning before noise.</h2>
          <p>We look for the idea people can genuinely connect with, then build every creative decision around it.</p>
        </Reveal>
        <Reveal className="value-image" delay={0.08}>
          <Image src="/media/rnb-01.webp" alt="Guests connecting through a live event" fill sizes="(max-width: 767px) 100vw, 46vw" className="media-cover" />
        </Reveal>
        <Reveal className="value-small" delay={0.12}>
          <h2>Care in the details.</h2>
          <p>The smallest guest touchpoint can shape the entire memory of an experience.</p>
        </Reveal>
        <Reveal className="value-small value-accent" delay={0.16}>
          <h2>Impact that lasts.</h2>
          <p>We aim beyond the event day toward trust, participation and relationships that continue.</p>
        </Reveal>
      </section>

      <section className="section shell founder-profile">
        <Reveal className="founder-portrait">
          <Image
            src="/brand/founder-boxer-ngwenya.webp"
            alt="Boxer Ngwenya, founder of Which Way Agency"
            fill
            sizes="(max-width: 767px) 100vw, 42vw"
            className="media-cover"
          />
        </Reveal>
        <Reveal className="founder-note" delay={0.08}>
          <blockquote>
            “Which Way is a home for ideas, talent, brands and experiences that bring people together.”
          </blockquote>
          <p>Boxer Ngwenya<br /><span>Founder, Which Way Agency</span></p>
        </Reveal>
      </section>

      <section className="section shell about-close">
        <Reveal>
          <h2>See the thinking in action.</h2>
          <Link className="button button-primary" href="/work">
            View our work <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
