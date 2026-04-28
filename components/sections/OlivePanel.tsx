import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function OlivePanel() {
  return (
    <section className="border-b border-hairline">
      <div className="container-page py-24">
        <div className="grid items-center gap-12 rounded border border-bg-olive-deep bg-bg-olive p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
          <div>
            <span
              className="mb-1 inline-block font-display font-extrabold leading-none text-khaki"
              style={{ fontSize: '96px', transform: 'translateY(8px)' }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <h2 className="mb-4 max-w-[560px] font-display text-3xl font-bold leading-[1.05] tracking-display-tight text-fg-primary lg:text-4xl">
              Built for property that doesn't fit inside a fence.
            </h2>
            <p className="max-w-[560px] text-fg-secondary">
              500-acre cattle ranches. Anti-poaching corridors. Solar farms in the high desert. Wherever a perimeter is too long to staff and too important to leave unwatched, TrailSense puts a passive sensor in the ground and a live picture in your pocket.
            </p>
          </div>
          {/* <Link
            href="/solutions"
            className="inline-flex items-center gap-2.5 self-start rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover lg:self-auto"
          >
            See deployments
            <ArrowRight className="h-3.5 w-3.5" />
          </Link> */}
        </div>
      </div>
    </section>
  )
}
