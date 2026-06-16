import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid #F3F4F6', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '22px 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left', gap: 16,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 16, color: '#0F0F0F', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
          background: open ? '#FF2D6B' : '#F3F4F6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
          color: open ? '#fff' : '#6B7280',
          fontSize: 18, fontWeight: 300,
        }}>
          {open ? '−' : '+'}
        </span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.7, paddingBottom: 22 }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useTranslation()
  const faq = t.faq

  return (
    <section id="faq" style={{ background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="section-label">❓ {faq.badge}</div>
            <h2 className="section-title">{faq.title}</h2>
            <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, marginBottom: 32 }}>{faq.subtitle}</p>
            <a href="mailto:suporte@mylhas.com.br"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: '#FF2D6B', fontWeight: 700, fontSize: 14,
                padding: '10px 20px', border: '2px solid #FF2D6B', borderRadius: 999, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FF2D6B'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FF2D6B' }}
            >
              {faq.supportBtn}
            </a>
          </div>

          <div>
            {faq.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #faq .container > div { grid-template-columns: 1fr !important; }
          #faq .container > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
