import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "L’vovo Derrango | Bookings",
  description: "Award-winning South African kwaito artist L’vovo Derrango. Enquire with Which Way Agency about performances, appearances and brand partnerships.",
  openGraph: { images: [{ url: "/talent/lvovo-derrango.webp", width: 1534, height: 1536 }] },
};

export default function TalentPage() {
  return (
    <article className="talent-profile">
      <header className="shell interior-heading talent-heading">
        <Reveal>
          <h1><span>L’vovo</span><span>Derrango</span></h1>
          <p>Award-winning kwaito artist, performer and entertainer.</p>
          <Link className="button button-primary talent-booking" href="/contact">Enquire about bookings <ArrowRight aria-hidden="true" /></Link>
        </Reveal>
      </header>
      <section className="shell talent-profile-intro">
        <Reveal className="talent-profile-portrait talent-profile-portrait-inline">
          <Image src="/talent/lvovo-derrango.webp" alt="L’vovo Derrango" fill priority sizes="(max-width: 767px) 100vw, 48vw" className="media-cover" />
        </Reveal>
        <Reveal className="talent-profile-intro-copy" delay={0.08}>
          <p>From Newcastle to national stages, L’vovo Derrango is an unmistakable voice in South African kwaito.</p>
          <p className="artist-availability">Available for performances, appearances and brand partnerships through Which Way Agency.</p>
        </Reveal>
      </section>
      <section className="shell artist-highlights">
        <Reveal>
          <h2>A voice people know.</h2>
          <p>His debut album, <em>Derrango</em>, earned a 2007 South African Music Awards nomination for Best Kwaito Album. That same year, he won Best Kwaito and Song of the Year at the Metro FM Music Awards.</p>
          <p>With songs including “Bayang’sukela”, “Resista” and “Siyabonga”, and collaborations with Zakes Bantwini, Professor, DJ Tira and Mpumi, his work connects generations of South African listeners.</p>
          <a className="text-link" href="https://www.youtube.com/watch?v=Qofe-XjHsUY" target="_blank" rel="noreferrer">Watch his story <ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
      </section>
      <section className="talent-closing shell">
        <Reveal>
          <h2>Bring L’vovo<br />to your stage.</h2>
          <p>Performances, appearances and brand partnerships.</p>
          <Link className="button button-primary" href="/contact">Enquire about bookings <ArrowRight aria-hidden="true" /></Link>
        </Reveal>
      </section>
    </article>
  );
}
