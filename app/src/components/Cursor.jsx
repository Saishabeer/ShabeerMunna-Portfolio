import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef      = useRef(null);
  const ringRef     = useRef(null);
  const trailsRef   = useRef([]);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;

    // ── Main move ──
    const onMove = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08 });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.45, ease: 'power3.out' });
    };

    // ── Hover scale ──
    const grow = () => {
      gsap.to(dot,  { scale: 2.5, duration: 0.25 });
      gsap.to(ring, { scale: 1.8, opacity: 0.7, duration: 0.25 });
    };
    const shrink = () => {
      gsap.to(dot,  { scale: 1, duration: 0.25 });
      gsap.to(ring, { scale: 1, opacity: 1,   duration: 0.25 });
    };

    // ── Magnetic buttons ──
    const magnetEnter = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const onMag = (ev) => {
        const mx = (ev.clientX - rect.left - rect.width  / 2) * 0.35;
        const my = (ev.clientY - rect.top  - rect.height / 2) * 0.35;
        gsap.to(el, { x: mx, y: my, duration: 0.4, ease: 'power2.out' });
      };
      el._magnetMov = onMag;
      el.addEventListener('mousemove', onMag);
    };
    const magnetLeave = (e) => {
      const el = e.currentTarget;
      el.removeEventListener('mousemove', el._magnetMov);
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    };

    window.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll('a, button, .interactive');
    const magnetics    = document.querySelectorAll('.magnetic-btn');

    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    magnetics.forEach(el => {
      el.addEventListener('mouseenter', magnetEnter);
      el.addEventListener('mouseleave', magnetLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
      magnetics.forEach(el => {
        el.removeEventListener('mouseenter', magnetEnter);
        el.removeEventListener('mouseleave', magnetLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Core dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#00f3ff',
          boxShadow: '0 0 12px #00f3ff, 0 0 30px rgba(0,243,255,0.5)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Follower ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 36, height: 36,
          border: '1.5px solid rgba(189,0,255,0.8)',
          boxShadow: '0 0 10px rgba(189,0,255,0.4)',
        }}
      />
    </>
  );
}
