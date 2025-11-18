import { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  Wifi,
  Bluetooth,
  Battery,
  CloudRain,
  Zap,
  Smartphone,
  Gauge,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Product - TrailSense Detection Unit & Mobile App",
  description:
    "Explore the TrailSense detection unit hardware specifications, mobile app features, and pricing. Multi-band wireless detection for property security.",
};

export default function ProductPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl">
              TrailSense Detection System
            </h1>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              Professional-grade hardware and intelligent mobile app for
              comprehensive property monitoring.
            </p>
          </div>

          {/* Product image placeholder */}
          <div className="mt-12 flex justify-center">
            <div className="relative rounded-2xl bg-earth-900/5 p-8 ring-1 ring-inset ring-earth-900/10">
              <div className="aspect-[16/9] w-full max-w-4xl rounded-lg bg-gradient-to-br from-primary-600 to-sage-700 shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-3xl font-bold mb-2">
                    TrailSense Detection Unit
                  </p>
                  <p className="text-sm opacity-80">
                    Add multiple angles of product photography
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detection Methods */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Three-Band Detection System
            </h2>
            <p className="mt-4 text-lg text-earth-600">
              Simultaneous multi-band scanning provides comprehensive coverage
              and intelligent threat classification.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cellular Detection */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-clay-500/10">
                  <Radio className="h-6 w-6 text-clay-600" />
                </div>
                <CardTitle>Cellular Uplink Detection</CardTitle>
                <CardDescription className="text-base mt-2">
                  Breakthrough passive RF detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-earth-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Range:</strong> 500-800+ feet (15-25+ acres)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Frequency:</strong> 700-2700 MHz (all major US
                      cellular bands)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Key Feature:</strong> Works even when target
                      device has WiFi/BT disabled
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>Low-noise amplifier extends range 3-5x</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* WiFi Detection */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <Wifi className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>WiFi Probe Scanning</CardTitle>
                <CardDescription className="text-base mt-2">
                  2.4 GHz probe request detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-earth-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Range:</strong> ~300 feet (~6.5 acres)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Frequency:</strong> 2.4 GHz WiFi band
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      Captures MAC addresses and signal strength (RSSI)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>Detects phones searching for known networks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bluetooth Detection */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-500/10">
                  <Bluetooth className="h-6 w-6 text-sage-700" />
                </div>
                <CardTitle>Bluetooth/BLE Scanning</CardTitle>
                <CardDescription className="text-base mt-2">
                  BLE advertisement detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-earth-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Range:</strong> ~100 feet (~0.7 acres)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>
                      <strong>Protocol:</strong> Bluetooth Low Energy (BLE)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>Detects nearby Bluetooth-enabled devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span>Close-range verification and confirmation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-lg bg-primary-50 p-6">
            <p className="text-sm text-earth-700">
              <strong className="text-primary-700">
                Multi-Band Correlation:
              </strong>{" "}
              The device uses proprietary algorithms to correlate detections
              across all three bands, reducing false positives and intelligently
              classifying threats. For example, a cellular-only detection (no
              WiFi/Bluetooth) is flagged as CRITICAL because it suggests
              intentional evasion.
            </p>
          </div>
        </div>
      </div>

      {/* Hardware Specifications */}
      <div className="bg-earth-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Hardware Specifications
            </h2>
            <p className="mt-4 text-lg text-earth-600">
              Built for rugged outdoor deployment with professional-grade
              components.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Battery className="h-8 w-8 text-primary-600 mb-2" />
                <CardTitle>Power Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-earth-600">
                  <li>• 18650 Li-ion battery packs</li>
                  <li>• Solar panel compatible</li>
                  <li>• Months of battery life</li>
                  <li>• Low-power sleep modes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CloudRain className="h-8 w-8 text-primary-600 mb-2" />
                <CardTitle>Weatherproofing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-earth-600">
                  <li>• IP65+ rated enclosure</li>
                  <li>• Temperature: -20°C to +60°C</li>
                  <li>• UV-resistant materials</li>
                  <li>• Outdoor-rated connectors</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary-600 mb-2" />
                <CardTitle>Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-earth-600">
                  <li>• ESP32-S3 dual-core MCU</li>
                  <li>• 16MB flash storage</li>
                  <li>• Real-time signal processing</li>
                  <li>• On-device algorithms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="h-8 w-8 text-primary-600 mb-2" />
                <CardTitle>Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-earth-600">
                  <li>• LTE modem (SIM7600/7000)</li>
                  <li>• 4G LTE Cat-1/Cat-M</li>
                  <li>• GPS positioning</li>
                  {/* <li>• ~$5-15/mo data plan</li> */}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="h-8 w-8 text-primary-600 mb-2" />
                <CardTitle>Detection Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-earth-600">
                  <li>• AD8313 RF power detector</li>
                  <li>• Nooelec LaNA amplifier</li>
                  <li>• Three specialized antennas</li>
                  <li>• 0.1-2.5 GHz detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary-600 mb-2" />
                <CardTitle>Physical</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-earth-600">
                  <li>• Compact weatherproof case</li>
                  <li>• Mounting hardware included</li>
                  <li>• Easy antenna installation</li>
                  <li>• Indicator LED status</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technical Details Accordion */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-lg shadow-sm"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">
                  <span className="font-semibold">
                    What's included in the box?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <ul className="space-y-1 ml-4">
                    <li>• TrailSense detection unit (fully assembled)</li>
                    <li>• Three antennas (cellular, WiFi, LTE)</li>
                    <li>• Mounting hardware and bracket</li>
                    <li>
                      • Battery pack or solar panel (configuration dependent)
                    </li>
                    <li>• Quick start guide and documentation</li>
                    <li>• SIM card (pre-activated with 3 months service)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">
                  <span className="font-semibold">
                    Deployment and installation
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <p>Installation takes approximately 15-30 minutes:</p>
                  <ol className="mt-2 space-y-1 ml-4 list-decimal">
                    <li>
                      Mount unit on post, tree, or structure 6-10 feet high
                    </li>
                    <li>Attach three antennas to connectors</li>
                    <li>Connect power (battery or solar)</li>
                    <li>Power on and wait for GPS lock and LTE connection</li>
                    <li>Pair with mobile app via QR code</li>
                  </ol>
                  <p className="mt-2">
                    No technical expertise required. Units self-configure and
                    auto-connect to the cloud backend.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">
                  <span className="font-semibold">
                    Range and coverage considerations
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <p>Detection range varies based on terrain and conditions:</p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>
                      • <strong>Open terrain:</strong> Maximum range (800+ ft
                      cellular, 300 ft WiFi)
                    </li>
                    <li>
                      • <strong>Light forest:</strong> 10-20% range reduction
                    </li>
                    <li>
                      • <strong>Dense forest:</strong> 30-50% range reduction
                    </li>
                    <li>
                      • <strong>Hills/valleys:</strong> Line-of-sight matters
                      for optimal performance
                    </li>
                  </ul>
                  <p className="mt-2">
                    For properties larger than 25 acres, we recommend multiple
                    units for full coverage. Our team can help design an optimal
                    deployment plan.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Mobile App */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Intelligent Mobile App
            </h2>
            <p className="mt-4 text-lg text-earth-600">
              Powerful iOS and Android app with real-time monitoring and
              on-device AI.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* App Features List */}
            <div>
              <h3 className="text-2xl font-bold text-earth-900 mb-6">
                Key Features
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      Real-Time Alerts
                    </h4>
                    <p className="text-sm text-earth-600">
                      Instant push notifications with threat classification
                      (Critical/High/Medium/Low) and detection details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      Live Radar Display
                    </h4>
                    <p className="text-sm text-earth-600">
                      WebSocket-based real-time visualization showing detected
                      devices, distances, and threat levels on an interactive
                      radar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      Analytics Dashboard
                    </h4>
                    <p className="text-sm text-earth-600">
                      Trends, heatmaps, hourly patterns, device fingerprinting,
                      and repeat visitor tracking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      Device Management
                    </h4>
                    <p className="text-sm text-earth-600">
                      Monitor battery levels, signal strength, online/offline
                      status, and GPS coordinates for all your TrailSense units.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">05</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      Whitelist System
                    </h4>
                    <p className="text-sm text-earth-600">
                      Add known devices (family, guests, service) to eliminate
                      false positives. Auto-learn from user feedback.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">06</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-900">
                      On-Device AI
                    </h4>
                    <p className="text-sm text-earth-600">
                      Query your detection data using natural language. Complete
                      privacy—AI runs locally, no cloud processing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-earth-600 italic">
                  <strong>Platform:</strong> iOS 14+ and Android 10+
                  <br />
                  <strong>Price:</strong> Free with device purchase, no
                  subscription fees
                </p>
              </div>
            </div>

            {/* App Screenshots Placeholder */}
            <div className="flex items-center">
              <div className="w-full aspect-[9/16] max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-earth-800 to-earth-900 shadow-2xl p-4 ring-1 ring-earth-700">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-primary-600/20 to-sage-700/20 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Smartphone className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold mb-2">
                      Mobile App Screenshot
                    </p>
                    <p className="text-xs opacity-70">
                      Live Radar, Alerts, Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      {/* <div className="bg-earth-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-earth-600">
              Professional security without recurring subscription fees.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <Card className="border-2 border-primary-600 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl">
                  TrailSense Detection Unit
                </CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-earth-900">
                    $250
                  </span>
                  <span className="text-2xl text-earth-600"> - $350</span>
                </div>
                <p className="text-sm text-earth-600 mt-2">
                  One-time purchase, varies by configuration
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-earth-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>Complete detection unit with all hardware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>Three antennas and mounting hardware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>Free mobile app (iOS & Android)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>3 months LTE service included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>No monthly subscription fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>Lifetime software updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600 font-bold">✓</span>
                    <span>1-year hardware warranty</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-earth-700">
                    <strong>Ongoing costs:</strong> LTE data plan only
                    (~$5-15/month depending on carrier and data usage). No other
                    fees.
                  </p>
                </div>

                <div className="mt-6">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">
                      Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <p className="mt-4 text-xs text-center text-earth-600">
                  Bulk discounts available for multiple units. Contact us for
                  custom deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div> */}

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-sage-700 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to secure your property?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
            Get a custom quote based on your property size and monitoring needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
            <Button asChild size="xl" variant="secondary">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/technology">Learn About the Technology</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
