# 🚀 Milan Madusanka - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my learning journey as a junior developer transitioning to DevOps, with realistic project examples and honest skill representation.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4)

## 🌟 Features

- **🎨 Clean Design**: Professional UI optimized for readability and ATS screening
- **🚀 Performance Optimized**: Built with Next.js 15 for fast loading and modern development
- **📱 Fully Responsive**: Works seamlessly across all devices
- **🎭 Smooth Animations**: Tasteful GSAP and Framer Motion animations
- **🌓 Dark/Light Mode**: Theme switching with accessibility in mind
- **📧 Contact Integration**: Direct links to email, LinkedIn, and GitHub
- **⚡ Real Projects**: Honest showcase of actual work and learning projects
- **🎯 ATS Optimized**: Keywords and structure optimized for applicant tracking systems
- **♿ Accessible**: WCAG compliant with proper semantic markup

## 🎯 Portfolio Philosophy

This portfolio is built on **honesty and credibility**, featuring:
- **Realistic Experience**: Accurately represents 1.5+ years of development experience
- **Genuine Projects**: Real work contributions and learning projects, not inflated claims
- **Learning Transparency**: Clear distinction between proficient skills and areas of growth
- **Professional Messaging**: Appropriate for junior-level positions in development and DevOps

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icon library
- **[Class Variance Authority](https://cva.style/)** - Component variant management

### Animations & Interactions
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[GSAP](https://greensock.com/gsap/)** - Professional animation library
- **[Three.js](https://threejs.org/)** - 3D graphics and WebGL
- **[Vanta.js](https://www.vantajs.com/)** - Animated backgrounds

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 📁 Project Structure

```
my-portfolio/
├── public/                     # Static assets
│   ├── favicon.ico
│   └── *.svg                  # Icon files
├── src/                       # Source code
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── blog/             # Blog section
│   ├── components/            # Reusable components
│   │   ├── ui/               # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── ...
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── About.tsx         # About section
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Education.tsx     # Education timeline
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Blog.tsx          # Blog articles
│   │   ├── Contact.tsx       # Contact form
│   │   └── ...
│   ├── contexts/             # React contexts
│   │   └── LoadingContext.tsx
│   ├── hooks/                # Custom hooks
│   │   └── useGsap.ts
│   ├── lib/                  # Utilities
│   │   └── utils.ts
│   └── types/                # Type definitions
│       └── vanta.d.ts
├── components.json            # Shadcn/ui config
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Milanz247/My-Portfolio-1-branch.git
   cd My-Portfolio-1-branch
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Key Components

### Navigation Header
- **Glassmorphic Design**: Backdrop blur with dynamic transparency
- **Smart Active States**: Automatic section detection on scroll
- **Professional Branding**: Animated logo with status indicators
- **Mobile Responsive**: Slide-out menu with enhanced animations

### Hero Section
- **3D Background**: Interactive Vanta.js animations
- **Dynamic Typing**: Animated text with multiple role displays
- **Call-to-Actions**: Prominent buttons with hover effects
- **Scroll Indicators**: Smooth scroll-to-section functionality

### Featured Projects
- **Card Grid Layout**: Responsive 3-column grid
- **Hover Animations**: Scale and lift effects with background patterns
- **Technology Tags**: Interactive skill showcases
- **Status Indicators**: Live project status with animations
- **Infinite Ticker**: Additional projects in scrolling carousel

### Skills Section
- **Interactive Cards**: Hover effects with icon animations
- **Categorized Display**: Frontend, Backend, DevOps, and Tools
- **Progress Indicators**: Visual skill level representations
- **Responsive Grid**: Adaptive layout for all screen sizes

### Contact Form
- **Form Validation**: Real-time validation with error states
- **Animated Inputs**: Smooth focus transitions
- **Social Links**: Direct connections to professional profiles
- **Success States**: Feedback for form submissions

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized bundle sizes
- **Prefetching**: Smart prefetching for faster navigation
- **Caching**: Aggressive caching strategies
- **Lighthouse Score**: 95+ performance score

## 🌈 Theme System

- **Dynamic Themes**: Dark and light mode support
- **Smooth Transitions**: Animated theme switching
- **System Preference**: Automatic detection of user preference
- **Persistent Storage**: Theme preference saved locally

## 📱 Responsive Design

- **Mobile First**: Progressive enhancement approach
- **Breakpoint System**: Tailored for all device sizes
- **Touch Interactions**: Optimized for mobile gestures
- **Performance**: Optimized for mobile networks

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customization
- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Fonts**: Update `app/layout.tsx` for typography
- **Content**: Edit component files for personal information
- **Animations**: Adjust timing in animation configurations

## 📈 SEO Features

- **Meta Tags**: Dynamic meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Automatic sitemap generation
- **Analytics Ready**: Google Analytics integration support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Milan Madusanka**
- Portfolio: [milanmadusanka.dev](https://milanmadusanka.dev)
- LinkedIn: [linkedin.com/in/milanmadusanka](https://www.linkedin.com/in/milanmadusanka/)
- GitHub: [github.com/Milanz247](https://github.com/Milanz247)
- Medium: [medium.com/@milanmadusankamms](https://medium.com/@milanmadusankamms)
- Email: milanmadusankamms@gmail.com

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible headless components
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

⭐ **Star this repository if you found it helpful!**

![GitHub stars](https://img.shields.io/github/stars/Milanz247/My-Portfolio-1-branch?style=social)
![GitHub forks](https://img.shields.io/github/forks/Milanz247/My-Portfolio-1-branch?style=social)
