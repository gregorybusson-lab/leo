import { useEffect, useRef, useState } from 'react';

const TRACKS = [
  {
    key: 'jarrive-pas',
    title: "J'arrive pas",
    src: '/audio/j-arrive-pas.mp3',
  },
  {
    key: 'pas-plus-bas',
    title: 'Pas plus bas',
    src: '/audio/pas-plus-bas.mp3',
  },
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function TrackPlayer({ track, isPlaying, onPlay, onPause }) {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
      audioRef.current?.play();
    }
  };

  const handleSeek = (event) => {
    const bar = event.currentTarget;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    if (audioRef.current && duration) {
      audioRef.current.currentTime = ratio * duration;
      setCurrentTime(ratio * duration);
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative">
      {/* Glow - même langage visuel que les vidéos, synchronisé à 90 BPM */}
      <div
        className={`absolute ${isPlaying ? '-inset-8' : '-inset-2'} bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30
                   rounded-2xl ${isPlaying ? 'blur-2xl' : 'blur-xl'} transition-all duration-300 ${isPlaying ? '' : 'opacity-50 animate-pulse'}`}
        style={{
          animation: isPlaying ? 'beat138Intense 666.67ms ease-in-out infinite' : undefined,
        }}
      ></div>
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400
                   rounded-2xl blur-sm transition-all ${isPlaying ? '' : 'opacity-40'}`}
        style={{
          animation: isPlaying ? 'borderPulse138 666.67ms ease-in-out infinite' : undefined,
        }}
      ></div>

      <div
        className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 hover:border-emerald-400/60
                   bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl transition-all duration-500"
      >
        <span
          className="inline-block text-xs font-medium uppercase tracking-widest text-emerald-400
                     border border-emerald-400/50 rounded-full px-3 py-1 mb-4"
        >
          Avant-première
        </span>

        <h3 className="text-xl font-semibold text-white mb-1">{track.title}</h3>
        <p className="text-sm text-gray-400 mb-6">Bientôt disponible sur toutes les plateformes</p>

        <audio
          ref={audioRef}
          src={track.src}
          preload="metadata"
          controlsList="nodownload noremoteplayback"
          onContextMenu={(event) => event.preventDefault()}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onEnded={onPause}
        />

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Mettre en pause' : 'Lire'}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500
                       flex items-center justify-center shadow-lg shadow-emerald-500/40
                       transform transition-transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="flex-1">
            <div
              className="h-2 rounded-full bg-white/10 cursor-pointer overflow-hidden"
              onClick={handleSeek}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1.5 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvantPremiereSection() {
  const [playingKey, setPlayingKey] = useState(null);

  return (
    <section
      id="avant-premiere-section"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(/leo-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/75 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-4">
          AVANT-PREMIÈRE
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Deux extraits exclusifs, bientôt disponibles sur toutes les plateformes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRACKS.map((track) => (
            <TrackPlayer
              key={track.key}
              track={track}
              isPlaying={playingKey === track.key}
              onPlay={() => setPlayingKey(track.key)}
              onPause={() => setPlayingKey((current) => (current === track.key ? null : current))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvantPremiereSection;
