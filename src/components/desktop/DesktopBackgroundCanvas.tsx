'use client';

import React, { useRef, useEffect } from 'react';

export function DesktopBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;
    let animId: number;

    const animate = () => {
      step += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Base linear gradient wallpaper (Rich modern slate-sky-indigo gradient)
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, '#f0f4ff'); // soft indigo-50
      bgGradient.addColorStop(0.4, '#e0f2fe'); // sky-100
      bgGradient.addColorStop(0.75, '#bae6fd'); // sky-200
      bgGradient.addColorStop(1, '#f1f5f9'); // slate-100
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Right-side ambient wallpaper light bloom for text readability
      const gRight = ctx.createRadialGradient(
        width * 0.75 + Math.sin(step * 0.5) * 60,
        height * 0.45 + Math.cos(step * 0.6) * 40,
        40,
        width * 0.75,
        height * 0.45,
        width * 0.55
      );
      gRight.addColorStop(0, 'rgba(255, 255, 255, 0.65)'); // bright white glow for readability
      gRight.addColorStop(0.5, 'rgba(224, 242, 254, 0.45)');
      gRight.addColorStop(1, 'rgba(240, 244, 255, 0)');
      ctx.fillStyle = gRight;
      ctx.fillRect(0, 0, width, height);

      // Radial glowing gradient 1 (WinBlue aura)
      const g1 = ctx.createRadialGradient(
        width * 0.4 + Math.sin(step) * 100,
        height * 0.3 + Math.cos(step * 0.8) * 60,
        30,
        width * 0.4,
        height * 0.3,
        width * 0.6
      );
      g1.addColorStop(0, 'rgba(12, 140, 233, 0.35)'); // winblue-500
      g1.addColorStop(0.5, 'rgba(56, 189, 248, 0.2)'); // sky-400
      g1.addColorStop(1, 'rgba(243, 243, 243, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Radial glowing gradient 2 (Purple / Indigo bloom)
      const g2 = ctx.createRadialGradient(
        width * 0.8 + Math.cos(step * 0.7) * 80,
        height * 0.2 + Math.sin(step * 0.9) * 50,
        20,
        width * 0.8,
        height * 0.2,
        width * 0.45
      );
      g2.addColorStop(0, 'rgba(165, 180, 252, 0.35)'); // indigo-300
      g2.addColorStop(0.6, 'rgba(216, 180, 254, 0.18)'); // purple-300
      g2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
