import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { ContactForm } from '@/components/forms/ContactForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: 'Contact Us & Request a Quote',
  description: 'Get a custom quote for your property security needs or contact the TrailSense team. We typically respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-6xl">
              Let's Secure Your Property
            </h1>
            <p className="mt-6 text-lg leading-8 text-earth-600">
              Request a custom quote or get in touch with our team. We're here to help design the perfect security solution for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription className="mt-2">
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-700 hover:text-primary-800">
                    {siteConfig.contact.email}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
                <CardDescription className="mt-2">
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-primary-700 hover:text-primary-800">
                    {siteConfig.contact.phone}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
                <CardDescription className="mt-2">
                  {siteConfig.contact.address}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Forms Section */}
      <div className="py-24 bg-earth-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Quote Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-earth-900">
                  Request a Quote
                </h2>
                <p className="mt-4 text-lg text-earth-600">
                  Tell us about your property and security needs. We'll design a custom deployment plan and provide pricing within 24 hours.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <QuoteForm />
                </CardContent>
              </Card>

              <div className="mt-6 rounded-lg bg-primary-50 p-4">
                <p className="text-sm text-earth-700">
                  <strong className="text-primary-700">Typical Response Time:</strong> 24 hours or less. For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>

            {/* General Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-earth-900">
                  General Inquiry
                </h2>
                <p className="mt-4 text-lg text-earth-600">
                  Have questions about our technology, partnerships, or something else? Send us a message and we'll get back to you soon.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>

              <div className="mt-6">
                <h3 className="font-semibold text-earth-900 mb-3">Common Inquiries:</h3>
                <ul className="space-y-2 text-sm text-earth-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span><strong>Technical Support:</strong> For existing customers needing assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span><strong>Partnership Opportunities:</strong> Interested in becoming a reseller or integrator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span><strong>Press & Media:</strong> Interview requests and media inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary-600">•</span>
                    <span><strong>Bulk Orders:</strong> Enterprise or government deployments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Teaser */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-earth-900 mb-4">
            Have questions before reaching out?
          </h2>
          <p className="text-earth-600 mb-8">
            Check out our comprehensive FAQ section for answers to common questions about TrailSense technology, deployment, and pricing.
          </p>
          <a
            href="/faq"
            className="text-base font-semibold leading-7 text-primary-700 hover:text-primary-800 transition-colors"
          >
            Visit FAQ Page <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
