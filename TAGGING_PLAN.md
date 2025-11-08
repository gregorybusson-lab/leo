# Plan de Tagging - Landing Page LÉO "ORPHÉE"

## 📊 Vue d'ensemble
Site : https://leobs.fr / https://leo-landing-three.vercel.app  
Google Analytics : G-3RR8Y6M8LN  
Microsoft Clarity : u30783r8rh  

---

## 🎯 Objectifs de tracking
1. Mesurer l'engagement des visiteurs
2. Identifier les plateformes d'écoute les plus utilisées
3. Tracker les interactions sociales
4. Optimiser le funnel de conversion (visite → écoute)

---

## 📍 Structure des sections

### 1. **HERO SECTION** (`HeroSection.jsx`)
**Identifiant de bloc** : `hero-section`

#### Éléments trackables :
- **CTA Principal** : Bouton "Pré-écouter le premier single"
  - **Nom** : `cta_hero_preecout`
  - **Type** : Click
  - **Destination** : Scroll vers `#listen-section`
  - **Event** : `click_cta_hero`
  
- **Scroll Indicator** : Flèche animée vers le bas
  - **Nom** : `scroll_arrow_hero`
  - **Type** : Click
  - **Destination** : Scroll vers `#teaser-section`
  - **Event** : `click_scroll_arrow`

---

### 2. **TEASER SECTION** (`TeaserSection.jsx`)
**Identifiant de bloc** : `teaser-section`

#### Éléments trackables :

**A. Lecteur vidéo YouTube**
- **Player ID** : `youtube-player`
- **Video ID** : `fBJ59PNvzr8`
- **Nom** : `youtube_shorts_feu`
- **Events à tracker** :
  - `video_play` : Lecture démarrée
  - `video_pause` : Mise en pause
  - `video_ended` : Lecture terminée
  - `video_25_percent` : 25% visionné
  - `video_50_percent` : 50% visionné
  - `video_75_percent` : 75% visionné

**B. Liens réseaux sociaux (sous la vidéo)**
| Plateforme | Nom du lien | URL | Event |
|-----------|------------|-----|-------|
| Instagram | `social_teaser_instagram` | https://www.instagram.com/leobs_o | `click_social_teaser` |
| TikTok | `social_teaser_tiktok` | https://www.tiktok.com/@leobs_o | `click_social_teaser` |
| YouTube | `social_teaser_youtube` | https://youtube.com/@leobs_o0 | `click_social_teaser` |
| Spotify | `social_teaser_spotify` | https://open.spotify.com/artist/3hDLQPQ6PZqxdHNgCQVhTO | `click_social_teaser` |

---

### 3. **LISTEN SECTION** (`ListenSection.jsx`)
**Identifiant de bloc** : `listen-section`

#### Éléments trackables :

**A. Lecteur Spotify Embed**
- **Player Type** : Spotify Artist Embed
- **Artist ID** : `3hDLQPQ6PZqxdHNgCQVhTO`
- **Nom** : `spotify_embed_artist`
- **Event** : `spotify_embed_interaction` (détecté via hover/play si possible)

**B. Boutons plateformes d'écoute**
| Plateforme | Nom du bouton | URL | Event |
|-----------|--------------|-----|-------|
| Spotify | `platform_spotify` | https://open.spotify.com/intl-fr/album/2JQCSgmIhQHcJQoqwu4afT | `click_platform_button` |
| Apple Music | `platform_apple_music` | https://music.apple.com/fr/album/feu-single/1783866488 | `click_platform_button` |
| Deezer | `platform_deezer` | https://www.deezer.com/fr/album/789684541 | `click_platform_button` |
| YouTube Music | `platform_youtube_music` | https://music.youtube.com/watch?v=TrsoE1A0WNA | `click_platform_button` |
| Tidal | `platform_tidal` | https://tidal.com/album/448619727/track/448619728 | `click_platform_button` |
| Qobuz | `platform_qobuz` | https://open.qobuz.com/album/y04aawphdvcsb | `click_platform_button` |
| Amazon Music | `platform_amazon_music` | https://www.amazon.fr/music/player/albums/B0FHWP1N9X | `click_platform_button` |

---

### 4. **BIO SECTION** (`BioSection.jsx`)
**Identifiant de bloc** : `bio-section`

#### Éléments trackables :
- **Scroll Depth** : Suivi de lecture de la bio
  - `bio_viewed_25`
  - `bio_viewed_50`
  - `bio_viewed_75`
  - `bio_viewed_100`

- **Image artiste** : Hover sur la photo
  - **Nom** : `artist_photo_hover`
  - **Event** : `hover_artist_photo`

---

### 5. **SOCIAL SECTION** (`SocialSection.jsx`)
**Identifiant de bloc** : `social-section`

#### Éléments trackables :
| Plateforme | Nom du lien | URL | Event |
|-----------|------------|-----|-------|
| Instagram | `social_footer_instagram` | https://www.instagram.com/leobs_o | `click_social_footer` |
| TikTok | `social_footer_tiktok` | https://www.tiktok.com/@leobs_o | `click_social_footer` |
| YouTube | `social_footer_youtube` | https://youtube.com/@leobs_o0 | `click_social_footer` |
| Spotify | `social_footer_spotify` | https://open.spotify.com/artist/3hDLQPQ6PZqxdHNgCQVhTO | `click_social_footer` |

---

### 6. **FOOTER** (`Footer.jsx`)
**Identifiant de bloc** : `footer`

