import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()
  const f = t.footer

  const linkCols = [f.product, f.company, f.support]

  return (
    <footer style={{ background: '#0F0F0F', color: '#fff', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/icon.png" alt="Mylhas" style={{ height: 40, width: 40, borderRadius: 10 }} />
              <span style={{ fontSize: 22, fontWeight: 900, color: '#FF2D6B' }}>mylhas</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              {f.description}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'IG' }, { label: 'FB' }, { label: 'X' },
              ].map((s, i) => (
                <a key={i} href="#"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FF2D6B'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {f.cols.map((title, ci) => (
            <div key={ci}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {linkCols[ci].map((link, j) => (
                  <li key={j}>
                    <a href="#"
                      style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Mylhas. {f.rights}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
