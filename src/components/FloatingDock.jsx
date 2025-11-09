import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after leaving hero section (20% scroll)
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
        
        if (window.gtag) {
          window.gtag('event', 'share', {
            method: 'Web Share API',
            content_type: 'landing_page',
            event_category: 'engagement',
            event_label: 'dock_button'
          });
        }
      } catch (err) {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText('https://leobs.fr');
        alert('Lien copié ! 🔗');
        
        if (window.gtag) {
          window.gtag('event', 'share', {
            method: 'Clipboard',
            content_type: 'landing_page',
            event_category: 'engagement',
            event_label: 'dock_button'
          });
        }
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg-dock');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.download = 'leobs-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/leobsn/', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@leobsn', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'from-black to-gray-800'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@LEOBSN', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'from-red-600 to-red-700'
    },
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/intl-fr/artist/2JQCSgmIhQHcJQoqwu4afT', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* iOS-style Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
        {/* Glassmorphism container */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] px-4 py-3 shadow-2xl 
                        border border-white/20 flex items-center gap-3">
          
          {/* Social Icons */}
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'click_social_dock', {
                    event_category: 'engagement',
                    event_label: social.name.toLowerCase()
                  });
                }
              }}
              className="group relative w-12 h-12 rounded-2xl flex items-center justify-center
                         transition-all duration-300 hover:scale-125 hover:-translate-y-2"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                animation: `dockBounce 0.5s ease-out ${index * 0.1}s`
              }}
              aria-label={social.name}
            >
              {/* Icon background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl 
                              opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl 
                              blur-xl opacity-0 group-hover:opacity-60 transition-opacity`}></div>
              
              {/* Icon */}
              <div className="relative z-10 text-white">
                {social.icon}
              </div>
            </a>
          ))}

          {/* Divider */}
          <div className="w-px h-10 bg-white/20 mx-1"></div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="group relative w-12 h-12 rounded-2xl flex items-center justify-center
                       transition-all duration-300 hover:scale-125 hover:-translate-y-2"
            aria-label="Partager"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl 
                            opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl 
                            blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
            <svg 
              className="w-6 h-6 text-white relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>

          {/* QR Code Button */}
          <button
            onClick={() => setShowQR(!showQR)}
            className="group relative w-12 h-12 rounded-2xl flex items-center justify-center
                       transition-all duration-300 hover:scale-125 hover:-translate-y-2"
            aria-label="QR Code"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl 
                            opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl 
                            blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
            <svg 
              className="w-6 h-6 text-white relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setShowQR(false)}
        >
          <div 
            className="bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/20 rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-script text-emerald-400">QR Code</h3>
              <button
                onClick={() => setShowQR(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl mb-6 flex justify-center">
              <QRCodeSVG
                id="qr-code-svg-dock"
                value="https://leobs.fr"
                size={256}
                level="H"
                includeMargin={true}
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 text-center text-sm">
                Scannez pour accéder à <span className="text-emerald-400 font-bold">leobs.fr</span>
              </p>

              <button
                onClick={downloadQR}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white 
                         py-3 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 
                         transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
              >
                📥 Télécharger le QR Code
              </button>

              <div className="text-xs text-gray-400 text-center">
                <p>Utilisez ce QR code sur vos :</p>
                <p className="text-emerald-400 mt-1">
                  Flyers • Affiches • Stories Instagram • Posts Facebook
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add dock bounce animation to global styles */}
      <style jsx>{`
        @keyframes dockBounce {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default FloatingDock;
