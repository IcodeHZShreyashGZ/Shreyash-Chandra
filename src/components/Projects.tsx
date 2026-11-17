import React from 'react';
import { TiltCard } from './TiltCard';
import { sound } from '../utils/audio';
import { particleSandbox } from '../utils/particles';
import { ExternalLink, Github, Terminal, Sparkles, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: "PROJ-01",
      title: "AI Email Assistant",
      subtitle: "INTELLIGENT DRAFTING & CONTEXT SYNTHESIS",
      description:
        "High-velocity assistive communication engine leveraging state-of-the-art LLMs. Analyzes inbound message intent, synthesizes structured responses, and streamlines executive inbox triage.",
      image: "https://i.ibb.co/HT3SX4hS/image.png",
      status: "PRE-ALPHA // VERCEL DEPLOYED",
      statusColor: "#008B69",
      accent: "#FF4B18",
      tags: ["AI Agent", "Next.js", "Productivity", "Full-Stack", "Vercel"],
      liveUrl: "https://ai-email-assistant-git-main-hishreyashgiis-4432s-projects.vercel.app/",
      githubUrl: "https://github.com/IcodeHZShreyashGZ/AI-Email-Assistant",
      metrics: ["Intelligent Triage", "Draft Automation", "Context Memory"],
    },
    {
      id: "PROJ-02",
      title: "Legal Contract Review & Risk Engine",
      subtitle: "MULTI-VECTOR CLAUSE EXTRACTION & DUE DILIGENCE",
      description:
        "Enterprise-grade legal intelligence platform. Automates deep due diligence, parses ambiguous contract clauses, extracts liability clauses, and computes multi-vector risk scores in real-time.",
      image: "https://i.ibb.co/1tD6sxHd/image.png",
      status: "ACTIVE RESEARCH // OPEN SOURCE",
      statusColor: "#FFC247",
      accent: "#087FE5",
      tags: ["LegalTech", "Risk Parser", "LLM Extraction", "Python", "Full-Stack"],
      liveUrl: "https://github.com/IcodeHZShreyashGZ/AI-Powered-Legal-Contract-Review---Analysis-System",
      githubUrl: "https://github.com/IcodeHZShreyashGZ/AI-Powered-Legal-Contract-Review---Analysis-System",
      metrics: ["Clause Extraction", "Risk Scoring", "Due Diligence"],
    },
    {
      id: "PROJ-03",
      title: "Tropical Cyber-Brutalist Playground",
      subtitle: "RETRO 16-BIT ARCADE & HARDWARE ACCELERATED UI",
      description:
        "The very arena you are experiencing right now: zero-asset Web Audio chiptune synthesis, 60fps canvas particle physics, interactive mascots, and neo-brutalist editorial layout.",
      image: "https://i.ibb.co/N2PwZKGW/Gemini-Generated-Image-bg2fugbg2fugbg2f.png",
      status: "LIVE OPERATIONAL // PRODUCTION",
      statusColor: "#FF4B18",
      accent: "#008B69",
      tags: ["React 19", "Web Audio API", "Canvas Physics", "Vite", "Tailwind v4"],
      liveUrl: "#",
      githubUrl: "https://github.com/IcodeHZShreyashGZ",
      metrics: ["Web Audio FX", "Canvas Sandbox", "Zero Latency"],
    },
  ];

  const handleActionClick = (e: React.MouseEvent, type: 'demo' | 'github') => {
    if (type === 'demo') {
      sound.playLaser();
    } else {
      sound.playCoin();
    }
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    particleSandbox.burst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      20,
      ['#FF4B18', '#FFC247', '#087FE5']
    );
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#071426] text-[#F5EED8] overflow-hidden border-y-4 border-[#050505]">
      
      {/* Background Cyber Grid & Halftone */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#FFC247_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF4B18] text-[#FFFFFF] font-pixel text-[9px] sm:text-[10px] tracking-wider border-2 border-[#050505] shadow-[3px_3px_0px_#050505]">
            <Terminal className="w-3.5 h-3.5 text-[#FFC247]" />
            <span>§04 OPERATIONAL DEPLOYMENTS // SHOWCASE ARENA</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
            SHIPPED SYSTEMS & <br />
            <span className="text-[#FFC247] drop-shadow-[3px_3px_0px_#FF4B18]">
              PRODUCTION BUILDS
            </span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#F5EED8]/80 leading-relaxed">
            Real working systems tested under load. Every deployment showcases clean algorithmic foundations, practical AI automation, and high-velocity tactile execution.
          </p>
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <TiltCard
              key={proj.id}
              glareColor={`${proj.accent}30`}
              borderColor={proj.accent}
              className="h-full"
            >
              <div className="brutalist-card h-full bg-[#050E1A] border-3 sm:border-4 border-[#FFC247] shadow-[6px_6px_0px_#050505] hover:shadow-[8px_8px_0px_#FF4B18] transition-all flex flex-col justify-between overflow-hidden">
                
                {/* Project Header Bar */}
                <div className="p-4 bg-[#071426] border-b-3 border-[#050505] flex items-center justify-between">
                  <span className="font-pixel text-[9px] font-black text-[#FFC247]">
                    {proj.id}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#050505] border-1 border-[#FFC247]/50 font-pixel text-[8px] text-[#F5EED8]">
                    <span
                      className="inline-block w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: proj.statusColor }}
                    />
                    <span>{proj.status}</span>
                  </div>
                </div>

                {/* CRT-Scanline Preview Screen Image Wrapper */}
                <div className="relative h-48 sm:h-52 overflow-hidden border-b-3 border-[#050505] group">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* CRT Scanline & Grain overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 font-pixel text-[8px] text-[#FFC247] bg-[#050505]/80 px-1 border border-[#FFC247]">
                    SYS.VIEW
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-2">
                    <div className="font-pixel text-[8px] text-[#087FE5] tracking-widest uppercase">
                      {proj.subtitle}
                    </div>
                    <h3 className="font-display text-2xl text-[#FFFFFF] leading-tight">
                      {proj.title}
                    </h3>
                    <p className="font-mono-tech text-xs text-[#F5EED8]/75 leading-relaxed pt-1">
                      {proj.description}
                    </p>
                  </div>

                  {/* Highlights / Metrics */}
                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#071426] border border-[#FFC247]/40 font-pixel text-[8px] text-[#FFC247]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button Bar */}
                  <div className="pt-4 border-t-2 border-[#FFC247]/20 flex items-center gap-3">
                    {proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleActionClick(e, 'demo')}
                        className="brutalist-btn gleam-sweep flex-1 !py-2.5 !px-3 !text-[9px] !bg-[#FF4B18] !text-[#FFFFFF] !border-2 !border-[#050505] shadow-[2px_2px_0px_#050505] hover:!bg-[#FFC247] hover:!text-[#050505]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>LIVE DEMO</span>
                      </a>
                    )}

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleActionClick(e, 'github')}
                      className="brutalist-btn flex-1 !py-2.5 !px-3 !text-[9px] !bg-[#071426] !text-[#FFC247] !border-2 !border-[#FFC247] shadow-[2px_2px_0px_#050505] hover:!bg-[#FFC247] hover:!text-[#050505]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>CODE REPO</span>
                    </a>
                  </div>

                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
