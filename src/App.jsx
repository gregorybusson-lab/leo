import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import TeaserSection from './components/TeaserSection'
import ListenSection from './components/ListenSection'
import BioSection from './components/BioSection'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ShareButton from './components/ShareButton'
import QRCodeGenerator from './components/QRCodeGenerator'
import { initAdvancedAnalytics } from './utils/analytics'

function App() {
  useEffect(() => {
    // Initialize advanced analytics tracking
    const cleanup = initAdvancedAnalytics();
    
    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <TeaserSection />
      <ListenSection />
      <BioSection />
      <SocialSection />
      <Footer />
      <CookieConsent />
      <ShareButton />
      <QRCodeGenerator />
    </div>
  )
}

export default App
