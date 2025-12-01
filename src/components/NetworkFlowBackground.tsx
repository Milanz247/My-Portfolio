"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function NetworkFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI support
    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initNodes(rect.width, rect.height);
    };

    const initNodes = (width: number, height: number) => {
      const nodeCount = Math.floor((width * height) / 25000); // Sparse nodes
      const nodes: Node[] = [];
      
      for (let i = 0; i < Math.min(nodeCount, 40); i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2 + Math.random() * 2,
          connections: []
        });
      }
      
      // Create connections based on proximity
      updateConnections(nodes, width);
      nodesRef.current = nodes;
      packetsRef.current = [];
    };

    const updateConnections = (nodes: Node[], maxDist: number) => {
      const connectionDistance = Math.min(maxDist * 0.25, 200);
      
      nodes.forEach((node, i) => {
        node.connections = [];
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dist = Math.hypot(node.x - other.x, node.y - other.y);
            if (dist < connectionDistance && node.connections.length < 3) {
              node.connections.push(j);
            }
          }
        });
      });
    };

    const spawnPacket = () => {
      const nodes = nodesRef.current;
      if (nodes.length < 2 || packetsRef.current.length > 15) return;
      
      const fromNode = Math.floor(Math.random() * nodes.length);
      const connections = nodes[fromNode].connections;
      if (connections.length === 0) return;
      
      const toNode = connections[Math.floor(Math.random() * connections.length)];
      
      packetsRef.current.push({
        fromNode,
        toNode,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01
      });
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      ctx.clearRect(0, 0, width, height);
      
      const isDark = resolvedTheme === 'dark';
      const nodes = nodesRef.current;
      const packets = packetsRef.current;
      const mouse = mouseRef.current;

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        
        // Keep in bounds
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
        
        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100 * 0.5;
          node.x += (dx / dist) * force;
          node.y += (dy / dist) * force;
        }
      });

      // Periodically update connections
      if (Math.random() < 0.02) {
        updateConnections(nodes, width);
      }

      // Draw connections
      nodes.forEach((node) => {
        node.connections.forEach(j => {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          const maxDist = Math.min(width * 0.25, 200);
          const alpha = Math.max(0, 1 - dist / maxDist);
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          
          if (isDark) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${alpha * 0.15})`;
          } else {
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.35})`;
          }
          ctx.lineWidth = isDark ? 1 : 1.5;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        
        if (isDark) {
          gradient.addColorStop(0, 'rgba(100, 200, 255, 0.3)');
          gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0.45)');
          gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
        }
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = 'rgba(100, 200, 255, 0.6)';
        } else {
          ctx.fillStyle = 'rgba(37, 99, 235, 0.7)';
        }
        ctx.fill();
      });

      // Update and draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i];
        packet.progress += packet.speed;
        
        if (packet.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }
        
        const from = nodes[packet.fromNode];
        const to = nodes[packet.toNode];
        if (!from || !to) {
          packets.splice(i, 1);
          continue;
        }
        
        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;
        
        // Packet glow
        const packetGradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        if (isDark) {
          packetGradient.addColorStop(0, 'rgba(0, 255, 150, 0.8)');
          packetGradient.addColorStop(0.5, 'rgba(0, 255, 150, 0.3)');
          packetGradient.addColorStop(1, 'rgba(0, 255, 150, 0)');
        } else {
          packetGradient.addColorStop(0, 'rgba(16, 185, 129, 0.9)');
          packetGradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.4)');
          packetGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
        }
        
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = packetGradient;
        ctx.fill();
        
        // Packet core
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = 'rgba(0, 255, 150, 1)';
        } else {
          ctx.fillStyle = 'rgba(5, 150, 105, 1)';
        }
        ctx.fill();
      }

      // Spawn new packets occasionally
      if (Math.random() < 0.03) {
        spawnPacket();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      resize();
      // Draw static frame
      const drawStatic = () => {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        const isDark = resolvedTheme === 'dark';
        
        nodesRef.current.forEach((node) => {
          // Draw connections
          node.connections.forEach(j => {
            const other = nodesRef.current[j];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isDark ? 'rgba(100, 200, 255, 0.1)' : 'rgba(30, 100, 160, 0.15)';
            ctx.stroke();
          });
          
          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 'rgba(100, 200, 255, 0.4)' : 'rgba(30, 100, 160, 0.35)';
          ctx.fill();
        });
      };
      drawStatic();
      return;
    }

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}

export default NetworkFlowBackground;
