import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import AnnouncementSection from './components/AnnouncementSection'
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
      
      // Scroll directement sans délai sur desktop et mobile
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Scroll avec un offset pour ne pas voir la flèche et éviter le dock
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - (isMobile ? 80 : 100); // Offset plus important sur desktop
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Petit délai technique pour que le DOM soit prêt
    }
    
    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <ListenSection />
      <BioSection />
      <TeaserSection />
      <AnnouncementSection />
      <SocialSection />
      <Footer />
      <CookieConsent />
      <FloatingDock />
    </div>
  )
}

export default App
