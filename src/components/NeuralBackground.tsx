import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Terminal, Eye, EyeOff } from 'lucide-react';

interface Props {
  mode?: 'neural' | 'matrix';
  onToggleMode?: () => void;
}

export const NeuralBackground: React.FC<Props> = ({ mode: externalMode, onToggleMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [internalMode, setInternalMode] = useState<'neural' | 'matrix'>('neural');
  const [lowPower, setLowPower] = useState(false);
  const mode = externalMode || internalMode;
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({ x: -1000, y: -1000, radius: 160 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Neural Network particles setup
    const particleCount = lowPower ? 40 : Math.min(Math.floor((width * height) / 18000), 85);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
      layer: number;
      activity: number;
    }

    const particles: Particle[] = [];
    const colors = ['#00F0FF', '#A855F7', '#38BDF8', '#C084FC'];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.2,
        color,
        glowColor: color,
        layer: Math.floor(Math.random() * 3),
        activity: Math.random(),
      });
    }

    // Matrix Rain setup
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];
    const matrixChars = '0123456789ABCDEF<>/{}=+*λσπθ∇∫Σ∂ΔW_tW_xθ_kRoBERTaPyTorchJavaSpringKafka';
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }

    let frame = 0;

    const render = () => {
      frame++;

      if (mode === 'neural') {
        // Subtle dark background clear
        ctx.fillStyle = 'rgba(11, 17, 33, 0.28)';
        ctx.fillRect(0, 0, width, height);

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse influence (attract slightly)
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRef.current.radius) {
            const force = (1 - dist / mouseRef.current.radius) * 0.6;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.glowColor;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Connect nearby nodes
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const connDx = p.x - p2.x;
            const connDy = p.y - p2.y;
            const connDist = Math.sqrt(connDx * connDx + connDy * connDy);

            const maxDist = 135;
            if (connDist < maxDist) {
              const alpha = (1 - connDist / maxDist) * 0.28;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              
              // Pulsing gradient connection
              const isCyan = i % 2 === 0;
              ctx.strokeStyle = isCyan
                ? `rgba(0, 240, 255, ${alpha})`
                : `rgba(168, 85, 247, ${alpha})`;
              ctx.lineWidth = alpha * 1.5;
              ctx.stroke();

              // Occasionally draw a flowing synaptic packet
              if ((frame + i * 17) % 180 < 30) {
                const progress = ((frame + i * 17) % 180) / 30;
                const sx = p.x + (p2.x - p.x) * progress;
                const sy = p.y + (p2.y - p.y) * progress;
                ctx.beginPath();
                ctx.arc(sx, sy, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = '#00F0FF';
                ctx.shadowBlur = 6;
                ctx.shadowColor = '#00F0FF';
                ctx.fill();
                ctx.shadowBlur = 0;
              }
            }
          }
        }
      } else {
        // Matrix Code Rain
        ctx.fillStyle = 'rgba(11, 17, 33, 0.16)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Head of drop is bright white/cyan, tail is electric purple/teal
          if (Math.random() > 0.85) {
            ctx.fillStyle = '#00F0FF';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00F0FF';
          } else {
            ctx.fillStyle = i % 3 === 0 ? 'rgba(168, 85, 247, 0.85)' : 'rgba(0, 240, 255, 0.65)';
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mode, lowPower]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Background vignette & cyber grid overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.07),rgba(11,17,33,0.85)_80%)] pointer-events-none"
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"
      />

      {/* Floating Canvas Mode Switcher Widget */}
      <div className="absolute top-20 right-4 md:right-8 pointer-events-auto z-20 flex items-center gap-1.5 p-1 bg-[#0F172A]/80 backdrop-blur-md border border-slate-800 rounded-full shadow-lg text-xs text-slate-400">
        <button
          id="toggle-bg-neural"
          type="button"
          onClick={() => {
            if (onToggleMode) onToggleMode();
            else setInternalMode(prev => (prev === 'neural' ? 'matrix' : 'neural'));
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
            mode === 'neural'
              ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 font-medium'
              : 'hover:text-slate-200'
          }`}
          title="Toggle Neural Synapse vs Matrix Rain background"
        >
          {mode === 'neural' ? <Cpu className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{mode === 'neural' ? 'Neural Net' : 'Matrix Rain'}</span>
        </button>

        <button
          id="toggle-bg-power"
          type="button"
          onClick={() => setLowPower(!lowPower)}
          className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
            lowPower ? 'text-amber-400 bg-amber-400/10' : 'text-slate-400 hover:text-slate-200'
          }`}
          title={lowPower ? 'Energy Saver On (Fewer Nodes)' : 'Full Particle Simulation'}
        >
          {lowPower ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
