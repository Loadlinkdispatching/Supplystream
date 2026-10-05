import { Link } from 'react-router-dom';

export default function Hazmat() {
  return (
    <>
      <section className="hazmat-hero">
        <div className="container">
          <div className="hazmat-hero-content">
            <span className="hazmat-hero-badge">HAZARDOUS MATERIALS</span>
            <h1 className="hazmat-hero-title">Hazardous Materials (HAZMAT) Transportation</h1>
            <p className="hazmat-hero-subtitle">
              Compliant and safe transportation of hazardous materials. Fully
              certified carriers, strict safety protocols, and expert regulatory
              compliance support for all hazardous cargo classes.
            </p>
            <div className="hazmat-hero-tags">
              <span className="hazmat-hero-tag">Fully Certified Carriers</span>
              <span className="hazmat-hero-tag">Regulatory Compliance</span>
              <span className="hazmat-hero-tag">Safety First</span>
            </div>
            <img
              src="/assets/images/industry/hazmat.png"
              alt="Hazmat Services"
              className="hazmat-hero-icon"
            />
          </div>
        </div>
      </section>

      <div className="hazmat-banner">
        <div className="container">
          <div className="hazmat-banner-inner">
            <div className="hazmat-banner-item">
              <span className="hazmat-banner-dot" />
              <span>Fully Certified Carriers</span>
            </div>
            <span className="hazmat-banner-sep">|</span>
            <div className="hazmat-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Regulatory Compliance</span>
            </div>
            <span className="hazmat-banner-sep">|</span>
            <div className="hazmat-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Safety First</span>
            </div>
          </div>
        </div>
      </div>

      <section className="hazmat-overview">
        <div className="container">
          <div className="hazmat-section-label">OVERVIEW</div>
          <h2 className="hazmat-section-title">Safe, Compliant, Fully Controlled</h2>
          <p className="hazmat-section-desc">
            Supply Stream Corp provides specialized hazardous materials
            transportation services designed to ensure full safety, compliance,
            and operational control. From classification and documentation to
            secure transport and emergency response planning, we manage every
            stage with precision and care.
          </p>
        </div>
      </section>

      <section className="hazmat-classes">
        <div className="container">
          <div className="hazmat-section-label">HAZMAT CLASSES HANDLED</div>
          <h2 className="hazmat-section-title">Hazmat Classes Handled</h2>
          <div className="hazmat-grid">
            <div className="hazmat-card">
              <div className="hazmat-card-icon">C1</div>
              <h3 className="hazmat-card-title">Class 1: Explosives</h3>
              <p className="hazmat-card-text">
                Secure transport with strict safety controls and route planning.
              </p>
            </div>
            <div className="hazmat-card">
              <div className="hazmat-card-icon">C2</div>
              <h3 className="hazmat-card-title">Class 2: Gases</h3>
              <p className="hazmat-card-text">
                Safe handling of compressed, liquefied, and dissolved gases.
              </p>
            </div>
            <div className="hazmat-card">
              <div className="hazmat-card-icon">C3</div>
              <h3 className="hazmat-card-title">Class 3: Flammable Liquids</h3>
              <p className="hazmat-card-text">
                Grounding systems and fire-safe transport protocols.
              </p>
            </div>
            <div className="hazmat-card">
              <div className="hazmat-card-icon">C8</div>
              <h3 className="hazmat-card-title">Class 8: Corrosives</h3>
              <p className="hazmat-card-text">
                Controlled handling of acids and reactive substances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hazmat-benefits">
        <div className="container">
          <div className="hazmat-section-label">WHY CHOOSE US</div>
          <h2 className="hazmat-section-title">Why Choose Us</h2>
          <div className="hazmat-grid hazmat-grid-4">
            <div className="hazmat-card">
              <h3 className="hazmat-card-title">Certified Hazmat Expertise</h3>
              <p className="hazmat-card-text">
                DOT, EPA, and OSHA compliant professionals managing every
                shipment with certified knowledge and experience.
              </p>
            </div>
            <div className="hazmat-card">
              <h3 className="hazmat-card-title">Advanced Safety Systems</h3>
              <p className="hazmat-card-text">
                Comprehensive training programs, emergency response planning,
                and regular equipment inspections.
              </p>
            </div>
            <div className="hazmat-card">
              <h3 className="hazmat-card-title">Full Regulatory Compliance</h3>
              <p className="hazmat-card-text">
                Complete documentation and filings including shipping papers,
                labels, placards, and regulatory submissions.
              </p>
            </div>
            <div className="hazmat-card">
              <h3 className="hazmat-card-title">Secure Transport</h3>
              <p className="hazmat-card-text">
                Dedicated equipment and trained carriers ensuring safe and
                compliant transportation of hazardous materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hazmat-cta">
        <div className="container">
          <div className="hazmat-cta-inner">
            <span className="hazmat-cta-badge">GET STARTED</span>
            <h2 className="hazmat-cta-title">Need Safe &amp; Compliant Hazmat Transport?</h2>
            <p className="hazmat-cta-text">
              Contact Supply Stream Corp today for tailored hazmat logistics
              solutions that meet all regulatory requirements.
            </p>
            <div className="hazmat-cta-actions">
              <Link to="/contact-us" className="hazmat-cta-btn hazmat-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
              <Link to="/contact-us" className="hazmat-cta-btn hazmat-cta-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
