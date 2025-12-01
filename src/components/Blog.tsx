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
  Server
} from "lucide-react";

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Featured blog posts only - real, published articles
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Language Deep Dive": return <Code2 className="w-4 h-4" />;
      case "Infrastructure": return <Server className="w-4 h-4" />;
      case "DevOps": return <Terminal className="w-4 h-4" />;
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
        staggerChildren: 0.2,
      },
    },
  };

  const featuredCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/5 via-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Featured Articles
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Technical insights and tutorials from my software engineering journey.
          </p>
        </motion.div>

        {/* Featured Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {featuredBlogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={featuredCardVariants}
              className="group"
            >
              <Card className="h-full border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(post.category)}
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <span className={`text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty}
                    </span>
                  </div>
                  
                  <CardTitle className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Meta Info */}
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
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
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-muted text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button 
                    asChild 
                    size="sm" 
                    className="w-full"
                  >
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm mb-4">
            More articles on Medium
          </p>
          <Button asChild variant="outline">
            <a 
              href="https://medium.com/@milanmadusankamms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Follow on Medium
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
