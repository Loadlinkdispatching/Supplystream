import { Link } from 'react-router-dom';

export default function LoadTracking() {

  return (
    <>
      {/* Hero */}
      <section className="lt-hero">
        <div className="container">
          <div className="lt-hero-content">
            <span className="lt-hero-badge">LOAD TRACKING</span>
            <h1 className="lt-hero-title">Track Your Shipment</h1>
            <p className="lt-hero-subtitle">
              Real-time visibility for your freight across all transport modes.
            </p>
          </div>
        </div>
      </section>



      {/* Quote Section */}
      <section className="lt-quote">
        <div className="container">
          <div className="lt-section-label">REQUEST A QUOTE</div>
          <h2 className="lt-section-title">Get an Instant Freight Quote</h2>
          <p className="lt-section-desc">
            Choose your shipping mode and receive a competitive rate from our team.
          </p>
          <div className="lt-quote-grid">
            <Link to="/otr" className="lt-quote-card">
              <div className="lt-quote-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="lt-quote-card-title">OTR</h3>
              <p className="lt-quote-card-text">Over-the-road freight solutions with nationwide carrier coverage.</p>
              <span className="lt-quote-card-link">Get Quote &rarr;</span>
            </Link>
            <Link to="/services/drayage" className="lt-quote-card">
              <div className="lt-quote-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <h3 className="lt-quote-card-title">Drayage</h3>
              <p className="lt-quote-card-text">Container drayage and intermodal transfer services for efficient port-to-door delivery.</p>
              <span className="lt-quote-card-link">Get Quote &rarr;</span>
            </Link>
            <Link to="/services/warehousing-storage" className="lt-quote-card">
              <div className="lt-quote-card-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 1.98 2.23 6.02 2.23 8 0 .98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.14.52-.06.78L3.95 19z" />
                </svg>
              </div>
              <h3 className="lt-quote-card-title">Warehousing</h3>
              <p className="lt-quote-card-text">Strategic storage and distribution solutions with real-time inventory management.</p>
              <span className="lt-quote-card-link">Get Quote &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="lt-features">
        <div className="container">
          <div className="lt-section-label">WHY TRACK WITH US</div>
          <h2 className="lt-section-title">Total Visibility Across Every Shipment</h2>
          <div className="lt-features-grid">
            <div className="lt-feature-card">
              <div className="lt-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5" />
                </svg>
              </div>
              <h3 className="lt-feature-title">Real-Time GPS Tracking</h3>
              <p className="lt-feature-text">Live location updates for your shipments with detailed milestone tracking.</p>
            </div>
            <div className="lt-feature-card">
              <div className="lt-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="lt-feature-title">Instant Status Alerts</h3>
              <p className="lt-feature-text">Proactive notifications for every event from pickup through delivery.</p>
            </div>
            <div className="lt-feature-card">
              <div className="lt-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8z" />
                </svg>
              </div>
              <h3 className="lt-feature-title">Document Management</h3>
              <p className="lt-feature-text">Access all shipping documents, proofs of delivery, and reports in one place.</p>
            </div>
            <div className="lt-feature-card">
              <div className="lt-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                </svg>
              </div>
              <h3 className="lt-feature-title">Multi-Modal Support</h3>
              <p className="lt-feature-text">Track OTR, air, and ocean shipments from a single centralized dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lt-cta">
        <div className="container">
          <div className="lt-cta-inner">
            <span className="lt-cta-badge">GET STARTED</span>
            <h2 className="lt-cta-title">Ready to Ship?</h2>
            <p className="lt-cta-text">
              Get a competitive freight quote in minutes. Our logistics team is ready to support your shipping needs.
            </p>
            <div className="lt-cta-actions">
              <Link to="/contact-us" className="lt-cta-btn lt-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
              <Link to="/contact-us" className="lt-cta-btn lt-cta-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
