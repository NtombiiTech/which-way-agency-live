import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroVideo } from "@/components/HeroVideo";
import { FestivalHighlights } from "@/components/FestivalHighlights";
import { InteractiveServices } from "@/components/InteractiveServices";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { StoryChapter } from "@/components/StoryChapter";
import { TrustedPartners } from "@/components/TrustedPartners";
import { projects } from "@/lib/projects";

const services = [
  "Creative Solutions",
  "Brand Experiences",
  "Events and Activations",
  "Strategic Storytelling",
  "Community Impact",
];

const imageLedProjects = projects.filter((project) => project.slug !== "sphe-d-and-friends");

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <div className="service-marquee" aria-label="Agency services">
        <div>
          {[...services, ...services].map((service, index) => (
            <span key={`${service}-${index}`}>{service}</span>
          ))}
        </div>
      </div>

      <section className="section shell home-work">
        <Reveal className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Ideas become real in the room.</h2>
          <p>Explore the thinking, production and human moments behind our recent work.</p>
        </Reveal>

        <div className="featured-grid">
          <ProjectCard project={imageLedProjects[0]} featured />
          <div className="featured-side">
            <ProjectCard project={imageLedProjects[1]} delay={0.08} />
            <ProjectCard project={imageLedProjects[2]} delay={0.12} />
          </div>
        </div>

        <Reveal className="section-link-row">
          <Link className="text-link" href="/work">
            View our work <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <FestivalHighlights />

      <StoryChapter />

      <InteractiveServices />

      <TrustedPartners />

      <section className="home-close">
        <Image src="/brand/concrete.webp" alt="" fill sizes="100vw" className="media-cover" />
        <div className="home-close-overlay" aria-hidden="true" />
        <Reveal className="shell home-close-copy">
          <p className="home-close-kicker">Have a project in mind?</p>
          <h2>Your next experience starts with a clear direction.</h2>
          <Link className="button button-primary" href="/proposal">
            Request proposal <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
