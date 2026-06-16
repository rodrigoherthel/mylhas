import { useTranslation } from '../i18n/LanguageContext'

const testimonials = [
  {
    name: 'Ana Carolina',
    role: { 'pt-BR': 'Viajante frequente', en: 'Frequent traveler', es: 'Viajera frecuente' },
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: { 'pt-BR': 'Vendi 80 mil milhas que estavam paradas e consegui um preço bem acima do que as corretoras ofereciam. Processo simples e comprador confiável!', en: 'I sold 80k miles that were sitting idle and got a much better price than brokers offered. Simple process and a trustworthy buyer!', es: 'Vendí 80 mil millas que tenía acumuladas y obtuve un precio mucho mejor que las corredoras. Proceso sencillo y comprador confiable.' },
  },
  {
    name: 'Rodrigo Mendes',
    role: { 'pt-BR': 'Empreendedor', en: 'Entrepreneur', es: 'Emprendedor' },
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: { 'pt-BR': 'Comprei milhas para toda minha família viajar nas férias. Economizei mais de R$800 comparado a comprar pelo programa oficial. Recomendo demais!', en: 'I bought miles for my whole family\'s vacation. Saved over R$800 compared to buying through the official program. Highly recommend!', es: 'Compré millas para que toda mi familia viajara en vacaciones. Ahorré más de R$800 comparado con comprar por el programa oficial. ¡Lo recomiendo!' },
  },
  {
    name: 'Fernanda Lima',
    role: { 'pt-BR': 'Consultora de viagens', en: 'Travel consultant', es: 'Consultora de viajes' },
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: { 'pt-BR': 'Indico o Mylhas para todos os meus clientes. É a forma mais transparente e econômica de lidar com milhas. A plataforma é muito bem feita.', en: 'I recommend Mylhas to all my clients. It\'s the most transparent and cost-effective way to handle miles. The platform is very well built.', es: 'Recomiendo Mylhas a todos mis clientes. Es la forma más transparente y económica de gestionar millas. La plataforma está muy bien hecha.' },
  },
  {
    name: 'Carlos Eduardo',
    role: { 'pt-BR': 'Executivo de TI', en: 'IT Executive', es: 'Ejecutivo de TI' },
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: { 'pt-BR': 'Viajo muito a trabalho e acumulo milhas que não consigo usar. O Mylhas me permite converter isso em dinheiro sem complicação.', en: 'I travel a lot for work and accumulate miles I can\'t use. Mylhas lets me convert them into cash without any hassle.', es: 'Viajo mucho por trabajo y acumulo millas que no puedo usar. Mylhas me permite convertirlas en dinero sin complicaciones.' },
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF2D6B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { lang, t } = useTranslation()
  const tm = t.testimonials

  return (
    <section style={{ background: '#FAFAFA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">💬 {tm.badge}</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>{tm.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>{tm.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {testimonials.map((item, i) => (
            <div key={i}
              style={{
                background: '#fff', borderRadius: 20, padding: 28,
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                display: 'flex', flexDirection: 'column', gap: 16,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.10)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              <Stars />
              <p style={{ fontSize: 14, color: '#3D3D5C', lineHeight: 1.7, flexGrow: 1 }}>"{item.text[lang]}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={item.avatar} alt={item.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#0F0F0F' }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: '#6B7280' }}>{item.role[lang]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
