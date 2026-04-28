import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Founders',
  description:
    'TrailSense is built by Dakota McNeely (CEO, autonomous systems / EW / field intelligence) and Cody Schexnider (CTO, edge ML / computer vision / open-source distributed systems). Two engineers who have been in the field.',
}

type Founder = {
  num: string
  caption: string
  name: string
  role: string
  src: string
  alt: string
  bio: string[]
  background: string[]
  linkedin: string
}

const founders: Founder[] = [
  {
    num: '01',
    caption: '01 · CO-FOUNDER & CEO',
    name: 'Dakota McNeely',
    role: 'Co-founder · CEO',
    src: '/images/dakota.png',
    alt: 'Dakota McNeely, co-founder and CEO of TrailSense',
    bio: [
      'Dakota is an autonomous-systems and electronic-warfare engineer. Before TrailSense, he worked on GPS resiliency and anti-jamming at Infinidome, scaled a San Francisco autonomous-ground-robot startup that paints survey points on solar-farm construction sites to centimeter accuracy, and ran field intelligence across the U.S. and the Middle East.',
      "He started TrailSense after watching agency after agency hit the same wall: detection gear that works on a slide deck but fails when it's sitting in a creosote bush in Texas in August. Every gap TrailSense closes is one he has seen first-hand.",
      'At TrailSense he runs the company - product direction, customer conversations, hardware architecture, and the deployments themselves. The sensor he sketched in a notebook is now in the ground.',
    ],
    background: [
      'Field Applications Engineer, Infinidome - GPS resiliency / anti-jamming for autonomous systems and national security',
      'Robotics applications engineer at a San Francisco autonomous-ground-robot startup - RTK-GPS pile-marking on solar-farm construction projects, accurate to one centimeter',
      'FPV drone builder and pilot - flight controllers, ESCs, motors, RC links, race-grade builds',
      'Field intelligence work, U.S. and Middle East',
      'Founded TrailSense in 2024',
    ],
    linkedin: 'https://www.linkedin.com/in/mcneelydakota/',
  },
  {
    num: '02',
    caption: '02 · CO-FOUNDER & CTO',
    name: 'Cody Schexnider',
    role: 'Co-founder · CTO',
    src: '/images/cody.png',
    alt: 'Cody Schexnider, co-founder and CTO of TrailSense',
bio: [
  'Cody works at the intersection of mobile software and machine learning, with a particular focus on getting models to run well on resource-constrained devices. As a Software Engineer III at Technergetics, he spends his days building React Native apps that perform real-time computer vision in the field, designing the GraphQL services behind them, and wrestling PyTorch models into formats that can actually run on a phone (ExecuTorch, TFLite, ONNX).',
  "A few years back he wrote Deno-Redlock, a distributed lock manager built around the Redlock algorithm and Redis-backed Lua primitives. It remains the only library of its kind in the Deno ecosystem and has picked up a small but loyal following on GitHub. Earlier in his career, he taught at Codesmith Engineering, where he ran lectures on everything from JavaScript internals to CI/CD and mentored junior engineers through full product launches.",
  'At TrailSense, Cody owns the software end-to-end: the firmware driving the detection engine on the microcontroller, the ingest pipeline, the mobile apps, and the on-device LLM that powers TrailSense AI. He holds a Secret clearance and is wrapping up an Electrical Engineering degree at Lamar — a deliberate move toward the RF and embedded work that increasingly defines what TrailSense is building.',
],
    background: [
      'Software Engineer III, Technergetics - TypeScript / React, GraphQL microservices, React Native with on-device ML, end-to-end computer-vision pipelines (PyTorch -> ExecuTorch / TFLite)',
      'Author and maintainer of Deno-Redlock (170+ GitHub stars) - the first distributed lock manager for the Deno runtime',
      'Former Software Engineer at Codesmith Engineering - public learning platform, internal tooling, mentorship, technical lectures',
      'Secret security clearance',
      'Electrical Engineering at Lamar University, in progress',
    ],
    linkedin: 'https://www.linkedin.com/in/schexnider/',
  },
]

export default function FoundersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">FOUNDERS</span>
              <span className="num">{'// 02 · BUILT BY'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Built by people who&apos;ve <span className="text-gold">been in the field.</span>
            </h1>
            <p className="mb-10 max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              Dakota McNeely runs the company. Cody Schexnider runs the software. Together they put a unit in the ground that does what every agency they&apos;ve worked with kept needing and never quite getting.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-bg-deepest transition-colors hover:bg-gold-hover"
              >
                Request demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="#cards"
                className="inline-flex items-center gap-2.5 rounded-sm border border-border-bright bg-transparent px-6 py-3.5 font-mono text-[13px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
              >
                Meet the team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder cards */}
      <section id="cards" className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="label-row">FOUNDERS · 01</div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {founders.map((f) => (
              <FounderCard key={f.num} f={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Talk-to-a-founder olive panel */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="grid items-center gap-12 rounded border border-bg-olive-deep bg-bg-olive p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-spaced text-khaki">
                DIRECT LINE
              </div>
              <h2 className="mb-4 max-w-[640px] font-display text-3xl font-bold leading-[1.05] tracking-display-tight text-fg-primary lg:text-4xl">
                We&apos;re the ones you&apos;ll be talking to.
              </h2>
              <p className="max-w-[640px] text-fg-secondary">
                No SDR queue. No AE hand-off. When you book a demo, a founder runs it - the same person who wrote the firmware or the same person who designed the hardware. That&apos;s the company.
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

function FounderCard({ f }: { f: Founder }) {
  return (
    <article className="flex flex-col rounded border border-hairline bg-bg-surface p-6 md:p-8">
      {/* Portrait frame */}
      <div className="relative mb-7 aspect-[4/5] overflow-hidden rounded border border-hairline bg-bg-elevated">
        <Image
          src={f.src}
          alt={f.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center [filter:saturate(0.85)_contrast(1.05)]"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-bg-deepest/80 px-4 py-3 font-mono text-[10px] uppercase tracking-spaced text-gold">
          {f.caption}
        </div>
      </div>

      {/* Name + role */}
      <h2 className="mb-2 font-display text-3xl font-extrabold leading-tight tracking-display-tight text-fg-primary">
        {f.name}
      </h2>
      <div className="mb-7 font-mono text-[11px] uppercase tracking-spaced text-khaki">
        {f.role}
      </div>

      {/* Bio paragraphs */}
      <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-fg-secondary">
        {f.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Background highlights */}
      <div className="mt-8 border-t border-hairline pt-6">
        <div className="mb-4 font-mono text-[10px] uppercase tracking-spaced text-fg-disabled">
          BACKGROUND
        </div>
        <ul className="flex flex-col gap-3 text-[13px] leading-relaxed text-fg-secondary">
          {f.background.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* LinkedIn */}
      <a
        href={f.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2.5 self-start rounded-sm border border-border-bright bg-transparent px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-spaced text-fg-primary transition-colors hover:border-fg-primary hover:bg-bg-elevated"
      >
        <Linkedin className="h-3.5 w-3.5" />
        Connect on LinkedIn
        <ArrowRight className="h-3 w-3" />
      </a>
    </article>
  )
}
