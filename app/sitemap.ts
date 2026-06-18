import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://honhash.com'
  
  // You can add more routes as needed
  const routes = [
    '',
    '/about',
    '/projects',
    '/news',
    '/campaign',
    '/constituency',
    '/gallery',
    '/legislative',
    '/volunteer',
    '/support',
    '/applications',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
