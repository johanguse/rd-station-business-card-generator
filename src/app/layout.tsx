import { Darker_Grotesque, Nunito_Sans } from 'next/font/google'

import { siteConfig } from '@/config/site'

import './globals.css'

const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400', '700'] })

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-darker-grotesque',
  display: 'swap',
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'pt',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.author}`,
  },
  icons: {
    icon: '/assets/favicons/favicon.ico',
    shortcut: '/assets/favicons/favicon-16x16.png',
    apple: '/assets/favicons/favicon-180x180.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${darkerGrotesque.variable}`}>
        {children}
      </body>
    </html>
  )
}
