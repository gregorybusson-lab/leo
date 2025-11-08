import { useState, useEffect } from 'react';

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTeaser = () => {
    const teaserSection = document.getElementById('teaser-section');
    if (teaserSection) {
      const targetPosition = teaserSection.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 secondes pour une animation fluide
      let start = null;

      // Animation avec easing (ease-in-out)
      const easeInOutCubic = (t) => {
        return t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const scrollToListen = () => {
    document.getElementById('listen-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/leo-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Animated background blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Gradient fade to black at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Album cover with parallax & wow effect */}
        <div 
          className="mb-8 fade-in"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'all 0.1s ease-out',
            opacity: scrollY > 400 ? Math.max(0, 1 - (scrollY - 400) * 0.003) : 1,
          }}
        >
          <div className="relative inline-block">
            {/* Halo externe très large - pulse lent comme Spotify */}
            <div 
              className="absolute -inset-32 bg-gradient-to-r from-emerald-500/15 via-white/10 to-teal-500/15 
                         rounded-[4rem] blur-[100px]"
              style={{
                animation: 'slowGlow 7s ease-in-out infinite',
                opacity: Math.max(0, 1 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Halo moyen */}
            <div 
              className="absolute -inset-20 bg-gradient-to-r from-emerald-500/20 via-white/15 to-teal-500/20 
                         rounded-[3rem] blur-[80px]"
              style={{
                animation: 'slowGlow 7s ease-in-out infinite 2.3s',
                opacity: Math.max(0, 1 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Halo proche - pulse plus rapide */}
            <div 
              className="absolute inset-0 bg-white/20 blur-3xl scale-110 animate-pulse"
              style={{
                opacity: Math.max(0, 1 - scrollY * 0.0015),
                transition: 'opacity 0.2s ease-out',
              }}
            ></div>
            
            {/* Album cover */}
            <div className="relative group">
              <img
                src="/cover.jpg"
                alt="LÉO - Premier EP"
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-lg shadow-2xl 
                         transform transition-all duration-700 hover:scale-105 hover:rotate-2
                         border-4 border-white/10"
                style={{
                  transform: `scale(${Math.max(0.7, 1 - scrollY * 0.0004)})`,
                  transition: 'transform 0.1s ease-out',
                }}
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Subtitle and CTA */}
        <div 
          className="fade-in-delay"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-100 tracking-wide">
            <span className="font-script text-2xl md:text-3xl lg:text-4xl">ORPHÉE</span> — Premier EP — Sortie le 21 novembre 2025
          </p>
          
          {/* Bouton premium avec ambiance vert fumé */}
          <button
            onClick={scrollToListen}
            className="group relative px-10 py-5 text-lg font-semibold text-white overflow-hidden rounded-full
                       transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            {/* Gradient de fond vert fumé animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 
                           transition-all duration-500 group-hover:scale-150"></div>
            
            {/* Effet de fumée/brume */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-teal-900/60 
                           opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
            
            {/* Effet de brillance qui traverse le bouton */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent 
                           -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Cercles lumineux verts animés au hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-emerald-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-teal-400/20 rounded-full blur-lg animate-pulse delay-100"></div>
            </div>
            
            {/* Bordure lumineuse verte */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/50 
                           group-hover:border-emerald-400 group-hover:scale-105 transition-all duration-500"></div>
            
            {/* Texte du bouton */}
            <span className="relative z-10 tracking-wide">Pré-écouter le premier single</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToTeaser}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce
                   cursor-pointer hover:scale-110 transition-transform duration-300
                   focus:outline-none group"
        aria-label="Défiler vers le teaser"
      >
        <div className="relative">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 scale-150"></div>
          
          <svg 
            className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 
                     transition-all duration-300 relative z-10" 
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
      </button>
    </section>
  );
}

export default HeroSection;
