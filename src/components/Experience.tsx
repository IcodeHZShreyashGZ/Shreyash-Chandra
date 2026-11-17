import { TiltCard } from './TiltCard';
import { sound } from '../utils/audio';
import { GitCommit, Calendar, MapPin, Award, CheckCircle2, Flame } from 'lucide-react';

export function Experience() {
  const checkpoints = [
    {
      period: "2024 — PRESENT",
      status: "CURRENT ACTIVE SPRINT",
      statusColor: "#008B69",
      role: "B.Tech in Computer Science & Engineering",
      institution: "COEP Technological University",
      location: "Pune, Maharashtra, India",
      description:
        "Rigorous coursework in computational complexity, algorithms, data structures, and computer organization. Actively engaged in high-velocity hackathons, open-source building, and production-grade full-stack & AI agent development.",
      highlights: [
        "Core Algorithms & Data Structures",
        "Full-Stack Web Engineering",
        "Applied Machine Learning & GenAI",
        "Competitive Problem Solving & Hackathons",
      ],
      badge: "COEP TECH CSE",
      accent: "#FF4B18",
    },
    {
      period: "2022 — 2024",
      status: "COMPILED & DEPLOYED",
      statusColor: "#087FE5",
      role: "Higher Secondary Education (Science & Mathematics)",
      institution: "Hem Sheela Model School",
      location: "Durgapur, West Bengal, India",
      description:
        "Completed rigorous senior secondary schooling focusing on Advanced Mathematics, Physics, and Chemistry. Formed the foundational analytical mindset and sparked passion for algorithmic coding and software architecture.",
      highlights: [
        "Mathematics & Physics Focus",
        "Foundational Programming Clubs",
        "Logic & Computational Theory",
      ],
      badge: "HS GRADUATION",
      accent: "#FFC247",
    },
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EED8] text-[#050505] overflow-hidden">
      
      {/* Background Halftone Subtle */}
      <div className="absolute inset-0 halftone-subtle opacity-50 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#050505] text-[#FFC247] font-pixel text-[9px] sm:text-[10px] tracking-wider border-2 border-[#050505] shadow-[2px_2px_0px_#050505]">
            <GitCommit className="w-3.5 h-3.5 text-[#008B69]" />
            <span>§05 THE RUNTIME // CHRONOLOGICAL SPRINT LOGS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#050505] tracking-tight">
            ACADEMIC CRUCIBLE & <br />
            <span className="text-[#008B69] underline decoration-4 decoration-[#050505]">
              RUNTIME MILESTONES
            </span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-[#050505]/80 leading-relaxed max-w-2xl mx-auto">
            A chronological timeline of deliberate learning, relentless practice, and engineering growth.
          </p>
        </div>

        {/* Brutalist Timeline Rail */}
        <div className="relative border-l-4 border-[#050505] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {checkpoints.map((cp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Checkpoint Node Indicator */}
              <div
                className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 border-3 border-[#050505] flex items-center justify-center shadow-[2px_2px_0px_#050505] group-hover:scale-110 transition-transform"
                style={{ backgroundColor: cp.accent }}
              >
                <Flame className="w-4 h-4 text-[#050505]" />
              </div>

              {/* 3D Tilt Milestone Card */}
              <TiltCard
                glareColor={`${cp.accent}25`}
                borderColor={cp.accent}
                onClick={() => sound.playBlip()}
              >
                <div className="brutalist-card p-6 sm:p-8 bg-[#FFFFFF] space-y-4">
                  
                  {/* Card Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#050505] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-pixel text-[10px] font-black text-[#050505] bg-[#FFC247] px-2 py-0.5 border border-[#050505]">
                        {cp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 font-pixel text-[8px] text-[#008B69] font-bold">
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: cp.statusColor }} />
                        {cp.status}
                      </span>
                    </div>

                    <div className="font-pixel text-[8px] text-[#050505]/70 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF4B18]" />
                      <span>{cp.location}</span>
                    </div>
                  </div>

                  {/* Title & Institution */}
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl sm:text-3xl text-[#050505]">
                      {cp.role}
                    </h3>
                    <div className="font-pixel text-xs text-[#087FE5] font-bold flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>{cp.institution}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-mono-tech text-xs sm:text-sm text-[#050505]/80 leading-relaxed pt-1">
                    {cp.description}
                  </p>

                  {/* Highlights Matrix */}
                  <div className="pt-3 border-t-2 border-[#050505]/15">
                    <div className="font-pixel text-[8px] text-[#050505]/60 mb-2">
                      KEY LEARNING DOMAINS:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cp.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-1 bg-[#F5EED8] border-1.5 border-[#050505] font-mono-tech text-xs text-[#050505] font-bold hover:bg-[#FFC247] transition-colors"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </TiltCard>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
