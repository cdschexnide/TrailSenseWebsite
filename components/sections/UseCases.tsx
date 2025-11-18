import Link from 'next/link'
import { Tractor, Mountain, Trees, HardHat, Tent, KeyRound } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const useCases = [
  {
    name: 'Rural Property',
    description: 'Monitor remote land, farms, and ranches. Detect trespassers across large acreage without fencing or cameras.',
    icon: Tractor,
    coverage: '15-25+ acres per unit',
  },
  {
    name: 'Trail Systems',
    description: 'Secure hiking trails, access points, and recreational areas. Know when someone enters restricted zones.',
    icon: Mountain,
    coverage: '800+ ft detection range',
  },
  {
    name: 'Wildlife Protection',
    description: 'Protect conservation areas and wildlife habitats from unauthorized access. Non-invasive passive detection.',
    icon: Trees,
    coverage: 'Multiple detection bands',
  },
  {
    name: 'Construction Sites',
    description: 'After-hours security for construction equipment and materials. Instant alerts for nighttime intrusions.',
    icon: HardHat,
    coverage: 'Battery or solar powered',
  },
  {
    name: 'Campground Management',
    description: 'Monitor check-in areas, restricted zones, and facility access. Manage authorized vs unauthorized visitors.',
    icon: Tent,
    coverage: 'Whitelist management',
  },
  {
    name: 'Private Roads',
    description: 'Gate and entrance monitoring for private drives, service roads, and access routes to remote properties.',
    icon: KeyRound,
    coverage: 'Real-time notifications',
  },
]

export function UseCases() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Versatile Applications
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
            Built for diverse security needs
          </p>
          <p className="mt-6 text-lg leading-8 text-earth-600">
            From vast rural properties to specific access points, TrailSense adapts to your unique monitoring requirements.
          </p>
        </div>

        {/* Use case grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.name} className="hover:shadow-lg transition-all hover:border-primary-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-500/10">
                  <useCase.icon className="h-6 w-6 text-sage-700" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{useCase.name}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {useCase.description}
                </CardDescription>
                <div className="mt-4 inline-flex items-center text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded">
                  {useCase.coverage}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/solutions"
            className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-800 transition-colors"
          >
            Explore all use cases and applications <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
