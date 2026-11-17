import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { particleSandbox } from '../utils/particles';
import { Mail, Copy, Check, Github, Linkedin, Instagram, FileDown, Radio, Send, Terminal } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hishreyashgiis@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    sound.playCoin();
    navigator.clipboard.writeText(email);
    setCopied(true);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    particleSandbox.burst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      30,
      ['#FFC247', '#FF4B18', '#008B69', '#087FE5', '#FFFFFF']
    );

    setTimeout(() => setCopied(false), 3000);
  };

  const handleSocialClick = (e: React.MouseEvent) => {
    sound.playBlip();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    particleSandbox.burst(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      14,
      ['#FFC247', '#FF4B18']
    );
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFC247] text-[#050505] overflow-hidden border-t-4 border-[#050505]">
      
      {/* Background Halftone & Geometric Pattern */}
      <div className="absolute inset-0 halftone-field opacity-25 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10 space-y-16">
        
        {/* Grand Neo-Brutalist Banner Stamp */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#050505] text-[#FFC247] font-pixel text-[9px] sm:text-[10px] tracking-wider border-2 border-[#050505] shadow-[3px_3px_0px_#050505]">
            <Radio className="w-3.5 h-3.5 text-[#FF4B18] animate-pulse" />
            <span>§06 THE TRANSMISSION // FREQUENCY OPEN</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#050505] tracking-tight leading-[0.9]">
            SHIP IT WITH <br />
            <span className="text-[#FF4B18] drop-shadow-[4px_4px_0px_#050505]">
              CONVICTION.
            </span>
          </h2>

          <p className="font-editorial text-xl sm:text-2xl text-[#050505]/90 max-w-2xl mx-auto leading-relaxed italic">
            Whether you want to build cutting-edge AI systems, collaborate on high-velocity projects, or talk engineering architecture—my terminal is listening.
          </p>
        </div>

        {/* Master Transmission Card */}
        <div className="brutalist-card p-6 sm:p-10 bg-[#FFFFFF] border-4 border-[#050505] shadow-[8px_8px_0px_#050505] space-y-8">
          
          {/* Card Top Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#050505] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#008B69] border border-[#050505] animate-pulse" />
              <span className="font-pixel text-[10px] font-black tracking-wider text-[#050505]">
                DISPATCH CONSOLE // DIRECT LINE
              </span>
            </div>
            <div className="font-mono-tech text-xs text-[#050505]/70 font-bold">
              ESTABLISHED: 18.5204° N, 73.8567° E
            </div>
          </div>

          {/* Email Copy Centerpiece */}
          <div className="space-y-3">
            <div className="font-pixel text-[9px] text-[#050505]/70 tracking-widest uppercase">
              PRIMARY COMM CHANNEL:
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex-1 p-3.5 sm:p-4 bg-[#F5EED8] border-3 border-[#050505] shadow-[3px_3px_0px_#050505] font-mono-tech text-sm sm:text-base font-bold text-[#050505] flex items-center justify-between overflow-x-auto">
                <span className="select-all">{email}</span>
                <Mail className="w-5 h-5 text-[#FF4B18] shrink-0 ml-2" />
              </div>

              <button
                onClick={handleCopyEmail}
                className="brutalist-btn gleam-sweep !bg-[#FF4B18] !text-[#FFFFFF] !border-3 !border-[#050505] hover:!bg-[#050505] hover:!text-[#FFC247] shadow-[3px_3px_0px_#050505] !text-xs !py-3.5 !px-6 whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FFC247]" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL ➔</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Channels Network */}
          <div className="space-y-3 pt-2">
            <div className="font-pixel text-[9px] text-[#050505]/70 tracking-widest uppercase">
              SOCIAL NETWORK FREQUENCIES:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* GitHub */}
              <a
                href="https://github.com/IcodeHZShreyashGZ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialClick}
                className="p-4 bg-[#050505] text-[#F5EED8] border-3 border-[#050505] shadow-[4px_4px_0px_#FF4B18] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#FFC247] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-[#FFC247] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-pixel text-[10px] text-[#FFC247]">GITHUB</div>
                    <div className="font-mono-tech text-xs text-white/70">@IcodeHZShreyashGZ</div>
                  </div>
                </div>
                <span className="font-pixel text-xs text-[#FFC247] group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shreyash-chandra-9ba45432a"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialClick}
                className="p-4 bg-[#087FE5] text-[#FFFFFF] border-3 border-[#050505] shadow-[4px_4px_0px_#050505] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#050505] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#FFFFFF] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-pixel text-[10px] text-[#FFFFFF]">LINKEDIN</div>
                    <div className="font-mono-tech text-xs text-white/90">Shreyash Chandra</div>
                  </div>
                </div>
                <span className="font-pixel text-xs text-[#FFFFFF] group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/anjaan_kashti_06/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialClick}
                className="p-4 bg-[#F5EED8] text-[#050505] border-3 border-[#050505] shadow-[4px_4px_0px_#050505] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#FF4B18] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#E1306C] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-pixel text-[10px] text-[#050505]">INSTAGRAM</div>
                    <div className="font-mono-tech text-xs text-[#050505]/70">@anjaan_kashti_06</div>
                  </div>
                </div>
                <span className="font-pixel text-xs text-[#050505] group-hover:translate-x-1 transition-transform">↗</span>
              </a>

            </div>
          </div>

          {/* Bottom Prompt / Resume Alert */}
          <div className="pt-4 border-t-2 border-[#050505]/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FFF9ED] p-4 border-2 border-[#050505]">
            <div className="flex items-center gap-2">
              <FileDown className="w-5 h-5 text-[#008B69]" />
              <div className="font-mono-tech text-xs text-[#050505] font-bold">
                ENGINEERING DOSSIER / RESUME (PDF)
              </div>
            </div>

            <button
              onClick={(e) => {
                sound.playBlip();
                alert("Dossier / Resume PDF is being compiled with latest 2026 project metrics. Please reach out via hishreyashgiis@gmail.com for instant copy!");
              }}
              className="brutalist-btn !bg-[#050505] !text-[#FFC247] !text-[9px] !py-2 !px-4 hover:!bg-[#008B69] hover:!text-[#FFFFFF] whitespace-nowrap"
            >
              REQUEST DOSSIER ➔
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
