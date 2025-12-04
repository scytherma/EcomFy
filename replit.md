# EcomFy E-Commerce Course Landing Page

## Overview

EcomFy is a Brazilian e-commerce course landing page application designed to promote and sell online courses focused on selling across major platforms (Shopee, Mercado Livre, Amazon, and TikTok Shop). The application serves as a high-conversion marketing funnel with bold aesthetics, social proof elements, and urgency-driven design inspired by successful Brazilian course landing pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**: React 18 with TypeScript, using Vite as the build tool for fast development and optimized production builds. Wouter handles lightweight client-side routing.

**UI Component Library**: The application uses shadcn/ui components built on Radix UI primitives, providing accessible and customizable components. Components follow the "new-york" style variant and integrate seamlessly with Tailwind CSS. The component system supports extensive customization through path aliases (`@/components`, `@/lib`, `@/hooks`).

**Styling Approach**: Tailwind CSS with a custom configuration featuring HSL-based color system and CSS variables for theming. The design system emphasizes:
- Purple-based color palette (#A855F7 primary, #9333EA secondary) with success green (#10B981) for CTAs
- Bold typography using Inter and Poppins fonts with weights 600-900
- Custom border radius values (9px, 6px, 3px)
- Generous spacing (py-16 to py-32) and responsive grid systems
- Visual effects including animated gradients, scroll reveal animations, hover effects with purple glows, and glassmorphism

**Animation System**: Framer Motion for scroll-reveal animations and interactive effects. Design guidelines specify fade-in-up animations with staggered children, hover scale transformations, and continuous pulse effects on CTAs.

**State Management**: TanStack Query (React Query) manages server state with configured defaults for query behavior (no refetch on window focus, infinite stale time). React Hook Form with Zod validation handles form state and validation logic.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in ESM module format. The server integrates Vite middleware in development for hot module replacement and serves static assets in production.

**API Design**: RESTful JSON API with two primary endpoints:
- `POST /api/contact` - Creates contact leads with Zod validation
- `GET /api/contact` - Retrieves all contact leads (admin functionality)

**Request Processing**: Custom middleware pipeline including request logging with duration tracking, JSON parsing with raw body capture (for potential webhook integrations), and centralized error handling that returns user-friendly Portuguese error messages.

**Development Integration**: Custom Vite setup with development-specific plugins (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer for Replit environment) and production static file serving.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL dialect with type-safe queries and schema-driven migrations. Migration files output to `./migrations` directory.

**Database Provider**: Neon serverless PostgreSQL (`@neondatabase/serverless`) configured via `DATABASE_URL` environment variable.

**Schema Design**:
- `users` table - Authentication placeholder with username/password fields (not fully implemented)
- `contact_leads` table - Captures prospect information including name, email, phone, message, and timestamp for lead generation

**Session Infrastructure**: PostgreSQL session storage configured via `connect-pg-simple`, though full authentication is not yet implemented.

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives (accordion, dialog, dropdown, popover, toast, etc.)
- shadcn/ui component system with "new-york" style
- Embla Carousel for carousels
- cmdk for command menus

**Form & Validation**:
- React Hook Form for form state management
- Zod for runtime schema validation
- @hookform/resolvers for integration
- drizzle-zod for database schema to Zod conversion

**Animation & Interaction**:
- Framer Motion for animations
- class-variance-authority and clsx for conditional styling

**Icons**:
- Lucide React for general icons
- react-icons/si for platform logos (Shopee, Amazon, TikTok)

**Database**:
- Neon serverless PostgreSQL
- Drizzle ORM for type-safe queries
- connect-pg-simple for session storage

**Typography**:
- Google Fonts (Inter and Poppins families)
- Font weights: 400-500 for body, 600-900 for headings

**Development Tools**:
- tsx for TypeScript execution
- esbuild for server bundling
- Replit-specific plugins for development environment integration

**Build & Deployment**:
- Vite for frontend bundling with custom configuration for client directory
- Path aliases for clean imports (@/, @shared/, @assets/)
- Separate build outputs (dist/public for frontend, dist/ for backend)