import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative z-[1] border-b border-hairline">
      <div className="container-page grid items-center gap-16 py-24 md:py-32 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        {/* Copy */}
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
            <span className="block h-px w-8 bg-gold" />
            PASSIVE PERIMETER SENSING · Meerkat
          </div>

          <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
            Property security through{' '}
            <span className="text-gold">passive RF</span> sensing.
          </h1>

          <p className="mb-10 max-w-[540px] text-lg leading-relaxed text-fg-secondary">
            TrailSense monitors three RF channels in parallel: wideband RF power across 20 MHz to 4 GHz, 802.11 WiFi 2.4 GHz, and Bluetooth Low Energy. Our proprietary detection & device fingerprinting engine - built specifically for this hardware - correlates the evidence and tracks devices across MAC rotation. No cameras. No active transmissions.
          </p>

          <div className="mb-14 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
            >
              Request Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/technology"
              className="inline-flex items-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
            >
              <Play className="h-3.5 w-3.5" />
              How it works
            </Link>
          </div>

          <div className="grid max-w-[540px] grid-cols-3 gap-8 border-t border-hairline pt-8">
            <Stat label="RF coverage" value="20–4000" unit="MHz" />
            <Stat label="Autonomous" value="24/7" />
            <Stat label="Sensing channels" value="3" unit="× RF" />
          </div>
        </div>

        {/* Device card */}
        <div className="relative aspect-[1.05] rounded border border-hairline bg-bg-surface p-5 lg:max-w-none">
          <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-spaced">
            <span className="text-fg-muted">UNIT ID · Meerkat</span>
            <span className="text-fg-disabled">FIG. 01</span>
          </div>
          <div className="relative grid h-full place-items-center overflow-hidden rounded-sm bg-gradient-to-b from-bg-elevated to-bg-surface">
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(#38392A 1px, transparent 1px), linear-gradient(90deg, #38392A 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <Crosshair className="left-3 top-3" />
            <Crosshair className="right-3 top-3" flipX />
            <Crosshair className="bottom-3 left-3" flipY />
            <Crosshair className="bottom-3 right-3" flipX flipY />
            <Image
              src="/images/meerkat.png"
              alt="TrailSense Meerkat detection unit"
              width={420}
              height={420}
              priority
              className="relative z-[1] max-h-full w-3/4 max-w-[320px] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-spaced text-fg-muted">
            <span>RF · WIFI · BLE</span>
            <span className="inline-flex items-center gap-2 text-status-active">
              <span className="pulse-dot" />
              SCANNING
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  unit,
}: {
  label: string
  value: string
  unit?: string
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
        {label}
      </div>
      <div className="font-display text-3xl font-bold leading-none tracking-display-tight text-fg-primary tabular">
        {value}
        {unit && <span className="ml-0.5 text-lg text-fg-muted">{unit}</span>}
      </div>
    </div>
  )
}

function Crosshair({
  className,
  flipX,
  flipY,
}: {
  className: string
  flipX?: boolean
  flipY?: boolean
}) {
  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim()
  return (
    <svg
      className={`absolute h-3.5 w-3.5 text-gold ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      style={transform ? { transform } : undefined}
    >
      <path d="M0 1h6M1 0v6" />
    </svg>
  )
}
