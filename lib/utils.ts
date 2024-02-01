/**
 * Generates an absolute URL based on a given path.
 * @param path - The path to be appended to the base URL.
 * @returns A complete URL string.
 */
export function absoluteUrl(path: string): URL {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT || '3000'}`

  return new URL(path, baseUrl)
}
