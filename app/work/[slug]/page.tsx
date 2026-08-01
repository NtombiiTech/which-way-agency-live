import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.shortTitle,
    description: project.summary,
    openGraph: { images: [project.cover] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article>
      <section className="case-hero">
        <Image src={project.cover} alt={project.title} fill priority sizes="100vw" className="media-cover" />
        <div className="case-hero-overlay" aria-hidden="true" />
        <div className="shell case-hero-copy">
          <Link className="back-link" href="/work">
            <ArrowLeft weight="bold" aria-hidden="true" /> Back to work
          </Link>
          <h1>{project.title}</h1>
        </div>
      </section>

      <section className="section shell case-intro">
        <Reveal className="case-summary">
          <p>{project.summary}</p>
        </Reveal>
        <Reveal className="case-facts" delay={0.08}>
          <div><span>Client</span><strong>{project.client}</strong></div>
          <div><span>Year</span><strong>{project.year}</strong></div>
          <div><span>Location</span><strong>{project.location}</strong></div>
          <div><span>Type</span><strong>{project.category}</strong></div>
        </Reveal>
      </section>

      <section className="section shell case-story">
        <Reveal>
          <h2>The brief</h2>
          <p>{project.brief}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2>Our response</h2>
          <p>{project.response}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2>The impact</h2>
          <p>{project.impact}</p>
        </Reveal>
      </section>

      <section className="shell case-services">
        <h2>What we delivered</h2>
        <div>
          {project.services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </section>

      {project.film ? (
        <section className="section shell case-film">
          <Reveal className="case-film-heading">
            <p>Watch the film</p>
            <h2>{project.film.title}</h2>
          </Reveal>
          <Reveal className="case-film-player" delay={0.08}>
            <video controls playsInline preload="none" poster={project.film.poster}>
              <source src={project.film.src} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </Reveal>
        </section>
      ) : null}

      {project.gallery.length ? (
        <section className="section shell case-gallery">
          {project.gallery.map((image, index) => (
            <Reveal key={image.src} className={image.portrait ? "gallery-item gallery-portrait" : "gallery-item"} delay={(index % 3) * 0.05}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 60vw" className="media-cover" />
            </Reveal>
          ))}
        </section>
      ) : null}

      <section className="section shell case-next">
        <h2>Have a project in mind?</h2>
        <Link className="button button-primary" href="/proposal">
          Request proposal <ArrowRight weight="bold" aria-hidden="true" />
        </Link>
      </section>
    </article>
  );
}
