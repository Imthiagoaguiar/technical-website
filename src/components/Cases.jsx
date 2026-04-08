import './Cases.css'

const cases = [
  {
    id: '001',
    client: 'NexoPay',
    sector: 'FinTech',
    project: 'Real-time Payment Platform',
    desc: 'Rebuilt legacy payment infrastructure to handle 2M+ daily transactions with sub-100ms latency and PCI-DSS compliance.',
    result: '340% throughput increase',
    gradient: 'linear-gradient(135deg, #0A1628 0%, #051040 50%, #0A2060 100%)',
    accent: '#0A84FF',
    tags: ['Microservices', 'Kafka', 'Go'],
  },
  {
    id: '002',
    client: 'MedCore',
    sector: 'HealthTech',
    project: 'AI Diagnostic Engine',
    desc: 'Computer vision model for early-stage anomaly detection integrated directly into clinical workflows at 40+ hospitals.',
    result: '94.7% diagnostic accuracy',
    gradient: 'linear-gradient(135deg, #0A1628 0%, #081A30 50%, #0D2540 100%)',
    accent: '#00D4FF',
    tags: ['Computer Vision', 'HIPAA', 'Python'],
  },
  {
    id: '003',
    client: 'OrbitLogix',
    sector: 'E-Commerce',
    project: 'Predictive Inventory System',
    desc: 'ML-driven demand forecasting and automated restocking engine reducing overstock by 60% across 200k+ SKUs.',
    result: '$4.2M annual savings',
    gradient: 'linear-gradient(135deg, #0A1628 0%, #071528 50%, #0A1E38 100%)',
    accent: '#0A84FF',
    tags: ['ML Forecasting', 'React', 'AWS'],
  },
  {
    id: '004',
    client: 'UrbanPulse',
    sector: 'Smart City',
    project: 'IoT Urban Dashboard',
    desc: 'Unified monitoring platform aggregating 12k+ sensors across traffic, energy, and environmental systems city-wide.',
    result: '28% energy reduction',
    gradient: 'linear-gradient(135deg, #0A1628 0%, #061830 50%, #041530 100%)',
    accent: '#00D4FF',
    tags: ['IoT', 'Real-time', 'WebGL'],
  },
]

export default function Cases() {
  return (
    <section id="cases" className="cases">
      <div className="container">
        <div className="cases__header">
          <p className="section-eyebrow">Track record</p>
          <h2 className="section-title">
            Selected <span>Cases</span>
          </h2>
          <p className="section-desc">
            Real problems, measurable outcomes. A sample of what we've built
            and the impact it created.
          </p>
        </div>

        <div className="cases__grid">
          {cases.map((c) => (
            <article className="case-card" key={c.id} style={{ '--accent': c.accent }}>
              <div className="case-card__visual" style={{ background: c.gradient }}>
                <div className="case-card__visual-grid" />
                <span className="case-card__id">{c.id}</span>
                <span className="case-card__sector">{c.sector}</span>
              </div>

              <div className="case-card__body">
                <p className="case-card__client">{c.client}</p>
                <h3 className="case-card__project">{c.project}</h3>
                <p className="case-card__desc">{c.desc}</p>

                <div className="case-card__result">
                  <span className="result-icon">&#x25B6;</span>
                  {c.result}
                </div>

                <div className="case-card__tags">
                  {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
