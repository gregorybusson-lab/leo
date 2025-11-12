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
    // Charger le script Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-3RR8Y6M8LN';
    document.head.appendChild(gaScript);
    
    // Initialiser Google Analytics
    gaScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-3RR8Y6M8LN');
    };
    
    // Charger Microsoft Clarity avec délai pour s'assurer que les styles sont chargés
    // Attendre que le DOM et les styles soient complètement chargés
    if (document.readyState === 'complete') {
      // Si déjà chargé, attendre un peu pour s'assurer que Vite a injecté les styles
      setTimeout(() => {
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "u30783r8rh");
      }, 500);
    } else {
      // Sinon attendre l'événement load
      window.addEventListener('load', () => {
        setTimeout(() => {
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "u30783r8rh");
        }, 500);
      });
    }
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    
    // Track cookie acceptance in dataLayer (before gtag is loaded)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cookie_accept',
      'event_category': 'consent',
      'event_label': 'accepted'
    });
    
    setShowBanner(false);
    initializeAnalytics();
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused');
    
    // Track cookie refusal in dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cookie_refuse',
      'event_category': 'consent',
      'event_label': 'refused'
    });
    
    setShowBanner(false);
    // Aucun tracking ne sera chargé
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
