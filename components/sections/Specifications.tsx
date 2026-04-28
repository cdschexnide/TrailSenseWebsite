import Link from 'next/link'

type Spec = {
  key: string
  desc: string
  value: React.ReactNode
}

const specs: Spec[] = [
  {
    key: 'Detection range',
    desc: 'Effective passive scan radius across all three RF bands.',
    value: (
      <>
        500 – <span className="text-gold">800FT</span>
      </>
    ),
  },
  {
    key: 'Power',
    desc: 'Solar panel + lithium-ion. 30+ days off-grid in low sun.',
    value: '12V · 20W',
  },
  {
    key: 'Enclosure',
    desc: 'Polycarbonate housing, UV-stabilized, IP67 rated.',
    value: 'IP67 · -40°F → 158°F',
  },
  {
    key: 'Uplink',
    desc: 'LTE-M / NB-IoT cellular. Falls back to satellite mesh if configured.',
    value: 'LTE-M · NB-IoT',
  },
  {
    key: 'Dimensions',
    desc: 'Compact mounting form, deployable on fence, post, or tree.',
    value: '8.5 × 5.0 × 2.2 IN',
  },
  {
    key: 'Weight',
    desc: 'Tool-free mount included. Mounts in under 90 seconds.',
    value: '2.4 LB',
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
              <span className="khaki">SPEC SHEET · TS-001</span>
              <span className="num">{'// REV 04'}</span>
            </div>
            <h2 className="section-h2">Built for the field.</h2>
            <p className="section-dek">
              Hardened for remote deployment. Solar-rated power, weatherproof enclosure, configurable from 100 yards out via the TrailSense mobile app.
            </p>
          </div>
          <Link
            href="/product"
            className="inline-flex items-center gap-2.5 self-start rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
          >
            Full spec sheet
          </Link>
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
