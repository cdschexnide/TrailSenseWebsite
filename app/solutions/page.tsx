import { Metadata } from 'next'
import Link from 'next/link'
import { Tractor, Mountain, Trees, HardHat, Tent, KeyRound, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Solutions & Use Cases - TrailSense Applications',
  description: 'Explore how TrailSense serves diverse property security needs: rural properties, trail systems, wildlife protection, construction sites, campgrounds, and private roads.',
}

const solutions = [
  {
    name: 'Rural Property & Farm Monitoring',
    icon: Tractor,
    challenge: 'Large rural properties and farms spanning hundreds of acres are impossible to effectively monitor with traditional cameras. Game cameras capture images but miss the bigger picture. Fencing is expensive and does not prevent determined trespassers.',
    solution: 'TrailSense provides perimeter monitoring across vast distances without infrastructure. Deploy units at strategic locations—entry points, property corners, valuable equipment areas. Cellular detection reaches 500-800+ feet, allowing a single unit to cover 15-25+ acres.',
    benefits: [
      'Monitor large acreage without expensive fencing',
      'Detect trespassers before they reach buildings or equipment',
      'No WiFi infrastructure required—perfect for remote land',
      'Solar-powered operation for year-round coverage',
      'Real-time alerts when away from property',
    ],
    coverage: '2-4 units typical for 50-100 acre property',
  },
  {
    name: 'Trail Systems & Access Point Security',
    icon: Mountain,
    challenge: 'Hiking trails, ATV paths, and recreational areas have multiple access points that are difficult to monitor. You need to know when someone enters, especially after hours or in restricted zones, but cannot staff every entrance.',
    solution: 'Deploy TrailSense units at trailheads, parking areas, and restricted access points. The system passively monitors for mobile devices, alerting you to any activity. Multi-band detection works through vegetation and in complete darkness.',
    benefits: [
      'Monitor all access points simultaneously',
      'After-hours intrusion detection',
      'Works through forest cover and obstacles',
      'Identify repeat visitors through device fingerprinting',
      'No need for cellular service at deployment location (unit has built-in LTE)',
    ],
    coverage: '1 unit per major access point or trailhead',
  },
  {
    name: 'Wildlife Area Protection',
    icon: Trees,
    challenge: 'Conservation areas, hunting land, and wildlife habitats require protection from unauthorized access, but traditional security measures are invasive, expensive, or ineffective across large natural areas.',
    solution: 'TrailSense offers non-invasive, passive monitoring that does not disturb wildlife or require environmental modifications. Units can be discretely mounted and run on solar power indefinitely.',
    benefits: [
      'Non-invasive passive detection',
      'No cameras to maintain or that disturb wildlife',
      'Detect poachers and unauthorized hunters',
      'Low environmental impact—small, weatherproof units',
      'Battery or solar operation—no grid power needed',
    ],
    coverage: 'Customize based on sensitive areas and known access routes',
  },
  {
    name: 'Construction Site Oversight',
    icon: HardHat,
    challenge: 'Construction equipment, materials, and copper wiring are frequent theft targets. Traditional cameras can be disabled or avoided. You need reliable after-hours security without hiring overnight guards.',
    solution: 'TrailSense units at site entrances and near valuable equipment provide 24/7 detection. Instant alerts mean you or authorities can respond immediately to after-hours intrusions. Device operates independently—no site power or WiFi required.',
    benefits: [
      'After-hours intrusion detection',
      'Instant alerts enable rapid response',
      'Works in areas without power or WiFi',
      'Deter theft through detection (signage)',
      'Portable—move units as site expands',
    ],
    coverage: '1-2 units for small sites, 3-5 for large construction zones',
  },
  {
    name: 'Campground & RV Park Management',
    icon: Tent,
    challenge: 'Managing check-ins, monitoring unauthorized access to closed areas or facilities, and ensuring visitor safety across sprawling campgrounds is labor-intensive and challenging at night.',
    solution: 'TrailSense monitors entry points, restricted areas (closed trails, maintenance zones), and facility access. The whitelist system allows you to distinguish between registered guests and unauthorized visitors.',
    benefits: [
      'Monitor check-in areas for unauthorized access',
      'Detect activity in closed or off-season areas',
      'Whitelist registered guests to reduce false positives',
      'Track visitor patterns and peak times',
      'Enhance guest safety through monitoring',
    ],
    coverage: 'Entry gates, facility access points, and restricted zones',
  },
  {
    name: 'Private Road & Gate Monitoring',
    icon: KeyRound,
    challenge: 'Private drives, service roads, and gated entrances to remote properties need monitoring, but gate openers can be bypassed and cameras require power/WiFi that may not be available.',
    solution: 'Deploy TrailSense at gate locations and along private roads to detect anyone entering—whether they have legitimate access or not. The system works completely independently with built-in LTE connectivity.',
    benefits: [
      'Know when anyone passes through, authorized or not',
      'No WiFi or power infrastructure required',
      'Detect gate bypassing or unauthorized entry',
      'Real-time notifications to property owner',
      'Log all entries for record-keeping',
    ],
    coverage: '1 unit per gate or checkpoint',
  },
]

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl">
              Solutions for Every Security Need
            </h1>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              From vast rural properties to specific access points, TrailSense adapts to your unique monitoring challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.name}
                className={`flex flex-col gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Icon & Title */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center">
                      <solution.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-earth-900">{solution.name}</h2>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">The Challenge</h3>
                    <p className="text-earth-600">{solution.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">TrailSense Solution</h3>
                    <p className="text-earth-600">{solution.solution}</p>
                  </div>

                  {/* Coverage */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                    <span className="font-semibold">Coverage:</span> {solution.coverage}
                  </div>
                </div>

                {/* Benefits Card */}
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Benefits</CardTitle>
                      <CardDescription>How TrailSense solves your specific needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-earth-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment Considerations */}
      <div className="bg-earth-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 mb-8">
              Deployment Best Practices
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Strategic Placement</CardTitle>
                </CardHeader>
                <CardContent className="text-earth-600">
                  <p>
                    Position units at natural choke points (gates, trails, roads) and near high-value areas (equipment, buildings, sensitive zones). Elevation helps—mounting 6-10 feet high improves range and reduces obstruction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Overlapping Coverage</CardTitle>
                </CardHeader>
                <CardContent className="text-earth-600">
                  <p>
                    For critical areas, deploy multiple units with overlapping coverage. Multi-unit detection provides higher confidence threat classification and eliminates blind spots.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Whitelist Management</CardTitle>
                </CardHeader>
                <CardContent className="text-earth-600">
                  <p>
                    Properly configure the whitelist system with known devices (family, staff, regular service personnel). This dramatically reduces false positives and lets you focus on genuine threats.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Deployment Planning</CardTitle>
                </CardHeader>
                <CardContent className="text-earth-600">
                  <p>
                    Every property is unique. Contact our team for a custom deployment plan based on your property layout, terrain, coverage requirements, and budget. We'll help you design the optimal configuration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-sage-700 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's design your security solution
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
            Tell us about your property and we'll create a custom deployment plan with pricing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
            <Button asChild size="xl" variant="secondary">
              <Link href="/contact">
                Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/product">
                View Product Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
