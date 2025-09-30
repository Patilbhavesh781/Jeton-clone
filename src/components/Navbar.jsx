import React from "react"
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className="_navbar">
      <div className="g-row-full flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="/" className="homepage-link relative overflow-hidden" aria-label="Homepage">
          <span className="_wordmark" data-tone="neutral">
            <div className="glyphs">
              {/* Replace with your actual SVG logo parts */}
              <div className="glyph">
                <svg width="230" height="415" viewBox="0 0 230 415">
                  <path d="M117.963 329.079H0.951172V408.049H130.336..." />
                </svg>
              </div>
              <div className="glyph">
                <svg width="359" height="415" viewBox="0 0 359 415">
                  <path d="M266.473 98.8964C242.531 85.2262..." />
                </svg>
              </div>
              {/* ... Add rest of SVG glyphs if you want exact Jeton wordmark */}
            </div>
            <svg className="spacer" width="1558" height="415" aria-hidden="true" />
          </span>
        </a>

        {/* Language + CTA */}
        <div className="lang-cta-wrapper">
          {/* Language Dropdown */}
          <div className="_dropdown _language-select">
            <button
              className="_dropdown-button flex items-center body"
              data-button
              data-tone="orange"
              data-variant="outline"
            >
              <span className="_icon">🌐</span>
              <span className="ml-1">en</span>
              <span className="_icon chevron">▼</span>
            </button>
          </div>

          {/* CTAs */}
          <div className="ctas flex gap-3">
            <a href="/login" className="_button" data-tone="neutral" data-variant="outline">
              <span className="label">Login</span>
            </a>
            <a href="/signup" className="_button" data-tone="neutral" data-variant="primary">
              <span className="label">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
