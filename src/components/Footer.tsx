import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-850 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-850 text-left">
          {/* Col 1: Brand Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-zinc-950 rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-black text-cyan-400 text-xs">TKJ</span>
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                TKJ SMKN 1 Bagor
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Program Keahlian Teknik Komputer dan Jaringan SMK Negeri 1 Bagor. Berkomitmen mencetak lulusan berkarakter unggul, menguasai teknologi jaringan mutakhir, dan berdaya saing global.
            </p>
            <div className="text-[11px] font-mono text-zinc-500">
              NPSN: 20538332 · Akreditasi A (Unggul) · Nganjuk, Jawa Timur
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="hover:text-cyan-400 transition-colors">
                  Beranda Profil
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-cyan-400 transition-colors">
                  Tiga Pilar Kompetensi
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-cyan-400 transition-colors">
                  Fasilitas Laboratorium
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-cyan-400 transition-colors">
                  TKJ Tech Sandbox
                </a>
              </li>
              <li>
                <a href="#karir" className="hover:text-cyan-400 transition-colors">
                  Prospek Karir & Alumni
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-cyan-400 transition-colors">
                  Sekretariat & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Media Sosial & Ekosistem */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Kanal Komunikasi & Sosial
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ikuti dokumentasi praktikum, karya siswa, dan informasi terkini seputar kegiatan jurusan kami:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-400 hover:text-white transition-colors"
              >
                Instagram: @tkj_smkn1bagor
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-400 hover:text-white transition-colors"
              >
                YouTube Resmi
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-400 hover:text-white transition-colors"
              >
                TikTok Kejuruan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} SMK Negeri 1 Bagor · Jurusan Teknik Komputer dan Jaringan. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
