import '../styles/Testimonials.css'

const testimonials = [
  { name: 'Vamsi K', text: 'Seamless experience — loved the card.' },
  { name: 'Leonie A', text: 'Very intuitive. Fast transfers.' },
  { name: 'Karl R', text: 'Great support and secure flows.' }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>Trusted by users worldwide</h2>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testi-card">
              <p>“{t.text}”</p>
              <footer>- {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
