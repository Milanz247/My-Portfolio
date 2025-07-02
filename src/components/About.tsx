"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Code2, User, Briefcase, Server } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Passionate Software Engineer crafting innovative solutions with modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Professional Image with Framer Motion */}
          <motion.div 
            className="order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div 
                className="relative aspect-square w-full max-w-md mx-auto lg:mx-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Decorations */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-lg opacity-70"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur-md opacity-50"></div>
                
                {/* Image Placeholder with Professional Tech Theme */}
                <div className="relative w-full h-full bg-gradient-to-br from-card to-muted rounded-xl border border-border shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <motion.div 
                        className="text-6xl mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        ⚡
                      </motion.div>
                      <p className="text-lg font-semibold mb-2">Milan Madusanka</p>
                      <p className="text-sm text-muted-foreground">Software Engineer</p>
                      <div className="mt-4 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code2 className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Server className="w-6 h-6 text-blue-500" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Content */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Profile
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-card-foreground">Junior Software Engineer</strong> with 2+ years of experience 
                    building scalable web applications and enterprise solutions. Specialized in full-stack development 
                    using modern technologies including <strong className="text-primary">Laravel, React.js, and GoLang</strong>.
                  </p>
                  <p>
                    Passionate about clean code, system architecture, and delivering high-quality software solutions. 
                    Experience in leading development teams, API integration, and implementing DevOps practices 
                    with <strong className="text-primary">99.9% uptime</strong> achievements.
                  </p>
                  <p>
                    Currently focused on cloud technologies, microservices architecture, and contributing to 
                    open-source projects. Always eager to learn emerging technologies and share knowledge 
                    with the developer community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
