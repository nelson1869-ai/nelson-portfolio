// The public address of the site. Change it with NEXT_PUBLIC_SITE_URL 
// (Cloudflare Pages env var) if the domain changes. No trailing slash.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nelson-portfolio-4t6.pages.dev"
).replace(/\/$/, "");
