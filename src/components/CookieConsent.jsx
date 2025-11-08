import { useState, useEffect } from 'react';

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Activer Google Analytics si accepté
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3RR8Y6M8LN');
    
    // Charger le script GA
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3RR8Y6M8LN';
    document.head.appendChild(script);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    initializeAnalytics();
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setShowBanner(false);
    
    // Désactiver Clarity si refusé
    if (window.clarity) {
      window.clarity('stop');
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800 shadow-2xl animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Texte */}
          <div className="flex-1 text-sm text-gray-300">
            <p className="mb-2">
              <span className="font-semibold text-white">🍪 Gestion des cookies</span>
            </p>
            <p>
              Nous utilisons des cookies pour analyser le trafic (Microsoft Clarity, Google Analytics) 
              et améliorer votre expérience. Vous pouvez accepter ou refuser leur utilisation.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={refuseCookies}
              className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 
                       text-white text-sm font-medium transition-all duration-300
                       border border-zinc-700 hover:border-zinc-600"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 
                       hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-medium 
                       transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
