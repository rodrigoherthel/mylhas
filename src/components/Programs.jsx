import { useTranslation } from '../i18n/LanguageContext'

const programs = [
  {
    name: 'LATAM Pass',
    color: '#F9A8B8',
    bg: '#FFF0F4',
    image: '/programs/latam-pass.svg',
    fallbackBg: '#F9A8B8',
    fallbackText: 'L',
  },
  {
    name: 'Smiles',
    color: '#F9A8B8',
    bg: '#FFF0F4',
    image: '/programs/smiles.svg',
    fallbackBg: '#F9A8B8',
    fallbackText: 'S',
  },
  {
    name: 'TudoAzul',
    color: '#F9A8B8',
    bg: '#FFF0F4',
    image: '/programs/tudoazul.svg',
    fallbackBg: '#F9A8B8',
    fallbackText: 'A',
  },
  {
    name: 'Livelo',
    color: '#F9A8B8',
    bg: '#FFF0F4',
    image: '/programs/livelo.svg',
    fallbackBg: '#F9A8B8',
    fallbackText: 'L',
  },
  {
    name: 'Esfera',
    color: '#F9A8B8',
    bg: '#FFF0F4',
    image: '/programs/esfera.svg',
    fallbackBg: '#F9A8B8',
    fallbackText: 'E',
  },
  {
    name: 'Clube Smiles',
    color: '#F9A8B8',
    bg: '#FFF0F4',
    image: '/programs/clube-smiles.svg',
    fallbackBg: '#F9A8B8',
    fallbackText: 'CS',
  },
]

function ProgramIcon({ program }) {
  const handleError = (e) => {
    e.currentTarget.style.display = 'none'
    e.currentTarget.nextSibling.style.display = 'flex'
  }

  return (
    <div style={{ width: 36, height: 36, borderRadius: 8, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
      <img
        src={program.image}
        alt={program.name}
        onError={handleError}
        style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 8, background: '#fff', display: 'block' }}
      />
      <div style={{
        display: 'none', width: 36, height: 36, borderRadius: 8,
        background: program.fallbackBg,
        alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 800, fontSize: 11,
        position: 'absolute', top: 0, left: 0,
      }}>
        {program.fallbackText}
      </div>
    </div>
  )
}

export default function Programs() {
  const { t } = useTranslation()

  return (
    <section id="programs" style={{ background: '#fff', padding: '64px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {t.programs.title}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          {programs.map((p, i) => (
            <div key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 18px', borderRadius: 999,
                background: p.bg, border: `1.5px solid ${p.color}22`,
                transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 4px 20px ${p.color}22` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <ProgramIcon program={p} />
              <span style={{ fontWeight: 600, fontSize: 14, color: '#0F0F0F' }}>{p.name}</span>
            </div>
          ))}

          <div style={{ padding: '10px 18px', borderRadius: 999, background: '#F3F4F6', border: '1.5px dashed #D1D5DB', fontWeight: 600, fontSize: 14, color: '#6B7280' }}>
            {t.programs.more}
          </div>
        </div>
      </div>
    </section>
  )
}
