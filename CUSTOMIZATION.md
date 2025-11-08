# 🎨 Guide de personnalisation

## Images à ajouter

### 1. Pochette de l'EP
**Fichier :** `/public/cover.jpg`  
**Dimensions recommandées :** 1500x1500px minimum  
**Format :** JPG ou PNG  
**Usage :** Fond de la section Hero (première section du site)

### 2. Photo de l'artiste
**Fichier :** `/public/artist-photo.jpg`  
**Dimensions recommandées :** 1000x1000px minimum (format carré)  
**Format :** JPG ou PNG  
**Usage :** Section "À propos de Léo"

---

## Liens à configurer

### 📹 Vidéo Teaser YouTube
**Fichier :** `src/components/TeaserSection.jsx`  
**Ligne 16**

Remplacer :
```jsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

Par (exemple) :
```jsx
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```

💡 **Comment obtenir l'ID YouTube :**
- URL complète : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID à extraire : `dQw4w9WgXcQ`

### 🎵 Lecteur Spotify
**Fichier :** `src/components/ListenSection.jsx`  
**Ligne 29**

Remplacer :
```jsx
src="https://open.spotify.com/embed/album/YOUR_ALBUM_ID?utm_source=generator"
```

💡 **Comment obtenir l'embed Spotify :**
1. Aller sur votre EP sur Spotify
2. Cliquer sur `...` → `Partager` → `Intégrer l'album`
3. Copier l'URL d'embed fournie

### 🎧 Liens plateformes de streaming
**Fichier :** `src/components/ListenSection.jsx`  
**Lignes 4-10**

Remplacer les `url: '#'` par vos vrais liens :

```jsx
const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/album/VOTRE_ID', color: 'bg-green-500 hover:bg-green-600' },
  { name: 'Apple Music', url: 'https://music.apple.com/album/VOTRE_ID', color: 'bg-red-500 hover:bg-red-600' },
  { name: 'Deezer', url: 'https://www.deezer.com/album/VOTRE_ID', color: 'bg-purple-500 hover:bg-purple-600' },
  { name: 'YouTube', url: 'https://youtube.com/playlist?list=VOTRE_ID', color: 'bg-red-600 hover:bg-red-700' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/albums/VOTRE_ID', color: 'bg-blue-500 hover:bg-blue-600' },
];
```

### 📱 Réseaux sociaux
**Fichier :** `src/components/SocialSection.jsx`  
**Lignes 30-54**

Remplacer les `url: '#'` par vos profils :

```jsx
const socials = [
  { name: 'Instagram', url: 'https://instagram.com/votre_compte', icon: ... },
  { name: 'TikTok', url: 'https://tiktok.com/@votre_compte', icon: ... },
  { name: 'YouTube', url: 'https://youtube.com/@votre_compte', icon: ... },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/votre_id', icon: ... },
];
```

---

## Personnalisation du texte

### Section Bio
**Fichier :** `src/components/BioSection.jsx`  
**Lignes 20-27**

Modifier le texte selon vos besoins (garder la structure HTML) :
```jsx
<p>
  Votre texte personnalisé...
</p>
<p>
  Suite de votre bio...
</p>
```

---

## Personnalisation des couleurs (optionnel)

### Palette de couleurs actuelle
Le site utilise une palette sombre avec :
- Fond noir (`bg-black`)
- Texte blanc (`text-white`)
- Gris pour les dégradés (`bg-zinc-900`, `bg-zinc-950`)
- Couleurs des boutons plateformes (personnalisables)

### Pour modifier les couleurs
**Fichier :** `tailwind.config.js`

Ajouter vos couleurs personnalisées :
```js
theme: {
  extend: {
    colors: {
      'leo-primary': '#votre-couleur',
      'leo-secondary': '#votre-couleur',
    },
  },
},
```

---

## 🚀 Après personnalisation

1. **Sauvegarder tous les fichiers modifiés**
2. **Le serveur se recharge automatiquement** (si `npm run dev` est lancé)
3. **Vérifier le rendu** sur http://localhost:5173
4. **Tester sur mobile** (ouvrir les DevTools Chrome → Mode responsive)

---

## ✅ Checklist finale

- [ ] Pochette EP ajoutée (`/public/cover.jpg`)
- [ ] Photo artiste ajoutée (`/public/artist-photo.jpg`)
- [ ] ID vidéo YouTube configuré
- [ ] Embed Spotify configuré
- [ ] Liens plateformes ajoutés (Spotify, Apple Music, etc.)
- [ ] Liens réseaux sociaux ajoutés (Instagram, TikTok, etc.)
- [ ] Texte bio personnalisé
- [ ] Test sur desktop ✓
- [ ] Test sur mobile ✓
- [ ] Prêt pour le déploiement !
