export default function sitemap() {
  const SITE_URL = "https://ajsoft-portfolio.vercel.app"; // update to your real domain
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
