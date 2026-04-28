'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'

const propertyTypes = [
  'Private ranch',
  'Hunting / game preserve',
  'Conservation reserve',
  'Industrial site (solar / oil / telecom)',
  'Tactical / law enforcement',
  'Other',
]

const propertySizes = [
  'Under 100 acres',
  '100 – 500 acres',
  '500 – 2,000 acres',
  '2,000 – 10,000 acres',
  '10,000+ acres',
]

const timeframes = [
  'This month',
  'Next 1–3 months',
  'Next 3–6 months',
  'Just exploring',
]

export default function DemoPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="container-page py-32">
        <div className="mx-auto max-w-[720px]">
          <div className="coords">
            <span className="khaki">REQUEST RECEIVED</span>
            <span className="num">{'// CONFIRMED'}</span>
          </div>
          <h1 className="mb-6 font-display text-5xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary md:text-6xl">
            Demo request <span className="text-gold">confirmed.</span>
          </h1>
          <p className="mb-10 text-lg text-fg-secondary">
            We'll reach out within one business day to schedule a 30-minute walkthrough. In the meantime, expect a confirmation email at the address you provided.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
          >
            Back to home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container-page py-24 md:py-32">
      <div className="mx-auto grid max-w-container gap-16 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: framing */}
        <div>
          <div className="coords">
            <span className="khaki">REQUEST DEMO</span>
            <span className="num">{'// 30 MIN'}</span>
          </div>
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary md:text-5xl">
            See a real unit in the field.
          </h1>
          <p className="mb-10 text-lg text-fg-secondary">
            30 minutes over video. We walk you through a deployed TrailSense unit, show the mobile app and AI assistant working live, and price out what coverage looks like for your specific property.
          </p>

          <ul className="mb-10 flex flex-col gap-4 text-fg-secondary">
            <Bullet>Live unit in a real deployment, not a slide deck</Bullet>
            <Bullet>Compass, route, and TrailSense AI walkthrough</Bullet>
            <Bullet>Coverage map drafted for your property boundary</Bullet>
            <Bullet>Deployment quote with timeline before we hang up</Bullet>
          </ul>

          <div className="rounded border border-hairline bg-bg-surface p-6">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
              ALSO OFFERED
            </div>
            <p className="mb-4 text-sm text-fg-secondary">
              Not ready for a demo? Get on the waitlist and we'll reach out as units come available in your region.
            </p>
            <a
              href="/waitlist"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-spaced text-fg-primary hover:text-gold"
            >
              Join waitlist <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded border border-hairline bg-bg-surface p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jane Doe" required />
            <Field label="Work email" name="email" type="email" placeholder="you@property.com" required />
          </div>
          <Field label="Organization" name="organization" placeholder="Ranch / company / agency" />
          <SelectField label="Property type" name="propertyType" options={propertyTypes} required />
          <SelectField label="Property size" name="propertySize" options={propertySizes} required />
          <SelectField label="Timeframe" name="timeframe" options={timeframes} required />
          <TextAreaField
            label="What are you trying to detect?"
            name="threatProfile"
            placeholder="Trespassing, poaching, equipment theft, perimeter monitoring…"
            rows={4}
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-gold px-6 py-4 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Request demo'}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          {status === 'error' && (
            <div className="rounded-sm border border-status-critical/40 bg-status-critical/10 p-4 font-mono text-[11px] uppercase tracking-spaced text-status-critical">
              Something went wrong. Try again or email us at info@trailsense.com.
            </div>
          )}

          <p className="font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
            We respond within one business day. Your information is not shared.
          </p>
        </form>
      </div>
    </div>
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

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-sm border border-hairline bg-bg-deepest px-4 py-3 text-sm text-fg-primary placeholder:text-fg-disabled focus:border-gold focus:outline-none"
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-sm border border-hairline bg-bg-deepest px-4 py-3 text-sm text-fg-primary focus:border-gold focus:outline-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

function TextAreaField({
  label,
  name,
  placeholder,
  rows = 3,
}: {
  label: string
  name: string
  placeholder?: string
  rows?: number
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="rounded-sm border border-hairline bg-bg-deepest px-4 py-3 text-sm text-fg-primary placeholder:text-fg-disabled focus:border-gold focus:outline-none"
      />
    </label>
  )
}
