import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
/**
 * Combines class names using clsx and tailwind-merge.
 * @param inputs - A variadic set of class values to be combined.
 * @returns A string with combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
