# 🚀 Guide de démarrage rapide

## ✅ État actuel

Le site est **opérationnel** et tourne sur http://localhost:5173

Vous pouvez voir :
- ✅ La hero section avec pochette placeholder
- ✅ Section teaser vidéo (à configurer)
- ✅ Section écoute avec Spotify (à configurer)
- ✅ Bio de l'artiste
- ✅ Réseaux sociaux
- ✅ Footer

---

## 📝 Les 3 étapes pour finaliser

### 1️⃣ Ajouter vos images (10 min)

**Pochette de l'EP :**
- Placer votre image dans `/public/cover.jpg`
- Supprimer `/public/cover.svg`
- Format recommandé : JPG 1500x1500px

**Photo artiste :**
- Placer votre image dans `/public/artist-photo.jpg`
- Supprimer `/public/artist-photo.svg`
- Format recommandé : JPG 1000x1000px (carré)

### 2️⃣ Configurer les liens (15 min)

**Ouvrir `CUSTOMIZATION.md`** et suivre les instructions pour :
- ✏️ ID vidéo YouTube
- ✏️ Embed Spotify de l'EP
- ✏️ Liens plateformes (Apple Music, Deezer, etc.)
- ✏️ Liens réseaux sociaux (Instagram, TikTok, etc.)

### 3️⃣ Déployer (5 min)

**Ouvrir `DEPLOYMENT.md`** et choisir :
- 🚀 **Vercel** (recommandé) - 1 clic depuis GitHub
- Ou Netlify, GitHub Pages

---

## 🎨 Personnalisation optionnelle

Si vous voulez aller plus loin :

1. **Modifier le texte bio** → `src/components/BioSection.jsx`
2. **Changer les couleurs** → `tailwind.config.js`
3. **Ajouter des sections** → `CONTENT_EXAMPLES.md`
4. **Améliorations avancées** → `SUGGESTIONS.md`

---

## 📁 Documentation complète

| Fichier | Contenu |
|---------|---------|
| `README.md` | Vue d'ensemble du projet |
| `CUSTOMIZATION.md` | **Guide de personnalisation complet** ⭐ |
| `DEPLOYMENT.md` | Guide de mise en ligne |
| `PROJECT_SUMMARY.md` | Résumé de ce qui a été créé |
| `CONTENT_EXAMPLES.md` | Exemples de sections additionnelles |
| `SUGGESTIONS.md` | Idées d'améliorations optionnelles |

---

## 🎯 Workflow recommandé

```
1. TESTER le site actuel
   → Ouvrir http://localhost:5173
   → Naviguer dans toutes les sections
   → Tester sur mobile (DevTools responsive)

2. AJOUTER les images
   → Pochette + photo artiste
   → Rafraîchir le navigateur

3. CONFIGURER les liens
   → Suivre CUSTOMIZATION.md
   → Vérifier que tout fonctionne

4. VALIDER le rendu final
   → Desktop + mobile
   → Tous les liens cliquables

5. DÉPLOYER
   → Suivre DEPLOYMENT.md
   → Partager le lien ! 🎉
```

---

## 💻 Commandes utiles

```bash
# Développement (déjà lancé ✓)
npm run dev

# Build production (tester avant déploiement)
npm run build

# Preview du build
npm run preview

# Arrêter le serveur
Ctrl+C dans le terminal
```

---

## 🆘 Besoin d'aide ?

### Le site ne se charge pas
→ Vérifier que `npm run dev` tourne dans le terminal

### Une section est vide
→ Les liens sont probablement en `#`, voir CUSTOMIZATION.md

### Les images ne s'affichent pas
→ Vérifier qu'elles sont bien dans `/public/` avec les bons noms

### Je veux changer un texte
→ Tous les textes sont dans `src/components/[Nom]Section.jsx`

### Erreurs CSS dans l'éditeur
→ Voir `.vscode-notes.md` — c'est normal et ça n'empêche rien

---

## ✨ Le site est prêt !

Vous avez maintenant :
- ✅ Un site professionnel et sobre
- ✅ 100% responsive (mobile-first)
- ✅ Animations fluides
- ✅ Optimisé pour le référencement
- ✅ Prêt à déployer en quelques minutes

**Prochaine étape :** Personnaliser avec vos contenus et déployer ! 🚀

---

## 📊 Stack technique

- **React 18** - Framework UI moderne
- **Vite** - Build ultra-rapide (~200ms)
- **Tailwind CSS** - Styling professionnel
- **0 dépendances lourdes** - Site léger et rapide

---

## 🎉 Bon lancement de l'EP !

Ce site accompagnera parfaitement la sortie du premier EP de LÉO le 21 novembre 2025.

Design sobre, expérience immersive, focus sur la musique. ✨

---

**Questions ?** Consultez la documentation ou relancez `npm run dev` pour continuer le développement !
