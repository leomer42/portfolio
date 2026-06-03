import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/utils";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo size={44} />
            <div>
              <p className="font-semibold">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-muted">Senior Full Stack Engineer · Remote</p>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Send email"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted md:text-left">
          © {year} {siteConfig.name}. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
