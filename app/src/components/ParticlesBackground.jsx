import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Module-level singleton — prevents "engine already started" crash on HMR
let engineReady = false;

const options = {
  fullScreen: false,
  fpsLimit: 60,
  background: { color: { value: "transparent" } },
  interactivity: {
    events: {
      onHover: { enable: false, mode: "repulse" },
      resize: { enable: true },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ["#00f3ff", "#bd00ff", "#ff0080", "#00ff88"] },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: { default: "out" },
      random: true,
      straight: false,
    },
    number: { value: 35, density: { enable: true, area: 1000 } },
    opacity: {
      value: { min: 0.05, max: 0.35 },
      animation: { enable: true, speed: 0.4, sync: false },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: false,
};

export default function ParticlesBackground() {
  const [ready, setReady] = useState(engineReady);

  useEffect(() => {
    if (engineReady) {
      setReady(true);
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      engineReady = true;
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
