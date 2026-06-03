"use client";

import { motion } from "framer-motion";
import cloudExperience from "@/data/cloud-experience.json";
import { SectionTitle } from "./SectionTitle";
import { Cloud, Server, Database } from "lucide-react";

interface CloudItem {
  title: string;
  description: string;
  items: string[];
}

const icons = [Cloud, Server, Database];

export function CloudExperience() {
  const items = cloudExperience as CloudItem[];

  return (
    <section id="cloud" className="bg-surface/50 py-20 md:py-28" aria-labelledby="cloud-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Cloud & Backend"
          title="Cloud-native & API engineering"
          subtitle="Designing and deploying scalable backend systems, REST APIs, and cloud infrastructure for production workloads."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Cloud;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="glass-card p-6"
              >
                <Icon className="h-5 w-5 text-blue-500" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                <ul className="mt-4 space-y-2" role="list">
                  {item.items.map((point) => (
                    <li key={point.slice(0, 40)} className="flex gap-2 text-sm text-muted">
                      <span className="text-blue-500" aria-hidden>
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
