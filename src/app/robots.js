export default function robots() {
  const SITE_URL = "https://ajsoft-portfolio.vercel.app"; // update to your real domain
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
