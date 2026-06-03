"use client";

import { motion } from "framer-motion";
import aiExperience from "@/data/ai-experience.json";
import { SectionTitle } from "./SectionTitle";
import { Sparkles } from "lucide-react";

interface AIExperienceItem {
  title: string;
  description: string;
  items: string[];
}

export function AIExperience() {
  const items = aiExperience as AIExperienceItem[];

  return (
    <section id="ai" className="py-20 md:py-28" aria-labelledby="ai-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="AI Engineering"
          title="AI-powered application experience"
          subtitle="Practical LLM integration and workflow automation — building AI features into production web applications, not research."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="glass-card p-6"
            >
              <Sparkles className="h-5 w-5 text-violet-500" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              <ul className="mt-4 space-y-2" role="list">
                {item.items.map((point) => (
                  <li key={point.slice(0, 40)} className="flex gap-2 text-sm text-muted">
                    <span className="text-violet-500" aria-hidden>
                      •
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
