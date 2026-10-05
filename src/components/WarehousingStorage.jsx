import { Link } from 'react-router-dom';

export default function WarehousingStorage() {
  return (
    <>
      <section className="warehousing-storage-hero">
        <div className="warehousing-storage-hero-bg-wrapper">
          <div className="warehousing-storage-hero-bg-image"></div>
        </div>
      </section>

      <div className="warehousing-banner">
        <div className="container">
          <div className="warehousing-banner-inner">
            <div className="warehousing-banner-item">
              <span className="warehousing-banner-dot" />
              <span>Strategic Locations</span>
            </div>
            <span className="warehousing-banner-sep">|</span>
            <div className="warehousing-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Real-Time Inventory</span>
            </div>
            <span className="warehousing-banner-sep">|</span>
            <div className="warehousing-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Value-Added Services</span>
            </div>
          </div>
        </div>
      </div>

      <section className="warehousing-overview">
        <div className="container">
          <div className="warehousing-section-label">OVERVIEW</div>
          <h2 className="warehousing-section-title">Comprehensive Warehousing &amp; Storage</h2>
          <p className="warehousing-section-desc">
            Supply Stream Corp operates modern warehousing facilities equipped
            with advanced inventory management systems. Our strategic locations
            provide efficient distribution capabilities across key markets.
          </p>
          <div className="warehousing-grid">
            <div className="warehousing-card">
              <div className="warehousing-card-icon">ST</div>
              <h3 className="warehousing-card-title">Storage Solutions</h3>
              <p className="warehousing-card-text">
                Flexible storage options including dry, climate-controlled, and
                bonded warehousing with scalable space to meet your changing
                inventory needs.
              </p>
            </div>
            <div className="warehousing-card">
              <div className="warehousing-card-icon">IM</div>
              <h3 className="warehousing-card-title">Inventory Management</h3>
              <p className="warehousing-card-text">
                Real-time inventory tracking with WMS integration, barcode
                scanning, and cycle counting for accurate stock visibility.
              </p>
            </div>
            <div className="warehousing-card">
              <div className="warehousing-card-icon">PK</div>
              <h3 className="warehousing-card-title">Packing &amp; Kitting</h3>
              <p className="warehousing-card-text">
                Custom packing, labeling, and kitting services including
                bundle assembly, promotional packs, and retail-ready packaging.
              </p>
            </div>
            <div className="warehousing-card">
              <div className="warehousing-card-icon">DC</div>
              <h3 className="warehousing-card-title">Distribution</h3>
              <p className="warehousing-card-text">
                Efficient order fulfillment and distribution with cross-docking
                capabilities, optimized route planning, and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="warehousing-benefits">
        <div className="container">
          <div className="warehousing-section-label">WHY CHOOSE US</div>
          <h2 className="warehousing-section-title">Why Supply Stream Corp for Warehousing?</h2>
          <div className="warehousing-grid warehousing-grid-3">
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Strategic Locations</h3>
              <p className="warehousing-card-text">
                Facilities positioned near major transportation hubs and
                population centers for optimal distribution efficiency.
              </p>
            </div>
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Technology-Driven</h3>
              <p className="warehousing-card-text">
                Advanced WMS technology providing real-time visibility,
                automated reporting, and seamless integration with your systems.
              </p>
            </div>
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Scalable Operations</h3>
              <p className="warehousing-card-text">
                Flexible space and labor solutions that scale with your
                business, from seasonal peaks to long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="warehousing-cta">
        <div className="container">
          <div className="warehousing-cta-inner">
            <span className="warehousing-cta-badge">GET STARTED</span>
            <h2 className="warehousing-cta-title">Need Warehousing Space?</h2>
            <p className="warehousing-cta-text">
              Contact our warehousing team today to discuss your storage and
              distribution needs with a free consultation.
            </p>
            <div className="warehousing-cta-actions">
              <Link to="/contact-us" className="warehousing-cta-btn warehousing-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
