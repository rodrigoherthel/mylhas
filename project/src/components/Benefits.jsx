import { useTranslation } from '../i18n/LanguageContext'

export default function Benefits() {
  const { t } = useTranslation()
  const b = t.benefits

  return (
    <section id="benefits" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="section-label">🎯 {b.badge}</div>
            <h2 className="section-title">{b.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>{b.subtitle}</p>
            <a href="#download" className="btn-primary">{b.cta}</a>
          </div>

          {/* Right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {b.items.map((item, i) => (
              <div key={i}
                style={{
                  padding: 24, borderRadius: 20,
                  border: '1.5px solid #F3F4F6', background: '#fff',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF2D6B'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,45,107,0.10)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
              >
                <span style={{ fontSize: 28, display: 'block', marginBottom: 10 }}>{item.icon}</span>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#FF2D6B', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>{item.tag}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F0F0F', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #benefits .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
