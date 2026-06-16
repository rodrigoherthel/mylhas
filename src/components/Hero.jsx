import { useState, useEffect } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const PlaneIcon = ({ color = '#FF2D6B' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill={color}/>
  </svg>
)

const OFFERS = [
  {
    program: 'LATAM Pass',
    iconColor: '#E5091A',
    iconBg: '#FFF0F0',
    qty: '50.000',
    price: 'R$ 0,029',
    savings: 'Economizou R$ 450',
    user: 'João Silva',
  },
  {
    program: 'Smiles',
    iconColor: '#FF6B00',
    iconBg: '#FFF5EE',
    qty: '80.000',
    price: 'R$ 0,021',
    savings: 'Economizou R$ 640',
    user: 'Ana Costa',
  },
  {
    program: 'TudoAzul',
    iconColor: '#0066CC',
    iconBg: '#EEF4FF',
    qty: '30.000',
    price: 'R$ 0,034',
    savings: 'Economizou R$ 330',
    user: 'Carlos Mendes',
  },
]

export default function Hero() {
  const { t } = useTranslation()
  const h = t.hero

  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % OFFERS.length)
        setVisible(true)
      }, 500)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const offer = OFFERS[activeIndex]

  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(135deg, #FF2D6B 0%, #FF5C8A 50%, #FF2D6B 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', top: '30%', left: '45%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', position: 'relative' }}>
        {/* Left content */}
        <div style={{ animation: 'fadeUp 0.7s ease both' }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.2)', color: '#fff',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 999, marginBottom: 24,
          }}>
            {h.badge}
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24 }}>
            {h.headline[0]}<br />
            <span style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 12, padding: '0 12px', display: 'inline-block' }}>
              {h.headline[1]}
            </span>{' '}{h.headline[2]}
          </h1>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            {h.description}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#download" className="btn-white">
              <span>{h.ctaPrimary}</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#how-it-works"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 28px',
                border: '2px solid rgba(255,255,255,0.5)', borderRadius: 999, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right — floating offer card */}
        <div className="hero-card-wrap" style={{ position: 'relative', display: 'flex', justifyContent: 'center', animation: 'fadeUp 0.7s 0.2s ease both', opacity: 0 }}>
          <div className="hero-card-inner" style={{ position: 'relative', width: 340 }}>
            <div style={{ background: '#fff', borderRadius: 24, padding: 28, boxShadow: '0 24px 80px rgba(0,0,0,0.18)', animation: 'float 4s ease-in-out infinite' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: '#FF2D6B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(255,45,107,0.35)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(0.8)',
                  }}>
                    <PlaneIcon color="#fff" />
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 700, fontSize: 14, color: '#0F0F0F',
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(4px)',
                    }}>{offer.program}</div>
                    <div style={{
                      fontSize: 12, color: '#6B7280',
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(4px)',
                    }}>{offer.user}</div>
                  </div>
                </div>
                <span style={{ background: '#ECFDF5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>
                  {h.card.status}
                </span>
              </div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(6px)',
              }}>
                <div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 2 }}>{h.card.qtyLabel}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#0F0F0F', letterSpacing: '-0.02em' }}>{offer.qty}</div>
                  <div style={{ fontSize: 12, color: '#6B7280' }}>{h.card.qtyUnit}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 2 }}>{h.card.priceLabel}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#FF2D6B' }}>{offer.price}</div>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ marginTop: 20, width: '100%', background: '#FF2D6B', color: '#fff', fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 12, border: 'none', cursor: 'pointer' }}
              >
                {h.card.buyBtn}
              </button>
            </div>

            <div style={{ position: 'absolute', top: -20, right: -24, background: '#fff', borderRadius: 16, padding: '10px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 8, animation: 'float 4s 1s ease-in-out infinite, dealPop 0.6s 1s cubic-bezier(0.34,1.56,0.64,1) both' }}>
              <div style={{ width: 32, height: 32, borderRadius: 50, background: '#FFF0F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💸</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0F0F0F' }}>{h.card.dealTitle}</div>
                <div style={{
                  fontSize: 10, color: '#6B7280',
                  transition: 'opacity 0.5s ease, transform 0.5s ease', opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(4px)',
                }}>{offer.savings}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 80L1440 80L1440 40C1200 80 960 20 720 40C480 60 240 10 0 40L0 80Z" fill="#F3F4F6"/>
        </svg>
      </div>

      <style>{`
        @keyframes dealPop {
          from { opacity: 0; transform: scale(0.6) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 768px) {
          #hero { padding: 100px 0 80px !important; }
          #hero .container { grid-template-columns: 1fr !important; gap: 48px !important; }
          #hero .hero-card-wrap { display: flex !important; justify-content: center; padding: 28px 40px 28px; }
          #hero .hero-card-inner { width: 100% !important; max-width: 320px; }
        }
      `}</style>
    </section>
  )
}
