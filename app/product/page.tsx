import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product',
  description:
    'TrailSense Meerkat: a logarithmic RF detector + Ultra Low-Noise Amplifier + proprietary detection engine, weatherproof outdoor housing, solar power, LTE PPP backhaul to Golioth.',
}

const specs = [
  {
    key: 'RF coverage',
    desc: 'LNA pass-band on the analog channel. AD8317 detector itself extends to 10 GHz at reduced gain.',
    value: '20 - 4000 MHz',
  },
  {
    key: 'Detector',
    desc: 'AD8317 logarithmic RF power detector, 60 dB dynamic range, 1 MHz - 10 GHz.',
    value: '-55 -> 0 dBm',
  },
  {
    key: 'LNA',
    desc: 'Wideband ultra-low-noise amplifier, bias-tee compatible.',
    value: '~20 dB gain',
  },
  {
    key: 'WiFi / BLE radio',
    desc: 'WiFi 2.4 GHz promiscuous-mode capture, BLE GAP passive scan.',
    value: '2.4 GHz',
  },
  {
    key: 'WiFi / BLE sensitivity',
    desc: 'RSSI threshold below which a frame is ignored. Tunable at runtime.',
    value: '-85 dBm',
  },
  {
    key: 'Detection engine',
    desc: 'Purpose-built fingerprinting and fusion logic. Kalman-filtered RSSI, 802.11 IE fingerprinting, phantom-MAC suppression, cross-modal WiFi/BLE association.',
    value: 'IN-HOUSE',
  },
  {
    key: 'Localization',
    desc: 'Multi-position multilateration. Resolves device location while the platform moves.',
    value: 'TRIANGULATION',
  },
  {
    key: 'Uplink',
    desc: 'LTE PPP backhaul to Golioth (CoAP / DTLS) or Nightingale Analytics. Pre-activated SIM included.',
    value: 'LTE-M / NB-IoT',
  },
  {
    key: 'Power',
    desc: 'Solar panel + lithium-ion. Low-power sleep modes between scan cycles. Multi-month autonomy in low sun.',
    value: '5V DC / SOLAR',
  },
  {
    key: 'Enclosure',
    desc: 'Outdoor-rated housing, UV-stabilized polycarbonate, tool-free mount on fence, post, or tree.',
    value: 'IP67-CLASS',
  },
]

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <div className="coords">
                <span className="khaki">PRODUCT · TS-001</span>
                <span className="num">{'// REV 04'}</span>
              </div>
              <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl">
                The detection unit, <span className="text-gold">end to end.</span>
              </h1>
              <p className="mb-10 max-w-[560px] text-lg leading-relaxed text-fg-secondary">
                The TrailSense Meerkat is a passive RF perimeter sensor: a logarithmic RF detector running a proprietary detection engine. Solar power, LTE backhaul, weatherproof housing, mounts in 90 seconds.
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
                  href="/technology"
                  className="inline-flex items-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
                >
                  How it works
                </Link>
              </div>
            </div>
            <div className="relative aspect-[1.05] rounded border border-hairline bg-bg-surface p-5">
              <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-spaced">
                <span className="text-fg-muted">UNIT ID · TS-001</span>
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
                <Image
                  src="/images/device.png"
                  alt="TrailSense Meerkat"
                  width={420}
                  height={420}
                  priority
                  className="relative z-[1] max-h-full w-3/4 max-w-[320px] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec sheet */}
      <section id="specs" className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">SPECIFICATIONS · 01</div>
          <div className="mb-16 max-w-[720px]">
            <div className="coords">
              <span className="khaki">SPEC SHEET</span>
              <span className="num">{'// HARDWARE'}</span>
            </div>
            <h2 className="section-h2">Built for the field.</h2>
            <p className="section-dek">
              Detection range varies with source transmit power, antenna, terrain, and band. 
            </p>
          </div>
          <div className="overflow-hidden rounded border border-hairline bg-bg-surface">
            {specs.map((s, i) => (
              <div
                key={s.key}
                className={`grid gap-6 px-6 py-5 transition-colors hover:bg-bg-elevated md:grid-cols-[240px_1fr_200px] md:gap-8 md:px-8 ${
                  i < specs.length - 1 ? 'border-b border-hairline' : ''
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-spaced text-fg-muted">
                  {s.key}
                </span>
                <span className="text-sm leading-relaxed text-fg-primary">{s.desc}</span>
                <span className="font-mono text-[13px] tabular tracking-[0.02em] text-fg-primary md:text-right">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the box */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">PACKAGE · 02</div>
          <div className="mb-16 max-w-[720px]">
            <h2 className="section-h2">What ships in the box.</h2>
            <p className="section-dek">Everything required to mount, power, and bring a unit online.</p>
          </div>
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            <BoxItem
              title="TrailSense Meerkat"
              body="Fully assembled in IP67-class enclosure with antennas integrated. Pre-flashed firmware with the latest detection engine."
            />
            <BoxItem
              title="Solar panel + battery"
              body="12V solar panel and lithium-ion battery pack, sized for off-grid operation through low-sun seasons."
            />
            <BoxItem
              title="LTE SIM card"
              body="Pre-activated cellular data SIM with LTE service."
            />
            {/* <BoxItem
              title="Mount kit"
              body="Tool-free post / tree / pole mount, plus weatherproof connectors and tamper-resistant fasteners."
            /> */}
            {/* <BoxItem
              title="Software updates"
              body="OTA firmware updates over LTE for the life of the unit. New detection engine releases auto-deploy."
            /> */}
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
                Get a deployment quote.
              </h3>
              <p className="mb-8 text-fg-secondary">Live demo, coverage map, deployment plan.</p>
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
                Wait for your region.
              </h3>
              <p className="mb-8 text-fg-secondary">Drop your email, we reach out as units open up.</p>
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

function BoxItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-bg-surface p-6 transition-colors hover:bg-bg-elevated">
      <h3 className="mb-2 font-display text-lg font-bold tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-fg-secondary">{body}</p>
    </div>
  )
}
