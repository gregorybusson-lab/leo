import { useEffect, useState } from 'react';
import { loadYouTubeAPI } from '../utils/youtubeAPI';

function ClipTeaserSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  // false = affiche "Demain. 19h." ; true = affiche "2h30 : le clip"
  const SHOW_RELEASE_CLIP = false;
  const TEASER_VIDEO_URL = 'https://www.youtube.com/embed/fOdMXLK6VZw?enablejsapi=1&rel=0&modestbranding=1';
  const CLIP_VIDEO_URL = TEASER_VIDEO_URL;

  const blocks = [
    {
      key: 'teaser',
      title: 'Demain. 19h.',
      playerId: 'youtube-clip-teaser-player',
      eventLabel: 'youtube_teaser_demain_19h',
      src: TEASER_VIDEO_URL,
      isVisible: !SHOW_RELEASE_CLIP,
    },
    {
      key: 'clip',
      title: '2h30 : le clip',
      playerId: 'youtube-clip-release-player',
      eventLabel: 'youtube_clip_2h30',
      src: CLIP_VIDEO_URL,
      isVisible: SHOW_RELEASE_CLIP,
    },
  ];

  const activeBlock = blocks.find((block) => block.isVisible) || blocks[0];

  useEffect(() => {
    let player = null;

    loadYouTubeAPI().then(() => {
      player = new window.YT.Player(activeBlock.playerId, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              if (window.gtag) {
                window.gtag('event', 'video_play', {
                  event_category: 'video',
                  event_label: activeBlock.eventLabel
                });
              }
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              if (window.gtag) {
                window.gtag('event', 'video_pause', {
                  event_category: 'video',
                  event_label: activeBlock.eventLabel
                });
              }
            } else if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              if (window.gtag) {
                window.gtag('event', 'video_ended', {
                  event_category: 'video',
                  event_label: activeBlock.eventLabel
                });
              }
            }
          }
        }
      });
    });

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, [activeBlock.eventLabel, activeBlock.playerId]);

  return (
    <section id="clip-teaser-section" className="pt-24 pb-12 md:pt-28 md:pb-16 px-4 bg-black">
      <div className="relative max-w-5xl mx-auto">
        {blocks.map((block) => {
          const blockIsPlaying = block.key === activeBlock.key && isPlaying;

          return (
            <div key={block.key} className={block.isVisible ? 'mb-8' : 'hidden'}>
              <h2 className="font-script text-6xl md:text-7xl text-center mb-12">
                {block.title}
              </h2>

              <div className="flex justify-center">
                <div className="relative w-full max-w-4xl">
                  <div
                    className={`absolute ${blockIsPlaying ? '-inset-16' : '-inset-4'} bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 
                             rounded-2xl ${blockIsPlaying ? 'blur-3xl' : 'blur-2xl'} transition-all duration-300 ${blockIsPlaying ? '' : 'opacity-60 animate-pulse'}`}
                    style={{
                      animation: blockIsPlaying ? 'beat138Intense 666.67ms ease-in-out infinite' : undefined
                    }}
                  ></div>

                  {blockIsPlaying && (
                    <div
                      className="absolute -inset-24 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 rounded-3xl blur-3xl"
                      style={{
                        animation: 'beat138Secondary 666.67ms ease-in-out infinite 333.33ms'
                      }}
                    ></div>
                  )}

                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 rounded-2xl blur-sm transition-all ${blockIsPlaying ? '' : 'opacity-50'}`}
                    style={{
                      animation: blockIsPlaying ? 'borderPulse138 666.67ms ease-in-out infinite' : undefined
                    }}
                  ></div>

                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full transform transition-all duration-500 hover:scale-[1.01] hover:shadow-emerald-500/50 border-2 border-emerald-500/30 hover:border-emerald-400/60">
                      <iframe
                        id={block.playerId}
                        className="w-full h-full"
                        src={block.src}
                        title={block.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="absolute -bottom-10 left-0 right-0 h-16 bg-gradient-to-b from-emerald-500/20 to-transparent blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ClipTeaserSection;
