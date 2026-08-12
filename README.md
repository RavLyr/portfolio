# Portfolio - Ravly Ramdhani

A modern, minimalist portfolio website showcasing my work as a Backend-focused Full Stack Developer.

## 🎨 Design

- **Style:** Soft Glassmorphism with dark theme
- **Accent:** Blue (#3B82F6)
- **Typography:** Inter font family
- **Animations:** Rich animations with particle effects and smooth transitions
- **Responsive:** Mobile-first, optimized for all screen sizes

## ✨ Features

- Single-page application with smooth scroll navigation
- Particle background effect (simple floating dots)
- 3D Spline orb in hero section
- Featured projects showcase (3 Tier 1 projects)
- Professional experience timeline
- Grouped technical skills display
- Contact form with EmailJS integration
- Social media links
- Accessibility-focused (reduced motion support, keyboard navigation)

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **3D Graphics:** Spline (via @splinetool/react-spline)
- **Email:** EmailJS
- **Font:** Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Inter font
│   ├── page.tsx           # Main page (single-page architecture)
│   └── globals.css        # Global styles & design tokens
├── components/            # React components
│   ├── Navbar.tsx         # Floating glass navbar
│   ├── ParticleBackground.tsx  # Canvas particle effect
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── FeaturedProjects.tsx    # Projects grid
│   ├── ProjectCard.tsx    # Project card component
│   ├── ExperienceTimeline.tsx  # Experience timeline
│   ├── TechnicalSkills.tsx     # Skills grouped by category
│   ├── Contact.tsx        # Contact form + social links
│   ├── ContactForm.tsx    # EmailJS form
│   ├── Footer.tsx         # Footer with social icons
│   ├── SplineOrb.tsx      # 3D Spline orb
│   └── FadeUp.tsx         # Animation wrapper
├── data/                  # Structured content data
│   ├── projects.ts        # Project information
│   ├── experience.ts      # Professional experience
│   ├── skills.ts          # Technical skills
│   └── social.ts          # Social/contact links
├── types/                 # TypeScript type definitions
│   └── index.ts           # Shared types
└── lib/                   # Utilities
    └── animations.ts      # Framer Motion variants

docs/                      # Project documentation
├── 00-project-brief.md    # Project overview
├── 01-persona.md          # Personal branding
├── 02-content.md          # Content guidelines
├── 03-projects.md         # Project details
├── 04-experience.md       # Experience details
├── 05-skills.md           # Skills inventory
├── 06-design-system.md    # Design system specs
├── 07-pages.md            # Site structure
├── 08-implementation.md   # Implementation rules
├── 09-data-structure.md   # Data schemas
└── 10-design-tokens.md    # Complete design tokens
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- npm, pnpm, or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/RavLyr/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your EmailJS credentials from [emailjs.com](https://www.emailjs.com/)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📝 Content Management

All content is managed through structured data files in `src/data/`:

- **Projects:** Edit `src/data/projects.ts` to add/update projects
- **Experience:** Edit `src/data/experience.ts` for work history
- **Skills:** Edit `src/data/skills.ts` for technical skills
- **Social Links:** Edit `src/data/social.ts` for contact info

See `docs/09-data-structure.md` for detailed schemas and validation rules.

## 🎨 Design Customization

Design tokens are defined in:
- `src/app/globals.css` - CSS custom properties
- `docs/10-design-tokens.md` - Complete token documentation

Key customization points:
- **Colors:** Change `--color-brand-blue` in globals.css
- **Typography:** Update font import in `src/app/layout.tsx`
- **Animations:** Adjust variants in `src/lib/animations.ts`
- **Particle Effect:** Configure in `src/components/ParticleBackground.tsx`

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on all interactive elements
- `prefers-reduced-motion` support (disables animations)
- `prefers-contrast` support (high contrast mode)
- ARIA labels where appropriate
- Minimum 4.5:1 color contrast

## 📊 Performance

Target metrics:
- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

Optimizations:
- Server-side rendering with Next.js
- Image optimization (when images added)
- Font optimization via next/font
- Reduced motion support for lower-end devices
- Mobile-optimized particle count (40 vs 80 on desktop)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

**Ravly Ramdhani**
- Email: ravlyb.works@gmail.com
- GitHub: [@RavLyr](https://github.com/RavLyr)
- LinkedIn: [Ravly Ramdhani](https://linkedin.com/in/ravlyramdhani)
- Location: Semarang, Indonesia

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
