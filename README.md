# LÉO — Landing Page EP

```
╦  ╔═╗╔═╗  ╔═╗╔═╗
║  ║╣ ║ ║  ║╣ ╠═╝
╩═╝╚═╝╚═╝  ╚═╝╩  
Premier EP — 21 novembre 2025
```

[![React](https://img.shields.io/badge/react-18.2-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/vite-5.0-646CFF)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/tailwind-3.4-38B2AC)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-Proprietary-red)]()

Landing page officielle pour la sortie du premier EP de l'artiste **LÉO**, prévue le **21 novembre 2025**.

---

## 🚀 Démarrage rapide

```bash
# Installation
npm install

# Lancer le serveur de développement
npm run dev
```

**→ Ouvrir** http://localhost:5173

**→ Lire** [`START_HERE.md`](./START_HERE.md) pour commencer ! ⭐

---

## 🎨 Design

Site minimaliste et immersif centré sur la pochette de l'EP, avec une atmosphère sobre et poétique inspirée d'artistes comme Odezenne, Flavien Berger et The Blaze.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📁 Structure du projet

```
leo/
├── public/
│   ├── cover.jpg          # Pochette de l'EP (à ajouter)
│   └── artist-photo.jpg   # Photo de l'artiste (à ajouter)
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      # Section hero avec pochette
│   │   ├── TeaserSection.jsx    # Vidéo teaser
│   │   ├── ListenSection.jsx    # Lecteur Spotify + plateformes
│   │   ├── BioSection.jsx       # Biographie artiste
│   │   ├── SocialSection.jsx    # Réseaux sociaux
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## ⚙️ Configuration à finaliser

### 1. Ajouter les images
- Placer la pochette de l'EP dans `/public/cover.jpg`
- Placer la photo de l'artiste dans `/public/artist-photo.jpg`

### 2. Intégrer la vidéo teaser
Dans `src/components/TeaserSection.jsx`, remplacer `YOUR_VIDEO_ID` par l'ID réel de votre vidéo YouTube :
```jsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### 3. Intégrer le lecteur Spotify
Dans `src/components/ListenSection.jsx`, remplacer `YOUR_ALBUM_ID` par l'ID de votre EP sur Spotify :
```jsx
src="https://open.spotify.com/embed/album/YOUR_ALBUM_ID?utm_source=generator"
```

### 4. Ajouter les liens des plateformes
Dans `src/components/ListenSection.jsx`, remplacer les `#` par les vrais liens :
```jsx
const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/...', color: '...' },
  // etc.
];
```

### 5. Ajouter les liens réseaux sociaux
Dans `src/components/SocialSection.jsx`, remplacer les `#` par les vrais liens :
```jsx
const socials = [
  { name: 'Instagram', url: 'https://instagram.com/...', icon: ... },
  // etc.
];
```

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push le dossier dist/ vers la branche gh-pages
```

## 🎯 Fonctionnalités

✅ Design responsive (mobile-first)  
✅ Animations fluides et fade-in  
✅ Section hero avec pochette en background  
✅ Intégration vidéo teaser  
✅ Lecteur Spotify embarqué  
✅ Liens vers toutes les plateformes de streaming  
✅ Biographie artiste avec photo  
✅ Liens réseaux sociaux avec icônes SVG  
✅ Footer avec crédits  
✅ Scroll smooth entre sections  
✅ Effets hover subtils  

## 💻 Technologies

- **React** 18
- **Vite** pour le build
- **Tailwind CSS** pour le styling
- **Google Fonts** (Inter)

## 📝 Notes

Le site est conçu pour être léger, rapide et immersif. Toutes les animations sont sobres et fluides, respectant l'esthétique minimaliste souhaitée.

---

© 2025 LÉO — Design par Gregory Busson
