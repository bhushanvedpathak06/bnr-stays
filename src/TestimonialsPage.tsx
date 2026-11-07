import { useEffect } from 'react'
import { getWhatsAppUrl } from './siteConfig'

const testimonials = [
  { quote: 'A lovely little pause from the everyday. The space felt warm, calm, and thoughtfully put together.', name: 'Illustrative sample', detail: 'Replace with an approved guest review', initials: 'S' },
  { quote: 'Exactly the kind of quiet getaway we were looking for. Slow mornings and time to simply be together.', name: 'Illustrative sample', detail: 'Replace with an approved guest review', initials: 'S' },
  { quote: 'The atmosphere made the stay feel special. A cozy place to unwind and make a few memories.', name: 'Illustrative sample', detail: 'Replace with an approved guest review', initials: 'S' },
]

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
}

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <p>We believe the best part of a getaway is how it makes you feel. These sample notes show how real guest feedback can be presented. Replace them with genuine reviews shared with your permission before publishing.</p>
      </section>

      <section className="testimonials-grid" aria-label="Guest testimonials">
        {testimonials.map((item, index) => (
          <article className={`testimonial-card testimonial-card-${index + 1}`} key={item.name}>
            <div className="testimonial-card-top"><span className="testimonial-number">0{index + 1} / SAMPLE COPY</span><span className="testimonial-stars" aria-label="Five decorative stars">✳ ✳ ✳</span></div>
            <span className="testimonial-quote-mark" aria-hidden="true">“</span>
            <blockquote>{item.quote}</blockquote>
            <div className="testimonial-author">
              <span className="testimonial-avatar">{item.initials}</span>
              <span><strong>{item.name}</strong><small>{item.detail}</small></span>
            </div>
          </article>
        ))}
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
