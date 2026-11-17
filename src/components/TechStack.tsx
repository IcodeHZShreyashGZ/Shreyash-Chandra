import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { sound } from '../utils/audio';
import { Shield, Sparkles, Terminal, Cpu, Cloud, Wrench, CheckCircle } from 'lucide-react';

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const arsenals = [
    {
      id: 'frontend',
      category: 'Frontend Engineering',
      tier: 'TIER-01 // TACTILE UI',
      accent: '#FF4B18',
      icon: <Cpu className="w-5 h-5 text-[#050505]" />,
      skills: [
        { name: 'React 19', level: 'ADVANCED', xp: '95%' },
        { name: 'Next.js', level: 'PRODUCTION', xp: '90%' },
        { name: 'TypeScript', level: 'STRICT TYPE', xp: '92%' },
        { name: 'Tailwind CSS v4', level: 'MASTERY', xp: '98%' },
        { name: 'Framer Motion', level: 'PHYSICS', xp: '88%' },
        { name: 'Redux Toolkit', level: 'STATE ARCH', xp: '85%' },
      ],
    },
    {
      id: 'backend',
      category: 'Backend & Systems',
      tier: 'TIER-02 // SCALABLE RUNTIME',
      accent: '#087FE5',
      icon: <Terminal className="w-5 h-5 text-[#050505]" />,
      skills: [
        { name: 'Node.js', level: 'ASYNCHRONOUS', xp: '92%' },
        { name: 'Express.js', level: 'MICROSERVICES', xp: '94%' },
        { name: 'Python', level: 'ALGORITHMIC', xp: '90%' },
        { name: 'Django', level: 'FULL RUNTIME', xp: '82%' },
        { name: 'REST APIs', level: 'OPENAPI SPEC', xp: '96%' },
        { name: 'GraphQL', level: 'DATA GRAPH', xp: '80%' },
      ],
    },
    {
      id: 'database',
      category: 'Database & Cloud',
      tier: 'TIER-03 // PERSISTENCE',
      accent: '#008B69',
      icon: <Cloud className="w-5 h-5 text-[#050505]" />,
      skills: [
        { name: 'PostgreSQL', level: 'RELATIONAL', xp: '88%' },
        { name: 'MongoDB', level: 'DOCUMENT', xp: '90%' },
        { name: 'Redis', level: 'IN-MEMORY CACHE', xp: '84%' },
        { name: 'Docker', level: 'CONTAINERS', xp: '82%' },
        { name: 'AWS Cloud', level: 'EC2 / S3', xp: '78%' },
        { name: 'Firebase', level: 'REALTIME RTDB', xp: '86%' },
      ],
    },
    {
      id: 'tools',
      category: 'DevOps & Tooling',
      tier: 'TIER-04 // VELOCITY PIPELINE',
      accent: '#FFC247',
      icon: <Wrench className="w-5 h-5 text-[#050505]" />,
      skills: [
        { name: 'Git & VCS', level: 'ATOMIC COMMITS', xp: '96%' },
        { name: 'GitHub Actions', level: 'CI / CD AUTOMATION', xp: '85%' },
        { name: 'Linux OS', level: 'CLI BASH', xp: '88%' },
        { name: 'Jest / Cypress', level: 'TEST SUITE', xp: '80%' },
        { name: 'Vercel / Render', level: 'EDGE HOSTING', xp: '92%' },
        { name: 'Figma', level: 'WIREFRAMING', xp: '84%' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF9ED] text-[#050505] overflow-hidden">
      
      {/* Background Halftone Pattern */}
      <div className="absolute inset-0 halftone-field opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC247] border-2 border-[#050505] shadow-[2px_2px_0px_#050505] font-pixel text-[9px] sm:text-[10px] text-[#050505] font-black">
            <Shield className="w-3.5 h-3.5 text-[#FF4B18]" />
            <span>§03 TECHNICAL ARSENAL // WEAPONRY MATRIX</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#050505] tracking-tight">
            TACTICAL STACK & <br />
            <span className="text-[#087FE5] underline decoration-4 decoration-[#050505]">
              COMBAT TOOLING
            </span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#050505]/80 leading-relaxed">
            Every layer in the engineering stack is chosen for maximum speed, strict determinism, and zero runtime overhead.
          </p>
        </div>

        {/* 4 Loadout Matrices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {arsenals.map((group) => (
            <TiltCard
              key={group.id}
              glareColor={`${group.accent}25`}
              borderColor={group.accent}
              className="h-full"
            >
              <div className="brutalist-card h-full p-6 sm:p-8 bg-[#FFFFFF] flex flex-col justify-between space-y-6">
                
                {/* Header of each weapon group */}
                <div className="flex items-center justify-between border-b-3 border-[#050505] pb-4">
                  <div className="space-y-1">
                    <span className="font-pixel text-[8px] text-[#050505]/60 tracking-widest">
                      {group.tier}
                    </span>
                    <h3 className="font-display text-2xl text-[#050505]">
                      {group.category}
                    </h3>
                  </div>

                  <div
                    className="p-2.5 border-2 border-[#050505] shadow-[3px_3px_0px_#050505]"
                    style={{ backgroundColor: group.accent }}
                  >
                    {group.icon}
                  </div>
                </div>

                {/* Grid of skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      onMouseEnter={() => sound.playBlip()}
                      className="group p-3 border-2 border-[#050505] bg-[#F5EED8]/60 hover:bg-[#FFFFFF] hover:border-[#050505] hover:shadow-[3px_3px_0px_#050505] transition-all duration-150 flex flex-col justify-between space-y-1.5 cursor-crosshair"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono-tech text-xs font-bold text-[#050505] group-hover:text-[#FF4B18] transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-[#008B69] opacity-80" />
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="font-pixel text-[7px] text-[#050505]/60">
                          {skill.level}
                        </span>
                        <span
                          className="font-pixel text-[8px] font-bold px-1 py-0.5 border-1 border-[#050505]"
                          style={{ backgroundColor: `${group.accent}30` }}
                        >
                          {skill.xp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer status readout */}
                <div className="pt-3 border-t-2 border-[#050505]/20 flex items-center justify-between font-mono-tech text-[10px] text-[#050505]/70">
                  <span>LOADOUT READY // VERIFIED</span>
                  <span className="font-pixel text-[8px] text-[#008B69] font-bold">● ACTIVE</span>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
