import Image from "next/image";
import Link from "next/link";
import { cn, siteConfig } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showLabel?: boolean;
}

export function Logo({ className, size = 36, showLabel = false }: LogoProps) {
  return (
    <Link
      href="#hero"
      className={cn("inline-flex items-center gap-2.5 transition-opacity hover:opacity-80", className)}
      aria-label={`${siteConfig.name} — Home`}
    >
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        priority
        className="rounded-lg"
      />
      {showLabel ? (
        <span className="text-sm font-semibold tracking-tight text-foreground">
          {siteConfig.name.split(" ")[0]}
          <span className="text-muted">.</span>
        </span>
      ) : null}
    </Link>
  );
}
