// src/components/AnimatedBackground.tsx
// Note: Primary animation is now handled by Enhanced3DBackground in Hero
// This component provides a subtle static fallback for other sections

export function AnimatedBackground() {
  return (
    <div 
      className="fixed inset-0 -z-20 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
      aria-hidden="true"
    />
  );
}