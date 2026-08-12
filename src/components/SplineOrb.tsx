'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Mouse-tracked 3D orb using framer-motion transforms.
// ponytail: could swap inner div for actual Spline scene once you have a URL.
// Upgrade: replace with <Spline scene="https://prod.spline.design/YOUR_ID/scene.splinecode" />
// and add `import Spline from '@splinetool/react-spline/next'` — the /next export is an async Server Component.
// Since we need mouse interactivity here, keep 'use client' and use the default export instead.
export default function SplineOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      animate(mouseX, (e.clientX - cx) / (rect.width / 2), { duration: 0.3 });
      animate(mouseY, (e.clientY - cy) / (rect.height / 2), { duration: 0.3 });
    };

    const reset = () => {
      animate(mouseX, 0, { duration: 0.6 });
      animate(mouseY, 0, { duration: 0.6 });
    };

    window.addEventListener('mousemove', handler);
    window.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', handler);
      window.removeEventListener('mouseleave', reset);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center -mt-10 z-10"
      style={{ perspective: '800px' }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full h-full flex items-center justify-center"
      >
        {/* Orbital Rings */}
        <div className="absolute w-[110%] h-[35%] rounded-[100%] border-2 border-brand-purple/50 transform -rotate-12 animate-spin-slow shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
        <div className="absolute w-[130%] h-[25%] rounded-[100%] border border-brand-purple/30 transform rotate-12 animate-spin-reverse" />

        {/* Glass plate */}
        <div className="absolute w-32 h-48 glass-panel rounded-xl transform -rotate-12 translate-x-16 translate-y-4 shadow-xl z-20" />

        {/* Core orb */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#c084fc] via-[#7e22ce] to-[#1e1b4b] shadow-[0_0_80px_rgba(139,92,246,0.7)] relative z-10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-white/60" />
          <div className="absolute top-4 right-8 w-12 h-8 bg-white/40 blur-md rounded-full rotate-45" />
        </div>

        {/* Moon */}
        <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-purple-300 to-indigo-900 shadow-[0_0_30px_rgba(139,92,246,0.6)] translate-x-40 translate-y-24 z-30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/40" />
        </div>
      </motion.div>
    </div>
  );
}
