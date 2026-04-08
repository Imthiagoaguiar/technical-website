import './Services.css'

const services = [
  {
    id: '01',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="14" height="14" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="22" y="4" width="14" height="14" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="4" y="22" width="14" height="14" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="29" cy="29" r="7" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M26 29H32M29 26V32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Intelligent systems that learn, adapt, and evolve. From predictive models to autonomous decision engines built for scale.',
    tags: ['LLMs', 'MLOps', 'Data Pipelines'],
  },
  {
    id: '02',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28L20 8L32 28H8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M14 28V34H26V28" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 20H8M32 20H36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cloud Architecture',
    desc: 'Scalable, fault-tolerant infrastructure engineered for peak performance. Multi-cloud strategies with zero-downtime deployments.',
    tags: ['AWS', 'Kubernetes', 'IaC'],
  },
  {
    id: '03',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L34 10V20C34 28 27 34.5 20 37C13 34.5 6 28 6 20V10L20 4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Cybersecurity',
    desc: 'Zero-trust architecture, threat intelligence, and automated incident response. Security baked in from day one.',
    tags: ['Pentesting', 'SOC', 'Compliance'],
  },
  {
    id: '04',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 20L11 23L14 26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 20L29 23L26 26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 16L18 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Software Development',
    desc: 'Custom, high-performance software engineered for your exact needs. Fast iteration, clean architecture, built to last.',
    tags: ['Full-Stack', 'APIs', 'Microservices'],
  },
  {
    id: '05',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M20 4V8M20 32V36M4 20H8M32 20H36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M9.17 9.17L12 12M28 28L30.83 30.83M9.17 30.83L12 28M28 12L30.83 9.17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="currentColor"/>
      </svg>
    ),
    title: 'IoT & Embedded',
    desc: 'Connecting physical and digital worlds. Real-time sensor networks, edge computing, and industrial automation solutions.',
    tags: ['Edge AI', 'RTOS', 'Protocols'],
  },
  {
    id: '06',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="32" height="22" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M12 12V8C12 6 14 6 14 6H26C26 6 28 6 28 8V12" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 22H36" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="20" cy="27" r="2" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'Data Engineering',
    desc: 'Real-time analytics, data lakes, and intelligent dashboards. Transform raw data into strategic advantage.',
    tags: ['Kafka', 'Spark', 'BI'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <p className="section-eyebrow">What we do</p>
          <h2 className="section-title">
            Core <span>Capabilities</span>
          </h2>
          <p className="section-desc">
            End-to-end technology solutions designed to accelerate growth,
            reduce complexity, and future-proof your operations.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div className="service-card" key={s.id}>
              <div className="service-card__id">{s.id}</div>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="service-card__corner service-card__corner--tl" />
              <div className="service-card__corner service-card__corner--br" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
