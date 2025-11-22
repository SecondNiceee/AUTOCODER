import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  
  const routes = [
    '',
    '/chip-tuning',
    '/coding',
    '/conversion',
    '/diagnostics',
    '/ecology',
    '/immobilizer',
    '/repair',
    '/retrofit',
    '/swap',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for both languages
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          pl: `${baseUrl}${route}?lang=pl`,
          ru: `${baseUrl}${route}?lang=ru`,
        },
      },
    })
  })

  return sitemap
}
