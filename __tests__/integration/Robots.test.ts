import robots from '@/app/robots'

jest.mock('@/config/site', () => ({
  siteConfig: {
    url: 'https://example.com',
  },
}))

describe('robots', () => {
  it('should return correct robots configuration', () => {
    const result = robots()

    expect(result).toHaveProperty('rules')
    expect(result.rules).toEqual({
      userAgent: '*',
      allow: '/',
      disallow: ['/api'],
    })

    expect(result).toHaveProperty('sitemap')
    expect(result.sitemap).toBe('https://example.com/sitemap.xml')

    expect(result).toHaveProperty('host')
    expect(result.host).toBe('https://example.com/')
  })
})
