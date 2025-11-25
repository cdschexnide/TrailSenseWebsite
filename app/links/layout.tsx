import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TrailSense Links',
  description: 'All TrailSense links in one place - Website, LinkedIn, Pitch Deck, and Product Demo',
  openGraph: {
    title: 'TrailSense - All Links',
    description: 'Next-Generation Property Security Through Passive Device Detection',
    type: 'profile',
    url: 'https://www.trailsense.net/links',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrailSense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrailSense - All Links',
    description: 'Next-Generation Property Security Through Passive Device Detection',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
