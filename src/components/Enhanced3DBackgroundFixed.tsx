"use client";

import React, { useEffect, useRef, useState } from 'react';

// DevOps Architecture Node Types
interface ArchNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'kubernetes' | 'docker' | 'server' | 'database' | 'cloud' | 'cicd' | 'terraform' | 'jenkins';
  label: string;
  pulsePhase: number;
  connections: number[];
  isHovered: boolean;
  scale: number;
  orbitAngle: number;
  orbitSpeed: number;
}

// Data flowing through the pipeline
interface DataFlow {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
  trail: { x: number; y: number }[];
}

// Floating particles for ambient effect
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const Enhanced3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<ArchNode[]>([]);
  const flowsRef = useRef<DataFlow[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Resize handling - FULL PAGE COVERAGE
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initializeArchitecture();
    };

    // Initialize DevOps Architecture
    function initializeArchitecture() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;
      
      nodesRef.current = [];
      flowsRef.current = [];
      particlesRef.current = [];

      // DevOps tool configurations
      const devopsTools: { type: ArchNode['type']; label: string }[] = [
        { type: 'kubernetes', label: 'Kubernetes' },
        { type: 'docker', label: 'Docker' },
        { type: 'server', label: 'Server' },
        { type: 'database', label: 'PostgreSQL' },
        { type: 'cloud', label: 'AWS' },
        { type: 'cicd', label: 'CI/CD' },
        { type: 'terraform', label: 'Terraform' },
        { type: 'jenkins', label: 'Jenkins' },
      ];

      // Create distributed nodes across FULL PAGE (optimized counts)
      const nodeCount = isMobile ? 6 : 12;
      const padding = isMobile ? 50 : 80;

      for (let i = 0; i < nodeCount; i++) {
        const tool = devopsTools[i % devopsTools.length];
        
        const gridCols = isMobile ? 3 : 5;
        const gridRows = Math.ceil(nodeCount / gridCols);
        const col = i % gridCols;
        const row = Math.floor(i / gridCols);
        
        const cellW = (w - padding * 2) / gridCols;
        const cellH = (h - padding * 2) / gridRows;
        
        const baseX = padding + col * cellW + cellW / 2;
        const baseY = padding + row * cellH + cellH / 2;
        
        const randomX = (Math.random() - 0.5) * cellW * 0.6;
        const randomY = (Math.random() - 0.5) * cellH * 0.6;

        nodesRef.current.push({
          x: baseX + randomX,
          y: baseY + randomY,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          type: tool.type,
          label: tool.label,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
          isHovered: false,
          scale: 1,
          orbitAngle: Math.random() * Math.PI * 2,
          orbitSpeed: 0.001 + Math.random() * 0.002
        });
      }

      // Create pipeline connections
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.forEach((other, j) => {
          if (i !== j && node.connections.length < 3) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = isMobile ? 200 : 350;
            if (dist < maxDist) {
              node.connections.push(j);
            }
          }
        });
      });

      // Initialize data flows (optimized)
      const flowColors = ['#34D399', '#60A5FA', '#FB923C', '#A78BFA', '#F472B6'];
      const flowCount = isMobile ? 4 : 8;
      
      for (let i = 0; i < flowCount; i++) {
        const fromNode = Math.floor(Math.random() * nodesRef.current.length);
        const node = nodesRef.current[fromNode];
        if (node.connections.length > 0) {
          flowsRef.current.push({
            fromNode,
            toNode: node.connections[Math.floor(Math.random() * node.connections.length)],
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.005,
            color: flowColors[i % flowColors.length],
            size: 4 + Math.random() * 3,
            trail: []
          });
        }
      }

      // Initialize floating particles (optimized for performance)
      const particleCount = isMobile ? 15 : 30;
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 1 + Math.random() * 2,
          alpha: 0.08 + Math.random() * 0.15,
          color: flowColors[Math.floor(Math.random() * flowColors.length)]
        });
      }
    }

    // Draw hexagonal grid pattern
    function drawHexGrid(ctx: CanvasRenderingContext2D, time: number) {
      const isDark = document.documentElement.classList.contains('dark');
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      ctx.save();
      const hexSize = 40;
      const hexHeight = hexSize * Math.sqrt(3);
      const alpha = isDark ? 0.025 : 0.08;
      
      ctx.strokeStyle = isDark ? `rgba(100, 149, 237, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
      ctx.lineWidth = 1;

      for (let row = -1; row < h / hexHeight + 1; row++) {
        for (let col = -1; col < w / (hexSize * 1.5) + 1; col++) {
          const x = col * hexSize * 1.5 + (time * 0.01 % (hexSize * 3));
          const y = row * hexHeight + (col % 2) * (hexHeight / 2);
          
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + Math.PI / 6;
            const hx = x + hexSize * 0.6 * Math.cos(angle);
            const hy = y + hexSize * 0.6 * Math.sin(angle);
            if (i === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // Get color for node type
    function getNodeColor(type: ArchNode['type']): string {
      const colors: Record<string, string> = {
        kubernetes: '#326CE5',
        docker: '#2496ED',
        server: '#6495ED',
        database: '#336791',
        cloud: '#FF9900',
        cicd: '#34D399',
        terraform: '#7B42BC',
        jenkins: '#D33833'
      };
      return colors[type] || '#6495ED';
    }

    // Draw DevOps icon based on type
    function drawDevOpsIcon(ctx: CanvasRenderingContext2D, node: ArchNode, time: number) {
      const isDark = document.documentElement.classList.contains('dark');
      const pulse = Math.sin(time * 0.003 + node.pulsePhase) * 0.2 + 0.8;
      const scale = node.scale * (node.isHovered ? 1.3 : 1);
      const size = 18 * scale;
      const nodeColor = getNodeColor(node.type);
      
      ctx.save();
      ctx.translate(node.x, node.y);
      
      // Glow effect
      const glowSize = node.isHovered ? 45 : 28;
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
      const glowAlpha = (node.isHovered ? 0.4 : 0.15) * pulse;
      const alphaHex = Math.floor(glowAlpha * 255).toString(16).padStart(2, '0');
      gradient.addColorStop(0, nodeColor + alphaHex);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Main icon (reduced opacity for subtlety)
      const alpha = isDark ? 0.6 : 0.85;
      ctx.globalAlpha = alpha * pulse;
      ctx.strokeStyle = nodeColor;
      ctx.fillStyle = nodeColor + '30';
      ctx.lineWidth = node.isHovered ? 2.5 : 2;

      switch (node.type) {
        case 'kubernetes':
          // K8s helm/wheel icon
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.7, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          // Seven spokes
          for (let i = 0; i < 7; i++) {
            const angle = (i / 7) * Math.PI * 2 - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(Math.cos(angle) * size, Math.sin(angle) * size, 3, 0, Math.PI * 2);
            ctx.fill();
          }
          break;

        case 'docker':
          // Docker container
          const containerW = size * 1.4;
          const containerH = size * 0.8;
          ctx.fillRect(-containerW/2, -containerH/2, containerW, containerH);
          ctx.strokeRect(-containerW/2, -containerH/2, containerW, containerH);
          const blockSize = containerW / 5;
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 4; c++) {
              ctx.strokeRect(
                -containerW/2 + 2 + c * blockSize,
                -containerH/2 + 2 + r * (containerH/2 - 2),
                blockSize - 2,
                containerH/2 - 4
              );
            }
          }
          break;

        case 'server':
          // Server rack
          ctx.fillRect(-size, -size, size * 2, size * 2);
          ctx.strokeRect(-size, -size, size * 2, size * 2);
          for (let i = 0; i < 3; i++) {
            const y = -size + 5 + i * (size * 2 / 3);
            ctx.beginPath();
            ctx.moveTo(-size + 3, y);
            ctx.lineTo(size - 3, y);
            ctx.stroke();
            ctx.fillStyle = i === 0 ? '#34D399' : nodeColor + '50';
            ctx.beginPath();
            ctx.arc(size - 6, y - 4, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = nodeColor + '30';
          }
          break;

        case 'database':
          // Database cylinder
          const dbW = size * 0.9;
          const dbH = size * 1.2;
          ctx.beginPath();
          ctx.ellipse(0, -dbH/2, dbW, dbW * 0.35, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-dbW, -dbH/2);
          ctx.lineTo(-dbW, dbH/2);
          ctx.ellipse(0, dbH/2, dbW, dbW * 0.35, 0, Math.PI, 0, true);
          ctx.lineTo(dbW, -dbH/2);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(0, 0, dbW, dbW * 0.35, 0, 0, Math.PI * 2);
          ctx.stroke();
          break;

        case 'cloud':
          // Cloud shape
          ctx.beginPath();
          ctx.arc(-size * 0.3, 0, size * 0.5, Math.PI * 0.5, Math.PI * 1.5);
          ctx.arc(0, -size * 0.35, size * 0.45, Math.PI, 0);
          ctx.arc(size * 0.35, size * 0.1, size * 0.4, Math.PI * 1.5, Math.PI * 0.5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;

        case 'cicd':
          // CI/CD infinity loop
          ctx.beginPath();
          ctx.arc(-size * 0.4, 0, size * 0.4, Math.PI * 0.5, Math.PI * 1.5, true);
          ctx.arc(size * 0.4, 0, size * 0.4, Math.PI * 1.5, Math.PI * 0.5, true);
          ctx.stroke();
          ctx.fill();
          // Arrows
          ctx.beginPath();
          ctx.moveTo(size * 0.7, -4);
          ctx.lineTo(size * 0.9, 0);
          ctx.lineTo(size * 0.7, 4);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-size * 0.7, 4);
          ctx.lineTo(-size * 0.9, 0);
          ctx.lineTo(-size * 0.7, -4);
          ctx.stroke();
          break;

        case 'terraform':
          // Terraform blocks
          const tSize = size * 0.4;
          ctx.beginPath();
          ctx.moveTo(-tSize * 1.5, -tSize);
          ctx.lineTo(-tSize * 0.5, -tSize * 0.5);
          ctx.lineTo(-tSize * 0.5, tSize);
          ctx.lineTo(-tSize * 1.5, tSize * 0.5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(tSize * 0.5, -tSize * 0.5);
          ctx.lineTo(tSize * 1.5, -tSize);
          ctx.lineTo(tSize * 1.5, tSize * 0.5);
          ctx.lineTo(tSize * 0.5, tSize);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-tSize * 0.5, -tSize * 1.2);
          ctx.lineTo(tSize * 0.5, -tSize * 0.7);
          ctx.lineTo(tSize * 0.5, -tSize * 0.2);
          ctx.lineTo(-tSize * 0.5, -tSize * 0.7);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;

        case 'jenkins':
          // Jenkins circle with J
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.font = `bold ${size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = nodeColor;
          ctx.fillText('J', 0, 2);
          break;
      }

      // Label on hover
      if (node.isHovered) {
        ctx.globalAlpha = 1;
        ctx.font = 'bold 12px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = isDark ? '#fff' : '#0f172a';
        ctx.fillText(node.label, 0, size + 22);
      }

      ctx.restore();
    }

    // Draw pipeline connections
    function drawPipelines(ctx: CanvasRenderingContext2D, time: number) {
      const isDark = document.documentElement.classList.contains('dark');
      
      ctx.save();
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach(j => {
          if (j > i) {
            const other = nodesRef.current[j];
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            const alpha = isDark ? 0.12 : 0.18;
            gradient.addColorStop(0, `rgba(37, 99, 235, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(16, 185, 129, ${alpha * 1.5})`);
            gradient.addColorStop(1, `rgba(37, 99, 235, ${alpha})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            ctx.lineDashOffset = -time * 0.03;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
      ctx.setLineDash([]);
      ctx.restore();
    }

    // Draw data flows with trails
    function drawDataFlows(ctx: CanvasRenderingContext2D) {
      flowsRef.current.forEach(flow => {
        const from = nodesRef.current[flow.fromNode];
        const to = nodesRef.current[flow.toNode];
        if (!from || !to) return;

        const x = from.x + (to.x - from.x) * flow.progress;
        const y = from.y + (to.y - from.y) * flow.progress;

        // Trail
        ctx.save();
        flow.trail.forEach((point, idx) => {
          const trailAlpha = (idx / flow.trail.length) * 0.6;
          const alphaHex = Math.floor(trailAlpha * 255).toString(16).padStart(2, '0');
          ctx.fillStyle = flow.color + alphaHex;
          ctx.beginPath();
          ctx.arc(point.x, point.y, flow.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();

        flow.trail.push({ x, y });
        if (flow.trail.length > 15) flow.trail.shift();

        // Main packet glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, flow.size * 3);
        gradient.addColorStop(0, flow.color + 'CC');
        gradient.addColorStop(0.5, flow.color + '66');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, flow.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = flow.color;
        ctx.beginPath();
        ctx.arc(x, y, flow.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        flow.progress += flow.speed;
        if (flow.progress >= 1) {
          const newFrom = flow.toNode;
          const node = nodesRef.current[newFrom];
          if (node && node.connections.length > 0) {
            flow.fromNode = newFrom;
            flow.toNode = node.connections[Math.floor(Math.random() * node.connections.length)];
            flow.progress = 0;
            flow.trail = [];
          }
        }
      });
    }

    // Draw floating particles
    function drawParticles(ctx: CanvasRenderingContext2D) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      particlesRef.current.forEach(p => {
        const alphaHex = Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = p.color + alphaHex;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });
    }

    // Update node positions
    function updateNodes() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      nodesRef.current.forEach(node => {
        node.orbitAngle += node.orbitSpeed;
        const orbitRadius = 5;
        node.x += Math.cos(node.orbitAngle) * orbitRadius * 0.02;
        node.y += Math.sin(node.orbitAngle) * orbitRadius * 0.02;

        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        node.isHovered = dist < 60;
        const targetScale = node.isHovered ? 1.2 : 1;
        node.scale += (targetScale - node.scale) * 0.1;

        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150 * 0.5;
          node.x -= (dx / dist) * force;
          node.y -= (dy / dist) * force;
        }

        const padding = 50;
        if (node.x < padding) node.x = padding;
        if (node.x > w - padding) node.x = w - padding;
        if (node.y < padding) node.y = padding;
        if (node.y > h - padding) node.y = h - padding;
      });
    }

    // Main animation loop
    const animate = () => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = ctxRef.current;
      if (!ctx) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      timeRef.current += 16;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      drawHexGrid(ctx, timeRef.current);
      drawPipelines(ctx, timeRef.current);
      drawParticles(ctx);
      updateNodes();
      nodesRef.current.forEach(node => drawDevOpsIcon(ctx, node, timeRef.current));
      drawDataFlows(ctx);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
};

export default Enhanced3DBackground;
