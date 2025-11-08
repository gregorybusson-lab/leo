import { useState, useEffect, useRef } from 'react';

function TeaserSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Charger l'API YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Callback quand l'API est prête
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        events: {
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING = 1
            if (event.data === 1) {
              setIsPlaying(true);
              // Track video play
              if (window.gtag) {
                window.gtag('event', 'video_play', {
                  'event_category': 'video',
                  'event_label': 'youtube_shorts_feu'
                });
              }
            } else if (event.data === 2) {
              // 2 = PAUSED
              setIsPlaying(false);
              // Track video pause
              if (window.gtag) {
                window.gtag('event', 'video_pause', {
                  'event_category': 'video',
                  'event_label': 'youtube_shorts_feu'
                });
              }
            } else if (event.data === 0) {
              // 0 = ENDED
              setIsPlaying(false);
              // Track video ended
              if (window.gtag) {
                window.gtag('event', 'video_ended', {
                  'event_category': 'video',
                  'event_label': 'youtube_shorts_feu'
                });
              }
            }
          }
        }
      });
    };
  }, []);

  return (
    <section id="teaser-section" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-4">
          PLONGEZ DANS L'UNIVERS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Découvrez le premier single de l'EP : "FEU", déjà disponible sur toutes les plateformes
        </p>
        
        {/* Format vertical optimisé pour YouTube Shorts avec effets */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-[400px]">
            {/* Glow effect autour de la vidéo - animation synchronisée à 138 BPM (435ms par beat) */}
            <div 
              className={`absolute ${isPlaying ? '-inset-16' : '-inset-4'} bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 
                           rounded-2xl ${isPlaying ? 'blur-3xl' : 'blur-2xl'} transition-all duration-300 ${isPlaying ? '' : 'opacity-60 animate-pulse'}`}
              style={{
                animation: isPlaying ? 'beat138Intense 435ms ease-in-out infinite' : undefined
              }}
            ></div>
            
            {/* Halo secondaire encore plus large quand ça joue */}
            {isPlaying && (
              <div 
                className="absolute -inset-24 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 
                           rounded-3xl blur-3xl"
                style={{
                  animation: 'beat138Secondary 435ms ease-in-out infinite 217.5ms'
                }}
              ></div>
            )}
            
            {/* Bordure lumineuse animée - pulse synchronisé au BPM */}
            <div 
              className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 
                           rounded-2xl blur-sm transition-all ${isPlaying ? '' : 'opacity-50'}`}
              style={{
                animation: isPlaying ? 'borderPulse138 435ms ease-in-out infinite' : undefined
              }}
            ></div>
            
            {/* Container de la vidéo */}
            <div className="relative group">
              <div 
                className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl 
                           transform transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/50
                           border-2 border-emerald-500/30 hover:border-emerald-400/60"
              >
                <iframe
                  id="youtube-player"
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/fBJ59PNvzr8?enablejsapi=1"
                  title="LÉO - Premier extrait"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Effet de reflet en bas */}
              <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-b from-emerald-500/10 to-transparent 
                             blur-xl opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          <a
            href="https://www.instagram.com/leobs_o?igsh=MXVvaW5zanRueTE1Zw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group social-icon-circle"
            aria-label="Instagram"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click_social_teaser', {
                  'event_category': 'conversion',
                  'event_label': 'instagram'
                });
              }
            }}
          >
            <div className="social-icon-inner w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center 
                         transition-all duration-300 transform group-hover:scale-110 
                         group-hover:bg-white group-hover:text-black group-hover:shadow-none">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition-colors text-center">
              Instagram
            </p>
          </a>

          <a
            href="https://www.tiktok.com/@leobs_o?_r=1&_t=ZN-91ETFdZjJR4"
            target="_blank"
            rel="noopener noreferrer"
            className="group social-icon-circle"
            aria-label="TikTok"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click_social_teaser', {
                  'event_category': 'conversion',
                  'event_label': 'tiktok'
                });
              }
            }}
          >
            <div className="social-icon-inner w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center 
                         transition-all duration-300 transform group-hover:scale-110 
                         group-hover:bg-white group-hover:text-black group-hover:shadow-none">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
            <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition-colors text-center">
              TikTok
            </p>
          </a>

          <a
            href="https://youtube.com/@leobs_o0?si=aSJuNo9VpVw4GQQo"
            target="_blank"
            rel="noopener noreferrer"
            className="group social-icon-circle"
            aria-label="YouTube"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click_social_teaser', {
                  'event_category': 'conversion',
                  'event_label': 'youtube'
                });
              }
            }}
          >
            <div className="social-icon-inner w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center 
                         transition-all duration-300 transform group-hover:scale-110 
                         group-hover:bg-white group-hover:text-black group-hover:shadow-none">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition-colors text-center">
              YouTube
            </p>
          </a>

          <a
            href="https://open.spotify.com/artist/3hDLQPQ6PZqxdHNgCQVhTO?si=Q0lXlJ3FRtenU6skYTjo3A"
            target="_blank"
            rel="noopener noreferrer"
            className="group social-icon-circle"
            aria-label="Spotify"
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'click_social_teaser', {
                  'event_category': 'conversion',
                  'event_label': 'spotify'
                });
              }
            }}
          >
            <div className="social-icon-inner w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center 
                         transition-all duration-300 transform group-hover:scale-110 
                         group-hover:bg-white group-hover:text-black group-hover:shadow-none">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <p className="mt-3 text-sm text-gray-400 group-hover:text-white transition-colors text-center">
              Spotify
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TeaserSection;
