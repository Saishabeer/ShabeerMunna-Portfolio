import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import {
  SiPython, SiReact, SiTensorflow, SiNodedotjs, SiMongodb,
  SiMysql, SiExpress, SiScikitlearn, SiPandas,
  SiGit, SiDocker, SiSpringboot, SiOpenai, SiGithub,
  SiPostgresql, SiDjango, SiLangchain, SiCanva
} from 'react-icons/si';
import { FaJava, FaRobot, FaMicrophone, FaBrain, FaAws } from 'react-icons/fa';
import { BiCodeAlt, BiNetworkChart } from 'react-icons/bi';

// ── Per-tech brand color map ──
// { icon, bg (pill background), text (pill text), iconColor }
const techBrandMap = {
  'python':           { icon: SiPython,      bg: '#FFD43B', text: '#1a1a00', iconColor: '#1a1a00' },
  'react':            { icon: SiReact,       bg: '#20232a', text: '#61DAFB', iconColor: '#61DAFB' },
  'tensorflow':       { icon: SiTensorflow,  bg: '#FF6F00', text: '#fff',    iconColor: '#fff'    },
  'node.js':          { icon: SiNodedotjs,   bg: '#339933', text: '#fff',    iconColor: '#fff'    },
  'mongodb':          { icon: SiMongodb,     bg: '#47A248', text: '#fff',    iconColor: '#fff'    },
  'mysql':            { icon: SiMysql,       bg: '#00758F', text: '#fff',    iconColor: '#fff'    },
  'express':          { icon: SiExpress,     bg: '#404040', text: '#fff',    iconColor: '#fff'    },
  'openai api':       { icon: SiOpenai,      bg: '#10a37f', text: '#fff',    iconColor: '#fff'    },
  'openai':           { icon: SiOpenai,      bg: '#10a37f', text: '#fff',    iconColor: '#fff'    },
  'scikit-learn':     { icon: SiScikitlearn, bg: '#F7931E', text: '#fff',    iconColor: '#fff'    },
  'pandas':           { icon: SiPandas,      bg: '#150458', text: '#e8d5ff', iconColor: '#e8d5ff' },
  'java':             { icon: FaJava,        bg: '#f89820', text: '#1a0000', iconColor: '#1a0000' },
  'gen ai':           { icon: FaRobot,       bg: '#7c3aed', text: '#fff',    iconColor: '#fff'    },
  'ai integrations':  { icon: FaBrain,       bg: '#6d28d9', text: '#e9d5ff', iconColor: '#e9d5ff' },
  'voice ai':         { icon: FaMicrophone,  bg: '#dc2626', text: '#fff',    iconColor: '#fff'    },
  'websockets':       { icon: BiNetworkChart,bg: '#374151', text: '#60a5fa', iconColor: '#60a5fa' },
  'docker':           { icon: SiDocker,      bg: '#2496ED', text: '#fff',    iconColor: '#fff'    },
  'aws':              { icon: FaAws,         bg: '#FF9900', text: '#000',    iconColor: '#000'    },
  'git':              { icon: SiGit,         bg: '#F05032', text: '#fff',    iconColor: '#fff'    },
  'postgresql':       { icon: SiPostgresql,  bg: '#336791', text: '#fff',    iconColor: '#fff'    },
  'postgres':         { icon: SiPostgresql,  bg: '#336791', text: '#fff',    iconColor: '#fff'    },
  'django':           { icon: SiDjango,      bg: '#092E20', text: '#44B78B', iconColor: '#44B78B' },
  'langchain':        { icon: SiLangchain,   bg: '#1C3C3C', text: '#00d4aa', iconColor: '#00d4aa' },
  'canva':            { icon: SiCanva,       bg: '#00C4CC', text: '#fff',    iconColor: '#fff'    },
  'spring boot':      { icon: SiSpringboot,  bg: '#6DB33F', text: '#fff',    iconColor: '#fff'    },
  'oop':              { icon: BiCodeAlt,     bg: '#1e3a5f', text: '#93c5fd', iconColor: '#93c5fd' },
};

function getTechBrand(tech) {
  const key = tech.toLowerCase();
  for (const [pattern, data] of Object.entries(techBrandMap)) {
    if (key.includes(pattern)) {
      const IconComp = data.icon;
      return { icon: <IconComp size={13} />, bg: data.bg, text: data.text, iconColor: data.iconColor };
    }
  }
  return { icon: <BiCodeAlt size={13} />, bg: '#1f2937', text: '#9ca3af', iconColor: '#9ca3af' };
}

