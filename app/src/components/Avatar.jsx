import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const dialogues = [
  "Hey… I've been expecting you 👀",
  "Let me show you what I've built",
  "These are not just projects… they solve problems",
  "Ready to build something amazing together? 🚀",
];

const faqs = [
  { q: "🎓 Educational Background?", a: "B.Tech in AI & Data Science from KIT, Coimbatore. Current CGPA: 8.2" },
  { q: "💻 What's your core expertise?", a: "I specialize in AI Integrations, Backend Architecture (Django/Java), RAG, and NLP models." },
  { q: "🚀 Are you open to work?", a: "Yes! I'm actively looking for Software Developer or AI Engineer roles." }
];

export default function Avatar({ scrollProgress }) {
  const avatarRef = useRef(null);
  const [dialogueIdx, setDialogueIdx] = useState(0);
  
  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState(null);

  // Change dialogue based on scroll (only if chat is closed)
  useEffect(() => {
    let idx = 0;
    if (scrollProgress >= 0.75) idx = 3;
    else if (scrollProgress >= 0.45) idx = 2;
    else if (scrollProgress >= 0.15) idx = 1;
    
    if (!isChatOpen && idx !== dialogueIdx) {
      setDialogueIdx(idx);
    }
  }, [scrollProgress, isChatOpen, dialogueIdx]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setActiveAnswer(null);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex items-end gap-4 pointer-events-none">
      
      {/* Speech bubble / Chat Window */}
      <AnimatePresence mode="wait">
        {!isChatOpen ? (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="glass px-5 py-3 rounded-2xl rounded-br-none text-sm max-w-[220px] border border-neonBlue/20 mb-6"
            style={{ boxShadow: '0 0 20px rgba(0,243,255,0.15)' }}
          >
            <p className="text-white font-medium leading-snug">{dialogues[dialogueIdx]}</p>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className="pointer-events-auto glass p-6 rounded-2xl rounded-br-none border border-neonPurple/40 w-[360px] mb-6 flex flex-col gap-4"
            style={{ boxShadow: '0 10px 40px rgba(189,0,255,0.2)' }}
          >
            <div className="flex justify-between items-center mb-1 border-b border-white/10 pb-2">
              <span className="text-neonBlue font-bold text-base tracking-widest uppercase">SM Chat</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleChat();
                }} 
                className="text-gray-400 hover:text-white transition-colors text-lg leading-none"
              >
                ✕
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {!activeAnswer ? (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2"
                >
                  <p className="text-sm text-gray-300 mb-2 font-medium">Hi! What would you like to know?</p>
                  {faqs.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveAnswer(faq.a)}
                      className="text-left bg-white/5 hover:bg-white/10 border border-white/10 p-3.5 rounded-lg text-sm font-medium text-gray-200 transition-all hover:border-neonBlue/50"
                    >
                      {faq.q}
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3"
                >
                  <p className="text-[15px] text-white font-medium leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10">
                    {activeAnswer}
                  </p>
                  <button 
                    onClick={() => setActiveAnswer(null)}
                    className="self-start text-sm text-neonPink hover:text-white transition-colors font-bold flex items-center gap-1 mt-2"
                  >
                    ← Back to questions
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
        className="pointer-events-auto cursor-pointer relative"
        onClick={toggleChat}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-colors duration-300 animate-float ${isChatOpen ? 'border-neonPink' : 'border-neonPurple'}`}
          style={{ 
            boxShadow: isChatOpen 
              ? '0 0 30px rgba(255,0,128,0.6)' 
              : '0 0 20px rgba(189,0,255,0.5), 0 0 60px rgba(189,0,255,0.2)' 
          }}
        >
          <img
            src="avatar.png"
            alt="Shabeer Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Notification dot when chat is closed */}
        {!isChatOpen && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 border-2 border-[#09090b] rounded-full animate-pulse" />
        )}
      </motion.div>
    </div>
  );
}
