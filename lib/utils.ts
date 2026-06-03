import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Leomer Romero",
  title: "Leomer Romero | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer specializing in scalable web applications, cloud-native systems, and AI-powered digital products. Available for remote full stack roles.",
  url: "https://leomer-romero.vercel.app",
  logo: "/logo.png",
  ogImage: "/images/hero.png",
  email: "leomerromero42@gmail.com",
  github: "https://github.com/leomer42",
  linkedin: "https://www.linkedin.com/in/leomer-romero/",
  facebook: "https://www.facebook.com/share/18grjBJa8v/",
  resumeUrl:
    "https://docs.google.com/document/d/1WMgua79g5c_0wbo328CO7QrPJoDeEr7z/edit?usp=sharing&ouid=117116077057853978261&rtpof=true&sd=true",
  keywords: [
    "Senior Full Stack Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "AWS",
    "AI-powered applications",
    "Remote developer",
  ],
};
