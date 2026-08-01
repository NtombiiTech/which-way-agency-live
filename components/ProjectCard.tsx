import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";

export function ProjectCard({
  project,
  featured = false,
  priority = false,
  delay = 0,
}: {
  project: Project;
  featured?: boolean;
  priority?: boolean;
  delay?: number;
}) {
  return (
    <Reveal className={featured ? "project-card project-card-featured" : "project-card"} delay={delay}>
      <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <div className="project-image">
          <Image
            src={project.cover}
            alt=""
            fill
            priority={priority}
            sizes={featured ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 100vw, 40vw"}
            className="media-cover"
          />
        </div>
        <div className="project-copy">
          <div>
            <p>{project.client}</p>
            <h3>{project.shortTitle}</h3>
          </div>
          <div className="project-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
            <ArrowUpRight weight="bold" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
