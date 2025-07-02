"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiLaravel, 
  SiNginx, 
  SiRedhat, 
  SiLinux,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiGooglecloud
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const techStack: TechItem[] = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Nginx", icon: <SiNginx />, color: "#009639" },
  { name: "Red Hat", icon: <SiRedhat />, color: "#EE0000" },
  { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
];

const TechStackTicker: React.FC = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden w-full">
      <div className="container mx-auto px-4 mb-12 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Tech Stack */}
      <div className="relative tech-stack-ticker overflow-hidden w-full">
        {/* First row - Left to Right */}
        <motion.div
          className="flex items-center gap-8 mb-8 will-change-transform"
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ minWidth: "max-content" }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <motion.div
              key={`row1-${index}`}
              className="tech-item flex items-center gap-3 bg-card hover:bg-card/80 rounded-xl px-6 py-4 shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-300 min-w-fit group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="text-2xl transition-colors duration-300"
                style={{ color: tech.color }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - Right to Left */}
        <motion.div
          className="flex items-center gap-8 will-change-transform"
          animate={{
            x: [-50 * techStack.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ minWidth: "max-content" }}
        >
          {duplicatedTechStack.slice().reverse().map((tech, index) => (
            <motion.div
              key={`row2-${index}`}
              className="tech-item flex items-center gap-3 bg-card hover:bg-card/80 rounded-xl px-6 py-4 shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-300 min-w-fit group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="text-2xl transition-colors duration-300"
                style={{ color: tech.color }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: -360,
                  transition: { duration: 0.5 }
                }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-4">
          Always learning and exploring new technologies
        </p>
        <motion.div
          className="inline-flex items-center gap-2 text-primary font-medium"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span>Let&apos;s build something amazing together</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStackTicker;
