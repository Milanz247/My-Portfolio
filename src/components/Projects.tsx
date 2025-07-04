"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Folder, Star, GitBranch, Database, Zap, Layers } from "lucide-react";
import Link from "next/link";

// Types for project data
interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  category: string;
  year: string;
  status: "completed" | "in-progress" | "maintenance";
  featured: boolean;
}

const Projects = () => {
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

  // Realistic project data matching actual experience level
  const projects: Project[] = [
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and dark mode.",
      longDescription: "This portfolio website showcases my skills and learning journey. Built with Next.js for performance, TypeScript for type safety, and includes features like smooth scrolling, theme switching, and responsive design. Deployed with automated CI/CD pipeline.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Vercel"],
      githubLink: "https://github.com/Milanz247/My-Portfolio",
      liveLink: "https://milan-portfolio.vercel.app",
      category: "Frontend",
      year: "2025",
      status: "completed",
      featured: true,
    },
    {
      title: "Enterprise POS System (Team Project)",
      description: "Contributed to Laravel-based Point of Sale system serving 50+ retail businesses with inventory management and reporting.",
      longDescription: "Worked as part of a development team on a comprehensive POS system. My contributions included developing inventory tracking features, creating RESTful APIs for business operations, and building reporting modules. System handles daily transactions for 50+ retail businesses.",
      technologies: ["Laravel", "PHP", "React.js", "MySQL", "RESTful APIs", "JIRA"],
      githubLink: "https://github.com/Milanz247/pos-system-features",
      liveLink: "",
      category: "Full-Stack",
      year: "2024",
      status: "completed",
      featured: true,
    },
    {
      title: "Linux Administration Lab",
      description: "Personal learning environment for practicing Red Hat Enterprise Linux administration and system operations.",
      longDescription: "Set up a comprehensive virtual lab environment to practice Linux system administration, shell scripting, and DevOps fundamentals. Includes RHEL server setup, WildFly application server deployment, and basic monitoring configurations. Documenting learning journey and configurations.",
      technologies: ["Red Hat Enterprise Linux", "Shell Scripting", "WildFly", "Virtual Machines", "System Monitoring"],
      githubLink: "https://github.com/Milanz247/linux-learning-lab",
      liveLink: "",
      category: "System Administration",
      year: "2025",
      status: "in-progress",
      featured: true,
    },
    {
      title: "Task Management API",
      description: "RESTful API built with Laravel for learning backend development, authentication, and database relationships.",
      longDescription: "Educational project to understand API development, JWT authentication, and complex database relationships. Features include user management, task CRUD operations, team collaboration, and role-based permissions. Includes comprehensive API documentation and testing.",
      technologies: ["Laravel", "PHP", "MySQL", "JWT Auth", "Postman", "API Documentation"],
      githubLink: "https://github.com/Milanz247/task-management-api",
      liveLink: "",
      category: "Backend",
      year: "2024",
      status: "completed",
      featured: false,
    },
    {
      title: "React Learning Projects",
      description: "Collection of React.js projects for learning modern frontend development and state management.",
      longDescription: "Series of progressive React projects including todo app, weather dashboard, and e-commerce frontend. Focused on learning React hooks, state management, API integration, and responsive design principles. Each project demonstrates different aspects of modern React development.",
      technologies: ["React.js", "JavaScript", "CSS3", "API Integration", "Responsive Design"],
      githubLink: "https://github.com/Milanz247/react-learning-projects",
      liveLink: "https://react-projects-demo.netlify.app",
      category: "Frontend",
      year: "2024",
      status: "completed",
      featured: false,
    },
    {
      title: "DevOps Learning Journey",
      description: "Documenting my transition from development to DevOps with practical experiments and configurations.",
      longDescription: "Repository documenting my learning journey in DevOps, including Docker experiments, CI/CD pipeline setups, infrastructure configurations, and automation scripts. Includes detailed README files explaining concepts learned and practical implementations.",
      technologies: ["Docker", "GitHub Actions", "Shell Scripting", "Linux", "Documentation"],
      githubLink: "https://github.com/Milanz247/devops-learning",
      liveLink: "",
      category: "DevOps",
      year: "2025",
      status: "in-progress",
      featured: false,
    },
  ];

  // Filter projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500";
      case "in-progress": return "text-blue-500";
      case "maintenance": return "text-yellow-500";
      default: return "text-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "maintenance": return "Maintenance";
      default: return "Unknown";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack": return <Code2 className="w-4 h-4" />;
      case "DevOps": return <GitBranch className="w-4 h-4" />;
      case "AI/ML": return <Database className="w-4 h-4" />;
      case "Backend": return <Folder className="w-4 h-4" />;
      case "Data Engineering": return <Database className="w-4 h-4" />;
      case "Cloud": return <Code2 className="w-4 h-4" />;
      case "Blockchain": return <Layers className="w-4 h-4" />;
      case "Mobile": return <Zap className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  // Animation variants for featured projects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const featuredCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/5 via-background to-muted/10 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Enhanced Styling */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <Star className="w-8 h-8 text-primary animate-pulse" />
              <motion.div 
                className="absolute inset-0 w-8 h-8 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects & Learning
            </h2>
            <div className="relative">
              <Zap className="w-8 h-8 text-primary animate-pulse" />
              <motion.div 
                className="absolute inset-0 w-8 h-8 border-2 border-primary/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Real projects I&apos;ve built and contributed to during my development and learning journey.
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid - Only 3 Projects */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={`featured-${index}`}
              variants={featuredCardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card via-card to-muted/20 card-hover-effect premium-shadow glassmorphism relative overflow-hidden">
                {/* Enhanced animated background effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(99, 102, 241, 0.05), transparent, rgba(34, 197, 94, 0.05))",
                      "linear-gradient(225deg, rgba(99, 102, 241, 0.05), transparent, rgba(34, 197, 94, 0.05))",
                      "linear-gradient(45deg, rgba(99, 102, 241, 0.05), transparent, rgba(34, 197, 94, 0.05))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(project.category)}
                      <Badge variant="secondary" className="text-xs font-medium">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-green-500/50 text-green-500">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                    <motion.div 
                      className={`flex items-center gap-1 text-xs ${getStatusColor(project.status)}`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {getStatusText(project.status)}
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 skill-tag-glow text-xs rounded-full cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-muted/50 text-xs rounded-full text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 pt-0">
                  <div className="flex gap-3 w-full">
                    <Button asChild size="sm" className="flex-1 group/btn cta-gradient text-white border-0">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 group/btn glassmorphism hover:bg-white/20 border-primary/30">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects - Infinite Scrolling Ticker */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              More Projects
            </h3>
            <p className="text-muted-foreground">
              Additional projects showcasing diverse technologies and solutions
            </p>
          </div>

          {/* Infinite Scrolling Container */}
          <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-muted/10 to-transparent py-8 rounded-2xl">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div 
              className="flex gap-6 w-max"
              animate={{
                x: [0, -100],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the array for seamless loop */}
              {[...otherProjects, ...otherProjects].map((project, index) => (
                <motion.div
                  key={`ticker-${index}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(project.category)}
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pb-3">
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="ghost" className="flex-1 text-xs">
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Learning Journey Section */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-card-foreground mb-2">Currently Learning</h3>
            <p className="text-muted-foreground text-sm">Building expertise through hands-on practice and real-world experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg border border-border bg-card/50">
              <div className="text-2xl mb-2">🐧</div>
              <h4 className="font-semibold mb-2">Linux Administration</h4>
              <p className="text-sm text-muted-foreground">Red Hat Enterprise Linux, shell scripting, system monitoring</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-border bg-card/50">
              <div className="text-2xl mb-2">⚙️</div>
              <h4 className="font-semibold mb-2">DevOps Fundamentals</h4>
              <p className="text-sm text-muted-foreground">CI/CD basics, Docker containers, infrastructure automation</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-border bg-card/50">
              <div className="text-2xl mb-2">☕</div>
              <h4 className="font-semibold mb-2">Java Applications</h4>
              <p className="text-sm text-muted-foreground">WildFly deployment, application server management</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get In Touch
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
