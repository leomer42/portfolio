"use client";

import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import { SectionTitle } from "./SectionTitle";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section id="skills" className="bg-surface/50 py-20 md:py-28" aria-labelledby="skills-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Skills"
          title="Technical expertise"
          subtitle="Full stack development across modern frontend, backend, cloud, and AI-powered application engineering."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <SkillCard key={group.category} category={group.category} skills={group.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
