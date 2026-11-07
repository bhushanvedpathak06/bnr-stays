import { useEffect } from 'react'
import { getWhatsAppUrl } from './siteConfig'

// Fictional preview content and stock portraits. Replace with genuine guest reviews/photos
// shared with permission before presenting these as real customer testimonials.
const testimonials = [
  { name: "Aarav & Meera", detail: "Mumbai · Weekend getaway", quote: "We came here to slow down. The warm lighting and cosy corners made our little escape feel special.", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85", initials: "AM", rating: 5 },
  { name: "Rohan & Ananya", detail: "Pune · Couple stay", quote: "A thoughtfully put-together space. We loved coming back after a day out and relaxing together.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85", initials: "RA", rating: 5 },
  { name: "Ishita Shah", detail: "Thane · Short break", quote: "A lovely change of pace from the city. The place felt welcoming from the moment we arrived.", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85", initials: "IS", rating: 5 },
  { name: "Kabir & Sana", detail: "Navi Mumbai · Weekend stay", quote: "The little details made all the difference. We had a relaxed weekend and left refreshed.", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85", initials: "KS", rating: 5 },
  { name: "Priya Nair", detail: "Mumbai · Couple escape", quote: "Loved the calm atmosphere and cosy evenings. A lovely spot when you just want time for yourself.", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85", initials: "PN", rating: 5 },
  { name: "Dev & Riya", detail: "Lonavala · Mini vacation", quote: "A sweet little getaway with a warm, comfortable feel. We especially enjoyed the slow mornings.", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=700&q=85", initials: "DR", rating: 5 },
  { name: "Neha Kulkarni", detail: "Pune · One-night stay", quote: "Beautifully simple and peaceful. The space made our quick break feel longer.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85", initials: "NK", rating: 5 },
  { name: "Arjun Mehta", detail: "Mumbai · Weekend reset", quote: "Just what I needed to unplug for a bit. Comfortable, calm and a refreshing change from routine.", photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=85", initials: "AR", rating: 5 },
  { name: "Simran & Karan", detail: "Panvel · Couple stay", quote: "We enjoyed the privacy and relaxed vibe. A lovely setting to spend quality time together.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85", initials: "SK", rating: 5 },
  { name: "Aditi Rao", detail: "Mumbai · Short escape", quote: "A cosy place to pause, recharge and enjoy a change of scene. Would love another little break.", photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=700&q=85", initials: "AD", rating: 5 },
]

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
}

function Stars() {
  return <span className="testimonial-stars" aria-label="5 out of 5 demo stars">★★★★★</span>
}

export default function TestimonialsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="testimonials-page">
      <header className="testimonials-header">
        <a href="/" className="wordmark" aria-label="B and R stays home"><span>B&amp;R</span> stays</a>
        <nav aria-label="Main navigation">
          <a href="/#our-stays">Our stays</a><a href="/#our-story">Our story</a>
          <a href="/testimonials" aria-current="page">Testimonials</a><a href="/#brand-contact">Contact</a>
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
          <a href="#guest-notes" className="testimonials-scroll">Explore 10 guest stories <span>↓</span></a>
        </div>
        <span className="testimonials-hero-caption">B&amp;R stays · Karjat, Maharashtra</span>
      </section>

      <section className="testimonials-intro" id="guest-notes">
        <p className="eyebrow">The guestbook · 10 stories</p>
        <h2>Little moments.<br /><em>Lovely memories.</em></h2>
        <p>A collection of moments inspired by the warm, unhurried stays we want every guest to remember.</p>
        <span className="testimonial-demo-note">Design preview · fictional names, stock portraits and sample reviews</span>
      </section>

      <section className="testimonial-wall" aria-label="Ten illustrative guest testimonial cards">
        {testimonials.map((item, index) => (
          <article className={index === 0 ? 'testimonial-wall-card testimonial-wall-featured' : 'testimonial-wall-card'} key={item.name}>
            <div className="testimonial-wall-photo">
              <img src={item.photo} alt={`Illustrative stock portrait for ${item.name}`} loading={index < 3 ? 'eager' : 'lazy'} />
              <span className="testimonial-wall-index">{String(index + 1).padStart(2, '0')} / 10</span>
            </div>
            <div className="testimonial-wall-copy">
              <div className="testimonial-wall-meta"><Stars /><span>DEMO REVIEW</span></div>
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{item.initials}</span>
                <span><strong>{item.name}</strong><small>{item.detail}</small></span>
              </div>
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
