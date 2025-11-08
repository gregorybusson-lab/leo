function ListenSection() {
  const platforms = [
    { name: 'Spotify', url: '#', color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Apple Music', url: '#', color: 'bg-red-500 hover:bg-red-600' },
    { name: 'Deezer', url: '#', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'YouTube', url: '#', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'Amazon Music', url: '#', color: 'bg-blue-500 hover:bg-blue-600' },
  ];

  return (
    <section id="listen-section" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Écoutez l'EP
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Disponible sur toutes les plateformes – découvrez les 5 titres du premier EP de Léo.
        </p>

        {/* Spotify Embed */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {/* Replace with your actual Spotify embed URL */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/YOUR_ALBUM_ID?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
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
                         shadow-lg hover:shadow-xl`}
            >
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListenSection;
