export interface Competency {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  certifications: string[];
  icon: string;
  accentColor: 'cyan' | 'purple' | 'blue';
  modules: string[];
}

export interface LabFacility {
  id: string;
  name: string;
  badge: string;
  image: string;
  description: string;
  capacity: string;
  specs: {
    processor: string;
    ram: string;
    network: string;
    keyEquipment: string[];
  };
  features: string[];
}

export interface CareerPath {
  id: string;
  role: string;
  salaryRange: string;
  growth: string;
  description: string;
  skills: string[];
  companies: string[];
}

export interface AlumniStory {
  id: string;
  name: string;
  year: string;
  currentRole: string;
  company: string;
  quote: string;
  certification: string;
}

export interface Partner {
  name: string;
  category: string;
  tier: string;
}

export interface SubnetResult {
  ip: string;
  cidr: number;
  netmask: string;
  networkAddress: string;
  broadcastAddress: string;
  firstUsableHost: string;
  lastUsableHost: string;
  totalHosts: number;
  usableHosts: number;
  ipClass: string;
  binaryMask: string;
}
