"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Cloud, Settings, GitBranch, Layers, Shield } from "lucide-react";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Professional skill categories organized by domain
  const skillCategories = [
    {
      title: "System Administration & DevOps",
      icon: Shield,
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
      technologies: [
        "Red Hat Enterprise Linux", "Linux System Administration", "WildFly",
        "Shell Scripting", "Log Monitoring", "System Troubleshooting",
        "Java Application Deployment", "CI/CD Pipelines", "Infrastructure Automation"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      technologies: [
        "AWS", "Google Cloud (GCP)", "Docker", "Kubernetes",
        "Nginx", "Apache", "Reverse Proxy", "Microservices"
      ]
    },
    {
      title: "DevOps & Automation",
      icon: Settings,
      color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      technologies: [
        "Jenkins", "CI/CD Pipelines", "Ansible", "Bash Scripting",
        "GitHub Actions", "Docker Compose", "Terraform", "Infrastructure as Code"
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      technologies: [
        "Laravel", "PHP", "Python", "Go (Golang)", "Java", 
        "Node.js", "RESTful APIs", "GraphQL", "Livewire"
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      technologies: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", 
        "Firebase", "Supabase", "Prisma ORM"
      ]
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      technologies: [
        "Git", "GitHub", "VS Code", "ESLint", "PostCSS",
        "Webpack", "Vite", "Jest", "PHPUnit"
      ]
    },
    {
      title: "Frontend Development (Background)",
      icon: Code2,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      technologies: [
        "React", "Next.js", "Vue.js", "TypeScript", "JavaScript",
        "Inertia.js", "Tailwind CSS", "GSAP", "HTML5", "CSS3"
      ]
    }
  ];


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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              System Support & DevOps Expertise
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Full-stack development capabilities spanning modern web technologies, cloud infrastructure, 
            and DevOps practices. Built for scalable, enterprise-grade solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {category.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-primary mt-1"></div>
                  </div>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Expertise Highlights */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold">Core Expertise</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Full-stack web application development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Modern React/Next.js & Laravel ecosystems
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Cloud infrastructure design and deployment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                DevOps automation and CI/CD pipelines
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Database design and optimization
              </li>
            </ul>
          </div>

          {/* Current Focus */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold">Current Focus</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Advanced Kubernetes orchestration
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Serverless architecture with AWS Lambda
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                AI/ML integration in web applications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Performance optimization & monitoring
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">2+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">35+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Technologies</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">60+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">90%+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Committed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
