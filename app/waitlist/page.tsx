'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [region, setRegion] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, region }),
      })
      setStatus(res.ok ? 'ok' : 'error')
      if (res.ok) {
        setEmail('')
        setRegion('')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="container-page py-24 md:py-32">
      <div className="mx-auto max-w-[720px]">
        <div className="coords">
          <span className="khaki">JOIN WAITLIST</span>
          <span className="num">{'// QUEUED'}</span>
        </div>

        <h1 className="mb-6 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary md:text-5xl">
          Get on the list. <span className="text-gold">We'll reach out.</span>
        </h1>

        <p className="mb-10 text-lg text-fg-secondary">
          TrailSense rolls out by region. Drop your email and tell us roughly where the property is - we'll reach out as units become available in your area, and again when major capability releases ship.
        </p>

        {status === 'ok' ? (
          <div className="rounded border border-status-active/40 bg-status-active/10 p-8">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-spaced text-status-active">
              <Check className="h-4 w-4" /> ON THE LIST
            </div>
            <h2 className="mb-3 font-display text-2xl font-bold text-fg-primary">
              You're queued.
            </h2>
            <p className="mb-6 text-fg-secondary">
              Watch your inbox. If a unit opens up in your region in the next 30 days, you'll hear from us. Major release announcements come once or twice a year - never marketing spam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
              >
                Skip the wait - request demo <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
              >
                Back to home
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded border border-hairline bg-bg-surface p-8 md:p-10"
          >
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
                Email address <span className="text-gold">*</span>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@property.com"
                className="rounded-sm border border-hairline bg-bg-deepest px-4 py-3 text-sm text-fg-primary placeholder:text-fg-disabled focus:border-gold focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
                Region or rough location
              </span>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="State, county, or general area"
                className="rounded-sm border border-hairline bg-bg-deepest px-4 py-3 text-sm text-fg-primary placeholder:text-fg-disabled focus:border-gold focus:outline-none"
              />
              <span className="font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
                Helps us match you to the next deployment in your area.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-6 py-4 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending…' : 'Join waitlist'}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {status === 'error' && (
              <div className="rounded-sm border border-status-critical/40 bg-status-critical/10 p-4 font-mono text-[11px] uppercase tracking-spaced text-status-critical">
                Something went wrong. Try again or email us at info@trailsense.com.
              </div>
            )}

            <p className="font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
              We'll only email you about availability and major releases. No marketing spam.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
