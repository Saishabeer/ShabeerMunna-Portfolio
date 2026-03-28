import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const roles = portfolioData.personal.roles;

export default function Hero() {
  const containerRef = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);

  // Cycle roles
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx(i => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-name span', {
        y: 120, opacity: 0, stagger: 0.04, duration: 1,
        ease: 'expo.out', delay: 0.3,
      });
      gsap.from('.hero-sub', { y: 40, opacity: 0, duration: 0.8, delay: 0.9, ease: 'power3.out' });
      gsap.from('.hero-cta', { y: 30, opacity: 0, stagger: 0.15, duration: 0.7, delay: 1.3, ease: 'back.out(1.7)' });
      gsap.from('.hero-stat', { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, delay: 1.6, ease: 'power2.out' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 mb-10 overflow-hidden"
    >
      {/* ── Big orbital glows ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[100px] pointer-events-none" style={{willChange:'transform'}} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[100px] pointer-events-none" style={{willChange:'transform'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neonPink/5 rounded-full blur-[80px] pointer-events-none" style={{willChange:'transform'}} />

      {/* ── Greeting ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="flex items-center gap-3 mb-6 px-5 py-2 rounded-full glass border border-neonBlue/20"
      >
        <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse-ring" />
        <span className="text-sm font-medium text-gray-300 tracking-widest uppercase">Available for Work</span>
      </motion.div>

      {/* ── Name ── */}
      <div className="hero-name overflow-hidden mb-6">
        <h1 className="font-display text-6xl md:text-9xl font-black tracking-tight leading-none">
          {'Shabeer Munna'.split('').map((ch, i) => (
            <span key={i} className={`inline-block ${ch === ' ' ? 'mr-6' : ''} bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent`}>
              {ch}
            </span>
          ))}
        </h1>
      </div>

      {/* ── Animated Role ── */}
      <div className="hero-sub flex items-center justify-center mb-10" style={{ height: '48px', overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roleIdx}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ position: 'absolute', whiteSpace: 'nowrap' }}
            className="text-xl md:text-3xl font-semibold text-gradient font-display"
          >
            {roles[roleIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── CTAs ── */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <a
          href="#projects"
          className="hero-cta magnetic-btn group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#00f3ff,#0080ff)' }}
        >
          <span className="relative z-10">Explore My Work</span>
          <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#contact"
          className="hero-cta magnetic-btn group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-neonPurple/60 text-neonPurple hover:bg-neonPurple/10 transition-all duration-300 glow-purple"
        >
          <span>Let's Connect</span>
          <span className="group-hover:rotate-45 transition-transform">✦</span>
        </a>
        <a
          href={portfolioData.personal.github}
          target="_blank" rel="noopener noreferrer"
          className="hero-cta magnetic-btn group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all duration-300"
        >
          GitHub ↗
        </a>
      </div>

      {/* ── Stats ── */}
      <div className="flex flex-wrap gap-12 justify-center text-center">
        {[
          { value: '6+', label: 'Projects Built' },
          { value: '2+', label: 'Roles Covered' },
          { value: '3+', label: 'AI Integrations' },
        ].map(({ value, label }) => (
          <div key={label} className="hero-stat flex flex-col items-center">
            <span className="text-4xl font-black font-display text-gradient">{value}</span>
            <span className="text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neonBlue to-transparent" />
      </motion.div>
    </section>
  );
}
