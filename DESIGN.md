# Design System — TrailSense

## Product Context
- **What this is:** Marketing site for TrailSense, a precision security instrument company that sells passive multi-band RF perimeter detection hardware (cellular + WiFi + Bluetooth) and a companion mobile app.
- **Who it's for:** Large-acreage owners (ranches, hunting/game preserves), conservation reserves, industrial sites (solar, oil, telecom), and tactical/law-enforcement teams.
- **Memorable thing:** "Precision security instrument." Engineered, technical, defense-grade.
- **Reference language:** Anduril, Shield AI, Saronic — but distinctive via the brand's olive + cream + field-gold palette (no defense-tech site uses this combination).

## Aesthetic Direction
- **Direction:** Defense-tech minimal, brand-warmed.
- **Decoration level:** Intentional — subtle topographic texture, mono coordinate labels, crosshair detail. No decoration for its own sake.
- **Mood:** Field-tested instrument made for olive-military environments. The site reads as a calibrated piece of equipment, not a marketing object.
- **Reference sites:** anduril.com, saronic.com, shield.ai (visual posture), avoiding senstar.com / industrial-baseline category competitors.

## Typography
- **Display / Hero:** `Cabinet Grotesk` (weights 500 / 700 / 800 / 900). Geometric, condensed-confident. Used for h1–h4, hero stats, footer wordmark.
- **Body / UI:** `Geist` (weights 300 / 400 / 500 / 600 / 700). Vercel's grotesque. Excellent tabular-nums.
- **Data / Mono:** `Geist Mono` (weights 400 / 500 / 600). All specs, frequencies, coordinates, IDs, status labels, eyebrow tags. Letter-spacing 0.08em for small all-caps labels.
- **Loading:** Bunny Fonts CDN (privacy-respecting Google Fonts mirror). `https://fonts.bunny.net/css?family=geist:300,400,500,600,700|geist-mono:400,500,600|cabinet-grotesk:500,700,800,900`
- **Forbidden as primary:** Inter, Roboto, Helvetica, Space Grotesk, Arial, Open Sans, Lato, Montserrat, Poppins (slop / converged-on).
- **Letter-spacing scale:** display tightened to `-0.02em` to `-0.005em`; small caps labels `0.08em`; nav `0.14em`.

### Modular Scale (1.250)
| Token | Size | Use |
|-------|------|-----|
| `text-xs` | 11px | small caps labels, mono tags |
| `text-sm` | 13px | secondary copy, button labels |
| `text-base` | 16px | body |
| `text-lg` | 18px | lede |
| `text-xl` | 22px | h4 |
| `text-2xl` | 32px | h3 |
| `text-4xl` | 48px | h2 |
| `text-6xl` | 64–76px | h1 / hero (clamp) |

## Color
All values pulled from the company logo (olive military bg + dark badge + khaki path) and the existing mobile app (black canvas + field-gold active state).

| Token | Hex | Use |
|-------|-----|-----|
| `bg-deepest` | `#0A0C06` | Page background. Reads near-black, slightly olive-warm. |
| `bg-surface` | `#14160E` | Cards, sections. |
| `bg-elevated` | `#1F2218` | Hover states, raised elements. |
| `bg-elevated-2` | `#2A2D20` | Higher elevation. |
| `bg-olive` | `#4A4B30` | Logo's olive — feature panels, quote blocks, brand-voice sections. |
| `bg-olive-deep` | `#393A23` | Darker olive variant. |
| `text-primary` | `#ECE6D6` | Warm cream off-white. Primary text. |
| `text-secondary` | `#C5BFAB` | Light tan. Secondary copy. |
| `text-muted` | `#9A9678` | Warm muted. Captions, labels. |
| `text-disabled` | `#5C5945` | Disabled / very-muted text. |
| `accent-gold` | `#E0B341` | **Field gold.** Primary accent. CTAs, alerts, key data. Matches mobile app's active state. |
| `accent-khaki` | `#B8A878` | Logo's trail/path khaki. Coordinates, secondary mono labels. |
| `accent-active` | `#6BBF59` | Status: scanning / online. |
| `accent-critical` | `#D45B4F` | Status: critical alert. |
| `border-hairline` | `#38392A` | 1px rules. |
| `border-bright` | `#4D4E36` | Brighter borders, hover. |

**Color rules:**
- Field gold (`#E0B341`) is the only "color color" used liberally on the page. It carries CTAs, hero accents, eyebrow tags, status indicators, and key spec values.
- Khaki (`#B8A878`) carries the trail/coordinates motif. Used for lat/lon labels and surveying-style captions.
- Olive panel (`#4A4B30`) appears once or twice per page max — used for quote/testimonial/brand-voice moments.
- Active green and critical red are reserved exclusively for status dots — never for body text or decoration.

## Spacing
- **Base unit:** 4px.
- **Density:** Compact. Instrumentation, not magazine.
- **Scale:** `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`.
- **Section padding (vertical):** 96px top + bottom for body sections; 120px for hero.
- **Container max-width:** 1440px.
- **Container padding (horizontal):** 32px (24px on mobile).

