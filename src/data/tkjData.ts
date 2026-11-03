import { Competency, LabFacility, CareerPath, AlumniStory, Partner } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_tkj_network_lab_1793699445271.jpg';
export const LAB_MIKROTIK_IMAGE = '/src/assets/images/lab_mikrotik_cisco_1793699447180.jpg';
export const LAB_SERVER_IMAGE = '/src/assets/images/lab_server_enterprise_1793699447163.jpg';
export const LAB_FIBER_IMAGE = '/src/assets/images/lab_fiber_optic_splicer_1793699447862.jpg';

export const STATS_DATA = [
  {
    number: "480+",
    label: "Siswa Aktif",
    subtext: "Tersebar di 12 rombel kelas X, XI, dan XII",
  },
  {
    number: "180+",
    label: "Komputer & Node Server",
    subtext: "4 Laboratorium spesialisasi ber-AC & Gigabit LAN",
  },
  {
    number: "28+",
    label: "Mitra Industri (DUDI)",
    subtext: "Kerjasama Magang, Guru Tamu & Rekrutmen Kerja",
  },
  {
    number: "94.6%",
    label: "Tingkat Keterserapan",
    subtext: "Bekerja, Wirausaha IT, & Kuliah di PTN Ternama",
  },
];

export const COMPETENCIES: Competency[] = [
  {
    id: "network-routing",
    title: "Infrastruktur Jaringan & Routing",
    category: "Network Engineering",
    shortDesc: "Penguasaan routing dinamis enterprise, VLAN switching, MikroTik RouterOS, serta penyambungan Fiber Optic FTTH.",
    fullDesc: "Siswa mempelajari perancangan topologi jaringan skala menengah hingga enterprise (Campus Network). Meliputi konfigurasi protokol routing OSPF, BGP, implementasi Quality of Service (QoS), Bandwidth Management, Hotspot Gateway, serta praktik langsung splicing fiber optic dengan Fusion Splicer dan OTDR.",
    tools: ["MikroTik RouterOS", "Cisco Packet Tracer", "GNS3 / EVE-NG", "Fusion Splicer & OTDR", "Wireshark"],
    certifications: ["MikroTik Certified Network Associate (MTCNA)", "Cisco Certified Support Technician (CCST)", "Sertifikasi BNSP Teknisi Jaringan"],
    icon: "Network",
    accentColor: "cyan",
    modules: [
      "Subnetting VLSM & CIDR IPv4 / IPv6",
      "Routing Statis & Dinamis (RIP, OSPF, BGP)",
      "Switching: VLAN, Trunking 802.1Q, Inter-VLAN Routing",
      "FTTH (Fiber to the Home): ODP, ODC, Splicing & Power Meter",
      "Wireless Point-to-Point & Mesh Distribution"
    ]
  },
  {
    id: "server-cloud",
    title: "Server & Cloud Virtualization",
    category: "System Administration",
    shortDesc: "Administrasi sistem operasi Linux enterprise, virtualisasi Proxmox VE, containerization, dan layanan web server.",
    fullDesc: "Fokus pada pengelolaan data center mandiri, instalasi dan konfigurasi server berbasis Debian dan Ubuntu Server. Siswa diajarkan membangun arsitektur cluster virtualisasi menggunakan Proxmox, deployment Docker container, pengelolaan database SQL, mail server, DNS, DHCP, serta sistem otomasi backup.",
    tools: ["Debian & Ubuntu Server", "Proxmox Virtual Environment", "Docker Engine", "Nginx & Apache", "Nextcloud / NAS"],
    certifications: ["Linux Professional Institute (LPI Essentials)", "Sertifikasi Junior System Administrator BNSP"],
    icon: "Server",
    accentColor: "purple",
    modules: [
      "Instalasi Server Headless & CLI Mastery",
      "Manajemen DNS Server (BIND9) & Web Server (LEMP Stack)",
      "Virtualisasi Bare-metal dengan Proxmox VE",
      "Containerization & Microservices dasar dengan Docker",
      "Penyimpanan Terdistribusi & Disaster Recovery Strategy"
    ]
  },
  {
    id: "cybersecurity-defense",
    title: "Cyber Security & Network Defense",
    category: "Information Security",
    shortDesc: "Perlindungan aset digital, hardening server, manajemen firewall stateful, audit keamanan, dan analisis lalu lintas data.",
    fullDesc: "Menyiapkan siswa menghadapi ancaman siber modern. Meliputi implementasi firewall berlapis (Layer 7 filtering), pencegahan serangan DDoS, brute-force mitigasi dengan Fail2ban, pemindaian celah keamanan (Nmap, OpenVAS), deteksi anomali paket dengan Snort/Suricata, dan penerapan etika keamanan siber.",
    tools: ["Kali Linux", "Wireshark Packet Analyzer", "Nmap & Nikto", "Suricata IDS/IPS", "Fail2ban & iptables"],
    certifications: ["Cisco Certified CyberOps Associate", "Fortinet Certified Fundamentals (FCF)"],
    icon: "ShieldAlert",
    accentColor: "blue",
    modules: [
      "Dasar Analisis Malware & Threat Landscape",
      "Firewall Filtering: Mangle, NAT, Raw Tables RouterOS",
      "Penetration Testing Fundamentals & Vulnerability Assessment",
      "VPN Terenkripsi: WireGuard, OpenVPN, IPsec",
      "Incident Response & Digital Forensics Dasar"
    ]
  }
];

