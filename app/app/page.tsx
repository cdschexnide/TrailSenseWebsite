import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Compass, Map, Radio, Bell, BarChart3, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Companion App',
  description:
    'The TrailSense iOS and Android app: live radar, compass and route navigation to deployed units, on-device AI assistant, and analytics dashboard. No cloud processing.',
}

const features = [
  {
    num: '01',
    tag: 'MAP',
    title: 'Your property, at a glance.',
    body: 'The main app view. Every deployed TrailSense unit and every detected device on a single live map of your property. Tap any pin for status, signal, and history.',
    src: '/images/app-mainmap.png',
    icon: Map,
  },
  {
    num: '02',
    tag: 'COMPASS',
    title: 'Find any unit, as the crow flies.',
    body: 'A live directional bearing to any deployed TrailSense unit. Pulled from GPS, refreshed in real time. For when you need the unit, not the route to it.',
    src: '/images/app-compass.png',
    icon: Compass,
  },
  {
    num: '03',
    tag: 'ROUTE',
    title: 'Drivable navigation to your unit.',
    body: 'When the property is bigger than line-of-sight, the app gives you turn-by-turn navigation along ranch roads, fire trails, and access tracks.',
    src: '/images/app-route.png',
    icon: Map,
  },
  {
    num: '04',
    tag: 'DETECTIONS',
    title: 'Drill into the active feed.',
    body: 'A tactical view of every device the property is currently seeing. WiFi probes, BLE advertisers, wideband RF bursts - clustered, classified, and time-stamped.',
    src: '/images/app-map.png',
    icon: Radio,
  },
  {
    num: '05',
    tag: 'TRAILSENSE AI',
    title: "Ask the property what's happening.",
    body: 'An on-device LLM with full access to your unit data. Ask for a situation report, query alert history, or surface anomalies. Runs locally on your phone - no cloud, no account, no data leakage.',
    src: '/images/app-ai.png',
    icon: Cpu,
  },
]

export default function AppPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">iOS · ANDROID</span>
              <span className="num">{'// TRAILSENSE.APP'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Your property, <span className="text-gold">in your pocket.</span>
            </h1>
            <p className="mb-10 max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              The TrailSense companion app turns deployed hardware into a live picture of the property. Find any unit by compass or route. See every detected device on a tactical map. Ask an on-device AI for a situation report - all running locally, no cloud.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
              >
                Request demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature deep-dive */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">FEATURES · 01</div>
          <div className="mb-16 max-w-[720px]">
            <div className="coords">
              <span className="khaki">FOUR PRIMARY VIEWS</span>
              <span className="num">{'// REV 04'}</span>
            </div>
            <h2 className="section-h2">Find. Read. Ask.</h2>
            <p className="section-dek">
              The app is built around how property owners actually work in the field: locate the hardware, read what it's seeing, and ask the AI for what matters now.
            </p>
          </div>

          <div className="grid gap-12 md:gap-16">
            {features.map((f, i) => (
              <article
                key={f.num}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative grid aspect-[0.7] place-items-center overflow-hidden rounded border border-hairline bg-bg-elevated p-6">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(#38392A 1px, transparent 1px), linear-gradient(90deg, #38392A 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <Image
                    src={f.src}
                    alt={`TrailSense ${f.tag.toLowerCase()} screenshot`}
                    width={300}
                    height={650}
                    className="relative z-[1] max-h-full w-auto max-w-[280px] rounded-[28px] object-contain shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
                    <f.icon className="h-3.5 w-3.5" />
                    FEATURE · {f.num} · {f.tag}
                  </div>
                  <h3 className="mb-4 font-display text-3xl font-bold leading-tight tracking-display-snug text-fg-primary md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="text-fg-secondary leading-relaxed">{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid items-center gap-12 rounded border border-bg-olive-deep bg-bg-olive p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-spaced text-khaki">
                ON-DEVICE AI
              </div>
              <h2 className="mb-4 max-w-[640px] font-display text-3xl font-bold leading-[1.05] tracking-display-tight text-fg-primary lg:text-4xl">
                Your detection data never leaves your phone.
              </h2>
              <p className="max-w-[640px] text-fg-secondary">
                The AI assistant runs as a local LLM on your phone, with direct access to your unit data and alert history. No cloud inference, no third-party API calls, no analytics SDKs reading your queries. The model is shipped with the app and updated through normal app-store releases.
              </p>
            </div>
            <Link
              href="/technology"
              className="inline-flex items-center gap-2.5 self-start rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover lg:self-auto"
            >
              How it works
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other features */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">SECONDARY VIEWS · 02</div>
          <div className="mb-16 max-w-[720px]">
            <h2 className="section-h2">Plus the everyday tools.</h2>
            <p className="section-dek">
              Real-time alerts, an analytics dashboard for trend analysis, and a unit roster showing battery, signal, and uptime for every TrailSense in the field.
            </p>
          </div>
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-3">
            <SecondaryCard
              icon={Bell}
              tag="ALERTS"
              title="Real-time alerts."
              body="Push notifications fire the moment a unit logs a high-confidence detection. Filter by severity, unit, or time of day."
            />
            <SecondaryCard
              icon={BarChart3}
              tag="ANALYTICS"
              title="Trend dashboard."
              body="Detection counts by unit, by hour, by sector. Compare today against last week. Identify patterns the eye misses."
            />
            <SecondaryCard
              icon={Radio}
              tag="DEVICES"
              title="Unit roster."
              body="Battery, signal, last-seen, and on-air status for every deployed unit. Updates over the LTE backhaul."
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
                See it on a real deployment.
              </h3>
              <p className="mb-8 text-fg-secondary">
                A 30-minute demo, live unit on the line, app and AI working in real time.
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
                Drop your email and we'll reach out as units come available in your region.
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

function SecondaryCard({
  icon: Icon,
  tag,
  title,
  body,
}: {
  icon: typeof Bell
  tag: string
  title: string
  body: string
}) {
  return (
    <div className="bg-bg-surface p-8 transition-colors hover:bg-bg-elevated">
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
        <Icon className="h-3.5 w-3.5" />
        {tag}
      </div>
      <h3 className="mb-3 font-display text-[22px] font-bold leading-tight tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-fg-secondary">{body}</p>
    </div>
  )
}
