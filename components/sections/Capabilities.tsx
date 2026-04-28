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
    band: 'WIDEBAND RF',
    title: 'Analog RF burst detection.',
    body: 'An AD8317 logarithmic power detector paired with a Nooelec LANA LNA passively monitors RF energy from 20 MHz to 4 GHz. When a transmission breaks the noise floor, the firmware logs a burst. No protocol decoding, no active emission.',
    specs: [
      { label: 'Coverage', value: '20 – 4000 MHz' },
      { label: 'Detector', value: 'AD8317 LOG' },
      { label: 'LNA gain', value: '~25 dB' },
    ],
  },
  {
    num: '02',
    band: 'WIFI 2.4 GHZ',
    title: '802.11 management-frame capture.',
    body: 'Promiscuous-mode capture of probe requests and beacons. 802.11 information-element fingerprinting tracks devices across MAC randomization, so a single phone reads as one device, not twelve.',
    specs: [
      { label: 'Mode', value: 'PROMISCUOUS' },
      { label: 'Frames', value: 'PROBE / BEACON' },
      { label: 'MAC rotation', value: 'IE-FINGERPRINTED' },
    ],
  },
  {
    num: '03',
    band: 'BLUETOOTH BLE',
    title: 'Passive advertisement scanning.',
    body: 'A BLE GAP scanner reads advertiser address, manufacturer ID, and device name from every BLE broadcast in range. A phone-likeness heuristic separates handsets from generic IoT trackers.',
    specs: [
      { label: 'Mode', value: 'PASSIVE SCAN' },
      { label: 'Stack', value: 'BLE GAP' },
      { label: 'Classifier', value: 'PHONE-LIKENESS' },
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
            <span className="khaki">SENSING CHANNELS</span>
            <span className="num">{'// 03'}</span>
          </div>
          <h2 className="section-h2">
            Three RF channels. One fused picture.
          </h2>
          <p className="section-dek">
            Each TrailSense unit runs three concurrent sensing channels — a wideband analog RF detector, an 802.11 WiFi sniffer, and a passive BLE scanner. A V2 detection engine fuses the evidence and resolves the same device seen across multiple channels into one detection.
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
