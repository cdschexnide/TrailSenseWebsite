'use client'

import { motion } from 'framer-motion'
import { Globe, Linkedin, FileText, Video, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'

// Types
interface LinkItem {
  title: string
  description: string
  href: string
  icon: React.ElementType
  gradient: string
  enabled: boolean
}

// Links configuration
const links: LinkItem[] = [
  {
    title: 'Company Website',
    description: 'Explore our products and solutions',
    href: 'https://www.trailsense.net',
    icon: Globe,
    gradient: 'from-primary-600 to-primary-700',
    enabled: true,
  },
  {
    title: 'LinkedIn',
    description: 'Follow us for company updates',
    href: 'https://www.linkedin.com/company/trailsense%E2%84%A2/',
    icon: Linkedin,
    gradient: 'from-blue-600 to-blue-700',
    enabled: true,
  },
  {
    title: 'Pitch Deck',
    description: 'View our company presentation',
    href: '#', // TODO: Add pitch deck link
    icon: FileText,
    gradient: 'from-clay-500 to-clay-600',
    enabled: true,
  },
  {
    title: 'Product Demo',
    description: 'See TrailSense in action',
    href: '/demo', // Future route for demo video
    icon: Video,
    gradient: 'from-sage-600 to-sage-700',
    enabled: false, // Will enable when demo is ready
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Link Card Component
function LinkCard({ link }: { link: LinkItem }) {
  const Icon = link.icon

  if (!link.enabled) return null

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white border border-earth-200 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        <div className="relative flex items-center gap-4 p-5 sm:p-6">
          {/* Icon */}
          <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-earth-900 group-hover:text-primary-700 transition-colors duration-300">
              {link.title}
            </h3>
            <p className="text-sm text-earth-600 mt-0.5 line-clamp-1">
              {link.description}
            </p>
          </div>

          {/* External link icon */}
          <ExternalLink className="flex-shrink-0 w-5 h-5 text-earth-400 group-hover:text-primary-600 transition-colors duration-300" />
        </div>
      </div>
    </motion.a>
  )
}

// Main Page Component
export default function LinksPage() {
  const enabledLinks = links.filter(link => link.enabled)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="mx-auto max-w-md px-4 py-12 sm:py-16">
        {/* Header/Logo Section */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-10 sm:mb-12"
        >
          {/* Logo/Avatar */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-600 to-sage-700 shadow-lg flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold text-white">TS</span>
          </div>

          {/* Brand Name */}
          <h1 className="text-3xl sm:text-4xl font-bold text-earth-900 mb-3">
            Trail<span className="text-primary-600">Sense</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-earth-600 max-w-sm mx-auto">
            Next-Generation Property Security Through Passive Device Detection
          </p>
        </motion.div>

        {/* Links Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {enabledLinks.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-sm text-earth-500">
            © {new Date().getFullYear()} TrailSense, Inc. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
