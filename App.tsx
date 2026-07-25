import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const youtubeUrl = 'https://www.youtube.com/@holamundoarg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const message = data.get('message') || ''
    const subject = encodeURIComponent(`Mensaje desde mi portfolio — ${name}`)
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:tuemail@ejemplo.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio" aria-label="Inicio de Rubencito">
          <span className="brand-mark">&lt;/&gt;</span> rubencito<span className="brand-dot">.</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">
          <span /> <span />
        </button>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
          <a href="#camino" onClick={() => setMenuOpen(false)}>Mi camino</a>
          <a href="#canal" onClick={() => setMenuOpen(false)}>El canal</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav> rubenesposito17-huerubenesposito17-huerubenesposito17-hue
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> NUEVA ETAPA · NUEVOS DESAFÍOS</p>
          <h1>Aprender a programar<br /><em>no tiene fecha de vencimiento.</em></h1>
          <p className="intro">Soy Rubencito. Estoy aprendiendo programación después de los 50 y comparto el camino, paso a paso, para llegar a trabajar de forma freelance.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={youtubeUrl} target="_blank" rel="noreferrer">Ver el canal <span>↗</span></a>
            <a className="text-link" href="#camino">Conocé mi historia <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustración de una persona aprendiendo programación">
          <div className="sun" />
          <div className="code-window">
            <div className="window-top"><i /><i /><i /><b>mi_nueva_etapa.js</b></div>
            <p><span>01</span><strong>const</strong> futuro = <em>'posible'</em>;</p>
            <p><span>02</span><strong>if</strong> (edad <b>&gt; 50</b>) {'{'}</p>
            <p><span>03</span>&nbsp;&nbsp;seguirAprendiendo();</p>
            <p><span>04</span>{'}'}</p>
            <div className="cursor" />
          </div>
          <div className="orbit orbit-one">HTML</div><div className="orbit orbit-two">CSS</div><div className="orbit orbit-three">JS</div>
          <div className="desk"><div className="laptop"><div className="screen">&lt; hola mundo /&gt;</div></div><div className="coffee">☕</div></div>
        </div>
      </section>

      <section className="statement">
        <div className="shell"><p>“No llegué tarde. Llegué con ganas.”</p><span>— RUBENCITO</span></div>
      </section>

      <section className="journey shell" id="camino">
        <div className="section-heading"><p className="eyebrow">01 · MI CAMINO</p><h2>Una meta clara:<br />vivir de lo que creo.</h2></div>
        <div className="journey-content">
          <p className="large-copy">Empecé este camino con una convicción sencilla: siempre se puede aprender algo nuevo. Hoy estudio programación, construyo proyectos y documento todo lo que descubro.</p>
          <p>No se trata de correr contra nadie. Se trata de sumar una habilidad real, crear oportunidades y demostrar que la experiencia también es una gran ventaja cuando empezás en tecnología.</p>
          <div className="values"><span>Curiosidad</span><span>Constancia</span><span>Comunidad</span></div>
        </div>
      </section>

      <section className="roadmap-wrap"><div className="roadmap shell">
        <div className="section-heading"><p className="eyebrow">02 · APRENDIENDO EN PÚBLICO</p><h2>El recorrido<br />recién empieza.</h2></div>
        <div className="steps">
          <article><b>01</b><div className="step-icon">&lt;/&gt;</div><h3>Fundamentos</h3><p>HTML, CSS y JavaScript para entender cómo se construye la web.</p></article>
          <article><b>02</b><div className="step-icon">⚛</div><h3>Crear proyectos</h3><p>Práctica real: páginas, interfaces y herramientas útiles.</p></article>
          <article><b>03</b><div className="step-icon">↗</div><h3>Ser freelance</h3><p>Convertir el aprendizaje en trabajo y libertad profesional.</p></article>
        </div>
      </div></section>

      <section className="channel shell" id="canal">
        <div className="channel-card">
          <div className="channel-copy"><p className="eyebrow light">03 · YOUTUBE</p><h2>holamundoarg<span>.</span></h2><p>Videos honestos sobre aprender programación desde cero, superar las dudas y avanzar hacia una vida freelance.</p><a className="button button-light" href={youtubeUrl} target="_blank" rel="noreferrer"><span className="play">▶</span> Suscribirme al canal</a></div>
          <div className="channel-visual"><div className="yt-badge">▶</div><p>APRENDER<br /><em>SIEMPRE</em></p><small>nunca es tarde para empezar</small></div>
        </div>
      </section>

      <section className="contact shell" id="contacto">
        <div className="contact-copy"><p className="eyebrow">04 · CONTACTO</p><h2>¿Charlamos?</h2><p>Si te interesa este camino, querés compartir una experiencia o tenés un proyecto para conversar, escribime.</p><a href="mailto:tuemail@ejemplo.com" className="email-link">tuemail@ejemplo.com <span>↗</span></a><small>Reemplazá este correo por el tuyo antes de publicar.</small></div>
        <form onSubmit={handleSubmit}>
          <label>Nombre<input required name="name" placeholder="¿Cómo te llamás?" /></label>
          <label>Email<input required name="email" type="email" placeholder="rubenesposito17" /></label>
          <label>Mensaje<textarea required name="message" placeholder="Contame en qué puedo ayudarte..." rows={4} /></label>
          <button className="button button-primary" type="submit">Enviar mensaje <span>→</span></button>
          {sent && <p className="form-note">Se abrió tu aplicación de correo para enviar el mensaje.</p>}
        </form>
      </section>

      <footer className="footer shell"><a className="brand" href="#inicio"><span className="brand-mark">&lt;/&gt;</span> rubencito<span className="brand-dot">.</span></a><p>Aprendiendo, creando, avanzando.</p><a href={youtubeUrl} target="_blank" rel="noreferrer">YouTube ↗</a><span>© {new Date().getFullYear()}</span></footer>
    </main>
  )
}

export default App
