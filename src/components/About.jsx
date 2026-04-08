import './About.css'

const values = [
  { label: 'Engineering First', desc: 'We solve problems with precision. No bloat, no shortcuts — just clean, resilient systems.' },
  { label: 'Radical Transparency', desc: 'Clear communication at every stage. You always know where we stand.' },
  { label: 'Speed Without Compromise', desc: 'We move fast without breaking things. Velocity is a discipline, not a gamble.' },
  { label: 'Long-term Partnership', desc: "We don't deliver and disappear. We grow with our clients." },
]

const stack = ['Go', 'Rust', 'Python', 'TypeScript', 'React', 'Kubernetes', 'AWS', 'GCP', 'Kafka', 'PostgreSQL', 'Redis', 'Three.js']

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="about__top">
          <div className="about__intro">
            <p className="section-eyebrow">Who we are</p>
            <h2 className="section-title">
              Built by engineers,<br />
              <span>for engineers</span>
            </h2>
            <p className="about__body">
              Technical was founded on a single conviction: that software should be
              an asset, not a liability. We're a tight-knit team of engineers, architects,
              and data scientists who've shipped products at hyperscale — and we bring
              that same level of craft to every client we work with.
            </p>
            <p className="about__body">
              From 0-to-1 product builds to modernizing decade-old infrastructure,
              we operate at the intersection of speed, reliability, and innovation.
              We don't just write code — we design systems that outlast trends.
            </p>
          </div>

          <div className="about__stats">
            {[
              { n: '2014', l: 'Founded' },
              { n: '50+',  l: 'Projects Shipped' },
              { n: '30+',  l: 'Engineers' },
              { n: '18',   l: 'Countries Served' },
              { n: '99.9%', l: 'Avg. Uptime SLA' },
              { n: '4.9★', l: 'Client Rating' },
            ].map(({ n, l }) => (
              <div className="about__stat" key={l}>
                <span className="about__stat-num">{n}</span>
                <span className="about__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__values">
          <p className="section-eyebrow">Our principles</p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-item" key={v.label}>
                <span className="value-item__num">0{i + 1}</span>
                <h3 className="value-item__title">{v.label}</h3>
                <p className="value-item__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__stack">
          <p className="section-eyebrow">Tech we master</p>
          <div className="stack-list">
            {stack.map((s) => (
              <span className="stack-item" key={s}>{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