#### Éléments trackables :
- Pas de liens externes (seulement texte informatif)
- **Event** : `footer_viewed` (scroll depth tracking)

---

### 7. **COOKIE CONSENT** (`CookieConsent.jsx`)
**Identifiant de bloc** : `cookie-consent-banner`

#### Éléments trackables :
- **Bouton "Accepter"**
  - **Nom** : `cookie_accept`
  - **Event** : `click_cookie_accept`
  
- **Bouton "Refuser"**
  - **Nom** : `cookie_refuse`
  - **Event** : `click_cookie_refuse`

---

## 🏷️ Nomenclature des événements

### Format général
```javascript
gtag('event', 'nom_evenement', {
  'event_category': 'categorie',
  'event_label': 'label_specifique',
  'value': valeur_optionnelle
});
```

### Catégories principales
- `navigation` : Clics de navigation (scroll, menu)
- `engagement` : Interactions (hover, play, pause)
- `conversion` : Actions clés (click platform, click social)
- `video` : Événements vidéo YouTube
- `consent` : Gestion cookies

---

## 📈 KPIs à suivre

### 1. **Taux d'engagement vidéo**
- % de visiteurs qui lancent la vidéo
- Temps moyen de visionnage
- % de complétion (25%, 50%, 75%, 100%)

### 2. **Taux de conversion plateformes**
- Nombre de clics sur boutons d'écoute
- Plateformes les plus utilisées
- Conversion Hero CTA → Click Platform

### 3. **Engagement social**
- Clics sur réseaux sociaux (Teaser vs Footer)
- Réseau le plus cliqué

### 4. **Scroll Depth**
- % de visiteurs atteignant chaque section
- Taux d'abandon par section

### 5. **Consent Rate**
- % d'acceptation cookies
- % de refus cookies

---

## 🔧 Implémentation technique

### Variables à ajouter dans chaque composant :

#### **HeroSection.jsx**
```javascript
const trackCTAClick = () => {
  gtag('event', 'click_cta_hero', {
    'event_category': 'conversion',
    'event_label': 'pre_ecoute_single'
  });
};

const trackScrollArrow = () => {
  gtag('event', 'click_scroll_arrow', {
    'event_category': 'navigation',
    'event_label': 'scroll_to_teaser'
  });
};
```

#### **TeaserSection.jsx**
```javascript
const trackSocialClick = (platform) => {
  gtag('event', 'click_social_teaser', {
    'event_category': 'conversion',
    'event_label': platform
  });
};

const trackVideoEvent = (action) => {
  gtag('event', `video_${action}`, {
    'event_category': 'video',
    'event_label': 'youtube_shorts_feu'
  });
};
```

#### **ListenSection.jsx**
```javascript
const trackPlatformClick = (platform) => {
  gtag('event', 'click_platform_button', {
    'event_category': 'conversion',
    'event_label': platform,
    'value': 1
  });
};
```

#### **SocialSection.jsx**
```javascript
const trackSocialFooterClick = (platform) => {
  gtag('event', 'click_social_footer', {
    'event_category': 'conversion',
    'event_label': platform
  });
};
```

#### **CookieConsent.jsx**
```javascript
const trackCookieChoice = (choice) => {
  // Ne pas utiliser gtag ici car il n'est pas encore chargé
  // Utiliser dataLayer.push directement
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': `cookie_${choice}`,
    'event_category': 'consent',
    'event_label': choice
  });
};
```

---

## 📊 Dashboards recommandés

### Google Analytics 4
1. **Overview Dashboard**
   - Sessions, Users, Bounce Rate
   - Top Events
   - Conversion Funnel

2. **Engagement Dashboard**
   - Video Play Rate
   - Avg Video Completion
   - Social Clicks by Platform

3. **Conversion Dashboard**
   - Platform Clicks (breakdown)
   - Hero CTA → Listen Section conversion
   - Social Media Traffic

### Microsoft Clarity
1. **Heatmaps**
   - Click Heatmap (boutons plateformes)
   - Scroll Heatmap (sections visitées)

2. **Session Recordings**
   - Parcours utilisateur
   - Points de friction

3. **Rage Clicks**
   - Éléments problématiques

---

## 🎯 Événements prioritaires à implémenter

### Phase 1 (Critique)
✅ Cookie Consent (déjà implémenté)  
⬜ Click Platform Buttons  
⬜ Video Play/Pause  
⬜ Social Links (Teaser + Footer)  
⬜ Hero CTA  

### Phase 2 (Important)
⬜ Video Progress (25/50/75/100%)  
⬜ Scroll Depth  
⬜ Spotify Embed interaction  

### Phase 3 (Nice to have)
⬜ Hover Artist Photo  
⬜ Scroll Arrow clicks  
⬜ Bio Reading Time  

---

## 📝 Notes d'implémentation

### Timing
- Les événements doivent être envoyés **uniquement après acceptation des cookies**
- Vérifier l'existence de `window.gtag` avant chaque appel

### Testing
```javascript
// Test en console
gtag('event', 'test_event', {
  'event_category': 'test',
  'event_label': 'manual_test'
});
```

### Debug Mode
```javascript
// Activer en dev
gtag('config', 'G-3RR8Y6M8LN', {
  'debug_mode': true
});
```

---

## 🔗 Ressources
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference)
- [Microsoft Clarity Setup](https://docs.microsoft.com/en-us/clarity/)
