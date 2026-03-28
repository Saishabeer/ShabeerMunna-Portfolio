import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const expStyles = [
  {
    stripe:    'linear-gradient(90deg, #00f3ff, #0080ff)',
    glow:      '#00f3ff',
    dotBg:     '#00f3ff',
    badgeBg:   'linear-gradient(90deg, #00f3ff, #0080ff)',
    tagBg:     'rgba(0,243,255,0.10)',
    companyClr:'#00f3ff',
    chipBorder:'rgba(0,243,255,0.30)',
  },
  {
    stripe:    'linear-gradient(90deg, #bd00ff, #ff0080)',
    glow:      '#bd00ff',
    dotBg:     '#bd00ff',
    badgeBg:   'linear-gradient(90deg, #bd00ff, #ff0080)',
    tagBg:     'rgba(189,0,255,0.10)',
    companyClr:'#bd00ff',
    chipBorder:'rgba(189,0,255,0.30)',
  },
];

function CompanyLogo({ logo, company }) {
  const [errored, setErrored] = useState(false);
  if (!errored && logo) {
    return (
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-full h-full object-contain p-1.5"
        onError={() => setErrored(true)}
      />
    );
  }
  return (
    <span className="text-sm font-black text-gray-300">
      {company.split(' ').map(w => w[0]).join('').slice(0, 2)}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="text-sm font-bold tracking-[4px] uppercase mb-3 block" style={{ color: '#ff0080' }}>
          Work History
        </span>
        <h2
          className="text-5xl md:text-6xl font-black font-display"
          style={{
            background: 'linear-gradient(135deg,#00f3ff,#bd00ff,#ff0080)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-10 pl-8 md:pl-14">

        {/* Spine */}
        <div
          className="absolute left-0 md:left-5 top-2 bottom-2 w-px opacity-40"
          style={{ background: 'linear-gradient(180deg, #00f3ff, #bd00ff, #ff0080)' }}
        />

        {portfolioData.experience.map((exp, i) => {
          const s = expStyles[i % expStyles.length];
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 70 }}
              className="relative"
            >
              {/* Glowing dot on timeline */}
              <div
                className="absolute -left-[14px] md:-left-[18px] top-8 w-6 h-6 rounded-full border-2 border-darkBg z-10 flex items-center justify-center"
                style={{
                  background: s.dotBg,
                  boxShadow: `0 0 14px ${s.glow}, 0 0 30px ${s.glow}50`,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-black/50" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="ml-2 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${s.glow}30`,
                  backdropFilter: 'blur(14px)',
                  boxShadow: `0 4px 50px ${s.glow}12`,
                }}
              >
                {/* Top gradient stripe */}
                <div className="h-1 w-full" style={{ background: s.stripe }} />

                <div className="p-7">
                  {/* Logo + Role row */}
                  <div className="flex items-start gap-4 mb-5">

                    {/* Logo */}
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden"
                      style={{ boxShadow: `0 0 20px ${s.glow}50` }}
                    >
                      <CompanyLogo logo={exp.logo} company={exp.company} />
                    </div>

                    {/* Role + Company */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white leading-tight mb-1">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-bold" style={{ color: s.companyClr }}>
                        {exp.company}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <span
                      className="flex-shrink-0 self-start text-xs font-black px-4 py-2 rounded-full text-black"
                      style={{ background: s.badgeBg }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full text-gray-200 hover:text-white transition-colors"
                        style={{
                          background: s.tagBg,
                          border: `1px solid ${s.chipBorder}`,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
