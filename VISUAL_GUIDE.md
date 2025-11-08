# 🎨 Aperçu visuel du site

## 📱 Structure de la page

```
┌─────────────────────────────────────────┐
│                                         │
│         🎨 HERO SECTION                 │
│                                         │
│         [Pochette en background]        │
│                                         │
│              LÉO                        │
│   Premier EP — 21 novembre 2025         │
│                                         │
│      [Pré-écouter maintenant]          │
│                                         │
│              ↓                          │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│      📹 TEASER SECTION                  │
│                                         │
│       Teaser officiel                   │
│  Un aperçu de l'univers de l'EP        │
│                                         │
│    [Vidéo YouTube/Vimeo embed]         │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│      🎵 LISTEN SECTION                  │
│                                         │
│          Écoutez l'EP                   │
│  Disponible sur toutes les plateformes  │
│                                         │
│    [Lecteur Spotify embed]             │
│                                         │
│  [Spotify] [Apple Music] [Deezer]      │
│    [YouTube] [Amazon Music]            │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│      👤 BIO SECTION                     │
│                                         │
│        À propos de Léo                  │
│                                         │
│  [Photo]  │  Léo explore un univers     │
│  artiste  │  entre électro et           │
│           │  introspection...           │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│      📱 SOCIAL SECTION                  │
│                                         │
│          Suivez Léo                     │
│                                         │
│    [📷]  [🎵]  [▶️]  [🎶]              │
│  Instagram TikTok YouTube Spotify       │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│           FOOTER                        │
│                                         │
│      © 2025 LÉO — Premier EP            │
│  Site officiel — design par Gregory B.  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🎨 Palette de couleurs

```
Fond principal :      #000000  ████  Noir profond
Fond secondaire :     #18181B  ████  Zinc 900
Fond tertiaire :      #09090B  ████  Zinc 950
                      
Texte principal :     #FFFFFF  ████  Blanc
Texte secondaire :    #A1A1AA  ████  Gris 400
                      
Accent (optionnel):   #FFFFFF  ████  Blanc (boutons)
```

---

## 📐 Typographie

```
Famille : Inter (Google Fonts)
  
Hero Titre (LÉO) :        96px - Bold
Sous-titre :              24px - Light
Titres sections :         48px - Bold
Texte courant :           18px - Regular
Petits textes :           14px - Regular
```

---

## 🎬 Animations

```
Fade-in au scroll :       1s ease-in
Fade-in delayed :         1.5s ease-in
Hover boutons :           300ms
Transform scale :         1.05 au hover
Scroll smooth :           Natif navigateur
```

---

## 📱 Breakpoints

```
Mobile :     < 768px   (1 colonne, stacking)
Tablette :   768-1024px (mix)
Desktop :    > 1024px  (2 colonnes, layouts étendus)
```

---

## 🔄 Interactions

### Hero Section
- ✨ Bouton CTA : Hover → Scale 1.05
- 📜 Click CTA → Smooth scroll vers Listen Section
- ⬇️ Indicateur scroll animé (bounce)

### Teaser Section
- ▶️ Vidéo : Contrôles YouTube/Vimeo natifs
- 🎬 Auto-resize responsive

### Listen Section
- 🎵 Lecteur Spotify : Fonctionnel
- 🔘 Boutons plateformes : Hover → Couleur plus claire + scale
- 🔗 Liens : Nouvel onglet

### Bio Section
- 🖼️ Photo : Fixed aspect ratio (carré)
- 📱 Mobile : Photo au-dessus du texte
- 💻 Desktop : Photo à gauche, texte à droite

### Social Section
- ⭕ Icônes : Cercles avec fond zinc-800
- ↗️ Hover : Fond blanc + texte noir + scale 1.1
- 🔗 Liens : Nouvel onglet

### Footer
- 📜 Statique, toujours en bas
- 🎨 Fond plus sombre (zinc-950)

---

## 🎯 Hiérarchie visuelle

```
1. HERO (LÉO)           ⭐⭐⭐⭐⭐  Maximum impact
2. Listen Section       ⭐⭐⭐⭐   Call to action fort
3. Teaser Vidéo         ⭐⭐⭐    Engagement visuel
4. Bio                  ⭐⭐     Contexte artiste
5. Social               ⭐       Liens complémentaires
6. Footer               -        Informations légales
```

---

## 📊 Proportions des sections

```
Hero :       100vh   (Plein écran)
Teaser :     ~600px  (Vidéo + marges)
Listen :     ~700px  (Player + boutons)
Bio :        ~500px  (Photo + texte)
Social :     ~400px  (Icônes + titre)
Footer :     ~150px  (Compact)
```

---

## 🎨 Effets visuels

### Overlay Hero
- Fond semi-transparent : `rgba(0,0,0,0.6)`
- Améliore lisibilité du texte

### Ombres
- Vidéo/Player : `shadow-2xl` (Tailwind)
- Boutons hover : `shadow-xl`

### Arrondis
- Boutons : `rounded-full` (100% arrondi)
- Cards : `rounded-lg` (8px)
- Images : `rounded-lg` (8px)

### Dégradés
- Teaser bg : `from-black to-zinc-900`
- Bio bg : `from-zinc-900 to-black`

---

## 📐 Espacement (Tailwind)

```
Padding sections :    py-20 px-4
Marges titres :       mb-4 (titres) mb-12 (sous-textes)
Gap boutons :         gap-4
Gap icônes sociales : gap-8
Max-width contenus :  max-w-6xl mx-auto
```

---

## 🎭 Mood Board (Inspiration)

```
🎨 Esthétique générale
├── Sobriété (Odezenne)
├── Électro-poétique (Flavien Berger)
└── Minimalisme intense (The Blaze)

