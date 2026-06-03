import { siteConfig } from "@/lib/utils";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
