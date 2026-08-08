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

const milestones = [
  { year: "2007", text: "Debut album Derrango and Metro FM wins for Best Kwaito and Song of the Year." },
  { year: "2022", text: "Survived a stroke while performing and began a long rehabilitation journey." },
  { year: "2025", text: "Reunited with Zakes Bantwini on Amaxhosa, featuring Nana Atta and Okmalumkoolkat." },
  { year: "Now", text: "A new management chapter focused on purposeful releases, performances and partnerships." },
];

const catalogue = [
  "Bayang’sukela",
  "Resista",
  "Siyabonga",
  "Is’vunguvungu",
  "Ama-Tintin",
  "Ama Hundred",
];

export default function TalentPage() {
  return (
    <article>
      <section className="talent-hero">
        <Image
          src="/talent/lvovo-derrango.webp"
          alt="L’vovo Derrango"
          fill
          priority
          sizes="100vw"
          className="media-cover"
        />
        <div className="talent-hero-scrim" aria-hidden="true" />
        <div className="shell talent-hero-copy">
          <p className="eyebrow">Artist management · New signing</p>
          <h1>L’vovo Derrango</h1>
          <p>Award-winning kwaito artist, performer and entertainer.</p>
        </div>
      </section>

      <section className="section shell talent-intro">
        <Reveal>
          <p className="talent-lead">
            Thokozani Ndlovu, professionally known as L’vovo Derrango, is one of the distinctive
            voices that helped shape KwaZulu-Natal’s contemporary music culture.
          </p>
        </Reveal>
        <Reveal className="talent-intro-side" delay={0.08}>
          <p>
            From Newcastle to national stages, his career carries almost two decades of music,
            cultural recognition and a genuine connection with South African audiences.
          </p>
          <a
            className="text-link"
            href="https://www.youtube.com/watch?v=Qofe-XjHsUY"
            target="_blank"
            rel="noreferrer"
          >
            Watch the conversation <ArrowUpRight weight="bold" aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <section className="talent-story">
        <div className="shell talent-story-grid">
          <Reveal className="talent-story-title">
            <p className="eyebrow">The story so far</p>
            <h2>A voice built in KwaZulu-Natal.</h2>
          </Reveal>
          <div className="talent-biography">
            <Reveal>
              <p>
                Born and raised in Newcastle, L’vovo attended Sphumelele Primary School and
                Khanyanjalo High School before moving to Durban to study Language Practice at the
                Durban University of Technology. While studying, he began working as an MC and
                found his place in Durban’s growing entertainment scene.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                A connection with producer and artist Zakes Bantwini opened the studio door. His
                breakthrough, “Bayang’sukela”, introduced an unmistakable voice, and his 2007
                debut album, <em>Derrango</em>, established him nationally. That year he won Best
                Kwaito and Song of the Year at the Metro FM Music Awards.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Albums including <em>The Fabulous</em>, <em>The Teddy Bear</em> and <em>The Boss</em>,
                together with enduring singles and collaborations, kept L’vovo connected to
                changing generations of listeners. His collaborators include Zakes Bantwini,
                Professor, DJ Tira, Danger, Mpumi and Okmalumkoolkat.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section shell talent-milestones" aria-label="Career milestones">
        {milestones.map((milestone, index) => (
          <Reveal key={milestone.year} delay={index * 0.04}>
            <span>{milestone.year}</span>
            <p>{milestone.text}</p>
          </Reveal>
        ))}
      </section>

      <section className="talent-recovery">
        <div className="shell talent-recovery-grid">
          <Reveal className="talent-recovery-copy">
            <p className="eyebrow">The next chapter</p>
            <h2>Recovery is part of the story. It is not the whole story.</h2>
            <p>
              In December 2022, L’vovo suffered a stroke while performing in KwaZulu-Natal. What
              followed was a long journey through rehabilitation, rebuilding and a different
              understanding of health, purpose and the people around him.
            </p>
            <p>
              Today, the focus is forward: carefully selected music, performances, collaborations,
              media opportunities and partnerships that honour both the artist he has been and the
              man he has become.
            </p>
          </Reveal>
          <Reveal className="talent-catalogue" delay={0.08}>
            <p className="talent-catalogue-label">Selected catalogue</p>
            <ul>
              {catalogue.map((song) => <li key={song}>{song}</li>)}
            </ul>
            <a
              className="text-link"
              href="https://music.apple.com/us/artist/lvovo-derrango/300770076"
              target="_blank"
              rel="noreferrer"
            >
              Listen to the music <ArrowUpRight weight="bold" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section shell talent-booking">
        <Reveal>
          <p className="eyebrow">Bookings and partnerships</p>
          <h2>Bring L’vovo into the right room.</h2>
          <p>
            For performance bookings, collaborations, media, brand partnerships and selected
            opportunities, speak directly with the management team.
          </p>
          <Link className="button button-primary" href="/contact">
            Contact management <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
