import { FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import { getWhatsAppUrl, siteConfig } from './siteConfig'

type IconName =
  | 'arrow'
  | 'bed'
  | 'calendar'
  | 'close'
  | 'leaf'
  | 'map'
  | 'menu'
  | 'next'
  | 'spark'
  | 'sun'
  | 'whatsapp'

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    bed: <><path d="M3 18V8m18 10v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6m-4-4h18M7 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" /></>,
    calendar: <><path d="M6 2v4m12-4v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    leaf: <><path d="M20 4C12 4 5 8 5 15c0 2 1 4 3 5 7-1 11-7 12-16Z" /><path d="M4 21c3-6 7-9 12-12" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></>,
    menu: <><path d="M4 8h16M4 16h16" /></>,
    next: <><path d="m9 18 6-6-6-6" /></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 9l-4.1 1.4L12 15l-1.4-4.6L6.5 9l4.1-1.9L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    whatsapp: <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z" /><path d="M8.2 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.3.5.5 0 .4-.2 1.3-.7 1.8-.5.5-1.3.8-2.1.7-1.1-.1-2.8-.7-4.5-2.2-1.4-1.3-2.4-2.9-2.7-4.1-.3-1.2 0-2 .3-2.4Z" /></>,
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const navItems = [
  ['The Stay', '#stay'],
  ['Gallery', '#gallery'],
  ['Experience', '#experience'],
  ['Location', '#location'],
  ['FAQs', '#faqs'],
]

const gallery = [
  {
    url: 'https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?auto=format&fit=crop&w=1600&q=85',
    alt: 'Warm bedside lamp beside soft neutral bedding',
    credit: 'Jp Valery',
    className: 'gallery-tall',
  },
  {
    url: 'https://images.unsplash.com/photo-1724582586413-6b69e1c94a17?auto=format&fit=crop&w=1600&q=85',
    alt: 'Calm neutral bedroom with wooden details',
    credit: 'Prydumano Design',
    className: 'gallery-wide',
  },
  {
    url: 'https://images.unsplash.com/photo-1722248214740-d35304c6ca2c?auto=format&fit=crop&w=1400&q=85',
    alt: 'Warm living room with natural timber ceiling',
    credit: 'Lisa Anna',
    className: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?auto=format&fit=crop&w=1400&q=85',
    alt: 'Soft white bed with an elegant wooden headboard',
    credit: 'Antonio Araujo',
    className: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1722248214832-fa6c0ca0b360?auto=format&fit=crop&w=1600&q=85',
    alt: 'Open kitchen and living space with natural textures',
    credit: 'Lisa Anna',
    className: 'gallery-wide',
  },
]

const experiences = [
  ['01', 'Slow Mornings', 'Wake up without rushing, linger over coffee, and take the day at your own pace.'],
  ['02', 'Cozy Evenings', 'Settle into warm light, your favourite show, and conversations with nowhere else to be.'],
  ['03', 'Time Together', 'Leave the noise of the city behind and make space for the moments that matter.'],
]

function WhatsAppLink({ children, className = '', message }: { children: React.ReactNode; className?: string; message?: string }) {
  return <a className={className} href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer">{children}</a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled || open ? 'header-solid' : ''}`}>
      <a href="#home" className="wordmark" aria-label="B and R stays, home">
        <span>B&amp;R</span> stays
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <WhatsAppLink className="nav-cta">
        <Icon name="whatsapp" className="icon" /><span>Enquire</span>
      </WhatsAppLink>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
        <Icon name={open ? 'close' : 'menu'} className="icon" />
      </button>
      <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Icon name="arrow" className="icon" /></a>)}
        <WhatsAppLink className="button button-dark"><Icon name="whatsapp" className="icon" /> Enquire on WhatsApp</WhatsAppLink>
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, children, className = '' }: { eyebrow: string; children: React.ReactNode; className?: string }) {
  return <div className={`section-heading ${className}`}><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div>
}

