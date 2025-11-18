/**
 * Site-wide configuration
 * Centralized data for consistent branding and content
 */

export const siteConfig = {
  name: 'TrailSense',
  description: 'Next-Generation Property Security Through Passive Mobile Device Detection',
  url: 'https://trailsense.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/trailsense',
    github: 'https://github.com/trailsense',
  },
  contact: {
    email: 'info@trailsense.com',
    phone: '(555) 123-4567',
    address: 'Your Address Here',
  },
}

export const navigation = {
  main: [
    { name: 'Products', href: '/product' },
    { name: 'Technology', href: '/technology' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ],
  footer: {
    product: [
      { name: 'Features', href: '/product#features' },
      { name: 'Specifications', href: '/product#specs' },
      { name: 'Pricing', href: '/product#pricing' },
      { name: 'Mobile App', href: '/product#app' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/about#careers' },
    ],
    resources: [
      { name: 'Documentation', href: '/faq' },
      { name: 'Support', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
}

export const company = {
  name: 'TrailSense',
  legalName: 'TrailSense, Inc.',
  founded: '2024',
  type: 'S Corporation',
  tagline: 'Professional-grade security for remote properties',
}
