import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTeaser = () => {
    // Track scroll arrow click
    if (window.gtag) {
      window.gtag('event', 'click_scroll_arrow', {
        'event_category': 'navigation',
        'event_label': 'scroll_to_teaser'
      });
    }
    
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
    // Track hero CTA click
    if (window.gtag) {
      window.gtag('event', 'click_cta_hero', {
        'event_category': 'conversion',
        'event_label': 'pre_ecoute_single'
      });
    }
    
    document.getElementById('listen-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-8 md:pt-14"
      style={{
        backgroundImage: 'url(/leo-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Dark overlay for better text readability - MAIS PAS EN HAUT */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      
      {/* DÉGRADÉ NOIR EN HAUT - Z-INDEX MAX POUR ÊTRE AU DESSUS DE TOUT */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-[100]" 
           style={{ pointerEvents: 'none' }}></div>
      
      {/* Gradient fade to black at bottom - PLUS ÉTENDU pour transition parfaite */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
      
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
            {/* Halo extra large - effet fumée blanche */}
            <div 
              className="absolute -inset-48 bg-gradient-to-r from-white/18 via-white/25 to-white/18 
                         rounded-[6rem] blur-[120px]"
              style={{
                animation: 'slowGlow 8s ease-in-out infinite',
                opacity: Math.max(0, 0.9 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Halo externe très large - pulse lent comme Spotify */}
            <div 
              className="absolute -inset-36 bg-gradient-to-r from-emerald-500/25 via-white/20 to-teal-500/25 
                         rounded-[4.5rem] blur-[100px]"
              style={{
                animation: 'slowGlow 7s ease-in-out infinite 1s',
                opacity: Math.max(0, 1 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Halo moyen */}
            <div 
              className="absolute -inset-24 bg-gradient-to-r from-emerald-500/30 via-white/28 to-teal-500/30 
                         rounded-[3.5rem] blur-[85px]"
              style={{
                animation: 'slowGlow 7s ease-in-out infinite 2.3s',
                opacity: Math.max(0, 1 - scrollY * 0.0015),
              }}
            ></div>
            
            {/* Halo proche - effet fumée */}
            <div 
              className="absolute -inset-4 bg-white/40 blur-[40px] scale-110 animate-pulse"
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
            <span className="font-script text-2xl md:text-3xl lg:text-4xl">ORPHÉE</span> — Premier EP — <span className="font-bold text-emerald-400">Disponible maintenant !</span>
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
            <span className="relative z-10 tracking-wide">Écouter maintenant</span>
          </button>
          
          {/* Share button - subtle under CTA */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'LÉO — Premier EP ORPHÉE',
                  text: 'Découvrez l\'univers de LÉO, entre rap et électro. Premier single FEU disponible maintenant.',
                  url: 'https://leobs.fr'
                }).then(() => {
                  if (window.gtag) {
                    window.gtag('event', 'share', {
                      method: 'Web Share API',
                      content_type: 'landing_page',
                      event_category: 'engagement'
                    });
                  }
                }).catch((err) => {
                  // User cancelled, do nothing
                });
              } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText('https://leobs.fr');
                alert('Lien copié ! 🔗');
                if (window.gtag) {
                  window.gtag('event', 'share', {
                    method: 'Clipboard',
                    content_type: 'landing_page',
                    event_category: 'engagement'
                  });
                }
              }
            }}
            className="mt-4 text-gray-400 hover:text-emerald-400 transition-colors duration-300 
                       text-sm flex items-center gap-2 mx-auto group"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Partager l'info !
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