function App() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [faq, setFaq] = useState<number | null>(0)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox((lightbox + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setLightbox((lightbox - 1 + gallery.length) % gallery.length)
    }
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hi B&R stays! I'd like to enquire about a stay.\n\nName: ${data.get('name')}\nCheck-in: ${data.get('checkin')}\nCheck-out: ${data.get('checkout')}\nGuests: ${data.get('guests')}\nMessage: ${data.get('message') || '—'}\n\nCould you please share availability, pricing, and booking details?`
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const galleryKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') setLightbox(index)
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img className="hero-image" src="https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?auto=format&fit=crop&w=2200&q=90" alt="Warmly lit bedroom with layered neutral bedding" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">A private stay in Karjat</p>
            <h1 id="hero-title">Your little escape,<br /><em>away from it all.</em></h1>
            <p className="hero-copy">Slow mornings, cozy evenings, and moments that are just yours.</p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-light"><Icon name="whatsapp" className="icon" />Enquire on WhatsApp</WhatsAppLink>
              <a href="#stay" className="text-link">Explore the stay <Icon name="arrow" className="icon" /></a>
            </div>
          </div>
          <p className="hero-caption"><span /> A little closer to what matters.</p>
          <p className="photo-note">Editorial preview image — replace with property photography</p>
        </section>

        <section className="intro section" id="stay">
          <div className="intro-copy reveal">
            <SectionHeading eyebrow="Welcome to B&R">Not just a stay.<br /><em>A little pause</em> from the world.</SectionHeading>
            <p className="lead">Some moments deserve a little more time. B&amp;R stays is your cozy corner in Karjat, created for slower mornings, unhurried conversations, and evenings spent in good company.</p>
            <div className="signature">B<span>&amp;</span>R <small>stays</small></div>
          </div>
          <figure className="intro-image reveal">
            <img src="https://images.unsplash.com/photo-1722248214599-893454399a65?auto=format&fit=crop&w=1500&q=85" alt="Warm, intimate living room with natural wooden details" loading="lazy" />
            <figcaption>Preview photography by Lisa Anna / Unsplash</figcaption>
          </figure>
        </section>

        <section className="features section">
          <div className="features-top">
            <SectionHeading eyebrow="The stay">Thoughtfully <em>yours.</em></SectionHeading>
            <p>A private setting where every detail is considered, and nothing asks you to hurry.</p>
          </div>
          <div className="feature-grid">
            {siteConfig.amenities.map((item, index) => (
              <article className="feature-card reveal" key={item.title}>
                <span className="feature-index">0{index + 1}</span>
                <Icon name={item.icon as IconName} className="feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="centered"><WhatsAppLink className="text-link dark-link">Ask about the stay <Icon name="arrow" className="icon" /></WhatsAppLink></div>
        </section>

        <section className="gallery-section section" id="gallery">
          <div className="gallery-header">
            <SectionHeading eyebrow="The details">A glimpse of<br /><em>your getaway.</em></SectionHeading>
            <div>
              <p>Warm corners, considered details, and all the room you need to simply be.</p>
              <p className="replace-note">Preview imagery shown for art direction. Replace with actual property photographs before publishing.</p>
            </div>
          </div>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <button className={`gallery-item ${image.className}`} key={image.url} onClick={() => setLightbox(index)} onKeyDown={(event) => galleryKey(event, index)} aria-label={`Open image ${index + 1}: ${image.alt}`}>
                <img src={image.url} alt={image.alt} loading="lazy" />
                <span>View image <Icon name="arrow" className="icon" /></span>
              </button>
            ))}
          </div>
          <div className="gallery-cta">
            <p>Like what you see?</p>
            <WhatsAppLink className="button button-dark">Check available dates <Icon name="arrow" className="icon" /></WhatsAppLink>
          </div>
        </section>

        <section className="experience section" id="experience">
          <SectionHeading eyebrow="The experience" className="experience-title">Make room for<br /><em>the little things.</em></SectionHeading>
          <div className="experience-list">
            {experiences.map(([number, title, copy]) => (
              <article className="experience-item reveal" key={title}>
                <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="location section" id="location">
          <div className="location-image reveal">
            <img src="https://images.unsplash.com/photo-1658057698470-59c5033ce504?auto=format&fit=crop&w=1700&q=85" alt="Green hills and forest landscape in Karjat, Maharashtra" loading="lazy" />
            <span>Karjat, Maharashtra</span>
          </div>
          <div className="location-copy reveal">
            <SectionHeading eyebrow="Find your way">A little away from<br /><em>the everyday.</em></SectionHeading>
            <p className="lead">Find your slower side in Karjat, Maharashtra.</p>
            <p>{siteConfig.location.description}</p>
            <a className="button button-outline" href={siteConfig.location.mapsUrl} target="_blank" rel="noreferrer"><Icon name="map" className="icon" />Explore Karjat on Maps</a>
            <p className="location-note">For privacy, the exact address is shared directly after your booking enquiry.</p>
          </div>
        </section>

        <section className="booking section">
          <div className="booking-copy">
            <p className="eyebrow">Plan your pause</p>
            <h2>Your little getaway<br /><em>starts here.</em></h2>
            <p>Tell us your dates, and let’s plan your stay.</p>
            <p className="booking-footnote">Availability, pricing, and booking enquiries — all in one conversation.</p>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <div className="form-row">
              <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
              <label>Guests<select name="guests" defaultValue="2" required><option value="1">1 guest</option><option value="2">2 guests</option></select></label>
            </div>
            <div className="form-row">
              <label>Check-in<input name="checkin" type="date" required /></label>
              <label>Check-out<input name="checkout" type="date" required /></label>
            </div>
            <label>Anything we should know?<textarea name="message" rows={2} placeholder="Optional message" /></label>
            <button className="button button-light form-submit" type="submit"><Icon name="whatsapp" className="icon" />Continue on WhatsApp</button>
            <p>Submitting this form opens WhatsApp. It does not confirm a booking.</p>
          </form>
        </section>

        <section className="faqs section" id="faqs">
          <div className="faq-intro">
            <SectionHeading eyebrow="Good to know">A few things<br /><em>you may wonder.</em></SectionHeading>
            <p>Can’t find what you’re looking for?</p>
            <WhatsAppLink className="text-link dark-link">Chat with us <Icon name="arrow" className="icon" /></WhatsAppLink>
          </div>
          <div className="accordion">
            {siteConfig.faqs.map((item, index) => {
              const isOpen = faq === index
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                  <button aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => setFaq(isOpen ? null : index)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>{item.question}<b>{isOpen ? '−' : '+'}</b>
                  </button>
                  <div className="faq-panel" id={`faq-panel-${index}`} role="region"><p>{item.answer}</p></div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow">Come away for a while</p>
          <h2>Somewhere to slow down.<br /><em>Someone to share it with.</em></h2>
          <WhatsAppLink className="button button-light"><Icon name="whatsapp" className="icon" />Let’s talk on WhatsApp</WhatsAppLink>
          <div className="closing-mark">B<span>&amp;</span>R <small>stays</small></div>
        </section>
      </main>

      <footer>
        <a href="#home" className="wordmark footer-wordmark"><span>B&amp;R</span> stays</a>
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a><a href="#stay">The Stay</a><a href="#gallery">Gallery</a><a href="#location">Location</a><a href="#faqs">FAQs</a>
          <WhatsAppLink>WhatsApp</WhatsAppLink><a href="#privacy">Privacy</a>
        </nav>
        <div id="privacy" className="footer-bottom">
          <p>© {new Date().getFullYear()} B&amp;R stays. All rights reserved.</p>
          <p>No personal information is stored by this website. Enquiries continue privately on WhatsApp.</p>
        </div>
      </footer>

      <WhatsAppLink className="floating-wa" message="Hi B&R stays! I'd like to enquire about your Karjat stay." ><Icon name="whatsapp" className="icon" /><span>Enquire</span></WhatsAppLink>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image gallery">
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery"><Icon name="close" className="icon" /></button>
          <button className="lightbox-prev" onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)} aria-label="Previous image"><Icon name="next" className="icon" /></button>
          <figure><img src={gallery[lightbox].url.replace('w=1400', 'w=2000').replace('w=1600', 'w=2000')} alt={gallery[lightbox].alt} /><figcaption>{lightbox + 1} / {gallery.length} · Preview photo by {gallery[lightbox].credit} on Unsplash</figcaption></figure>
          <button className="lightbox-next" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="Next image"><Icon name="next" className="icon" /></button>
        </div>
      )}
    </>
  )
}

export default App
