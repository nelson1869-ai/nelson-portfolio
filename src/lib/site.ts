// The public address of the site. Change it with NEXT_PUBLIC_SITE_URL on Vercel
// if the domain is different. No trailing slash.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nelson-portfolio.vercel.app"
).replace(/\/$/, "");
