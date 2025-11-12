import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [hasCookieBanner, setHasCookieBanner] = useState(false);

  // Check if cookie banner is visible
  useEffect(() => {
    const checkCookieBanner = () => {
      const consent = localStorage.getItem('cookieConsent');
      setHasCookieBanner(!consent);
    };
    
    checkCookieBanner();
    
    // Listen for custom event when consent changes
    window.addEventListener('cookieConsentChanged', checkCookieBanner);
    
    return () => {
      window.removeEventListener('cookieConsentChanged', checkCookieBanner);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const announcementSection = document.getElementById('announcement-section');
      if (announcementSection) {
        const rect = announcementSection.getBoundingClientRect();
        
        // Show dock when we scroll past the middle of announcement section
        // Once visible, stay visible UNLESS we scroll back up to the very top (announcement not reached yet)
        const hasReachedAnnouncement = rect.top < window.innerHeight * 0.5;
        
        if (hasReachedAnnouncement) {
          setIsVisible(true);
          if (!hasBeenVisible) {
            setHasBeenVisible(true);
          }
        } else if (hasBeenVisible) {
          // Only hide if we scrolled back up before the announcement section
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBeenVisible]);

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
      url: 'https://www.instagram.com/leobs_o?igsh=MXVvaW5zanRueTE1Zw%3D%3D&utm_source=qr', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@leobs_o?_r=1&_t=ZN-91ETFdZjJR4', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'from-black to-gray-800'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@leobs_o0?si=aSJuNo9VpVw4GQQo', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'from-red-600 to-red-700'
    },
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/artist/3hDLQPQ6PZqxdHNgCQVhTO?si=Q0lXlJ3FRtenU6skYTjo3A', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
  ];

  // Don't render if never been visible
  if (!hasBeenVisible && !isVisible) return null;

  return (
    <>
      {/* iOS-style Dock - positioned above cookie banner when present */}
      <div className={`fixed left-1/2 -translate-x-1/2 z-[70] max-w-[calc(100vw-2rem)] px-2 transition-all duration-300
                       ${hasCookieBanner ? 'bottom-48 sm:bottom-32' : 'bottom-6'}
                       ${isVisible ? 'dock-appear' : hasBeenVisible ? 'dock-disappear' : ''}`}>
        {/* Glassmorphism container */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] px-3 py-3 shadow-2xl 
                        border border-white/20 flex items-center gap-2 sm:gap-3 sm:px-4">
          
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
              className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center
                         transition-all duration-300 hover:scale-125 hover:-translate-y-2 flex-shrink-0"
              style={{ 
                animation: `dockBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + index * 0.08}s both`
              }}
              aria-label={social.name}
            >
              {/* Animated halo effect - sequential wave */}
              <div className={`absolute -inset-3 bg-gradient-to-br ${social.color} rounded-3xl 
                              blur-lg group-hover:opacity-70 transition-opacity dock-halo-${index + 1}`}></div>
              
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
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center
                       transition-all duration-300 hover:scale-125 hover:-translate-y-2 flex-shrink-0"
            aria-label="Partager"
            style={{ 
              animation: `dockBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + 4 * 0.08}s both`
            }}
          >
            {/* Animated halo effect - share button */}
            <div className="absolute -inset-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl 
                            blur-lg group-hover:opacity-70 transition-opacity dock-halo-5"></div>
            
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
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center
                       transition-all duration-300 hover:scale-125 hover:-translate-y-2 flex-shrink-0"
            aria-label="QR Code"
            style={{ 
              animation: `dockBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + 5 * 0.08}s both`
            }}
          >
            {/* Animated halo effect - QR button */}
            <div className="absolute -inset-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl 
                            blur-lg group-hover:opacity-70 transition-opacity dock-halo-6"></div>
            
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
        
        {/* EXPLOSION DE PARTICULES - Effet spectaculaire */}
        {!isVisible && hasBeenVisible && (
          <>
            {/* Grosses particules principales - explosion radiale */}
            {[...Array(24)].map((_, i) => {
              const angle = (i / 24) * Math.PI * 2;
              const distance = 80 + Math.random() * 60;
              const tx = Math.cos(angle) * distance;
              const ty = Math.sin(angle) * distance - 40;
              const delay = i * 0.02;
              const size = 3 + Math.random() * 4;
              const colors = [
                'from-emerald-400 to-teal-400',
                'from-emerald-300 to-emerald-500',
                'from-teal-300 to-teal-500',
                'from-white to-emerald-300',
              ];
              const color = colors[Math.floor(Math.random() * colors.length)];
              
              return (
                <div
                  key={`main-${i}`}
                  className={`absolute bg-gradient-to-br ${color} rounded-full blur-[1px]`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: '50%',
                    left: '50%',
                    animation: `particleExplosion 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards`,
                    '--tx': `${tx}px`,
                    '--ty': `${ty}px`,
                  }}
                />
              );
            })}
            
            {/* Petites particules de fumée */}
            {[...Array(30)].map((_, i) => {
              const angle = Math.random() * Math.PI * 2;
              const distance = 40 + Math.random() * 80;
              const tx = Math.cos(angle) * distance;
              const ty = Math.sin(angle) * distance - Math.random() * 60;
              const delay = Math.random() * 0.15;
              const size = 1 + Math.random() * 2;
              
              return (
                <div
                  key={`smoke-${i}`}
                  className="absolute bg-white/60 rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: '50%',
                    left: '50%',
                    animation: `smokeParticle 1s ease-out ${delay}s forwards`,
                    '--tx': `${tx}px`,
                    '--ty': `${ty}px`,
                  }}
                />
              );
            })}
            
            {/* Grosses étincelles brillantes */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2 + Math.PI / 8;
              const distance = 100 + Math.random() * 40;
              const tx = Math.cos(angle) * distance;
              const ty = Math.sin(angle) * distance - 50;
              const delay = i * 0.04;
              
              return (
                <div
                  key={`spark-${i}`}
                  className="absolute w-1 h-3 bg-gradient-to-b from-white via-emerald-300 to-transparent rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    animation: `sparkExplosion 0.7s ease-out ${delay}s forwards`,
                    '--tx': `${tx}px`,
                    '--ty': `${ty}px`,
                    '--rotation': `${angle * (180 / Math.PI)}deg`,
                  }}
                />
              );
            })}
          </>
        )}
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
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
    </>
  );
}

export default FloatingDock;
