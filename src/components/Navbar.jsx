import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'

const LANGS = [
  { code: 'pt-BR', label: 'Português' },
  { code: 'en',    label: 'English' },
  { code: 'es',    label: 'Español' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  function handleAnchor(e, anchor) {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${anchor}`)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setLangOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const current = LANGS.find(l => l.code === lang)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s, box-shadow 0.3s',
      background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="/" onClick={e => handleAnchor(e, 'hero')} style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/icon.png"
            alt="Mylhas"
            style={{
              height: 56, width: 56, borderRadius: 14, objectFit: 'cover',
              boxShadow: scrolled ? '0 4px 16px rgba(255,45,107,0.30)' : '0 4px 24px rgba(0,0,0,0.25)',
              transition: 'box-shadow 0.3s',
            }}
          />
        </a>

        {/* Nav links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[
            [t.nav.howItWorks, 'how-it-works'],
            [t.nav.benefits, 'benefits'],
            [t.nav.faq, 'faq'],
          ].map(([label, anchor]) => (
            <a
              key={anchor}
              href={`/#${anchor}`}
              onClick={e => handleAnchor(e, anchor)}
              className={scrolled ? 'nav-link nav-link--dark' : 'nav-link nav-link--light'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* Language switcher */}
          <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 14px', borderRadius: 999,
                background: scrolled ? '#F3F4F6' : 'rgba(255,255,255,0.18)',
                border: scrolled ? '1.5px solid #E5E7EB' : '1.5px solid rgba(255,255,255,0.35)',
                color: scrolled ? '#3D3D5C' : '#fff',
                fontSize: 13, fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <span>{current.label}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: '#fff', borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                border: '1px solid #F3F4F6',
                overflow: 'hidden', minWidth: 130, zIndex: 200,
              }}>
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false) }}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                      padding: '12px 16px', background: l.code === lang ? '#FFF0F4' : '#fff',
                      border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600,
                      color: l.code === lang ? '#FF2D6B' : '#3D3D5C',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (l.code !== lang) e.currentTarget.style.background = '#FAFAFA' }}
                    onMouseLeave={e => { if (l.code !== lang) e.currentTarget.style.background = '#fff' }}
                  >
                    <span>{l.label}</span>
                    {l.code === lang && (
                      <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF2D6B" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="/#download" onClick={e => handleAnchor(e, 'download')} className="btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
            {t.nav.download}
          </a>
        </div>
      </div>

      <style>{`
        .nav-link {
          font-size: 14px; font-weight: 600; text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link--light { color: rgba(255,255,255,0.9); }
        .nav-link--light:hover { color: #fff; opacity: 0.75; }
        .nav-link--dark { color: #3D3D5C; }
        .nav-link--dark:hover { color: #FF2D6B; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
