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
import { Github, ExternalLink, Code2, Folder, Calendar, Star, GitBranch, Database, Zap, Layers } from "lucide-react";
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

  // Enhanced project data with more professional details
  const projects: Project[] = [
    {
      title: "Enterprise E-Commerce Platform",
      description: "Scalable microservices-based e-commerce solution with advanced analytics and real-time inventory management.",
      longDescription: "Full-stack enterprise e-commerce platform built with modern microservices architecture. Features include advanced user authentication, real-time inventory management, payment gateway integration, analytics dashboard, and automated deployment pipeline.",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      githubLink: "https://github.com/Milanz247/enterprise-ecommerce",
      liveLink: "https://enterprise-ecommerce-demo.vercel.app",
      category: "Full-Stack",
      year: "2024",
      status: "completed",
      featured: true,
    },
    {
      title: "DevOps Monitoring Dashboard",
      description: "Real-time system monitoring and alerting platform with custom metrics visualization and automated incident response.",
      longDescription: "Comprehensive DevOps monitoring solution with real-time metrics collection, custom alerting rules, automated incident response, and detailed performance analytics for microservices infrastructure.",
      technologies: ["React", "Go", "Prometheus", "Grafana", "Kubernetes", "MongoDB", "WebSocket"],
      githubLink: "https://github.com/Milanz247/devops-monitor",
      liveLink: "https://devops-monitor-demo.netlify.app",
      category: "DevOps",
      year: "2024",
      status: "in-progress",
      featured: true,
    },
    {
      title: "Real-time Analytics Engine",
      description: "Stream processing platform for real-time data analytics with interactive dashboards and automated insights.",
      longDescription: "High-performance stream processing engine for real-time analytics with support for complex event processing, interactive data visualization, automated anomaly detection, and scalable data ingestion.",
      technologies: ["Apache Kafka", "Spark", "Cassandra", "React", "D3.js", "Scala", "Elasticsearch"],
      githubLink: "https://github.com/Milanz247/analytics-engine",
      liveLink: "https://analytics-demo.example.com",
      category: "Data Engineering",
      year: "2023",
      status: "completed",
      featured: true,
    },
    {
      title: "AI-Powered Code Assistant",
      description: "Intelligent code completion and review assistant using machine learning for enhanced developer productivity.",
      longDescription: "Advanced AI-powered development tool that provides intelligent code suggestions, automated code reviews, bug detection, and performance optimization recommendations using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Vue.js", "OpenAI API", "Docker", "GCP"],
      githubLink: "https://github.com/Milanz247/ai-code-assistant",
      liveLink: "https://ai-code-assistant-demo.surge.sh",
      category: "AI/ML",
      year: "2024",
      status: "completed",
      featured: false,
    },
    {
      title: "Distributed Task Scheduler",
      description: "High-performance distributed task scheduling system with fault tolerance and horizontal scaling capabilities.",
      longDescription: "Enterprise-grade distributed task scheduler designed for high-throughput workloads with automatic failover, horizontal scaling, priority queuing, and comprehensive monitoring and logging.",
      technologies: ["Go", "etcd", "gRPC", "PostgreSQL", "RabbitMQ", "Helm", "Prometheus"],
      githubLink: "https://github.com/Milanz247/distributed-scheduler",
      liveLink: "https://scheduler-demo.example.com",
      category: "Backend",
      year: "2023",
      status: "maintenance",
      featured: false,
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code solution with automated provisioning, scaling, and cost optimization for cloud resources.",
      longDescription: "Comprehensive cloud infrastructure automation platform with Infrastructure as Code, automated resource provisioning, intelligent cost optimization, security compliance monitoring, and multi-cloud support.",
      technologies: ["Terraform", "Ansible", "AWS CDK", "Python", "Jenkins", "Vault", "Datadog"],
      githubLink: "https://github.com/Milanz247/cloud-automation",
      liveLink: "https://cloud-automation-demo.com",
      category: "Cloud",
      year: "2023",
      status: "maintenance",
      featured: false,
    },
    {
      title: "Blockchain Smart Contract Platform",
      description: "Decentralized application platform with smart contract deployment and DeFi protocols.",
      longDescription: "Modern blockchain platform for smart contract development with integrated DeFi protocols, NFT marketplace, and cross-chain compatibility.",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS", "Hardhat", "Ethereum"],
      githubLink: "https://github.com/Milanz247/blockchain-platform",
      liveLink: "https://blockchain-demo.example.com",
      category: "Blockchain",
      year: "2023",
      status: "completed",
      featured: false,
    },
    {
      title: "Mobile App Development Framework",
      description: "Cross-platform mobile development framework with native performance and modern UI components.",
      longDescription: "Comprehensive mobile development framework for cross-platform applications with native performance optimization and extensive UI component library.",
      technologies: ["React Native", "TypeScript", "Expo", "Redux", "Firebase", "iOS", "Android"],
      githubLink: "https://github.com/Milanz247/mobile-framework",
      liveLink: "https://mobile-framework-demo.com",
      category: "Mobile",
      year: "2022",
      status: "maintenance",
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
              Featured Projects
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
            Explore my most impactful projects that showcase cutting-edge technology,
            innovative solutions, and professional software engineering practices.
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
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card via-card to-muted/20 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                {/* Animated background effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, transparent, rgba(var(--primary)/0.05), transparent)",
                      "linear-gradient(225deg, transparent, rgba(var(--primary)/0.05), transparent)",
                      "linear-gradient(45deg, transparent, rgba(var(--primary)/0.05), transparent)"
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
                        className="px-3 py-1 bg-muted text-xs rounded-full hover:bg-primary/10 transition-colors duration-200"
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
                    <Button asChild size="sm" className="flex-1 group/btn">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 group/btn">
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
