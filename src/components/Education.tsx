"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Clean educational background with timeline structure
  const education = [
    {
      id: 1,
      degree: "Higher National Diploma in Information Technology (HNDIT)",
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      location: "Sri Lanka",
      duration: "2021 - 2023",
      status: "Completed",
      type: "Diploma",
      description: "Comprehensive technical education focused on software development, database management, and web technologies."
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level - Technology Stream",
      institution: "Sri Naga National School",
      location: "Naula, Sri Lanka", 
      duration: "2017 - 2019",
      status: "Completed",
      type: "Secondary Education",
      description: "Technology stream specialization with focus on Information Technology and programming fundamentals."
    }
  ];

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

    // Animate education cards
    gsap.from(".education-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".education-container",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Academic Foundation
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Educational journey in Information Technology and Computer Science, 
            building the foundation for software engineering expertise.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-container relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`education-card relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Education Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 group">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className={`text-xs ${
                            edu.type === 'Diploma' 
                              ? 'bg-blue-500/10 text-blue-600 border-blue-200' 
                              : 'bg-green-500/10 text-green-600 border-green-200'
                          }`}>
                            {edu.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {edu.status}
                          </Badge>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                          <GraduationCap className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Timeline Marker */}
                <div className="md:hidden w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg mb-4 flex-shrink-0">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Stats */}
        {/* <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">2</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Qualifications</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">4+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Study</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">IT</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Specialized</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">2023</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Latest Grad</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
