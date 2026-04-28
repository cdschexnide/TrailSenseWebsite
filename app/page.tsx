import { Hero } from '@/components/sections/Hero'
import { Capabilities } from '@/components/sections/Capabilities'
import { MobileApp } from '@/components/sections/MobileApp'
import { OlivePanel } from '@/components/sections/OlivePanel'
import { Specifications } from '@/components/sections/Specifications'
import { UseCases } from '@/components/sections/UseCases'
import { GetStarted } from '@/components/sections/GetStarted'

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <MobileApp />
      <OlivePanel />
      <Specifications />
      <UseCases />
      <GetStarted />
    </>
  )
}
