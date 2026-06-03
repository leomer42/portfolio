"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn, siteConfig } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI" },
  { href: "#cloud", label: "Cloud" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Logo size={40} />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Resume
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-b border-border bg-background md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-accent-foreground"
              >
                View Resume
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
