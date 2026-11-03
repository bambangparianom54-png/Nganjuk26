import { SubnetResult } from '../types';

export function calculateSubnet(ipStr: string, cidr: number): SubnetResult | null {
  const parts = ipStr.trim().split('.');
  if (parts.length !== 4) return null;

  const octets = parts.map(p => parseInt(p, 10));
  if (octets.some(o => isNaN(o) || o < 0 || o > 255)) return null;
  if (cidr < 1 || cidr > 32) return null;

  const ipNum = (octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3];
  
  // Calculate mask
  const maskNum = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
  const netNum = (ipNum & maskNum) >>> 0;
  const broadcastNum = (netNum | (~maskNum >>> 0)) >>> 0;

  const numToIp = (num: number): string => {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255
    ].join('.');
  };

  const netmask = numToIp(maskNum);
  const networkAddress = numToIp(netNum);
  const broadcastAddress = numToIp(broadcastNum);

  let firstUsable = '';
  let lastUsable = '';
  let usableHosts = 0;
  const totalHosts = Math.pow(2, 32 - cidr);

  if (cidr === 31) {
    firstUsable = networkAddress;
    lastUsable = broadcastAddress;
    usableHosts = 2; // Point-to-point RFC 3021
  } else if (cidr === 32) {
    firstUsable = networkAddress;
    lastUsable = networkAddress;
    usableHosts = 1;
  } else {
    firstUsable = numToIp(netNum + 1);
    lastUsable = numToIp(broadcastNum - 1);
    usableHosts = Math.max(0, totalHosts - 2);
  }

  // Determine Class
  let ipClass = 'Class C';
  const firstOctet = octets[0];
  if (firstOctet >= 1 && firstOctet <= 126) ipClass = 'Class A';
  else if (firstOctet >= 128 && firstOctet <= 191) ipClass = 'Class B';
  else if (firstOctet >= 192 && firstOctet <= 223) ipClass = 'Class C';
  else if (firstOctet >= 224 && firstOctet <= 239) ipClass = 'Class D (Multicast)';
  else ipClass = 'Class E (Experimental)';

  // Binary mask
  const binaryMask = [
    ((maskNum >>> 24) & 255).toString(2).padStart(8, '0'),
    ((maskNum >>> 16) & 255).toString(2).padStart(8, '0'),
    ((maskNum >>> 8) & 255).toString(2).padStart(8, '0'),
    (maskNum & 255).toString(2).padStart(8, '0')
  ].join('.');

  return {
    ip: ipStr.trim(),
    cidr,
    netmask,
    networkAddress,
    broadcastAddress,
    firstUsableHost: firstUsable,
    lastUsableHost: lastUsable,
    totalHosts,
    usableHosts,
    ipClass,
    binaryMask
  };
}

export function estimateTransferTime(fileSizeGB: number, speedMbps: number): {
  seconds: number;
  formatted: string;
} {
  if (fileSizeGB <= 0 || speedMbps <= 0) {
    return { seconds: 0, formatted: '0 detik' };
  }
  // 1 GB = 8000 Megabits (or 8192)
  const totalMegabits = fileSizeGB * 8000;
  const seconds = totalMegabits / speedMbps;

  if (seconds < 60) {
    return { seconds, formatted: `${seconds.toFixed(1)} detik` };
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSec = Math.round(seconds % 60);
  if (minutes < 60) {
    return { seconds, formatted: `${minutes} m ${remainingSec} dtk` };
  }
  const hours = Math.floor(minutes / 60);
  const remainingMin = minutes % 60;
  return { seconds, formatted: `${hours} jam ${remainingMin} m` };
}
