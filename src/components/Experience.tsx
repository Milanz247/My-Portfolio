"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Server, Database, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  // Professional experience data with enhanced structure
  const experiences = [
    {
      id: 1,
      position: "System Engineer Intern",
      company: "Epic Lanka (Pvt) Ltd",
      location: "Epic Techno Village, Sri Jayawardenepura Kotte, Sri Lanka",
      duration: "Apr 2025 – Present",
      type: "Internship",
      status: "Current",
      description: "Learning Linux system administration and enterprise application support. Gaining practical experience in DevOps fundamentals and infrastructure management.",
      achievements: [
        "Learning Red Hat Enterprise Linux administration in production environment",
        "Supporting Java application deployments on WildFly application server",
        "Working with containerized applications using Docker and Kubernetes orchestration",
        "Assisting with CI/CD pipelines using Jenkins and ArgoCD for automated deployments",
        "Monitoring system performance and application health using Prometheus and Grafana",
        "Managing Helm charts for Kubernetes application deployments",
        "Learning infrastructure management with Rancher and container orchestration",
        "Helped debug a critical memory leak in production WildFly server, learned the value of proper logging and monitoring"
      ],
      technologies: [
        "Red Hat Enterprise Linux", "WildFly", "Java", "Shell Scripting",
        "Docker", "Kubernetes", "Jenkins", "ArgoCD", "Helm",
        "Rancher", "Prometheus", "Git", "System Monitoring",
        "Linux Commands", "MySQL", "SQLite", "Nginx"
      ],
      highlights: [
        "Linux & RHEL Admin",
        "DevOps & CI/CD",
        "Container Orchestration",
        "Infrastructure Management"
      ]
    },
    {
      id: 2,
      position: "Junior Software Engineer",
      company: "Taprobane Information Technologies (Pvt) Ltd",
      location: "Matahale, Sri Lanka - Matale, Naula",
      duration: "Apr 2024 - Feb 2025",
      type: "Full-time",
      status: "Completed",
      description: "Solid foundation in full-stack development that provides valuable context for understanding application deployment and infrastructure needs. Experience with development workflows that translate well to DevOps practices.",
      achievements: [
        "Delivered features for POS and ERP solutions used by 50+ businesses",
        "Built RESTful APIs and database schemas for core business modules",
        "Gained experience with Git workflows, JIRA project management, and Agile development",
        "Mentored junior interns and facilitated team knowledge sharing sessions",
        "Improved application performance through database query optimization",
        "Traced mysterious timeout issues to missing database indexes during Black Friday traffic spike"
      ],
      technologies: [
        "Laravel", "React.js", "MySQL", "Git", "RESTful APIs"
      ],
      highlights: [
        "Full-Stack Development",
        "API Integration",
        "Team Collaboration",
        "Problem Solving"
      ]
    },
    {
      id: 3,
      position: "Software Engineer Intern",
      company: "Taprobane Information Technologies (Pvt) Ltd",
      location: "Matahale, Sri Lanka - Matale, Naula",
      duration: "Oct 2023 - Apr 2024",
      type: "Internship",
      status: "Completed",
      description: "Gained hands-on experience in enterprise software development while contributing to POS and ERP solutions.",
      achievements: [
        "Contributed to POS and ERP solutions serving 50+ businesses",
        "Developed database schemas and API endpoints for core business modules",
        "Collaborated using Git, JIRA, and Agile methodologies",
        "Led intern team of 3 members, facilitating knowledge sharing sessions",
        "Optimized database queries resulting in 30% performance improvement"
      ],
      technologies: [
        "Laravel", "React.js", "MySQL", "Git", "JIRA", "Agile",
        "API Development", "Database Design"
      ],
      highlights: [
        "Fast Learning",
        "Team Collaboration",
        "Problem Solving",
        "Mentoring"
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section
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

    // Animate experience cards
    gsap.from(".experience-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".experience-container",
        start: "top 70%",
        end: "top 30%",
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
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Professional Journey
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            From software development to system operations - building a strong foundation
            in both development and infrastructure management.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-container relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-card relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 group">

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className={`text-xs ${exp.status === 'Current'
                            ? 'bg-green-500/10 text-green-600 border-green-200'
                            : 'bg-blue-500/10 text-blue-600 border-blue-200'
                            }`}>
                            {exp.status}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <ExternalLink className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCards[exp.id] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <Server className="w-4 h-4 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-muted/50 hover:bg-muted transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-2">
                          <Database className="w-4 h-4 text-primary" />
                          Core Strengths
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, idx) => (
                            <Badge
                              key={idx}
                              className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full mt-4 py-2 px-4 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-card-foreground group"
                    >
                      <span>{expandedCards[exp.id] ? 'Show Less' : 'Show More'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[exp.id] ? 'rotate-180' : ''
                        }`} />
                    </button>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-card-foreground mb-2">Current Learning Focus</h3>
            <p className="text-muted-foreground text-sm">Building expertise in modern DevOps and system administration</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">1.5+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">20+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects Contributed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Linux</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Current Focus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">DevOps</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Career Goal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

