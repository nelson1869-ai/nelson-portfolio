import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Build this file once at build time (needed for the static export).
export const dynamic = "force-static";

// Served at /robots.txt — tells search engines they may crawl everything.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
