import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandStatement from './components/BrandStatement'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Programs from './components/Programs'
import AppDownload from './components/AppDownload'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <BrandStatement />
      <Stats />
      <Programs />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <AppDownload />
      <Footer />
    </LanguageProvider>
  )
}
