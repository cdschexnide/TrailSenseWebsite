import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pitch Deck | TrailSense',
  description: 'View the TrailSense company pitch deck - Next-Generation Property Security Through Passive Device Detection',
  openGraph: {
    title: 'TrailSense Pitch Deck',
    description: 'Discover how TrailSense is revolutionizing property security with passive mobile device detection technology.',
    type: 'website',
    url: 'https://www.trailsense.net/pitch-deck',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrailSense Pitch Deck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrailSense Pitch Deck',
    description: 'Discover how TrailSense is revolutionizing property security with passive mobile device detection technology.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PitchDeckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
