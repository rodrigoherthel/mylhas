import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandStatement from './components/BrandStatement'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Programs from './components/Programs'
import AppDownload from './components/AppDownload'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import DataDeletion from './components/DataDeletion'
import CareersPage from './components/CareersPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    // aguarda render das secoes antes de rolar
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <>
      <Navbar />
      <Hero />
      <BrandStatement />
      <Programs />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <AppDownload />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          <Route path="/exclusao-de-dados" element={<DataDeletion />} />
          <Route path="/trabalhe-conosco" element={<CareersPage />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
