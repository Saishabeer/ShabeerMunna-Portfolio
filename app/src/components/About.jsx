import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2021', icon: '🌱',
    badge:  'linear-gradient(90deg,#00ff88,#00d4ff)',
    glow:   'rgba(0,255,136,0.25)',
    border: 'rgba(0,255,136,0.30)',
    title: 'The Beginning',
    body: "Fell in love with coding. Started with C, Python, and the web — writing my first 'Hello World' and never looking back.",
  },
  {
    year: '2022', icon: '⚙️',
    badge:  'linear-gradient(90deg,#00f3ff,#0080ff)',
    glow:   'rgba(0,243,255,0.25)',
    border: 'rgba(0,243,255,0.30)',
    title: 'Backend & CS Foundations',
    body: 'Zoho Incubation — deep-dived into DSA, Object-Oriented Programming, SQL, and the full Software Development Life Cycle.',
  },
  {
    year: '2023', icon: '🚀',
    badge:  'linear-gradient(90deg,#bd00ff,#ff0080)',
    glow:   'rgba(189,0,255,0.25)',
    border: 'rgba(189,0,255,0.30)',
    title: 'Going Full Stack',
    body: 'Built the Railway Reservation System in Java, then expanded into React & Node.js. Full-stack became second nature.',
  },
  {
    year: '2024', icon: '🤖',
    badge:  'linear-gradient(90deg,#ff0080,#ff9900)',
    glow:   'rgba(255,0,128,0.25)',
    border: 'rgba(255,0,128,0.30)',
    title: 'AI Engineer — Techjays',
    body: 'Now building AI dashboards, RAG chatbots, voice AI integrations, and Gen AI applications that solve real business problems.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto relative">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-24"
      >
        <span className="text-sm font-bold tracking-[4px] uppercase mb-3 block" style={{ color: '#00f3ff' }}>
          My Journey
        </span>
        <h2 className="text-5xl md:text-6xl font-black font-display text-white">
          The{' '}
          <span style={{
            background: 'linear-gradient(135deg,#00f3ff,#bd00ff,#ff0080)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Story
          </span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
          I don't just write code. I build systems that solve real problems. This is how I got here.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Spine */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden md:block w-px opacity-30"
          style={{ background: 'linear-gradient(180deg,#00f3ff,#bd00ff,#ff0080)' }}
        />

        <div className="space-y-14">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 70, delay: 0.05 * i }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Card */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: `1px solid ${m.border}`,
                    backdropFilter: 'blur(14px)',
                    boxShadow: `0 4px 50px ${m.glow}`,
                  }}
                >
                  {/* Stripe */}
                  <div className="h-1 w-full" style={{ background: m.badge }} />

                  <div className="p-8">
                    {/* Year badge */}
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-black text-xs font-black uppercase tracking-widest mb-4"
                      style={{ background: m.badge }}
                    >
                      {m.icon} {m.year}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{m.body}</p>
                  </div>
                </motion.div>
              </div>

              {/* Centre icon dot */}
              <div
                className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full items-center justify-center text-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${m.border}`,
                  boxShadow: `0 0 20px ${m.glow}, 0 0 50px ${m.glow}50`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                {m.icon}
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
