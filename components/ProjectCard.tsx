"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProjectItem {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: string;
  gradient: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="glass-card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg hover:shadow-accent/5"
    >
      <div className={cn("h-32 bg-gradient-to-br", project.gradient)} aria-hidden />

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-accent">{project.category}</span>
        <h3 className="mt-2 text-lg font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>

        <ul className="mt-4 flex-1 space-y-2" role="list">
          {project.highlights.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-2 text-xs text-muted">
              <span className="text-accent" aria-hidden>
                →
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
