"use client";

import experience from "@/data/experience.json";
import { SectionTitle } from "./SectionTitle";
import { ExperienceCard, type ExperienceItem } from "./ExperienceCard";

export function Experience() {
  const items = experience as ExperienceItem[];

  return (
    <section id="experience" className="py-20 md:py-28" aria-labelledby="experience-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Experience"
          title="Work history"
          subtitle="Hands-on full stack development across product engineering, APIs, cloud systems, and scalable applications."
        />

        <div className="space-y-6">
          {items.map((item, index) => (
            <ExperienceCard key={item.company} experience={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
