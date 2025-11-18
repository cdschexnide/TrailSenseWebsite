# TrailSense Company Website

A professional, production-grade Next.js website for TrailSense - a property security technology company specializing in passive mobile device detection through multi-band wireless monitoring.

## 🚀 Project Overview

This is a modern, fully-responsive marketing website built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases TrailSense's innovative detection hardware and mobile app, explains the technology, and facilitates quote requests and customer inquiries.

### Key Features

- **7 Complete Pages**: Home, Product, Technology, Solutions, About, FAQ, Contact
- **Earth Tone Design**: Professional nature-inspired color palette (greens, browns, sage)
- **Fully Responsive**: Mobile-first design optimized for all screen sizes
- **SEO Optimized**: Complete metadata, Open Graph tags, semantic HTML
- **Form Integration**: Quote request and contact forms with Formspree
- **Accessible**: WCAG AA compliant with proper ARIA labels
- **Performance**: Optimized images, lazy loading, Core Web Vitals ready
- **Type-Safe**: Strict TypeScript throughout

## 📦 Tech Stack

- **Framework**: Next.js 14.1+ with App Router
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 3.4+
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animation**: Framer Motion (installed, ready to use)
- **Deployment**: Vercel/Netlify ready

## 🏗️ Project Structure

```
TrailSenseWebsite/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx             # Root layout with SEO metadata
│   ├── page.tsx               # Homepage
│   ├── product/               # Product page
│   ├── technology/            # Technology deep-dive
│   ├── solutions/             # Use cases
│   ├── about/                 # Company info
│   ├── faq/                   # FAQ page
│   ├── contact/               # Contact & quote forms
│   └── globals.css            # Global styles + Tailwind
│
├── components/
│   ├── ui/                    # shadcn/ui components (Button, Card, etc.)
│   ├── layout/                # Header, Footer
│   ├── sections/              # Homepage sections (Hero, Features, etc.)
│   └── forms/                 # QuoteForm, ContactForm
│
├── lib/
│   ├── utils.ts               # Utility functions (cn, etc.)
│   └── data/
│       ├── site-config.ts     # Site-wide configuration
│       └── form-config.ts     # Formspree endpoints
│
├── public/
│   ├── images/                # Image assets (add product photos here)
│   └── icons/                 # Icons and favicons
│
├── types/                      # TypeScript type definitions
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd TrailSenseWebsite
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Configure Formspree** (for contact forms):
   - Go to [formspree.io](https://formspree.io) and create a free account
   - Create two forms: one for "Quote Requests" and one for "General Contact"
   - Copy your form IDs
   - Edit `lib/data/form-config.ts` and replace the placeholder IDs:
     ```typescript
     export const formConfig = {
       quote: {
         endpoint: 'https://formspree.io/f/YOUR_QUOTE_FORM_ID',
       },
       contact: {
         endpoint: 'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
       },
     }
     ```

4. **Update site configuration**:
   - Edit `lib/data/site-config.ts` to update contact info, URLs, etc.

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The site should be running!

### Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Color Palette

The site uses a professional nature/earth tone palette:

- **Primary Green**: `#16a34a` (buttons, links, accents)
- **Sage Green**: `#84a98c` (secondary elements)
- **Earth Browns**: `#44403c` (headings), `#78716c` (body text)
- **Clay/Terracotta**: `#c77b58` (warm accents, CTAs)
- **Backgrounds**: White, `#f0fdf4` (light green), `#fafaf9` (warm gray)

All colors are WCAG AA accessible.

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, earth-900
- **Body**: Regular, earth-600/700
- **Base Size**: 16px (1rem)

### Components

The site uses shadcn/ui components which are highly customizable:

- `Button` - 3 variants (default, outline, ghost), 4 sizes
- `Card` - For feature highlights, use cases
- `Input`, `Textarea`, `Select` - Form components
- `Accordion` - For FAQ, collapsible content

## 📄 Page Overview

### Homepage (`/`)
- Hero section with value proposition
- 6 key features with icons
- "How It Works" 4-step process
- 6 use case cards
- Call-to-action section

### Product (`/product`)
- Product specifications
- Three-band detection system explanation
- Hardware details with accordion
- Mobile app feature showcase
- Pricing information

### Technology (`/technology`)
- Deep dive into cellular, WiFi, Bluetooth detection
- Technical specifications
- Threat classification algorithms
- Privacy & security information
- Technical FAQ

### Solutions (`/solutions`)
- 6 detailed use cases:
  1. Rural Property & Farm Monitoring
  2. Trail Systems & Access Point Security
  3. Wildlife Area Protection
  4. Construction Site Oversight
  5. Campground & RV Park Management
  6. Private Road & Gate Monitoring

