import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const youtubeUrl = 'https://www.youtube.com/@holamundoarg'
const contactEmail = 'rubenesposito17@gmail.com'

type Language = 'es' | 'en'

type TranslationSet = {
  langLabel: string
  nav: { camino: string; canal: string; contacto: string }
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    primaryCta: string
    secondaryCta: string
    highlights: string[]
    floatingCta: string
  }
  featured: {
    eyebrow: string
    title: string
    intro: string
    cards: Array<{ title: string; description: string }>
  }
  about: {
    eyebrow: string
    title: string
    body: string
    bullets: string[]
  }
  statement: { quote: string; author: string }
  journey: {
    eyebrow: string
    title: string
    largeCopy: string
    body: string
    values: string[]
  }
  roadmap: {
    eyebrow: string
    title: string
    steps: Array<{ title: string; description: string }>
  }
  channel: {
    eyebrow: string
    title: string
    description: string
    cta: string
    visualTitle: string
    visualSmall: string
  }
  tools: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{ name: string; description: string; downloadLabel: string; url: string; icon: 'react' | 'vscode' | 'sublime' | 'python' }>
  }
  contact: {
    eyebrow: string
    heading: string
    description: string
    emailHint: string
    labels: { name: string; email: string; message: string }
    placeholders: { name: string; email: string; message: string }
    button: string
    note: string
  }
  footer: { text: string; linkLabel: string }
}

