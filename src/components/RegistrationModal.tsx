import React, { useState } from 'react';
import { X, CheckCircle, Send, AlertCircle, Sparkles } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolOrigin: '',
    whatsapp: '',
    concentration: 'Infrastruktur Jaringan & Routing',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi.';
    }
    if (!formData.schoolOrigin.trim()) {
      newErrors.schoolOrigin = 'Asal SMP/MTs wajib diisi.';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi.';
    } else if (!/^(\+62|62|0)[0-9]{8,13}$/.test(formData.whatsapp.replace(/[\s-]/g, ''))) {
      newErrors.whatsapp = 'Format nomor WhatsApp tidak valid (contoh: 081234567890).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate random ticket registration
    const randomTicket = `TKJ-BGR-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      schoolOrigin: '',
      whatsapp: '',
      concentration: 'Infrastruktur Jaringan & Routing',
      notes: '',
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Penerimaan Peserta Didik Baru (PPDB)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Konsultasi & Minat Jurusan TKJ
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Data Berhasil Diterima!</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
                Terima kasih <span className="text-white font-semibold">{formData.fullName}</span> ({formData.schoolOrigin}). Tim Konsultasi PPDB TKJ SMKN 1 Bagor akan segera menghubungi nomor WhatsApp Anda.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 max-w-xs mx-auto">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Nomor Registrasi Konsultasi</div>
              <div className="text-lg font-bold font-mono text-cyan-400 mt-0.5 tracking-wider">{ticketId}</div>
              <div className="text-[11px] text-zinc-400 mt-1">Simpan nomor ini saat berkunjung ke kampus SMKN 1 Bagor.</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              Selesai & Tutup
            </button>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Nama Lengkap Calon Siswa <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Contoh: Muhammad Kevin Al-Ghifari"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 ${
                  errors.fullName
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                    : 'border-zinc-700 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
              />
              {errors.fullName && (
                <div className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Asal Sekolah (SMP/MTs) <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.schoolOrigin}
                  onChange={(e) => setFormData({ ...formData, schoolOrigin: e.target.value })}
                  placeholder="Contoh: SMPN 1 Bagor"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 ${
                    errors.schoolOrigin
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                      : 'border-zinc-700 focus:border-cyan-400 focus:ring-cyan-400'
                  }`}
                />
                {errors.schoolOrigin && (
                  <div className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.schoolOrigin}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  No. WhatsApp / HP <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="08123456789"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 ${
                    errors.whatsapp
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                      : 'border-zinc-700 focus:border-cyan-400 focus:ring-cyan-400'
                  }`}
                />
                {errors.whatsapp && (
                  <div className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.whatsapp}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Peminatan Fokus Keahlian
              </label>
              <select
                value={formData.concentration}
                onChange={(e) => setFormData({ ...formData, concentration: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Infrastruktur Jaringan & Routing">Infrastruktur Jaringan & Routing (MikroTik/Cisco)</option>
                <option value="Server & Cloud Virtualization">Server & Cloud Virtualization (Linux / Proxmox)</option>
                <option value="Cyber Security & Network Defense">Cyber Security & Pertahanan Jaringan Digital</option>
                <option value="Fiber Optic & Telekomunikasi FTTH">Fiber Optic & Telekomunikasi FTTH</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Pertanyaan / Catatan Tambahan (Opsional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Ada yang ingin ditanyakan mengenai syarat pendaftaran, fasilitas lab, atau beasiswa?"
                className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer transition-all"
              >
                <span>Kirim Formulir Konsultasi</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              <div className="text-[11px] text-zinc-500 text-center mt-2">
                Data Anda aman dan hanya digunakan untuk keperluan layanan informasi PPDB SMKN 1 Bagor.
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
