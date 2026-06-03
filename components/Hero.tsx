"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, FileText, Mail, FolderKanban } from "lucide-react";
import profile from "@/data/profile.json";
import { siteConfig } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" aria-hidden />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />
      </div>

      <div className="section-container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              {profile.availability}
            </motion.p>

            <motion.h1
              id="hero-heading"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {profile.name}
              <span className="mt-2 block text-2xl font-semibold text-muted sm:text-3xl">
                {profile.title}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                <FileText className="h-4 w-4" aria-hidden />
                View Resume
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                <FolderKanban className="h-4 w-4" aria-hidden />
                View Projects
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-2"
            >
              {profile.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {area}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            custom={1}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-blue-600/10 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/10">
              <Image
                src={profile.heroImage}
                alt={profile.heroImageAlt}
                width={480}
                height={560}
                priority
                className="aspect-[6/7] h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 flex justify-center lg:mt-20"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span>Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
