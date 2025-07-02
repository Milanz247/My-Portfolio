// src/components/layout/Footer.tsx

import Link from "next/link";
import { Mail, MapPin, Code2, Calendar, ExternalLink } from "lucide-react";

const navigationLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const professionalLinks = [
  { name: "GitHub", href: "https://github.com/milan-ms", external: true },
  { name: "LinkedIn", href: "https://linkedin.com/in/milan-ms", external: true },
  { name: "Resume", href: "/resume.pdf", external: true },
  { name: "Blog", href: "/#blog" },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 py-8 sm:py-12 lg:px-8">
          
          {/* Mobile-First Layout */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
            
            {/* Professional Profile - Full width on mobile */}
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-2 lg:space-y-3">
                <Link href="/" className="inline-flex items-center gap-2 group">
                  <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  <h3 className="text-lg lg:text-xl font-bold text-card-foreground tracking-tight group-hover:text-primary transition-colors">
                    Milan M.S.
                  </h3>
                </Link>
                <p className="text-xs lg:text-sm text-muted-foreground font-medium">
                  Software Engineer
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed lg:pr-4">
                  Building scalable web applications with modern technologies.
                </p>
              </div>
              
              {/* Tech Stack - Compact on mobile */}
              <div className="space-y-2 lg:space-y-3">
                <h4 className="text-xs font-semibold text-card-foreground uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 lg:py-1 text-xs bg-primary/10 text-primary rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info - Mobile optimized */}
              <div className="space-y-2 pt-2 lg:hidden">
                <a 
                  href="mailto:milan.ms.developer@gmail.com"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">milan.ms.developer@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Navigation & Professional Links - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-1 lg:col-span-2 lg:grid lg:lg:grid-cols-2">
              
              {/* Quick Navigation */}
              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-xs font-semibold text-card-foreground uppercase tracking-wider">
                  Portfolio
                </h4>
                <nav className="space-y-1.5 lg:space-y-2">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Professional Links */}
              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-xs font-semibold text-card-foreground uppercase tracking-wider">
                  Connect
                </h4>
                
                <nav className="space-y-1.5 lg:space-y-2">
                  {professionalLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Contact Info - Desktop only */}
                <div className="hidden lg:block space-y-2 pt-2">
                  <a 
                    href="mailto:milan.ms.developer@gmail.com"
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    <span>milan.ms.developer@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section - Mobile optimized */}
        <div className="border-t border-border/50">
          <div className="px-4 py-4 lg:py-6 lg:px-8">
            <div className="space-y-3 lg:space-y-0 lg:flex lg:justify-between lg:items-center text-xs text-muted-foreground">
              
              {/* Copyright - Always on top on mobile */}
              <div className="text-center lg:text-left">
                <p>© {currentYear} Milan Madusanka Senarathna</p>
              </div>
              
              {/* Status indicators - Stacked on mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Available for opportunities</span>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="hidden sm:inline">Built with Next.js</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
