import sitemap from '@/app/sitemap'
import { siteConfig } from '@/config/site'

jest.mock('@/config/site', () => ({
  siteConfig: {
    url: 'https://example.com',
  },
}))

describe('sitemap', () => {
  it('should return an array of sitemap objects', () => {
    const result = sitemap()
    expect(Array.isArray(result)).toBeTruthy()
    expect(result).toHaveLength(1)
  })

  it('should correctly structure each sitemap entry', () => {
    const [entry] = sitemap()

    expect(entry).toHaveProperty('url')
    expect(entry).toHaveProperty('lastModified')
    expect(entry).toHaveProperty('changeFrequency')
    expect(entry).toHaveProperty('priority')

    expect(entry.url).toBe(siteConfig.url.toString())
    expect(entry.lastModified).toBeInstanceOf(Date)
    expect(entry.changeFrequency).toMatch(/yearly|monthly|weekly|daily/)
    expect(entry.priority).toBe(1)
  })

  it('should have a lastModified date that is recent', () => {
    const [entry] = sitemap()
    const now = new Date()
    const tenSecondsAgo = new Date(now.getTime() - 10000)

    const lastModifiedDate = entry.lastModified as Date

    expect(lastModifiedDate.getTime()).toBeGreaterThanOrEqual(
      tenSecondsAgo.getTime()
    )
    expect(lastModifiedDate.getTime()).toBeLessThanOrEqual(now.getTime())
  })
})
