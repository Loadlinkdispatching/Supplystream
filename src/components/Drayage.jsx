import { Link } from 'react-router-dom';

export default function Drayage() {
  return (
    <>
      <section className="drayage-hero">
        <div className="container">
          <div className="drayage-hero-content">
            <span className="drayage-hero-badge">DRAYAGE SERVICES</span>
            <h1 className="drayage-hero-title">Drayage Solutions</h1>
            <p className="drayage-hero-subtitle">
              Seamless container drayage services connecting ports, rail terminals,
              and warehouses with reliable last-mile delivery across the country.
            </p>
            <div className="drayage-hero-tags">
              <span className="drayage-hero-tag">Port-to-Door Delivery</span>
              <span className="drayage-hero-tag">Real-Time Tracking</span>
              <span className="drayage-hero-tag">24/7 Dispatch</span>
            </div>
            <img
              src="/assets/images/industry/drayage.png"
              alt="Drayage Services"
              className="drayage-hero-icon"
            />
          </div>
        </div>
      </section>

      <div className="drayage-banner">
        <div className="container">
          <div className="drayage-banner-inner">
            <div className="drayage-banner-item">
              <span className="drayage-banner-dot" />
              <span>Port-to-Door Delivery</span>
            </div>
            <span className="drayage-banner-sep">|</span>
            <div className="drayage-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Real-Time Tracking</span>
            </div>
            <span className="drayage-banner-sep">|</span>
            <div className="drayage-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>24/7 Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      <section className="drayage-overview">
        <div className="container">
          <div className="drayage-section-label">OVERVIEW</div>
          <h2 className="drayage-section-title">Efficient Container Drayage You Can Count On</h2>
          <p className="drayage-section-desc">
            Supply Stream Corp provides comprehensive drayage solutions that bridge
            the gap between ocean ports and inland destinations. From port to your
            warehouse, we ensure fast, secure, and reliable movement of containers
            with full visibility at every stage.
          </p>
          <p className="drayage-section-desc">
            We also provide integrated storage and logistics support, handling a
            wide range of cargo including standard containers, refrigerated units,
            hazardous materials, and compressed gases. Our end-to-end solutions
            are designed to support all types of freight with safety, compliance,
            and efficiency.
          </p>
          <div className="drayage-grid">
            <div className="drayage-card">
              <div className="drayage-card-icon">PI</div>
              <h3 className="drayage-card-title">Pier Pickup & Delivery</h3>
              <p className="drayage-card-text">
                Efficient container pickup from marine terminals with real-time
                chassis availability and appointment scheduling to minimize wait
                times and demurrage charges.
              </p>
            </div>
            <div className="drayage-card">
              <div className="drayage-card-icon">RA</div>
              <h3 className="drayage-card-title">Rail Ramp Services</h3>
              <p className="drayage-card-text">
                Seamless container transfers between rail ramps and final
                destinations. Our network covers major rail terminals for efficient
                intermodal connectivity.
              </p>
            </div>
            <div className="drayage-card">
              <div className="drayage-card-icon">WH</div>
              <h3 className="drayage-card-title">Warehousing Integration</h3>
              <p className="drayage-card-text">
                Direct delivery to warehouses with scheduled appointments, live
                unloading, and drop-and-hook options for maximum operational
                efficiency.
              </p>
            </div>
            <div className="drayage-card">
              <div className="drayage-card-icon">EX</div>
              <h3 className="drayage-card-title">Expedited Drayage</h3>
              <p className="drayage-card-text">
                Time-critical container moves with priority handling, dedicated
                drivers, and proactive communication to meet tight delivery
                windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Special Handling */}
      <section className="drayage-storage">
        <div className="container">
          <div className="drayage-section-label">STORAGE &amp; SPECIAL HANDLING SOLUTIONS</div>
          <h2 className="drayage-section-title">Comprehensive Cargo Support</h2>
          <p className="drayage-section-desc">
            We also provide secure storage services and specialized cargo handling
            for a wide range of freight types, including:
          </p>
          <div className="drayage-storage-list">
            <div className="drayage-storage-item">
              <span className="drayage-storage-marker" />
              <span>Standard shipping containers</span>
            </div>
            <div className="drayage-storage-item">
              <span className="drayage-storage-marker" />
              <span>Refrigerated containers (reefers)</span>
            </div>
            <div className="drayage-storage-item">
              <span className="drayage-storage-marker" />
              <span>Hazardous materials (Hazmat)</span>
            </div>
            <div className="drayage-storage-item">
              <span className="drayage-storage-marker" />
              <span>Compressed gases and industrial cargo</span>
            </div>
          </div>
          <p className="drayage-section-desc">
            Our facilities and processes are designed to ensure full compliance,
            safety, and control across all storage and transportation operations.
          </p>
        </div>
      </section>

      <section className="drayage-benefits">
        <div className="container">
          <div className="drayage-section-label">WHY CHOOSE US</div>
          <h2 className="drayage-section-title">Why Supply Stream Corp for Drayage?</h2>
          <div className="drayage-grid drayage-grid-4">
            <div className="drayage-card">
              <h3 className="drayage-card-title">End-to-End Logistics Solutions</h3>
              <p className="drayage-card-text">
                From port pickup to warehouse delivery and storage, we manage the
                entire supply chain with precision and reliability.
              </p>
            </div>
            <div className="drayage-card">
              <h3 className="drayage-card-title">Safety &amp; Compliance Focused</h3>
              <p className="drayage-card-text">
                Strict adherence to hazmat regulations, safety standards, and
                industry protocols for all sensitive cargo types.
              </p>
            </div>
            <div className="drayage-card">
              <h3 className="drayage-card-title">Extensive Equipment Network</h3>
              <p className="drayage-card-text">
                Well-maintained chassis and transport fleet ensuring availability
                and reduced operational delays.
              </p>
            </div>
            <div className="drayage-card">
              <h3 className="drayage-card-title">Real-Time Visibility</h3>
              <p className="drayage-card-text">
                Advanced tracking systems and continuous updates keep you informed
                throughout the entire shipment journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="drayage-cta">
        <div className="container">
          <div className="drayage-cta-inner">
            <span className="drayage-cta-badge">GET STARTED</span>
            <h2 className="drayage-cta-title">Ready to Move Your Containers?</h2>
            <p className="drayage-cta-text">
              Contact Supply Stream Corp today for reliable drayage, storage, and
              logistics solutions tailored to your business needs.
            </p>
            <div className="drayage-cta-actions">
              <Link to="/contact-us" className="drayage-cta-btn drayage-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
              <Link to="/contact-us" className="drayage-cta-btn drayage-cta-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