// Hardcoded inline gradients — avoids Tailwind JIT purging dynamic class names
const cardStyles = [
  {
    stripe:  'linear-gradient(90deg, #00f3ff, #0080ff, #bd00ff)',
    numClr:  '#00f3ff',
    tagBg:   'linear-gradient(90deg, #00f3ff, #0080ff)',
    btnBg:   'linear-gradient(135deg, #00f3ff, #0080ff)',
    glow:    'rgba(0,243,255,0.20)',
    border:  'rgba(0,243,255,0.25)',
  },
  {
    stripe:  'linear-gradient(90deg, #bd00ff, #ff0080, #ff6b00)',
    numClr:  '#bd00ff',
    tagBg:   'linear-gradient(90deg, #bd00ff, #ff0080)',
    btnBg:   'linear-gradient(135deg, #bd00ff, #ff0080)',
    glow:    'rgba(189,0,255,0.20)',
    border:  'rgba(189,0,255,0.25)',
  },
  {
    stripe:  'linear-gradient(90deg, #00ff88, #00d4ff)',
    numClr:  '#00ff88',
    tagBg:   'linear-gradient(90deg, #00ff88, #00d4ff)',
    btnBg:   'linear-gradient(135deg, #00ff88, #00d4ff)',
    glow:    'rgba(0,255,136,0.20)',
    border:  'rgba(0,255,136,0.25)',
  },
  {
    stripe:  'linear-gradient(90deg, #ff9900, #ff0080, #bd00ff)',
    numClr:  '#ff9900',
    tagBg:   'linear-gradient(90deg, #ff9900, #ff0080)',
    btnBg:   'linear-gradient(135deg, #ff9900, #ff0080)',
    glow:    'rgba(255,153,0,0.20)',
    border:  'rgba(255,153,0,0.25)',
  },
  {
    stripe:  'linear-gradient(90deg, #00f3ff, #00ff88)',
    numClr:  '#00d4ff',
    tagBg:   'linear-gradient(90deg, #00f3ff, #00ff88)',
    btnBg:   'linear-gradient(135deg, #00f3ff, #00ff88)',
    glow:    'rgba(0,243,255,0.20)',
    border:  'rgba(0,243,255,0.25)',
  },
  {
    stripe:  'linear-gradient(90deg, #ff0080, #bd00ff, #0080ff)',
    numClr:  '#ff0080',
    tagBg:   'linear-gradient(90deg, #ff0080, #bd00ff)',
    btnBg:   'linear-gradient(135deg, #ff0080, #bd00ff)',
    glow:    'rgba(255,0,128,0.20)',
    border:  'rgba(255,0,128,0.25)',
  },
];



export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="text-sm font-bold tracking-[4px] uppercase mb-3 block" style={{ color: '#bd00ff' }}>
          Featured Work
        </span>
        <h2 className="text-5xl md:text-6xl font-black font-display text-white">
          Things I've{' '}
          <span style={{
            background: 'linear-gradient(135deg,#00f3ff,#bd00ff,#ff0080)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Built
          </span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, i) => {
          const s = cardStyles[i % cardStyles.length];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${s.border}`,
                backdropFilter: 'blur(12px)',
                boxShadow: `0 4px 40px ${s.glow}`,
              }}
            >
              {/* Gradient top stripe */}
              <div className="h-1.5 w-full flex-shrink-0" style={{ background: s.stripe }} />

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow}, transparent 65%)` }}
              />

              {/* Content */}
              <div className="p-7 flex flex-col flex-1 relative z-10">
                {/* Card number */}
                <div
                  className="text-6xl font-black font-display leading-none mb-4 opacity-25"
                  style={{ color: s.numClr }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:opacity-90 transition-opacity">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech tags with individual brand colors */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => {
                    const brand = getTechBrand(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: brand.bg, color: brand.text }}
                      >
                        <span style={{ color: brand.iconColor, display: 'flex', alignItems: 'center' }}>
                          {brand.icon}
                        </span>
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* GitHub button — real brand style */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full text-white hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: '#24292e',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 0 14px rgba(255,255,255,0.08)',
                  }}
                >
                  <SiGithub size={15} />
                  View Code
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
