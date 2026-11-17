// The public address of the site. Change it with NEXT_PUBLIC_SITE_URL 
// (Cloudflare Pages env var) if the domain changes. No trailing slash.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.nelson1869.com"
).replace(/\/$/, "");
