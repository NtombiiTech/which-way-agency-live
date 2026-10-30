import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { FestivalHighlights } from "@/components/FestivalHighlights";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { TrustedPartners } from "@/components/TrustedPartners";
import { services } from "@/lib/services";
import { projects, type Project } from "@/lib/projects";

const fieldProjects = projects.filter((project) => project.featuredOnHome);

function ProjectGallery({ project, index }: { project: Project; index: number }) {
  return (
    <article className="field-project">
      <Reveal className="field-project-heading">
        <div>
          <p className="field-project-label">
            {project.category} · {project.year}
          </p>
          <h3>{project.title}</h3>
        </div>
        <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
          View case study <ArrowUpRight weight="bold" aria-hidden="true" />
        </Link>
      </Reveal>

      <div className="field-gallery">
        {project.gallery.slice(0, 4).map((image, imageIndex) => (
          <Reveal
            key={image.src}
            className="field-gallery-item"
            delay={Math.min(0.04 * (imageIndex + index), 0.2)}
          >
            <Link href={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true">
              <Image
                src={image.src}
                alt=""
                fill
                sizes={imageIndex === 0 ? "(max-width: 767px) 100vw, 42vw" : "(max-width: 767px) 46vw, 26vw"}
                className="media-cover"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <section className="shell home-services-first" aria-labelledby="home-services-heading">
          <Reveal className="home-services-statement">
            <p className="eyebrow">What we do</p>
            <h2 id="home-services-heading">Ideas. People.
Culture.</h2>
            <p>
              We are a South African creative agency connecting brands, talent and culture. From campaign thinking to the live experience, we give good ideas a direction.
            </p>
            <Link className="text-link" href="/services">
              Explore all services <ArrowRight weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>

          <nav className="home-service-index" aria-label="What we do">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.045}>
                <Link href={`/services#${service.slug}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{service.title}</strong>
                  <ArrowUpRight weight="bold" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </nav>
      </section>

      <section className="home-field" aria-labelledby="field-heading">
          <div className="shell">
            <Reveal className="field-intro">
              <p className="eyebrow">The field</p>
              <h2 id="field-heading">Out in the world.</h2>
              <p>The ideas we shaped. The spaces we built. The people who brought them to life.</p>
            </Reveal>

            <div className="field-projects">
              {fieldProjects.map((project, index) => (
                <ProjectGallery key={project.slug} project={project} index={index} />
              ))}
            </div>

            <Reveal className="field-all-work">
              <Link className="button button-ghost-dark" href="/work">
                See all our work <ArrowRight weight="bold" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
      </section>

      <section className="home-talent" aria-labelledby="home-talent-heading">
        <div className="shell home-talent-grid">
          <Reveal className="home-talent-portrait">
            <Image
              src="/talent/lvovo-derrango.webp"
              alt="L’vovo Derrango"
              fill
              sizes="(max-width: 767px) 100vw, 55vw"
              className="media-cover home-talent-image"
            />
            <div className="home-talent-image-shade" aria-hidden="true" />
          </Reveal>
          <Reveal className="home-talent-copy" delay={0.08}>
            <p className="eyebrow">Talent, with a point of view</p>
            <h2 id="home-talent-heading"><span>L’vovo</span><span>Derrango</span></h2>
            <p className="home-talent-role">A defining voice in South African kwaito.</p>
            <p className="home-talent-statement">
              The legacy is established.<br />
              The next chapter is being written.
            </p>
            <Link className="button button-primary" href="/talent">
              Meet L’vovo <ArrowRight weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FestivalHighlights />

      <section className="home-founder" aria-labelledby="home-founder-heading">
        <div className="shell home-founder-grid">
          <Reveal className="home-founder-portrait">
            <Image
              src="/brand/founder-boxer-ngwenya-2026.webp"
              alt="Boxer Ngwenya, founder of Which Way Agency"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
              className="media-cover"
            />
          </Reveal>
          <Reveal className="home-founder-copy" delay={0.08}>
            <p className="eyebrow">The why</p>
            <h2 id="home-founder-heading">Boxer Ngwenya</h2>
            <p className="home-founder-role">Founder &amp; Creative Director</p>
            <blockquote>
              “Which Way is a home for ideas, talent, brands and experiences that bring people
              together.”
            </blockquote>
            <Link className="text-link home-founder-link" href="/about">
              Meet Boxer <ArrowRight weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <TrustedPartners />


    </>
  );
}
