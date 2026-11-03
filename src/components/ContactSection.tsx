import React, { useState } from 'react';
import { FAQS } from '../data/tkjData';
import { MapPin, Phone, Mail, Clock, ChevronDown, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [quickMessage, setQuickMessage] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.name || !quickMessage.message) return;
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Quick Message */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
                <span>Pusat Informasi & Sekretariat</span>
                <span className="text-zinc-600">/</span>
                <span>Hubungi Kami</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
                Kunjungi Kampus TKJ SMKN 1 Bagor
              </h2>
              <p className="mt-3 text-base text-zinc-400 leading-relaxed">
                Pintu kami selalu terbuka bagi calon siswa, orang tua/wali, dan perwakilan industri yang ingin berkunjung dan melihat langsung sarana laboratorium kami.
              </p>
            </div>

            {/* School Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase">Lokasi Kampus</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Jl. Raya Bagor - Nganjuk No. 1, Bagor, Kab. Nganjuk, Jawa Timur 64461
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Akses mudah di jalan nasional, dekat dengan stasiun dan terminal Nganjuk.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 uppercase">Hotline PPDB</h4>
                    <p className="text-sm font-semibold text-white mt-0.5 font-mono">
                      (0358) 321852
                    </p>
                    <p className="text-xs text-zinc-400 font-mono">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 uppercase">Email Resmi</h4>
                    <p className="text-sm font-semibold text-white mt-0.5 truncate font-mono">
                      tkj@smkn1bagor.sch.id
                    </p>
                    <p className="text-xs text-zinc-400 font-mono">info@smkn1bagor.sch.id</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <span className="font-semibold text-white">Jam Layanan Kampus:</span> Senin – Jumat: 07.30 – 15.30 WIB (Sabtu - Minggu Libur)
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Kirim Pesan Langsung ke Kaprodi TKJ</span>
              </h3>
              {submitted ? (
                <div className="p-4 rounded-lg bg-cyan-950/40 border border-cyan-800 text-xs text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pesan Anda telah tersampaikan ke sekretariat jurusan TKJ. Kami akan membalas segera.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={quickMessage.name}
                      onChange={(e) => setQuickMessage({ ...quickMessage, name: e.target.value })}
                      className="px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Alamat Email / WhatsApp"
                      value={quickMessage.email}
                      onChange={(e) => setQuickMessage({ ...quickMessage, email: e.target.value })}
                      className="px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Tuliskan pertanyaan atau kebutuhan kemitraan industri..."
                    value={quickMessage.message}
                    onChange={(e) => setQuickMessage({ ...quickMessage, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white border border-zinc-700 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Kirim Pesan</span>
                    <Send className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                Frequently Asked Questions
              </span>
              <h3 className="text-2xl font-bold text-white">
                Pertanyaan yang Sering Diajukan
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Jawaban seputar proses pendaftaran, pembelajaran praktikum, dan prospek masa depan siswa TKJ.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer hover:bg-zinc-850/50 transition-colors"
                    >
                      <span className="text-sm font-bold text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 bg-zinc-950/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
