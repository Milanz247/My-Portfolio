"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { User, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";

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
    <section ref={sectionRef} className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 via-background to-muted/10">
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
            Full-Stack Developer transitioning to DevOps with proven enterprise application experience
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Professional Image with Framer Motion */}
          <motion.div 
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
                <div className="relative w-full h-full bg-gradient-to-br from-card to-muted rounded-xl border border-border shadow-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Image
                      src="/images/aboutimg.jpg"
                      alt="Milan Madusanka - Full-Stack Developer & System Engineer"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
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
                <div className="space-y-6 text-card-foreground leading-[1.8]">
                  <p>
                    <strong className="text-card-foreground">System Engineer Intern</strong> at Epic Lanka (Pvt) Ltd, 
                    with <strong className="text-primary">1.5 years of proven development experience</strong> contributing to enterprise systems. 
                    Successfully delivered features for <strong className="text-primary">POS systems serving 50+ businesses</strong> 
                    while expanding expertise in Linux administration and infrastructure management.
                  </p>
                  <p>
                    My development background provides unique value in understanding <strong className="text-primary">application deployment, 
                    performance optimization, and system integration challenges</strong>. Currently mastering 
                    <strong className="text-primary">Red Hat Enterprise Linux, WildFly application servers, and DevOps fundamentals</strong> 
                    to bridge the gap between development and operations.
                  </p>
                  <p>
                    <strong className="text-primary">Real problem-solving experience:</strong> Debugged a critical 
                    production API that was timing out during peak hours, traced it to unoptimized database queries, 
                    and reduced response time by 30% through proper indexing and query restructuring. 
                    Chose pragmatic MySQL optimization over trendy NoSQL migration to minimize business risk.
                  </p>
                  <p>
                    Passionate about building <strong className="text-primary">reliable, scalable systems</strong> and 
                    helping teams deliver software efficiently. Combining hands-on development experience with 
                    growing infrastructure knowledge to contribute to modern DevOps and system engineering initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </h3>
              <div className="text-card-foreground">
                <p className="text-lg font-medium">Matale, Sri Lanka</p>
                <p className="text-muted-foreground mt-2">
                  Based in the central highlands of Sri Lanka, available for remote work worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
