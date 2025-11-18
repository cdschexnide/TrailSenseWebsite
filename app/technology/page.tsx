import { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  Wifi,
  Bluetooth,
  Shield,
  Lock,
  Zap,
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
  title: "Technology - How TrailSense Detection Works",
  description:
    "Deep dive into TrailSense multi-band detection technology: cellular uplink scanning, WiFi probe detection, Bluetooth monitoring, and threat classification algorithms.",
};

export default function TechnologyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl">
              Multi-Band Detection Technology
            </h1>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              Understanding the breakthrough technology behind TrailSense
              passive device detection.
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-earth-600 mb-6">
              TrailSense uses a sophisticated three-band passive detection
              system to monitor for mobile devices across vast distances. By
              simultaneously scanning cellular uplink signals, WiFi probe
              requests, and Bluetooth advertisements, the system provides
              comprehensive coverage while using proprietary correlation
              algorithms to minimize false positives.
            </p>
            <p className="text-lg text-earth-600">
              The breakthrough technology is{" "}
              <strong className="text-earth-900">
                cellular uplink detection
              </strong>{" "}
              - passively monitoring the RF signals that cell phones transmit
              when communicating with cell towers. This works even when the
              target device has WiFi and Bluetooth disabled, providing detection
              capabilities that go far beyond traditional monitoring solutions.
            </p>
          </div>

          {/* Detection Methods Detail */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8">
              {/* Cellular Detection */}
              <Card className="border-2 border-clay-500/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-clay-500/10 flex items-center justify-center">
                      <Radio className="h-6 w-6 text-clay-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">
                        Cellular Uplink Detection (The Breakthrough)
                      </CardTitle>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-clay-500/10 px-3 py-1 text-xs font-medium text-clay-700">
                          500-800+ ft range
                        </span>
                        <span className="inline-flex items-center rounded-full bg-clay-500/10 px-3 py-1 text-xs font-medium text-clay-700">
                          700-2700 MHz
                        </span>
                        <span className="inline-flex items-center rounded-full bg-clay-500/10 px-3 py-1 text-xs font-medium text-clay-700">
                          Works with WiFi/BT disabled
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-earth-600">
                    <p>
                      <strong className="text-earth-900">How it works:</strong>{" "}
                      Mobile phones constantly communicate with cell towers by
                      transmitting RF signals in the cellular frequency bands.
                      Our detection unit uses a highly sensitive RF power
                      detector (AD8313) combined with a low-noise amplifier
                      (Nooelec LaNA) to passively measure these signals.
                    </p>
                    <p>
                      The system covers all major US cellular bands (700-2700
                      MHz), including:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                      <li>Band 12/13/17 (700 MHz) - Low-band LTE</li>
                      <li>Band 2/4/5 (1700-2100 MHz) - Mid-band LTE/5G</li>
                      <li>Band 66 (1700-2100 MHz) - AWS LTE</li>
                      <li>2.5 GHz (Band 41) - Sprint/T-Mobile 5G</li>
                    </ul>
                    <p>
                      <strong className="text-earth-900">Key advantage:</strong>{" "}
                      Unlike WiFi and Bluetooth, cellular signals cannot be
                      easily disabled. Most users never turn off their cellular
                      connection, making this the most reliable detection
                      method.
                    </p>
                    <p>
                      <strong className="text-earth-900">
                        Technical details:
                      </strong>{" "}
                      The signal processing chain includes a wideband antenna
                      (700-2700 MHz) → ultra-low noise amplifier (0.6dB noise
                      figure, 20dB gain) → logarithmic RF detector → ESP32 ADC
                      for real-time signal strength measurement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* WiFi Detection */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Wifi className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">
                        WiFi Probe Request Scanning
                      </CardTitle>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                          ~300 ft range
                        </span>
                        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                          2.4 GHz
                        </span>
                        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                          MAC address capture
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-earth-600">
                    <p>
                      <strong className="text-earth-900">How it works:</strong>{" "}
                      Mobile devices with WiFi enabled periodically broadcast
                      "probe requests" to search for known networks. The ESP32's
                      built-in WiFi chipset operates in promiscuous mode to
                      capture these broadcasts without joining any network.
                    </p>
                    <p>
                      Each probe request contains the device's MAC address and
                      signal strength (RSSI), allowing for device fingerprinting
                      and distance estimation. The system can track individual
                      devices over time and identify repeat visitors.
                    </p>
                    <p>
                      <strong className="text-earth-900">Limitations:</strong>{" "}
                      Modern iOS and Android devices use MAC address
                      randomization for privacy, but the randomized addresses
                      remain consistent for extended periods, still allowing
                      tracking. Some devices reduce probe frequency when
                      stationary.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Bluetooth Detection */}
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sage-500/10 flex items-center justify-center">
                      <Bluetooth className="h-6 w-6 text-sage-700" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">
                        Bluetooth/BLE Advertisement Scanning
                      </CardTitle>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-sage-500/10 px-3 py-1 text-xs font-medium text-sage-700">
                          ~100 ft range
                        </span>
                        <span className="inline-flex items-center rounded-full bg-sage-500/10 px-3 py-1 text-xs font-medium text-sage-700">
                          BLE 4.0+
                        </span>
                        <span className="inline-flex items-center rounded-full bg-sage-500/10 px-3 py-1 text-xs font-medium text-sage-700">
                          Close-range verification
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-earth-600">
                    <p>
                      <strong className="text-earth-900">How it works:</strong>{" "}
                      Bluetooth Low Energy (BLE) devices periodically broadcast
                      advertisement packets to announce their presence. The
                      ESP32 scans for these advertisements on all three BLE
                      advertising channels (37, 38, 39).
                    </p>
                    <p>BLE scanning is particularly effective for detecting:</p>
                    <ul className="ml-6 space-y-1 list-disc">
                      <li>Wearable devices (smartwatches, fitness trackers)</li>
                      <li>Bluetooth headphones and speakers</li>
                      <li>Wireless accessories</li>
                      <li>Mobile devices with Bluetooth enabled</li>
                    </ul>
                    <p>
                      <strong className="text-earth-900">
                        Role in system:
                      </strong>{" "}
                      While limited in range, Bluetooth detection provides
                      close-range confirmation and correlation with WiFi and
                      cellular detections. Multiple simultaneous detections
                      increase threat classification confidence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Band Correlation */}
      <div className="bg-earth-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 mb-6">
              Intelligent Threat Classification
            </h2>
            <p className="text-lg text-earth-600 mb-8">
              Raw detections are only part of the solution. TrailSense uses
              proprietary algorithms to correlate signals across all three
              bands, dramatically reducing false positives and intelligently
              classifying threats.
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-destructive">
                <CardHeader>
                  <CardTitle className="text-destructive">
                    CRITICAL Threat Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-600">
                    <strong>Cellular-only detection:</strong> A device is
                    detected on cellular but not WiFi or Bluetooth. This pattern
                    suggests the user has intentionally disabled
                    WiFi/Bluetooth—a strong indicator of evasion and malicious
                    intent.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-clay-500">
                <CardHeader>
                  <CardTitle className="text-clay-600">
                    HIGH Threat Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-600">
                    <strong>Multi-band + movement:</strong> Detection across 2+
                    bands with changing signal strength indicates an approaching
                    or moving device. Not whitelisted.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-amber-500">
                <CardHeader>
                  <CardTitle className="text-amber-600">
                    MEDIUM Threat Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-600">
                    <strong>Single-band or stationary:</strong> WiFi or
                    Bluetooth detection only, or stationary signal pattern.
                    Could be a neighbor's phone at property edge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary-600">
                <CardHeader>
                  <CardTitle className="text-primary-600">
                    LOW Threat Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-600">
                    <strong>Known device:</strong> MAC address matches whitelist
                    entry (family, guests, service personnel), but still logged
                    for records.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg bg-primary-50 p-6">
              <p className="text-sm text-earth-700">
                <strong className="text-primary-700">Advanced features:</strong>{" "}
                The system also tracks device fingerprints over time,
                identifying repeat visitors even with MAC randomization. Pattern
                recognition algorithms detect crowd behavior (multiple devices
                together) and movement patterns (stationary vs. approaching).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 mb-6">
              Privacy & Security
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Shield className="h-8 w-8 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">
                    Passive Detection Only
                  </h3>
                  <p className="text-earth-600">
                    TrailSense does not transmit any signals toward target
                    devices. All detection is passive—we only listen, never
                    broadcast. This means the system is completely undetectable
                    to those being monitored and poses no privacy concerns for
                    legitimate users.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Lock className="h-8 w-8 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">
                    Legal Compliance
                  </h3>
                  <p className="text-earth-600">
                    Monitoring publicly broadcast RF signals is legal in the
                    United States. Cell phones, WiFi devices, and Bluetooth
                    devices all broadcast signals into public airspace.
                    Passively receiving and analyzing these signals on your own
                    property does not violate wiretapping laws or communications
                    privacy acts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="h-8 w-8 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">
                    On-Device AI = Complete Privacy
                  </h3>
                  <p className="text-earth-600">
                    The mobile app's AI assistant runs entirely on your device
                    using on-device LLM technology. Your detection data never
                    leaves your phone, and no queries are sent to external
                    servers. You maintain complete control and privacy over your
                    security information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical FAQ */}
      <div className="bg-earth-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-earth-900 mb-8">
              Technical Questions
            </h2>

            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-lg shadow-sm"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">
                  What if someone doesn't have a phone?
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <p className="mb-2">
                    In modern society, the vast majority of people carry mobile
                    devices. According to Pew Research, 97% of Americans own a
                    cell phone. For the rare individual without a phone,
                    TrailSense would not detect them—this is a limitation of the
                    technology.
                  </p>
                  <p>
                    However, for comprehensive security, TrailSense can be
                    deployed alongside traditional methods like cameras, motion
                    sensors, or physical barriers. The multi-layered approach
                    provides the best coverage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">
                  Can detection be defeated?
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <p className="mb-2">
                    A sophisticated intruder could theoretically defeat
                    detection by:
                  </p>
                  <ul className="ml-6 space-y-1 list-disc mb-2">
                    <li>Not carrying any mobile devices</li>
                    <li>Placing phone in a Faraday bag to block all signals</li>
                    <li>Completely powering off all devices</li>
                  </ul>
                  <p>
                    However, these countermeasures are rarely employed by casual
                    trespassers, hunters, or thieves—the primary security
                    concerns for most property owners. For high-security
                    applications, combine TrailSense with additional security
                    measures.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">
                  How does range vary with terrain?
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <p className="mb-2">Detection range is affected by:</p>
                  <ul className="ml-6 space-y-1 list-disc mb-2">
                    <li>
                      <strong>Line of sight:</strong> Maximum range in open
                      terrain with direct line of sight
                    </li>
                    <li>
                      <strong>Light vegetation:</strong> 10-20% range reduction
                      through light forest
                    </li>
                    <li>
                      <strong>Dense forest:</strong> 30-50% range reduction
                      through heavy tree cover
                    </li>
                    <li>
                      <strong>Hills/valleys:</strong> Significant reduction when
                      target is behind terrain features
                    </li>
                    <li>
                      <strong>Target device power:</strong> Actively-used phones
                      transmit stronger signals
                    </li>
                  </ul>
                  <p>
                    For precise coverage estimates for your property, contact
                    our team for a custom deployment plan.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">
                  What about false positives from neighbors or passing traffic?
                </AccordionTrigger>
                <AccordionContent className="px-6 text-earth-600">
                  <p className="mb-2">
                    False positives are minimized through several mechanisms:
                  </p>
                  <ul className="ml-6 space-y-1 list-disc mb-2">
                    <li>
                      <strong>Signal strength filtering:</strong> Only strong
                      signals (close proximity) trigger alerts
                    </li>
                    <li>
                      <strong>Whitelist system:</strong> Known devices
                      (neighbors, family) are automatically filtered
                    </li>
                    <li>
                      <strong>Learning mode:</strong> The system learns normal
                      baseline activity and alerts on anomalies
                    </li>
                    <li>
                      <strong>Movement patterns:</strong> Stationary detections
                      (neighbor's house) are classified as low priority
                    </li>
                    <li>
                      <strong>Time-based rules:</strong> Adjust sensitivity
                      during different times of day
                    </li>
                  </ul>
                  <p>
                    With proper configuration and whitelist management, false
                    positive rates are very low.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-sage-700 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience the technology firsthand
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
            See how multi-band detection can secure your property.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="xl" variant="secondary">
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/product">View Product Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
