import { Link } from 'react-router-dom';

export default function EndToEnd() {
  return (
    <>
      <section className="endtoend-hero">
        <div className="endtoend-hero-bg-wrapper">
          <div className="endtoend-hero-bg-image"></div>
        </div>
      </section>

      <div className="endtoend-banner">
        <div className="container">
          <div className="endtoend-banner-inner">
            <div className="endtoend-banner-item">
              <span className="endtoend-banner-dot" />
              <span>Multi-Modal Logistics</span>
            </div>
            <span className="endtoend-banner-sep">|</span>
            <div className="endtoend-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Global Coverage</span>
            </div>
            <span className="endtoend-banner-sep">|</span>
            <div className="endtoend-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <section className="endtoend-overview">
        <div className="container">
          <div className="endtoend-section-label">OVERVIEW</div>
          <h2 className="endtoend-section-title">Seamless Freight Movement From Start to Finish</h2>
          <p className="endtoend-section-desc">
            Supply Stream Corp delivers comprehensive end-to-end transportation solutions
            that integrate every leg of your supply chain. From first-mile pickup to
            final-mile delivery, we coordinate across trucking, rail, air, and ocean
            to ensure your freight arrives on time and on budget.
          </p>
          <p className="endtoend-section-desc">
            Our end-to-end approach eliminates handoff gaps, reduces transit times, and
            provides you with a single point of accountability for every shipment. With
            advanced tracking and proactive communication, you stay informed at every stage.
          </p>
          <div className="endtoend-grid">
            <div className="endtoend-card">
              <div className="endtoend-card-icon">FD</div>
              <h3 className="endtoend-card-title">First &amp; Final Mile</h3>
              <p className="endtoend-card-text">
                Reliable pickup and delivery services that connect your facility to major
                transportation hubs with precise scheduling and real-time updates.
              </p>
            </div>
            <div className="endtoend-card">
              <div className="endtoend-card-icon">IM</div>
              <h3 className="endtoend-card-title">Intermodal Solutions</h3>
              <p className="endtoend-card-text">
                Seamless integration of truck, rail, ocean, and air modes to optimize
                cost, speed, and capacity across your supply chain.
              </p>
            </div>
            <div className="endtoend-card">
              <div className="endtoend-card-icon">SC</div>
              <h3 className="endtoend-card-title">Supply Chain Orchestration</h3>
              <p className="endtoend-card-text">
                Centralized planning and execution that coordinates carriers, warehouses,
                and distribution centers for maximum efficiency.
              </p>
            </div>
            <div className="endtoend-card">
              <div className="endtoend-card-icon">CR</div>
              <h3 className="endtoend-card-title">Cross-Border Logistics</h3>
              <p className="endtoend-card-text">
                Streamlined customs clearance and cross-border shipping expertise
                to keep your international freight moving without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="endtoend-services">
        <div className="container">
          <div className="endtoend-section-label">OUR SERVICES</div>
          <h2 className="endtoend-section-title">Comprehensive Transportation Services</h2>
          <p className="endtoend-section-desc">
            We offer a full spectrum of transportation services designed to meet
            the diverse needs of modern supply chains:
          </p>
          <div className="endtoend-services-list">
            <div className="endtoend-service-item">
              <span className="endtoend-service-marker" />
              <span>Full Truckload (FTL) &amp; Less-Than-Truckload (LTL)</span>
            </div>
            <div className="endtoend-service-item">
              <span className="endtoend-service-marker" />
              <span>Intermodal Rail &amp; Container Drayage</span>
            </div>
            <div className="endtoend-service-item">
              <span className="endtoend-service-marker" />
              <span>Air Freight &amp; Ocean Freight Forwarding</span>
            </div>
            <div className="endtoend-service-item">
              <span className="endtoend-service-marker" />
              <span>Expedited &amp; Time-Critical Shipping</span>
            </div>
            <div className="endtoend-service-item">
              <span className="endtoend-service-marker" />
              <span>Hazardous Materials (Hazmat) Transport</span>
            </div>
            <div className="endtoend-service-item">
              <span className="endtoend-service-marker" />
              <span>Temperature-Controlled &amp; Specialized Cargo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="endtoend-benefits">
        <div className="container">
          <div className="endtoend-section-label">WHY CHOOSE US</div>
          <h2 className="endtoend-section-title">Why Supply Stream Corp for End-to-End Transportation?</h2>
          <div className="endtoend-grid endtoend-grid-4">
            <div className="endtoend-card">
              <h3 className="endtoend-card-title">Single Point of Accountability</h3>
              <p className="endtoend-card-text">
                One team manages your entire transportation network, eliminating
                coordination headaches and finger-pointing between carriers.
              </p>
            </div>
            <div className="endtoend-card">
              <h3 className="endtoend-card-title">Optimized Mode Selection</h3>
              <p className="endtoend-card-text">
                We analyze cost, speed, and reliability to choose the optimal
                transport mode for each leg of your shipment.
              </p>
            </div>
            <div className="endtoend-card">
              <h3 className="endtoend-card-title">Advanced Visibility</h3>
              <p className="endtoend-card-text">
                Real-time tracking across all modes with proactive alerts and
                exception management keeps you in control.
              </p>
            </div>
            <div className="endtoend-card">
              <h3 className="endtoend-card-title">Global Network</h3>
              <p className="endtoend-card-text">
                Extensive carrier partnerships and strategic hub locations
                ensure coverage across North America and worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="endtoend-cta">
        <div className="container">
          <div className="endtoend-cta-inner">
            <span className="endtoend-cta-badge">GET STARTED</span>
            <h2 className="endtoend-cta-title">Ready to Streamline Your Transportation?</h2>
            <p className="endtoend-cta-text">
              Contact Supply Stream Corp today for end-to-end transportation solutions
              tailored to your supply chain needs.
            </p>
            <div className="endtoend-cta-actions">
              <Link to="/contact-us" className="endtoend-cta-btn endtoend-cta-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
