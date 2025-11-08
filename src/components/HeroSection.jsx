function HeroSection() {
  const scrollToListen = () => {
    document.getElementById('listen-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/cover.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 fade-in">
        <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-6">
          LÉO
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 text-gray-200 fade-in-delay">
          Premier EP — Sortie le 21 novembre 2025
        </p>
        <button
          onClick={scrollToListen}
          className="px-8 py-4 bg-white text-black font-medium text-lg rounded-full 
                     hover:bg-gray-200 transition-all duration-300 
                     transform hover:scale-105 fade-in-delay"
        >
          Pré-écouter maintenant
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white opacity-50" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
