"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  url: string;
  description: string;
  highlights: string[];
  tags: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index?: number;
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="glass-card relative p-6 md:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            <Link
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              {experience.company}
              <ExternalLink className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
          </h3>
          <p className="mt-1 font-medium text-accent">{experience.role}</p>
          <p className="mt-2 text-sm text-muted">{experience.description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {experience.period}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {experience.location}
        </span>
      </div>

      <ul className="mt-5 space-y-2.5" role="list">
        {experience.highlights.map((item) => (
          <li key={item.slice(0, 50)} className="flex gap-3 text-sm text-muted leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
