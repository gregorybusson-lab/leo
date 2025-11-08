# 🎵 Exemples de contenu à ajouter

## Titres de l'EP (exemple)

Si vous voulez ajouter la liste des morceaux, créez un nouveau composant :

```jsx
// src/components/TracklistSection.jsx
function TracklistSection() {
  const tracks = [
    { number: 1, title: 'Titre du morceau 1', duration: '3:45' },
    { number: 2, title: 'Titre du morceau 2', duration: '4:12' },
    { number: 3, title: 'Titre du morceau 3', duration: '3:28' },
    { number: 4, title: 'Titre du morceau 4', duration: '5:03' },
    { number: 5, title: 'Titre du morceau 5', duration: '4:20' },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tracklist
        </h2>
        
        <div className="space-y-2">
          {tracks.map((track) => (
            <div
              key={track.number}
              className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg
                       hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-500 w-8">
                  {track.number}
                </span>
                <span className="text-lg">
                  {track.title}
                </span>
              </div>
              <span className="text-gray-400">
                {track.duration}
              </span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-400 mt-6 text-sm">
          Durée totale : ~21 minutes
        </p>
      </div>
    </section>
  );
}

export default TracklistSection;
```

Puis ajouter dans `App.jsx` :
```jsx
import TracklistSection from './components/TracklistSection'

// Dans le return
<ListenSection />
<TracklistSection /> {/* Nouvelle section */}
<BioSection />
```

---

## Citations / Press (exemple)

Ajouter des citations de presse ou reviews :

```jsx
// src/components/PressSection.jsx
function PressSection() {
  const quotes = [
    {
      text: "Un premier EP qui marque les esprits par sa maturité sonore.",
      author: "Les Inrockuptibles",
    },
    {
      text: "Entre électro et introspection, LÉO signe un premier essai maîtrisé.",
      author: "Tsugi Magazine",
    },
    {
      text: "Une promesse artistique tenue avec brio.",
      author: "Nova",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Ils en parlent
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900 rounded-lg"
            >
              <p className="text-lg italic mb-4">
                "{quote.text}"
              </p>
              <p className="text-sm text-gray-400 font-semibold">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressSection;
```

---

## Dates de concert (exemple)

Si LÉO fait des concerts pour la sortie :

```jsx
// src/components/TourSection.jsx
function TourSection() {
  const dates = [
    {
      date: '25 novembre 2025',
      venue: 'La Maroquinerie',
      city: 'Paris',
      tickets: 'https://lien-billetterie.com',
    },
    {
      date: '2 décembre 2025',
      venue: 'Le Transbordeur',
      city: 'Lyon',
      tickets: 'https://lien-billetterie.com',
    },
    {
      date: '10 décembre 2025',
      venue: 'Le Connexion Live',
      city: 'Toulouse',
      tickets: 'https://lien-billetterie.com',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Concerts
        </h2>
        <p className="text-center text-gray-400 mb-12">
          LÉO en live pour célébrer la sortie de l'EP
        </p>
        
        <div className="space-y-4">
          {dates.map((show, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between
                       p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
            >
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-400 mb-1">
                  {show.date}
                </p>
                <p className="text-xl font-semibold">
                  {show.venue}
                </p>
                <p className="text-gray-300">
                  {show.city}
                </p>
              </div>
              
              <a
                href={show.tickets}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-medium rounded-full
                         hover:bg-gray-200 transition-all text-center"
              >
                Billets
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourSection;
```

---

## Paroles d'un morceau (exemple)

Mettre en avant les paroles d'un titre phare :

```jsx
// src/components/LyricsSection.jsx
function LyricsSection() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Extrait — "Titre du morceau"
        </h2>
        <p className="text-gray-400 mb-12">
          Premier single de l'EP
        </p>
        
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>Premier couplet</p>
          <p>Deuxième ligne</p>
          <p className="italic text-white">Refrain</p>
          <p className="italic text-white">Ligne du refrain</p>
          <p>...</p>
        </div>
      </div>
    </section>
  );
}

export default LyricsSection;
```

---

## Making-of / Behind the scenes (exemple)

Partager des photos du studio :

```jsx
// src/components/BehindTheScenesSection.jsx
function BehindTheScenesSection() {
  const photos = [
    { src: '/studio-1.jpg', caption: 'En studio d\'enregistrement' },
    { src: '/studio-2.jpg', caption: 'Mixage de l\'EP' },
    { src: '/studio-3.jpg', caption: 'Session piano' },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Dans les coulisses
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Quelques images de la création de l'EP
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group">
              <div className="aspect-square rounded-lg overflow-hidden mb-3">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-sm text-gray-400">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BehindTheScenesSection;
```

---

## Crédits de l'EP (exemple)

Mettre en avant les collaborateurs :

```jsx
// src/components/CreditsSection.jsx
function CreditsSection() {
  const credits = [
    { role: 'Composition & production', name: 'LÉO' },
    { role: 'Mixage', name: 'Jean Dupont' },
    { role: 'Mastering', name: 'Marie Martin' },
    { role: 'Artwork', name: 'Studio XYZ' },
    { role: 'Photo artiste', name: 'Pierre Photographe' },
  ];

  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Crédits
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {credits.map((credit, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-zinc-800 rounded-lg">
              <span className="text-gray-400">{credit.role}</span>
              <span className="font-semibold">{credit.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreditsSection;
```

---

## 📌 Comment ajouter ces sections

1. **Créer le fichier** du composant dans `src/components/`
2. **Importer** dans `src/App.jsx`
3. **Ajouter** dans le return (choisir l'ordre)
4. **Personnaliser** le contenu selon vos besoins

## 🎯 Recommandations

- **Ne pas tout ajouter** — garder la sobriété du site
- **Choisir 1-2 sections** en plus de l'existant maximum
- **Tester le rendu** sur mobile après chaque ajout
- **Garder la cohérence** visuelle (utiliser les mêmes styles Tailwind)

---

Ces exemples sont **prêts à l'emploi** et respectent le design actuel du site ! ✨
