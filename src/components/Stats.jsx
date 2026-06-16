import { useTranslation } from '../i18n/LanguageContext'

export default function Stats() {
  const { t } = useTranslation()

  return (
    <section style={{ padding: '0 0 80px', background: '#fff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${t.stats.length}, 1fr)`,
          gap: 1,
          background: '#E5E7EB',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          {t.stats.map((s, i) => (
            <div key={i}
              style={{ background: '#fff', padding: '36px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8, transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = '#FFF0F4'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#FF2D6B', letterSpacing: '-0.03em' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#6B7280', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
