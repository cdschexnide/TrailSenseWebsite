import { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) - TrailSense",
  description:
    "Find answers to common questions about TrailSense technology, legality, installation, pricing, and property monitoring capabilities.",
};

const faqCategories = [
  {
    category: "Technology & How It Works",
    questions: [
      {
        q: "How does cellular detection work?",
        a: "Cell phones constantly transmit RF signals when communicating with cell towers. Our detection unit uses a highly sensitive RF power detector combined with a low-noise amplifier to passively measure these signals across all major US cellular bands (700-2700 MHz). This allows detection even when the target device has WiFi and Bluetooth disabled.",
      },
      {
        q: "What if someone doesn't have their phone with them?",
        a: "TrailSense relies on detecting mobile devices. If someone isn't carrying a phone or electronic device with WiFi/Bluetooth, the system won't detect them. However, 97% of Americans carry cell phones, making this scenario rare. For comprehensive security, consider combining TrailSense with traditional methods like cameras or motion sensors.",
      },
      {
        q: "Can the system be defeated by turning off WiFi and Bluetooth?",
        a: "No—this is actually where TrailSense excels. The cellular detection component works even when WiFi and Bluetooth are disabled. In fact, a cellular-only detection (no WiFi/Bluetooth) is classified as CRITICAL threat level because it suggests intentional evasion.",
      },
      {
        q: "How accurate is the detection range?",
        a: "Cellular detection: 500-800+ feet in optimal conditions. WiFi: ~300 feet. Bluetooth: ~100 feet. Actual range varies based on terrain, vegetation, and device activity. Open areas with line-of-sight provide maximum range, while heavy forest or hills can reduce range by 30-50%.",
      },
      {
        q: "Does this work at night and in bad weather?",
        a: "Yes. TrailSense detects RF signals, which are unaffected by darkness, fog, rain, or snow. Unlike cameras that require visible light, TrailSense works 24/7 in all weather conditions.",
      },
    ],
  },
  {
    category: "Legal & Privacy",
    questions: [
      {
        q: "Is this legal?",
        a: "Yes. Passively receiving and analyzing RF signals that are broadcast into public airspace is legal in the United States. Mobile devices voluntarily broadcast signals, and monitoring these signals on your own property does not violate wiretapping laws or communications privacy acts. TrailSense does not intercept content, decrypt communications, or transmit signals toward target devices.",
      },
      {
        q: "What about privacy concerns?",
        a: "TrailSense is designed with privacy in mind. The system only detects the presence of devices, not communications content. We don't intercept calls, messages, or data. On-device AI in the mobile app means your detection data stays on your phone—no cloud processing. We provide security without compromising privacy.",
      },
      {
        q: "Do I need to post signs notifying people of monitoring?",
        a: 'Legal requirements vary by state and application. For residential property monitoring, signage is typically not required. For commercial applications or areas with public access, consult local regulations. Many customers choose to post "Electronic Monitoring" signs as a deterrent.',
      },
      {
        q: "Can this be used for commercial or government applications?",
        a: "Yes. TrailSense is suitable for both private and commercial/government use. Contact us for enterprise deployments, bulk pricing, and compliance consultation for specific regulatory environments.",
      },
    ],
  },
  {
    category: "Installation & Setup",
    questions: [
      {
        q: "How difficult is installation?",
        a: "Installation is straightforward and takes 15-30 minutes. Mount the unit 6-10 feet high on a post, tree, or structure. Attach the three antennas. Connect power (battery or solar). Power on and wait for GPS lock and LTE connection. Pair with mobile app via QR code. No technical expertise required—units self-configure.",
      },
      {
        q: "Do I need WiFi or internet access where I deploy the unit?",
        a: "No. Each TrailSense unit has a built-in LTE modem and comes with a SIM card. The unit creates its own internet connection to send alerts and data. This is perfect for remote properties with no existing infrastructure.",
      },
      {
        q: "What about power? How long do batteries last?",
        a: "Battery life depends on configuration and activity level. Typical: 2-6 months on battery packs. Solar panels provide indefinite operation—the unit charges during the day and operates 24/7. Low-power sleep modes conserve energy between detections.",
      },
      {
        q: "Can I relocate units after deployment?",
        a: "Yes. Units are portable. Simply unmount, move to the new location, and power on. The device will acquire new GPS coordinates and continue operating. This flexibility is valuable for seasonal monitoring or changing security needs.",
      },
      {
        q: "How many units do I need for my property?",
        a: "It depends on property size and layout. General guidance: 1 unit per 15-25 acres for cellular coverage, less for WiFi/Bluetooth focus. Place units at strategic locations (gates, trails, high-value areas). Contact us for a custom deployment plan based on your specific property.",
      },
    ],
  },
  // {
  //   category: 'Pricing & Costs',
  //   questions: [
  //     {
  //       q: 'How much does TrailSense cost?',
  //       a: 'Target pricing: $250-350 per unit depending on configuration (battery vs. solar, antenna options). This is a one-time hardware purchase—no monthly subscription fees for the software or mobile app.',
  //     },
  //     {
  //       q: 'Are there ongoing costs?',
  //       a: 'The only ongoing cost is the LTE data plan for the unit\'s connectivity: approximately $5-15/month depending on carrier and data usage. We provide 3 months of service included with purchase. No other recurring fees—mobile app is free, software updates are free for life.',
  //     },
  //     {
  //       q: 'Is there a monthly subscription for the app or cloud service?',
  //       a: 'No. The mobile app is completely free with device purchase, and there are no cloud service subscription fees. You only pay for the hardware and the LTE data connectivity ($5-15/month). This is one of our core values—no hidden fees or forced subscriptions.',
  //     },
  //     {
  //       q: 'Do you offer bulk discounts?',
  //       a: 'Yes. Bulk discounts are available for customers purchasing multiple units. Contact us for custom pricing on deployments of 5+ units, or for commercial/enterprise orders.',
  //     },
  //     {
  //       q: 'What\'s included in the warranty?',
  //       a: '1-year hardware warranty covering manufacturing defects. Extended warranties available for purchase. Software updates and bug fixes are provided free for the lifetime of the product.',
  //     },
  //   ],
  // },
  {
    category: "Features & Capabilities",
    questions: [
      {
        q: "How do I know if it's my neighbor's phone or an intruder?",
        a: "The whitelist system allows you to add known devices (neighbors, family, regular visitors) by MAC address. Whitelisted devices still appear in logs but are marked as low-threat and won't trigger high-priority alerts. The system also learns baseline activity patterns.",
      },
      {
        q: "Can I monitor multiple properties from one app?",
        a: "Yes. The mobile app supports multiple TrailSense units across different properties. View all devices in a single dashboard, or filter by location. Perfect for managing multiple land parcels or commercial locations.",
      },
      {
        q: "What does the on-device AI do?",
        a: 'The mobile app includes an on-device LLM (Large Language Model) that allows you to query your detection data using natural language. Ask questions like "Has anyone been detected near the north gate this week?" or "Show me unusual patterns." All processing happens on your phone—complete privacy.',
      },
      {
        q: "Does the system detect cars or animals?",
        a: "TrailSense detects mobile devices, not vehicles or animals directly. However, most vehicles today contain occupants with mobile phones, so you'll typically detect the people in the vehicle. The system does not detect animals unless they're somehow carrying an electronic device.",
      },
      {
        q: "Can I get historical data and reports?",
        a: "Yes. The mobile app stores detection history and provides analytics: trends over time, hourly distribution patterns, threat level breakdowns, geographic heatmaps, and device fingerprinting to track repeat visitors. Export data for record-keeping or analysis.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              Find answers to common questions about TrailSense technology,
              deployment, and capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-earth-900 mb-6 pb-3 border-b-2 border-primary-600">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${categoryIndex}-${itemIndex}`}
                      className="border border-earth-200 rounded-lg px-6 bg-white shadow-sm"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-earth-900">
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-earth-600 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Still Have Questions? */}
      <div className="bg-earth-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-earth-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us with any questions about
            TrailSense technology, deployment planning, or custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <a
              href="mailto:info@trailsense.com"
              className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-800 transition-colors"
            >
              Email: info@trailsense.com <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-earth-900 mb-2">
                Learn More
              </h3>
              <p className="text-sm text-earth-600 mb-4">
                Dive deeper into the technology
              </p>
              <Link
                href="/technology"
                className="text-primary-700 hover:text-primary-800 font-semibold text-sm"
              >
                Technology Page →
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-earth-900 mb-2">
                See Applications
              </h3>
              <p className="text-sm text-earth-600 mb-4">
                Explore real-world use cases
              </p>
              <Link
                href="/solutions"
                className="text-primary-700 hover:text-primary-800 font-semibold text-sm"
              >
                Solutions Page →
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-earth-900 mb-2">
                Get Pricing
              </h3>
              <p className="text-sm text-earth-600 mb-4">
                Request a custom quote
              </p>
              <Link
                href="/contact"
                className="text-primary-700 hover:text-primary-800 font-semibold text-sm"
              >
                Contact Page →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
