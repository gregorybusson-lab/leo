import { useState, useEffect } from 'react';

function ShareButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 20% of page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'LÉO — Premier EP ORPHÉE',
          text: 'Découvrez l\'univers de LÉO, entre rap et électro. Premier single FEU disponible maintenant.',
          url: 'https://leobs.fr'
        });
        
        // Track share
        if (window.gtag) {
          window.gtag('event', 'share', {
            method: 'Web Share API',
            content_type: 'landing_page',
            event_category: 'engagement',
            event_label: 'floating_button'
          });
        }
      } catch (err) {
        // User cancelled, silent fail
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText('https://leobs.fr');
        alert('Lien copié ! 🔗');
        
        if (window.gtag) {
          window.gtag('event', 'share', {
            method: 'Clipboard',
            content_type: 'landing_page',
            event_category: 'engagement',
            event_label: 'floating_button'
          });
        }
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 
                 rounded-full shadow-lg hover:shadow-emerald-500/50 hover:scale-110 
                 transition-all duration-300 flex items-center justify-center group
                 animate-slide-up"
      aria-label="Partager ce site"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full 
                      opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
      
      {/* Share icon */}
      <svg 
        className="w-6 h-6 text-white relative z-10" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" 
        />
      </svg>
      
      {/* Tooltip on hover */}
      <div className="absolute -top-12 right-0 bg-zinc-800 text-white text-sm px-3 py-2 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Partager
      </div>
    </button>
  );
}

export default ShareButton;
