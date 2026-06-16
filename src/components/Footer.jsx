import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()
  const f = t.footer

  const legalLinks = [
    { label: f.privacyLink, to: '/politica-de-privacidade' },
    { label: f.termsLink, to: '/termos-de-uso' },
    { label: f.dataDeletionLink, to: '/exclusao-de-dados' },
  ]

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
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280 }}>
              {f.description}
            </p>
          </div>

          {/* Produto e Empresa */}
          {[{ title: f.cols[0], links: f.product }, { title: f.cols[1], links: f.company }].map(({ title, links }, ci) => (
            <div key={ci}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link, j) => {
                  const label = typeof link === 'object' ? link.label : link
                  const to = typeof link === 'object' ? link.to : null
                  return (
                    <li key={j}>
                      {to && to.startsWith('/') && !to.includes('#') ? (
                        <Link
                          to={to}
                          style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#FF2D6B'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                        >
                          {label}
                        </Link>
                      ) : to ? (
                        <a
                          href={to}
                          style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#FF2D6B'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                        >
                          {label}
                        </a>
                      ) : (
                        <a href="#"
                          style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          {/* Suporte */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              {f.cols[2]}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {f.supportBase.map((item, j) => (
                <li key={j}>
                  <Link
                    to={item.to}
                    style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FF2D6B'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item, i) => (
                <li key={`legal-${i}`}>
                  <Link
                    to={item.to}
                    style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FF2D6B'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
