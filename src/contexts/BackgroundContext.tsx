"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type BackgroundType = 
  | 'network-flow'
  | 'particle-constellation'
  | 'terminal-rain'
  | 'enhanced-3d'
  | 'circuit-board';

interface BackgroundContextType {
  background: BackgroundType;
  setBackground: (bg: BackgroundType) => void;
  cycleBackground: () => void;
  backgroundName: string;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

const BACKGROUND_NAMES: Record<BackgroundType, string> = {
  'network-flow': 'Network Flow',
  'particle-constellation': 'Particles',
  'terminal-rain': 'Terminal Rain',
  'enhanced-3d': 'DevOps 3D',
  'circuit-board': 'Circuit Board'
};

const BACKGROUNDS: BackgroundType[] = [
  'network-flow',
  'particle-constellation',
  'terminal-rain',
  'enhanced-3d',
  'circuit-board'
];

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [background, setBackgroundState] = useState<BackgroundType>('network-flow');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const saved = localStorage.getItem('portfolio-background') as BackgroundType;
    if (saved && BACKGROUNDS.includes(saved)) {
      setBackgroundState(saved);
    }
  }, []);

  const setBackground = (bg: BackgroundType) => {
    setBackgroundState(bg);
    if (mounted) {
      localStorage.setItem('portfolio-background', bg);
    }
  };

  const cycleBackground = () => {
    const currentIndex = BACKGROUNDS.indexOf(background);
    const nextIndex = (currentIndex + 1) % BACKGROUNDS.length;
    setBackground(BACKGROUNDS[nextIndex]);
  };

  const backgroundName = BACKGROUND_NAMES[background];

  return (
    <BackgroundContext.Provider value={{ background, setBackground, cycleBackground, backgroundName }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}
