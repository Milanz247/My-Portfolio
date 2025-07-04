"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { useTheme } from "next-themes";

const Hero = () => {
  const { isLoading } = useLoading();
  const { theme } = useTheme();
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

  // Split text animation variants - Professional Slide & Fade Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };
  
  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full pt-8 hero-gradient relative">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-green-50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-green-950/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='35' cy='35' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='55' cy='55' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
      </div>
      
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

        {/* Main Heading with Split Text Animation */}
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight relative"
            initial={{ opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Milan Madusanka
            </span>
            {/* Enhanced gradient underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 rounded-full"
              initial={{ width: 0, x: "-50%" }}
              animate={shouldAnimate ? { width: "80%", x: "-50%" } : { width: 0, x: "-50%" }}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
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
              "Code. Deploy. Scale. Repeat." 🔄
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

        {/* Action Buttons with Professional Animation */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ 
              scale: 1.02,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto relative z-10 cta-gradient text-white border-0">
              <Link href="#projects">
                <span className="mr-2">🚀</span>
                View My Projects
              </Link>
            </Button>
            {/* Enhanced hover shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ 
              scale: 1.02,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto relative z-10 glassmorphism hover:bg-white/20 border-primary/30">
              <a href="/cv.html" target="_blank" rel="noopener noreferrer">
                <span className="mr-2">📄</span>
                Download CV
              </a>
            </Button>
            {/* Enhanced hover shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
