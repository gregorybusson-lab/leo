# 🔧 Snippets de code utiles

Collection de snippets prêts à l'emploi pour personnaliser le site.

---

## 🎨 Personnalisation des couleurs

### Changer la couleur d'accent globale

**Fichier :** `tailwind.config.js`

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'leo-primary': '#e67e22',    // Orange chaud
        'leo-secondary': '#3498db',  // Bleu
        'leo-dark': '#1a1a1a',       // Noir doux
      },
    },
  },
  plugins: [],
}
```

Utiliser ensuite : `bg-leo-primary`, `text-leo-secondary`, etc.

---

## 🖼️ Optimisation des images

### Convertir en WebP avec fallback

**Fichier :** `src/components/HeroSection.jsx`

```jsx
<picture>
  <source srcSet="/cover.webp" type="image/webp" />
  <source srcSet="/cover.jpg" type="image/jpeg" />
  <img 
    src="/cover.jpg" 
    alt="LÉO EP Cover"
    className="w-full h-full object-cover"
  />
</picture>
```

---

## 📊 Ajout de Google Analytics

### Méthode 1 : Dans index.html

**Fichier :** `index.html` (avant `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Méthode 2 : Component React

**Fichier :** `src/components/Analytics.jsx`

```jsx
import { useEffect } from 'react';

function Analytics() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script1.async = true;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }, []);

  return null;
}

export default Analytics;
```

Dans `App.jsx` :
```jsx
import Analytics from './components/Analytics';

function App() {
  return (
    <>
      <Analytics />
      {/* Reste du site */}
    </>
  );
}
```

---

## ⏱️ Compte à rebours

### Compte à rebours jusqu'à la sortie de l'EP

**Fichier :** `src/components/CountdownSection.jsx`

```jsx
import { useState, useEffect } from 'react';

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const releaseDate = new Date('2025-11-21T00:00:00');
    const now = new Date();
    const diff = releaseDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, released: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      released: false,
    };
  }

  if (timeLeft.released) {
    return (
      <section className="py-12 bg-zinc-900 text-center">
        <p className="text-2xl font-bold text-green-400">🎉 L'EP est sorti !</p>
      </section>
    );
  }

  return (
    <section className="py-12 bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">
          Sortie dans
        </p>
        
        <div className="flex justify-center gap-8">
          <div className="flex flex-col">
            <span className="text-5xl font-bold mb-2">{timeLeft.days}</span>
            <span className="text-xs text-gray-400 uppercase">Jours</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold mb-2">{timeLeft.hours}</span>
            <span className="text-xs text-gray-400 uppercase">Heures</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold mb-2">{timeLeft.minutes}</span>
            <span className="text-xs text-gray-400 uppercase">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold mb-2">{timeLeft.seconds}</span>
            <span className="text-xs text-gray-400 uppercase">Secondes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
```

---

## 📧 Formulaire newsletter

### Avec Mailchimp

**Fichier :** `src/components/NewsletterForm.jsx`

```jsx
import { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Remplacer par votre endpoint Mailchimp ou autre
    try {
      const response = await fetch('YOUR_MAILCHIMP_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Restez informé·e
      </h3>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          className="flex-1 px-4 py-3 rounded-full bg-zinc-800 text-white 
                   border border-zinc-700 focus:outline-none focus:border-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded-full font-medium 
                   hover:bg-gray-200 transition-colors"
        >
          S'inscrire
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-center text-green-400 text-sm">
          ✓ Inscription réussie !
        </p>
      )}
      
      {status === 'error' && (
        <p className="mt-3 text-center text-red-400 text-sm">
          ✗ Erreur, réessayez plus tard.
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;
```

---

## 🔝 Bouton "Retour en haut"

**Fichier :** `src/components/ScrollToTop.jsx`

```jsx
import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-white text-black rounded-full 
               shadow-lg hover:shadow-xl transition-all transform hover:scale-110
               z-50"
      aria-label="Retour en haut"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default ScrollToTop;
```

Dans `App.jsx` :
```jsx
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sections */}
      <ScrollToTop />
    </div>
  );
}
```

---

## 🎭 Loading screen

**Fichier :** `src/App.jsx`

```jsx
import { useState, useEffect } from 'react';
// ... autres imports

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-4 animate-pulse">
            LÉO
          </h1>
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-white rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Site normal */}
    </div>
  );
}

export default App;
```

