import { useState, useEffect, useRef } from 'react';
import { loadYouTubeAPI } from '../utils/youtubeAPI';

const VIDEOS = [
  {
    key: 'feu',
    playerId: 'youtube-player-feu',
    eventLabel: 'youtube_shorts_feu',
    videoId: 'fBJ59PNvzr8',
    title: 'FEU',
    caption: "Premier single de l'EP ORPHÉE",
    format: 'vertical',
  },
  {
    key: 'bal-terminales',
    playerId: 'youtube-player-bal-terminales',
    eventLabel: 'youtube_shorts_bal_terminales',
    videoId: 'GioztxoEPDE',
    title: 'Bal des terminales 2026',
    caption: 'Lycée des Pierres Vives, Carrières-sur-Seine',
    format: 'vertical',
  },
  {
    key: 'concert-distance',
    playerId: 'youtube-player-concert-distance',
    eventLabel: 'youtube_live_distance_maem',
    videoId: 'EUYn_Nfp5F0',
    title: '"Distance" avec Maem',
    caption: 'Concert du lycée, mai 2026',
    format: 'horizontal',
  },
];

function TeaserSection() {
  const [playingKey, setPlayingKey] = useState(null);
  const playersRef = useRef([]);

  useEffect(() => {
    loadYouTubeAPI().then(() => {
      playersRef.current = VIDEOS.map(
        (video) =>
          new window.YT.Player(video.playerId, {
            events: {
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.PLAYING) {
                  setPlayingKey(video.key);
                  if (window.gtag) {
                    window.gtag('event', 'video_play', {
                      event_category: 'video',
                      event_label: video.eventLabel,
                    });
                  }
                } else if (event.data === window.YT.PlayerState.PAUSED) {
                  setPlayingKey((current) => (current === video.key ? null : current));
                  if (window.gtag) {
                    window.gtag('event', 'video_pause', {
                      event_category: 'video',
                      event_label: video.eventLabel,
                    });
                  }
                } else if (event.data === window.YT.PlayerState.ENDED) {
                  setPlayingKey((current) => (current === video.key ? null : current));
                  if (window.gtag) {
                    window.gtag('event', 'video_ended', {
                      event_category: 'video',
                      event_label: video.eventLabel,
                    });
                  }
                }
              },
            },
          })
      );
    });

    return () => {
      playersRef.current.forEach((player) => player && player.destroy && player.destroy());
    };
  }, []);

  const renderVideo = (video) => {
    const isPlaying = playingKey === video.key;
    const isVertical = video.format === 'vertical';

    return (
      <div key={video.key} className={isVertical ? 'w-1/2' : 'w-full'}>
        <div className="relative w-full">
          {/* Glow effect autour de la vidéo - animation synchronisée à 90 BPM (666.67ms par beat) */}
          <div
            className={`absolute ${isPlaying ? '-inset-16' : '-inset-4'} bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30
                         rounded-2xl ${isPlaying ? 'blur-3xl' : 'blur-2xl'} transition-all duration-300 ${isPlaying ? '' : 'opacity-60 animate-pulse'}`}
            style={{
              animation: isPlaying ? 'beat138Intense 666.67ms ease-in-out infinite' : undefined,
            }}
          ></div>

          {/* Halo secondaire encore plus large quand ça joue */}
          {isPlaying && (
            <div
              className="absolute -inset-24 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20
                         rounded-3xl blur-3xl"
              style={{
                animation: 'beat138Secondary 666.67ms ease-in-out infinite 333.33ms',
              }}
            ></div>
          )}

          {/* Bordure lumineuse animée - pulse synchronisé au BPM */}
          <div
            className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400
                         rounded-2xl blur-sm transition-all ${isPlaying ? '' : 'opacity-50'}`}
            style={{
              animation: isPlaying ? 'borderPulse138 666.67ms ease-in-out infinite' : undefined,
            }}
          ></div>

          {/* Container de la vidéo */}
          <div className="relative group">
            <div
              className={`relative w-full rounded-2xl overflow-hidden shadow-2xl
                         transform transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/50
                         border-2 border-emerald-500/30 hover:border-emerald-400/60 ${
                           isVertical ? 'aspect-[9/16]' : 'aspect-video'
                         }`}
            >
              <iframe
                id={video.playerId}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1`}
                title={video.title}
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

        <p className="text-center text-gray-400 text-sm mt-4">
          <span className="text-white font-medium">{video.title}</span> — {video.caption}
        </p>
      </div>
    );
  };

  const shorts = VIDEOS.filter((video) => video.format === 'vertical');
  const standard = VIDEOS.find((video) => video.format === 'horizontal');

  return (
    <section id="teaser-section" className="py-32 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-4">
          PLONGEZ DANS L'UNIVERS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Le premier single de l'EP, un moment de scène et un live à découvrir
        </p>

        <div className="max-w-4xl mx-auto space-y-14">
          <div className="flex gap-4 md:gap-6 justify-center">
            {shorts.map(renderVideo)}
          </div>
          {standard && renderVideo(standard)}
        </div>
      </div>
    </section>
  );
}

export default TeaserSection;
