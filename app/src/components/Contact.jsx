import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { FileText } from 'lucide-react';
import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const contactItems = [
  {
    icon:      <SiGmail size={26} />,
    label:     'Email',
    value:     portfolioData.personal.email,
    href:      `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`,
    iconBg:    '#EA4335',
    iconColor: '#ffffff',
    cardBg:    'rgba(234,67,53,0.08)',
    border:    'rgba(234,67,53,0.30)',
    glow:      'rgba(234,67,53,0.15)',
    labelClr:  '#f87171',
  },
  {
    icon:      <FaPhoneAlt size={22} />,
    label:     'Phone',
    value:     portfolioData.personal.phone,
    href:      `tel:${portfolioData.personal.phone.replace(/\s/g, '')}`,
    iconBg:    '#25D366',
    iconColor: '#ffffff',
    cardBg:    'rgba(37,211,102,0.08)',
    border:    'rgba(37,211,102,0.30)',
    glow:      'rgba(37,211,102,0.15)',
    labelClr:  '#34d399',
  },
  {
    icon:      <FaLinkedin size={26} />,
    label:     'LinkedIn',
    value:     'shabeer-munna-seppaiyan',
    href:      portfolioData.personal.linkedin,
    iconBg:    '#0A66C2',
    iconColor: '#ffffff',
    cardBg:    'rgba(10,102,194,0.08)',
    border:    'rgba(10,102,194,0.30)',
    glow:      'rgba(10,102,194,0.15)',
    labelClr:  '#60a5fa',
  },
  {
    icon:      <SiGithub size={26} />,
    label:     'GitHub',
    value:     '@Saishabeer',
    href:      portfolioData.personal.github,
    iconBg:    '#24292e',
    iconColor: '#ffffff',
    cardBg:    'rgba(255,255,255,0.04)',
    border:    'rgba(255,255,255,0.15)',
    glow:      'rgba(255,255,255,0.05)',
    labelClr:  '#d1d5db',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center relative">

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 rounded-full blur-[120px] opacity-15"
             style={{ background: '#0A66C2' }} />
        <div className="absolute top-1/3 right-1/6 w-72 h-72 rounded-full blur-[120px] opacity-15"
             style={{ background: '#EA4335' }} />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-16"
      >
        <span className="text-sm font-bold tracking-[4px] uppercase mb-4 block"
              style={{ color: '#ff0080' }}>
          Get In Touch
        </span>
        <h2 className="text-5xl md:text-7xl font-black font-display mb-6 text-white leading-tight">
          Let's{' '}
          <span style={{
            background: 'linear-gradient(135deg,#00f3ff,#bd00ff,#ff0080)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Build
          </span>{' '}
          Something
          <br />
          <span className="shimmer-text">Amazing</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Whether it's an AI system, a scalable backend, or a full-stack product — I'm here to make it happen.
        </p>
      </motion.div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14 relative z-10 text-left">
        {contactItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300"
            style={{
              background: item.cardBg,
              border: `1px solid ${item.border}`,
              backdropFilter: 'blur(14px)',
              boxShadow: `0 4px 30px ${item.glow}`,
            }}
          >
            {/* Brand round icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{
                background: item.iconBg,
                color:      item.iconColor,
                boxShadow:  `0 0 18px ${item.iconBg}80`,
              }}
            >
              {item.icon}
            </div>

            {/* Label + Value */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <p className="text-xs font-black tracking-[3px] uppercase mb-1"
                 style={{ color: item.labelClr }}>
                {item.label}
              </p>
              <p className="text-white font-semibold text-sm truncate">
                {item.value}
              </p>
            </div>

            {/* Arrow indicator */}
            <span className="text-gray-600 text-lg flex-shrink-0 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
              ↗
            </span>
          </motion.a>
        ))}
      </div>

      {/* Resume download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mb-20 relative z-10"
      >
        <motion.a
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-black text-base"
          style={{
            background: 'linear-gradient(135deg,#00f3ff,#bd00ff,#ff0080)',
            boxShadow: '0 0 30px rgba(0,243,255,0.3), 0 0 60px rgba(189,0,255,0.15)',
          }}
        >
          <FileText size={20} />
          View Resume
        </motion.a>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-white/5 pt-8 text-sm text-gray-600 relative z-10">
        <p>Built with React · Vite · GSAP · Framer Motion · Tailwind CSS</p>
        <p className="mt-2">
          © {new Date().getFullYear()}{' '}
          <span style={{
            background: 'linear-gradient(135deg,#00f3ff,#bd00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }} className="font-semibold">
            {portfolioData.personal.name}
          </span>{' '}
          · All rights reserved
        </p>
      </div>
    </section>
  );
}
