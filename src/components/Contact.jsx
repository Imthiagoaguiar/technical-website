import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__inner">

          <div className="contact__info">
            <p className="section-eyebrow">Get in touch</p>
            <h2 className="section-title">
              Start a <span>Project</span>
            </h2>
            <p className="section-desc">
              Have a challenge worth solving? Let's talk. We respond within
              24 hours and can start in days, not months.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="detail-label">Email</span>
                <a href="mailto:hello@technical.io" className="detail-value">
                  hello@technical.io
                </a>
              </div>
              <div className="contact__detail">
                <span className="detail-label">Phone</span>
                <a href="tel:+55119999999" className="detail-value">
                  +55 11 9999-9999
                </a>
              </div>
              <div className="contact__detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">São Paulo, Brazil — Remote Worldwide</span>
              </div>
            </div>

            <div className="contact__socials">
              {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map((s) => (
                <a key={s} href="#" className="social-link">{s}</a>
              ))}
            </div>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <div className="success-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect x="2" y="2" width="44" height="44" stroke="#0A84FF" strokeWidth="1.5"/>
                    <path d="M14 24L21 31L34 17" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Message Received</h3>
                <p>We'll be in touch within 24 hours.</p>
                <button className="btn-outline" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project brief / partnership / other"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, timeline, and what success looks like..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
