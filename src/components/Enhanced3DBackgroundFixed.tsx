"use client";

import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  type: 'server' | 'container' | 'database' | 'cloud' | 'monitor';
  pulsePhase: number;
  connections: number[];
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  active: boolean;
}

export const Enhanced3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let gridOffset = 0;

    const resizeCanvas = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initNodes();
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize network nodes
    function initNodes() {
      nodesRef.current = [];
      packetsRef.current = [];
      
      const isMobile = window.innerWidth < 768;
      const nodeCount = isMobile ? 6 : 12;
      const types: Node['type'][] = ['server', 'container', 'database', 'cloud', 'monitor'];
      
      // Create nodes in a distributed pattern
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const radius = Math.min(canvas!.width, canvas!.height) * (0.2 + Math.random() * 0.15);
        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;
        
        nodesRef.current.push({
          x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 100,
          y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 100,
          type: types[i % types.length],
          pulsePhase: Math.random() * Math.PI * 2,
          connections: []
        });
      }
      
      // Create connections between nearby nodes
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 300 && node.connections.length < 3) {
              node.connections.push(j);
            }
          }
        });
      });
      
      // Initialize data packets
      for (let i = 0; i < (isMobile ? 3 : 6); i++) {
        const fromNode = Math.floor(Math.random() * nodesRef.current.length);
        const node = nodesRef.current[fromNode];
        if (node.connections.length > 0) {
          packetsRef.current.push({
            fromNode,
            toNode: node.connections[Math.floor(Math.random() * node.connections.length)],
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.004,
            active: true
          });
        }
      }
    }

    // Draw infrastructure grid
    function drawGrid() {
      const gridSize = 50;
      const isDark = document.documentElement.classList.contains('dark');
      
      ctx!.save();
      ctx!.strokeStyle = isDark ? 'rgba(100, 149, 237, 0.03)' : 'rgba(100, 149, 237, 0.05)';
      ctx!.lineWidth = 1;
      
      // Horizontal lines with subtle animation
      for (let y = (gridOffset % gridSize); y < canvas!.height; y += gridSize) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(canvas!.width, y);
        ctx!.stroke();
      }
      
      // Vertical lines
      for (let x = (gridOffset % gridSize); x < canvas!.width; x += gridSize) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, canvas!.height);
        ctx!.stroke();
      }
      
      ctx!.restore();
    }

    // Draw node based on type
    function drawNode(node: Node, time: number) {
      const isDark = document.documentElement.classList.contains('dark');
      const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.3 + 0.7;
      const baseAlpha = isDark ? 0.4 : 0.5;
      
      ctx!.save();
      
      // Subtle glow effect
      const gradient = ctx!.createRadialGradient(node.x, node.y, 0, node.x, node.y, 25);
      gradient.addColorStop(0, isDark ? `rgba(100, 149, 237, ${baseAlpha * pulse * 0.3})` : `rgba(59, 130, 246, ${baseAlpha * pulse * 0.2})`);
      gradient.addColorStop(1, 'rgba(100, 149, 237, 0)');
      ctx!.fillStyle = gradient;
      ctx!.beginPath();
      ctx!.arc(node.x, node.y, 25, 0, Math.PI * 2);
      ctx!.fill();
      
      // Node icon based on type
      ctx!.globalAlpha = baseAlpha * pulse;
      ctx!.strokeStyle = isDark ? '#6495ED' : '#3B82F6';
      ctx!.fillStyle = isDark ? 'rgba(100, 149, 237, 0.1)' : 'rgba(59, 130, 246, 0.08)';
      ctx!.lineWidth = 1.5;
      
      const size = 12;
      
      switch (node.type) {
        case 'server':
          // Server rack icon
          ctx!.fillRect(node.x - size, node.y - size, size * 2, size * 2);
          ctx!.strokeRect(node.x - size, node.y - size, size * 2, size * 2);
          ctx!.beginPath();
          ctx!.moveTo(node.x - size + 3, node.y - 4);
          ctx!.lineTo(node.x + size - 3, node.y - 4);
          ctx!.moveTo(node.x - size + 3, node.y + 4);
          ctx!.lineTo(node.x + size - 3, node.y + 4);
          ctx!.stroke();
          break;
          
        case 'container':
          // Container/Docker icon
          ctx!.strokeRect(node.x - size, node.y - size * 0.7, size * 2, size * 1.4);
          ctx!.fillRect(node.x - size, node.y - size * 0.7, size * 2, size * 1.4);
          // Container segments
          for (let i = 0; i < 3; i++) {
            ctx!.strokeRect(node.x - size + 2 + i * 7, node.y - size * 0.5, 5, size);
          }
          break;
          
        case 'database':
          // Database cylinder
          ctx!.beginPath();
          ctx!.ellipse(node.x, node.y - size * 0.6, size, size * 0.4, 0, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.moveTo(node.x - size, node.y - size * 0.6);
          ctx!.lineTo(node.x - size, node.y + size * 0.6);
          ctx!.ellipse(node.x, node.y + size * 0.6, size, size * 0.4, 0, Math.PI, Math.PI * 2);
          ctx!.lineTo(node.x + size, node.y - size * 0.6);
          ctx!.fill();
          ctx!.stroke();
          break;
          
        case 'cloud':
          // Cloud icon
          ctx!.beginPath();
          ctx!.arc(node.x - 5, node.y, 8, Math.PI * 0.5, Math.PI * 1.5);
          ctx!.arc(node.x, node.y - 6, 8, Math.PI, Math.PI * 2);
          ctx!.arc(node.x + 6, node.y, 8, Math.PI * 1.5, Math.PI * 0.5);
          ctx!.closePath();
          ctx!.fill();
          ctx!.stroke();
          break;
          
        case 'monitor':
          // Monitoring/metrics icon
          ctx!.strokeRect(node.x - size, node.y - size * 0.7, size * 2, size * 1.4);
          ctx!.fillRect(node.x - size, node.y - size * 0.7, size * 2, size * 1.4);
          // Chart line
          ctx!.beginPath();
          ctx!.moveTo(node.x - 8, node.y + 4);
          ctx!.lineTo(node.x - 3, node.y - 2);
          ctx!.lineTo(node.x + 2, node.y + 2);
          ctx!.lineTo(node.x + 8, node.y - 6);
          ctx!.stroke();
          break;
      }
      
      ctx!.restore();
    }

    // Draw connections between nodes
    function drawConnections(time: number) {
      const isDark = document.documentElement.classList.contains('dark');
      
      ctx!.save();
      ctx!.lineWidth = 1;
      
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach(j => {
          if (j > i) { // Avoid drawing twice
            const otherNode = nodesRef.current[j];
            const gradient = ctx!.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
            const alpha = isDark ? 0.15 : 0.12;
            gradient.addColorStop(0, `rgba(100, 149, 237, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(100, 149, 237, ${alpha * 1.5})`);
            gradient.addColorStop(1, `rgba(100, 149, 237, ${alpha})`);
            
            ctx!.strokeStyle = gradient;
            ctx!.setLineDash([4, 4]);
            ctx!.lineDashOffset = -time * 0.02;
            ctx!.beginPath();
            ctx!.moveTo(node.x, node.y);
            ctx!.lineTo(otherNode.x, otherNode.y);
            ctx!.stroke();
          }
        });
      });
      
      ctx!.setLineDash([]);
      ctx!.restore();
    }

    // Draw data packets
    function drawPackets() {
      const isDark = document.documentElement.classList.contains('dark');
      
      packetsRef.current.forEach(packet => {
        if (!packet.active) return;
        
        const fromNode = nodesRef.current[packet.fromNode];
        const toNode = nodesRef.current[packet.toNode];
        
        const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;
        
        // Packet glow
        ctx!.save();
        const gradient = ctx!.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, isDark ? 'rgba(52, 211, 153, 0.6)' : 'rgba(16, 185, 129, 0.5)');
        gradient.addColorStop(1, 'rgba(52, 211, 153, 0)');
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(x, y, 8, 0, Math.PI * 2);
        ctx!.fill();
        
        // Packet core
        ctx!.fillStyle = isDark ? '#34D399' : '#10B981';
        ctx!.beginPath();
        ctx!.arc(x, y, 3, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
        
        // Update packet position
        packet.progress += packet.speed;
        
        // Reset packet when it reaches destination
        if (packet.progress >= 1) {
          const newFromNode = packet.toNode;
          const node = nodesRef.current[newFromNode];
          if (node.connections.length > 0) {
            packet.fromNode = newFromNode;
            packet.toNode = node.connections[Math.floor(Math.random() * node.connections.length)];
            packet.progress = 0;
            packet.speed = 0.003 + Math.random() * 0.004;
          }
        }
      });
    }

    // Animation loop
    const animate = () => {
      timeRef.current += 16;
      gridOffset += 0.1;
      
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Draw layers
      drawGrid();
      drawConnections(timeRef.current);
      nodesRef.current.forEach(node => drawNode(node, timeRef.current));
      drawPackets();

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
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
};

export default Enhanced3DBackground;
