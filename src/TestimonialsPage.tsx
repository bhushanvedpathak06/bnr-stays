import { useEffect, useState } from 'react'
import { getWhatsAppUrl } from './siteConfig'

// Add up to 10 real, permission-approved guest reviews here.
// Each item supports: quote, name, detail, rating (1-5), photo (image URL), initials.
const testimonials: Array<{
  quote: string
  name: string
  detail: string
  rating: number
  photo?: string
  initials: string
}> = []

const MAX_TESTIMONIALS = 10

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
}

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = Math.min(testimonials.length, MAX_TESTIMONIALS)
  const active = testimonials[activeIndex]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goTo = (index: number) => {
    if (!total) return
    setActiveIndex((index + total) % total)
  }

  return (
    <main className="testimonials-page">
      <header className="testimonials-header">
        <a href="/" className="wordmark" aria-label="B and R stays home"><span>B&amp;R</span> stays</a>
        <nav aria-label="Main navigation">
          <a href="/#our-stays">Our stays</a>
          <a href="/#our-story">Our story</a>
          <a href="/testimonials" aria-current="page">Testimonials</a>
          <a href="/#brand-contact">Contact</a>
        </nav>
        <a className="testimonials-header-cta" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">Plan your stay <Arrow /></a>
      </header>

      <section className="testimonials-hero">
        <div className="testimonials-hero-image" role="img" aria-label="A peaceful, warmly lit getaway interior" />
        <div className="testimonials-hero-shade" />
        <div className="testimonials-hero-content">
          <p className="eyebrow">Notes from a little escape</p>
          <h1>Stories that<br /><em>stay with us.</em></h1>
          <p>Every thoughtful stay becomes a memory. Here’s a little of what the B&amp;R feeling is all about.</p>
          <a href="#guest-notes" className="testimonials-scroll">Read the guest notes <span>↓</span></a>
        </div>
        <span className="testimonials-hero-caption">B&amp;R stays · Karjat, Maharashtra</span>
      </section>

      <section className="testimonials-intro" id="guest-notes">
        <p className="eyebrow">The guestbook</p>
        <h2>Little moments.<br /><em>Lovely memories.</em></h2>
        <p>Real words, real faces, and little moments our guests take home. Every story is shared with care.</p>
      </section>

      <section className="testimonials-carousel" aria-label="Guest testimonials">
        {active ? (
          <>
            <article className="testimonial-feature-card" aria-live="polite">
              <div className="testimonial-feature-photo">
                {active.photo ? <img src={active.photo} alt={`${active.name}, B&R Stays guest`} /> : <div className="testimonial-photo-fallback">{active.initials}</div>}
              </div>
              <div className="testimonial-feature-copy">
                <div className="testimonial-card-top">
                  <span className="testimonial-number">GUEST STORY · {String(activeIndex + 1).padStart(2, '0')}</span>
                  <span className="testimonial-stars" aria-label={`${active.rating} out of 5 stars`}>{'★'.repeat(Math.max(0, Math.min(5, active.rating)))}</span>
                </div>
                <span className="testimonial-quote-mark" aria-hidden="true">“</span>
                <blockquote>{active.quote}</blockquote>
                <div className="testimonial-author">
                  <span><strong>{active.name}</strong><small>{active.detail}</small></span>
                </div>
              </div>
            </article>
            <div className="testimonial-carousel-controls">
              <span className="testimonial-count">{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(total).padStart(2, '0')}</span>
              <div className="testimonial-dots" aria-label="Choose a guest story">
                {testimonials.slice(0, MAX_TESTIMONIALS).map((item, index) => (
                  <button key={`${item.name}-${index}`} type="button" className={index === activeIndex ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`Show guest story ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} />
                ))}
              </div>
              <div className="testimonial-arrows">
                <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous testimonial">←</button>
                <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next testimonial">→</button>
              </div>
            </div>
          </>
        ) : (
          <div className="testimonials-empty-state">
            <span className="testimonial-quote-mark" aria-hidden="true">“</span>
            <p className="eyebrow">A guestbook in the making</p>
            <h3>Your guests’ stories<br /><em>belong here.</em></h3>
            <p>We’re saving this space for genuine guest words and photographs. Up to ten stories can be featured here.</p>
          </div>
        )}
      </section>

      <section className="testimonials-values">
        <div><p className="eyebrow">The B&amp;R feeling</p><h2>More than a place<br /><em>to stay.</em></h2></div>
        <div className="testimonials-values-copy">
          <p>Unhurried mornings. Warm, welcoming spaces. Time that feels like your own. That’s the experience we’re here to create, one stay at a time.</p>
          <a href="/#our-story" className="testimonials-text-link">A little about our story <Arrow /></a>
        </div>
      </section>

      <section className="testimonials-cta">
        <p className="eyebrow">Your story could be next</p>
        <h2>Come make a little<br /><em>memory of your own.</em></h2>
        <p>Find your slower side at The Two of Us, Karjat.</p>
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="testimonials-cta-button">Enquire about your stay <Arrow /></a>
      </section>

      <footer className="testimonials-footer">
        <a href="/" className="wordmark"><span>B&amp;R</span> stays</a>
        <p>Thoughtful stays. Meaningful moments.</p>
        <nav aria-label="Footer navigation"><a href="/#our-stays">Our stays</a><a href="/#our-story">Our story</a><a href="/testimonials">Testimonials</a><a href="/#brand-contact">Contact</a></nav>
        <small>© {new Date().getFullYear()} B&amp;R stays. All rights reserved.</small>
      </footer>
    </main>
  )
}
