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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  Clock, 
  Code2, 
  BookOpen, 
  ArrowRight, 
  Terminal,
  Database,
  Server,
  GitBranch,
  Layers,
  Zap
} from "lucide-react";
import Link from "next/link";

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Enhanced blog post objects with more technical details - Featured posts only
  const featuredBlogPosts = [
    {
      title: "The Story of Golang: A Programming Language That Changed the Game",
      excerpt: "Deep dive into Go's concurrency model, memory management, and why Google built a new language. Exploring goroutines, channels, and the philosophy behind Go's design decisions.",
      link: "https://medium.com/@milanmadusankamms/the-story-of-golang-a-programming-language-that-changed-the-game-bbfe9a964550",
      tags: ["Go", "Concurrency", "Performance"],
      readTime: "8 min read",
      date: "Dec 2024",
      category: "Language Deep Dive",
      difficulty: "Intermediate",
      views: "2.5k",
      featured: true,
      status: "published"
    },
    {
      title: "NGINX Architecture: High-Performance Web Server Engineering",
      excerpt: "Understanding NGINX's event-driven architecture, master-worker processes, and how it handles C10K problem. Configuration optimization and performance tuning strategies.",
      link: "https://medium.com/@milanmadusankamms/introduction-to-nginx-the-silent-hero-behind-the-web-3b1756949152",
      tags: ["NGINX", "Architecture", "Performance"],
      readTime: "12 min read",
      date: "Nov 2024",
      category: "Infrastructure",
      difficulty: "Advanced",
      views: "1.8k",
      featured: true,
      status: "published"
    },
    {
      title: "Enterprise Java Deployment on RHEL: Production Best Practices",
      excerpt: "Comprehensive guide to JVM tuning, garbage collection optimization, and enterprise deployment strategies on Red Hat Enterprise Linux systems.",
      link: "https://medium.com/@milanmadusankamms/how-to-install-java-on-a-red-hat-server-rhel-centos-rocky-step-by-step-guide-897c4d194c20",
      tags: ["Java", "JVM", "Enterprise"],
      readTime: "10 min read",
      date: "Oct 2024",
      category: "DevOps",
      difficulty: "Intermediate",
      views: "3.2k",
      featured: true,
      status: "published"
    }
  ];

  // Additional blog posts for ticker
  const otherBlogPosts = [
    {
      title: "Microservices Data Patterns: From Monolith to Distributed Systems",
      excerpt: "Exploring database per service pattern, eventual consistency, saga patterns, and CQRS implementation in microservices architecture.",
      link: "#",
      tags: ["Microservices", "Database", "Architecture"],
      readTime: "15 min read",
      date: "Sep 2024",
      category: "Architecture",
      difficulty: "Advanced",
      views: "4.1k",
      featured: false,
      status: "draft"
    },
    {
      title: "Container Orchestration: Kubernetes in Production",
      excerpt: "Deep dive into K8s deployment strategies, resource management, service mesh integration, and monitoring best practices for enterprise environments.",
      link: "#",
      tags: ["Kubernetes", "Containers", "DevOps"],
      readTime: "18 min read",
      date: "Aug 2024",
      category: "Cloud Native",
      difficulty: "Expert",
      views: "5.7k",
      featured: false,
      status: "coming-soon"
    },
    {
      title: "Real-time Event Streaming with Apache Kafka",
      excerpt: "Building scalable event-driven systems with Kafka. Producer optimization, consumer groups, exactly-once semantics, and schema evolution strategies.",
      link: "#",
      tags: ["Kafka", "Streaming", "Event-Driven"],
      readTime: "14 min read",
      date: "Jul 2024",
      category: "Data Engineering",
      difficulty: "Advanced",
      views: "2.9k",
      featured: false,
      status: "draft"
    },
    {
      title: "GraphQL Federation: Scaling API Architecture",
      excerpt: "Building distributed GraphQL schemas with Apollo Federation. Schema composition, gateway patterns, and performance optimization strategies.",
      link: "#",
      tags: ["GraphQL", "API", "Federation"],
      readTime: "16 min read",
      date: "Jun 2024",
      category: "Backend",
      difficulty: "Advanced",
      views: "3.8k",
      featured: false,
      status: "draft"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-500";
      case "Intermediate": return "text-blue-500";
      case "Advanced": return "text-orange-500";
      case "Expert": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "text-green-500";
      case "draft": return "text-blue-500";
      case "coming-soon": return "text-yellow-500";
      default: return "text-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "published": return "Published";
      case "draft": return "Draft";
      case "coming-soon": return "Coming Soon";
      default: return "Unknown";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Language Deep Dive": return <Code2 className="w-4 h-4" />;
      case "Infrastructure": return <Server className="w-4 h-4" />;
      case "DevOps": return <Terminal className="w-4 h-4" />;
      case "Architecture": return <Database className="w-4 h-4" />;
      case "Cloud Native": return <Layers className="w-4 h-4" />;
      case "Data Engineering": return <GitBranch className="w-4 h-4" />;
      case "Backend": return <Code2 className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

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

  // Animation variants for featured blog posts
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
              <BookOpen className="w-8 h-8 text-primary animate-pulse" />
              <motion.div 
                className="absolute inset-0 w-8 h-8 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <div className="relative">
              <Code2 className="w-8 h-8 text-primary animate-pulse" />
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
            Deep technical insights, architectural patterns, and hands-on tutorials from the trenches of software engineering.
            Covering everything from system design to implementation details.
          </motion.p>
        </motion.div>

        {/* Featured Articles Grid - Only 3 Articles */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {featuredBlogPosts.map((post, index) => (
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
                      {getCategoryIcon(post.category)}
                      <Badge variant="secondary" className="text-xs font-medium">
                        {post.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-green-500/50 text-green-500">
                        <BookOpen className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                    </div>
                    <motion.div 
                      className={`flex items-center gap-1 text-xs ${getStatusColor(post.status)}`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {getStatusText(post.status)}
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {post.views}
                      </div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                        {post.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted text-xs rounded-full hover:bg-primary/10 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-3 py-1 bg-muted/50 text-xs rounded-full text-muted-foreground">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 pt-0">
                  <Button 
                    asChild 
                    size="sm" 
                    className="w-full group/btn"
                  >
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Articles - Infinite Scrolling Ticker */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              More Articles
            </h3>
            <p className="text-muted-foreground">
              Additional technical insights and tutorials covering diverse engineering topics
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
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the array for seamless loop */}
              {[...otherBlogPosts, ...otherBlogPosts].map((post, index) => (
                <motion.div
                  key={`ticker-${index}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(post.category)}
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <motion.div 
                          className={`flex items-center gap-1 text-xs ${getStatusColor(post.status)}`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                          {getStatusText(post.status)}
                        </motion.div>
                      </div>
                      <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-3 h-3" />
                          {post.views}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-muted/70 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-muted/50 text-xs rounded-md text-muted-foreground">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-card/80 via-card to-muted/20 backdrop-blur-sm border-2 border-border/30 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(var(--primary)/0.05), rgba(139, 69, 19, 0.05))",
                  "linear-gradient(225deg, rgba(var(--primary)/0.05), rgba(139, 69, 19, 0.05))",
                  "linear-gradient(45deg, rgba(var(--primary)/0.05), rgba(139, 69, 19, 0.05))"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10 border border-primary/20"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Terminal className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Stay Updated
                </h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                Get the latest technical articles, architectural insights, and hands-on tutorials 
                delivered straight to your inbox. Join thousands of engineers staying ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="px-8 group">
                  <a 
                    href="https://medium.com/@milanmadusankamms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Follow on Medium
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 border-primary/30 hover:border-primary">
                  <Link href="/#contact" className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Suggest a Topic
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
