import React, { useState } from 'react';
import { COMPETENCIES } from '../data/tkjData';
import { Competency } from '../types';
import { Network, Server, ShieldAlert, ArrowRight, X, Check, BookOpen } from 'lucide-react';

export const CompetenciesSection: React.FC = () => {
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-cyan-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-purple-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-blue-400" />;
      default:
        return <Network className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="keunggulan" className="relative py-24 bg-zinc-950">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Anti-slop, clean editorial title case) */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <span>Kurikulum Berbasis Industri</span>
            <span className="text-zinc-600">/</span>
            <span>Standar KKNI Level 2 & BNSP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Tiga Pilar Kompetensi Keahlian TKJ
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Disusun bersama praktisi industri teknologi informasi terkemuka untuk memastikan setiap lulusan memiliki keterampilan teknis yang langsung siap kerja dan bersertifikasi.
          </p>
        </div>

        {/* 3-Column Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPETENCIES.map((comp) => {
            const isCyan = comp.accentColor === 'cyan';
            const isPurple = comp.accentColor === 'purple';

            return (
              <div
                key={comp.id}
                className={`relative rounded-2xl p-7 bg-zinc-900/60 border border-zinc-800 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  isCyan
                    ? 'hover:border-cyan-400/80 hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.25)]'
                    : isPurple
                    ? 'hover:border-purple-400/80 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.25)]'
                    : 'hover:border-blue-400/80 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.25)]'
                }`}
              >
                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIcon(comp.icon)}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 tracking-wider">
                      {comp.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {comp.shortDesc}
                  </p>

                  {/* Key Modules Preview */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800/80">
                    <div className="text-xs font-semibold text-zinc-300">Materi Unggulan:</div>
                    <ul className="space-y-1.5 text-xs text-zinc-400">
                      {comp.modules.slice(0, 3).map((mod, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Unboxed Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {comp.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setSelectedCompetency(comp)}
                  className="w-full py-2.5 px-4 rounded-lg bg-zinc-950/80 hover:bg-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white border border-zinc-800 transition-all flex items-center justify-center gap-2 group-hover:border-zinc-700 cursor-pointer"
                >
                  <span>Lihat Detail Kurikulum</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Curriculum Detail Modal */}
      {selectedCompetency && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  {selectedCompetency.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedCompetency.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCompetency(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-sm text-zinc-300">
              <p className="leading-relaxed text-zinc-300">
                {selectedCompetency.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5 flex items-center gap-2 font-semibold">
                  <BookOpen className="w-4 h-4" />
                  <span>Silabus Materi Praktikum Lengkap:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCompetency.modules.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800 text-xs">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5 font-semibold">
                  Software, Simulator & Alat Praktik:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCompetency.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2.5 font-semibold">
                  Target Sertifikasi Industri:
                </h4>
                <div className="space-y-1.5">
                  {selectedCompetency.certifications.map((c, idx) => (
                    <div key={idx} className="text-xs text-cyan-300 bg-cyan-950/30 border border-cyan-800/50 rounded-lg p-2.5">
                      ✓ {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setSelectedCompetency(null)}
                className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                Tutup Informasi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
