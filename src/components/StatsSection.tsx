import React from 'react';
import { STATS_DATA, PARTNERS } from '../data/tkjData';
import { Award, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-zinc-950/90 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-cyan-400 tabular-nums tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.number}
                </span>
                <span className="text-base font-bold text-white tracking-tight">
                  {item.label}
                </span>
                <span className="text-xs text-zinc-400 leading-relaxed">
                  {item.subtext}
                </span>
              </div>
              {/* Subtle top accent hairline */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/50 transition-all" />
            </div>
          ))}
        </div>

        {/* Industrial Partner Validation Strip */}
        <div className="mt-14 pt-10 border-t border-zinc-850">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Mitra Industri & Sertifikasi Resmi:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {PARTNERS.map((p, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-medium text-white">{p.name}</span>
                  <span className="text-zinc-500 text-[11px]">· {p.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
