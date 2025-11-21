import { useEffect, useState } from 'react';
import { loadYouTubeAPI } from '../utils/youtubeAPI';

function AnnouncementSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize player when API is ready
    loadYouTubeAPI().then(() => {
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
    });
  }, []);

  return (
    <section id="announcement-section" className="relative -mt-32 pt-32 py-20 px-4 bg-black">
      {/* Gradient de transition avec le Hero au-dessus */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 via-black/60 to-black"></div>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Format standard 16:9 pour YouTube avec effet de halo réduit */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-4xl">
            {/* Halo externe - Réduit */}
            <div 
              className={`absolute -inset-16 bg-gradient-to-r from-emerald-500/25 via-teal-500/25 to-emerald-500/25 
                           rounded-3xl blur-[80px] transition-all duration-500`}
              style={{
                animation: isPlaying ? 'slowPulse 4s ease-in-out infinite' : 'slowPulse 6s ease-in-out infinite'
              }}
            ></div>
            
            {/* Halo moyen */}
            <div 
              className={`absolute -inset-10 bg-gradient-to-r from-emerald-500/35 via-teal-500/35 to-emerald-500/35 
                           rounded-2xl blur-[50px] transition-all duration-400`}
              style={{
                animation: isPlaying ? 'slowPulse 5s ease-in-out infinite 0.5s' : 'slowPulse 7s ease-in-out infinite 0.5s'
              }}
            ></div>
            
            {/* Halo proche */}
            <div 
              className={`absolute -inset-6 bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-emerald-400/40 
                           rounded-2xl blur-[30px] transition-all duration-300`}
              style={{
                animation: isPlaying ? 'slowPulse 6s ease-in-out infinite 1s' : 'slowPulse 8s ease-in-out infinite 1s'
              }}
            ></div>
            
            {/* Video player - Format 16:9 standard */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
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
            
            {/* Effet de reflet en dessous - Plus visible */}
            <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-b from-emerald-500/20 to-transparent blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnnouncementSection;
