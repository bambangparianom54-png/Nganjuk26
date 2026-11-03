import React, { useState } from 'react';
import { calculateSubnet, estimateTransferTime } from '../utils/subnetCalculator';
import { Terminal, Network, HardDrive, Play, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';

export const InteractiveTechHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'subnet' | 'bandwidth' | 'terminal'>('subnet');

  // Subnet state
  const [inputIp, setInputIp] = useState('192.168.10.15');
  const [cidr, setCidr] = useState(24);
  const subnetResult = calculateSubnet(inputIp, cidr);

  // Bandwidth state
  const [fileSizeGB, setFileSizeGB] = useState(4.5);
  const [speedMbps, setSpeedMbps] = useState(100);
  const transferResult = estimateTransferTime(fileSizeGB, speedMbps);

  // Terminal state
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[admin@MikroTik-SMKN1Bagor] > system identity print",
    "name: SMKN1Bagor-CoreRouter",
    "[admin@MikroTik-SMKN1Bagor] > interface ethernet print",
    "#    NAME       MTU   MAC-ADDRESS       STATUS",
    "0 R  ether1-WAN 1500  48:8F:5A:21:9B:01 1000Mbps-full",
    "1 R  ether2-LAN 1500  48:8F:5A:21:9B:02 1000Mbps-full",
    "2 R  sfp-plus1  1500  48:8F:5A:21:9B:03 10Gbps-fiber",
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  const runTerminalCommand = (cmd: string) => {
    if (isSimulating) return;
    setIsSimulating(true);

    const newLogs = [...terminalLogs, `[admin@MikroTik-SMKN1Bagor] > ${cmd}`];
    setTerminalLogs(newLogs);

    setTimeout(() => {
      let output: string[] = [];
      if (cmd.includes('ping gateway')) {
        output = [
          "HOST: 192.168.10.1 (Gateway SMKN 1 Bagor)",
          "SEQ: 1  SIZE: 56  TTL: 64  TIME: 0.42 ms",
          "SEQ: 2  SIZE: 56  TTL: 64  TIME: 0.38 ms",
          "SEQ: 3  SIZE: 56  TTL: 64  TIME: 0.45 ms",
          "3 packets transmitted, 3 received, 0% packet loss, min/avg/max = 0.38/0.41/0.45 ms"
        ];
      } else if (cmd.includes('ping 8.8.8.8')) {
        output = [
          "HOST: 8.8.8.8 (Google Public DNS via Dedicated Uplink)",
          "SEQ: 1  SIZE: 56  TTL: 118  TIME: 12.4 ms",
          "SEQ: 2  SIZE: 56  TTL: 118  TIME: 11.8 ms",
          "SEQ: 3  SIZE: 56  TTL: 118  TIME: 12.1 ms",
          "3 packets transmitted, 3 received, 0% packet loss. Uplink Jaringan Stabil."
        ];
      } else if (cmd.includes('resource print')) {
        output = [
          "uptime: 48w3d14h22m",
          "version: 7.15 (RouterOS Enterprise)",
          "cpu: Tilera Tile-Gx36 36-Core @ 1.2GHz",
          "cpu-load: 8%",
          "free-memory: 3824.2 MiB",
          "total-memory: 4096.0 MiB",
          "free-hdd-space: 48.2 GiB"
        ];
      } else if (cmd.includes('traceroute')) {
        output = [
          "1  192.168.10.1 (Router Core Bagor)   0.4 ms",
          "2  10.200.1.254 (Distribusi Nganjuk)  2.1 ms",
          "3  180.250.12.1 (Telkom Backbone Jatim) 6.4 ms",
          "4  8.8.8.8 (dns.google)              11.9 ms"
        ];
      } else {
        output = ["Command executed successfully."];
      }

      setTerminalLogs(prev => [...prev, ...output]);
      setIsSimulating(false);
    }, 600);
  };

  const clearTerminal = () => {
    setTerminalLogs(["[admin@MikroTik-SMKN1Bagor] > Terminal session cleared."]);
  };

  return (
    <section id="tools" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <span>Interaktif & Praktik Nyata</span>
            <span className="text-zinc-600">/</span>
            <span>TKJ Tech Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Eksplorasi Perangkat Lunak & Jaringan
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Rasakan langsung logika dan alat kerja yang dipelajari siswa TKJ SMKN 1 Bagor setiap hari melalui simulasi interaktif di bawah ini.
          </p>
        </div>

        {/* Tab Controls (Segmented buttons) */}
        <div className="flex items-center gap-2 p-1.5 bg-zinc-900/80 border border-zinc-800 rounded-xl max-w-fit mb-8">
          <button
            onClick={() => setActiveTab('subnet')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'subnet'
                ? 'bg-cyan-400 text-zinc-950 shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Kalkulator Subnetting & CIDR</span>
          </button>

          <button
            onClick={() => setActiveTab('bandwidth')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'bandwidth'
                ? 'bg-cyan-400 text-zinc-950 shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>Estimator Bandwidth FTTH</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-cyan-400 text-zinc-950 shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Simulator Terminal MikroTik</span>
          </button>
        </div>

        {/* TAB 1: Subnetting Calculator */}
        {activeTab === 'subnet' && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Form Input */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-white">Hitung Alokasi Subnet IPv4</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Digunakan teknisi jaringan untuk menentukan network ID, broadcast, dan range host valid.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      IP Address Host / Gateway
                    </label>
                    <input
                      type="text"
                      value={inputIp}
                      onChange={(e) => setInputIp(e.target.value)}
                      placeholder="e.g. 192.168.10.15"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 font-mono text-sm text-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-medium text-zinc-300">Prefiks CIDR: /{cidr}</span>
                      <span className="font-mono text-cyan-400">
                        {subnetResult ? subnetResult.netmask : ''}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="8"
                      max="30"
                      value={cidr}
                      onChange={(e) => setCidr(parseInt(e.target.value, 10))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                      <span>/8 (Class A)</span>
                      <span>/16 (Class B)</span>
                      <span>/24 (Class C)</span>
                      <span>/30 (P2P)</span>
                    </div>
                  </div>

                  {/* Preset quick buttons */}
                  <div>
                    <span className="text-[11px] text-zinc-400 block mb-1.5">Preset Standar Praktikum:</span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'Lab Standar (/24)', ip: '192.168.10.1', c: 24 },
                        { label: 'Subnet Kecil (/27)', ip: '192.168.1.1', c: 27 },
                        { label: 'Hotspot /26', ip: '10.20.0.1', c: 26 },
                        { label: 'Point-to-Point (/30)', ip: '172.16.1.1', c: 30 }
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setInputIp(preset.ip);
                            setCidr(preset.c);
                          }}
                          className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/50 cursor-pointer"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculated Results Display */}
              <div className="lg:col-span-7">
                {subnetResult ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-[11px] text-zinc-400 block">Network Address (ID)</span>
                        <span className="text-sm font-bold font-mono text-cyan-400 tabular-nums">
                          {subnetResult.networkAddress}
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-[11px] text-zinc-400 block">Broadcast Address</span>
                        <span className="text-sm font-bold font-mono text-indigo-400 tabular-nums">
                          {subnetResult.broadcastAddress}
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-[11px] text-zinc-400 block">Subnet Mask</span>
                        <span className="text-sm font-bold font-mono text-white tabular-nums">
                          {subnetResult.netmask}
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-[11px] text-zinc-400 block">Host Pertama Valid</span>
                        <span className="text-sm font-bold font-mono text-emerald-400 tabular-nums">
                          {subnetResult.firstUsableHost}
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-[11px] text-zinc-400 block">Host Terakhir Valid</span>
                        <span className="text-sm font-bold font-mono text-emerald-400 tabular-nums">
                          {subnetResult.lastUsableHost}
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span className="text-[11px] text-zinc-400 block">Jumlah Usable Hosts</span>
                        <span className="text-sm font-bold font-mono text-cyan-300 tabular-nums">
                          {subnetResult.usableHosts.toLocaleString()} Host
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>Klasifikasi Kelas:</span>
                        <span className="text-white font-semibold">{subnetResult.ipClass}</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>Mask Biner (32-bit):</span>
                        <span className="text-cyan-400 text-[11px]">{subnetResult.binaryMask}</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>Rentang Alamat Penuh:</span>
                        <span className="text-zinc-200">{subnetResult.firstUsableHost} - {subnetResult.lastUsableHost}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-rose-400 bg-rose-950/20 border border-rose-900/50 rounded-xl text-sm">
                    Format IP Address tidak valid. Harap masukkan format IPv4 standar (contoh: 192.168.1.1).
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Bandwidth Transfer Estimator */}
        {activeTab === 'bandwidth' && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-white">Simulasi Kecepatan Transmisi Data</h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Pelajari bagaimana bandwidth transmisi fiber optik dan LAN mempengaruhi waktu transfer data ISO OS dan backup server.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Ukuran File / Backup Data (Gigabytes)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min="0.1"
                        step="0.5"
                        value={fileSizeGB}
                        onChange={(e) => setFileSizeGB(parseFloat(e.target.value) || 0)}
                        className="w-32 px-4 py-2 rounded-lg bg-zinc-950 border border-zinc-700 font-mono text-sm text-cyan-300 focus:outline-none"
                      />
                      <span className="text-xs text-zinc-400">GB (contoh: Ubuntu Server ISO ~ 4.5 GB)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Pilihan Kecepatan Tautan (Throughput):
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { label: 'WiFi Sekolah', speed: 50 },
                        { label: 'LAN 100 Mbps', speed: 100 },
                        { label: 'Gigabit LAN (1 Gbps)', speed: 1000 },
                        { label: 'Fiber SFP+ (10 Gbps)', speed: 10000 },
                      ].map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setSpeedMbps(item.speed)}
                          className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                            speedMbps === item.speed
                              ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                          }`}
                        >
                          <div className="text-xs font-bold">{item.label}</div>
                          <div className="text-[11px] font-mono text-zinc-500">{item.speed} Mbps</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Preview */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-zinc-950 border border-zinc-800 text-center space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Estimasi Durasi Transfer:
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400 tabular-nums">
                  {transferResult.formatted}
                </div>
                <div className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Dengan tautan <span className="text-white font-medium">{speedMbps} Mbps</span>, mentransfer data berukuran <span className="text-white font-medium">{fileSizeGB} GB</span> selesai dalam kisaran waktu di atas tanpa bottleneck disk I/O.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Terminal Ping & RouterOS Simulator */}
        {activeTab === 'terminal' && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
            {/* Terminal Top Window Bar */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-zinc-400 ml-2">
                  admin@MikroTik-SMKN1Bagor (Telnet / SSH Console)
                </span>
              </div>
              <button
                onClick={clearTerminal}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Bersihkan</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-zinc-300 min-h-[260px] max-h-[360px] overflow-y-auto space-y-1 bg-zinc-950">
              {terminalLogs.map((log, idx) => {
                const isCommand = log.startsWith('[admin@');
                return (
                  <div
                    key={idx}
                    className={`${
                      isCommand
                        ? 'text-cyan-400 font-semibold'
                        : log.includes('error') || log.includes('fail')
                        ? 'text-rose-400'
                        : 'text-zinc-300'
                    }`}
                  >
                    {log}
                  </div>
                );
              })}
              {isSimulating && (
                <div className="text-cyan-300 animate-pulse flex items-center gap-1.5 pt-1">
                  <span>Executing instruction...</span>
                </div>
              )}
            </div>

            {/* Quick Action Commands */}
            <div className="p-4 bg-zinc-900/80 border-t border-zinc-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-2">Jalankan Perintah:</span>
              <button
                disabled={isSimulating}
                onClick={() => runTerminalCommand('ping gateway 192.168.10.1')}
                className="px-3 py-1.5 rounded bg-zinc-950 border border-zinc-700 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>ping gateway</span>
              </button>

              <button
                disabled={isSimulating}
                onClick={() => runTerminalCommand('ping 8.8.8.8')}
                className="px-3 py-1.5 rounded bg-zinc-950 border border-zinc-700 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>ping 8.8.8.8 (Google DNS)</span>
              </button>

              <button
                disabled={isSimulating}
                onClick={() => runTerminalCommand('system resource print')}
                className="px-3 py-1.5 rounded bg-zinc-950 border border-zinc-700 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>system resource print</span>
              </button>

              <button
                disabled={isSimulating}
                onClick={() => runTerminalCommand('/tool traceroute 8.8.8.8')}
                className="px-3 py-1.5 rounded bg-zinc-950 border border-zinc-700 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3 h-3" />
                <span>tool traceroute</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
