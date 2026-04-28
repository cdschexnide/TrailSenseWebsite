'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  { name: 'Product', href: '/product' },
  { name: 'Technology', href: '/technology' },
  { name: 'App', href: '/app' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Company', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-hairline bg-bg-deepest/95 backdrop-blur supports-[backdrop-filter]:bg-bg-deepest/85">
        <nav
          className="mx-auto flex max-w-container items-center justify-between gap-6 px-6 py-4 md:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="TrailSense"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="font-display text-lg font-extrabold tracking-display-snug text-fg-primary">
              TRAILSENSE
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-[11px] font-medium uppercase tracking-spaced-wide text-fg-muted transition-colors hover:text-fg-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
            >
              Request Demo
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-fg-muted hover:text-fg-primary lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="fixed inset-0 bg-black/70"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-hairline bg-bg-surface shadow-xl">
            <div className="flex items-center justify-between border-b border-hairline p-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <Image src="/images/logo.png" alt="TrailSense" width={32} height={32} className="h-8 w-8" />
                <span className="font-display text-base font-extrabold text-fg-primary">
                  TRAILSENSE
                </span>
              </Link>
              <button
                type="button"
                className="p-2 text-fg-muted hover:text-fg-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-sm px-3 py-3 font-mono text-xs font-semibold uppercase tracking-spaced text-fg-secondary hover:bg-bg-elevated hover:text-fg-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3 border-t border-hairline p-6">
              <Link
                href="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 font-mono text-xs font-semibold uppercase tracking-spaced text-bg-deepest"
              >
                Request Demo <ArrowRight className="h-3 w-3" />
              </Link>
              <Link
                href="/waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-sm border border-border-bright px-4 py-3 font-mono text-xs font-semibold uppercase tracking-spaced text-fg-primary hover:bg-bg-elevated"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
