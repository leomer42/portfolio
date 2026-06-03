"use client";

import projects from "@/data/projects.json";
import { SectionTitle } from "./SectionTitle";
import { ProjectCard, type ProjectItem } from "./ProjectCard";

export function Projects() {
  const items = projects as ProjectItem[];

  return (
    <section id="projects" className="bg-surface/50 py-20 md:py-28" aria-labelledby="projects-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Projects"
          title="Featured work"
          subtitle="Representative projects spanning AI-powered SaaS, real-time platforms, cloud backends, and automation systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
