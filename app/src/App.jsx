import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Avatar from './components/Avatar';
import ParticlesBackground from './components/ParticlesBackground';

// ── Minimal gradient navbar ──
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = ['About','Experience','Projects','Skills','Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-3 glass border-b border-white/5' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span className="text-gradient font-black font-display text-xl tracking-tight">SM</span>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="magnetic-btn text-sm text-gray-400 hover:text-white transition-colors font-medium tracking-wide"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="magnetic-btn px-5 py-2 rounded-full text-sm font-bold border border-neonBlue/50 text-neonBlue hover:bg-neonBlue/10 transition-colors"
        >
          Hire Me ✦
        </a>
      </div>
    </header>
  );
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const scrollPx  = document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(scrollPx / maxScroll);
    };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="bg-darkBg text-white min-h-screen font-sans overflow-x-hidden">
      <ParticlesBackground />
      <Cursor />
      <Avatar scrollProgress={scrollProgress} />
      <Navbar />

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 bg-gradient-to-r from-neonBlue via-neonPurple to-neonPink transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <main className="pt-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
