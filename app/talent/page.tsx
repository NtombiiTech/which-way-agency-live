import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "L’vovo Derrango | Artist Management",
  description:
    "Meet award-winning South African kwaito artist L’vovo Derrango, represented by Which Way Agency for his next chapter.",
  openGraph: {
    images: [{ url: "/talent/lvovo-derrango.webp", width: 1534, height: 1536 }],
  },
};

export default function TalentPage() {
  return (
    <article className="talent-profile">
      <section className="talent-profile-hero">
        <div className="shell talent-profile-hero-grid">
          <Reveal className="talent-profile-portrait">
            <Image
              src="/talent/lvovo-derrango.webp"
              alt="L’vovo Derrango"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 55vw"
              className="media-cover"
            />
            <div className="talent-profile-image-shade" aria-hidden="true" />
          </Reveal>
          <Reveal className="talent-profile-hero-copy" delay={0.08}>
            <p className="eyebrow">Artist management · Which Way</p>
            <h1><span>L’vovo</span><span>Derrango</span></h1>
            <p>Award-winning kwaito artist, performer and entertainer.</p>
          </Reveal>
        </div>
      </section>

      <section className="talent-editorial shell">
        <Reveal className="talent-editorial-intro">
          <p>
            For nearly two decades, L’vovo Derrango has been one of the unmistakable voices of
            South African kwaito.
          </p>
        </Reveal>

        <div className="talent-editorial-sections">
          <Reveal className="talent-editorial-section">
            <header>
              <p className="eyebrow">01</p>
              <h2>The beginning</h2>
            </header>
            <div className="talent-editorial-body">
              <p>
                Born and raised in Newcastle, L’vovo attended Sphumelele Primary School and
                Khanyanjalo High School before moving to Durban to study Language Practice at the
                Durban University of Technology. While studying, he began working as an MC and
                found his place in Durban’s growing entertainment scene.
              </p>
              <p>
                There he connected with acclaimed musician and producer Zakes Bantwini. The
                relationship opened the studio door and became the foundation of L’vovo’s
                professional recording career.
              </p>
            </div>
          </Reveal>

          <Reveal className="talent-editorial-section">
            <header>
              <p className="eyebrow">02</p>
              <h2>The breakthrough</h2>
            </header>
            <div className="talent-editorial-body">
              <p>
                “Bayang’sukela” introduced an unmistakable new voice. In 2007, his debut album,
                <em> Derrango</em>, established him nationally and earned a South African Music
                Awards nomination for Best Kwaito Album.
              </p>
              <p>
                That same year, he won Best Kwaito and Song of the Year at the Metro FM Music
                Awards, confirming his arrival on the national stage.
              </p>
            </div>
          </Reveal>

          <Reveal className="talent-editorial-section">
            <header>
              <p className="eyebrow">03</p>
              <h2>The legacy</h2>
            </header>
            <div className="talent-editorial-body">
              <p>
                Albums including <em>The Fabulous</em>, <em>The Teddy Bear</em> and <em>The Boss</em>
                followed. Songs such as “Resista”, “Siyabonga”, “Is’vunguvungu”, “Ama-Tintin” and
                “Ama Hundred” kept his voice connected to changing generations of listeners.
              </p>
              <p>
                His collaborations with Zakes Bantwini, Professor, DJ Tira, Danger, Mpumi and
                Okmalumkoolkat—and his energetic presence on stage and television—have secured his
                place within South African kwaito culture.
              </p>
            </div>
          </Reveal>

          <Reveal className="talent-editorial-section">
            <header>
              <p className="eyebrow">04</p>
              <h2>A new chapter</h2>
            </header>
            <div className="talent-editorial-body">
              <p>
                In December 2022, L’vovo suffered a stroke while performing in KwaZulu-Natal. A
                long period of rehabilitation followed, bringing a new perspective on health,
                purpose and the life around the music.
              </p>
              <p>
                His return has included “Yebo Phela”, “Nomalanga” featuring Mpumi and a 2025
                reunion with Zakes Bantwini on “Amaxhosa”. This management chapter is focused on
                purposeful releases, performances, collaborations, media and partnerships that
                honour both the artist he has been and the man he has become.
              </p>
              <a
                className="text-link"
                href="https://www.youtube.com/watch?v=Qofe-XjHsUY"
                target="_blank"
                rel="noreferrer"
              >
                Watch his story <ArrowUpRight weight="bold" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="talent-closing shell">
        <Reveal>
          <h2>The legacy is established.<br />The next chapter is being written.</h2>
          <p className="eyebrow">Bookings · Media · Brand partnerships</p>
          <Link className="button button-primary" href="/contact">
            Enquire <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
