import Link from 'next/link'

type Spec = {
  key: string
  desc: string
  value: React.ReactNode
}

const specs: Spec[] = [
  {
    key: 'RF coverage',
    desc: 'LNA pass-band on the analog channel. AD8317 detector itself extends to 10 GHz at reduced gain.',
    value: (
      <>
        20 – <span className="text-gold">4000 MHz</span>
      </>
    ),
  },
  {
    key: 'Detector',
    desc: 'AD8317 logarithmic RF power detector, 60 dB dynamic range.',
    value: '−55 → 0 dBm',
  },
  {
    key: 'LNA',
    desc: 'Wideband ultra-low-noise amplifier, bias-tee compatible.',
    value: '~20 dB gain',
  },
  {
    key: 'WiFi / BLE sensitivity',
    desc: 'RSSI threshold below which a frame is ignored. Tunable at runtime.',
    value: '−85 dBm',
  },
  {
    key: 'Detection engine',
    desc: 'Purpose-built fingerprinting and fusion logic. Kalman-filtered RSSI, 802.11 IE fingerprinting, phantom-MAC suppression, cross-modal WiFi↔BLE association.',
    value: 'IN-HOUSE',
  },
  {
    key: 'Localization',
    desc: 'Multi-position multilateration. Resolves device location while the platform moves.',
    value: 'TRIANGULATION',
  },
  {
    key: 'Uplink',
    desc: 'LTE PPP backhaul to Golioth (CoAP)',
    value: 'LTE · COAP-DTLS',
  },
  {
    key: 'Power',
    desc: 'Solar panel + lithium-ion. Runs continuously while powered.',
    value: '12V DC',
  },
  {
    key: 'Enclosure',
    desc: 'Outdoor-rated housing for fence, post, or tree mount.',
    value: 'IP67-class',
  },
]

export function Specifications() {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="label-row">SPECIFICATIONS · 03</div>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-12">
          <div className="max-w-[720px]">
            <div className="coords">
              <span className="khaki">SPEC SHEET · Meerkat</span>
              <span className="num">{'// REV 04'}</span>
            </div>
            <h2 className="section-h2">Built for the field.</h2>
            {/* <p className="section-dek">
              Hardware: an AD8317 logarithmic RF detector behind a Nooelec LANA LNA, an ESP32-S3 running our proprietary detection engine, an LTE PPP modem for backhaul. Effective range varies with source transmit power, antenna, terrain, and band.
            </p> */}
          </div>
          {/* <Link
            href="/product"
            className="inline-flex items-center gap-2.5 self-start rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
          >
            Full spec sheet
          </Link> */}
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
              <span className="text-sm leading-relaxed text-fg-primary">
                {s.desc}
              </span>
              <span className="font-mono text-[13px] tabular tracking-[0.02em] text-fg-primary md:text-right">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
