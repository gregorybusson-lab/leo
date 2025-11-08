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
      {/* Animated background blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Dark overlay for better text readability - MAIS PAS EN HAUT */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
      
      {/* DÉGRADÉ NOIR EN HAUT - Z-INDEX MAX POUR ÊTRE AU DESSUS DE TOUT */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-[100]" 
           style={{ pointerEvents: 'none' }}></div>
      
      {/* Gradient fade to black at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Album cover with parallax & wow effect - optimisé pour mobile */}
        <div 
          className="mb-8 fade-in"
          style={{
            transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
            willChange: 'transform',
            opacity: scrollY > 400 ? Math.max(0, 1 - (scrollY - 400) * 0.003) : 1,
          }}
        >
          <div className="relative inline-block">
            {/* Fumée blanche 1 - mouvement aléatoire lent */}
            <div 
              className="absolute -inset-64 bg-gradient-to-br from-white/20 via-transparent to-white/10 
                         rounded-full blur-[150px] animate-smoke-drift-1"
              style={{
                opacity: Math.max(0, 0.6 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Fumée blanche 2 - mouvement opposé */}
            <div 
              className="absolute -inset-56 bg-gradient-to-tl from-white/15 via-white/25 to-transparent 
                         rounded-full blur-[130px] animate-smoke-drift-2"
              style={{
                opacity: Math.max(0, 0.7 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Fumée verte 1 - pulse lent emerald */}
            <div 
              className="absolute -inset-48 bg-gradient-to-r from-emerald-500/20 via-white/20 to-teal-400/15 
                         rounded-full blur-[110px] animate-smoke-drift-3"
              style={{
                opacity: Math.max(0, 0.8 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Fumée blanche 3 - rotation lente */}
            <div 
              className="absolute -inset-40 bg-gradient-to-bl from-transparent via-white/30 to-emerald-400/10 
                         rounded-full blur-[90px] animate-smoke-drift-4"
              style={{
                opacity: Math.max(0, 0.85 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Fumée verte 2 - proche et intense */}
            <div 
              className="absolute -inset-24 bg-gradient-to-tr from-emerald-400/25 via-white/35 to-teal-400/20 
                         rounded-full blur-[70px] animate-smoke-drift-5"
              style={{
                opacity: Math.max(0, 0.9 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Fumée blanche 4 - très proche, mouvement rapide */}
            <div 
              className="absolute -inset-8 bg-white/30 blur-[50px] animate-smoke-drift-6"
              style={{
                opacity: Math.max(0, 1 - scrollY * 0.0015),
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
            <span className="font-script text-2xl md:text-3xl lg:text-4xl">ORPHÉE</span> — Premier EP — <span className="font-bold text-emerald-400">Sortie le 21 novembre 2025</span>
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
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToTeaser}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300
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
      </div>
    </section>
  );
}

export default HeroSection;
