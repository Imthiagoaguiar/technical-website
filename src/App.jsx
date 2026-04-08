import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
