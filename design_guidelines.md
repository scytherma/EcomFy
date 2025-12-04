# EcomFy E-Commerce Course - Enhanced Design Guidelines

## Design Approach
**Reference-Based**: Brazilian high-conversion course landing pages (ecodropbr.com.br style) with modern visual effects, bold aesthetics prioritizing social proof, urgency, and conversion optimization.

## Color Palette & Visual Treatment
- **Primary Purple**: #A855F7 (vibrant, used in CTAs, accents, glows)
- **Secondary Purple**: #9333EA (deeper contrast, gradients)
- **Dark Gray**: #1F2937 (backgrounds, text)
- **Charcoal**: #111827 (footer, alternate sections)
- **Success Green**: #10B981 (CTAs, badges, WhatsApp)
- **Gradients**: Purple-to-dark (`from-purple-600 via-purple-700 to-gray-900`), animated gradient backgrounds using CSS keyframes

## Typography
- **Headings**: Poppins (primary), Inter (secondary) - weights 600-800
- **Hero H1**: text-6xl md:text-7xl lg:text-8xl, font-extrabold, gradient text effect
- **Section H2**: text-4xl md:text-5xl, font-bold, tracking-tight
- **Card H3**: text-2xl md:text-3xl, font-semibold
- **Body**: Inter, text-base md:text-lg, font-normal (400-500)

## Layout System
- **Spacing**: Tailwind units 4, 6, 8, 12, 16, 20, 24, 32
- **Container**: max-w-7xl, centered with px-4 md:px-6
- **Section Padding**: py-16 md:py-24 lg:py-32 (generous breathing room)
- **Grid Systems**: 1 column mobile → 2 tablet → 3-4 desktop, gap-6 md:gap-8

## Visual Effects & Animations

### Hero Section Effects
- Animated gradient background shifting between purple hues
- Subtle particle overlay or geometric pattern background
- CTA button: continuous gentle pulse animation, hover scale-105 with purple glow shadow
- Fade-in-up animation on load for headline and CTA (500ms delay stagger)

### Scroll Reveal Animations
- All sections: fade-in-up as they enter viewport (Framer Motion or IntersectionObserver)
- Stagger children animations in grids (100ms delay between items)
- Smooth easing: cubic-bezier(0.4, 0, 0.2, 1)

### Card Hover Effects
- Scale-105 transform on hover with 300ms transition
- Purple glow shadow (shadow-lg → shadow-2xl shadow-purple-500/50)
- Subtle border-t-4 border-purple-500 accent appearing on hover
- Glassmorphism: backdrop-blur-md bg-white/10 for overlay cards

### Interactive Elements
- Buttons: Ripple effect on click, scale-95 on active state
- Badges/Pills: Gentle bounce animation on appearance, pulse for "Últimas Vagas"
- Platform logos: Grayscale default, full color on hover with scale-110
- Icons: Rotate or bounce on hover (subtle, 15deg max rotation)

### Background Treatments
- Alternating sections: gradient backgrounds vs solid with decorative blobs
- Decorative elements: Floating purple orbs with blur, positioned absolute
- Mesh gradient overlays in hero and pricing sections
- Subtle diagonal lines or grid patterns in dark sections

### Countdown Timer
- Large digit displays with flip animation effect
- Pulsing red/orange accent when time is low
- Background glow intensifying as deadline approaches

## Page Structure (Enhanced Visuals)

### 1. Hero Section
- Full-width animated gradient background (purple-600 to gray-900)
- Large hero image: laptop showing dashboard overlaid with transparent purple gradient, positioned right side on desktop
- Headline with gradient text effect (purple to white)
- Floating badge "2000+ Alunos Aprovados" with gentle float animation
- Primary CTA with continuous pulse, secondary CTA with glass effect
- Scroll indicator arrow with bounce animation

### 2. Platform Showcase
- 4-column grid with glassmorphic cards
- Platform logos (Shopee, Mercado Livre, Amazon, TikTok) with hover color reveal
- Staggered fade-in animation on scroll
- Purple accent border-top on each card

### 3. Course Objectives
- Two-column layout: left text, right visual (dashboard screenshot or animated mockup)
- Checkmark icons with scale-in animation as they appear
- Background with subtle diagonal purple gradient overlay

