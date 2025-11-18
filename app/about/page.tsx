import { Metadata } from 'next'
import Link from 'next/link'
import { Target, Users, Lightbulb, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { company } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: 'About TrailSense - Our Mission & Team',
  description: 'Learn about TrailSense, our mission to provide professional-grade security solutions for rural and remote properties, and the team behind the technology.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl">
              Professional Security for Remote Properties
            </h1>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              We're building the next generation of property security technology—designed by engineers who understand the unique challenges of monitoring remote land.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              {company.tagline}
            </p>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              Traditional security cameras require infrastructure, only work line-of-sight, and are easily avoided. We believe property owners deserve better. TrailSense detects the one thing nearly everyone carries—their cell phone—across vast distances, through obstacles, in complete darkness, with no infrastructure required.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary-600 mb-4" />
                  <CardTitle>The Problem We're Solving</CardTitle>
                  <CardDescription className="text-base mt-4 text-earth-600">
                    Rural property owners face unique security challenges. Properties spanning hundreds of acres can't be effectively monitored with cameras. Game cameras capture images but miss the bigger picture. Traditional alarm systems require hardwired infrastructure that doesn't exist on remote land. Trespassers, unauthorized visitors, and unwanted activity often go undetected until it's too late.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-primary-600 mb-4" />
                  <CardTitle>Our Solution</CardTitle>
                  <CardDescription className="text-base mt-4 text-earth-600">
                    TrailSense takes a fundamentally different approach. Rather than trying to see intruders, we detect their mobile devices. Our multi-band detection system passively scans for cellular, WiFi, and Bluetooth signals across 500-800+ feet. Devices are completely autonomous—no WiFi, no hardwiring, just deploy and forget. Real-time alerts keep you informed no matter where you are.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-earth-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              About {company.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary-600 mb-4" />
                <CardTitle>Founded by Engineers</CardTitle>
                <CardDescription className="text-base mt-4 text-earth-600">
                  TrailSense was founded by a team of engineers and security professionals who were frustrated by the lack of effective monitoring solutions for large, remote properties. We built the system we wished existed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary-600 mb-4" />
                <CardTitle>{company.type}</CardTitle>
                <CardDescription className="text-base mt-4 text-earth-600">
                  Established as an {company.type} in {company.founded}, we're committed to sustainable growth and delivering long-term value to our customers. We're building a company and product designed to last.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary-600 mb-4" />
                <CardTitle>Our Commitment</CardTitle>
                <CardDescription className="text-base mt-4 text-earth-600">
                  We're committed to transparent pricing, no hidden fees, and no forced subscriptions. You buy the hardware, you own the system. We provide the tools, you maintain control of your data and your security.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-earth-900 mb-2">Privacy First</h3>
                <p className="text-earth-600">
                  We believe property monitoring shouldn't compromise privacy. Our on-device AI means your detection data stays on your phone. We passively monitor RF signals, not people. You own your data, always.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-earth-900 mb-2">Transparent Pricing</h3>
                <p className="text-earth-600">
                  No hidden fees, no forced subscriptions, no surprise charges. You pay for the hardware, we provide free software updates for life. The only ongoing cost is your optional LTE data plan.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-earth-900 mb-2">Built to Last</h3>
                <p className="text-earth-600">
                  We design for durability and longevity. Weatherproof hardware, efficient power consumption, and over-the-air updates mean your TrailSense system will serve you for years.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-earth-900 mb-2">Customer Success</h3>
                <p className="text-earth-600">
                  Your security is our success. We provide comprehensive documentation, responsive support, and continuous improvements based on real-world feedback from property owners like you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-sage-700 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join us in reimagining property security
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
            Whether you're securing 10 acres or 1,000, we're here to help design the perfect solution.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
            <Button asChild size="xl" variant="secondary">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/product">
                View Product
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
