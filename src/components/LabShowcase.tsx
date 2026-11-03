import React, { useState } from 'react';
import { LAB_FACILITIES } from '../data/tkjData';
import { LabFacility } from '../types';
import { Monitor, Cpu, Network, CheckCircle, Maximize2, X, Sparkles } from 'lucide-react';

export const LabShowcase: React.FC = () => {
  const [activeLabId, setActiveLabId] = useState<string>(LAB_FACILITIES[0].id);
  const [modalLab, setModalLab] = useState<LabFacility | null>(null);

  const activeLab = LAB_FACILITIES.find((l) => l.id === activeLabId) || LAB_FACILITIES[0];

  return (
    <section id="lab" className="relative py-24 bg-zinc-950/70 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
              <span>Sarana & Prasarana Modern</span>
              <span className="text-zinc-600">/</span>
              <span>Standar Enterprise IT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Fasilitas Laboratorium Unggulan
            </h2>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Dilengkapi perangkat fisik bersertifikasi industri, rack server enterprise, dan workstation berspesifikasi tinggi untuk mendukung praktikum intensif setiap hari.
            </p>
          </div>

          {/* Interactive Lab Tabs / Segmented Switcher (Functional buttons per design skill) */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl">
            {LAB_FACILITIES.map((lab) => {
              const isActive = lab.id === activeLabId;
              return (
                <button
                  key={lab.id}
                  onClick={() => setActiveLabId(lab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-cyan-400 text-zinc-950 shadow-md shadow-cyan-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {lab.name.split('&')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Lab Showcase Banner (Interactive 2-column layout) */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Showcase with Zoom and Inspector */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <img
                  src={activeLab.image}
                  alt={activeLab.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-zinc-950/85 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300">
                  {activeLab.badge}
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setModalLab(activeLab)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-lg bg-zinc-900/90 hover:bg-cyan-400 text-zinc-200 hover:text-zinc-950 border border-zinc-700 hover:border-cyan-400 transition-colors cursor-pointer"
                  title="Perbesar Tampilan Lab"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hardware & Spec Details */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Kapasitas: {activeLab.capacity}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeLab.name}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {activeLab.description}
                </p>
              </div>

              {/* Hardware Specifications Grid */}
              <div className="grid grid-cols-1 gap-2.5 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="flex items-center gap-3 text-xs">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-zinc-400">Komputasi:</span>
                  <span className="text-zinc-200 font-mono font-medium truncate">{activeLab.specs.processor}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Monitor className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-zinc-400">Memori RAM:</span>
                  <span className="text-zinc-200 font-mono font-medium">{activeLab.specs.ram}</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Network className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-zinc-400">Jaringan:</span>
                  <span className="text-zinc-200 font-mono font-medium truncate">{activeLab.specs.network}</span>
                </div>
              </div>

              {/* Equipment Highlight List */}
              <div>
                <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wide mb-2.5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inventaris Peralatan Kunci:</span>
                </div>
                <div className="space-y-2">
                  {activeLab.specs.keyEquipment.map((eq, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setModalLab(activeLab)}
                className="w-full py-3 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat Foto Resolusi Tinggi & Detail Standar Lab</span>
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick 3-Lab Grid Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {LAB_FACILITIES.map((lab) => {
            const isCurrent = lab.id === activeLabId;
            return (
              <div
                key={lab.id}
                onClick={() => setActiveLabId(lab.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                  isCurrent
                    ? 'bg-zinc-900 border-cyan-500/60 shadow-lg shadow-cyan-950/20'
                    : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                }`}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-xs font-mono text-cyan-400">{lab.badge}</div>
                  <div className="text-sm font-bold text-white truncate">{lab.name}</div>
                  <div className="text-xs text-zinc-500 truncate">{lab.capacity}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lab Fullscreen Detail Modal */}
      {modalLab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {modalLab.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {modalLab.name}
                </h3>
              </div>
              <button
                onClick={() => setModalLab(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src={modalLab.image}
                  alt={modalLab.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">Tentang Laboratorium</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {modalLab.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <div className="text-xs text-zinc-400">Processor / CPU</div>
                  <div className="text-sm font-bold text-white mt-1">{modalLab.specs.processor}</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <div className="text-xs text-zinc-400">RAM Memory</div>
                  <div className="text-sm font-bold text-white mt-1">{modalLab.specs.ram}</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <div className="text-xs text-zinc-400">Arsitektur LAN</div>
                  <div className="text-sm font-bold text-white mt-1">{modalLab.specs.network}</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2">Fitur Unggulan Praktik:</h4>
                <div className="space-y-2">
                  {modalLab.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-zinc-800 flex justify-end bg-zinc-950">
              <button
                onClick={() => setModalLab(null)}
                className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg cursor-pointer"
              >
                Tutup Tampilan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
