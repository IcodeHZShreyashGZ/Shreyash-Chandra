export function MarqueeTicker() {
  const items = [
    "NON-STOP HIGH VELOCITY DEV ★",
    "FULL-STACK ARCHITECTURE & SCALABILITY ★",
    "AI AGENTS & MACHINE LEARNING ★",
    "COEP PUNE TECH EXPEDITION ★",
    "LIVE WORKING PROTOTYPES ONLY ★",
    "BRUTALIST PRECISION & 16-BIT RETRO SPEED ★",
    "SUN, SAND & PRODUCTION COMMITS ★",
    "AMBITIOUS BUILDERS CRUCIBLE ★"
  ];

  return (
    <div className="relative z-20 bg-[#FFC247] border-y-3 sm:border-y-4 border-[#050505] py-3 overflow-hidden select-none shadow-[0_4px_0_0_#050505]">
      <div className="animate-marquee flex items-center font-display text-sm sm:text-base tracking-widest text-[#050505]">
        {/* Repeating sequence for seamless infinite scroll */}
        {[...items, ...items, ...items].map((text, idx) => (
          <span key={idx} className="whitespace-nowrap px-6 font-bold flex items-center gap-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
