import { useTranslation } from '../i18n/LanguageContext'

export default function AppDownload() {
  const { t } = useTranslation()
  const d = t.download

  return (
    <section
      id="download"
      style={{
        background: 'linear-gradient(135deg, #FF2D6B 0%, #D91D57 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '30%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      </div>

      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.2)', color: '#fff',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: 999, marginBottom: 24,
        }}>
          {d.badge}
        </div>

        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 20 }}>
          {d.title[0]}<br />{d.title[1]}
        </h2>

        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 48 }}>
          {d.subtitle}
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Google Play — Android primeiro */}
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: '#000', color: '#fff',
            padding: '14px 28px', borderRadius: 16,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M3.18 23.76c.3.17.65.19.98.09l11.65-11.65L11.99 8.4 3.18 23.76zm16.8-11.36L17.4 11l-3.78 3.78 2.4 4.16 3.96-2.27c.56-.32.9-.92.9-1.57 0-.64-.34-1.24-.9-1.57zM2.42.26C2.16.54 2 .95 2 1.46V22.6c0 .5.16.9.42 1.18l.06.06 11.74-11.74v-.28L2.48.2 2.42.26zm9.57 9.74L20.55 1.5c-.33-.19-.72-.2-1.06-.04L8.2 6.8l3.79 3.2z"/>
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, opacity: 0.7 }}>{d.googlePlay[0]}</div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{d.googlePlay[1]}</div>
            </div>
          </a>

          {/* App Store — iOS depois */}
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: '#000', color: '#fff',
            padding: '14px 28px', borderRadius: 16,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, opacity: 0.7 }}>{d.appStore[0]}</div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{d.appStore[1]}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
