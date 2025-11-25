'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Download, ArrowLeft, Loader2, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PitchDeckPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Simulate loading delay for better UX
    const timer = setTimeout(() => setIsLoading(false), 800)

    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pitch-deck.pdf'
    link.download = 'TrailSense_Pitch_Deck.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
      {/* Header */}
      <header className="border-b border-earth-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <Button asChild variant="ghost" size="sm">
              <Link href="/links" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Links</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </Button>

            {/* Brand */}
            <Link href="/" className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-earth-900">
                Trail<span className="text-primary-600">Sense</span>
              </span>
            </Link>

            {/* Download Button */}
            <Button onClick={handleDownload} size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {isLoading ? (
          // Loading State
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="h-12 w-12 text-primary-600 animate-spin mx-auto mb-4" />
              <p className="text-lg text-earth-600">Loading pitch deck...</p>
            </div>
          </div>
        ) : isMobile ? (
          // Mobile View - Optimized for mobile devices
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-clay-500 to-clay-600 flex items-center justify-center shadow-lg">
                <FileText className="w-12 h-12 text-white" />
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-earth-900 mb-3">
                TrailSense Pitch Deck
              </h1>

              {/* Description */}
              <p className="text-base text-earth-600 mb-8">
                View our comprehensive company presentation showcasing TrailSense's innovative property security technology.
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleDownload}
                  size="xl"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download PDF (648 KB)
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="w-full"
                >
                  <a
                    href="/pitch-deck.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    Open in New Tab
                  </a>
                </Button>
              </div>

              {/* Mobile Note */}
              <p className="mt-6 text-sm text-earth-500">
                For the best viewing experience on mobile, we recommend downloading the PDF or opening it in a new tab.
              </p>
            </div>
          </div>
        ) : (
          // Desktop View - Full PDF Embed
          <div className="flex-1 relative bg-earth-50">
            <div className="absolute inset-0 p-4 sm:p-6">
              <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
                <iframe
                  src="/pitch-deck.pdf#view=FitH"
                  className="w-full h-full border-0"
                  title="TrailSense Pitch Deck"
                  loading="lazy"
                >
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-earth-400 mx-auto mb-4" />
                      <p className="text-lg text-earth-700 mb-4">
                        Your browser doesn't support PDF viewing.
                      </p>
                      <Button onClick={handleDownload} size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Download PDF Instead
                      </Button>
                    </div>
                  </div>
                </iframe>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer - Only show on mobile view when not loading */}
      {!isLoading && isMobile && (
        <footer className="border-t border-earth-200 bg-white py-4">
          <div className="text-center">
            <p className="text-sm text-earth-500">
              © {new Date().getFullYear()} TrailSense, Inc.
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
