import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Menu,
  Play,
  Smartphone,
  Sparkles,
  X,
  Image as ImageIcon,
  Layers3,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react'

type ModalType = 'intro' | 'contact' | 'project' | null

type Project = {
  title: string
  category: string
  tags: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    title: 'Wedding Cinematic',
    category: 'FILM / STORYTELLING',
    tags: 'Love · Emotion · Forever',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    description: 'An emotion-led film edit shaped around meaningful moments, natural pacing, and a timeless cinematic finish.',
  },
  {
    title: 'Travel Edit',
    category: 'TRAVEL / CINEMATIC',
    tags: 'Explore · Experience · Relive',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
    description: 'A landscape-driven edit with considered pacing, immersive atmosphere, and a cohesive color grade.',
  },
  {
    title: 'Brand Commercial',
    category: 'BRAND / COMMERCIAL',
    tags: 'Ideas · Creativity · Impact',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85',
    description: 'A polished commercial-style concept that puts product detail, rhythm, and visual clarity first.',
  },
  {
    title: 'Social Content',
    category: 'SOCIAL / SHORT FORM',
    tags: 'Trendy · Fresh · Engaging',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
    description: 'Short-form content shaped for platform-native pacing, clear storytelling, and a consistent visual feel.',
  },
]

const services = [
  { title: 'Video Editing', copy: 'Clean, cinematic edits shaped around your story.', icon: Clapperboard },
  { title: 'Reels & Short Form', copy: 'Fast-paced content made to hold attention.', icon: Smartphone },
  { title: 'Color Grading', copy: 'A considered look with a consistent visual mood.', icon: Sparkles },
  { title: 'Motion Graphics', copy: 'Purposeful movement that makes ideas clear.', icon: Layers3 },
  { title: 'Thumbnail Design', copy: 'Strong visual covers built to stand out.', icon: ImageIcon },
]

const steps = [
  { number: '01', title: 'Share Your Vision', copy: 'Tell us about your project, style, audience, and goals.' },
  { number: '02', title: 'Get a Custom Plan', copy: 'We align on the creative direction, deliverables, and timeline.' },
  { number: '03', title: 'Review & Refine', copy: 'Review the first edit and share feedback for a thoughtful polish.' },
  { number: '04', title: 'Get Your Final Edit', copy: 'Receive your approved files in formats ready for release.' },
]

const testimonials = [
  { quote: 'The edit felt considered from the first cut to the final details. Exactly the visual direction we wanted.', name: 'Client Name', role: 'Brand / Commercial Project', initials: 'CN' },
  { quote: 'Clear communication, a smooth process, and a visual result that brought the original idea to life.', name: 'Client Name', role: 'Creator / Short-Form Project', initials: 'CN' },
  { quote: 'The pacing and color work gave the footage a cohesive, cinematic feel without overcomplicating the story.', name: 'Client Name', role: 'Film / Content Project', initials: 'CN' },
]

