import React from 'react';
import { TiltCard } from './TiltCard';
import { sound } from '../utils/audio';
import { Code2, Database, Brain, Compass, Cpu, Layers } from 'lucide-react';

export function Bio() {
  const missionCards = [
    {
      code: "MOD-01",
      icon: <Code2 className="w-6 h-6 text-[#FF4B18]" />,
      title: "Frontend Architecture",
      subtitle: "TACTILE & RESPONSIVE UI",
      desc: "Architecting high-impact, zero-lag user interfaces using React, Next.js, TypeScript, and modern CSS frameworks with hardware-accelerated micro-interactions.",
      stats: "0ms INP • 60 FPS",
      accent: "#FF4B18",
    },
    {
      code: "MOD-02",
      icon: <Database className="w-6 h-6 text-[#087FE5]" />,
      title: "Backend & Systems",
      subtitle: "SCALABLE APIS & MICROSERVICES",
      desc: "Engineering robust server runtimes with Node.js, Express, Python, and scalable database schemas across PostgreSQL, MongoDB, and Redis caches.",
      stats: "RESILIENT • ACID COMPLIANT",
      accent: "#087FE5",
    },
    {
      code: "MOD-03",
      icon: <Brain className="w-6 h-6 text-[#008B69]" />,
      title: "AI Integration & Agents",
      subtitle: "INTELLIGENT PIPELINES",
      desc: "Deploying production LLM chains, multi-vector retrieval (RAG), automated contract diligence, and custom assistive AI agents for high-leverage workflows.",
      stats: "GENAI • MULTI-VECTOR",
      accent: "#008B69",
    },
    {
      code: "MOD-04",
      icon: <Cpu className="w-6 h-6 text-[#FFC247]" />,
      title: "Engineering Crucible",
      subtitle: "COEP TECH UNIVERSITY",
      desc: "Sharpening algorithmic velocity, distributed system fundamentals, and competitive problem-solving as a Computer Science undergrad at COEP Technological University.",
      stats: "PUNE, IN • B.TECH CSE",
      accent: "#FFC247",
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EED8] text-[#050505] overflow-hidden">
      
      {/* Background Halftone & Astrolabe Watermark */}
      <div className="absolute inset-0 halftone-subtle opacity-60 pointer-events-none" />
      
      {/* Geometric Astrolabe Watermark SVG */}
      <div className="absolute -right-24 -top-24 w-96 h-96 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#050505" strokeWidth="1.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="65" />
          <circle cx="100" cy="100" r="35" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <polygon points="100,20 120,60 180,100 120,140 100,180 80,140 20,100 80,60" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#050505] text-[#FFC247] font-pixel text-[9px] sm:text-[10px] tracking-wider border-2 border-[#050505] shadow-[2px_2px_0px_#050505]">
            <Compass className="w-3.5 h-3.5 text-[#FF4B18]" />
            <span>§02 MISSION BRIEFING // IDENTITY & CAPABILITIES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#050505] tracking-tight">
            BRIDGING DEEP LOGIC & <br />
            <span className="text-[#FF4B18] underline decoration-4 decoration-[#050505]">
              TACTILE INTERFACES
            </span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#050505]/80 leading-relaxed pt-2">
            I am a full-stack engineer and AI builder based in Pune, India. My philosophy fuses rigorous backend systems architecture with neo-brutalist tactile frontend execution—shipping functional prototypes that delight, perform, and endure.
          </p>
        </div>

        {/* 4x 3D Perspective Tilt Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionCards.map((card, idx) => (
            <TiltCard
              key={idx}
              glareColor={`${card.accent}33`}
              borderColor={card.accent}
              onClick={() => sound.playBlip()}
              className="cursor-pointer"
            >
              <div className="h-full brutalist-card p-6 flex flex-col justify-between space-y-6 bg-[#FFFFFF] hover:border-[#050505]">
                
                {/* Card Top Meta */}
                <div className="flex items-center justify-between border-b-2 border-[#050505] pb-3">
                  <span className="font-pixel text-[9px] font-black text-[#050505]">
                    {card.code}
                  </span>
                  <div
                    className="p-2 border-2 border-[#050505] shadow-[2px_2px_0px_#050505]"
                    style={{ backgroundColor: card.accent }}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-2">
                  <div className="font-pixel text-[8px] text-[#050505]/60 tracking-wider">
                    {card.subtitle}
                  </div>
                  <h3 className="font-display text-2xl text-[#050505]">
                    {card.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[#050505]/75 leading-relaxed pt-2">
                    {card.desc}
                  </p>
                </div>

                {/* Card Bottom Tag */}
                <div className="pt-3 border-t-2 border-[#050505]/20 flex items-center justify-between">
                  <span className="font-pixel text-[8px] px-2 py-1 bg-[#F5EED8] border-1 border-[#050505] text-[#050505] font-bold">
                    {card.stats}
                  </span>
                  <span className="font-pixel text-[10px] text-[#FF4B18] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Good Vibes Build Better Things Banner */}
        <div className="p-4 sm:p-6 bg-[#FFC247] border-3 border-[#050505] shadow-[5px_5px_0px_#050505] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-3xl select-none">🥥</span>
            <div>
              <div className="font-display text-lg sm:text-xl text-[#050505]">
                "GOOD VIBES & DEEP FOCUS BUILD BETTER SYSTEMS."
              </div>
              <div className="font-mono-tech text-xs text-[#050505]/80">
                Operating with relentless curiosity, clean git history, and production conviction.
              </div>
            </div>
          </div>
          <a
            href="#projects"
            onClick={() => sound.playCoin()}
            className="brutalist-btn !bg-[#050505] !text-[#FFC247] !text-[10px] !py-2.5 !px-4 hover:!bg-[#FF4B18] hover:!text-[#FFFFFF] whitespace-nowrap"
          >
            VIEW DEPLOYMENTS ➔
          </a>
        </div>

      </div>
    </section>
  );
}