🖤 Atmosphère
├── Nuit urbaine
├── Introspection
└── Modernité brute

✨ Mots-clés
├── Sobre
├── Élégant
├── Immersif
├── Professionnel
└── Poétique
```

---

## 📏 Proportions dorées

```
Hero Titre/Sous-titre :    3:1
Bio Photo/Texte :          1:1
Section Height/Width :     ~0.6 (golden ratio-ish)
```

---

## 🎬 Flow utilisateur

```
1. Arrivée sur le site
   ↓
2. Découverte visuelle (Hero + pochette)
   ↓
3. Clic CTA ou scroll naturel
   ↓
4. Visionnage teaser (engagement)
   ↓
5. Écoute Spotify (conversion principale)
   ↓
6. Clic plateforme préférée (streaming)
   ↓
7. Lecture bio (contexte artiste)
   ↓
8. Suivi réseaux sociaux (rétention)
   ↓
9. Fin du parcours
```

---

## 🔍 Détails fins

### Micro-animations
- ✅ Bounce sur icône scroll (Hero)
- ✅ Pulse sur titre pendant loading (si implementé)
- ✅ Scale sur tous les hover

### Accessibilité
- ✅ Contraste texte/fond : AAA
- ✅ Taille minimum texte : 14px
- ✅ Focus visible sur boutons
- ✅ Alt text sur images

### Performance
- ✅ Lazy loading images (navigateur)
- ✅ Fonts preconnect (Google Fonts)
- ✅ Bundle optimisé (Vite)

---

## 🎨 Variantes possibles

### Option 1 : Plus de couleur
- Accent orange (#e67e22) sur boutons
- Dégradés colorés

### Option 2 : Plus épuré
- Suppression des dégradés
- Fond noir pur partout

### Option 3 : Plus texturé
- Grain/noise sur fond
- Textures subtiles

---

## 📱 Exemple mobile

```
┌──────────────┐
│              │
│    LÉO       │  <- Plus petit (text-6xl)
│  Premier EP  │
│     CTA      │
│              │
├──────────────┤
│   Teaser     │  <- Vidéo 16:9 responsive
├──────────────┤
│   Listen     │  <- Player full width
│ [Btn][Btn]   │  <- Boutons stacked
├──────────────┤
│   [Photo]    │  <- Stacking vertical
│    Bio       │
├──────────────┤
│ [🎵][🎵]     │  <- Icônes plus grosses
├──────────────┤
│   Footer     │
└──────────────┘
```

---

## 💡 Principes de design appliqués

1. **Less is more** - Sobriété maximale
2. **Content first** - La musique au centre
3. **Mobile-first** - Conçu pour smartphone d'abord
4. **Fast & smooth** - Performances et fluidité
5. **Accessible** - Pour tous les utilisateurs

---

**Ce design crée une expérience immersive tout en restant sobre et professionnel.** ✨

Parfait pour accompagner la sortie d'un EP indépendant ! 🎵
