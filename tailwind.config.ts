import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Surfaces
        'bg-deepest': '#0A0C06',
        'bg-surface': '#14160E',
        'bg-elevated': '#1F2218',
        'bg-elevated-2': '#2A2D20',
        'bg-olive': '#4A4B30',
        'bg-olive-deep': '#393A23',

        // Text
        'fg-primary': '#ECE6D6',
        'fg-secondary': '#C5BFAB',
        'fg-muted': '#9A9678',
        'fg-disabled': '#5C5945',

        // Accents
        gold: {
          DEFAULT: '#E0B341',
          hover: '#EDC256',
          soft: 'rgba(224, 179, 65, 0.14)',
        },
        khaki: '#B8A878',
        'status-active': '#6BBF59',
        'status-critical': '#D45B4F',

        // Borders
        hairline: '#38392A',
        'border-bright': '#4D4E36',

        // shadcn passthrough (mapped to our tokens)
        border: '#38392A',
        input: '#38392A',
        ring: '#E0B341',
        background: '#0A0C06',
        foreground: '#ECE6D6',
        primary: {
          DEFAULT: '#E0B341',
          foreground: '#0A0C06',
        },
        secondary: {
          DEFAULT: '#1F2218',
          foreground: '#ECE6D6',
        },
        destructive: {
          DEFAULT: '#D45B4F',
          foreground: '#ECE6D6',
        },
        muted: {
          DEFAULT: '#14160E',
          foreground: '#9A9678',
        },
        accent: {
          DEFAULT: '#E0B341',
          foreground: '#0A0C06',
        },
        popover: {
          DEFAULT: '#14160E',
          foreground: '#ECE6D6',
        },
        card: {
          DEFAULT: '#14160E',
          foreground: '#ECE6D6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cabinet Grotesk', 'sans-serif'],
        sans: ['var(--font-body)', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Geist Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        'display-tight': '-0.02em',
        'display-snug': '-0.01em',
        spaced: '0.08em',
        'spaced-wide': '0.14em',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '6px',
      },
      maxWidth: {
        container: '1440px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'pulse-dot': 'pulse 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
