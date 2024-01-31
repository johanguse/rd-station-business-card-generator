import { absoluteUrl } from '../../lib/utils'

describe('absoluteUrl', () => {
  it('should prepend the environment base URL to the path', () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://myapp.com'

    const path = '/api/data'
    const url = absoluteUrl(path)

    expect(url).toBe('https://myapp.com/api/data')
  })

  it('should handle a missing trailing slash in the environment base URL', () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://myapp.com'

    const path = '/api/data'
    const url = absoluteUrl(path)

    expect(url).toBe('https://myapp.com/api/data')
  })

  it('should handle an absolute path without a leading slash', () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://myapp.com/'

    const path = 'api/data'
    const url = absoluteUrl(path)

    expect(url).toBe('https://myapp.com/api/data')
  })
})
