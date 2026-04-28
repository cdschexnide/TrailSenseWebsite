import Link from 'next/link'
import Image from 'next/image'

const footerNav = {
  product: [
    { name: 'Detection unit', href: '/product' },
    { name: 'Mobile app', href: '/app' },
    { name: 'Specifications', href: '/product#specs' },
    { name: 'Pricing', href: '/product#pricing' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Careers', href: '/about#careers' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/privacy#security' },
  ],
}

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-hairline bg-bg-deepest pt-20 pb-10">
      <div className="container-page mb-20 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="mb-6 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="TrailSense"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-display text-lg font-extrabold text-fg-primary">
              TRAILSENSE
            </span>
          </Link>
          <p className="mb-4 max-w-[340px] font-display text-xl font-bold leading-tight text-fg-primary">
            Built for property that doesn&apos;t fit inside a fence.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-spaced text-fg-disabled">
            © 2026 · TRAILSENSE INC · MADE IN THE U.S.
          </p>
        </div>

        <FooterCol heading="Product" items={footerNav.product} />
        <FooterCol heading="Company" items={footerNav.company} />
        <FooterCol heading="Legal" items={footerNav.legal} />
      </div>

      {/* Massive wordmark */}
      <div
        className="select-none overflow-hidden px-6 text-center font-display font-black leading-[0.85] text-transparent md:px-8"
        style={{
          fontSize: 'clamp(80px, 18vw, 280px)',
          letterSpacing: '-0.04em',
          WebkitTextStroke: '1px #4D4E36',
        }}
        aria-hidden="true"
      >
        TRAILSENSE
      </div>

      <div className="container-page mt-8 flex justify-between border-t border-hairline pt-6 font-mono text-[11px] uppercase tracking-spaced text-fg-disabled">
        <span>34.0522°N · 118.2437°W</span>
        <span>v1.0</span>
      </div>
    </footer>
  )
}

function FooterCol({
  heading,
  items,
}: {
  heading: string
  items: { name: string; href: string }[]
}) {
  return (
    <div>
      <h5 className="mb-4 font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
        {heading}
      </h5>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm text-fg-muted transition-colors hover:text-fg-primary"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
