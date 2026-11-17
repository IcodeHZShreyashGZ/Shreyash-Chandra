import { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { SectionDivider } from './components/SectionDivider';
import { Bio } from './components/Bio';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCompanions } from './components/FloatingCompanions';
import { ScreenCurtain } from './components/ScreenCurtain';
import { sound } from './utils/audio';
import { particleSandbox } from './utils/particles';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mood, setMood] = useState<'noon' | 'sunset' | 'midnight'>('noon');
  const [crtActive, setCrtActive] = useState<boolean>(false);
  const [turboActive, setTurboActive] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize Canvas Particle Sandbox
  useEffect(() => {
    if (canvasRef.current) {
      particleSandbox.init(canvasRef.current);
    }
  }, []);

  // Sync Mood to HTML data-mood attribute
  const handleMoodChange = (newMood: 'noon' | 'sunset' | 'midnight') => {
    setMood(newMood);
    document.documentElement.setAttribute('data-mood', newMood);
  };

  // Konami Code Secret 16-Bit Beach Party Mode
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          activateTurboMode();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [turboActive]);

  const activateTurboMode = () => {
    const nextTurbo = !turboActive;
    setTurboActive(nextTurbo);
    document.body.classList.toggle('turbo-mode', nextTurbo);
    sound.playPowerup();

    // Burst massive confetti on screen
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        particleSandbox.burst(
          window.innerWidth * (0.2 + i * 0.15),
          window.innerHeight * 0.4,
          35,
          ['#FF4B18', '#FFC247', '#087FE5', '#008B69', '#FFFFFF'],
          true
        );
      }, i * 150);
    }

    setToastMessage(
      nextTurbo
        ? '🌴 TURBO OVERCLOCK UNLOCKED! +9999 XP 🚀'
        : 'NORMAL SHIP MODE RESTORED'
    );
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div
      className={`relative min-h-screen font-mono text-[#050505] transition-colors duration-400 ${
        crtActive ? 'crt-overlay' : ''
      }`}
    >
      {/* Interactive Canvas Particle Sandbox Overlay */}
      <canvas
        ref={canvasRef}
        id="particle-canvas"
        className="fixed inset-0 pointer-events-none z-[90]"
      />

      {/* Screen Transition Grid Route Curtain */}
      <ScreenCurtain trigger={mood} />

      {/* Retro Arcade Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[99] bg-[#050505] text-[#FFC247] border-3 border-[#FF4B18] px-6 py-3 font-pixel text-xs sm:text-sm shadow-[6px_6px_0px_#FF4B18] animate-bounce select-none">
          {toastMessage}
        </div>
      )}

      {/* Top Sticky Navigation */}
      <Navbar
        mood={mood}
        onMoodChange={handleMoodChange}
        crtActive={crtActive}
        onToggleCrt={() => setCrtActive((prev) => !prev)}
        turboActive={turboActive}
      />

      {/* Main Experience Stream */}
      <main className="relative">
        {/* §01 Hero */}
        <Hero />

        {/* High-Velocity Marquee Ticker */}
        <MarqueeTicker />

        {/* Stepped Pixel SVG Divider (Gold -> Paper) */}
        <SectionDivider fromBg="#FFC247" toColor="#F5EED8" />

        {/* §02 Mission Briefing / About */}
        <Bio />

        {/* Stepped Pixel SVG Divider (Paper -> Cream) */}
        <SectionDivider fromBg="#F5EED8" toColor="#FFF9ED" />

        {/* §03 Technical Arsenal */}
        <TechStack />

        {/* Stepped Pixel SVG Divider (Cream -> Deep Ocean Navy) */}
        <SectionDivider fromBg="#FFF9ED" toColor="#071426" />

        {/* §04 Operational Deployments / Projects */}
        <Projects />

        {/* Stepped Pixel SVG Divider (Navy -> Paper) */}
        <SectionDivider fromBg="#071426" toColor="#F5EED8" />

        {/* §05 Runtime Timeline & Experience */}
        <Experience />

        {/* Stepped Pixel SVG Divider (Paper -> Gold) */}
        <SectionDivider fromBg="#F5EED8" toColor="#FFC247" />

        {/* §06 The Transmission / Contact Call */}
        <Contact />
      </main>

      {/* Master Neo-Brutalist Footer */}
      <Footer />

      {/* Floating Interactive Companions (Crab Guard, Coconut HUD, Waypoint Tracker) */}
      <FloatingCompanions />
    </div>
  );
}
