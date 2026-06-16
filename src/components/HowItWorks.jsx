import { useTranslation } from '../i18n/LanguageContext'

export default function HowItWorks() {
  const { t } = useTranslation()
  const hw = t.howItWorks

  return (
    <section id="how-it-works" style={{ background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">{hw.badge}</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>{hw.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>{hw.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 44, left: '12.5%', right: '12.5%',
            height: 1,
            background: 'linear-gradient(90deg, #FF2D6B22, #FF2D6B55, #FF2D6B55, #FF2D6B22)',
            zIndex: 0,
          }} />

          {hw.steps.map((step, i) => (
            <div key={i}
              style={{
                background: '#fff', borderRadius: 20, padding: '28px 24px 28px',
                position: 'relative', zIndex: 1,
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,45,107,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              <div style={{
                fontSize: 42, fontWeight: 900, lineHeight: 1,
                color: '#FF2D6B',
                letterSpacing: '-0.04em',
                marginBottom: 20,
                fontFamily: 'inherit',
              }}>
                #{i + 1}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F0F0F', marginBottom: 10, lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #how-it-works .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #how-it-works .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