**Dans `src/index.css`** :
```css
@keyframes loading-bar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.animate-loading-bar {
  animation: loading-bar 1.5s ease-in-out forwards;
}
```

---

## 🎵 Liste des morceaux interactive

**Fichier :** `src/components/TracklistSection.jsx`

```jsx
import { useState } from 'react';

function TracklistSection() {
  const [playing, setPlaying] = useState(null);

  const tracks = [
    { number: 1, title: 'Titre 1', duration: '3:45', preview: '/preview-1.mp3' },
    { number: 2, title: 'Titre 2', duration: '4:12', preview: '/preview-2.mp3' },
    { number: 3, title: 'Titre 3', duration: '3:28', preview: '/preview-3.mp3' },
    { number: 4, title: 'Titre 4', duration: '5:03', preview: '/preview-4.mp3' },
    { number: 5, title: 'Titre 5', duration: '4:20', preview: '/preview-5.mp3' },
  ];

  const handlePlay = (trackNumber) => {
    setPlaying(trackNumber === playing ? null : trackNumber);
  };

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Tracklist</h2>
        
        <div className="space-y-2">
          {tracks.map((track) => (
            <div
              key={track.number}
              onClick={() => handlePlay(track.number)}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer
                       transition-all ${
                         playing === track.number
                           ? 'bg-white text-black'
                           : 'bg-zinc-900 hover:bg-zinc-800'
                       }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 flex justify-center">
                  {playing === track.number ? (
                    <span className="text-2xl">▶</span>
                  ) : (
                    <span className="text-2xl font-bold text-gray-500">
                      {track.number}
                    </span>
                  )}
                </div>
                <span className="text-lg font-medium">{track.title}</span>
              </div>
              <span className={playing === track.number ? 'opacity-100' : 'text-gray-400'}>
                {track.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TracklistSection;
```

---

## 🌗 Toggle thème clair/sombre

**Fichier :** `src/components/ThemeToggle.jsx`

```jsx
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-zinc-800 
               hover:bg-zinc-700 transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
```

**Configuration Tailwind :** `tailwind.config.js`
```js
export default {
  darkMode: 'class', // Ajouter cette ligne
  // ... reste de la config
}
```

---

## 📱 Boutons de partage social

**Fichier :** `src/components/ShareButtons.jsx`

```jsx
function ShareButtons() {
  const url = 'https://votre-site.com';
  const text = 'Découvrez le nouveau EP de LÉO !';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
  };

  return (
    <div className="flex gap-4 justify-center mt-8">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
      >
        Partager sur Twitter
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
      >
        Partager sur Facebook
      </a>
    </div>
  );
}

export default ShareButtons;
```

---

## 🎬 Préchargement des images

**Fichier :** `index.html` (dans `<head>`)

```html
<link rel="preload" href="/cover.jpg" as="image" />
<link rel="preload" href="/artist-photo.jpg" as="image" />
```

---

## 🔍 Meta tags complets (SEO + Open Graph)

**Fichier :** `index.html` (dans `<head>`)

```html
<!-- SEO -->
<meta name="description" content="Découvrez le premier EP de LÉO, sortie le 21 novembre 2025. Électro et introspection." />
<meta name="keywords" content="LÉO, EP, musique, électro, 2025" />
<meta name="author" content="LÉO" />

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:title" content="LÉO — Premier EP" />
<meta property="og:description" content="Découvrez le premier EP de LÉO, sortie le 21 novembre 2025" />
<meta property="og:image" content="https://votre-site.com/cover.jpg" />
<meta property="og:url" content="https://votre-site.com" />
<meta property="og:site_name" content="LÉO" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LÉO — Premier EP" />
<meta name="twitter:description" content="Découvrez le premier EP de LÉO, sortie le 21 novembre 2025" />
<meta name="twitter:image" content="https://votre-site.com/cover.jpg" />
<meta name="twitter:site" content="@votre_compte" />
```

---

## 💡 Tips

- **Tester** chaque snippet individuellement
- **Commit** avant de modifier du code (pour pouvoir revenir en arrière)
- **Personnaliser** les styles selon votre charte graphique
- **Optimiser** les performances (lazy loading, etc.)

---

Tous ces snippets sont **prêts à l'emploi** et compatibles avec la stack actuelle ! 🚀
