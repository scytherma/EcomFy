# EcomFy E-Commerce Course - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by high-converting Brazilian course landing pages (ecodropbr.com.br style) with modern, bold aesthetics that prioritize social proof and urgency.

## Color Palette
- **Primary Purple**: #A855F7 (medium-light, vibrant)
- **Secondary Purple**: #9333EA (slightly deeper for contrast)
- **Dark Gray**: #1F2937 (backgrounds, text)
- **Charcoal**: #111827 (footer, accent sections)
- **White**: #FFFFFF (text on dark, card backgrounds)
- **Success Green**: #10B981 (CTAs, badges)

## Typography
- **Headings**: Inter or Poppins (bold, 600-800 weight)
- **Body**: Inter (400-500 weight)
- **Hierarchy**:
  - Hero H1: text-5xl to text-7xl, font-bold
  - Section H2: text-4xl to text-5xl, font-bold
  - Card H3: text-2xl to text-3xl, font-semibold
  - Body: text-base to text-lg

## Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- **Container**: max-w-7xl for most sections
- **Section Padding**: py-16 to py-24 (desktop), py-12 (mobile)
- **Grid Columns**: 1 (mobile) → 2 (tablet) → 3-4 (desktop)

## Page Structure (9-11 Sections)

### 1. Hero Section
- Full-width with gradient background (purple to dark gray)
- Large headline emphasizing transformation
- Subheadline about the 4 platforms (Shopee, ML, Amazon, TikTok Shop)
- Large CTA button with purple background
- Hero image showing laptop/mobile with platform logos or mentors
- Trust indicators: "2000+ alunos" badge

### 2. Platform Showcase
- 4-column grid on desktop (2 on tablet, 1 on mobile)
- Platform logos/icons for Shopee, Mercado Livre, Amazon, TikTok Shop
- Brief description under each
- Purple accent borders or backgrounds

### 3. Course Objective
- Two-column layout: text + image/graphic
- Bold headline "O Que Você Vai Aprender"
- Bullet points with checkmark icons
- Supporting image of dashboard/sales interface

### 4. Meet the Mentors (Diogo & Oliveira)
- Two-column grid with professional photos
- Name, title, brief bio for each
- Social proof numbers (years experience, sales generated)
- Purple accent gradient overlays on photos

### 5. Course Modules
- 3-column card grid
- 6-8 module cards with icons
- Module title, lesson count, brief description
- Hover effects with purple glow

### 6. What's Included
- Checklist-style layout
- Large checkmarks in purple
- "150+ aulas práticas", "50+ módulos", etc.
- Background with subtle pattern or gradient

### 7. Exclusive Bonuses
- 3-column grid of bonus items
- Gift/star icons
- "Lista de Produtos", "Suporte VIP", "Grupos Exclusivos"
- Purple border highlights

### 8. Student Results / Testimonials
- Masonry grid or 3-column layout
- Screenshot-style cards with results
- Names, photos, revenue numbers
- "R$50M+ em faturamento" stat callout

### 9. Pricing Section
- Centered, large focus
- Strike-through original price
- Highlighted discount price in purple
- Payment options (12x installments + cash)
- Two CTAs: "Garantir Vaga" and "Falar no WhatsApp"
- Urgency badge "Últimas Vagas"

### 10. FAQ
- Accordion-style expandable items
- 6-8 common questions
- Purple accent when expanded
- Icons for each question category

### 11. Footer
- Dark background (#111827)
- Three-column layout: About, Links, Contact
- Social media icons
- Legal disclaimer text
- Newsletter signup
- "Desenvolvido por" credit

## Component Library

### Buttons
- **Primary CTA**: Purple background (#A855F7), white text, rounded-lg, px-8 py-4, font-semibold, shadow-xl, hover:scale-105
- **Secondary**: White background, purple text, purple border, same sizing
- **WhatsApp**: Green background (#10B981), white text, WhatsApp icon

### Cards
- White background, rounded-xl, p-6 to p-8
- Subtle shadow (shadow-lg)
- Hover: transform scale-105, purple glow shadow
- Border optional or purple accent border-t-4

### Icons
- Use Heroicons via CDN
- Size: 24px to 48px for features
- Purple color (#A855F7) for accents

### Badges/Pills
- Small rounded-full chips
- Purple background, white text
- "Novo", "Popular", "Bônus Exclusivo"

## Images
Include images decisively:
- **Hero**: Large background image of young entrepreneurs working on laptops, or mentor photos with overlay gradient
- **Mentors**: Professional headshots of Diogo and Oliveira
- **Platform Logos**: Shopee, Mercado Livre, Amazon, TikTok Shop official logos
- **Course Dashboard**: Screenshots of member area
- **Student Results**: Blurred screenshots of sales dashboards (maintaining privacy)
- **Testimonials**: Student photos/avatars

## Animations
- Minimal, purposeful animations only
- Hero CTA: subtle pulse effect
- Cards: hover lift (scale-105) with smooth transition
- Scroll reveal: fade-in-up for sections (IntersectionObserver)
- No distracting parallax or excessive motion

## Key Design Principles
1. **Urgency & Scarcity**: Limited spots, countdown timers, "últimas vagas"
2. **Social Proof**: Student numbers, revenue generated, testimonials throughout
3. **Visual Hierarchy**: Large CTAs, bold headlines, clear section breaks
4. **Trust**: Mentor transparency, real results, money-back guarantee badge
5. **Mobile-First**: All sections stack gracefully on mobile, touch-friendly buttons

This creates a high-converting, visually striking landing page that impresses both potential students and the course owners with professional polish and strategic persuasion elements.