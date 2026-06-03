import { cn } from "@/lib/utils";

interface SectionTitleProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ id, eyebrow, title, subtitle, align = "left", className }: SectionTitleProps) {
  return (
    <div
      id={id}
      className={cn("mb-10 md:mb-14", align === "center" && "text-center", className)}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
