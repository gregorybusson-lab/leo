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
      // Delay to let page render first, then smooth scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 800); // 800ms pour que l'utilisateur voie la page avant le scroll
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
