<p align="center">
  <img src="https://raw.githubusercontent.com/ZeLoExE/dns-jantex/main/docs/logo.png" width="100">
</p>

<h1 align="center">DNS Jantex Web</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-6366f1?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/vue-3.4+-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white" alt="Vue">
  <img src="https://img.shields.io/badge/typescript-5.3+-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="License">
  <a href="https://92a18fcd.dns-jantex-web.pages.dev/"><img src="https://img.shields.io/badge/Web_App-Live-green?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Web App"></a>
  <a href="https://dist-qj6odwi8b-jan-tex.vercel.app/"><img src="https://img.shields.io/badge/Vercel-Live-blue?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"></a>
  <a href="https://dns-jantex.vercel.app/"><img src="https://img.shields.io/badge/Landing_Page-Live-purple?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Landing Page"></a>
</p>

<p align="center">
  A web-based DNS management simulator with 35+ providers, tag filtering, favorites, and real-time network dashboard.
</p>

---

## Live Demo

| Site | URL |
|------|-----|
| **Web App** | [https://dist-qj6odwi8b-jan-tex.vercel.app/](https://dist-qj6odwi8b-jan-tex.vercel.app/) |
| **Landing Page** | [https://dns-jantex.vercel.app/](https://dns-jantex.vercel.app/) |
| **Cloudflare Pages** | [https://92a18fcd.dns-jantex-web.pages.dev/](https://92a18fcd.dns-jantex-web.pages.dev/) |

## Desktop Version

Looking for the full-featured Windows desktop application?

**[DNS Jantex Desktop](https://github.com/ZeLoExE/dns-jantex)** — Python-based Windows DNS manager with real DNS switching, system tray, auto-updater, and 45+ providers.

## Screenshots

<p align="center">
  <em>Dark mode with provider list and network dashboard</em>
</p>

## Features

### DNS Provider Management
- **35+ DNS providers** — Google, Cloudflare, Quad9, AdGuard, OpenDNS, Norton, Level3, and more
- **Real-time search** — Find providers by name or IP address
- **Tag filtering** — Filter by Gaming, Ad Block, Family Safe, Privacy, Security, or Anti-Sanction
- **Favorites system** — Star providers to pin them to the top of the list

### Network Dashboard
- **Live latency chart** — Real-time simulated latency visualization
- **Active DNS indicator** — See which provider is currently selected
- **Status monitoring** — Excellent/Good/Fair status based on latency

### Smart Connect
- **Automated benchmark** — Tests all providers and finds the fastest
- **Progress tracking** — Visual progress bar during benchmark
- **One-click apply** — Instantly apply the fastest provider

### User Experience
- **Dark/Light theme** — Toggle between themes with persistence
- **Toast notifications** — Success/error feedback messages
- **Responsive design** — Works on desktop and mobile
- **Keyboard accessible** — Full keyboard navigation support

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Vue 3 | UI framework with Composition API |
| TypeScript | Type-safe JavaScript |
| Vite | Fast build tool and dev server |
| Pinia | State management |
| Pure CSS | Custom styling with CSS variables |
| Cloudflare Pages | Hosting and deployment |
| Vercel | Hosting and deployment |

## Project Structure

```
dns-jantex-web/
├── src/
│   ├── components/          # Vue components
│   │   ├── AppHeader.vue    # Logo, title, theme toggle
│   │   ├── SearchBar.vue    # Search input
│   │   ├── TagFilter.vue    # Filter chips
│   │   ├── ProviderCard.vue # Individual provider display
│   │   ├── ProviderList.vue # Main provider list
│   │   ├── NetworkDashboard.vue  # Charts and stats
│   │   ├── SmartConnect.vue # Benchmark simulation
│   │   └── ToastContainer.vue    # Notifications
│   ├── stores/              # Pinia stores
│   │   ├── theme.ts         # Theme state
│   │   ├── providers.ts     # Provider filtering
│   │   ├── favorites.ts     # Favorites (localStorage)
│   │   └── toast.ts         # Toast notifications
│   ├── data/
│   │   └── dns-providers.ts # 35+ DNS providers
│   ├── styles/
│   │   ├── variables.css    # CSS custom properties
│   │   └── themes.css       # Dark/Light themes
│   ├── App.vue
│   └── main.ts
├── dist/                    # Production build
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ZeLoExE/dns-jantex-web.git
cd dns-jantex-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to Cloudflare Pages

```bash
# Install Wrangler
npm install -D wrangler

# Login to Cloudflare
npx wrangler login

# Deploy
npx wrangler pages deploy ./dist --project-name=dns-jantex-web
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel deploy ./dist -y
```

## DNS Providers Included

| Category | Providers |
|----------|-----------|
| **Major** | Google, Cloudflare, Quad9, AdGuard, OpenDNS |
| **Privacy** | NordVPN, Mullvad, DNS4EU, DNS WATCH, FDN |
| **Security** | Norton, CleanBrowsing, Neustar, Comodo |
| **Family** | Cloudflare Family, OpenDNS Family, CleanBrowsing Adult |
| **Gaming** | Level 3, Alibaba, Tencent |
| **Anti-Sanction** | Shecan, Hamrahe Aval, Alisha, Electro, Begzar |

## Comparison: Web vs Desktop

| Feature | Web Version | Desktop Version |
|---------|-------------|-----------------|
| DNS Switching | Simulated | Real system changes |
| Provider Count | 35+ | 45+ |
| Network Profiles | No | Yes |
| System Tray | No | Yes |
| Auto-Updates | No | Yes |
| Platform | Any (browser) | Windows 10/11 |
| Installation | None | Installer required |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Cloudflare Pages](https://pages.cloudflare.com/) - Fast, secure hosting
- [Vercel](https://vercel.com/) - Frontend cloud platform
- [DNS Jantex Desktop](https://github.com/ZeLoExE/dns-jantex) - Original Windows application

## Support

If you find DNS Jantex Web useful, consider supporting the development:

[![Donate](https://img.shields.io/badge/Donate-Daramet-orange)](https://daramet.com/ZeLoExE)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/ZeLoExE">ZeLoExE</a>
</p>
