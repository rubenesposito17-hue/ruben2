import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const whatsappNumber = '5491123456789'
const emailAddress = 'rubenesposito17@gmail.com'

type Language = 'es' | 'en' | 'ja'

const translations = {
  es: {
    navAbout: 'Sobre mí',
    navServices: 'Servicios',
    navContact: 'Contacto',
    heroTag: 'SERVICIOS TÉCNICOS CON CALIDEZ HUMANA',
    heroTitle: 'Tecnología simple, segura y al servicio de tu día a día.',
    heroText:
      'Soy Rubén Esposito, de Buenos Aires, Capital Federal. Ayudo a personas y familias con instalaciones de Windows, programas, respaldos y clases de internet para adultos mayores.',
    primaryButton: 'Escribir por WhatsApp',
    secondaryButton: 'Ver servicios',
    aboutTitle: 'Atiendo personas reales con paciencia, orden y confianza.',
    aboutText:
      'Mi trabajo está pensado para que cada instalación, configuración o ayuda técnica se sienta clara, tranquila y útil. Me enfoco en resolver problemas de forma práctica y cercana.',
    aboutLocation: 'Buenos Aires, Capital Federal',
    servicesTitle: 'Servicios que realizo',
    services: [
      {
        title: 'Instalación de Windows',
        text: 'Configuración limpia, actualización y puesta en marcha de sistemas para que tu equipo funcione mejor.',
      },
      {
        title: 'Programas y apps',
        text: 'Instalo y organizo programas esenciales para trabajo, estudio, comunicación y entretenimiento.',
      },
      {
        title: 'Backups y recuperación',
        text: 'Protejo tus archivos y te ayudo a cuidar la información importante con respaldo simple y seguro.',
      },
      {
        title: 'Clases de internet para adultos mayores',
        text: 'Enseño paso a paso para que usar la computadora, WhatsApp y la web sea más fácil y sin estrés.',
      },
    ],
    galleryTitle: 'Trabajo cercano, profesional y pensado para la vida diaria.',
    galleryText: 'Cada ayuda se adapta a la persona, al equipo y al ritmo de cada hogar o negocio.',
    contactTitle: 'Hablemos',
    contactText:
      'Si necesitás ayuda con tu PC, una instalación, un respaldo o una clase de internet, escribime. Te respondo con gusto.',
    contactButton: 'Enviar mensaje',
    formName: 'Nombre',
    formEmail: 'Email',
    formMessage: 'Mensaje',
    formPlaceholderName: 'Tu nombre',
    formPlaceholderEmail: 'tu@email.com',
    formPlaceholderMessage: 'Contame qué necesitás',
    formSuccess: 'Se abrió tu correo para enviar el mensaje.',
    footerNote: 'Soporte técnico cercano y profesional.',
  },
  en: {
    navAbout: 'About me',
    navServices: 'Services',
    navContact: 'Contact',
    heroTag: 'TECH SUPPORT WITH HUMAN CARE',
    heroTitle: 'Technology that feels simple, secure and useful every day.',
    heroText:
      'I am Rubén Esposito from Buenos Aires, Capital Federal. I help people and families with Windows installations, software setup, backups and internet lessons for older adults.',
    primaryButton: 'Write on WhatsApp',
    secondaryButton: 'See services',
    aboutTitle: 'I support people with patience, order and confidence.',
    aboutText:
      'My work is designed so each installation, configuration or technical help feels clear, calm and practical. I focus on solving problems in a close and human way.',
    aboutLocation: 'Buenos Aires, Capital Federal',
    servicesTitle: 'Services I provide',
    services: [
      {
        title: 'Windows installation',
        text: 'Clean setup, updates and launch of systems so your computer works better.',
      },
      {
        title: 'Programs and apps',
        text: 'I install and organize essential tools for work, study, communication and entertainment.',
      },
      {
        title: 'Backups and recovery',
        text: 'I protect your files and help you keep your important information safe with simple backups.',
      },
      {
        title: 'Internet classes for older adults',
        text: 'I teach step by step so using the computer, WhatsApp and the web becomes easier and less stressful.',
      },
    ],
    galleryTitle: 'Close, professional work designed for everyday life.',
    galleryText: 'Each support session is adapted to the person, the device and the pace of each home or business.',
    contactTitle: 'Let us talk',
    contactText:
      'If you need help with your PC, an installation, a backup or an internet lesson, write to me. I will be happy to help.',
    contactButton: 'Send message',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formPlaceholderName: 'Your name',
    formPlaceholderEmail: 'you@email.com',
    formPlaceholderMessage: 'Tell me what you need',
    formSuccess: 'Your email app opened to send the message.',
    footerNote: 'Close and professional technical support.',
  },
  ja: {
    navAbout: '自己紹介',
    navServices: 'サービス',
    navContact: 'お問い合わせ',
    heroTag: '人に寄り添う技術サポート',
    heroTitle: '毎日をもっと安心できる、シンプルなテクノロジー。',
    heroText:
      '私はブエノスアイレス、カピタル連邦出身のルベン・エスポジトです。Windowsの導入、ソフトの設定、バックアップ、シニア向けのインターネット教室を支援しています。',
    primaryButton: 'WhatsAppで連絡する',
    secondaryButton: 'サービスを見る',
    aboutTitle: '落ち着いて、丁寧に、信頼をもってお手伝いします。',
    aboutText:
      '私の仕事は、各インストールや設定、技術サポートが分かりやすく、安心できるように設計されています。親しみやすく、現実的な方法で問題を解決します。',
    aboutLocation: 'ブエノスアイレス、カピタル連邦',
    servicesTitle: '提供しているサービス',
    services: [
      {
        title: 'Windowsの導入',
        text: 'きれいなセットアップ、更新、システムの起動を支援し、PCをより快適にします。',
      },
      {
        title: 'プログラムとアプリ',
        text: '仕事、学習、コミュニケーション、エンターテインメントに必要なツールを導入・整理します。',
      },
      {
        title: 'バックアップと復旧',
        text: '大切なファイルを保護し、シンプルで安全な方法で情報を守ります。',
      },
      {
        title: 'シニア向けインターネット教室',
        text: '一歩ずつ丁寧に教え、PC・WhatsApp・Webの使い方を安心して学べるようにします。',
      },
    ],
    galleryTitle: '日常に寄り添う、近くてプロフェッショナルな仕事。',
    galleryText: '各サポートは、相手のペースや機器に合わせて、家庭や事業所に合わせて調整します。',
    contactTitle: 'お話ししましょう',
    contactText:
      'PCのサポート、導入、バックアップ、インターネット教室が必要なら、ぜひご連絡ください。喜んでお手伝いします。',
    contactButton: 'メッセージを送る',
    formName: '名前',
    formEmail: 'メール',
    formMessage: 'メッセージ',
    formPlaceholderName: 'お名前',
    formPlaceholderEmail: 'you@email.com',
    formPlaceholderMessage: '必要な内容を教えてください',
    formSuccess: 'メールアプリが開いてメッセージを送れます。',
    footerNote: '近くて安心できる技術サポート。',
  },
} as const

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [sent, setSent] = useState(false)
  const t = translations[language]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const message = data.get('message') || ''
    const subject = encodeURIComponent(`Mensaje desde la web — ${name}`)
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark">R</span> Ruben Esposito
        </a>
        <div className="language-switcher" role="tablist" aria-label="Select language">
          <button className={language === 'es' ? 'lang-btn active' : 'lang-btn'} onClick={() => setLanguage('es')}>
            ES
          </button>
          <button className={language === 'en' ? 'lang-btn active' : 'lang-btn'} onClick={() => setLanguage('en')}>
            EN
          </button>
          <button className={language === 'ja' ? 'lang-btn active' : 'lang-btn'} onClick={() => setLanguage('ja')}>
            JA
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroTag}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                {t.primaryButton}
              </a>
              <a className="button secondary" href="#servicios">
                {t.secondaryButton}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Tecnología y soporte">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
              alt="Notebook abierta sobre una mesa"
            />
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80"
              alt="PC de escritorio con monitor"
            />
          </div>
        </section>

        <section className="about-section" id="sobre-mi">
          <div className="section-heading">
            <p className="eyebrow">{t.navAbout}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <p>{t.aboutText}</p>
              <p className="about-location">{t.aboutLocation}</p>
            </div>
            <div className="about-card image-card">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                alt="Persona adulta sonriendo frente a una computadora"
              />
            </div>
          </div>
        </section>

        <section className="services-section" id="servicios">
          <div className="section-heading">
            <p className="eyebrow">{t.navServices}</p>
            <h2>{t.servicesTitle}</h2>
          </div>
          <div className="services-grid">
            {t.services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-heading">
            <p className="eyebrow">{t.galleryTitle}</p>
            <h2>{t.galleryText}</h2>
          </div>
          <div className="gallery-grid">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Notebook con pantalla encendida"
              />
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="PC de escritorio profesional"
              />
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
                alt="Persona mayor usando una computadora con confianza"
              />
            </figure>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-copy">
            <p className="eyebrow">{t.contactTitle}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-links">
              <a href={`https://wa.me/${whatsappNumber}`}>{t.primaryButton}</a>
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              {t.formName}
              <input required name="name" placeholder={t.formPlaceholderName} />
            </label>
            <label>
              {t.formEmail}
              <input required name="email" type="email" placeholder={t.formPlaceholderEmail} />
            </label>
            <label>
              {t.formMessage}
              <textarea required name="message" placeholder={t.formPlaceholderMessage} rows={4} />
            </label>
            <button className="button primary" type="submit">
              {t.contactButton}
            </button>
            {sent && <p className="form-note">{t.formSuccess}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>Ruben Esposito</p>
        <span>{t.footerNote}</span>
      </footer>
    </div>
  )
}

export default App