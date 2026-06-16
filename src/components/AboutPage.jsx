import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'
import Navbar from './Navbar'
import Footer from './Footer'

const valueIcons = [
  // Transparency
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  // Security
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // Innovation
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  // Trust
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
]

export default function AboutPage() {
  const { t } = useTranslation()
  const a = t.about

  return (
    <>
      <Navbar />
      <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          paddingTop: 140, paddingBottom: 100,
          background: 'linear-gradient(180deg, #111 0%, #0A0A0A 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative blobs */}
          <div style={{
            position: 'absolute', top: -80, right: -80, width: 500, height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,45,107,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -60, width: 340, height: 340,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,45,107,0.05) 0%, transparent 70%)',
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
              ← {a.backHome}
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
                {a.badge}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900,
              color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em',
              marginBottom: 32, maxWidth: 760,
            }}>
              {a.headline}
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 680 }}>
              {a.story.map((p, i) => (
                <p key={i} style={{
                  fontSize: 16, color: i === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)',
                  lineHeight: 1.75, fontWeight: i === 0 ? 500 : 400,
                }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ padding: '80px 0', background: '#0A0A0A' }}>
          <div className="container" style={{ maxWidth: 960, padding: '0 24px' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
            }}>
              {[a.mission, a.vision].map((item, i) => (
                <div key={i} style={{
                  background: i === 0
                    ? 'linear-gradient(135deg, rgba(255,45,107,0.14) 0%, rgba(255,45,107,0.05) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: i === 0
                    ? '1px solid rgba(255,45,107,0.25)'
                    : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20, padding: '36px 32px',
                }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: '#FF2D6B',
                    background: 'rgba(255,45,107,0.1)', borderRadius: 100,
                    padding: '4px 12px', marginBottom: 20,
                  }}>
                    {item.label}
                  </span>
                  <p style={{
                    fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontWeight: 400,
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '80px 0', background: '#0D0D0D' }}>
          <div className="container" style={{ maxWidth: 960, padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{
                fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900,
                color: '#fff', letterSpacing: '-0.02em',
              }}>
                {a.valuesTitle}
              </h2>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
            }}>
              {a.values.map((v, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: '28px 28px',
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,45,107,0.3)'
                    e.currentTarget.style.background = 'rgba(255,45,107,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(255,45,107,0.12)',
                    border: '1px solid rgba(255,45,107,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FF2D6B',
                  }}>
                    {valueIcons[i]}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                      {v.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section style={{ padding: '80px 0', background: '#0A0A0A' }}>
          <div className="container" style={{ maxWidth: 960, padding: '0 24px' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
              alignItems: 'center',
            }}>
              <div>
                <h2 style={{
                  fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900,
                  color: '#fff', letterSpacing: '-0.02em', marginBottom: 20,
                }}>
                  {a.whatTitle}
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                  {a.whatText}
                </p>
              </div>

              {/* Visual accent */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { n: '01', text: a.values[0]?.title },
                  { n: '02', text: a.values[2]?.title },
                  { n: '03', text: a.values[1]?.title },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.07)', padding: '16px 20px',
                  }}>
                    <span style={{
                      fontSize: 11, fontWeight: 900, color: '#FF2D6B',
                      letterSpacing: '0.08em', minWidth: 28,
                    }}>
                      {item.n}
                    </span>
                    <div style={{
                      flex: 1, height: 1,
                      background: 'linear-gradient(90deg, rgba(255,45,107,0.4) 0%, transparent 100%)',
                    }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section style={{ padding: '80px 0 0' }}>
          <div className="container" style={{ maxWidth: 960, padding: '0 24px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF2D6B 0%, #D91D57 100%)',
              borderRadius: 24, padding: '56px 48px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 220, height: 220,
                borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: -60, left: -20, width: 180, height: 180,
                borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', maxWidth: 680 }}>
                <h2 style={{
                  fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 900,
                  color: '#fff', letterSpacing: '-0.02em', marginBottom: 16,
                }}>
                  {a.commitmentTitle}
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                  {a.commitmentText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section style={{ padding: '80px 0 96px', textAlign: 'center' }}>
          <div className="container" style={{ padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
              <img src="/icon.png" alt="Mylhas" style={{ height: 44, width: 44, borderRadius: 12 }} />
              <span style={{ fontSize: 26, fontWeight: 900, color: '#FF2D6B' }}>mylhas</span>
            </div>
            <p style={{
              fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 700,
              color: 'rgba(255,255,255,0.4)', fontStyle: 'italic',
            }}>
              "{a.tagline}"
            </p>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 720px) {
          .about-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
