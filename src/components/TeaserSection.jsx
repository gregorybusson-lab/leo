import { useState, useEffect, useRef } from 'react';
import { loadYouTubeAPI } from '../utils/youtubeAPI';

function TeaserSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Callback quand l'API est prête
    loadYouTubeAPI().then(() => {
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
    });
  }, []);

  return (
    <section id="teaser-section" className="py-32 px-4 bg-black">
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
            {/* Glow effect autour de la vidéo - animation synchronisée à 90 BPM (666.67ms par beat) */}
            <div 
              className={`absolute ${isPlaying ? '-inset-16' : '-inset-4'} bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 
                           rounded-2xl ${isPlaying ? 'blur-3xl' : 'blur-2xl'} transition-all duration-300 ${isPlaying ? '' : 'opacity-60 animate-pulse'}`}
              style={{
                animation: isPlaying ? 'beat138Intense 666.67ms ease-in-out infinite' : undefined
              }}
            ></div>
            
            {/* Halo secondaire encore plus large quand ça joue */}
            {isPlaying && (
              <div 
                className="absolute -inset-24 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 
                           rounded-3xl blur-3xl"
                style={{
                  animation: 'beat138Secondary 666.67ms ease-in-out infinite 333.33ms'
                }}
              ></div>
            )}
            
            {/* Bordure lumineuse animée - pulse synchronisé au BPM */}
            <div 
              className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 
                           rounded-2xl blur-sm transition-all ${isPlaying ? '' : 'opacity-50'}`}
              style={{
                animation: isPlaying ? 'borderPulse138 666.67ms ease-in-out infinite' : undefined
              }}
            ></div>
            
            {/* Container de la vidéo */}
            <div className="relative group">
              <div 
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl 
                           transform transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/50
                           border-2 border-emerald-500/30 hover:border-emerald-400/60"
                style={{ aspectRatio: '9/16' }}
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
      </div>
    </section>
  );
}

export default TeaserSection;
