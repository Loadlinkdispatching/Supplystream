import { Link } from 'react-router-dom';

export default function TransportationPage() {
  return (
    <>
      <section className="transportation-hero">
        <div className="container">
          <div className="transportation-hero-content">
            <span className="transportation-hero-badge">TRANSPORTATION MANAGEMENT</span>
            <h1 className="transportation-hero-title">Transportation Services</h1>
            <p className="transportation-hero-subtitle">
              End-to-end transportation management solutions combining multiple
              modes and carriers to create efficient, cost-effective supply
              chain strategies for your business.
            </p>
            <img
              src="/assets/images/industry/transportation.png"
              alt="Transportation Services"
              className="transportation-hero-icon"
            />
          </div>
        </div>
      </section>

      <div className="transportation-banner">
        <div className="container">
          <div className="transportation-banner-inner">
            <div className="transportation-banner-item">
              <span className="transportation-banner-dot" />
              <span>Multi-Modal Solutions</span>
            </div>
            <span className="transportation-banner-sep">|</span>
            <div className="transportation-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Strategic Planning</span>
            </div>
            <span className="transportation-banner-sep">|</span>
            <div className="transportation-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>

      <section className="transportation-overview">
        <div className="container">
          <div className="transportation-section-label">OVERVIEW</div>
          <h2 className="transportation-section-title">Integrated Transportation Management</h2>
          <p className="transportation-section-desc">
            Supply Stream Corp delivers comprehensive transportation management
            services that optimize your entire logistics network. From carrier
            procurement to route optimization, we handle the complexity so you
            can focus on your core business.
          </p>
          <div className="transportation-grid">
            <div className="transportation-card">
              <div className="transportation-card-icon">MP</div>
              <h3 className="transportation-card-title">Mode Planning</h3>
              <p className="transportation-card-text">
                Strategic mode selection optimizing cost, transit time, and
                reliability. Evaluate truckload, LTL, intermodal, and
                expedited options for each shipment.
              </p>
            </div>
            <div className="transportation-card">
              <div className="transportation-card-icon">CP</div>
              <h3 className="transportation-card-title">Carrier Procurement</h3>
              <p className="transportation-card-text">
                Comprehensive carrier sourcing, vetting, and rate negotiation
                to build a high-performance carrier network tailored to your
                shipping patterns.
              </p>
            </div>
            <div className="transportation-card">
              <div className="transportation-card-icon">RO</div>
              <h3 className="transportation-card-title">Route Optimization</h3>
              <p className="transportation-card-text">
                Advanced routing algorithms and load planning to minimize
                empty miles, reduce fuel costs, and improve on-time delivery
                performance.
              </p>
            </div>
            <div className="transportation-card">
              <div className="transportation-card-icon">AN</div>
              <h3 className="transportation-card-title">Analytics &amp; Reporting</h3>
              <p className="transportation-card-text">
                Detailed transportation analytics with cost tracking, KPI
                dashboards, and actionable insights for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="transportation-benefits">
        <div className="container">
          <div className="transportation-section-label">WHY CHOOSE US</div>
          <h2 className="transportation-section-title">Why Supply Stream Corp for Transportation?</h2>
          <div className="transportation-grid transportation-grid-3">
            <div className="transportation-card">
              <h3 className="transportation-card-title">Integrated Approach</h3>
              <p className="transportation-card-text">
                Seamlessly manage all transportation modes through a single
                point of contact with unified reporting and billing.
              </p>
            </div>
            <div className="transportation-card">
              <h3 className="transportation-card-title">Cost Optimization</h3>
              <p className="transportation-card-text">
                Leverage our buying power and analytics to reduce
                transportation costs while maintaining or improving service
                levels.
              </p>
            </div>
            <div className="transportation-card">
              <h3 className="transportation-card-title">Scalable Solutions</h3>
              <p className="transportation-card-text">
                Flexible transportation programs that scale with your
                business, from startups to enterprise-level operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="transportation-cta">
        <div className="container">
          <div className="transportation-cta-inner">
            <span className="transportation-cta-badge">GET STARTED</span>
            <h2 className="transportation-cta-title">Optimize Your Transportation Network</h2>
            <p className="transportation-cta-text">
              Contact our transportation management team today for a
              comprehensive logistics assessment and competitive quote.
            </p>
            <div className="transportation-cta-actions">
              <Link to="/contact-us" className="transportation-cta-btn transportation-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
              <Link to="/contact-us" className="transportation-cta-btn transportation-cta-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
