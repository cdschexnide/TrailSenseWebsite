import { MapPin, Radio, Smartphone, BarChart3 } from 'lucide-react'

const steps = [
  {
    name: 'Deploy TrailSense Device',
    description:
      'Place the weatherproof detection unit on your property. Units can run on battery power or solar panels, requiring no WiFi infrastructure. GPS coordinates are automatically logged.',
    icon: MapPin,
  },
  {
    name: 'Passive Multi-Band Scanning',
    description:
      'The device continuously scans for cellular uplink signals, WiFi probe requests, and Bluetooth advertisements. Detection happens passively without transmitting to target devices.',
    icon: Radio,
  },
  {
    name: 'Instant Alert Delivery',
    description:
      'When activity is detected, alerts are sent via LTE to the cloud backend and pushed to your mobile device. Threat level is determined by multi-band correlation algorithms.',
    icon: Smartphone,
  },
  {
    name: 'Monitor & Analyze',
    description:
      'View real-time detection on the live radar display, review analytics for patterns, manage whitelisted devices, and query your data using natural language with on-device AI.',
    icon: BarChart3,
  },
]

export function HowItWorks() {
  return (
    <div className="bg-earth-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Simple Setup, Powerful Results
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
            How TrailSense Works
          </p>
          <p className="mt-6 text-lg leading-8 text-earth-600">
            From deployment to detection in minutes. No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex gap-x-6">
                {/* Timeline connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-12 -bottom-12 w-px bg-earth-200" aria-hidden="true" />
                )}

                {/* Icon */}
                <div className="relative flex h-12 w-12 flex-none items-center justify-center bg-white rounded-full ring-1 ring-earth-200">
                  <step.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-auto pb-12">
                  <h3 className="text-xl font-semibold leading-7 text-earth-900">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-earth-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/product"
            className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-800 transition-colors"
          >
            Learn more about the technology <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
