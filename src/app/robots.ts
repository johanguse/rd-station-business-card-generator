import { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = new URL(siteConfig.url)

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: `${siteUrl}`,
  }
}
