import { useEffect, useState } from 'react';

function AnnouncementSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-announcement-player', {
        events: {
          'onStateChange': (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              // Track video play
              if (window.gtag) {
                window.gtag('event', 'video_play', {
                  'event_category': 'video',
                  'event_label': 'youtube_announcement_21nov'
                });
              }
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              // Track video pause
              if (window.gtag) {
                window.gtag('event', 'video_pause', {
                  'event_category': 'video',
                  'event_label': 'youtube_announcement_21nov'
                });
              }
            } else if (event.data === window.YT.PlayerState.ENDED) {
              // 0 = ENDED
              setIsPlaying(false);
              // Track video ended
              if (window.gtag) {
                window.gtag('event', 'video_ended', {
                  'event_category': 'video',
                  'event_label': 'youtube_announcement_21nov'
                });
              }
            }
          }
        }
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-4 text-emerald-400">
          RENDEZ-VOUS LE 21 NOVEMBRE !
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          En attendant, j'ai un truc super important à vous dire
        </p>
        
        {/* Format vertical optimisé pour YouTube avec effet de halo lent */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-[400px]">
            {/* Glow effect lent et doux autour de la vidéo */}
            <div 
              className={`absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 
                           rounded-2xl blur-2xl transition-all duration-300`}
              style={{
                animation: isPlaying ? 'slowPulse 4s ease-in-out infinite' : 'slowPulse 6s ease-in-out infinite'
              }}
            ></div>
            
            {/* Halo secondaire encore plus doux */}
            <div 
              className={`absolute -inset-12 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 
                           rounded-2xl blur-3xl transition-all duration-500`}
              style={{
                animation: isPlaying ? 'slowPulse 5s ease-in-out infinite 1s' : 'slowPulse 7s ease-in-out infinite 1s'
              }}
            ></div>
            
            {/* Video player */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-w-[400px] mx-auto">
              <iframe
                id="youtube-announcement-player"
                className="w-full h-full"
                src="https://www.youtube.com/embed/fOdMXLK6VZw?enablejsapi=1&rel=0&modestbranding=1"
                title="Annonce LÉO - 21 Novembre"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Effet de reflet en dessous */}
            <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-emerald-500/10 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Animation CSS pour le halo lent */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}

export default AnnouncementSection;
