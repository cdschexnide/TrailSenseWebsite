import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TelemetryStrip } from '@/components/layout/TelemetryStrip'
import { siteConfig } from '@/lib/data/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'property security',
    'mobile device detection',
    'cellular detection',
    'WiFi scanning',
    'Bluetooth detection',
    'remote property monitoring',
    'rural security',
    'intrusion detection',
    'passive perimeter detection',
    'ranch security',
    'conservation perimeter',
    'tactical surveillance',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@trailsense',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=geist:300,400,500,600,700|geist-mono:400,500,600|cabinet-grotesk:500,700,800,900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-display: 'Cabinet Grotesk', 'Geist', system-ui, sans-serif;
            --font-body: 'Geist', system-ui, sans-serif;
            --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-bg-deepest font-sans antialiased text-fg-primary">
        <div className="relative flex min-h-screen flex-col">
          <TelemetryStrip />
          <Header />
          <main className="relative z-[1] flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
