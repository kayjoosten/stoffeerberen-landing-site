# Stoffeerberen Landing Site

> Professional floor installation company landing page built with Next.js, TypeScript, and Tailwind CSS

## 📋 Project Overview

This is a modern, responsive landing page for **Stoffeerberen**, a professional floor installation company based in the Netherlands. The website showcases their services including PVC flooring, carpet installation, floor repair, leveling, and stair covering.

## 🚀 Features

- **Modern Design**: Clean, professional design with blue branding
- **Responsive Layout**: Fully responsive design that works on all devices
- **Services Showcase**: Detailed presentation of all flooring services
- **Process Timeline**: Interactive 6-step process visualization
- **Contact Integration**: Direct contact and quote request functionality
- **Performance Optimized**: Static site generation for fast loading
- **Accessibility**: Built with accessibility best practices
- **Mobile Navigation**: Collapsible mobile menu

## 🛠 Tech Stack

### Core Technologies
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React version with new features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components & Design System
- **Radix UI** - Accessible, unstyled UI components
- **Shadcn/ui** - Re-usable components built on Radix UI
- **Lucide React** - Modern icon library
- **Next Themes** - Theme switching support
- **Class Variance Authority** - Component variant management

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema declaration and validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### Additional Libraries
- **Date-fns** - Modern JavaScript date utility library
- **Embla Carousel** - Lightweight carousel library
- **Recharts** - Composable charting library
- **Sonner** - Toast notification system
- **Vaul** - Mobile drawer component

## 📁 Project Structure

```
stoffeerberen-landing-site/
├── app/                    # Next.js App Router
│   ├── privacy/           # Privacy policy page
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Homepage component
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   ├── layout/           # Layout components (Header, Footer)
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
│   ├── use-toast.ts      # Toast notification hook
│   └── use-mobile.tsx    # Mobile detection hook
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities (cn function)
├── public/               # Static assets
├── styles/               # Additional stylesheets
├── .zencoder/           # Zencoder AI assistant configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── components.json      # Shadcn/ui configuration
├── ecosystem.config.js  # PM2 process manager configuration
└── nginx.conf          # Nginx server configuration
```

## 🏗 Services Featured

1. **PVC Flooring** - Professional PVC floor installation in various patterns (herringbone, Hungarian point)
2. **Carpet Flooring** - All types of carpet installation from low-pile to high-pile
3. **Floor Demolition** - Professional floor removal with recycling
4. **Floor Repair** - From small repairs to major restorations
5. **Floor Leveling** - Expert floor leveling for perfect foundations
6. **Stair Covering** - Sound-dampening materials including PVC and carpet

## 🔄 Installation Process

The website showcases a 6-step process:

1. **Initial Consultation** - Understanding client needs and budget
2. **On-site Measurement** - Accurate measurements and condition assessment
3. **Material Selection** - Choosing from premium flooring materials
4. **Quote Provision** - Clear pricing with no hidden costs
5. **Professional Installation** - Expert installation by skilled craftsmen
6. **Delivery** - Final presentation with 10-year guarantee

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stoffeerberen-landing-site
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 🏗 Build & Deployment

### Static Export

The project is configured for static export:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

### Production Deployment

1. **Build the application**:
```bash
pnpm build
```

2. **Deploy using PM2** (configured in ecosystem.config.js):
```bash
pm2 start ecosystem.config.js
```

3. **Nginx Configuration**: Use the provided nginx.conf for web server setup

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#2563eb) - Company branding color
- **Secondary**: Various neutral tones for content
- **Accent Colors**: Service-specific background colors (red, stone, slate, orange, gray)

### Typography
- **Headings**: Bold, tracking-tight fonts for impact
- **Body**: Clean, readable text with proper contrast
- **UI Elements**: Consistent spacing and sizing

### Components
- **Buttons**: Primary blue buttons with hover states
- **Cards**: Clean service cards with colored headers
- **Navigation**: Sticky header with mobile-responsive menu
- **Process Steps**: Timeline layout with numbered steps

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS responsive utilities
- **Collapsible navigation** for mobile devices
- **Flexible grid layouts** that adapt to screen sizes
- **Touch-friendly interactions** for mobile users

## 🔧 Configuration Files

- **next.config.js**: Next.js configuration with static export
- **tailwind.config.ts**: Custom Tailwind configuration with design tokens
- **tsconfig.json**: TypeScript compiler options
- **components.json**: Shadcn/ui component configuration
- **ecosystem.config.js**: PM2 process manager configuration

## 📄 Key Features Implementation

### Mobile Menu
- State-managed collapsible navigation
- Smooth scrolling to page sections
- Accessible menu toggle button

### Hero Section
- Compelling headline and value proposition
- Call-to-action buttons
- Feature highlights with icons
- Hero image showcase

### Services Grid
- Responsive 3-column layout
- Color-coded service categories
- Hover effects for interactivity

### Process Timeline
- Alternating left/right layout on desktop
- Numbered step indicators
- Visual timeline connector

### Contact Integration
- Smooth scrolling to contact section
- Quote request functionality
- Multiple contact methods

## 🔒 Privacy & Legal

- Privacy policy page included (`/privacy`)
- GDPR-compliant design considerations
- Professional business presentation

## 📈 Performance Optimizations

- **Static Site Generation**: Fast loading times
- **Image Optimization**: Next.js Image component (unoptimized for static export)
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size

## 🏷 Business Information

- **Company**: Stoffeerberen
- **Industry**: Floor Installation & Renovation
- **Location**: Netherlands
- **Experience**: 5+ years
- **Guarantee**: 10-year warranty on installations
- **Specialties**: PVC flooring, carpet installation, floor repair, leveling, stair covering

## 🤝 Contributing

This is a commercial project for Stoffeerberen. For modifications or enhancements, please follow the established code structure and design patterns.

## 📞 Support

For technical support or project inquiries, refer to the contact information provided on the website.

---

**Last Updated**: January 2025
**Version**: 0.1.0
**Framework**: Next.js 15.2.4
**License**: Private Commercial Project