## Layout
- **Approach:** Hybrid. Editorial hero, grid-disciplined product/spec sections, asymmetric brand panels.
- **Grid:** 12-column intent, but visually expressed via 2 / 3 / 4 column layouts depending on section.
- **Border radius:** 2px (buttons / chips), 4px (cards), 0px on most rules. No bubble-radius.
- **Hairline rules** (`#38392A`) separate sections and divide cards inside grids — not heavy borders.
- **Massive wordmark in footer** (Shield-AI / Saronic move): `font-weight: 900`, `clamp(80px, 18vw, 280px)`, color transparent with 1px outline-stroke in `border-bright`.

## Decoration
- **Subtle topographic texture:** background-only, ~2.5% opacity, multi-radial-gradient ellipses. Suggests USGS contour lines without being illustrative.
- **Section coordinate labels:** small mono `34.0522°N 118.2437°W // PT-A` strings appear as eyebrow text on major sections. Khaki for the lat/lon, gold for the inline reference.
- **Crosshair corners:** thin 14px `┐ └ ┌ ┘` SVG strokes on the hero device card. Suggests targeting / surveying.
- **Telemetry strip:** thin top bar above the header — mono, all caps. `● SCANNING / RF: 2.4GHz · 5.8GHz · LTE / RANGE: 800FT / UNITS DEPLOYED: 2,418 / UPTIME: 99.97%`.
- **NEVER:** purple gradients, 3-column icon-circle feature grids, gradient CTAs, centered-everything, generic stock photos, decorative blobs.

## Motion
- **Approach:** Minimal-functional.
- **Easing:** `ease-out` (entrance), `ease-in-out` (state transitions).
- **Duration:** 150ms (micro), 250ms (short), 400ms (medium).
- **Signature motion:** pulse animation on the active-status dot — `1.6s ease-in-out infinite`, alternating opacity 1 / 0.5 + scale 1 / 1.4 with phosphor-green glow.
- **No scroll-jacking, no parallax, no entrance animations beyond a single fade-in for above-the-fold elements.**

## Components

### Buttons
- **Primary:** `bg-accent-gold` text on `bg-deepest`. 14px / 24px padding, 13px uppercase letter-spaced text, 2px radius. Hover `#EDC256`.
- **Ghost:** transparent bg, `border-bright` 1px outline, primary text color. Hover: `bg-elevated`, `border` upgrades to `text-primary`.
- All buttons: uppercase, `0.08em` letter-spacing, 600 weight.

### Cards
- `bg-surface` background, `border-hairline` 1px, 4px radius, hover lifts to `bg-elevated`.
- Eyebrow: mono 11px field-gold uppercase numbered tag (`01 · CELLULAR`).
- Title: Cabinet Grotesk 22px / 700.
- Spec table at the bottom with mono labels and tabular-nums values, separated by hairline rule above.

### Spec Table
- Three-column grid: KEY (mono / muted) | DESCRIPTION (body / primary) | VALUE (mono / right-aligned / tabular-nums).
- Hairline between rows, hover highlights the row in `bg-elevated`.

### Telemetry Strip
- Fixed mono row above header.
- Format: `[label] [value]` pairs separated by `/` glyphs.
- Pulse-dot on the lead "SCANNING" item.

### Olive Panel
- `bg-olive` `#4A4B30` with `bg-olive-deep` `#393A23` border.
- 64px padding.
- Used once per page maximum for brand-voice moments (quotes, manifesto-style statements, primary CTAs paired with copy).

### Logo Lockup
- 36px logo glyph + Cabinet Grotesk 800 wordmark "TRAILSENSE", 12px gap.
- Logo glyph is the existing companyLogo.png (olive bg + black badge + khaki S-trail + RF arcs).
- On dark backgrounds, the logo's olive bg blends naturally — no white box around it.

## Voice / Copy
- **Confident, terse, instrument-flavored.** "Built for property that doesn't fit inside a fence." beats "Securing your perimeter, your way."
- **Use field language:** units, deployed, range, frequency, uptime, sectors. Not "modules," "experiences," "ecosystems."
- **Numbers and specifics:** "500–800ft", "30+ days off-grid", "2,418 units deployed." Never "industry-leading" or "best-in-class."
- **No corporate fillers:** no "leverage," "delve," "robust," "comprehensive," "nuanced," "underscore," "showcase," "fundamental," "pivotal."

## Page Inventory
1. **Home (`/`)** — telemetry strip → header → hero → capabilities → mobile app → olive panel → specifications → use cases → get started (demo + waitlist) → footer.
2. **Product (`/product`)** — deep dive on TS-001 detection unit. Spec sheet, configurations, mounting options.
3. **Technology (`/technology`)** — how passive multi-band detection works. Diagrams.
4. **App (`/app`)** — mobile app feature tour. Compass, route, AI, alerts, dashboard, live radar.
5. **Solutions (`/solutions`)** — sector deep-dives (ranch, conservation, industrial, tactical).
6. **Demo (`/demo`)** — request-a-demo form (name, email, org, property size, threat profile, time preference).
7. **Waitlist (`/waitlist`)** — email-only signup with brief context.
8. **About (`/about`)** — team, founding, mission. Manifesto-flavored.
9. **FAQ (`/faq`)** — accordion of common questions.
10. **Contact (`/contact`)** — contact methods, form, address.
11. **Privacy (`/privacy`), Terms (`/terms`)** — minimally styled legal pages.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-27 | Initial design system created | Pivoted away from generic SaaS earth-tone aesthetic toward defense-tech-minimal grounded in TrailSense's logo (olive + black + khaki) and mobile app (field gold active state). Adds Request-Demo + Waitlist as first-class user paths. |
