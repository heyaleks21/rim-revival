import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rimrevivals.com.au"
  const currentDate = new Date().toISOString()

  // Main sections of the site
  const sections = ["", "#services", "#gallery", "#faq", "#quote", "#process", "#testimonials", "#paint-types"]

  return sections.map((section) => {
    return {
      url: `${baseUrl}${section}`,
      lastModified: currentDate,
      changeFrequency: section === "" ? "weekly" : "monthly",
      priority: section === "" ? 1.0 : section === "#services" || section === "#quote" ? 0.9 : 0.8,
    }
  })
}
