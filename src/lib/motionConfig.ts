// Motion Design System - Your Signature Animation Language

export const motionConfig = {
  // Signature easing - your brand's personality
  signature: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Bouncy, confident
  smooth: "cubic-bezier(0.23, 1, 0.32, 1)", // Apple-style smooth
  
  // Timing that feels premium
  durations: {
    micro: 200,     // Button hover
    small: 400,     // Card hover
    medium: 600,    // Section transitions
    large: 800,     // Page transitions
    cinematic: 1200 // Hero animations
  },

  // Your signature transforms
  transforms: {
    // Signature "lift and glow" effect
    lift: {
      y: -12,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.25)"
    },
    
    // Magnetic hover effect
    magnetic: {
      scale: 1.05,
      rotate: 2,
      transition: { type: "spring", stiffness: 400 }
    }
  }
};

// Consistent variants for all components
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: motionConfig.smooth
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