const translations: Record<Language, TranslationSet> = {
  es: {
    langLabel: 'Idioma',
    nav: { camino: 'Mi camino', canal: 'El canal', contacto: 'Contacto' },
    hero: {
      eyebrow: 'NUEVA ETAPA · NUEVOS DESAFÍOS',
      title: 'Aprender a programar',
      titleAccent: 'no tiene fecha de vencimiento.',
      intro: 'Soy Rubencito. Estoy aprendiendo programación después de los 50 y comparto el camino, paso a paso, para llegar a trabajar de forma freelance.',
      primaryCta: 'Ver el canal',
      secondaryCta: 'Escribime',
      highlights: ['Mentoría cercana', 'Progreso real', 'Trabajo freelance'],
      floatingCta: 'Hablemos',
    },
    featured: {
      eyebrow: 'DESTACADOS',
      title: 'Un recorrido claro, honesto y en constante evolución.',
      intro: 'Aquí voy dejando registro de cada paso, cada aprendizaje y cada pequeño avance en mi camino de programación.',
      cards: [
        { title: 'Aprendizaje visible', description: 'Cada etapa queda reflejada para mostrar cómo voy creciendo.' },
        { title: 'Progreso paso a paso', description: 'El enfoque está en avanzar con paciencia, práctica y constancia.' },
        { title: 'Evolución real', description: 'Una presentación sencilla y auténtica de lo que voy construyendo.' },
      ],
    },
    about: {
      eyebrow: 'SOBRE EL PROYECTO',
      title: 'Una web pensada para mostrar mi evolución como principiante.',
      body: 'El objetivo es que la presentación se sienta cercana, honesta y motivadora, mientras comparto lo que voy aprendiendo.',
      bullets: ['Mensaje más personal', 'Diseño simple y claro', 'Enfoque en la evolución y el aprendizaje'],
    },
    statement: { quote: 'No llegué tarde. Llegué con ganas.', author: 'RUBENCITO' },
    journey: {
      eyebrow: '01 · MI CAMINO',
      title: 'Una meta clara: vivir de lo que creo.',
      largeCopy: 'Empecé este camino con una convicción sencilla: siempre se puede aprender algo nuevo. Hoy estudio programación, construyo proyectos y documento todo lo que descubro.',
      body: 'No se trata de correr contra nadie. Se trata de sumar una habilidad real, crear oportunidades y demostrar que la experiencia también es una gran ventaja cuando empezás en tecnología.',
      values: ['Curiosidad', 'Constancia', 'Comunidad'],
    },
    roadmap: {
      eyebrow: '02 · APRENDIENDO EN PÚBLICO',
      title: 'El recorrido recién empieza.',
      steps: [
        { title: 'Fundamentos', description: 'HTML, CSS y JavaScript para entender cómo se construye la web.' },
        { title: 'Crear proyectos', description: 'Práctica real: páginas, interfaces y herramientas útiles.' },
        { title: 'Ser freelance', description: 'Convertir el aprendizaje en trabajo y libertad profesional.' },
      ],
    },
    channel: {
      eyebrow: '03 · YOUTUBE',
      title: 'holamundoarg.',
      description: 'Videos honestos sobre aprender programación desde cero, superar las dudas y avanzar hacia una vida freelance.',
      cta: 'Suscribirme al canal',
      visualTitle: 'APRENDER',
      visualSmall: 'nunca es tarde para empezar',
    },
    tools: {
      eyebrow: 'HERRAMIENTAS',
      title: 'Las herramientas que acompañan mi camino.',
      intro: 'Podés descargarlas desde los enlaces oficiales si querés probarlas también.',
      items: [
        { name: 'React', description: 'Biblioteca para construir interfaces modernas.', downloadLabel: 'Descargar React', url: 'https://react.dev/learn/installation', icon: 'react' },
        { name: 'Visual Studio Code', description: 'Editor ligero y potente para programar.', downloadLabel: 'Descargar VS Code', url: 'https://code.visualstudio.com/download', icon: 'vscode' },
        { name: 'Sublime Text', description: 'Editor rápido y minimalista para escribir código.', downloadLabel: 'Descargar Sublime', url: 'https://www.sublimetext.com/download', icon: 'sublime' },
        { name: 'Python', description: 'Lenguaje ideal para aprender y automatizar tareas.', downloadLabel: 'Descargar Python', url: 'https://www.python.org/downloads/', icon: 'python' },
      ],
    },
    contact: {
      eyebrow: '04 · CONTACTO',
      heading: '¿Charlamos?',
      description: 'Si te interesa este camino, querés compartir una experiencia o tenés un proyecto para conversar, escribime.',
      emailHint: 'Tu mensaje se abrirá en tu gestor de correo.',
      labels: { name: 'Nombre', email: 'Email', message: 'Mensaje' },
      placeholders: { name: '¿Cómo te llamás?', email: 'tu@email.com', message: 'Contame en qué puedo ayudarte...' },
      button: 'Enviar mensaje',
      note: 'Se abrió tu aplicación de correo para enviar el mensaje.',
    },
    footer: { text: 'Aprendiendo, creando, avanzando.', linkLabel: 'YouTube' },
  },
  en: {
    langLabel: 'Language',
    nav: { camino: 'My journey', canal: 'The channel', contacto: 'Contact' },
    hero: {
      eyebrow: 'NEW STAGE · NEW CHALLENGES',
      title: 'Learning to code',
      titleAccent: 'has no expiration date.',
      intro: "I'm Rubencito. I'm learning programming after 50 and I share the journey step by step to eventually work freelance.",
      primaryCta: 'Watch the channel',
      secondaryCta: 'Write to me',
      highlights: ['Close mentorship', 'Real progress', 'Freelance work'],
      floatingCta: 'Let’s talk',
    },
    featured: {
      eyebrow: 'HIGHLIGHTS',
      title: 'A clear, honest and ever-evolving path.',
      intro: 'Here I leave a record of each step, each lesson and each small advancement in my programming journey.',
      cards: [
        { title: 'Learning made visible', description: 'Each stage is reflected to show how I am growing.' },
        { title: 'Progress step by step', description: 'The focus is on moving forward with patience, practice and consistency.' },
        { title: 'Real evolution', description: 'A simple and authentic presentation of what I am building.' },
      ],
    },
    about: {
      eyebrow: 'ABOUT THE PROJECT',
      title: 'A website designed to show my evolution as a beginner.',
      body: 'The goal is for the presentation to feel close, honest and motivating while I share what I am learning.',
      bullets: ['More personal message', 'Simple and clear design', 'Focus on learning and growth'],
    },
    statement: { quote: 'I did not arrive late. I arrived ready.', author: 'RUBENCITO' },
    journey: {
      eyebrow: '01 · MY JOURNEY',
      title: 'A clear goal: live from what I believe in.',
      largeCopy: 'I started this path with a simple conviction: you can always learn something new. Today I study programming, build projects and document everything I discover.',
      body: 'It is not about racing anyone. It is about adding a real skill, creating opportunities and showing that experience is also a great advantage when you start in technology.',
      values: ['Curiosity', 'Consistency', 'Community'],
    },
    roadmap: {
      eyebrow: '02 · LEARNING IN PUBLIC',
      title: 'The journey is just beginning.',
      steps: [
        { title: 'Fundamentals', description: 'HTML, CSS and JavaScript to understand how the web is built.' },
        { title: 'Build projects', description: 'Real practice: pages, interfaces and useful tools.' },
        { title: 'Become freelance', description: 'Turn learning into work and professional freedom.' },
      ],
    },
    channel: {
      eyebrow: '03 · YOUTUBE',
      title: 'holamundoarg.',
      description: 'Honest videos about learning programming from scratch, overcoming doubts and moving toward a freelance life.',
      cta: 'Subscribe to the channel',
      visualTitle: 'LEARN',
      visualSmall: 'it is never too late to start',
    },
    tools: {
      eyebrow: 'TOOLS',
      title: 'The tools that accompany my journey.',
      intro: 'You can download them from the official links if you want to try them too.',
      items: [
        { name: 'React', description: 'Library for building modern interfaces.', downloadLabel: 'Download React', url: 'https://react.dev/learn/installation', icon: 'react' },
        { name: 'Visual Studio Code', description: 'A lightweight and powerful editor for coding.', downloadLabel: 'Download VS Code', url: 'https://code.visualstudio.com/download', icon: 'vscode' },
        { name: 'Sublime Text', description: 'A fast and minimalist editor for writing code.', downloadLabel: 'Download Sublime', url: 'https://www.sublimetext.com/download', icon: 'sublime' },
        { name: 'Python', description: 'A great language for learning and automating tasks.', downloadLabel: 'Download Python', url: 'https://www.python.org/downloads/', icon: 'python' },
      ],
    },
    contact: {
      eyebrow: '04 · CONTACT',
      heading: 'Shall we talk?',
      description: 'If you are interested in this path, want to share an experience or have a project to talk about, write to me.',
      emailHint: 'Your message will open in your mail app.',
      labels: { name: 'Name', email: 'Email', message: 'Message' },
      placeholders: { name: 'What is your name?', email: 'you@email.com', message: 'Tell me how I can help you...' },
      button: 'Send message',
      note: 'Your mail app opened to send the message.',
    },
    footer: { text: 'Learning, creating, moving forward.', linkLabel: 'YouTube' },
  },
}

