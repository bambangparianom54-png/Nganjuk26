import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Terminal, Shield, Cpu, Activity } from 'lucide-react';
import { HERO_IMAGE } from '../data/tkjData';

interface HeroProps {
  onOpenConsultation: () => void;
}

const TYPING_PHRASES = [
  "Infrastruktur Cloud & Server Virtualization",
  "Cyber Security & Pertahanan Jaringan Digital",
  "Sistem Transmisi Cepat Fiber Optic FTTH",
  "MikroTik & Cisco Enterprise Network Architecture",
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetPhrase.length) {
          setCurrentText(targetPhrase.substring(0, currentText.length + 1));
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(targetPhrase.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center">
      {/* Background Cyber Tech Grid & Radiant Glows */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Editorial Kicker (Zero-pill compliant) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wide text-cyan-400">
              <span className="text-zinc-400">SMK Pusat Keunggulan</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300">Terakreditasi A</span>
              <span className="text-zinc-600">/</span>
              <span className="text-cyan-400 font-semibold">SMKN 1 Bagor</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Membentuk <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Arsitek Digital</span> Masa Depan
            </h1>

            {/* Dynamic Typing Sub-Headline */}
            <div className="h-14 sm:h-12 flex items-center">
              <div className="flex items-center gap-2 font-mono text-base sm:text-lg text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 px-4 py-2.5 rounded-lg max-w-xl backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-zinc-400 text-xs sm:text-sm shrink-0">konsentrasi:</span>
                <span className="text-cyan-300 font-medium truncate">
                  {currentText}
                </span>
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Program keahlian unggulan di SMK Negeri 1 Bagor yang menyiapkan teknisi dan profesional IT tangguh. Menguasai arsitektur jaringan komputer enterprise, administrasi server Linux, keamanan siber, dan teknologi fiber optik berstandar sertifikasi industri internasional.
            </p>

            {/* Dual Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('lab')}
                className="px-6 py-3.5 text-sm font-bold text-zinc-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>Jelajahi Fasilitas Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-700/80 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>Daftar / Konsultasi PPDB</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Feature Highlights Minimalist Text Strip */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-zinc-800/70 text-xs text-zinc-400 max-w-lg">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>MikroTik Academy</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Cisco Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400 shrink-0" />
                <span>LSP-P1 BNSP</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Lab Showcase Card with Glass HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-2 shadow-2xl shadow-cyan-950/20 group">
              {/* Image Frame with hover zoom */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src={HERO_IMAGE}
                  alt="Laboratorium Jaringan Komputer TKJ SMKN 1 Bagor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                {/* Floating Tech Badges within Image */}
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                  <span>Lab Jaringan Utama</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">Infrastruktur Backbone:</span>
                    <span className="text-cyan-400 font-semibold">1 Gbps Dedicated Fiber</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-300">
                    <span className="text-zinc-400">Spesialisasi:</span>
                    <span className="text-zinc-200">MikroTik, Linux Server & Cyber Security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-purple-500/60 rounded-bl-lg pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