### About (`/about`)
- Company mission and values
- Problem/solution narrative
- Company information (S Corp, founding)
- Core values section

### FAQ (`/faq`)
- 20+ questions organized by category:
  - Technology & How It Works
  - Legal & Privacy
  - Installation & Setup
  - Pricing & Costs
  - Features & Capabilities

### Contact (`/contact`)
- Quote request form (detailed, with property info)
- General contact form
- Contact information cards
- FAQ teaser section

## 🔧 Customization Guide

### Adding Images

1. Place product photos in `public/images/`
2. Update placeholders in:
   - Homepage hero (`app/page.tsx`)
   - Product page (`app/product/page.tsx`)
3. Use Next.js `<Image>` component for optimization:
   ```tsx
   import Image from 'next/image'

   <Image
     src="/images/device-outdoor.jpg"
     alt="TrailSense Detection Unit"
     width={1200}
     height={800}
     priority  // For above-fold images
   />
   ```

### Updating Content

All marketing copy is in the page files (`app/*/page.tsx`). Edit directly:

- **Company info**: `lib/data/site-config.ts`
- **Navigation**: `lib/data/site-config.ts` → `navigation` object
- **Product specs**: `app/product/page.tsx`
- **FAQ answers**: `app/faq/page.tsx`

### Adding a New Page

1. Create directory: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Add metadata and content:
   ```tsx
   import { Metadata } from 'next'

   export const metadata: Metadata = {
     title: 'Page Title',
     description: 'Page description for SEO',
   }

   export default function NewPage() {
     return <div>Your content</div>
   }
   ```
4. Add to navigation in `lib/data/site-config.ts`

### Styling Customizations

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Fonts**: Update `app/layout.tsx` (Google Fonts via `next/font`)
- **Global styles**: Edit `app/globals.css`
- **Component styles**: Edit individual component files in `components/`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel auto-detects Next.js and configures build settings
5. Click "Deploy"

That's it! Vercel handles everything automatically.

### Deploy to Netlify

1. Push code to Git
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy"

### Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env.local` for local development:
   ```
   NEXT_PUBLIC_SITE_URL=https://trailsense.com
   ```
2. Add to Vercel/Netlify dashboard under "Environment Variables"

## ⚡ Performance Optimization

The site is already optimized, but for further improvements:

1. **Add real product images**:
   - Use WebP/AVIF formats
   - Compress with tools like TinyPNG
   - Use `next/image` for automatic optimization

2. **Lazy load below-fold content**:
   ```tsx
   import dynamic from 'next/dynamic'
   const HeavyComponent = dynamic(() => import('./HeavyComponent'))
   ```

3. **Add analytics**:
   - Google Analytics: Install `@next/third-parties`
   - Plausible/Fathom: Add script to `layout.tsx`

4. **Cache optimization**:
   - Vercel automatically configures optimal caching
   - For custom hosting, configure CDN properly

## 📝 Content Management

### Updating Marketing Copy

All copy is in TypeScript files for type safety and version control. To update:

1. **Homepage**: Edit `app/page.tsx` and section components in `components/sections/`
2. **Product specs**: Edit `app/product/page.tsx`
3. **FAQ**: Edit `app/faq/page.tsx` → `faqCategories` array
4. **Use cases**: Edit `app/solutions/page.tsx` → `solutions` array

### Form Submissions

Forms submit to Formspree. To view submissions:
1. Log in to [formspree.io](https://formspree.io)
2. View submissions in your dashboard
3. Configure email notifications
4. Export data as needed

## 🛠️ Troubleshooting

### Forms not working

- Check Formspree form IDs in `lib/data/form-config.ts`
- Verify endpoints in Formspree dashboard
- Check browser console for errors

### Build errors

- Delete `.next` folder: `rm -rf .next`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall: `npm install`
- Build again: `npm run build`

### TypeScript errors

- Check for missing type definitions
- Run `npm run lint` to see all errors
- Most common: missing `alt` props on images, undefined variables

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Formspree Documentation](https://help.formspree.io)
- [Vercel Deployment](https://vercel.com/docs)

## 🎯 Next Steps

1. **Replace placeholder images** with actual product photography
2. **Configure Formspree** with your form IDs
3. **Update company contact info** in `lib/data/site-config.ts`
4. **Test forms** by submitting test data
5. **Deploy to Vercel/Netlify**
6. **Set up custom domain** in hosting dashboard
7. **Add Google Analytics** (optional)
8. **Test on real devices** (mobile, tablet, desktop)

## 📞 Support

For questions about this website codebase:
- Review this README
- Check Next.js documentation
- Review component source code (well-commented)

For TrailSense product questions:
- Visit the website FAQ page
- Contact: info@trailsense.com

---

**Built with ❤️ by Claude Code for TrailSense, Inc.**

*Last Updated: November 2024*