function ToolIcon({ name }: { name: 'react' | 'vscode' | 'sublime' | 'python' }) {
  switch (name) {
    case 'react':
      return (
        <svg viewBox="0 0 256 228" aria-hidden="true">
          <circle cx="128" cy="114" r="100" fill="#61dafb" />
          <ellipse cx="128" cy="114" rx="70" ry="28" fill="#fff" opacity="0.95" />
          <path d="M128 40c-30 0-56 12-76 32 16 14 37 24 62 24 24 0 46-10 62-24-20-20-46-32-48-32Z" fill="#20232a" opacity="0.85" />
          <path d="M128 188c30 0 56-12 76-32-16-14-37-24-62-24-24 0-46 10-62 24 20 20 46 32 48 32Z" fill="#20232a" opacity="0.85" />
        </svg>
      )
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#007ACC" />
          <path d="M15.5 5 8.3 11.4 5.2 9 4 9.8l3.3 2.7L4 15.2l1.2.8 3.1-2.4 7.2 6.4 3.5-1.6V6.6L15.5 5Zm0 3.4v7.2l-3.7-3.6 3.7-3.6Z" fill="#fff" />
        </svg>
      )
    case 'sublime':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#FF9800" />
          <path d="M6 8.2 16.4 5l2.1 1v1.7L8.7 10.2l2.9 1.6v1.2L6 13.6V8.2Zm3.1 6.2 2.7 1.4v1.3L9.1 17l-2.2-1.2v-1.1l2.2-.4Z" fill="#fff" />
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#3776AB" />
          <path d="M10.2 6.2c-.9 0-1.6.8-1.6 1.8v1.4h2.8v.6H8.6c-1.4 0-2.6 1.1-2.6 2.5v2.8c0 1.4 1.2 2.5 2.6 2.5h1.7v-2.4H8.6c-.5 0-.8-.4-.8-.9v-2.8c0-.5.3-.9.8-.9h1.6v-1.7c0-.6.4-1.1 1-1.1h3.5c.5 0 .9.4.9.9v1.4h2.2V8c0-1-.8-1.8-1.8-1.8h-4.2Zm4.2 4.4c.6 0 1 .4 1 1v2.8c0 .6-.4 1-1 1h-1.5v2.4h1.7c1.4 0 2.6-1.1 2.6-2.5v-2.8c0-1.4-1.2-2.5-2.6-2.5H13v1.6h1.4Z" fill="#fff" />
        </svg>
      )
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [language, setLanguage] = useState<Language>('es')
  const t = translations[language]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const message = data.get('message') || ''
    const subject = encodeURIComponent(
      language === 'es' ? `Mensaje desde mi portfolio — ${name}` : `Message from my portfolio — ${name}`,
    )
    const body = encodeURIComponent(
      language === 'es'
        ? `Nombre: ${name}\nEmail: ${email}\n\n${message}`
        : `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio" aria-label="Inicio de Rubencito">
          <span className="brand-mark">&lt;/&gt;</span> rubencito<span className="brand-dot">.</span>
        </a>
        <div className="header-actions">
          <div className="lang-switch">
            <label htmlFor="language-select">{t.langLabel}</label>
            <select id="language-select" value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">
            <span /> <span />
          </button>
          <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
            <a href="#camino" onClick={() => setMenuOpen(false)}>{t.nav.camino}</a>
            <a href="#canal" onClick={() => setMenuOpen(false)}>{t.nav.canal}</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>{t.nav.contacto}</a>
          </nav>
        </div>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> {t.hero.eyebrow}</p>
          <h1>{t.hero.title}<br /><em>{t.hero.titleAccent}</em></h1>
          <p className="intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={youtubeUrl} target="_blank" rel="noreferrer">{t.hero.primaryCta} <span>↗</span></a>
            <a className="button button-secondary" href="#contacto">{t.hero.secondaryCta} <span>→</span></a>
          </div>
          <div className="hero-highlights">
            {t.hero.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
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

      <section className="showcase shell">
        <div className="showcase-intro">
          <p className="eyebrow">{t.featured.eyebrow}</p>
          <h2>{t.featured.title}</h2>
          <p>{t.featured.intro}</p>
        </div>
        <div className="showcase-grid">
          {t.featured.cards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tools shell" aria-label="Herramientas y descargas">
        <div className="showcase-intro">
          <p className="eyebrow">{t.tools.eyebrow}</p>
          <h2>{t.tools.title}</h2>
          <p>{t.tools.intro}</p>
        </div>
        <div className="tool-grid">
          {t.tools.items.map((tool) => (
            <a key={tool.name} className="tool-card" href={tool.url} target="_blank" rel="noreferrer">
              <div className="tool-logo"><ToolIcon name={tool.icon} /></div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <span>{tool.downloadLabel} ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about shell">
        <div className="about-card">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
          <p>{t.about.body}</p>
          <ul>
            {t.about.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="statement">
        <div className="shell"><p>“{t.statement.quote}”</p><span>— {t.statement.author}</span></div>
      </section>

      <section className="journey shell" id="camino">
        <div className="section-heading"><p className="eyebrow">{t.journey.eyebrow}</p><h2>{t.journey.title}</h2></div>
        <div className="journey-content">
          <p className="large-copy">{t.journey.largeCopy}</p>
          <p>{t.journey.body}</p>
          <div className="values">{t.journey.values.map((value) => (<span key={value}>{value}</span>))}</div>
        </div>
      </section>

      <section className="roadmap-wrap"><div className="roadmap shell">
        <div className="section-heading"><p className="eyebrow">{t.roadmap.eyebrow}</p><h2>{t.roadmap.title}</h2></div>
        <div className="steps">
          {t.roadmap.steps.map((step, index) => (
            <article key={step.title}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              <div className="step-icon">{index === 0 ? '<' + '/>' : index === 1 ? '⚛' : '↗'}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div></section>

      <section className="channel shell" id="canal">
        <div className="channel-card">
          <div className="channel-copy"><p className="eyebrow light">{t.channel.eyebrow}</p><h2>{t.channel.title}<span>.</span></h2><p>{t.channel.description}</p><a className="button button-light" href={youtubeUrl} target="_blank" rel="noreferrer"><span className="play">▶</span> {t.channel.cta}</a></div>
          <div className="channel-visual"><div className="yt-badge">▶</div><p>{t.channel.visualTitle}<br /><em>{t.channel.visualSmall.toUpperCase()}</em></p><small>{t.channel.visualSmall}</small></div>
        </div>
      </section>

      <section className="contact shell" id="contacto">
        <div className="contact-copy"><p className="eyebrow">{t.contact.eyebrow}</p><h2>{t.contact.heading}</h2><p>{t.contact.description}</p><small>{t.contact.emailHint}</small></div>
        <form onSubmit={handleSubmit}>
          <label>{t.contact.labels.name}<input required name="name" placeholder={t.contact.placeholders.name} /></label>
          <label>{t.contact.labels.email}<input required name="email" type="email" placeholder={t.contact.placeholders.email} /></label>
          <label>{t.contact.labels.message}<textarea required name="message" placeholder={t.contact.placeholders.message} rows={4} /></label>
          <button className="button button-primary" type="submit">{t.contact.button} <span>→</span></button>
          {sent && <p className="form-note">{t.contact.note}</p>}
        </form>
      </section>

      <a className="floating-cta" href="#contacto">{t.hero.floatingCta}</a>
      <footer className="footer shell"><a className="brand" href="#inicio"><span className="brand-mark">&lt;/&gt;</span> rubencito<span className="brand-dot">.</span></a><p>{t.footer.text}</p><a href={youtubeUrl} target="_blank" rel="noreferrer">{t.footer.linkLabel} ↗</a><span>© {new Date().getFullYear()}</span></footer>
    </main>
  )
}

export default App
