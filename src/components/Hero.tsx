"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { Enhanced3DBackground } from "./Enhanced3DBackgroundFixed";
import { MagneticElement } from "./MagneticElement";

const Hero = () => {
  const { isLoading } = useLoading();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Start animations only after loading is complete
    if (!isLoading) {
      // Small delay to ensure loading screen has finished its exit animation
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full pt-8 relative">
      {/* Premium 3D Background */}
      <Enhanced3DBackground />
      
      {/* Simplified overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 dark:from-background/60 dark:via-background/40 dark:to-background/60"></div>
      
      <div className="text-center space-y-8 max-w-4xl mx-auto w-full relative z-10">
        {/* Enhanced Profile Avatar */}
        <motion.div 
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0, y: -50 }}
          animate={{ 
            opacity: shouldAnimate ? 1 : 0, 
            scale: shouldAnimate ? 1 : 0, 
            y: shouldAnimate ? 0 : -50 
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/20 shadow-xl premium-shadow">
              <AvatarImage 
                src="" 
                alt="Profile picture"
              />
              <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary/20 to-primary/5 brand-gradient">
                MM
              </AvatarFallback>
            </Avatar>
            {/* Enhanced ring animation with gradient */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 opacity-0"
              style={{ 
                borderImage: 'linear-gradient(45deg, #6366f1, #8b5cf6, #22c55e) 1'
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={shouldAnimate ? {
                scale: [1, 1.3, 1],
                opacity: [0, 0.8, 0],
              } : { scale: 1, opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Main Heading with Simplified, Premium Animation */}
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight relative"
            initial={{ opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Milan Madusanka
            </span>
            
            {/* Single, Focused Underline Animation */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={shouldAnimate ? { width: "100%" } : { width: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.3, 
                ease: [0.23, 1, 0.32, 1]
              }}
            />
          </motion.h1>
          
          {/* Description with Word Animation */}
          <div className="relative">
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Full-Stack Developer with Linux expertise building reliable systems that scale.
            </motion.p>
            
            {/* Personal Brand Tagline */}
            <motion.p 
              className="text-sm sm:text-base text-primary/80 font-medium mt-3 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              &ldquo;Code. Deploy. Scale. Repeat.&rdquo; 🔄
            </motion.p>
            
            {/* Subtle shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              initial={{ x: "-100%" }}
              animate={shouldAnimate ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 2, delay: 3, ease: "easeInOut" }}
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, -10% 100%)" }}
            />
          </div>
        </div>

        {/* Premium Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: shouldAnimate ? 1 : 0, 
            y: shouldAnimate ? 0 : 30 
          }}
          transition={{ 
            delay: 1.6,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <MagneticElement intensity={0.3}>
            <Button asChild size="lg" className="w-full sm:w-auto relative z-10 cta-gradient text-white border-0 overflow-hidden group/btn">
              <Link href="#projects">
                <motion.span 
                  className="mr-2"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚀
                </motion.span>
                View My Projects
                {/* Premium button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </Link>
            </Button>
          </MagneticElement>
          
          <MagneticElement intensity={0.3}>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto relative z-10 glassmorphism hover:bg-white/20 border-primary/30 group/btn overflow-hidden">
              <a href="/cv.html" target="_blank" rel="noopener noreferrer">
                <motion.span 
                  className="mr-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  📄
                </motion.span>
                Download CV
                {/* Subtle hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </a>
            </Button>
          </MagneticElement>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
