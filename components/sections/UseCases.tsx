type Sector = {
  num: string
  title: string
  body: string
  gradient: string
}

const sectors: Sector[] = [
  {
    num: '01',
    title: 'Large-acreage ranches',
    body: 'Perimeter coverage on 500+ acre cattle and game ranches.',
    gradient: 'linear-gradient(135deg, #2a3015 0%, #14160E 100%)',
  },
  {
    num: '02',
    title: 'Conservation reserves',
    body: 'Anti-poaching alerts on protected land and wildlife corridors.',
    gradient: 'linear-gradient(135deg, #322a18 0%, #14160E 100%)',
  },
  {
    num: '03',
    title: 'Industrial sites',
    body: 'Perimeter intrusion data for solar farms, oil fields, telecom towers.',
    gradient: 'linear-gradient(135deg, #1f2418 0%, #14160E 100%)',
  },
  {
    num: '04',
    title: 'Tactical / LE',
    body: 'Deployable surveillance for state, federal, and special-use teams.',
    gradient: 'linear-gradient(135deg, #2c2418 0%, #14160E 100%)',
  },
]

export function UseCases() {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="label-row">DEPLOYMENTS · 04</div>
        <div className="mb-16 max-w-[720px]">
          <div className="coords">
            <span className="khaki">FIELD APPLICATIONS</span>
            <span className="num">{'// 04 SECTORS'}</span>
          </div>
          <h2 className="section-h2">Where TrailSense is in the ground.</h2>
          <p className="section-dek">
            From private ranches to managed conservation areas to perimeter lines on staffed sites, every deployment is tuned to the property&apos;s actual threat profile.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <article
              key={s.num}
              className="overflow-hidden rounded border border-hairline bg-bg-surface"
            >
              <div
                className="relative h-40"
                style={{ backgroundImage: s.gradient }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-deepest/85" />
              </div>
              <div className="p-5">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-spaced text-gold">
                  SECTOR · {s.num}
                </div>
                <h4 className="mb-1.5 font-display text-[17px] font-bold leading-tight text-fg-primary">
                  {s.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-fg-secondary">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
