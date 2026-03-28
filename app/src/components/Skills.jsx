import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { 
  SiPytorch, SiTensorflow, SiReact, SiVite, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiPython, SiMongodb, SiDocker, SiGit, SiSpringboot,
  SiPostgresql, SiDjango, SiLangchain, SiCanva
} from 'react-icons/si';
import { FaJava, FaDatabase, FaBrain, FaRobot, FaServer, FaAws } from 'react-icons/fa';
import { BiNetworkChart, BiCodeAlt } from 'react-icons/bi';
import { MdOutlineArchitecture } from 'react-icons/md';

const getSkillData = (skillName) => {
  const n = skillName.toLowerCase();
  if (n.includes('pytorch'))       return { icon: <SiPytorch size={26} />,      color: '#EE4C2C', bg: '#EE4C2C20' };
  if (n.includes('tensorflow'))    return { icon: <SiTensorflow size={26} />,    color: '#FF6F00', bg: '#FF6F0020' };
  if (n.includes('java'))          return { icon: <FaJava size={26} />,          color: '#f89820', bg: '#f8982020' };
  if (n.includes('spring boot'))   return { icon: <SiSpringboot size={26} />,    color: '#6DB33F', bg: '#6DB33F20' };
  if (n.includes('node.js'))       return { icon: <SiNodedotjs size={26} />,     color: '#339933', bg: '#33993320' };
  if (n.includes('express'))       return { icon: <SiExpress size={26} />,       color: '#c0c0c0', bg: '#c0c0c020' };
  if (n.includes('python'))        return { icon: <SiPython size={26} />,        color: '#FFD43B', bg: '#FFD43B20' };
  if (n.includes('sql'))           return { icon: <FaDatabase size={26} />,      color: '#00758F', bg: '#00758F20' };
  if (n.includes('mongodb'))       return { icon: <SiMongodb size={26} />,       color: '#47A248', bg: '#47A24820' };
  if (n.includes('react'))         return { icon: <SiReact size={26} />,         color: '#61DAFB', bg: '#61DAFB20' };
  if (n.includes('vite'))          return { icon: <SiVite size={26} />,          color: '#646CFF', bg: '#646CFF20' };
  if (n.includes('tailwind'))      return { icon: <SiTailwindcss size={26} />,   color: '#06B6D4', bg: '#06B6D420' };
  if (n.includes('docker'))        return { icon: <SiDocker size={26} />,      color: '#2496ED', bg: '#2496ED20' };
  if (n.includes('aws'))           return { icon: <FaAws size={26} />,          color: '#FF9900', bg: '#FF990020' };
  if (n.includes('git'))           return { icon: <SiGit size={26} />,          color: '#F05032', bg: '#F0503220' };
  if (n.includes('postgresql') || n.includes('postgres')) return { icon: <SiPostgresql size={26} />, color: '#336791', bg: '#33679120' };
  if (n.includes('django'))        return { icon: <SiDjango size={26} />,       color: '#092E20', bg: '#44B78B20' };
  if (n.includes('langchain'))     return { icon: <SiLangchain size={26} />,    color: '#1C3C3C', bg: '#1C3C3C30' };
  if (n.includes('canva'))         return { icon: <SiCanva size={26} />,        color: '#00C4CC', bg: '#00C4CC20' };
  if (n.includes('gen ai') || n.includes('llm')) return { icon: <FaRobot size={26} />, color: '#00f3ff', bg: '#00f3ff20' };
  if (n.includes('nlp'))           return { icon: <BiNetworkChart size={26} />, color: '#bd00ff', bg: '#bd00ff20' };
  if (n.includes('computer vision') || n.includes('model')) return { icon: <FaBrain size={26} />, color: '#ff0080', bg: '#ff008020' };
  if (n.includes('api'))           return { icon: <FaServer size={26} />,       color: '#00ff88', bg: '#00ff8820' };
  if (n.includes('scrum') || n.includes('agile')) return { icon: <MdOutlineArchitecture size={26} />, color: '#60a5fa', bg: '#60a5fa20' };
  
  // Soft Skills
  if (n.includes('teamwork'))      return { icon: <BiNetworkChart size={26} />, color: '#f59e0b', bg: '#f59e0b20' };
  if (n.includes('leadership'))    return { icon: <MdOutlineArchitecture size={26} />, color: '#8b5cf6', bg: '#8b5cf620' };
  if (n.includes('attention'))     return { icon: <FaBrain size={26} />, color: '#10b981', bg: '#10b98120' };
  if (n.includes('restful') || n.includes('api')) return { icon: <FaServer size={26} />, color: '#00cc66', bg: '#00cc6620' };
  if (n.includes('prompt'))        return { icon: <BiCodeAlt size={26} />, color: '#a855f7', bg: '#a855f720' };

  return { icon: <BiCodeAlt size={26} />, color: '#00f3ff', bg: '#00f3ff20' };
};

const categoryMeta = {
  'AI/ML':              { gradient: 'from-cyan-400 via-blue-500 to-neonPurple', emoji: '🤖', glow: '#00f3ff' },
  'Backend':            { gradient: 'from-neonGreen to-cyan-500',               emoji: '⚙️',  glow: '#00ff88' },
  'Frontend':           { gradient: 'from-neonPurple via-pink-500 to-orange-400',emoji: '🌐', glow: '#bd00ff' },
  'Tools & Cloud':      { gradient: 'from-orange-400 to-yellow-300',             emoji: '🛠️', glow: '#ff9900' },
  'Core & Soft Skills': { gradient: 'from-purple-500 to-indigo-400',           emoji: '🧠', glow: '#8b5cf6' },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 30, opacity: 0, scale: 0.85 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 130, damping: 12 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="text-neonGreen text-sm font-bold tracking-[4px] uppercase mb-3 block">What I Use</span>
        <h2 className="text-5xl md:text-6xl font-black font-display text-white">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Object.entries(portfolioData.skills).map(([category, skills], ci) => {
          const meta = categoryMeta[category] || categoryMeta['Tools'];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: ci % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 * ci }}
              className="glass rounded-3xl p-8 relative overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              {/* Radial glow */}
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-[80px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: meta.glow }}
              />

              {/* Category header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-xl shadow-lg`}>
                  {meta.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                  <div className={`h-0.5 w-12 mt-1 rounded-full bg-gradient-to-r ${meta.gradient}`} />
                </div>
              </div>

              {/* Skill grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {skills.map((skill) => {
                  const { icon, color, bg } = getSkillData(skill);
                  return (
                    <motion.div
                      variants={item}
                      whileHover={{ scale: 1.08, y: -4 }}
                      key={skill}
                      className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 cursor-default"
                      style={{ background: bg }}
                    >
                      <div style={{ color }} className="drop-shadow-lg">
                        {icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-200 text-center leading-tight">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
