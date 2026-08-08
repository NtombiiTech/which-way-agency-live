import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { TrustedPartners } from "@/components/TrustedPartners";
import { projects, type Project } from "@/lib/projects";

const services = [
  "Creative Solutions",
  "Brand Experiences",
  "Events and Activations",
  "Strategic Storytelling",
  "Community Impact",
];

const fieldProjects = projects.filter((project) => project.gallery.length > 0);

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
        {project.gallery.map((image, imageIndex) => (
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
                sizes="(max-width: 767px) 46vw, (max-width: 1199px) 24vw, 22vw"
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
      <main>
        <section className="shell home-services-first" aria-labelledby="home-services-heading">
          <Reveal className="home-services-statement">
            <p className="eyebrow">What we do</p>
            <h1 id="home-services-heading">We build culture through experiences.</h1>
            <p>
              We bring strategy, creativity and production together to create moments people feel,
              share and remember.
            </p>
            <Link className="text-link" href="/services">
              Explore all services <ArrowRight weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>

          <nav className="home-service-index" aria-label="What we do">
            {services.map((service, index) => (
              <Reveal key={service} delay={index * 0.045}>
                <Link href="/services">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{service}</strong>
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
              <h2 id="field-heading">The work, up close.</h2>
              <p>Real rooms, real people and the details that turn an idea into an experience.</p>
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
      </main>
    </>
  );
}