### 4. Mentors Section (Diogo & Oliveira)
- Two-column cards with professional photos
- Purple gradient overlay on images (bottom-to-top)
- Social proof numbers with count-up animation on scroll
- Hover effect: image brightness increase, card scale-102

### 5. Course Modules
- 3-column masonry grid (6-8 cards)
- Icons with rotating animation on hover
- Purple glow appearing on hover
- Modal preview on click with smooth scale-in transition

### 6. What's Included
- Large checklist with animated checkmarks (draw-in SVG animation)
- Numbers count-up animation (150+ aulas, 50+ módulos)
- Background pattern with animated dots or lines

### 7. Exclusive Bonuses
- 3-column cards with gift icons
- Cards flip or lift on hover revealing more details
- Sparkle/shine effect sweeping across cards periodically
- "Bônus Exclusivo" badges with pulse animation

### 8. Testimonials & Results
- Masonry/carousel layout with 3 columns
- Screenshot-style cards with glassmorphic overlay
- Revenue numbers with count-up animation
- "R$50M+ faturamento" callout with animated gradient background

### 9. Pricing Section
- Centered large card with glassmorphic treatment
- Strike-through price with scale animation
- Current price in large purple gradient text
- Countdown timer with flip digits and urgency glow
- Dual CTAs: "Garantir Vaga" (pulsing purple) and "Falar WhatsApp" (green with icon)
- Floating "Últimas Vagas" badge with urgent pulse

### 10. FAQ
- Accordion with smooth expand/collapse (accordion-down/up animations)
- Purple accent border-left when expanded
- Icons rotate 180deg on expand
- Alternating subtle background colors

### 11. Footer
- Dark background (#111827) with subtle gradient overlay
- Three columns: About, Links, Contact (stack on mobile)
- Social icons with hover scale-110 and color change
- Newsletter input with purple focus ring and glow
- Floating "back to top" button with fade-in on scroll

## Component Specifications

### Buttons
- **Primary CTA**: bg-purple-600 hover:bg-purple-700, text-white, px-8 py-4, rounded-lg, shadow-xl hover:shadow-2xl hover:shadow-purple-500/50, hover:scale-105, active:scale-95, font-semibold text-lg, pulse animation
- **Secondary**: bg-white/10 backdrop-blur-md, text-white, border-2 border-white/20, same sizing
- **WhatsApp**: bg-green-500 hover:bg-green-600, WhatsApp icon leading

### Cards
- Base: bg-white rounded-xl p-6 md:p-8, shadow-lg hover:shadow-2xl hover:shadow-purple-500/30
- Glassmorphic: bg-white/10 backdrop-blur-md border border-white/20
- Hover: transform scale-105 transition-all duration-300, border-t-4 border-purple-500

### Badges
- Rounded-full px-4 py-2, bg-purple-600 text-white, text-sm font-semibold
- Pulse animation for urgent badges
- Gentle float animation (translateY -5px to 5px, 2s loop)

## Icons
- **Library**: Lucide React (already installed), Heroicons via CDN fallback
- **Size**: 24px-48px for features, 16px-20px for inline
- **Color**: Purple (#A855F7) for accents, white for dark backgrounds
- **Animations**: Hover rotate/scale, scroll fade-in

## Images
Include images decisively:
- **Hero**: Large professional image of young entrepreneurs with laptops, overlaid with purple gradient (positioned right 50% of hero on desktop, full-width background on mobile)
- **Mentors**: Professional headshots of Diogo and Oliveira with purple gradient overlay
- **Platforms**: Official logos (Shopee, Mercado Livre, Amazon, TikTok Shop)
- **Dashboard**: Screenshot of course member area/sales interface
- **Testimonials**: Student avatars/photos (circular crops)
- **Bonus Graphics**: Gift boxes, exclusive badges, certificate graphics

## Key Principles
1. **High Conversion**: Every element reinforces urgency, social proof, transformation
2. **Visual Hierarchy**: Bold gradients, large CTAs, clear sections
3. **Motion Design**: Purposeful animations enhance engagement without distraction
4. **Trust Building**: Transparency, real results, mentor presence
5. **Mobile-First**: All effects scale gracefully, touch-friendly interactions