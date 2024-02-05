import { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.description,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#4839A3',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'assets/favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'assets/favicons/rd-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-300x300.png',
        sizes: '300x300',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-400x400.png',
        sizes: '400x400',
        type: 'image/png',
      },
      {
        src: 'assets/favicons/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
