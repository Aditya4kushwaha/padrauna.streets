import React, { useEffect, useRef } from 'react';
import './Galaxy.css';

interface GalaxyProps {
  mouseRepulsion?: boolean;
  mouseInteraction?: boolean;
  density?: number;
  glowIntensity?: number;
  saturation?: number;
  hueShift?: number;
}

const Galaxy: React.FC<GalaxyProps> = ({
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1,
  glowIntensity = 0.5,
  saturation = 0.8,
  hueShift = 0
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    hue: number;
    opacity: number;
  }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const particles: typeof particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height * density) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          hue: (Math.random() * 60 + hueShift) % 360,
          opacity: Math.random() * 0.8 + 0.2
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction
        if (mouseInteraction) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const force = (100 - distance) / 100;
            const angle = Math.atan2(dy, dx);

            if (mouseRepulsion) {
              particle.vx -= Math.cos(angle) * force * 0.01;
              particle.vy -= Math.sin(angle) * force * 0.01;
            } else {
              particle.vx += Math.cos(angle) * force * 0.005;
              particle.vy += Math.sin(angle) * force * 0.005;
            }
          }
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * glowIntensity;
        ctx.fillStyle = `hsl(${particle.hue}, ${saturation * 100}%, 70%)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsl(${particle.hue}, ${saturation * 100}%, 70%)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseRepulsion, mouseInteraction, density, glowIntensity, saturation, hueShift]);

  return (
    <div className="galaxy-container">
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

export default Galaxy;
