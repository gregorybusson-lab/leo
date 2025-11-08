function TeaserSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Teaser officiel
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Un aperçu de l'univers de l'EP
        </p>
        
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          {/* Replace with your actual YouTube or Vimeo embed URL */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="LÉO - Teaser EP"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default TeaserSection;
