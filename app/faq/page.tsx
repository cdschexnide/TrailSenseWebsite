import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about TrailSense: how the hardware works, what it can and cannot do, deployment, legal posture, and pricing.',
}

const categories = [
  {
    name: 'Technology',
    items: [
      {
        q: 'What does the unit actually detect?',
        a: 'A TrailSense unit runs three concurrent sensing channels: (1) wideband analog RF power across 20-4000 MHz via an AD8317 logarithmic detector + Nooelec LANA LNA, (2) 802.11 WiFi 2.4 GHz management frames in promiscuous mode, and (3) Bluetooth Low Energy advertisements via passive GAP scan. Our proprietary detection engine fuses the three streams and tracks devices across MAC randomization using 802.11 IE fingerprinting.',
      },
      {
        q: 'Can it identify cellular bands or decode LTE / 5G?',
        a: 'No. The AD8317 is a logarithmic RF power detector, not a tuner. It outputs a DC voltage proportional to total RF energy in its input bandwidth. It cannot identify which cellular band an emission is in, distinguish LTE from 5G, or decode any protocol. What it can do is reliably flag that a transmission is happening somewhere in the 20-4000 MHz range.',
      },
      {
        q: 'Does it support 5 GHz WiFi?',
        a: 'No. The WiFi sensing channel is 2.4 GHz only - we do not channel-hop into the UNII band. A device that is 5 GHz only and never uses 2.4 GHz will not be picked up on this channel, though its other emissions may still register on the wideband RF channel.',
      },
      {
        q: 'How does it handle MAC randomization?',
        a: 'Modern phones randomize their WiFi MAC addresses for privacy, but the underlying 802.11 information elements (supported rates, HT/VHT/HE capabilities) do not change with the rotation. The detection engine hashes those IEs into a fingerprint that survives MAC rotation, so a single phone reads as a single device, not as twelve different ones.',
      },
      {
        q: 'What about countermeasures?',
        a: 'A determined intruder who carries no devices, leaves their phone in a Faraday bag, or fully powers everything off can avoid detection. Casual trespassers, hunters, and theft cases - the dominant threats most properties face - rarely employ these countermeasures. For high-security applications, layer TrailSense with cameras at choke points and human patrols.',
      },
    ],
  },
  {
    name: 'Range & coverage',
    items: [
      {
        q: 'How far does it detect?',
        a: 'There is no single honest range number. Effective range depends on source transmit power (a phone uplinking to a distant tower transmits much harder than one near a tower), antenna gain, terrain, foliage, and which sensing channel picks the device up first. The wideband RF channel typically reaches further than WiFi or BLE because it sees the strongest active radio. We map your actual property on the demo call.',
      },
      {
        q: 'Does the LNA help on every band?',
        a: 'The Nooelec LANA covers 20-4000 MHz with about 20 dB gain. Most cellular bands and the 2.4 GHz ISM band fall inside that pass-band. Frequencies above 4 GHz - 5 GHz WiFi, 6 GHz UNII, mmWave 5G - sit outside the LNA pass-band, so you get reduced sensitivity there. The AD8317 itself can still see them at lower amplitude.',
      },
      {
        q: 'How many units do I need for my property?',
        a: 'Depends on terrain, threat profile, and what you actually want to monitor. Choke points - gates, water sources, road intersections, equipment yards - get more value than units strung along a fenceline. Typical deployments range from 4-8 units for a 500-acre ranch to 1-2 units for a single gated drive. We sketch the coverage map with you on the demo call.',
      },
    ],
  },
  {
    name: 'Privacy & legal',
    items: [
      {
        q: 'Is monitoring like this legal?',
        a: 'Passively receiving and analyzing RF that is broadcast into public airspace - WiFi probe requests, BLE advertisements, cellular uplinks - is legal in the United States. The TrailSense unit never transmits a probe of its own, never decrypts content, and never intercepts communications. State laws and specific use cases (commercial, government, public-access land) deserve their own legal review, which we can connect you to. We are not your lawyer.',
      },
      {
        q: 'What does the unit log about detected devices?',
        a: 'The detection engine logs anonymized fingerprint hashes derived from 802.11 IEs and BLE advertisement data, plus signal strength, timestamps, and approximate position from multilateration. We do not store raw MAC addresses long-term, do not identify the human owner of a device, and never decrypt or read the content of any communication.',
      },
      {
        q: 'Where does my detection data live?',
        a: 'Detection events are sent over LTE to a backend you choose - Golioth (CoAP/DTLS) by default, or your own ingest endpoint. The mobile app&apos;s AI assistant runs as a local LLM on your phone; queries against your detection history happen on-device, with no cloud inference and no third-party API.',
      },
    ],
  },
  {
    name: 'Deployment & pricing',
    items: [
      {
        q: 'How long does setup take?',
        a: 'Roughly 15-30 minutes per unit. Mount the unit 6-10 ft up on a post, fence, tree, or pole; connect the solar panel; power on; wait for GPS lock and LTE registration; pair the unit to the mobile app via QR code. The unit self-configures from there.',
      },
      {
        q: 'Do I need WiFi or grid power on the property?',
        a: 'No. Each unit ships with a solar panel and an LTE-M / NB-IoT modem, so it operates fully off-grid. The only ongoing connectivity cost is your LTE data plan, typically a few dollars per unit per month depending on carrier.',
      },
      {
        q: 'How is this priced?',
        a: 'Pricing is per deployment, not per app subscription. You buy hardware once and own it. Software updates are free for the life of the unit. The mobile app and AI assistant are free with hardware purchase. We quote each property after the demo call so the price matches the unit count, antenna config, and connectivity option you need.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">FAQ</span>
              <span className="num">{`// ${categories.reduce((n, c) => n + c.items.length, 0)} QUESTIONS`}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Things people ask, <span className="text-gold">answered straight.</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              No marketing fog. Where the answer is &quot;it depends,&quot; we say that and explain what it depends on. Where the hardware can&apos;t do something, we say that too.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="mx-auto max-w-[820px] space-y-16">
            {categories.map((cat, ci) => (
              <div key={cat.name}>
                <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
                  <span className="block h-px w-8 bg-gold" />
                  CATEGORY · {String(ci + 1).padStart(2, '0')} · {cat.name.toUpperCase()}
                </div>
                <Accordion type="single" collapsible className="flex flex-col gap-3">
                  {cat.items.map((item, ii) => (
                    <AccordionItem
                      key={ii}
                      value={`item-${ci}-${ii}`}
                      className="rounded border border-hairline bg-bg-surface px-6 transition-colors hover:bg-bg-elevated data-[state=open]:bg-bg-elevated"
                    >
                      <AccordionTrigger className="py-5 text-left font-display text-lg font-bold tracking-display-snug text-fg-primary hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-fg-secondary leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid items-center gap-12 rounded border border-bg-olive-deep bg-bg-olive p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-spaced text-khaki">
                STILL CURIOUS
              </div>
              <h2 className="mb-4 max-w-[640px] font-display text-3xl font-bold leading-[1.05] tracking-display-tight text-fg-primary lg:text-4xl">
                Bring the question to a demo.
              </h2>
              <p className="max-w-[640px] text-fg-secondary">
                30 minutes, live unit on the line, real engineering answers. The questions we don&apos;t answer get added here.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2.5 self-start rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover lg:self-auto"
            >
              Request demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