export const LAB_FACILITIES: LabFacility[] = [
  {
    id: "lab-jaringan",
    name: "Lab Cisco & MikroTik Academy",
    badge: "Laboratorium Utama",
    image: LAB_MIKROTIK_IMAGE,
    description: "Ruang praktik khusus konfigurasi perangkat routing dan switching enterprise lengkap dengan server rack mount 19 inch, patch panel terstruktur, dan workstation dual monitor.",
    capacity: "36 Siswa per Sesi",
    specs: {
      processor: "Intel Core i5 Generasi ke-12",
      ram: "16 GB DDR4 Dual Channel",
      network: "Gigabit Ethernet Cat6 & WiFi 6 Uplink",
      keyEquipment: [
        "24x RouterBoard MikroTik RB951 & RB750Gr3",
        "8x Cisco Catalyst 2960 Switch 24-Port",
        "4x Enterprise Server Rack 42U dengan UPS Online",
        "Fluke Networks Cable Analyzer & Crimping Kit"
      ]
    },
    features: [
      "Topologi jaringan live untuk simulasi ujian MikroTik MTCNA",
      "Akses simulator EVE-NG dan Cisco Packet Tracer multi-node",
      "Workstation ergonomis dengan pendingin ruangan full time"
    ]
  },
  {
    id: "lab-server",
    name: "Lab Server & Cloud Data Center",
    badge: "Data Center Mini",
    image: LAB_SERVER_IMAGE,
    description: "Fasilitas data center mini sekolah untuk simulasi hosting, arsitektur server terdistribusi, private cloud, dan manajemen sistem operasi jaringan terbuka.",
    capacity: "32 Siswa per Sesi",
    specs: {
      processor: "Dual Intel Xeon Silver & AMD EPYC Nodes",
      ram: "64 GB ECC Registered per Node Server",
      network: "10 Gbps SFP+ Fiber Interconnect",
      keyEquipment: [
        "Rack Mount Dell PowerEdge & HP ProLiant Servers",
        "Synology Enterprise NAS Storage Array 24TB",
        "Proxmox VE Virtual Cluster dengan High Availability",
        "Cisco ASA 5506-X Hardware Security Appliance"
      ]
    },
    features: [
      "Lingkungan pengujian private cloud untuk aplikasi ujian sekolah",
      "Simulasi real-world server down dan disaster recovery",
      "Akses remote console via IPMI / iDRAC untuk pembelajaran jarak jauh"
    ]
  },
  {
    id: "lab-fiber",
    name: "Lab Fiber Optic & Hardware Assembly",
    badge: "Workshop Praktik",
    image: LAB_FIBER_IMAGE,
    description: "Workshop hardware dan telekomunikasi optik. Tempat siswa mempraktikkan penyambungan kabel serat optik presisi mikro, kalibrasi daya laser, dan reparasi sistem komputer.",
    capacity: "36 Siswa per Sesi",
    specs: {
      processor: "AMD Ryzen 5 Pro Workstations",
      ram: "16 GB DDR4",
      network: "Hybrid Fiber-Copper Local Bus",
      keyEquipment: [
        "4x Fujikura & Sumitomo Optical Fusion Splicer",
        "2x Optical Time-Domain Reflectometer (OTDR)",
        "Optical Power Meter (OPM) & Visual Fault Locator (VFL)",
        "Stasiun Solder Uap & Alat Diagnostik Motherboard Digital"
      ]
    },
    features: [
      "Simulasi pemasangan instalasi FTTH dari ODC ke ODP rumah tangga",
      "Praktik perakitan PC gaming, workstation AI, dan troubleshooting POST",
      "Standar K3 keselamatan kerja laboratorium telekomunikasi lengkap"
    ]
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: "network-eng",
    role: "Network Engineer / Administrator",
    salaryRange: "Rp 5.000.000 - Rp 14.000.000",
    growth: "+22% Kebutuhan Industri",
    description: "Merancang, mengonfigurasi, dan memelihara infrastruktur jaringan kabel maupun nirkabel di perusahaan, kantor cabang, dan instansi pemerintah.",
    skills: ["Routing OSPF/BGP", "MikroTik & Cisco", "VLAN Management", "Troubleshooting Jaringan"],
    companies: ["Internet Service Provider", "Perusahaan Telekomunikasi", "Instansi Pemerintah", "BUMN"]
  },
  {
    id: "sysadmin-cloud",
    role: "System & Cloud Administrator",
    salaryRange: "Rp 6.000.000 - Rp 16.000.000",
    growth: "+27% Kebutuhan Industri",
    description: "Bertanggung jawab atas ketersediaan server, sistem operasi Linux/Windows, virtualisasi, dan penyimpanan cloud agar bisnis berjalan 24/7.",
    skills: ["Linux Server CLI", "Docker & Proxmox", "Database Backup", "Automasi Shell Bash"],
    companies: ["Software House", "Fintech & E-Commerce", "Data Center Provider", "Perbankan"]
  },
  {
    id: "cyber-analyst",
    role: "Cyber Security Analyst (Junior SOC)",
    salaryRange: "Rp 7.000.000 - Rp 18.000.000",
    growth: "+33% Kebutuhan Tertinggi",
    description: "Memonitor ancaman siber, mendeteksi insiden anomali, mengonfigurasi sistem firewall pertahanan, dan memastikan integritas data terlindungi.",
    skills: ["Log Analysis", "IDS/IPS Suricata", "Firewall Hardening", "Penetration Testing"],
    companies: ["Security Operations Center (SOC)", "Konsultan Keamanan IT", "Korporasi Nasional"]
  },
  {
    id: "fiber-specialist",
    role: "Fiber Optic & ISP Field Specialist",
    salaryRange: "Rp 4.500.000 - Rp 10.000.000",
    growth: "+19% Ekspansi Infrastruktur",
    description: "Spesialis instalasi, penarikan kabel transmisi cepat, penyambungan core fiber optic (splicing), serta pemeliharaan jaringan FTTH.",
    skills: ["Fusion Splicing", "OTDR Testing", "Optical Budgeting", "K3 Telekomunikasi"],
    companies: ["Telkom Akses", "Biznet Networks", "MyRepublic", "Lintasarta"]
  }
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    id: "alumni-1",
    name: "Rizky Aditya Pratama",
    year: "Lulusan 2022",
    currentRole: "NOC Engineer",
    company: "PT Biznet Networks Surabaya",
    quote: "Berkat kurikulum MikroTik dan praktik kabel Fiber Optic di SMKN 1 Bagor, saya langsung lolos uji kompetensi di Biznet bahkan sebelum wisuda.",
    certification: "MikroTik MTCNA & MTCRE"
  },
  {
    id: "alumni-2",
    name: "Dwi Kurniawati",
    year: "Lulusan 2021",
    currentRole: "Cloud Infrastructure Junior",
    company: "PT Telkom Indonesia",
    quote: "Lab Server di TKJ Bagor sangat dekat dengan realita dunia kerja. Saat masuk industri, saya sudah terbiasa dengan terminal Linux dan virtualisasi.",
    certification: "LPI Linux Essentials"
  },
  {
    id: "alumni-3",
    name: "Bagus Setiawan",
    year: "Lulusan 2023",
    currentRole: "Network Security Staff & Mahasiswa PENS",
    company: "PT Cyber Data Solusindo",
    quote: "Guru-guru TKJ membimbing kami dengan sabar. Dasar firewall dan network defense membuat saya percaya diri bekerja sambil kuliah teknik informatika.",
    certification: "Cisco CyberOps Associate"
  }
];

