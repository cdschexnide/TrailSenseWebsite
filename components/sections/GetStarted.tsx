'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export function GetStarted() {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="label-row">GET STARTED · 05</div>
        <div className="mb-16 max-w-[720px]">
          <div className="coords">
            <span className="khaki">ENGAGE</span>
            <span className="num">{'// 02 PATHS'}</span>
          </div>
          <h2 className="section-h2">Two ways to get on the radar.</h2>
          <p className="section-dek">
            Talk to us about a deployment that's already mapped, or get on the waitlist and we'll reach out as units come available in your region.
          </p>
        </div>

        <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2">
          {/* Demo card */}
          <div className="flex flex-col bg-bg-surface p-10 transition-colors hover:bg-bg-elevated md:p-12">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-gold">
              PATH · 01 · DEMO
            </div>
            <h3 className="mb-3 font-display text-[28px] font-bold leading-tight tracking-display-snug text-fg-primary">
              Request a live demo.
            </h3>
            <p className="mb-8 text-fg-secondary">
              30 minutes. We walk you through a real deployed unit, show the app and AI assistant, and price out what coverage looks like for your property.
            </p>
            <ul className="mb-10 flex flex-col gap-3 text-sm text-fg-secondary">
              <Bullet>Live unit demo over video</Bullet>
              <Bullet>Coverage map for your property</Bullet>
              <Bullet>Deployment quote with timeline</Bullet>
            </ul>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2.5 self-start rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
            >
              Request demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Waitlist card */}
          <div className="flex flex-col bg-bg-surface p-10 transition-colors hover:bg-bg-elevated md:p-12">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-khaki">
              PATH · 02 · WAITLIST
            </div>
            <h3 className="mb-3 font-display text-[28px] font-bold leading-tight tracking-display-snug text-fg-primary">
              Join the waitlist.
            </h3>
            <p className="mb-8 text-fg-secondary">
              Not ready for a demo? Drop your email and we'll reach out when units are deploying in your area, or when major capability releases ship.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
      <span>{children}</span>
    </li>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      // Replace with your Formspree endpoint or API route
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'ok' : 'error')
      if (res.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="rounded-sm border border-status-active/40 bg-status-active/10 p-5 font-mono text-[12px] uppercase tracking-spaced text-status-active">
        ✓ ON THE LIST · WE'LL REACH OUT
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="waitlist-email" className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@property.com"
          className="flex-1 rounded-sm border border-hairline bg-bg-deepest px-4 py-3 font-sans text-sm text-fg-primary placeholder:text-fg-disabled focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending…' : 'Join waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <div className="font-mono text-[11px] uppercase tracking-spaced text-status-critical">
          ✗ Something went wrong. Try again or email us.
        </div>
      )}
      <Link href="/waitlist" className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted hover:text-fg-primary">
        More about the waitlist →
      </Link>
    </form>
  )
}
