import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './Hero.css'

export default function Hero() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x03070F, 0.025)

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 4, 14)
    camera.lookAt(0, 0, 0)

    // ── Tron grid (floor) ─────────────────────────────────────
    const grid = new THREE.GridHelper(120, 60, 0x0A84FF, 0x031530)
    grid.position.y = -7
    scene.add(grid)

    // Second, tighter grid for depth
    const grid2 = new THREE.GridHelper(120, 120, 0x031530, 0x020C1A)
    grid2.position.y = -7.02
    scene.add(grid2)

    // ── Central compound object ───────────────────────────────
    const group = new THREE.Group()

    const icoGeo   = new THREE.IcosahedronGeometry(2.8, 1)
    const icoEdges = new THREE.EdgesGeometry(icoGeo)
    const icoMat   = new THREE.LineBasicMaterial({ color: 0x0A84FF })
    const ico      = new THREE.LineSegments(icoEdges, icoMat)
    group.add(ico)

    const cubeGeo   = new THREE.BoxGeometry(2, 2, 2)
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo)
    const cubeMat   = new THREE.LineBasicMaterial({ color: 0x00D4FF })
    const cube      = new THREE.LineSegments(cubeEdges, cubeMat)
    group.add(cube)

    const octGeo   = new THREE.OctahedronGeometry(1.2)
    const octEdges = new THREE.EdgesGeometry(octGeo)
    const octMat   = new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.4 })
    const oct      = new THREE.LineSegments(octEdges, octMat)
    group.add(oct)

    scene.add(group)

    // ── Orbiting rings ────────────────────────────────────────
    const ringGroup = new THREE.Group()

    const makeRing = (r, tilt, color) => {
      const geo  = new THREE.TorusGeometry(r, 0.015, 2, 80)
      const mat  = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5 })
      const ring = new THREE.Mesh(geo, mat)
      ring.rotation.x = tilt
      return ring
    }

    ringGroup.add(makeRing(4.0, Math.PI / 2.4, 0x0A84FF))
    ringGroup.add(makeRing(5.0, Math.PI / 3,   0x003D7A))
    ringGroup.add(makeRing(3.2, Math.PI / 1.6, 0x00D4FF))
    scene.add(ringGroup)

    // ── Particles ─────────────────────────────────────────────
    const pCount     = 3500
    const pPositions = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3]     = (Math.random() - 0.5) * 90
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 50
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 90
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
    const pMat       = new THREE.PointsMaterial({ color: 0x0A84FF, size: 0.07, transparent: true, opacity: 0.55 })
    const particles  = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ── Vertical light pillars ────────────────────────────────
    const pillarMat = new THREE.LineBasicMaterial({ color: 0x0A84FF, transparent: true, opacity: 0.15 })
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const r     = 8 + Math.random() * 6
      const x     = Math.cos(angle) * r
      const z     = Math.sin(angle) * r
      const pts   = [new THREE.Vector3(x, -7, z), new THREE.Vector3(x, 20, z)]
      const geo   = new THREE.BufferGeometry().setFromPoints(pts)
      scene.add(new THREE.Line(geo, pillarMat))
    }

    // ── Mouse parallax ────────────────────────────────────────
    let mx = 0, my = 0
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Animate ───────────────────────────────────────────────
    let raf
    let t = 0

    const animate = () => {
      raf = requestAnimationFrame(animate)
      t  += 0.005

      ico.rotation.x    =  t * 0.28
      ico.rotation.y    =  t * 0.46
      cube.rotation.x   = -t * 0.6
      cube.rotation.y   =  t * 0.35
      cube.rotation.z   =  t * 0.5
      oct.rotation.x    =  t * 0.9
      oct.rotation.z    = -t * 0.6

      ringGroup.rotation.y = t * 0.2
      ringGroup.rotation.x = Math.sin(t * 0.3) * 0.1

      particles.rotation.y = t * 0.04

      // Smooth camera parallax
      camera.position.x += (mx * 2.5 - camera.position.x) * 0.03
      camera.position.y += (-my * 1.5 + 4 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div ref={mountRef} className="hero__canvas" />

      <div className="hero__overlay">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="eyebrow-dot" />
            Pioneering the digital frontier
          </p>

          <h1 className="hero__title">
            <span className="glitch" data-text="TECHNICAL">TECHNICAL</span>
          </h1>

          <p className="hero__tagline">We are tech, we are the future.</p>

          <p className="hero__sub">
            Building the systems that power tomorrow —<br />
            from AI infrastructure to mission-critical software.
          </p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('services')}>
              Explore Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn-outline" onClick={() => scrollTo('cases')}>
              View Cases
            </button>
          </div>

          <div className="hero__stats">
            {[['50+', 'Projects'], ['10+', 'Years'], ['99.9%', 'Uptime'], ['30+', 'Engineers']].map(([n, l]) => (
              <div className="hero__stat" key={l}>
                <span className="hero__stat-num">{n}</span>
                <span className="hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" onClick={() => scrollTo('services')}>
        <span>SCROLL</span>
        <div className="scroll-line"><div className="scroll-dot" /></div>
      </div>
    </section>
  )
}
