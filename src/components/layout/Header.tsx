"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  Code2, 
  Terminal, 
  User, 
  Briefcase, 
  GraduationCap, 
  FolderOpen, 
  FileText, 
  Mail,
  Cpu,
  Github,
  Linkedin,
  ExternalLink
} from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "education", "projects", "blog", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section === "home" ? "hero" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Home", icon: Terminal, id: "home" },
    { href: "/#about", label: "About", icon: User, id: "about" },
    { href: "/#skills", label: "Skills", icon: Cpu, id: "skills" },
    { href: "/#experience", label: "Experience", icon: Briefcase, id: "experience" },
    { href: "/#education", label: "Education", icon: GraduationCap, id: "education" },
    { href: "/#projects", label: "Projects", icon: FolderOpen, id: "projects" },
    { href: "/#blog", label: "Blog", icon: FileText, id: "blog" },
    { href: "/#contact", label: "Contact", icon: Mail, id: "contact" },
  ];

  const handleNavClick = (href: string, id: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setActiveSection(id);
  };

  return (
    <>
      {/* Ultra-Professional Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ${
          isScrolled 
            ? 'border-b border-border/30 bg-background/90 backdrop-blur-2xl shadow-2xl shadow-primary/10 supports-[backdrop-filter]:bg-background/80' 
            : 'border-b border-transparent bg-background/70 backdrop-blur-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 opacity-0"
          animate={{ 
            opacity: isScrolled ? [0, 0.3, 0] : 0,
            x: ['-100%', '100%']
          }}
          transition={{ 
            opacity: { duration: 2, repeat: Infinity },
            x: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="flex h-20 items-center justify-between">
            
            {/* Enhanced Logo/Brand */}
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center space-x-4 group">
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/25 border border-primary/20"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.05
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="hidden sm:flex flex-col">
                  <motion.span 
                    className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Milan Madusanka
                  </motion.span>
                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Badge variant="secondary" className="text-xs px-3 py-1 h-5 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/30 font-medium">
                        <Terminal className="w-3 h-3 mr-1" />
                        Software Engineer
                      </Badge>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                      <span className="text-xs text-muted-foreground font-medium">Available for work</span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2 bg-muted/30 backdrop-blur-xl rounded-2xl p-2 border border-border/40">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <Link 
                            href={item.href} 
                            className={`group relative inline-flex h-11 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-500 overflow-hidden ${
                              isActive 
                                ? 'bg-gradient-to-r from-primary/90 to-blue-600/90 text-white shadow-xl shadow-primary/25 border border-primary/50' 
                                : 'text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-lg hover:border-border/60 border border-transparent'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.href, item.id);
                            }}
                          >
                            {/* Background animation */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
                              initial={false}
                              animate={{ 
                                x: isActive ? ['-100%', '100%'] : '-100%'
                              }}
                              transition={{ 
                                duration: isActive ? 2 : 0,
                                repeat: isActive ? Infinity : 0
                              }}
                            />
                            
                            <Icon className={`w-4 h-4 mr-2 transition-all duration-300 ${
                              isActive 
                                ? 'text-white' 
                                : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                            }`} />
                            <span className="relative z-10">{item.label}</span>
                            
                            {/* Enhanced active indicator */}
                            <AnimatePresence>
                              {isActive && (
                                <>
                                  <motion.div
                                    className="absolute bottom-1 left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                                    layoutId="activeIndicator"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ 
                                      opacity: 1, 
                                      scale: 1,
                                      y: [0, -2, 0]
                                    }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ 
                                      duration: 0.3,
                                      y: { duration: 1, repeat: Infinity }
                                    }}
                                    style={{ x: "-50%" }}
                                  />
                                  <motion.div
                                    className="absolute inset-0 rounded-xl border-2 border-white/20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  />
                                </>
                              )}
                            </AnimatePresence>
                          </Link>
                        </motion.div>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Enhanced Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Social Links */}
              <div className="hidden xl:flex items-center space-x-2 bg-muted/30 backdrop-blur-xl rounded-2xl p-2 border border-border/40">
                <motion.a
                  href="https://github.com/milanmadusankamms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-300 group border border-transparent hover:border-border/60 hover:shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/milanmadusanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-300 group border border-transparent hover:border-border/60 hover:shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              </div>

              {/* Enhanced Theme Toggle */}
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <ModeToggle />
              </motion.div>
              
              {/* Enhanced Mobile Navigation */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="border-border/50 bg-background/80 backdrop-blur-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 h-11 w-11"
                      >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </motion.div>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-2xl border-l border-border/30 shadow-2xl">
                    <SheetHeader className="pb-8">
                      <SheetTitle className="flex items-center space-x-4">
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-br from-primary via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Code2 className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex flex-col">
                          <span className="text-lg font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                            Milan Madusanka
                          </span>
                          <span className="text-xs text-muted-foreground">Software Engineer</span>
                        </div>
                      </SheetTitle>
                    </SheetHeader>
                    
                    <nav className="flex flex-col space-y-3">
                      {navigationItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        
                        return (
                          <SheetClose asChild key={item.href}>
                            <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                              <Link
                                href={item.href}
                                className={`flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group border ${
                                  isActive 
                                    ? 'bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border-primary/30 shadow-lg' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent hover:border-border/50'
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setTimeout(() => {
                                    handleNavClick(item.href, item.id);
                                  }, 300);
                                }}
                              >
                                <motion.div
                                  className={`p-2 rounded-xl ${
                                    isActive 
                                      ? 'bg-primary/20 text-primary' 
                                      : 'bg-muted/50 text-muted-foreground group-hover:text-foreground group-hover:bg-background/80'
                                  }`}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Icon className="w-5 h-5" />
                                </motion.div>
                                <span className="text-lg font-medium flex-1">{item.label}</span>
                                {isActive && (
                                  <motion.div 
                                    className="w-2 h-2 bg-primary rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                  />
                                )}
                              </Link>
                            </motion.div>
                          </SheetClose>
                        );
                      })}
                    </nav>

                    {/* Enhanced Mobile Social Links */}
                    <div className="mt-8 pt-8 border-t border-border/50">
                      <motion.div 
                        className="text-center mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="text-sm font-medium text-muted-foreground mb-4">Connect with me</h4>
                        <div className="flex items-center justify-center space-x-3">
                          <motion.a
                            href="https://github.com/milanmadusankamms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 px-4 py-3 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex-1"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="w-5 h-5" />
                            <span className="text-sm font-medium">GitHub</span>
                            <ExternalLink className="w-3 h-3 ml-auto" />
                          </motion.a>
                        </div>
                        <motion.a
                          href="https://linkedin.com/in/milanmadusanka"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-4 py-3 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 mt-3"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="text-sm font-medium">LinkedIn</span>
                          <ExternalLink className="w-3 h-3 ml-auto" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;
