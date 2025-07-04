// 🚀 PERFORMANCE-OPTIMIZED LOADING SCREEN
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Code2 } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
  enableTypewriter?: boolean;
}

const LoadingScreenOptimized: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  duration = 3000, // Reduced from 4000
  enableTypewriter = true
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);

  // ✅ PERFORMANCE FIX: Memoized code lines
  const codeLines = useMemo(() => [
    "const milan = new SystemEngineer();",
    "milan.skills = ['React', 'Linux', 'DevOps'];", 
    "milan.philosophy = 'Code. Deploy. Scale.';",
    "milan.initialize().then(() => ready());"
  ], []);

  // ✅ PERFORMANCE FIX: Optimized typing effect with RAF
  const typewriterEffect = useCallback(() => {
    if (!enableTypewriter) return;

    let currentText = "";
    let lineIndex = 0;
    let charIndex = 0;
    let lastTime = 0;
    const typingSpeed = 30; // ms per character

    const type = (currentTime: number) => {
      if (currentTime - lastTime >= typingSpeed) {
        if (lineIndex < codeLines.length) {
          if (charIndex < codeLines[lineIndex].length) {
            currentText += codeLines[lineIndex][charIndex];
            setTypedText(currentText);
            charIndex++;
          } else {
            currentText += "\n";
            setTypedText(currentText);
            lineIndex++;
            charIndex = 0;
          }
          lastTime = currentTime;
        }
      }

      if (lineIndex < codeLines.length) {
        requestAnimationFrame(type);
      }
    };

    requestAnimationFrame(type);
  }, [codeLines, enableTypewriter]);

  // ✅ PERFORMANCE FIX: Optimized progress animation
  useEffect(() => {
    const startTime = Date.now();
    let rafId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onLoadingComplete?.();
        }, 200);
      }
    };

    rafId = requestAnimationFrame(updateProgress);
    typewriterEffect();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [duration, onLoadingComplete, typewriterEffect]);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
      >
        <div className="text-center space-y-8 px-4 max-w-2xl">
          {/* ✅ OPTIMIZED ICON ANIMATION */}
          <motion.div
            className="relative mx-auto w-24 h-24 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-20 animate-pulse" />
            <div className="relative z-10 w-full h-full rounded-full bg-background border-4 border-primary/20 flex items-center justify-center">
              <Code2 className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          {/* ✅ OPTIMIZED TYPEWRITER (only if enabled) */}
          {enableTypewriter && (
            <motion.div
              className="bg-slate-900 dark:bg-slate-800 rounded-lg p-6 font-mono text-sm text-left max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-400 text-xs ml-2">index.js</span>
              </div>
              <pre className="text-green-400 leading-relaxed whitespace-pre-wrap">
                {typedText}
                <motion.span
                  className="inline-block w-2 h-5 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </pre>
            </motion.div>
          )}

          {/* ✅ SIMPLIFIED PROGRESS BAR */}
          <div className="space-y-4">
            <motion.div 
              className="text-lg font-medium text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Initializing Portfolio...
            </motion.div>
            
            <div className="w-full max-w-xs mx-auto bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            <motion.div 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreenOptimized;
