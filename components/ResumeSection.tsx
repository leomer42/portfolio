"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { siteConfig } from "@/lib/utils";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 md:py-28" aria-labelledby="resume-title">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto max-w-3xl p-8 text-center md:p-12"
        >
          <FileText className="mx-auto h-10 w-10 text-accent" aria-hidden />
          <SectionTitle
            title="Download my resume"
            subtitle="Full work history, technical skills, and project highlights — ready for recruiters and hiring managers."
            align="center"
            className="mb-6"
          />
          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" aria-hidden />
            View & Download Resume
          </Link>
          <p className="mt-4 text-sm text-muted">
            Prefer email? Reach out at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
