import '../styles/CardSection.css'

export default function CardSection() {
  return (
    <section className="card-section" id="card">
      <div className="container card-inner">
        <div className="card-left">
          <h2>Jeton Card</h2>
          <p>Use virtual cards for online payments or a physical card worldwide. Manage and secure it in the app.</p>
          <button className="btn-outline">Get Your Card</button>
        </div>
        <div className="card-right" aria-hidden="true">
          <div className="card-visual" />
        </div>
      </div>
    </section>
  )
}
