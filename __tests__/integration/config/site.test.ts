import { siteConfig } from '@/config/site'

import { absoluteUrl } from '@/lib/utils'

jest.mock('@/lib/utils', () => ({
  absoluteUrl: jest.fn(() => new URL('http://localhost')),
}))

describe('siteConfig', () => {
  it('should have a name', () => {
    expect(siteConfig.name).toBe('RD Stations')
  })

  it('should have a description', () => {
    expect(siteConfig.description).toBe('Gerador de Cartão de Visita')
  })

  it('should have an author', () => {
    expect(siteConfig.author).toBe('johanguse')
  })

  it('should call absoluteUrl to determine the base URL', () => {
    expect(absoluteUrl).toHaveBeenCalledWith('')
  })

  it('should set the base URL correctly', () => {
    expect(siteConfig.url).toBe('http://localhost/')
  })

  it('should construct ogImage URL based on the defaultUrl', () => {
    const expectedOgImageUrl = 'http://localhost/assets/og-image.png'
    expect(siteConfig.ogImage).toBe(expectedOgImageUrl)
  })
})
