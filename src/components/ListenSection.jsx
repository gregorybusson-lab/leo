import { useState } from 'react';

function ListenSection() {
  const [isHovered, setIsHovered] = useState(false);

  const platforms = [
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/intl-fr/album/2JQCSgmIhQHcJQoqwu4afT', 
      color: 'bg-[#1DB954] hover:bg-[#1ed760]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    { 
      name: 'Apple Music', 
      url: 'https://music.apple.com/fr/album/feu-single/1783866488', 
      color: 'bg-[#FA243C] hover:bg-[#ff4458]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 814 1000">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
        </svg>
      )
    },
    { 
      name: 'Deezer', 
      url: 'https://www.deezer.com/fr/album/789684541', 
      color: 'bg-[#FF0092] hover:bg-[#ff1aa5]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 200 200" fill="currentColor">
          <rect x="120" y="84" width="80" height="12"/>
          <rect x="120" y="104" width="80" height="12"/>
          <rect x="120" y="124" width="80" height="12"/>
          <rect x="60" y="64" width="80" height="12"/>
          <rect x="60" y="84" width="80" height="12"/>
          <rect x="60" y="104" width="80" height="12"/>
          <rect x="60" y="124" width="80" height="12"/>
          <rect x="0" y="44" width="80" height="12"/>
          <rect x="0" y="64" width="80" height="12"/>
          <rect x="0" y="84" width="80" height="12"/>
          <rect x="0" y="104" width="80" height="12"/>
          <rect x="0" y="124" width="80" height="12"/>
        </svg>
      )
    },
    { 
      name: 'YouTube Music', 
      url: 'https://music.youtube.com/watch?v=TrsoE1A0WNA', 
      color: 'bg-[#FF0000] hover:bg-[#ff1a1a]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/>
        </svg>
      )
    },
    { 
      name: 'Tidal', 
      url: 'https://tidal.com/album/448619727/track/448619728', 
      color: 'bg-black hover:bg-gray-900',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/>
        </svg>
      )
    },
    { 
      name: 'Qobuz', 
      url: 'https://open.qobuz.com/album/y04aawphdvcsb', 
      color: 'bg-white hover:bg-gray-100 text-black',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.5 0 2.9-.4 4.1-1.2l-1.8-2.4c-.7.3-1.5.5-2.3.5-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3 .6 4.1 1.6l1.7-1.7C19.4 8.6 17.8 8 16 8z"/>
          <path d="M26.5 15l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"/>
        </svg>
      )
    },
    { 
      name: 'Amazon Music', 
      url: 'https://www.amazon.fr/music/player/albums/B0FHWP1N9X', 
      color: 'bg-[#1A98FF] hover:bg-[#0d89ff]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.63 16.634c3.808 2.816 9.049 4.318 13.653 4.318 6.462 0 12.29-2.39 16.712-6.375.451-.408.049-.966-.502-.647-6.308 3.672-14.111 5.878-22.127 5.878-5.427 0-11.396-1.126-16.869-3.457-.832-.35-1.528.543-.867 1.283zm1.546-1.757C3.584 13.997.8 14.38.003 14.558c-.45.054-.521-.337-.115-.622 2.653-1.868 7.002-1.336 7.515-.705.512.631-.135 5-2.629 7.083-.383.322-.749.15-.577-.273.562-1.396 1.813-4.531 1.221-5.308zM15.857 2.989v-2c0-.303.229-.506.506-.506h8.988c.289 0 .521.207.521.506v1.72c-.005.289-.243.668-.668 1.266L20.677 10.6c1.736-.044 3.572.184 5.14.931.353.2.448.494.472.783v2.136c0 .294-.321.638-.663.458-2.794-1.472-6.506-1.624-9.602.024-.317.169-.654-.142-.654-.436V12.44c0-.275.004-.747.279-1.165l5.414-7.773h-4.662c-.287 0-.544-.172-.544-.428z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="listen-section" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-4">
          EN ATTENDANT L'EP
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Écoutez le premier single de l'EP, FEU, déjà disponible sur toutes les plateformes
        </p>

        {/* Spotify Embed - Artist Profile avec halo TRÈS large et lent */}
        <div className="mb-12 max-w-3xl mx-auto relative">
          {/* Halo externe MASSIF - pulse lent et hypnotique */}
          <div 
            className="absolute -inset-40 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-emerald-500/15 
                       rounded-[4rem] blur-[100px]"
            style={{
              animation: 'slowGlow 6s ease-in-out infinite'
            }}
          ></div>
          
          {/* Halo large */}
          <div 
            className="absolute -inset-28 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 
                       rounded-[3rem] blur-[80px]"
            style={{
              animation: 'slowGlow 6s ease-in-out infinite 2s'
            }}
          ></div>
          
          {/* Halo moyen */}
          <div 
            className="absolute -inset-16 bg-gradient-to-r from-emerald-500/25 via-teal-500/25 to-emerald-500/25 
                       rounded-3xl blur-3xl"
            style={{
              animation: 'slowGlow 6s ease-in-out infinite 4s'
            }}
          ></div>
          
          {/* Halo interne */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 
                         rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
          
          {/* Bordure lumineuse subtile */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 
                         rounded-2xl opacity-40 blur-sm"></div>
          
          {/* Container du player avec effets */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-2xl 
                           transform transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/50
                           border-2 border-emerald-500/30 hover:border-emerald-400/60">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/3hDLQPQ6PZqxdHNgCQVhTO?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            
            {/* Effet de reflet en bas */}
            <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-emerald-500/10 to-transparent 
                           blur-xl opacity-60"></div>
          </div>
          
          <p className="relative text-center text-gray-300 text-base mt-6 mb-8 z-10">
            EP disponible le 21 novembre 2025 — Suivez-moi dès maintenant sur les réseaux sociaux et les plateformes
          </p>
        </div>

        {/* Platform buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 ${platform.color} rounded-full font-medium 
                         transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl flex items-center gap-2`}
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'click_platform_button', {
                    'event_category': 'conversion',
                    'event_label': platform.name.toLowerCase().replace(' ', '_'),
                    'value': 1
                  });
                }
              }}
            >
              {platform.icon}
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListenSection;