export const PARTNERS: Partner[] = [
  { name: "Cisco Networking Academy", category: "Global Academy Partner", tier: "Tier 1" },
  { name: "MikroTik Academy", category: "Official Training Partner", tier: "Tier 1" },
  { name: "PT Telkom Indonesia", category: "DUDI Telekomunikasi", tier: "Industrial Partner" },
  { name: "PT Biznet Gio Nusantara", category: "Cloud & ISP Partner", tier: "Industrial Partner" },
  { name: "Citraweb Solusi Teknologi", category: "Distributor & Sertifikasi", tier: "Official Center" },
  { name: "LSP-P1 BNSP", category: "Lembaga Sertifikasi Profesi", tier: "National Accreditation" },
];

export const FAQS = [
  {
    question: "Apa syarat utama masuk Jurusan TKJ di SMK Negeri 1 Bagor?",
    answer: "Lulusan SMP/MTs sederajat, memiliki minat tinggi di bidang teknologi komputer dan jaringan, tidak buta warna (karena ada praktikum pengkodean warna kabel UTP dan Fiber Optic), serta bersemangat belajar hal baru."
  },
  {
    question: "Apakah siswa wajib membawa laptop sendiri sejak awal kelas 10?",
    answer: "Tidak wajib. Sekolah menyediakan 4 laboratorium komputer lengkap dengan spesifikasi modern untuk seluruh jam praktikum. Namun, memiliki laptop pribadi di rumah sangat disarankan untuk latihan mandiri dan eksplorasi simulator."
  },
  {
    question: "Sertifikasi industri apa saja yang bisa didapatkan siswa TKJ?",
    answer: "Siswa berkesempatan mengikuti sertifikasi resmi berstandar internasional dan nasional seperti MikroTik Certified Network Associate (MTCNA), Cisco Certified Support Technician / CyberOps, serta sertifikasi BNSP melalui LSP-P1 SMKN 1 Bagor."
  },
  {
    question: "Apakah lulusan TKJ bisa melanjutkan kuliah ke Perguruan Tinggi Negeri?",
    answer: "Sangat bisa! Lulusan TKJ SMKN 1 Bagor banyak yang diterima di PTN favorit seperti ITS, PENS, UNEJ, Brawijaya, dan Unesa melalui jalur SNBP, SNBT, maupun beasiswa prestasi KIP Kuliah."
  }
];
