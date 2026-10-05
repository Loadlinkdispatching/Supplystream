import { Link } from 'react-router-dom';

export default function SupplyChainPage() {
  return (
    <>
      <section className="supplychain-hero">
        <div className="supplychain-hero-bg-wrapper">
          <div className="supplychain-hero-bg-image"></div>
        </div>
      </section>

      <div className="supplychain-banner">
        <div className="container">
          <div className="supplychain-banner-inner">
            <div className="supplychain-banner-item">
              <span className="supplychain-banner-dot" />
              <span>End-to-End Visibility</span>
            </div>
            <span className="supplychain-banner-sep">|</span>
            <div className="supplychain-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Strategic Sourcing</span>
            </div>
            <span className="supplychain-banner-sep">|</span>
            <div className="supplychain-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>

      <section className="supplychain-overview">
        <div className="container">
          <div className="supplychain-section-label">OVERVIEW</div>
          <h2 className="supplychain-section-title">Integrated Supply Chain Management</h2>
          <p className="supplychain-section-desc">
            Supply Stream Corp delivers end-to-end supply chain solutions that
            streamline your operations from procurement to delivery. Our integrated
            approach combines strategic planning, technology, and execution to
            create a resilient and efficient supply chain.
          </p>
          <p className="supplychain-callout">
            From raw material sourcing to final-mile delivery, we provide the
            infrastructure and expertise to manage every link in your supply
            chain so you can focus on growing your business.
          </p>
          <div className="supplychain-grid">
            <div className="supplychain-card">
              <div className="supplychain-card-icon">SP</div>
              <h3 className="supplychain-card-title">Strategic Planning</h3>
              <p className="supplychain-card-text">
                Comprehensive supply chain strategy development including network
                design, demand forecasting, and inventory optimization.
              </p>
            </div>
            <div className="supplychain-card">
              <div className="supplychain-card-icon">PR</div>
              <h3 className="supplychain-card-title">Procurement &amp; Sourcing</h3>
              <p className="supplychain-card-text">
                Strategic sourcing and supplier management to secure quality
                materials at competitive prices while minimizing risk.
              </p>
            </div>
            <div className="supplychain-card">
              <div className="supplychain-card-icon">IN</div>
              <h3 className="supplychain-card-title">Inventory Management</h3>
              <p className="supplychain-card-text">
                Real-time inventory tracking and optimization to reduce carrying
                costs while ensuring product availability.
              </p>
            </div>
            <div className="supplychain-card">
              <div className="supplychain-card-icon">DI</div>
              <h3 className="supplychain-card-title">Distribution &amp; Fulfillment</h3>
              <p className="supplychain-card-text">
                Efficient distribution network management including warehousing,
                order fulfillment, and last-mile delivery coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="supplychain-benefits">
        <div className="container">
          <div className="supplychain-section-label">WHY CHOOSE US</div>
          <h2 className="supplychain-section-title">Why Supply Stream Corp for Your Supply Chain?</h2>
          <div className="supplychain-grid supplychain-grid-3">
            <div className="supplychain-card">
              <h3 className="supplychain-card-title">Integrated Technology Platform</h3>
              <p className="supplychain-card-text">
                Advanced supply chain technology providing real-time visibility,
                analytics, and control across your entire supply chain network
                from a single dashboard.
              </p>
            </div>
            <div className="supplychain-card">
              <h3 className="supplychain-card-title">Proven Cost Reduction</h3>
              <p className="supplychain-card-text">
                Proven methodologies to identify and eliminate inefficiencies,
                reducing total supply chain costs while maintaining service
                quality and delivery performance.
              </p>
            </div>
            <div className="supplychain-card">
              <h3 className="supplychain-card-title">Scalable Operations</h3>
              <p className="supplychain-card-text">
                Flexible solutions that scale with your business, supporting growth
                and adapting to changing market conditions without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="supplychain-cta">
        <div className="container">
          <div className="supplychain-cta-inner">
            <span className="supplychain-cta-badge">GET STARTED</span>
            <h2 className="supplychain-cta-title">Transform Your Supply Chain</h2>
            <p className="supplychain-cta-text">
              Partner with Supply Stream Corp to build a more resilient, efficient,
              and cost-effective supply chain. Contact our team today for a
              comprehensive assessment.
            </p>
            <div className="supplychain-cta-actions">
              <Link to="/contact-us" className="supplychain-cta-btn supplychain-cta-btn-primary">
                Request a Consultation <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
