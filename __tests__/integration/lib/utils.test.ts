import { absoluteUrl } from '@/lib/utils'

describe('absoluteUrl', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  it('should create an absolute URL using VERCEL_URL when defined', () => {
    process.env.VERCEL_URL = 'myapp.vercel.app'
    const path = '/api/data'
    const result = absoluteUrl(path)
    expect(result.href).toBe('https://myapp.vercel.app/api/data')
  })

  it('should create an absolute URL using localhost and default port when VERCEL_URL is not defined', () => {
    delete process.env.VERCEL_URL
    const path = '/api/data'
    const result = absoluteUrl(path)
    expect(result.href).toBe('http://localhost:3000/api/data')
  })

  it('should create an absolute URL using localhost and custom PORT when defined', () => {
    delete process.env.VERCEL_URL
    process.env.PORT = '5000'
    const path = '/api/data'
    const result = absoluteUrl(path)
    expect(result.href).toBe('http://localhost:5000/api/data')
  })
})
