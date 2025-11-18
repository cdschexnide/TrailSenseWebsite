import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { MobileApp } from '@/components/sections/MobileApp'
import { UseCases } from '@/components/sections/UseCases'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <MobileApp />
      <UseCases />
      <CTA />
    </>
  )
}
