"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  duration = 4000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, duration);

    // Typing effect for code
    let currentText = "";
    const codeLines = [
      "const developer = new Developer();",
      "developer.name = 'Milan Madusanka';",
      "developer.skills = ['React', 'Next.js', 'TypeScript'];",
      "developer.initialize();"
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    
    const typeTimer = setInterval(() => {
      if (lineIndex < codeLines.length) {
        if (charIndex < codeLines[lineIndex].length) {
          currentText += codeLines[lineIndex][charIndex];
          setTypedText(currentText);
          charIndex++;
        } else {
          // Move to next line
          currentText += "\n";
          setTypedText(currentText);
          lineIndex++;
          charIndex = 0;
          
          // Pause between lines
          setTimeout(() => {}, 300);
        }
      } else {
        clearInterval(typeTimer);
      }
    }, 80);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 100));
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(typeTimer);
      clearInterval(progressTimer);
    };
  }, [duration, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-primary/10" />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-8">
        {/* Logo/Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Code2 className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Name and title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Milan Madusanka
          </h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer
          </p>
        </motion.div>

        {/* Code terminal */}
        <motion.div
          className="mb-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">portfolio.js</span>
            </div>
            <div className="font-mono text-sm">
              <pre className="text-foreground whitespace-pre-wrap">
                {typedText}
                <motion.span
                  className="inline-block w-2 h-5 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Loading portfolio...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>

        {/* Simple loading dots */}
        <motion.div
          className="flex justify-center gap-1 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
