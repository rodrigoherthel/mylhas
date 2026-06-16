import { useTranslation } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useTranslation()
  const h = t.hero

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

          <div style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            {h.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 26, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating offer card */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', animation: 'fadeUp 0.7s 0.2s ease both', opacity: 0 }}>
          <div style={{ position: 'relative', width: 340 }}>
            <div style={{ background: '#fff', borderRadius: 24, padding: 28, boxShadow: '0 24px 80px rgba(0,0,0,0.18)', animation: 'float 4s ease-in-out infinite' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img
                    src="/icon.png"
                    alt="Mylhas"
                    style={{ width: 40, height: 40, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 8px rgba(255,45,107,0.25)' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0F0F0F' }}>{h.card.program}</div>
                    <div style={{ fontSize: 12, color: '#6B7280' }}>{h.card.user}</div>
                  </div>
                </div>
                <span style={{ background: '#ECFDF5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>
                  {h.card.status}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 2 }}>{h.card.qtyLabel}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#0F0F0F', letterSpacing: '-0.02em' }}>50.000</div>
                  <div style={{ fontSize: 12, color: '#6B7280' }}>{h.card.qtyUnit}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 2 }}>{h.card.priceLabel}</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#FF2D6B' }}>R$ 0,029</div>
                </div>
              </div>
              <button style={{ marginTop: 20, width: '100%', background: '#FF2D6B', color: '#fff', fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 12, border: 'none', cursor: 'pointer' }}>
                {h.card.buyBtn}
              </button>
            </div>

            <div style={{ position: 'absolute', top: -20, right: -24, background: '#fff', borderRadius: 16, padding: '10px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 8, animation: 'float 4s 1s ease-in-out infinite' }}>
              <div style={{ width: 32, height: 32, borderRadius: 50, background: '#FFF0F4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💸</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0F0F0F' }}>{h.card.dealTitle}</div>
                <div style={{ fontSize: 10, color: '#6B7280' }}>{h.card.dealSub}</div>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: -20, left: -24, background: '#fff', borderRadius: 16, padding: '10px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 8, animation: 'float 4s 2s ease-in-out infinite' }}>
              <div style={{ width: 32, height: 32, borderRadius: 50, background: '#F0FFF4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🔒</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0F0F0F' }}>{h.card.secTitle}</div>
                <div style={{ fontSize: 10, color: '#6B7280' }}>{h.card.secSub}</div>
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
        @media (max-width: 768px) {
          #hero .container { grid-template-columns: 1fr !important; }
          #hero .container > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  )
}
