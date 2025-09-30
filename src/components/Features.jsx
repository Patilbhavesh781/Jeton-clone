import '../styles/Features.css'

const items = [
  { title: 'Add & Send', desc: 'Fast, secure transfers and wallet top-ups.' },
  { title: 'Exchange', desc: 'Convert currencies with transparent fees.' },
  { title: 'Jeton Card', desc: 'Virtual & physical cards for global use.' }
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>All your finances, in one app</h2>
        <div className="feature-grid">
          {items.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true" />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
