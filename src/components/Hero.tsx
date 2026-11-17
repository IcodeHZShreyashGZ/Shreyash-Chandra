import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';
import { particleSandbox } from '../utils/particles';
import { Terminal, Compass, Zap, ArrowDownRight, Sparkles } from 'lucide-react';

export function Hero() {
  const [seconds, setSeconds] = useState<number>(45);

  // Live ticking retro seconds counter
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    sound.playLaser();
    const rect = e.currentTarget.getBoundingClientRect();
    particleSandbox.burst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      28,
      ['#FFC247', '#FF4B18', '#087FE5', '#008B69']
    );
  };

  const handleSeagullClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playSeagull();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    particleSandbox.burst(rect.left + rect.width / 2, rect.top, 14, ['#FFFFFF', '#FFC247']);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen bg-[#071426] overflow-hidden flex flex-col justify-between border-b-4 border-[#050505] select-none"
    >
      {/* =========================================================================
          ATMOSPHERIC SEASCAPE BACKGROUND & 16-BIT RETRO GRAPHICS
          ========================================================================= */}
      
      {/* 16-Bit Pixel Ocean Sky Backdrop Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Pixel Horizon Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071426] via-[#0B2545] to-[#134074] opacity-95" />
        
        {/* Pixel Sun on Horizon */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-t from-[#FF4B18] via-[#FFC247] to-[#FFE600] opacity-80 blur-[2px] shadow-[0_0_80px_rgba(255,194,71,0.5)]" />

        {/* 16-Bit Pixel Mountain & Palm Silhouettes on Horizon */}
        <svg
          viewBox="0 0 1200 240"
          preserveAspectRatio="none"
          className="absolute bottom-16 sm:bottom-20 w-full h-24 sm:h-36 opacity-30 fill-[#050505]"
          style={{ imageRendering: 'pixelated' }}
        >
          {/* Distant jagged pixel mountains */}
          <polygon points="0,240 0,160 80,110 140,150 220,90 310,170 420,80 500,160 620,100 740,180 860,110 980,170 1080,100 1200,160 1200,240" />
        </svg>

        {/* Rising Solar Motes / Sand Dust */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '15%', top: '75%', delay: '0s', dur: '5s' },
            { left: '30%', top: '80%', delay: '1.5s', dur: '6s' },
            { left: '55%', top: '70%', delay: '0.8s', dur: '4.5s' },
            { left: '72%', top: '85%', delay: '2.2s', dur: '5.5s' },
            { left: '88%', top: '78%', delay: '3.1s', dur: '6.2s' },
          ].map((mote, i) => (
            <div
              key={i}
              className="animate-sun-mote absolute w-2 h-2 bg-[#FFC247] shadow-[0_0_6px_#FFC247]"
              style={{
                left: mote.left,
                top: mote.top,
                animationDelay: mote.delay,
                animationDuration: mote.dur,
              }}
            />
          ))}
        </div>
      </div>

      {/* Atmospheric Drifting Pixel Clouds */}
      <div
        className="animate-cloud-slow absolute top-[8%] sm:top-[12%] pointer-events-none z-10 opacity-35"
        style={{ left: '-200px' }}
      >
        <svg width="120" height="36" viewBox="0 0 120 36" fill="#FFFFFF" style={{ imageRendering: 'pixelated' }}>
          <rect x="32" y="0" width="40" height="8" />
          <rect x="20" y="8" width="68" height="8" />
          <rect x="8" y="16" width="104" height="10" />
          <rect x="0" y="26" width="120" height="8" />
        </svg>
      </div>

      <div
        className="animate-cloud-fast absolute top-[20%] sm:top-[26%] pointer-events-none z-10 opacity-25"
        style={{ left: '-150px', animationDelay: '12s' }}
      >
        <svg width="90" height="28" viewBox="0 0 90 28" fill="#FFC247" style={{ imageRendering: 'pixelated' }}>
          <rect x="24" y="0" width="30" height="6" />
          <rect x="12" y="6" width="54" height="6" />
          <rect x="6" y="12" width="76" height="8" />
          <rect x="0" y="20" width="90" height="6" />
        </svg>
      </div>

      {/* Interactive Flying Pixel Seagull (Click for chirp!) */}
      <div
        onClick={handleSeagullClick}
        className="animate-seagull-fly absolute top-[14%] sm:top-[18%] z-30 cursor-pointer pointer-events-auto"
        title="Click the Seagull for a coastal chirp!"
        style={{ animationDuration: '24s' }}
      >
        <div className="animate-seagull-wings p-2">
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="#FFFFFF"
            style={{ imageRendering: 'pixelated' }}
            className="drop-shadow-[2px_2px_0px_#050505]"
          >
            <rect x="0" y="4" width="5" height="3" />
            <rect x="5" y="7" width="5" height="3" />
            <rect x="10" y="8" width="9" height="4" />
            <rect x="19" y="7" width="5" height="3" />
            <rect x="24" y="4" width="4" height="3" />
            {/* Beak */}
            <rect x="14" y="11" width="3" height="3" fill="#FFC247" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          HERO CONTENT CORE: RADAR, IDENTITY, AVATAR & COUNTDOWN
          ========================================================================= */}

      {/* 1. Live Radar Telemetry Banner */}
      <div className="relative z-20 pt-6 sm:pt-8 px-4 flex justify-center">
        <div className="inline-flex items-center gap-2.5 bg-[#F5EED8] border-2 sm:border-3 border-[#050505] px-3.5 py-1.5 shadow-[3px_3px_0px_#050505] font-pixel text-[9px] sm:text-[10px] text-[#050505] font-bold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008B69] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008B69]"></span>
          </span>
          <span className="tracking-wider">LIVE RADAR: COASTAL GRID 18.5204° N, 73.8567° E // COEP PUNE ONLINE</span>
        </div>
      </div>

      {/* 2. Main Hero Stage */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Title & Mission Directives */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Sub-Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC247] border-2 border-[#050505] shadow-[2px_2px_0px_#050505] font-pixel text-[9px] sm:text-[10px] text-[#050505] font-black">
            <Terminal className="w-3.5 h-3.5" />
            <span>FULL-STACK ARCHITECT // AI RESEARCHER</span>
          </div>

          {/* Master Neo-Brutalist Title Emblem */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl text-[#FFFFFF] tracking-tight leading-[0.9] drop-shadow-[4px_4px_0px_#050505]">
              SHREYASH <br />
              <span className="text-[#FFC247] drop-shadow-[4px_4px_0px_#FF4B18]">
                CHANDRA
              </span>
            </h1>

            <p className="font-editorial text-xl sm:text-2xl text-[#F5EED8]/90 max-w-xl italic leading-relaxed pt-2">
              Engineering high-velocity scalable applications, autonomous AI agent pipelines, and tactile neo-brutalist digital experiences.
            </p>
          </div>

          {/* T-Minus Arcade Status HUD */}
          <div className="pt-2">
            <div className="inline-grid grid-cols-4 gap-2 sm:gap-4 bg-[#071426]/95 border-3 border-[#FFC247] p-3 sm:p-4 shadow-[5px_5px_0px_#050505,0_0_20px_rgba(255,194,71,0.25)]">
              <div className="text-center px-1 sm:px-2 border-r-2 border-[#FFC247]/30">
                <div className="font-pixel text-lg sm:text-2xl text-[#FFFFFF] font-bold">2028</div>
                <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#087FE5] font-bold tracking-widest">COEP CSE</div>
              </div>
              <div className="text-center px-1 sm:px-2 border-r-2 border-[#FFC247]/30">
                <div className="font-pixel text-lg sm:text-2xl text-[#FF4B18] font-bold">340+</div>
                <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#FF4B18] font-bold tracking-widest">COMMITS</div>
              </div>
              <div className="text-center px-1 sm:px-2 border-r-2 border-[#FFC247]/30">
                <div className="font-pixel text-lg sm:text-2xl text-[#008B69] font-bold">100%</div>
                <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#008B69] font-bold tracking-widest">TACTILE</div>
              </div>
              <div className="text-center px-1 sm:px-2">
                <div className="font-pixel text-lg sm:text-2xl text-[#FFC247] font-bold">
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
                <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#FFC247] font-bold tracking-widest">SEC RUN</div>
              </div>
            </div>
          </div>

          {/* Master Gleam CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
            <a
              href="#projects"
              onClick={(e) => handleCtaClick(e, '#projects')}
              className="brutalist-btn gleam-sweep !text-xs !py-3.5 !px-6 shadow-[4px_4px_0px_#050505] hover:shadow-[6px_6px_0px_#FF4B18] hover:bg-[#FF4B18] hover:text-[#FFFFFF] transition-all"
            >
              <span>ENTER THE ARENA ➔</span>
            </a>
            <a
              href="#about"
              onClick={(e) => handleCtaClick(e, '#about')}
              className="brutalist-btn !bg-[#F5EED8] !text-[#050505] !text-xs !py-3.5 !px-6 hover:!bg-[#FFFFFF]"
            >
              <span>MISSION DOSSIER ↗</span>
            </a>
          </div>

        </div>

        {/* Right Column: Hero Profile Emblem & Nautical Astrolabe Rings */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Outer Nautical Astrolabe Degree Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFC247]/40 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-[#087FE5]/30 animate-[spin_25s_linear_infinite_reverse]" />

            {/* Neo-Brutalist Double Framed Avatar */}
            <div className="absolute inset-8 border-4 border-[#050505] bg-[#071426] shadow-[8px_8px_0px_#FFC247] overflow-hidden group hover:scale-[1.02] transition-transform">
              <img
                src="https://i.ibb.co/N2PwZKGW/Gemini-Generated-Image-bg2fugbg2fugbg2f.png"
                alt="Shreyash Chandra"
                className="w-full h-full object-cover filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Subtle CRT Scanline over avatar */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />
            </div>

            {/* Floating Brutalist Badges */}
            <div className="absolute top-4 -left-3 sm:-left-6 bg-[#FFC247] text-[#050505] border-2 border-[#050505] px-3 py-1 font-pixel text-[9px] font-black shadow-[3px_3px_0px_#050505] -rotate-3">
              ⚡ COEP PUNE B.TECH
            </div>

            <div className="absolute bottom-6 -right-3 sm:-right-6 bg-[#008B69] text-[#FFFFFF] border-2 border-[#050505] px-3 py-1 font-pixel text-[9px] font-black shadow-[3px_3px_0px_#050505] rotate-3 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FFC247]" />
              AI ARCHITECT
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          SHORELINE WAVE FOAM BREATHING WASH (Bottom of Hero)
          ========================================================================= */}
      <div className="relative w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="animate-wave-wash w-full h-8 sm:h-12 fill-[#F5EED8]"
          style={{ imageRendering: 'pixelated' }}
        >
          <path d="M0,24 L60,18 L120,28 L180,16 L240,24 L300,12 L360,26 L420,18 L480,30 L540,16 L600,24 L660,14 L720,28 L780,18 L840,30 L900,16 L960,26 L1020,18 L1080,28 L1140,14 L1200,24 L1200,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}
