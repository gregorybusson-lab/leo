import { useEffect } from 'react'
import AvantPremiereSection from './components/AvantPremiereSection'
import ClipTeaserSection from './components/ClipTeaserSection'
import TeaserSection from './components/TeaserSection'
import ListenSection from './components/ListenSection'
import BioSection from './components/BioSection'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import FloatingDock from './components/FloatingDock'
import { initAdvancedAnalytics } from './utils/analytics'

function App() {
  useEffect(() => {
    // Initialize advanced analytics tracking
    const cleanup = initAdvancedAnalytics();
    
    // Handle anchor links on page load
    const hash = window.location.hash;
    if (hash) {
      const isMobile = window.innerWidth < 768;
      const delay = isMobile ? 0 : 800; // MOBILE: instant, DESKTOP: 800ms pour voir la page d'abord
      
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // DESKTOP: REMONTE BEAUCOUP pour montrer le titre "ÉCOUTER L'EP" + player
          // MOBILE: DESCEND pour montrer UNIQUEMENT le player (pas le titre)
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition + (isMobile ? 150 : -200); // MOBILE: +150, DESKTOP: -200 (remonte BEAUCOUP plus)
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, delay);
    }
    
    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(/leo-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/75 to-black"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

        <div className="relative z-10">
          <AvantPremiereSection />
          <ClipTeaserSection />
        </div>
      </div>
      <ListenSection />
      <TeaserSection />
      <BioSection />
      <SocialSection />
      <Footer />
      <CookieConsent />
      <FloatingDock />
    </div>
  )
}

export default App
