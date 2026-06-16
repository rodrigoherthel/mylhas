export default function BrandStatement() {
  return (
    <section style={{
      background: '#F3F4F6',
      paddingTop: 72,
      paddingBottom: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Radial glow behind logo */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 480, height: 280,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,45,107,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Soft edge fade */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, #F3F4F6 85%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 560, margin: '0 auto', paddingBottom: 56 }}>
        <img
          src="/text9-2-2-5-2.png"
          alt="Mylhas — suas milhas, bons negócios"
          style={{ height: 120, width: 'auto', display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Bottom wave → white */}
      <div style={{ position: 'relative', bottom: -2, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 64L1440 64L1440 32C1200 64 960 8 720 32C480 56 240 4 0 32L0 64Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