function App() {
  const [modal, setModal] = useState<ModalType>(null)
  const [activeProject, setActiveProject] = useState<Project>(projects[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'demo'>('idle')

  useEffect(() => {
    document.body.style.overflow = modal || mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal, mobileMenuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModal(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openContact = () => {
    setFormStatus('idle')
    setMobileMenuOpen(false)
    setModal('contact')
  }

  const goTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openProject = (project: Project) => {
    setActiveProject(project)
    setModal('project')
  }

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('demo')
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Editlume home" onClick={() => setMobileMenuOpen(false)}>Editlume<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); openContact() }}>Contact</a>
        </nav>
        <button className="button button-dark header-cta" onClick={openContact}>Get a Quote <ArrowUpRight size={15} /></button>
        <button className="mobile-menu-toggle" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((value) => !value)}>
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => goTo('services')}>Services</a>
          <a href="#about" onClick={() => goTo('about')}>About</a>
          <button onClick={openContact}>Contact / Get a Quote <ArrowRight size={16} /></button>
        </div>
      )}

      <main>
        <section className="hero" id="home">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content container">
            <p className="eyebrow eyebrow-light">VIDEO EDITING AGENCY</p>
            <h1>Your Vision.<br /><span>Our Edit.</span></h1>
            <p className="hero-copy">We turn raw footage into cinematic stories. Professional video editing, designed for brands, creators and businesses worldwide.</p>
            <div className="hero-actions">
              <button className="button button-light" onClick={openContact}>Get a Quote <ArrowRight size={16} /></button>
              <button className="button button-ghost" onClick={() => setModal('intro')}>View Our Work <Play size={13} fill="currentColor" /></button>
            </div>
          </div>
          <div className="hero-side-note" aria-hidden="true">EDIT<br />CREATE<br />TELL<br />BETTER</div>
          <div className="hero-index" aria-hidden="true"><span /> CRAFTED WITH INTENTION</div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container services-layout">
            <div className="section-intro services-intro">
              <p className="eyebrow">OUR SERVICES</p>
              <h2>Everything You Need<br />for Powerful Visuals.</h2>
              <p className="muted intro-copy">From short-form content to cinematic films, we offer end-to-end video editing solutions tailored to your goals.</p>
              <button className="text-link" onClick={() => goTo('services-grid')}>Explore All Services <ArrowRight size={15} /></button>
            </div>
            <div className="services-grid" id="services-grid">
              {services.map(({ title, copy, icon: Icon }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top"><Icon size={24} strokeWidth={1.65} /><span>0{index + 1}</span></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow">FEATURED WORK</p><h2>Recent Projects<span className="heading-period">.</span></h2></div>
              <button className="text-link view-all-link" onClick={() => setModal('intro')}>View Our Approach <ArrowRight size={15} /></button>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <button className="project-card" key={project.title} onClick={() => openProject(project)} aria-label={`View ${project.title} sample project`}>
                  <img src={project.image} alt="" loading="lazy" />
                  <span className="project-overlay" />
                  <span className="project-number">0{index + 1} / 04</span>
                  <span className="project-card-content"><span className="project-title">{project.title}</span><span className="project-tags">{project.tags}</span></span>
                  <span className="project-arrow"><ArrowUpRight size={18} /></span>
                </button>
              ))}
            </div>
            <p className="project-disclaimer">Image-led concept cards for layout preview. Replace these with Editlume’s approved work before publishing.</p>
          </div>
        </section>

        <section className="stats-strip" aria-label="Studio highlights">
          <div className="container stats-layout">
            <div className="stat"><strong>Story<span>+</span></strong><small>First Approach</small></div>
            <div className="stat"><strong>Frame<span> by frame</span></strong><small>Thoughtful Editing</small></div>
            <div className="stat"><strong>One clear</strong><small>Creative Direction</small></div>
            <div className="stat"><strong>Detail<span> matters</span></strong><small>From Cut to Color</small></div>
            <p className="stats-note">Made for creators, brands<br />and ideas worth telling.</p>
          </div>
        </section>

        <section className="process-section section-pad" id="about">
          <div className="container process-layout">
            <div className="section-intro process-intro">
              <p className="eyebrow">OUR PROCESS</p>
              <h2>Simple. Transparent.<br />Effective.</h2>
              <p className="muted intro-copy">A considered process to take your project from raw footage to a finished visual story.</p>
              <button className="text-link" onClick={() => setModal('intro')}>Meet Editlume <ArrowRight size={15} /></button>
            </div>
            <div className="process-steps">
              {steps.map((step) => (
                <article className="process-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  {step.number !== '04' && <ArrowRight className="step-arrow" size={16} />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section section-pad">
          <div className="container testimonials-layout">
            <div className="section-intro testimonial-intro">
              <p className="eyebrow">THE EDITLUME APPROACH</p>
              <h2>Good work.<br />Clear communication.</h2>
              <p className="muted intro-copy">A creative partnership built on clarity, care, and a shared vision.</p>
            </div>
            <div className="testimonial-cards">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={index}>
                  <div className="quote-mark">“</div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-person"><span className="avatar">{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span></div>
                </article>
              ))}
              <p className="project-disclaimer testimonial-disclaimer">Sample copy for layout preview — replace with genuine client feedback before publishing.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <a className="wordmark wordmark-light" href="#home">Editlume<span>.</span></a>
          <div className="footer-cta-copy"><p className="eyebrow eyebrow-light">LET’S CREATE SOMETHING GREAT</p><h2>Ready to Edit Your Vision?</h2><p>Tell us what you’re imagining. Let’s bring it to life.</p></div>
          <button className="button button-light footer-quote" onClick={openContact}>Get a Quote <ArrowRight size={16} /></button>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Editlume. All rights reserved.</span><span>Independent creative editing brand</span><button onClick={() => goTo('home')}>Back to top <ArrowDownRight size={14} className="back-top-icon" /></button></div>
      </footer>

      {modal && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null) }}>
          <section className={`modal-panel ${modal === 'intro' ? 'intro-modal' : ''} ${modal === 'contact' ? 'contact-modal' : ''} ${modal === 'project' ? 'project-modal' : ''}`} role="dialog" aria-modal="true" aria-label={modal === 'intro' ? 'Meet Editlume' : modal === 'contact' ? 'Get a quote' : activeProject.title}>
            <button className="modal-close" aria-label="Close dialog" onClick={() => setModal(null)}><X size={21} /></button>
            {modal === 'intro' && (
              <>
                <p className="eyebrow">MEET EDITLUME / 001</p>
                <h2>We turn ideas into<br /><span>visual experiences.</span></h2>
                <p className="modal-lead">Editlume transforms raw footage into purposeful, cinematic visual stories. From short-form videos and cinematic films to brand commercials, color grading, and motion graphics, we help creators and businesses communicate their vision with clarity and character.</p>
                <div className="principles-grid">
                  <div><span>01</span><h3>Story First</h3><p>Every edit begins with a clear creative intention.</p></div>
                  <div><span>02</span><h3>Crafted with Precision</h3><p>Every cut and color choice should serve the story.</p></div>
                  <div><span>03</span><h3>Made to Connect</h3><p>Visual content shaped around the audience and the idea.</p></div>
                </div>
                <button className="button button-dark modal-primary" onClick={() => { setModal(null); window.setTimeout(() => goTo('work'), 80) }}>Explore Selected Projects <ArrowRight size={16} /></button>
              </>
            )}
            {modal === 'contact' && (
              <>
                <p className="eyebrow">START A PROJECT / 002</p>
                <h2>Let’s make something<br /><span>worth watching.</span></h2>
                {formStatus === 'demo' ? (
                  <div className="form-demo-notice"><Check size={22} /><div><strong>Form preview completed.</strong><p>This demo form is not connected to email or a database yet, so no inquiry has been sent. We’ll connect delivery before the website goes live.</p></div></div>
                ) : (
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <label>Full name<input name="name" type="text" placeholder="Your name" required /></label>
                    <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
                    <label>Service required<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Video Editing</option><option>Reels & Short Form</option><option>Color Grading</option><option>Motion Graphics</option><option>Thumbnail Design</option><option>Something else</option></select></label>
                    <label>Tell us about your project<textarea name="details" placeholder="A little about the footage, style, deadline, or idea…" rows={4} required /></label>
                    <button className="button button-dark submit-button" type="submit">Preview Inquiry <ArrowRight size={16} /></button>
                    <p className="form-note">Preview only — sending will not contact anyone until a form service is connected.</p>
                  </form>
                )}
              </>
            )}
            {modal === 'project' && (
              <>
                <div className="project-modal-image"><img src={activeProject.image} alt="" /></div>
                <p className="eyebrow">{activeProject.category}</p>
                <h2>{activeProject.title}</h2>
                <p className="modal-lead">{activeProject.description}</p>
                <p className="project-disclaimer">Concept example, not a confirmed client project. Replace with actual work when available.</p>
                <button className="button button-dark modal-primary" onClick={openContact}>Discuss a Similar Project <ArrowRight size={16} /></button>
              </>
            )}
          </section>
        </div>
      )}
    </>
  )
}

export default App
