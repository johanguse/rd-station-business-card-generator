import { absoluteUrl } from '@/lib/utils'

import { SiteConfig } from '../types'

const defaultUrl = absoluteUrl('')

export const siteConfig: SiteConfig = {
  name: 'RD Stations',
  description: 'Gerador de Cartão de Visita',
  url: defaultUrl,
  ogImage: `${defaultUrl}/assets/og-image.png`,
}
