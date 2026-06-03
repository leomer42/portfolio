import { siteConfig } from "@/lib/utils";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
