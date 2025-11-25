import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const routes = [
    "",
    "/chip-tuning",
    "/coding",
    "/conversion",
    "/diagnostics",
    "/ecology",
    "/immobilizer",
    "/repair",
    "/retrofit",
    "/swap",
  ]

  const sitemap: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          pl: `${baseUrl}${route}`,
          ru: `${baseUrl}/ru${route}`,
        },
      },
    })
  })

  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/ru${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          pl: `${baseUrl}${route}`,
          ru: `${baseUrl}/ru${route}`,
        },
      },
    })
  })

  return sitemap
}
