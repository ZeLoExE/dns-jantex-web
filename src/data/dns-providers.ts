export type Tag = 'gaming' | 'adblock' | 'family' | 'privacy' | 'security' | 'anti-sanction'

export interface DNSProvider {
  id: string
  name: string
  primary: string
  secondary: string
  tags: Tag[]
}

export const dnsProviders: DNSProvider[] = [
  // Major Providers
  { id: 'google', name: 'Google DNS', primary: '8.8.8.8', secondary: '8.8.4.4', tags: ['gaming'] },
  { id: 'cloudflare', name: 'Cloudflare DNS', primary: '1.1.1.1', secondary: '1.0.0.1', tags: ['privacy', 'gaming'] },
  { id: 'cloudflare-family', name: 'Cloudflare Family', primary: '1.1.1.3', secondary: '1.0.0.3', tags: ['family'] },
  { id: 'cloudflare-malware', name: 'Cloudflare Malware', primary: '1.1.1.2', secondary: '1.0.0.2', tags: ['security'] },
  { id: 'quad9', name: 'Quad9', primary: '9.9.9.9', secondary: '149.112.112.112', tags: ['security', 'privacy'] },
  { id: 'adguard', name: 'AdGuard DNS', primary: '94.140.14.14', secondary: '94.140.15.15', tags: ['adblock'] },
  { id: 'opendns', name: 'OpenDNS', primary: '208.67.222.222', secondary: '208.67.220.220', tags: ['security'] },
  { id: 'opendns-family', name: 'OpenDNS Family', primary: '208.67.222.123', secondary: '208.67.220.123', tags: ['family'] },
  { id: 'norton', name: 'Norton ConnectSafe', primary: '199.85.126.10', secondary: '199.85.127.10', tags: ['security'] },
  { id: 'level3-a', name: 'Level 3 A', primary: '209.244.0.3', secondary: '209.244.0.4', tags: ['gaming'] },
  { id: 'level3-c', name: 'Level 3 C', primary: '4.2.2.3', secondary: '4.2.2.4', tags: ['gaming'] },
  { id: 'level3-d', name: 'Level 3 D', primary: '4.2.2.5', secondary: '4.2.2.6', tags: ['gaming'] },
  { id: 'comodo', name: 'Comodo DNS', primary: '156.154.70.22', secondary: '156.154.71.22', tags: ['security'] },

  // Privacy Focused
  { id: 'nordvpn', name: 'NordVPN', primary: '103.86.96.96', secondary: '103.86.99.99', tags: ['privacy'] },
  { id: 'mullvad', name: 'Mullvad DNS', primary: '194.242.2.2', secondary: '194.242.2.3', tags: ['privacy'] },
  { id: 'dns4eu', name: 'DNS4EU', primary: '86.54.11.100', secondary: '86.54.11.200', tags: ['privacy'] },
  { id: 'dns-watch', name: 'DNS WATCH', primary: '84.200.69.80', secondary: '84.200.70.40', tags: ['privacy'] },
  { id: 'fdn', name: 'FDN', primary: '80.67.169.12', secondary: '80.67.169.40', tags: ['privacy'] },

  // Ad Blocking
  { id: 'alternate-dns', name: 'Alternate DNS', primary: '76.76.19.19', secondary: '76.223.122.155', tags: ['adblock'] },
  { id: 'nextdns', name: 'NextDNS', primary: '45.90.28.0', secondary: '45.90.30.0', tags: ['adblock', 'privacy'] },
  { id: 'cleanbrowsing-adult', name: 'CleanBrowsing Adult', primary: '185.228.168.168', secondary: '185.228.169.168', tags: ['family'] },
  { id: 'cleanbrowsing-security', name: 'CleanBrowsing Security', primary: '185.228.168.9', secondary: '185.228.169.9', tags: ['security'] },

  // Asian Providers
  { id: 'alibaba', name: 'Alibaba DNS', primary: '223.5.5.5', secondary: '223.6.6.6', tags: ['gaming'] },
  { id: 'tencent', name: 'Tencent DNS', primary: '119.29.29.29', secondary: '119.28.28.28', tags: ['gaming'] },

  // Anti-Sanction (Iran-specific)
  { id: 'shecan', name: 'Shecan', primary: '178.22.122.100', secondary: '185.51.200.2', tags: ['anti-sanction'] },
  { id: 'hamrahe-aval', name: 'Hamrahe Aval', primary: '10.10.10.10', secondary: '10.10.10.10', tags: ['anti-sanction'] },
  { id: 'alisha', name: 'Alisha', primary: '5.160.218.115', secondary: '5.160.218.116', tags: ['anti-sanction'] },
  { id: 'electro', name: 'Electro DNS', primary: '78.157.42.100', secondary: '78.157.42.101', tags: ['anti-sanction'] },
  { id: 'begzar', name: 'Begzar', primary: '185.81.112.100', secondary: '185.81.113.100', tags: ['anti-sanction'] },
  { id: '403online', name: '403 Online', primary: '10.10.10.10', secondary: '10.10.10.10', tags: ['anti-sanction'] },

  // Additional
  { id: 'neustar-1', name: 'Neustar 1', primary: '156.154.70.1', secondary: '156.154.71.1', tags: ['security'] },
  { id: 'neustar-2', name: 'Neustar 2', primary: '156.154.70.5', secondary: '156.154.71.5', tags: ['security'] },
  { id: 'qwest', name: 'Qwest', primary: '205.171.3.65', secondary: '205.171.2.65', tags: [] },
  { id: 'zen', name: 'Zen Internet', primary: '212.23.8.1', secondary: '212.23.3.1', tags: [] },
  { id: 'orange', name: 'Orange DNS', primary: '195.92.195.94', secondary: '195.92.195.95', tags: [] },
]

export const allTags: Tag[] = ['gaming', 'adblock', 'family', 'privacy', 'security', 'anti-sanction']

export const tagLabels: Record<Tag, string> = {
  gaming: 'Gaming',
  adblock: 'Ad Block',
  family: 'Family Safe',
  privacy: 'Privacy',
  security: 'Security',
  'anti-sanction': 'Anti-Sanction'
}
