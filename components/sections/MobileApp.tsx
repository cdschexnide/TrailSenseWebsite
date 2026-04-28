import Image from 'next/image'

type Feature = {
  num: string
  tag: string
  title: string
  body: string
  src: string
  alt: string
}

const features: Feature[] = [
  {
    num: '01',
    tag: 'COMPASS',
    title: 'Find any unit, as the crow flies.',
    body: 'A live directional bearing to any deployed TrailSense unit. Pulled from GPS, refreshed in real time. For when you need the unit, not the route to it.',
    src: '/images/app-compass.png',
    alt: 'TrailSense app — compass feature pointing to a deployed unit',
  },
  {
    num: '02',
    tag: 'ROUTE',
    title: 'Drivable navigation to your unit.',
    body: 'When the property is bigger than line-of-sight, the app gives you turn-by-turn navigation along ranch roads, fire trails, and access tracks.',
    src: '/images/app-route.png',
    alt: 'TrailSense app — route feature showing navigation to a unit',
  },
  {
    num: '03',
    tag: 'TRAILSENSE AI',
    title: "Ask the property what's happening.",
    body: 'An on-device LLM with full access to your unit data. Ask for a situation report, query alert history, or surface anomalies — all running locally, no cloud.',
    src: '/images/app-ai.png',
    alt: 'TrailSense AI — on-device assistant chat interface',
  },
]

export function MobileApp() {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="label-row">COMPANION APP · 02</div>
        <div className="mb-16 max-w-[720px]">
          <div className="coords">
            <span className="khaki">iOS · ANDROID</span>
            <span className="num">{'// TRAILSENSE.APP'}</span>
          </div>
          <h2 className="section-h2">
            Find your units. Read the field. Ask the AI.
          </h2>
          <p className="section-dek">
            The TrailSense app turns deployed hardware into a live picture of the property. Find any unit by compass or route, see every detected device on a tactical map, and ask an on-device LLM for a real-time situation report.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.num} className="flex flex-col">
              <div className="relative mb-6 grid aspect-[0.7] place-items-center overflow-hidden rounded border border-hairline bg-bg-elevated p-6">
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
                  alt={f.alt}
                  width={300}
                  height={650}
                  className="relative z-[1] max-h-full w-auto max-w-[240px] rounded-[28px] object-contain shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-spaced text-gold">
                FEATURE · {f.num} · {f.tag}
              </div>
              <h3 className="mb-2 font-display text-[22px] font-bold leading-tight tracking-display-snug text-fg-primary">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-fg-secondary">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
