import { useTranslation } from '../i18n/LanguageContext'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function parseContent(text) {
  return text.split('\n').map((line, i) => (
    <p key={i} style={{ margin: '2px 0', color: line.startsWith('•') ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.6)', paddingLeft: line.startsWith('•') ? 12 : 0 }}>
      {line || '\u00A0'}
    </p>
  ))
}

export default function LegalPage({ pageKey }) {
  const { t } = useTranslation()
  const legal = t.legal
  const page = legal[pageKey]

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh', paddingTop: 80 }}>
        <div className="container" style={{ maxWidth: 800, padding: '64px 24px 96px' }}>
          {/* Back link */}
          <Link
            to="/"
            style={{
              display: 'block',
              fontSize: 13, color: '#FF2D6B', textDecoration: 'none', marginBottom: 40,
              fontWeight: 600, letterSpacing: '0.03em',
            }}
          >
            ← {legal.backHome}
          </Link>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,45,107,0.12)', border: '1px solid rgba(255,45,107,0.25)',
              borderRadius: 100, padding: '5px 14px', marginBottom: 20,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#FF2D6B',
                boxShadow: '0 0 8px rgba(255,45,107,0.8)',
              }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#FF2D6B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {page.title}
              </span>
            </div>
            {pageKey !== 'careers' && (
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 8 }}>
                {legal.lastUpdated}: {page.lastUpdated ?? new Date('2025-01-01').toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}
          </div>

          {/* Intro */}
          <div style={{
            background: 'rgba(255,45,107,0.08)', border: '1px solid rgba(255,45,107,0.2)',
            borderRadius: 12, padding: '20px 24px', marginBottom: 48,
          }}>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
              {page.intro}
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {page.sections.map((section, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 36 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 14 }}>
                  {section.title}
                </h2>
                <div style={{ fontSize: 14, lineHeight: 1.8 }}>
                  {parseContent(section.content)}
                </div>
              </div>
            ))}
          </div>

          {/* Data deletion CTA if present */}
          {page.ctaEmail && (
            <div style={{ marginTop: 48, textAlign: 'center' }}>
              <a
                href={`mailto:${page.ctaEmailAddr}?subject=${page.ctaSubject || 'Solicita%C3%A7%C3%A3o%20de%20Exclus%C3%A3o%20de%20Dados'}`}
                style={{
                  display: 'inline-block', background: '#FF2D6B', color: '#fff',
                  padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15,
                  textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {page.ctaEmail}
              </a>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>
                {page.ctaEmailAddr}
              </p>
            </div>
          )}

          {/* Contact block — only shown when there's no CTA button */}
          {!page.ctaEmail && (
          <div style={{
            marginTop: 56, padding: '24px', background: 'rgba(255,255,255,0.04)',
            borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
              {legal.contact.title}
            </p>
            <a
              href={`mailto:${legal.contact.email}`}
              style={{ fontSize: 15, color: '#FF2D6B', fontWeight: 600, textDecoration: 'none' }}
            >
              {legal.contact.email}
            </a>
          </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
