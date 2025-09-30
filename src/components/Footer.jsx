import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-dot" aria-hidden="true" />
          <span className="brand-text">Jeton-like</span>
        </div>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Fees</a>
          <a href="#">Help</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Jeton-like
        </div>
      </div>
    </footer>
  )
}
