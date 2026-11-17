import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Served at /robots.txt — tells search engines they may crawl everything.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
