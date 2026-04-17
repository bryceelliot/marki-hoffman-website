import type { MetadataRoute } from 'next'
import { listings } from '@/data/listings'
import { posts } from '@/data/blog'

const base = 'https://www.markihoffman.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/listings`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/home-valuation`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/client-resources`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/client-resources/buyers-guide`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/client-resources/sellers-guide`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/client-resources/mortgage`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/client-resources/neighbourhood-guide`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/client-resources/amenities`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${base}/client-resources/forms`, priority: 0.5, changeFrequency: 'monthly' },
  ]

  const listingPages: MetadataRoute.Sitemap = listings.map(l => ({
    url: `${base}/listings/${l.id}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: new Date(p.date),
  }))

  return [...staticPages, ...listingPages, ...blogPages]
}
