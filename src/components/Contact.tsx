"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, Github, Linkedin, Code2, Terminal, Globe, FileText, PenTool } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the section container
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Let&apos;s Build Together
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Ready to bring your next software project to life? Let&apos;s discuss your requirements, 
            architecture needs, and how we can create something exceptional together.
          </p>
        </div>

        {/* Professional Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Professional Links */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Professional Profiles
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/Milanz247"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-gray-100 dark:group-hover:text-black transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">GitHub</h4>
                    <p className="text-xs text-muted-foreground">Code repositories</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/milanmadusanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg border border-border bg-card hover:border-blue-500/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">LinkedIn</h4>
                    <p className="text-xs text-muted-foreground">Professional network</p>
                  </div>
                </div>
              </a>

              <a
                href="https://medium.com/@milanmadusankamms"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg border border-border bg-card hover:border-green-500/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <PenTool className="w-5 h-5 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Medium</h4>
                    <p className="text-xs text-muted-foreground">Articles & insights</p>
                  </div>
                </div>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Resume</h4>
                    <p className="text-xs text-muted-foreground">Download CV</p>
                  </div>
                </div>
              </a>

              <Link
                href="/#projects"
                className="group p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Portfolio</h4>
                    <p className="text-xs text-muted-foreground">View projects</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Direct Contact
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-card-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:milanmadusankamms@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      milanmadusankamms@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Best for project inquiries and professional discussions
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-500/10 mt-1">
                    <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-card-foreground mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/94771234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                    >
                      +94 77 123 4567
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quick consultations and urgent communications
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-500/10 mt-1">
                    <Send className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-card-foreground mb-1">Telegram</h4>
                    <a 
                      href="https://t.me/milanms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      @milanms
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Technical discussions and file sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  Available for New Projects
                </span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500">
                Currently accepting freelance and contract opportunities. 
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-4 mb-3 sm:mb-4">
            <div className="h-px bg-border flex-1 max-w-20"></div>
            <h3 className="text-base sm:text-lg font-semibold text-muted-foreground flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Project Inquiry Form
            </h3>
            <div className="h-px bg-border flex-1 max-w-20"></div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Tell me about your project requirements and technical specifications
          </p>
        </div>

        {/* Professional Contact Form */}
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="h-10 sm:h-12 bg-background border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  className="h-10 sm:h-12 bg-background border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                Project Details *
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe your project requirements, technical specifications, expected features, and any specific technologies you'd like to use..."
                rows={6}
                required
                className="resize-none bg-background border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base min-h-[140px] sm:min-h-[160px]"
              />
              <p className="text-xs text-muted-foreground">
                Include details about functionality, target audience, existing systems, and technical constraints.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto sm:px-8 h-10 sm:h-12 font-medium text-sm sm:text-base"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Project Inquiry
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              I&apos;ll review your inquiry and respond within 24 hours with next steps.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
