import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Radio, Wifi, Bluetooth } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'How TrailSense actually works: wideband RF detection running a proprietary detection engine. Three concurrent sensing channels fused with IE fingerprinting and cross-modal correlation.',
}

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">TECHNOLOGY</span>
              <span className="num">{'// HOW IT WORKS'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Three RF channels. <span className="text-gold">One fused picture.</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              TrailSense is not magic. It is a logarithmic RF power detector feeding our proprietary detection engine. This page explains, with no marketing fluff, exactly what each piece does and what it cannot do.
            </p>
          </div>
        </div>
      </section>

      {/* Channel 1: Wideband RF */}
      <ChannelSection
        num="01"
        tag="WIDEBAND RF"
        icon={Radio}
        title="Analog RF burst detection."
        body={[
          "The AD8317 is a logarithmic RF power detector with a 60 dB dynamic range from -55 dBm to 0 dBm. We pair it with a Ultra Low-Noise Amplifier (~20 dB gain, 20-4000 MHz pass-band) so it can pick up faint transmissions from across a property.",
          "It outputs a DC voltage proportional to total RF energy in its input bandwidth. It samples that voltage at 1 kHz, tracks the noise floor, and flags a burst when energy crosses the noise floor by 10 dB or more for at least three consecutive samples.",
          "What this gets you: the unit detects active RF transmissions in the 20-4000 MHz range - which covers most cellular uplink bands and the 2.4 GHz ISM band. What it does not get you: which carrier, which protocol, which device, or any other identifying or personal information of the cell phone.",
        ]}
        specs={[
          { label: 'Pass-band', value: '20 - 4000 MHz' },
          { label: 'Detector input range', value: '-55 to 0 dBm' },
          { label: 'LNA gain', value: '~20 dB' },
          { label: 'Sample rate', value: '1 kHz' },
          { label: 'Burst threshold', value: '+10 dB above noise floor' },
        ]}
      />

      {/* Channel 2: WiFi */}
      <ChannelSection
        num="02"
        tag="WIFI 2.4 GHZ"
        icon={Wifi}
        title="802.11 management-frame capture."
        body={[
          "The WiFi radio runs in promiscuous mode and captures probe requests and beacons broadcast by every WiFi-enabled device in range. Each frame yields a source MAC, an RSSI, and a set of 802.11 information elements (IEs) describing the device&apos;s hardware capabilities.",
          "Modern phones randomize their MAC for privacy. Our detection engine works around this by hashing the IE fields - supported rates, HT/VHT/HE capabilities - which do not change when the MAC rotates. The fingerprint is the same; only the address has changed.",
          "Note: this channel is 2.4 GHz only. The WiFi radio does not channel-hop into the 5 GHz UNII band. If a device is 5 GHz only, we will not see it on this channel.",
        ]}
        specs={[
          { label: 'Mode', value: 'Promiscuous' },
          { label: 'Frames captured', value: 'Probe / Beacon' },
          { label: 'RSSI threshold', value: '-85 dBm' },
          { label: 'MAC rotation', value: 'IE-fingerprinted' },
          { label: 'Band', value: '2.4 GHz only' },
        ]}
      />

      {/* Channel 3: Bluetooth */}
      <ChannelSection
        num="03"
        tag="BLUETOOTH BLE"
        icon={Bluetooth}
        title="Passive advertisement scanning."
        body={[
          "The BLE GAP scanner reads advertisements from every BLE device in range. Each advertisement yields the advertiser address, address type, RSSI, manufacturer data, device name, and timing.",
          "We classify each detection by phone-likeness. Apple- and Google-style manufacturer data, RPA/NRPA address types, and 100-1500 ms advertising intervals are strong phone signals. Beacons, fitness trackers, and IoT noise are downweighted.",
          "BLE is short-range by physics, so this channel mostly catches devices that come close to a unit - someone walking past, an AirTag in a vehicle, a phone in a pocket. The signal strength is what powers our cross-modal correlation: when a BLE detection and a WiFi detection track each other in time and RSSI, the engine merges them into a single device.",
        ]}
        specs={[
          { label: 'Mode', value: 'Passive scan' },
          { label: 'Stack', value: 'BLE GAP' },
          { label: 'RSSI threshold', value: '-85 dBm' },
          { label: 'Classifier', value: 'Phone-likeness' },
        ]}
      />

      {/* Detection Engine */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">DETECTION ENGINE · 04</div>
          <div className="mb-16 max-w-[720px]">
            <div className="coords">
              <span className="khaki">FUSION LOGIC</span>
              <span className="num">{'// IN-HOUSE'}</span>
            </div>
            <h2 className="section-h2">From three streams to one device count.</h2>
            <p className="section-dek">
              Three radios produce three independent streams of noisy evidence. Our detection engine resolves that evidence into a single, conservative count of unique devices on the property. It runs on the Meerkat in fixed-point math - no GPU, no cloud, no floats.
            </p>
          </div>

          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2">
            <EngineCard
              num="01"
              title="IE fingerprinting"
              body="When a device randomizes its MAC, its hardware capabilities don&apos;t change. We hash 802.11 IEs (supported rates, HT, VHT, HE) into a fingerprint that survives MAC rotation. One phone reads as one device, not twelve."
            />
            <EngineCard
              num="02"
              title="Burst-timing signatures"
              body="Two devices with identical IE fingerprints get separated by inter-probe timing. We track the mean and variance of probe intervals using Welford&apos;s online algorithm and split fingerprints whose timing patterns diverge."
            />
            <EngineCard
              num="03"
              title="Phantom-MAC suppression"
              body="When two MACs share the same IE fingerprint, peak RSSI within 10 dB, overlapping detection windows, and burst timing within 20 percent, they are declared phantoms of one device and merged."
            />
            <EngineCard
              num="04"
              title="Cross-modal correlation"
              body="WiFi MAC and BLE address linked into one device when their RSSIs track within 12 dB and detection times overlap within 12 seconds. Confidence threshold: 60 percent. Below that, they stay separate."
            />
            <EngineCard
              num="05"
              title="Persistence pool"
              body="A pool of recent fingerprints persists across detection windows so the same device isn&apos;t re-counted as new every cycle. LRU eviction when the pool fills."
            />
            <EngineCard
              num="06"
              title="Conservative undercounting"
              body="When confidence drops below 50 percent, we reduce the final estimate. Property owners would rather see a confident 5 than a guessing 12. Honest under-counts beat brave over-counts."
            />
          </div>
        </div>
      </section>

      {/* Privacy & legal */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid items-center gap-12 rounded border border-bg-olive-deep bg-bg-olive p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-spaced text-khaki">
                PRIVACY POSTURE
              </div>
              <h2 className="mb-4 max-w-[640px] font-display text-3xl font-bold leading-[1.05] tracking-display-tight text-fg-primary lg:text-4xl">
                Passive only. No content. No identity.
              </h2>
              <p className="max-w-[640px] text-fg-secondary">
                The detection unit never transmits a probe of its own. It cannot intercept calls, messages, or data; the Meerkat has no demodulator and the WiFi/BLE radios run in passive mode. We log fingerprints and signal strengths, not identities. Monitoring publicly broadcast RF on your own property is legal in the U.S., but specific use cases - especially commercial or government - should be reviewed against local statute. We are not your lawyer.
              </p>
            </div>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2.5 self-start rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover lg:self-auto"
            >
              Read privacy policy
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}

function ChannelSection({
  num,
  tag,
  icon: Icon,
  title,
  body,
  specs,
}: {
  num: string
  tag: string
  icon: typeof Radio
  title: string
  body: string[]
  specs: { label: string; value: string }[]
}) {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="label-row">SENSING CHANNEL · {num}</div>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
              <Icon className="h-4 w-4" />
              {num} · {tag}
            </div>
            <h2 className="mb-6 font-display text-3xl font-bold leading-[1.05] tracking-display-tight text-fg-primary md:text-4xl">
              {title}
            </h2>
            <div className="flex flex-col gap-4 text-fg-secondary leading-relaxed">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded border border-hairline bg-bg-surface p-6">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
              SPEC SUMMARY
            </div>
            <div className="flex flex-col gap-2.5 font-mono text-[12px] uppercase tracking-spaced">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 border-b border-hairline pb-2.5 last:border-0 last:pb-0">
                  <span className="text-fg-muted">{s.label}</span>
                  <span className="text-fg-primary tabular text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EngineCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="bg-bg-surface p-8 transition-colors hover:bg-bg-elevated">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-spaced text-gold">
        STAGE · {num}
      </div>
      <h3 className="mb-3 font-display text-xl font-bold leading-tight tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-fg-secondary">{body}</p>
    </div>
  )
}

function CTASection() {
  return (
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
            <p className="mb-8 text-fg-secondary">30-minute live demo, real unit on the line.</p>
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
              Read the spec sheet.
            </h3>
            <p className="mb-8 text-fg-secondary">Hardware, sensitivity, backhaul, deployment options.</p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2.5 self-start rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
            >
              See the product
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
