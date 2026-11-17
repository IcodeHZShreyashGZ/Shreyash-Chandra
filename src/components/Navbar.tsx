import { useState, useEffect } from 'react';
import { sound } from '../utils/audio';
import { Volume2, VolumeX, Monitor, Sun, Sunset, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  mood: 'noon' | 'sunset' | 'midnight';
  onMoodChange: (mood: 'noon' | 'sunset' | 'midnight') => void;
  crtActive: boolean;
  onToggleCrt: () => void;
  turboActive: boolean;
}

export function Navbar({
  mood,
  onMoodChange,
  crtActive,
  onToggleCrt,
  turboActive,
}: NavbarProps) {
  const [sfxEnabled, setSfxEnabled] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleSound = () => {
    const next = sound.toggle();
    setSfxEnabled(next);
  };

  const navLinks = [
    { href: '#about', label: '§02 MISSION' },
    { href: '#skills', label: '§03 ARSENAL' },
    { href: '#projects', label: '§04 PROJECTS' },
    { href: '#experience', label: '§05 RUNTIME' },
    { href: '#contact', label: '§06 TRANSMIT' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EED8]/95 backdrop-blur-md border-b-3 sm:border-b-4 border-[#050505] shadow-[0_4px_0_0_#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Badge */}
        <a
          href="#hero"
          onClick={() => sound.playBlip()}
          className="group flex items-center gap-2.5 bg-[#071426] text-[#F5EED8] px-2.5 sm:px-3 py-1.5 border-2 border-[#050505] shadow-[2px_2px_0px_#050505] hover:bg-[#FFC247] hover:text-[#050505] transition-colors"
        >
          {/* Pixel Palm Icon */}
          <span className="text-base select-none group-hover:scale-110 transition-transform">🌴</span>
          <div className="flex flex-col">
            <span className="font-pixel text-[10px] sm:text-xs font-black tracking-wider flex items-center gap-1.5">
              <span>SC</span>
              <span className="hidden xs:inline text-[#FF4B18] group-hover:text-[#050505]">//</span>
              <span className="hidden xs:inline">CHANDRA</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => sound.playBlip()}
              className="px-2.5 py-1 font-pixel text-[10px] text-[#050505] border-2 border-transparent hover:border-[#050505] hover:bg-[#FFC247] hover:shadow-[2px_2px_0px_#050505] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Master Control Suite (Mood Shifter, SFX, CRT, CTA) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Turbo Badge if Konami code entered */}
          {turboActive && (
            <div className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-[#FF4B18] text-[#FFFFFF] font-pixel text-[8px] border-2 border-[#050505] animate-pulse shadow-[2px_2px_0px_#050505]">
              <Sparkles className="w-3 h-3 text-[#FFC247]" />
              TURBO ON!
            </div>
          )}

          {/* Time-of-Day Coastal Mood Selector */}
          <div className="flex items-center border-2 border-[#050505] bg-[#FFFFFF] shadow-[2px_2px_0px_#050505]">
            <button
              onClick={() => { sound.playBlip(); onMoodChange('noon'); }}
              className={`p-1.5 transition-colors ${mood === 'noon' ? 'bg-[#FFC247] text-[#050505]' : 'text-gray-600 hover:bg-[#F5EED8]'}`}
              title="High Noon (Sandy Gold & Ocean Azure)"
              aria-label="High Noon Mood"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { sound.playBlip(); onMoodChange('sunset'); }}
              className={`p-1.5 transition-colors border-l-2 border-[#050505] ${mood === 'sunset' ? 'bg-[#FF4B18] text-[#FFFFFF]' : 'text-gray-600 hover:bg-[#F5EED8]'}`}
              title="Golden Sunset (Tangerine & Rose)"
              aria-label="Golden Sunset Mood"
            >
              <Sunset className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { sound.playBlip(); onMoodChange('midnight'); }}
              className={`p-1.5 transition-colors border-l-2 border-[#050505] ${mood === 'midnight' ? 'bg-[#071426] text-[#00E699]' : 'text-gray-600 hover:bg-[#F5EED8]'}`}
              title="Midnight Crucible (Cyber Ink & Neon)"
              aria-label="Midnight Crucible Mood"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => { sound.playBlip(); onToggleCrt(); }}
            className={`p-1.5 border-2 border-[#050505] shadow-[2px_2px_0px_#050505] transition-colors ${crtActive ? 'bg-[#087FE5] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-gray-700 hover:bg-[#F5EED8]'}`}
            title="Toggle CRT Retro Scanlines"
            aria-label="Toggle CRT Scanlines"
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>

          {/* Sound FX Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className={`p-1.5 border-2 border-[#050505] shadow-[2px_2px_0px_#050505] transition-colors ${sfxEnabled ? 'bg-[#008B69] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-gray-500 hover:bg-[#F5EED8]'}`}
            title={sfxEnabled ? 'Mute 8-Bit Chiptune SFX' : 'Enable 8-Bit Chiptune SFX'}
            aria-label="Toggle Sound Effects"
          >
            {sfxEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            onClick={() => sound.playLaser()}
            className="brutalist-btn gleam-sweep hidden sm:inline-flex !py-1.5 !px-3 !text-[9px] !border-2"
          >
            SIGNAL ➔
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => { sound.playBlip(); setMobileMenuOpen(!mobileMenuOpen); }}
            className="lg:hidden p-1.5 bg-[#FFFFFF] border-2 border-[#050505] shadow-[2px_2px_0px_#050505] font-pixel text-[10px]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9ED] border-t-3 border-[#050505] px-4 py-3 space-y-2 font-pixel text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                sound.playBlip();
                setMobileMenuOpen(false);
              }}
              className="block p-2 border-2 border-[#050505] bg-[#FFFFFF] hover:bg-[#FFC247] shadow-[2px_2px_0px_#050505]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              sound.playLaser();
              setMobileMenuOpen(false);
            }}
            className="block text-center p-2.5 bg-[#FF4B18] text-[#FFFFFF] border-2 border-[#050505] shadow-[2px_2px_0px_#050505] font-bold"
          >
            TRANSMIT SIGNAL ➔
          </a>
        </div>
      )}
    </header>
  );
}
