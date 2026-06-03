"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  category: string;
  skills: string[];
  index?: number;
}

export function SkillCard({ category, skills, index = 0 }: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-card group p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2" role="list">
        {skills.map((skill) => (
          <li key={skill}>
            <span
              className={cn(
                "inline-block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground",
                "transition-colors group-hover:border-accent/30"
              )}
            >
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
