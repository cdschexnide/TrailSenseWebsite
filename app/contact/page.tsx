import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach the TrailSense team. Most paths route to /demo (deployment quote) or /waitlist (region availability). Press, partnerships, and general inquiries are welcome.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">CONTACT</span>
              <span className="num">{'// 4 PATHS'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Reach the <span className="text-gold">team.</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              Most people who land here want a deployment quote or to get on the waitlist - both of those have purpose-built forms below. For everything else, email works fine.
            </p>
          </div>
        </div>
      </section>

      {/* Primary paths */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">PRIMARY PATHS · 01</div>
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2">
            <div className="flex flex-col bg-bg-surface p-10 md:p-12">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-gold">
                PATH · 01 · DEMO
              </div>
              <h3 className="mb-3 font-display text-[28px] font-bold leading-tight tracking-display-snug text-fg-primary">
                Talk to us about your property.
              </h3>
              <p className="mb-8 text-fg-secondary">
                30-minute live demo, coverage map for your boundary, deployment quote.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2.5 self-start rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
              >
                Request demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="flex flex-col bg-bg-surface p-10 md:p-12">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-khaki">
                PATH · 02 · WAITLIST
              </div>
              <h3 className="mb-3 font-display text-[28px] font-bold leading-tight tracking-display-snug text-fg-primary">
                Get on the waitlist.
              </h3>
              <p className="mb-8 text-fg-secondary">
                We deploy by region. Drop email and rough location, we reach out as units open up.
              </p>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2.5 self-start rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direct contact */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">DIRECT · 02</div>
          <div className="mb-12 max-w-[720px]">
            <h2 className="section-h2">For everything else.</h2>
            <p className="section-dek">
              Press, partnerships, technical support for existing customers, government / enterprise inquiries - email is the fastest path. We answer within one business day.
            </p>
          </div>
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-3">
            <ContactCard
              icon={Mail}
              tag="EMAIL"
              label={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
            />
            <ContactCard
              icon={Phone}
              tag="PHONE"
              label={siteConfig.contact.phone}
              href={`tel:${siteConfig.contact.phone}`}
            />
            <ContactCard icon={MapPin} tag="LOCATION" label={siteConfig.contact.address} />
          </div>
        </div>
      </section>

      {/* Inquiry types */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">COMMON INQUIRIES · 03</div>
          <div className="mb-12 max-w-[720px]">
            <h2 className="section-h2">If your question fits one of these, write &quot;[type]&quot; in the subject.</h2>
            <p className="section-dek">
              It routes faster. Otherwise just send the email - we&apos;ll figure it out.
            </p>
          </div>
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            <Inquiry tag="SUPPORT" body="Existing customer needing help with a deployed unit, the app, or backhaul." />
            <Inquiry tag="PARTNERSHIPS" body="Reseller, integrator, or platform partnership conversation." />
            <Inquiry tag="PRESS" body="Media inquiries, interviews, briefings, embargoed product info." />
            <Inquiry tag="ENTERPRISE" body="Bulk orders, government deployments, custom hardware or backhaul." />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  icon: Icon,
  tag,
  label,
  href,
}: {
  icon: typeof Mail
  tag: string
  label: string
  href?: string
}) {
  const content = (
    <div className="flex flex-col gap-3 bg-bg-surface p-8 transition-colors hover:bg-bg-elevated md:p-10">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-spaced text-gold">
        <Icon className="h-3.5 w-3.5" />
        {tag}
      </div>
      <span className="font-display text-xl font-bold tracking-display-snug text-fg-primary">
        {label}
      </span>
    </div>
  )
  return href ? <a href={href}>{content}</a> : content
}

function Inquiry({ tag, body }: { tag: string; body: string }) {
  return (
    <div className="bg-bg-surface p-6 transition-colors hover:bg-bg-elevated">
      <div className="mb-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
        {tag}
      </div>
      <p className="text-sm leading-relaxed text-fg-secondary">{body}</p>
    </div>
  )
}
