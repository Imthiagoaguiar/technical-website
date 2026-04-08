import './Footer.css'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Cases',    href: '#cases' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

const services = [
  'AI & Machine Learning',
  'Cloud Architecture',
  'Cybersecurity',
  'Software Development',
  'IoT & Embedded',
  'Data Engineering',
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__top-line" />

      <div className="container footer__main">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('#home') }}>
            <span className="logo-bracket">[</span>TECHNICAL<span className="logo-bracket">]</span>
          </a>
          <p className="footer__tagline">We are tech, we are the future.</p>
          <p className="footer__desc">
            Building resilient, high-performance systems for companies that
            refuse to compromise on quality.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Navigation</h4>
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href) }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Connect</h4>
          <ul>
            {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble', 'hello@technical.io'].map((s) => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Technical. All rights reserved.</p>
        <p className="footer__credits">
          Built with precision &amp; Three.js
        </p>
      </div>
    </footer>
  )
}
