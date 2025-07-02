"use client";

import { motion } from "framer-motion";

interface JumpingDotsProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

const JumpingDots: React.FC<JumpingDotsProps> = ({ 
  size = "md", 
  color = "primary",
  className = "" 
}) => {
  // Size configurations
  const sizeConfig = {
    sm: "w-2 h-2",
    md: "w-3 h-3", 
    lg: "w-4 h-4"
  };

  // Color configurations
  const colorConfig = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent"
  };

  // Animation variants for the jumping dots
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -15 },
  };

  return (
    <div className={`flex space-x-1 items-center justify-center ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizeConfig[size]} ${colorConfig[color]} rounded-full`}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.15, // Staggered animation
          }}
        />
      ))}
    </div>
  );
};

export default JumpingDots;
