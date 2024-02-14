import { Metadata, Viewport } from 'next'
import { Darker_Grotesque, Nunito_Sans } from 'next/font/google'

import { siteConfig } from '@/config/site'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import './globals.css'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-darker-grotesque',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo ${siteConfig.name}`,
      },
    ],
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`flex flex-col ${nunito.variable} ${darkerGrotesque.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
