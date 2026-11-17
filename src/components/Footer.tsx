import { sound } from '../utils/audio';

export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-[#F5EED8] border-t-4 border-[#050505] py-12 px-4 sm:px-6 lg:px-8 select-none z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b-2 border-[#F5EED8]/15 pb-8">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌴</span>
            <div>
              <div className="font-display text-2xl text-[#FFFFFF] tracking-tight">
                SHREYASH CHANDRA
              </div>
              <div className="font-pixel text-[9px] text-[#FFC247] tracking-wider">
                FULL-STACK ARCHITECT // COEP TECH UNIVERSITY
              </div>
            </div>
          </div>

          {/* Quick Waypoint Sector Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-pixel text-[9px]">
            <a href="#hero" onClick={() => sound.playBlip()} className="hover:text-[#FFC247] transition-colors">
              [§01 HERO]
            </a>
            <a href="#about" onClick={() => sound.playBlip()} className="hover:text-[#FFC247] transition-colors">
              [§02 MISSION]
            </a>
            <a href="#skills" onClick={() => sound.playBlip()} className="hover:text-[#FFC247] transition-colors">
              [§03 ARSENAL]
            </a>
            <a href="#projects" onClick={() => sound.playBlip()} className="hover:text-[#FFC247] transition-colors">
              [§04 PROJECTS]
            </a>
            <a href="#experience" onClick={() => sound.playBlip()} className="hover:text-[#FFC247] transition-colors">
              [§05 RUNTIME]
            </a>
            <a href="#contact" onClick={() => sound.playBlip()} className="hover:text-[#FFC247] transition-colors">
              [§06 TRANSMIT]
            </a>
          </div>

        </div>

        {/* Middle Tier: Konami Code Alert & Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono-tech">
          
          {/* Konami Easter Egg Hint */}
          <div className="p-3 bg-[#071426] border-2 border-[#FFC247]/30 flex items-center justify-between">
            <span className="text-[#FFC247] font-bold">SECRET ARCADE CHEAT:</span>
            <code className="font-pixel text-[9px] text-[#00E699] tracking-wider">
              ↑ ↑ ↓ ↓ ← → ← → B A
            </code>
          </div>

          {/* Telemetry Status */}
          <div className="p-3 bg-[#071426] border-2 border-[#087FE5]/30 flex items-center justify-between text-[#F5EED8]/80">
            <span>GRID TELEMETRY:</span>
            <span className="font-pixel text-[9px] text-[#087FE5]">
              18.5204° N, 73.8567° E [ONLINE]
            </span>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Engineering Directive Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#F5EED8]/60 pt-2">
          <div>
            © {new Date().getFullYear()} Shreyash Chandra. All rights reserved.
          </div>
          <div className="font-pixel text-[8px] text-[#FF4B18] tracking-widest text-center sm:text-right">
            ★ DESIGNED UNDER TROPICAL CYBER-BRUTALISM DIRECTIVE ★
          </div>
        </div>

      </div>
    </footer>
  );
}
