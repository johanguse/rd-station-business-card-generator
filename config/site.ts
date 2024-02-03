import { SiteConfig } from '@/types/index'

import { absoluteUrl } from '@/lib/utils'

const defaultUrl = absoluteUrl('').toString()

export const siteConfig: SiteConfig = {
  name: 'RD Stations',
  description: 'Gerador de Cartão de Visita',
  url: defaultUrl,
  ogImage: `${defaultUrl}assets/og-image.png`,
  author: 'johanguse',
}
