"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28" aria-labelledby="about-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="About"
          title="Building products that scale"
          subtitle="Hands-on full stack engineer with a track record across frontend, backend, and cloud systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-5"
        >
          <div className="lg:col-span-3 space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Quick facts</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm text-muted">Role</dt>
                  <dd className="font-medium">{profile.title}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Location</dt>
                  <dd className="font-medium">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Availability</dt>
                  <dd className="font-medium text-emerald-600 dark:text-emerald-400">{profile.availability}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Focus</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {profile.focusAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-muted"
                      >
                        {area}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
