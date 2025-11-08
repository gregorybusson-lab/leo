import HeroSection from './components/HeroSection'
import TeaserSection from './components/TeaserSection'
import ListenSection from './components/ListenSection'
import BioSection from './components/BioSection'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <TeaserSection />
      <ListenSection />
      <BioSection />
      <SocialSection />
      <Footer />
    </div>
  )
}

export default App
