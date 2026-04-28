import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'TrailSense builds passive RF perimeter sensors for property that does not fit inside a fence. Instrument-grade hardware, in-house detection software, no cloud lock-in.',
}

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">COMPANY</span>
              <span className="num">{'// EST. 2024'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              We build for property that <span className="text-gold">doesn't fit inside a fence.</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              TrailSense is a small team of engineers who got tired of watching ranchers, conservation managers, and remote-property owners try to monitor thousands of acres with cameras designed for a doorbell. We built passive RF sensors and the software to make sense of them. Every unit ships with hardware we picked, firmware we wrote, and a detection engine we own.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">PREMISE · 01</div>
          <div className="mb-16 max-w-[720px]">
            <div className="coords">
              <span className="khaki">WHY THIS EXISTS</span>
              <span className="num">{'// THE GAP'}</span>
            </div>
            <h2 className="section-h2">Cameras don't scale to land.</h2>
            <p className="section-dek">
              500 acres of cattle land, a 12-mile fire road, an off-grid solar farm. None of those properties have the line-of-sight, the bandwidth, or the staffing to make a camera-based system work. They need sensors that pick up active devices passing through, not pixels of trees moving in wind.
            </p>
          </div>

          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2">
            <ValueCard
              tag="THE PROBLEM"
              title="Properties bigger than a single field of view."
              body="Game cameras catch one trail. Doorbell cams catch one door. A 500-acre property has thousands of feet of perimeter and dozens of access paths. Traditional security gear assumes a built environment that simply isn't there."
            />
            <ValueCard
              tag="THE APPROACH"
              title="Detect the device, not the body."
              body="Almost every person crossing a property carries a phone. We listen for that phone's active radios - WiFi, Bluetooth, and wideband RF - across hundreds of feet, with no cameras and no active transmission of our own."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">VALUES · 02</div>
          <div className="mb-16 max-w-[720px]">
            <h2 className="section-h2">What we won't compromise.</h2>
            <p className="section-dek">
              These aren't marketing values. They are concrete engineering and product decisions that constrain what we will and will not ship.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Value
              num="01"
              title="Passive only"
              body="Our hardware never transmits a probe to elicit a response. We only listen. Detected devices and their owners have no way of knowing they were seen."
            />
            <Value
              num="02"
              title="On-device first"
              body="The mobile app's AI assistant runs as a local LLM on your phone. Your detection data never leaves the device unless you explicitly export it."
            />
            <Value
              num="03"
              title="No subscription lock-in"
              body="The hardware is yours. The software updates are free. The only recurring cost is your unit's LTE data plan, which you can swap for satellite if you prefer."
            />
            <Value
              num="04"
              title="Defensible claims"
              body="We will not invent specs. Every range, sensitivity, and capability claim on this site maps to firmware that ships. If the hardware can't do it, we won't print it."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2">
            <div className="flex flex-col bg-bg-surface p-10 md:p-12">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-gold">
                NEXT STEP · 01
              </div>
              <h3 className="mb-3 font-display text-[28px] font-bold leading-tight tracking-display-snug text-fg-primary">
                Talk to us about your property.
              </h3>
              <p className="mb-8 text-fg-secondary">
                30 minutes, live unit, real coverage map for your property boundary.
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
                NEXT STEP · 02
              </div>
              <h3 className="mb-3 font-display text-[28px] font-bold leading-tight tracking-display-snug text-fg-primary">
                Get on the waitlist.
              </h3>
              <p className="mb-8 text-fg-secondary">
                We deploy by region. Tell us where the property is and we'll reach out as units open up.
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
    </>
  )
}

function ValueCard({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <div className="bg-bg-surface p-10 transition-colors hover:bg-bg-elevated md:p-12">
      <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-gold">
        {tag}
      </div>
      <h3 className="mb-3 font-display text-2xl font-bold leading-tight tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <p className="text-fg-secondary leading-relaxed">{body}</p>
    </div>
  )
}

function Value({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="rounded border border-hairline bg-bg-surface p-6 transition-colors hover:bg-bg-elevated">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-spaced text-gold">{num}</div>
      <h3 className="mb-2 font-display text-lg font-bold tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-fg-secondary">{body}</p>
    </div>
  )
}
