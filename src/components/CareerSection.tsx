import React, { useState } from 'react';
import { CAREER_PATHS, ALUMNI_STORIES } from '../data/tkjData';
import { Briefcase, TrendingUp, DollarSign, Building, Award, CheckCircle2, ChevronRight, User } from 'lucide-react';

export const CareerSection: React.FC = () => {
  const [activeCareerId, setActiveCareerId] = useState<string>(CAREER_PATHS[0].id);

  const selectedCareer = CAREER_PATHS.find((c) => c.id === activeCareerId) || CAREER_PATHS[0];

  return (
    <section id="karir" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <span>Masa Depan Profesional</span>
            <span className="text-zinc-600">/</span>
            <span>Jalur Karir Industri Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Prospek Karir & Penyerapan Kerja Lulusan
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Dunia industri bergerak ke arah otomatisasi, komputasi awan, dan konektivitas data kecepatan tinggi. Lulusan TKJ SMKN 1 Bagor disiapkan mengisi posisi teknis strategis dengan daya tawar kompetitif.
          </p>
        </div>

        {/* Interactive Career Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Role Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {CAREER_PATHS.map((item) => {
              const isActive = item.id === activeCareerId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveCareerId(item.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-left ${
                    isActive
                      ? 'bg-zinc-900 border-cyan-400/80 shadow-lg shadow-cyan-950/20'
                      : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 block">
                      {item.growth}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-xs text-zinc-400 font-mono">
                      {item.salaryRange}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Role Breakdown */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-sm space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Briefcase className="w-4 h-4" />
                <span>Profil Jabatan Kerja</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedCareer.role}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {selectedCareer.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>Rentang Gaji Industri</span>
                </div>
                <div className="text-sm font-bold font-mono text-emerald-400 tabular-nums">
                  {selectedCareer.salaryRange}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Entry-level hingga Mid-level</div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Tren Pertumbuhan Lapangan Kerja</span>
                </div>
                <div className="text-sm font-bold font-mono text-cyan-400">
                  {selectedCareer.growth}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Data Kebutuhan Sektor TIK Nasional</div>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wide mb-2.5">
                Keahlian & Kompetensi Utama:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCareer.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Typical Employer Types */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-zinc-400" />
                <span>Sektor Perusahaan Perekrut:</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                {selectedCareer.companies.map((comp, idx) => (
                  <div key={idx} className="p-2 rounded bg-zinc-950/70 border border-zinc-800/80 text-zinc-300">
                    • {comp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Success Testimonials Section */}
        <div className="mt-20 pt-16 border-t border-zinc-850">
          <div className="max-w-2xl text-left mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              Kisah Nyata Lulusan
            </span>
            <h3 className="text-2xl font-bold text-white">
              Jejak Sukses Alumni TKJ SMKN 1 Bagor
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALUMNI_STORIES.map((alumni) => (
              <div
                key={alumni.id}
                className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{alumni.name}</h4>
                      <div className="text-xs text-cyan-400 font-mono">{alumni.year}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                    "{alumni.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-1">
                  <div className="text-xs font-semibold text-white">{alumni.currentRole}</div>
                  <div className="text-xs text-zinc-400">{alumni.company}</div>
                  <div className="text-[11px] font-mono text-indigo-400 pt-1">
                    Sertifikasi: {alumni.certification}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
