import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';
import { particleSandbox } from '../utils/particles';

interface FloatingCompanionsProps {
  onXpChange?: (xp: number) => void;
}

export function FloatingCompanions({ onXpChange }: FloatingCompanionsProps) {
  const [xp, setXp] = useState<number>(420);
  const [crabMessage, setCrabMessage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const waypoints = [
    { id: 'hero', label: '🌴 §01 HERO', name: 'ARENA' },
    { id: 'about', label: '📜 §02 MISSION', name: 'BRIEF' },
    { id: 'skills', label: '⚔️ §03 ARSENAL', name: 'WEAPONS' },
    { id: 'projects', label: '🚀 §04 DEPLOYMENTS', name: 'SYSTEMS' },
    { id: 'experience', label: '⚡ §05 RUNTIME', name: 'TIMELINE' },
    { id: 'contact', label: '📡 §06 TRANSMIT', name: 'SIGNAL' },
  ];

  // Track active section during scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = waypoints.length - 1; i >= 0; i--) {
        const el = document.getElementById(waypoints[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(waypoints[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCrabClick = (e: React.MouseEvent) => {
    sound.playClack();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    particleSandbox.burst(rect.left + rect.width / 2, rect.top, 20, ['#FF4B18', '#FFC247', '#050505']);

    const phrases = [
      "*CLACK CLACK* SHIP IT!",
      "NO PRODUCTION BUGS ALLOWED! 🦀",
      "COASTAL MATRIX ONLINE!",
      "FULL-STACK CRUSTACEAN SAYS: PUSH!",
      "100% RETRO SPEED!"
    ];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCrabMessage(phrase);
    setTimeout(() => setCrabMessage(null), 3000);
  };

  const handleCocktailClick = (e: React.MouseEvent) => {
    sound.playCoin();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    particleSandbox.burst(rect.left + rect.width / 2, rect.top, 18, undefined, true, ['🥥', '🍍', '⭐', '⚡', '🌴']);

    const newXp = xp + 50;
    setXp(newXp);
    if (onXpChange) onXpChange(newXp);
  };

  return (
    <>
      {/* 1. SECTOR COORDINATE WAYPOINT TRACKER (Left Screen Edge) */}
      <nav
        aria-label="Sector Coordinates"
        className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 bg-[#F5EED8]/90 backdrop-blur-sm p-2 rounded-none border-2 border-[#050505] shadow-[3px_3px_0px_#050505]"
      >
        <span className="font-pixel text-[8px] text-[#050505] font-black pb-1 border-b-2 border-[#050505]">
          SEC
        </span>
        {waypoints.map((wp, idx) => {
          const isActive = activeSection === wp.id;
          return (
            <a
              key={wp.id}
              href={`#${wp.id}`}
              onClick={() => sound.playBlip()}
              className="group relative flex items-center justify-center p-1"
              aria-label={wp.label}
            >
              {/* Dot Coordinate Marker */}
              <div
                className={`w-3.5 h-3.5 border-2 border-[#050505] transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF4B18] scale-125 shadow-[1px_1px_0px_#050505]'
                    : 'bg-[#FFC247] hover:bg-[#087FE5]'
                }`}
              />

              {/* Brutalist Popout Label */}
              <div className="pointer-events-none absolute left-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 whitespace-nowrap bg-[#050505] text-[#FFC247] font-pixel text-[9px] px-2.5 py-1.5 border-2 border-[#FFC247] shadow-[2px_2px_0px_rgba(0,0,0,0.5)] z-50">
                {wp.label}
              </div>
            </a>
          );
        })}
      </nav>

      {/* 2. 8-BIT CRAB GUARD (Bottom-Left) */}
      <div className="fixed bottom-3 left-3 sm:bottom-5 sm:left-6 z-40 select-none">
        {crabMessage && (
          <div className="absolute -top-12 left-0 sm:left-2 bg-[#FFFFFF] border-2 border-[#050505] px-2.5 py-1 shadow-[3px_3px_0px_#050505] font-pixel text-[9px] text-[#050505] whitespace-nowrap animate-bounce z-50">
            {crabMessage}
            <div className="absolute -bottom-1.5 left-4 w-2 h-2 bg-[#FFFFFF] border-r-2 border-b-2 border-[#050505] rotate-45" />
          </div>
        )}

        <button
          onClick={handleCrabClick}
          className="group relative flex items-center gap-2 bg-[#FF4B18] p-2 border-2 sm:border-3 border-[#050505] shadow-[3px_3px_0px_#050505] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#050505] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#050505] transition-all cursor-pointer"
          title="Click the Coastal Crab Guard!"
          aria-label="8-Bit Crab Guard"
        >
          {/* Animated Pixel Crab SVG */}
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            className="animate-crab-float drop-shadow-sm"
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Left Scissor Claw */}
            <g className="animate-claw-left">
              <rect x="2" y="2" width="6" height="4" fill="#FFE58F" stroke="#050505" strokeWidth="1" />
              <rect x="0" y="6" width="6" height="4" fill="#FFC247" stroke="#050505" strokeWidth="1" />
              <rect x="4" y="10" width="4" height="4" fill="#FF4B18" stroke="#050505" strokeWidth="1" />
            </g>

            {/* Right Scissor Claw */}
            <g className="animate-claw-right">
              <rect x="24" y="2" width="6" height="4" fill="#FFE58F" stroke="#050505" strokeWidth="1" />
              <rect x="26" y="6" width="6" height="4" fill="#FFC247" stroke="#050505" strokeWidth="1" />
              <rect x="24" y="10" width="4" height="4" fill="#FF4B18" stroke="#050505" strokeWidth="1" />
            </g>

            {/* Body */}
            <rect x="8" y="10" width="16" height="12" fill="#FF4B18" stroke="#050505" strokeWidth="1.5" />
            {/* Eyes */}
            <rect x="10" y="6" width="4" height="4" fill="#FFFFFF" stroke="#050505" strokeWidth="1" />
            <rect x="12" y="7" width="2" height="2" fill="#050505" />
            <rect x="18" y="6" width="4" height="4" fill="#FFFFFF" stroke="#050505" strokeWidth="1" />
            <rect x="20" y="7" width="2" height="2" fill="#050505" />

            {/* Crab Legs */}
            <rect x="6" y="22" width="4" height="4" fill="#050505" />
            <rect x="14" y="22" width="4" height="4" fill="#050505" />
            <rect x="22" y="22" width="4" height="4" fill="#050505" />
          </svg>

          <span className="hidden sm:inline-block font-pixel text-[9px] text-[#FFFFFF] font-bold tracking-wider">
            CRAB GUARD
          </span>
        </button>
      </div>

      {/* 3. COCONUT COCKTAIL XP HUD (Bottom-Right) */}
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-6 z-40 select-none">
        <button
          onClick={handleCocktailClick}
          className="group relative flex items-center gap-2.5 bg-[#071426] text-[#FFC247] px-3 py-2 border-2 sm:border-3 border-[#050505] shadow-[3px_3px_0px_#050505] hover:border-[#FFC247] hover:shadow-[5px_5px_0px_#FF4B18] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#050505] transition-all cursor-pointer"
          title="Click to boost your Coastal Developer XP!"
          aria-label="Coconut Cocktail XP HUD"
        >
          {/* Flashing Emerald Radar Status Ping */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008B69] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008B69]"></span>
          </span>

          {/* Coconut Drink 16-bit Pixel SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="group-hover:rotate-12 transition-transform"
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Straw */}
            <path d="M12 2L14 0L16 2L13 6" stroke="#FF4B18" strokeWidth="2" strokeLinecap="square" />
            <path d="M14 0L17 3" stroke="#FFC247" strokeWidth="1.5" />
            {/* Coconut Shell */}
            <rect x="4" y="6" width="12" height="11" rx="4" fill="#6B4226" stroke="#050505" strokeWidth="1.5" />
            <rect x="6" y="8" width="8" height="4" fill="#FFFFFF" />
            {/* Umbrella Accent */}
            <path d="M4 6L8 3L12 6" fill="#087FE5" stroke="#050505" strokeWidth="1" />
          </svg>

          <div className="text-left font-pixel text-[9px] leading-tight">
            <div className="text-[#F5EED8] text-[8px] flex items-center gap-1">
              <span>XP SCORE</span>
              <span className="text-[#087FE5]">Lv.{(xp / 100).toFixed(0)}</span>
            </div>
            <div className="text-[#FFC247] font-black tracking-wider">
              {xp} PTS 🥥
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
