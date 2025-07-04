"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
}

export const Enhanced3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with mobile optimization
    const initParticles = () => {
      particlesRef.current = [];
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile 
        ? Math.min(window.innerWidth / 16, 50)
        : Math.min(window.innerWidth / 8, 150);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2
        });
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Calculate 3D projection
        const perspective = 600;
        const projected = {
          x: (particle.x - canvas.width / 2) * (perspective / (perspective + particle.z)) + canvas.width / 2,
          y: (particle.y - canvas.height / 2) * (perspective / (perspective + particle.z)) + canvas.height / 2,
          size: particle.size * (perspective / (perspective + particle.z)),
          opacity: particle.opacity * (1 - particle.z / 1000)
        };

        // Draw particle
        ctx.save();
        ctx.globalAlpha = projected.opacity;
        ctx.fillStyle = `hsl(${240 + particle.z / 10}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, projected.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections on desktop only for performance
        if (window.innerWidth >= 768) {
          particlesRef.current.slice(index + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const otherProjected = {
                x: (otherParticle.x - canvas.width / 2) * (perspective / (perspective + otherParticle.z)) + canvas.width / 2,
                y: (otherParticle.y - canvas.height / 2) * (perspective / (perspective + otherParticle.z)) + canvas.height / 2
              };

              ctx.save();
              ctx.globalAlpha = (1 - distance / 100) * 0.3;
              ctx.strokeStyle = `hsl(${240 + (particle.z + otherParticle.z) / 20}, 70%, 60%)`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(projected.x, projected.y);
              ctx.lineTo(otherProjected.x, otherProjected.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-60 dark:opacity-40"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default Enhanced3DBackground;
