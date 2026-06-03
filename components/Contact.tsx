"use client";

import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/utils";

const socialLinks = [
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin },
  // { href: siteConfig.facebook, label: "Facebook", icon: Facebook },
  { href: siteConfig.github, label: "GitHub", icon: Github },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="bg-surface/50 py-20 md:py-28" aria-labelledby="contact-title">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Interested in a remote full stack role? Send a message or connect on LinkedIn."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                I&apos;m open to senior full stack engineering roles with remote international teams. Feel free to
                reach out about opportunities, collaborations, or technical discussions.
              </p>

              <ul className="mt-6 space-y-3" role="list">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {label === "Email"
                        ? siteConfig.email
                        : label === "Facebook"
                          ? "Facebook"
                          : href.replace("https://", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
