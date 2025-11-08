# 🚀 Guide de déploiement

## Option 1 : Vercel (Recommandé - Le plus simple)

### Méthode A : Depuis GitHub (recommandé)

1. **Créer un repository GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - LÉO EP Landing Page"
   git branch -M main
   git remote add origin https://github.com/votre-username/leo-ep.git
   git push -u origin main
   ```

2. **Déployer sur Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Cliquer sur "Deploy"
   - ✅ Votre site sera en ligne en ~2 minutes !

### Méthode B : Depuis la CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

**Avantages Vercel :**
- ✅ Gratuit pour les projets personnels
- ✅ SSL automatique (HTTPS)
- ✅ CDN mondial ultra-rapide
- ✅ Déploiement automatique à chaque push GitHub
- ✅ Domaine personnalisé facile à configurer

---

## Option 2 : Netlify

### Depuis GitHub

1. **Pusher sur GitHub** (voir étapes ci-dessus)

2. **Déployer sur Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer sur "Add new site" → "Import from Git"
   - Sélectionner votre repository
   - Build command : `npm run build`
   - Publish directory : `dist`
   - Cliquer sur "Deploy"

### Depuis Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Déployer
netlify deploy

# Déployer en production
netlify deploy --prod
```

---

## Option 3 : GitHub Pages

```bash
# 1. Installer gh-pages
npm install --save-dev gh-pages

# 2. Ajouter dans package.json
"homepage": "https://votre-username.github.io/leo-ep",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 3. Modifier vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/leo-ep/', // Nom de votre repo
})

# 4. Déployer
npm run deploy
```

**Note :** Activer GitHub Pages dans Settings → Pages → Source : gh-pages branch

---

## Option 4 : Build manuel

Si vous voulez héberger ailleurs (serveur personnel, autre hébergeur) :

```bash
# Build le projet
npm run build

# Le dossier dist/ contient tous les fichiers à déployer
# Uploader le contenu de dist/ sur votre serveur
```

**Fichiers à uploader :**
- Tout le contenu du dossier `dist/`
- Servir le fichier `index.html` comme point d'entrée

---

## Configuration du domaine personnalisé

### Sur Vercel
1. Aller dans "Settings" → "Domains"
2. Ajouter votre domaine (ex: `leo-music.com`)
3. Suivre les instructions pour configurer les DNS

### Sur Netlify
1. Aller dans "Domain settings"
2. Cliquer sur "Add custom domain"
3. Suivre les instructions DNS

---

## Checklist avant déploiement

- [ ] Toutes les images sont ajoutées (cover.jpg, artist-photo.jpg)
- [ ] Tous les liens sont configurés (Spotify, YouTube, réseaux sociaux)
- [ ] Le site fonctionne en local (`npm run dev`)
- [ ] Build réussit sans erreurs (`npm run build`)
- [ ] Test sur mobile/tablette effectué
- [ ] Textes vérifiés (pas de fautes)

---

## 🆘 Résolution de problèmes

### Le build échoue
```bash
# Vérifier les erreurs
npm run build

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Les images ne s'affichent pas
- Vérifier que les images sont bien dans `/public/`
- Les chemins doivent commencer par `/` : `/cover.jpg`
- Pas besoin de `public/` dans le chemin

### Le site est blanc après déploiement
- Vérifier la config `base` dans `vite.config.js`
- Pour Vercel/Netlify : laisser vide ou `/`
- Pour GitHub Pages : utiliser `/nom-du-repo/`

---

## 📊 Monitoring après déploiement

### Vercel Analytics (gratuit)
- Activer dans le dashboard Vercel
- Statistiques de visites en temps réel

### Google Analytics
Ajouter dans `index.html` (avant `</head>`) :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎉 C'est en ligne !

Après déploiement, votre site sera accessible via :
- Vercel : `https://votre-projet.vercel.app`
- Netlify : `https://votre-projet.netlify.app`
- GitHub Pages : `https://votre-username.github.io/leo-ep`

Partagez le lien sur tous vos réseaux ! 🚀
