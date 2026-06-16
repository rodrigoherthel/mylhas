import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'
import Navbar from './Navbar'
import Footer from './Footer'

const channelIcons = [
  // General
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  // Support
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  // Privacy
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // Careers
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
]

export default function ContactPage() {
  const { t } = useTranslation()
  const c = t.contact

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          paddingTop: 140, paddingBottom: 80,
          background: 'linear-gradient(180deg, #111 0%, #0A0A0A 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -80, right: -80, width: 440, height: 440,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,45,107,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ maxWidth: 860, padding: '0 24px', position: 'relative' }}>
            <Link
              to="/"
              style={{
                display: 'block',
                fontSize: 13, color: '#FF2D6B', textDecoration: 'none', marginBottom: 32,
                fontWeight: 600, letterSpacing: '0.03em',
              }}
            >
              ← {c.backHome}
            </Link>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,45,107,0.12)', border: '1px solid rgba(255,45,107,0.25)',
              borderRadius: 100, padding: '5px 14px', marginBottom: 28,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#FF2D6B',
                boxShadow: '0 0 8px rgba(255,45,107,0.8)',
              }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#FF2D6B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {c.badge}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900,
              color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: 20,
            }}>
              {c.headline}
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 620 }}>
              {c.intro}
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container" style={{ maxWidth: 860, padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {c.channels.map((ch, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '28px 28px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,45,107,0.3)'
                    e.currentTarget.style.background = 'rgba(255,45,107,0.04)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,45,107,0.12)',
                    border: '1px solid rgba(255,45,107,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FF2D6B', marginBottom: 16,
                  }}>
                    {channelIcons[i]}
                  </div>

                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                    {ch.title}
                  </h3>

                  <a
                    href={`mailto:${ch.email}`}
                    style={{
                      fontSize: 14, color: '#FF2D6B', fontWeight: 600,
                      textDecoration: 'none', display: 'inline-block', marginBottom: ch.note ? 12 : 0,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {ch.email}
                  </a>

                  {ch.note && (
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, margin: 0 }}>
                      {ch.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours + Site */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container" style={{ maxWidth: 860, padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Hours */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '28px 28px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                    {c.hoursTitle}
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                    {c.hoursText}
                  </p>
                </div>
              </div>

              {/* Site */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '28px 28px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                    {c.siteTitle}
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                    {c.siteLabel}:{' '}
                    <span style={{ color: '#FF2D6B', fontWeight: 600 }}>
                      {c.siteUrl}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container" style={{ maxWidth: 860, padding: '0 24px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF2D6B 0%, #D91D57 100%)',
              borderRadius: 24, padding: '48px 44px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 200, height: 200,
                borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: -50, left: -20, width: 160, height: 160,
                borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <img src="/icon.png" alt="Mylhas" style={{ height: 36, width: 36, borderRadius: 10 }} />
                  <span style={{ fontSize: 20, fontWeight: 900, color: '#fff' }}>mylhas</span>
                </div>
                <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                  {c.closingTitle}
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: 540 }}>
                  {c.closingText}
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', marginTop: 20 }}>
                  "{c.tagline}"
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
