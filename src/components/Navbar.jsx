import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Cases',    href: '#cases' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNav('#home') }}>
          <span className="logo-bracket">[</span>
          TECHNICAL
          <span className="logo-bracket">]</span>
        </a>

        <ul className={`navbar__links${open ? ' open' : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNav(href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta btn-primary" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
          Get Started
        </a>

        <button
          className={`navbar__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
