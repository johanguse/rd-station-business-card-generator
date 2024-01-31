/**
 * Generates an absolute URL based on a given path.
 * @param path - The path to be appended to the base URL.
 * @returns A complete URL string.
 */
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
