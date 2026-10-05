import { Link } from 'react-router-dom';

export default function FTL() {
  return (
    <>
      <section className="ftl-hero">
        <div className="container">
          <div className="ftl-hero-content">
            <span className="ftl-hero-badge">FULL TRUCKLOAD</span>
            <h1 className="ftl-hero-title">Full Truckload (FTL) Solutions</h1>
            <p className="ftl-hero-subtitle">
              Dedicated full truckload capacity for shipments requiring exclusive
              use of equipment. Reliable, efficient, and scalable transportation
              solutions across North America.
            </p>
            <div className="ftl-hero-tags">
              <span className="ftl-hero-tag">Dedicated Equipment</span>
              <span className="ftl-hero-tag">Nationwide Coverage</span>
              <span className="ftl-hero-tag">24/7 Support</span>
            </div>
            <img
              src="/assets/images/industry/ftl.png"
              alt="FTL Services"
              className="ftl-hero-icon"
            />
          </div>
        </div>
      </section>

      <div className="ftl-banner">
        <div className="container">
          <div className="ftl-banner-inner">
            <div className="ftl-banner-item">
              <span className="ftl-banner-dot" />
              <span>Dedicated Equipment</span>
            </div>
            <span className="ftl-banner-sep">|</span>
            <div className="ftl-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Nationwide Coverage</span>
            </div>
            <span className="ftl-banner-sep">|</span>
            <div className="ftl-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <section className="ftl-overview">
        <div className="container">
          <div className="ftl-section-label">OVERVIEW</div>
          <h2 className="ftl-section-title">Full Truckload Solutions Built for Performance</h2>
          <p className="ftl-section-desc">
            Supply Stream Corp provides comprehensive Full Truckload (FTL)
            services designed to ensure fast, secure, and uninterrupted freight
            movement. We offer a wide range of equipment options including dry
            vans, flatbeds, and box trucks to match every shipping requirement.
          </p>
          <p className="ftl-section-desc">
            Our carrier network is built to handle both standard and specialized
            freight with maximum efficiency, real-time visibility, and consistent
            on-time performance.
          </p>
        </div>
      </section>

      <section className="ftl-equipment">
        <div className="container">
          <div className="ftl-section-label">EQUIPMENT OPTIONS</div>
          <h2 className="ftl-section-title">Equipment Options</h2>
          <div className="ftl-grid ftl-grid-4">
            <div className="ftl-card">
              <div className="ftl-card-icon">VN</div>
              <h3 className="ftl-card-title">Dry Van</h3>
              <p className="ftl-card-text">
                Standard enclosed trailers ideal for general freight, palletized
                goods, boxed shipments, and non-perishable cargo. Provides secure
                and weather-protected transport across all routes.
              </p>
            </div>
            <div className="ftl-card">
              <div className="ftl-card-icon">BT</div>
              <h3 className="ftl-card-title">Box Truck</h3>
              <p className="ftl-card-text">
                Flexible solution for short-haul and urban deliveries. Ideal for
                LTL consolidation, retail distribution, and time-sensitive freight
                requiring quick access and maneuverability.
              </p>
            </div>
            <div className="ftl-card">
              <div className="ftl-card-icon">FB</div>
              <h3 className="ftl-card-title">Flatbed</h3>
              <p className="ftl-card-text">
                Open-deck trailers designed for oversized, heavy, or irregular
                cargo. Includes step deck and specialized configurations for
                construction equipment and industrial shipments.
              </p>
            </div>
            <div className="ftl-card">
              <div className="ftl-card-icon">SP</div>
              <h3 className="ftl-card-title">Specialized Equipment</h3>
              <p className="ftl-card-text">
                Custom transport solutions for unique freight requirements
                including high-value goods, hazmat cargo, and project-based
                shipments requiring special handling or permits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftl-benefits">
        <div className="container">
          <div className="ftl-section-label">WHY CHOOSE US</div>
          <h2 className="ftl-section-title">Why Choose Us</h2>
          <div className="ftl-grid ftl-grid-4">
            <div className="ftl-card">
              <h3 className="ftl-card-title">Extensive Carrier Network</h3>
              <p className="ftl-card-text">
                Access to a large network of vetted carriers ensuring capacity
                availability across all equipment types when you need it.
              </p>
            </div>
            <div className="ftl-card">
              <h3 className="ftl-card-title">Real-Time Tracking</h3>
              <p className="ftl-card-text">
                GPS-enabled tracking with live shipment visibility, proactive
                alerts, and exception management for complete control.
              </p>
            </div>
            <div className="ftl-card">
              <h3 className="ftl-card-title">Reliable &amp; Scalable Solutions</h3>
              <p className="ftl-card-text">
                Flexible capacity designed to scale with your business needs,
                from single loads to high-volume freight operations.
              </p>
            </div>
            <div className="ftl-card">
              <h3 className="ftl-card-title">Dedicated Support Team</h3>
              <p className="ftl-card-text">
                Experienced logistics professionals managing your shipments from
                pickup to delivery for smooth coordination and issue resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftl-cta">
        <div className="container">
          <div className="ftl-cta-inner">
            <span className="ftl-cta-badge">GET STARTED</span>
            <h2 className="ftl-cta-title">Ready to Ship Full Truckload?</h2>
            <p className="ftl-cta-text">
              Contact Supply Stream Corp today for competitive FTL rates and
              dependable transportation solutions tailored to your business.
            </p>
            <div className="ftl-cta-actions">
              <Link to="/contact-us" className="ftl-cta-btn ftl-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
              <Link to="/contact-us" className="ftl-cta-btn ftl-cta-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
