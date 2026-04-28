import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Tractor, Trees, HardHat, KeyRound, Fuel, Tent } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Where TrailSense gets deployed: ranches, conservation reserves, industrial sites, gated drives, trail systems, and tactical perimeters. Each sector tuned to its own threat profile.',
}

const sectors = [
  {
    num: '01',
    icon: Tractor,
    title: 'Large-acreage ranches',
    challenge:
      'Cattle and game ranches spanning 500+ acres are too big for cameras and too remote for hardwired alarms. Game cameras catch one frame; you need to know who is coming and going across the whole property.',
    approach:
      'Place units at choke points - gates, water sources, equipment yards, line shacks - and let them passively monitor for active devices in range. Solar power and LTE backhaul mean no infrastructure is required.',
    typical: '4-8 units for a 500-acre property; more if perimeter coverage matters',
  },
  {
    num: '02',
    icon: Trees,
    title: 'Conservation reserves',
    challenge:
      "Anti-poaching, anti-trespass, and habitat-monitoring on protected land. Cameras spook wildlife and require maintenance the staff doesn't have. Patrols are sparse and predictable.",
    approach:
      'Hidden, passive sensors at known intrusion paths and wildlife corridors. No light, no sound, no transmission. Detected devices get logged with timestamp and approximate position; alerts fire to staff and partner agencies.',
    typical: 'Per-corridor deployment, scaled to known access routes',
  },
  {
    num: '03',
    icon: HardHat,
    title: 'Industrial sites',
    challenge:
      'Solar farms, telecom towers, substations, water-treatment plants. Long perimeters, high-value equipment, theft and sabotage risk after hours. Legacy alarm systems trip on wildlife and weather and burn out the on-call rotation.',
    approach:
      "A perimeter line of TrailSense units, each covering several hundred feet of fenceline at the choke points that matter. The detection engine's phantom-MAC suppression and confidence scoring keep false-positive rates low, so the alerts that fire are the ones worth answering.",
    typical: '1 unit per 300-500 ft of perimeter, depending on threat profile',
  },
  {
    num: '04',
    icon: KeyRound,
    title: 'Gated drives & private roads',
    challenge:
      "Long access roads on remote homes and lodges. Gate cameras work for the gate; they don't cover the alternate paths a determined trespasser will use.",
    approach:
      'A small set of units along the access road and at known bypass points. Detection logs every device that passes through, whether they came through the gate or not.',
    typical: '2-4 units for a typical drive, plus alternate-path coverage',
  },
  {
    num: '05',
    icon: Fuel,
    title: 'Oil & gas sites',
    challenge:
      "Operators run hundreds of unmanned wellpads, tank batteries, compressor stations, and gathering corridors across remote acreage in the Permian, Bakken, Eagle Ford, and Marcellus. Copper theft, frac-sand theft, pump-down hydrocarbon theft, and instrument vandalism all run high. Cameras need grid power and a connectivity drop that most pads don't have; fencing thousands of acres of lease is not economical and does nothing against a truck rolling up to a tank battery at 2 AM.",
    approach:
      "TrailSense units mount at wellpads, tank batteries, compressor stations, and access-road choke points. Each unit passively detects anyone arriving with a phone - your crews, your service contractors, and anyone else. Solar power and onboard LTE mean the unit deploys on a pad with no service drop and runs for years. The detection engine's whitelist suppresses your operations team and approved vendors, so the alert feed shows only unaccounted activity at sites that are supposed to be empty.",
    typical: '1 unit per wellpad or tank battery; 2-3 units along high-value gathering-line corridors',
  },
  {
    num: '06',
    icon: Tent,
    title: 'Tactical & special-use',
    challenge:
      'State, federal, or contracted teams running short-duration deployments where standing infrastructure does not exist and active emissions are not permitted.',
    approach:
      'Battery-powered units staged for the deployment window, retrieved after. The sensor itself never transmits a probe; LTE backhaul can be replaced with on-site collection if RF discipline is required.',
    typical: 'Mission-scoped, including no-emission and field-retrieval modes',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">DEPLOYMENTS</span>
              <span className="num">{'// 06 SECTORS'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Where TrailSense is <span className="text-gold">in the ground.</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              Six deployment patterns we've seen work. Every property is different - the unit count, placement, and alert thresholds get tuned to your specific terrain, threat profile, and staffing model. Start with one of these, then we adapt.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">SECTORS · 01</div>
          <div className="grid gap-8 lg:grid-cols-2">
            {sectors.map((s) => (
              <article
                key={s.num}
                className="rounded border border-hairline bg-bg-surface p-8 transition-colors hover:bg-bg-elevated md:p-10"
              >
                <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
                  <s.icon className="h-3.5 w-3.5" />
                  SECTOR · {s.num}
                </div>
                <h2 className="mb-4 font-display text-2xl font-bold leading-tight tracking-display-snug text-fg-primary">
                  {s.title}
                </h2>
                <div className="mb-5">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-spaced text-khaki">
                    Challenge
                  </div>
                  <p className="text-sm leading-relaxed text-fg-secondary">{s.challenge}</p>
                </div>
                <div className="mb-5">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-spaced text-khaki">
                    Approach
                  </div>
                  <p className="text-sm leading-relaxed text-fg-secondary">{s.approach}</p>
                </div>
                <div className="border-t border-hairline pt-4">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
                    Typical deployment
                  </div>
                  <p className="font-mono text-[12px] uppercase tracking-spaced text-fg-primary">
                    {s.typical}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment notes */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">DEPLOYMENT · 02</div>
          <div className="mb-16 max-w-[720px]">
            <h2 className="section-h2">What every deployment shares.</h2>
            <p className="section-dek">
              Hardware-level rules of thumb that apply across sectors. We work through these on the demo call when we sketch your coverage map.
            </p>
          </div>
          <div className="grid gap-1 overflow-hidden rounded border border-hairline bg-hairline md:grid-cols-2">
            <Note
              title="Choke points beat coverage."
              body="A few units at gates, trail intersections, and water sources outperform many units strung along a fenceline. Spend the budget where bodies actually pass."
            />
            <Note
              title="Mount high."
              body="6-10 ft up, on a fence post, a tree, or a pole. Higher = better line of sight = longer effective range across all three sensing channels."
            />
            <Note
              title="Whitelist your regulars."
              body="Family, staff, neighbors, regular service folks. The detection engine learns to suppress them so the alert feed stays useful."
            />
            <Note
              title="Range is not a number."
              body="Effective range varies with source transmit power, antenna, and terrain. A phone in line-of-sight reads further than a phone behind a hill. We map your actual property; we don't print one number."
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
                Map your property with us.
              </h3>
              <p className="mb-8 text-fg-secondary">
                Bring property boundary, known access paths, threat profile. We sketch a deployment.
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
                Read the technology page.
              </h3>
              <p className="mb-8 text-fg-secondary">
                What each channel sees, what the detection engine does, what the unit cannot do.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2.5 self-start rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-bg-surface p-8 transition-colors hover:bg-bg-elevated md:p-10">
      <h3 className="mb-3 font-display text-xl font-bold leading-tight tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-fg-secondary">{body}</p>
    </div>
  )
}
