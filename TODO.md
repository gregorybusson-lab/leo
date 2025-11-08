# ✅ TODO - Checklist finale avant mise en ligne

## 🎨 Contenu visuel

### Images
- [ ] **Pochette EP** (`/public/cover.jpg`)
  - Format : JPG ou PNG
  - Dimensions : 1500x1500px minimum
  - Qualité : Haute résolution
  - Optimisé pour le web (< 500kb si possible)

- [ ] **Photo artiste** (`/public/artist-photo.jpg`)
  - Format : JPG ou PNG
  - Dimensions : 1000x1000px minimum (format carré)
  - Qualité : Haute résolution
  - Optimisé pour le web (< 300kb si possible)

- [ ] **Favicon** (optionnel)
  - Placer dans `/public/favicon.ico`
  - Format : ICO ou PNG 32x32px

---

## 🔗 Liens à configurer

### Vidéo teaser
- [ ] **YouTube/Vimeo ID**
  - Fichier : `src/components/TeaserSection.jsx`
  - Ligne 16
  - Remplacer : `YOUR_VIDEO_ID`

### Spotify
- [ ] **Embed Spotify**
  - Fichier : `src/components/ListenSection.jsx`
  - Ligne 29
  - Remplacer : `YOUR_ALBUM_ID`

### Plateformes de streaming
- [ ] **Spotify** - Lien album
- [ ] **Apple Music** - Lien album
- [ ] **Deezer** - Lien album
- [ ] **YouTube** - Lien playlist/album
- [ ] **Amazon Music** - Lien album
  - Fichier : `src/components/ListenSection.jsx`
  - Lignes 4-10

### Réseaux sociaux
- [ ] **Instagram** - Lien profil
- [ ] **TikTok** - Lien profil
- [ ] **YouTube** - Lien chaîne
- [ ] **Spotify** - Lien artiste
  - Fichier : `src/components/SocialSection.jsx`
  - Lignes 30-54

---

## 📝 Textes à personnaliser

### Biographie
- [ ] **Texte bio** (optionnel)
  - Fichier : `src/components/BioSection.jsx`
  - Lignes 20-27
  - Adapter selon votre style

### Meta tags (SEO)
- [ ] **Description** (optionnel)
  - Fichier : `index.html`
  - Ligne 6
  - Personnaliser la description

---

## 🧪 Tests

### Fonctionnel
- [ ] **Toutes les sections s'affichent**
- [ ] **Vidéo teaser se charge**
- [ ] **Lecteur Spotify fonctionne**
- [ ] **Tous les boutons sont cliquables**
- [ ] **Liens externes s'ouvrent dans un nouvel onglet**
- [ ] **Scroll smooth fonctionne** (bouton Hero → Listen)
- [ ] **Animations fade-in visibles**

### Responsive
- [ ] **Mobile (< 768px)** - iPhone, Android
- [ ] **Tablette (768px-1024px)** - iPad
- [ ] **Desktop (> 1024px)** - Écran standard
- [ ] **Large desktop (> 1920px)** - Grand écran

### Navigateurs
- [ ] **Chrome/Edge**
- [ ] **Firefox**
- [ ] **Safari** (desktop et iOS)

### Performance
- [ ] **Temps de chargement < 3s** (4G)
- [ ] **Images optimisées**
- [ ] **Build sans erreurs** (`npm run build`)

---

## 🚀 Préparation déploiement

### Repository
- [ ] **Git init** (`git init`)
- [ ] **Premier commit** (`git add . && git commit -m "Initial commit"`)
- [ ] **Push sur GitHub** (optionnel mais recommandé)

### Environnement
- [ ] **Variables d'environnement** (si nécessaire)
- [ ] **Fichier `.env` non commité** (déjà dans .gitignore)

### Build
- [ ] **Build production réussit** (`npm run build`)
- [ ] **Preview local fonctionne** (`npm run preview`)
- [ ] **Dossier `dist/` généré**

---

## 🌐 Déploiement

### Choix de la plateforme
- [ ] **Vercel** (recommandé)
- [ ] **Netlify**
- [ ] **GitHub Pages**
- [ ] **Autre** : _____________

### Configuration
- [ ] **Build command** : `npm run build`
- [ ] **Output directory** : `dist`
- [ ] **Node version** : 18+

### Domaine
- [ ] **Domaine personnalisé** (optionnel)
  - Nom : _____________
  - DNS configurés
  - SSL activé (automatique sur Vercel/Netlify)

---

## 📊 Post-déploiement

### Vérification
- [ ] **Site accessible** sur l'URL de production
- [ ] **HTTPS fonctionne** (cadenas vert)
- [ ] **Images chargent correctement**
- [ ] **Tous les liens fonctionnent**
- [ ] **Test sur mobile réel** (pas seulement DevTools)

### Analytics (optionnel)
- [ ] **Google Analytics** configuré
- [ ] **Plausible Analytics** configuré
- [ ] **Vercel Analytics** activé

### SEO (optionnel)
- [ ] **Google Search Console** configuré
- [ ] **Sitemap.xml** généré
- [ ] **Robots.txt** configuré

---

## 📣 Communication

### Préparation
- [ ] **Screenshot du site** (pour partage réseaux)
- [ ] **URL courte** (bit.ly ou autre)
- [ ] **Message d'annonce** préparé

### Partage
- [ ] **Instagram** (story + post)
- [ ] **TikTok**
- [ ] **YouTube** (description vidéo teaser)
- [ ] **Spotify** (bio artiste)
- [ ] **Newsletter** (si applicable)

---

## 🎯 Lancement

### Timing
- [ ] **Date de mise en ligne** : _____________
- [ ] **Annonce prévu** : _____________
- [ ] **Sortie EP** : 21 novembre 2025

### Support
- [ ] **Documentation accessible**
- [ ] **Contact support** défini (email/DM)

---

## 📅 Calendrier suggéré

```
J-14 : Finaliser contenu (images, liens)
J-7  : Tests complets et corrections
J-3  : Déploiement en production
J-2  : Vérifications finales
J-1  : Annonce teasing
J-0  : Communication complète + monitoring
```

---

## 💡 Notes

- **Ne pas précipiter** : Mieux vaut prendre le temps de bien tester
- **Faire relire** : Par une personne tierce (typos, liens cassés)
- **Sauvegarder** : Faire un backup avant modifications importantes
- **Itérer** : Le site peut évoluer après le lancement

---

## ✨ Bon courage !

Vous êtes presque prêt·e pour le lancement ! 🚀  
Cette checklist garantit un déploiement sans accroc.

**Prochaine étape** : Cocher les cases une par une ! ✅
