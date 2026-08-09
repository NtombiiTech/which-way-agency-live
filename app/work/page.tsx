import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/projects";

const workPageOrder = [
  "rnb-soulful-groove-2026",
  "jz-foundation-christmas-programme-2025",
  "rnb-soulful-groove-december-2025",
  "rnb-soulful-groove-june-2025",
  "mercedes-benz-mental-health-workshop",
  "community-giving-initiative-2025",
  "rnb-soulful-groove-december-2024",
  "newcastle-amcor-dam-festival-2024",
  "newcastle-amcor-dam-festival-2023",
];

const imageLedProjects = workPageOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore brand experiences, corporate events and cultural gatherings created by Which Way Agency.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero shell work-hero">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h1>Work built to move people.</h1>
          <p>Full stories from the ideas, teams and live moments that brought each experience to life.</p>
        </Reveal>
      </section>

      <section className="section shell work-list">
        {imageLedProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={index === 0}
            priority={index === 0}
            delay={index * 0.06}
          />
        ))}
      </section>
    </>
  );
}
