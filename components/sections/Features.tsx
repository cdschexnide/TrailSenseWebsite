import {
  Radio,
  Wifi,
  Bluetooth,
  Bell,
  Battery,
  Brain,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    name: 'Extended Cellular Detection',
    description:
      'Breakthrough passive RF detection scans cellular uplink signals across 700-2700 MHz, detecting devices up to 800+ feet away even with WiFi and Bluetooth disabled.',
    icon: Radio,
  },
  {
    name: 'Multi-Band Scanning',
    description:
      'Simultaneous detection across cellular, WiFi (2.4 GHz), and Bluetooth bands provides comprehensive coverage and reduces false positives through signal correlation.',
    icon: Wifi,
  },
  {
    name: 'Autonomous Operation',
    description:
      'Deploy and forget. Weatherproof units operate 24/7 on battery or solar power, requiring no WiFi infrastructure or user interaction after initial setup.',
    icon: Battery,
  },
  {
    name: 'Real-Time Alerts',
    description:
      'Instant push notifications to your mobile device via LTE connectivity. Threat classification (Critical/High/Medium/Low) based on detection patterns and device behavior.',
    icon: Bell,
  },
  {
    name: 'No Infrastructure Required',
    description:
      'Built-in LTE modem eliminates the need for WiFi networks or hardwired connections. Perfect for remote properties, trails, and areas without existing infrastructure.',
    icon: Bluetooth,
  },
  {
    name: 'On-Device AI Intelligence',
    description:
      'Mobile app includes on-device LLM for natural language queries about your detection data. Complete privacy—no data leaves your phone.',
    icon: Brain,
  },
]

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Advanced Detection Technology
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
            Everything you need to secure your property
          </p>
          <p className="mt-6 text-lg leading-8 text-earth-600">
            Professional-grade security features in a deployment-ready package. No complex installation, no ongoing subscription fees.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <feature.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
