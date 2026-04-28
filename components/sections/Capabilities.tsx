type Capability = {
  num: string
  band: string
  title: string
  body: string
  specs: { label: string; value: string }[]
}

const capabilities: Capability[] = [
  {
    num: '01',
    band: 'CELLULAR',
    title: 'LTE / 5G band detection',
    body: 'Detect any active cellular device within range, including dormant phones broadcasting handshake signals to nearby towers.',
    specs: [
      { label: 'Bands', value: 'B2 / B4 / B12 / N71' },
      { label: 'Range', value: '600–800FT' },
      { label: 'Latency', value: '< 2.0S' },
    ],
  },
  {
    num: '02',
    band: 'WIFI',
    title: '2.4 + 5 GHz monitoring',
    body: 'Captures probe requests and association attempts from any WiFi device, including iPhones in standby and IoT trackers.',
    specs: [
      { label: 'Freq', value: '2.4GHz · 5.8GHz' },
      { label: 'Range', value: '500–700FT' },
      { label: 'MAC randomization', value: 'DEFEATED' },
    ],
  },
  {
    num: '03',
    band: 'BLUETOOTH',
    title: 'BLE + classic detection',
    body: 'Picks up phones, AirTags, tile trackers, smart watches, and any other BLE-broadcasting device on a property.',
    specs: [
      { label: 'Protocol', value: 'BLE · BR/EDR' },
      { label: 'Range', value: '300–500FT' },
      { label: 'UUID filter', value: 'YES' },
    ],
  },
]

export function Capabilities() {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="label-row">CAPABILITIES · 01</div>
        <div className="mb-16 max-w-[720px]">
          <div className="coords">
            <span className="khaki">34.0522°N</span>
            <span className="khaki">118.2437°W</span>
            <span className="num">{'// PT-A'}</span>
          </div>
          <h2 className="section-h2">
            Three detection bands. One field-tested unit.
          </h2>
          <p className="section-dek">
            Each TrailSense unit fuses cellular, WiFi, and Bluetooth detection into a single passive device. No active transmission, no cellular service required, no recurring fees.
          </p>
        </div>

        <div className="grid overflow-hidden rounded border border-hairline md:grid-cols-3">
          {capabilities.map((c, i) => (
            <div
              key={c.num}
              className={`bg-bg-surface p-8 transition-colors hover:bg-bg-elevated ${
                i < capabilities.length - 1 ? 'border-b border-hairline md:border-b-0 md:border-r' : ''
              }`}
            >
              <div className="mb-6 font-mono text-[11px] uppercase tracking-spaced text-gold">
                {c.num} · {c.band}
              </div>
              <h3 className="mb-3 font-display text-[22px] font-bold leading-tight tracking-display-snug text-fg-primary">
                {c.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-fg-secondary">
                {c.body}
              </p>
              <div className="flex flex-col gap-1.5 border-t border-hairline pt-5 font-mono text-[11px] uppercase tracking-spaced">
                {c.specs.map((s) => (
                  <div key={s.label} className="flex justify-between">
                    <span className="text-fg-muted">{s.label}</span>
                    <span className="text-fg-primary tabular">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
