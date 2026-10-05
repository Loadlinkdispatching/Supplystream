import { Link } from 'react-router-dom';

export default function OTR() {
  return (
    <>
      {/* Hero */}
      <section className="otr-hero">
        <div className="container">
          <div className="otr-hero-content">
            <span className="otr-hero-badge">OVER-THE-ROAD FREIGHT SOLUTIONS</span>
            <h1 className="otr-hero-title">Reliable Capacity. Nationwide Coverage.</h1>
            <p className="otr-hero-subtitle">
              Supply Stream Corp provides dependable Over-the-Road (OTR) freight brokerage services
              across North America. Through our extensive carrier network and logistics expertise, we
              connect shippers with trusted transportation partners to ensure every load moves efficiently,
              safely, and on schedule.
            </p>
            <div className="otr-hero-actions">
              <Link to="/contact-us" className="otr-hero-btn otr-hero-btn-primary">
                Request a Quote <span>&rarr;</span>
              </Link>
              <Link to="/load-tracking" className="otr-hero-btn otr-hero-btn-secondary">
                Track Your Shipment
              </Link>
            </div>
            <img
              src="/assets/images/industry/otr.png"
              alt="OTR Services"
              className="otr-hero-icon"
            />
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="otr-banner">
        <div className="container">
          <div className="otr-banner-inner">
            <div className="otr-banner-item">
              <span className="otr-banner-dot" />
              <span>Nationwide Coverage</span>
            </div>
            <span className="otr-banner-sep">|</span>
            <div className="otr-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Real-Time Visibility</span>
            </div>
            <span className="otr-banner-sep">|</span>
            <div className="otr-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Dedicated Logistics Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="otr-overview">
        <div className="container">
          <div className="otr-section-label">OVERVIEW</div>
          <h2 className="otr-section-title">Freight Brokerage Solutions Built for Modern Supply Chains</h2>
          <p className="otr-section-desc">
            Managing freight transportation requires more than simply booking a truck. It requires
            strategic planning, carrier management, shipment visibility, and proactive communication.
            At Supply Stream Corp, we serve as an extension of your logistics team, coordinating every
            aspect of your transportation needs while providing access to reliable carrier capacity and
            competitive market rates.
          </p>
          <p className="otr-section-desc">
            Whether you&apos;re moving a single shipment or managing a complex transportation network,
            our brokerage solutions are designed to optimize performance and reduce transportation
            costs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="otr-services">
        <div className="container">
          <div className="otr-section-label">OUR SERVICES</div>
          <div className="otr-services-grid">
            <div className="otr-service-card">
              <h3 className="otr-service-title">Full Truckload (FTL)</h3>
              <p className="otr-service-text">
                Dedicated truck capacity for shipments that require exclusive trailer use. Ideal for
                high-volume freight, time-sensitive deliveries, and specialized cargo requiring direct
                transportation.
              </p>
              <ul className="otr-service-list">
                <li>Faster Transit Times</li>
                <li>Reduced Handling</li>
                <li>Increased Security</li>
                <li>Nationwide Carrier Capacity</li>
              </ul>
            </div>
            <div className="otr-service-card">
              <h3 className="otr-service-title">Less-Than-Truckload (LTL)</h3>
              <p className="otr-service-text">
                Cost-effective transportation for smaller shipments that do not require an entire trailer. Our
                network allows businesses to reduce shipping expenses while maintaining dependable
                delivery schedules.
              </p>
              <ul className="otr-service-list">
                <li>Lower Transportation Costs</li>
                <li>Flexible Shipping Options</li>
                <li>Reliable Transit Performance</li>
                <li>Scalable Solutions</li>
              </ul>
            </div>
            <div className="otr-service-card">
              <h3 className="otr-service-title">Expedited Freight</h3>
              <p className="otr-service-text">
                When time is critical, our expedited freight services provide priority transportation solutions
                with continuous shipment monitoring and dedicated support.
              </p>
              <ul className="otr-service-list">
                <li>Priority Dispatching</li>
                <li>Team Driver Options</li>
                <li>Time-Critical Deliveries</li>
                <li>Real-Time Updates</li>
              </ul>
            </div>
            <div className="otr-service-card">
              <h3 className="otr-service-title">Specialized Freight</h3>
              <p className="otr-service-text">
                Custom transportation solutions for oversized, high-value, project-based, or specialized
                freight requiring additional planning and expertise.
              </p>
              <ul className="otr-service-list">
                <li>Oversized Loads</li>
                <li>Heavy Haul Transportation</li>
                <li>Project Cargo</li>
                <li>Specialized Equipment</li>
              </ul>
            </div>
            <div className="otr-service-card">
              <h3 className="otr-service-title">Temperature-Controlled Freight</h3>
              <p className="otr-service-text">
                Reliable refrigerated transportation solutions for food products, pharmaceuticals, and
                temperature-sensitive goods.
              </p>
              <ul className="otr-service-list">
                <li>Reefer Capacity</li>
                <li>Continuous Temperature Monitoring</li>
                <li>Compliance-Focused Transportation</li>
                <li>Nationwide Coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="otr-benefits">
        <div className="container">
          <div className="otr-section-label">WHY CHOOSE SUPPLY STREAM CORP</div>
          <div className="otr-grid otr-grid-4">
            <div className="otr-card">
              <h3 className="otr-card-title">Access to a Trusted Carrier Network</h3>
              <p className="otr-card-text">
                We partner with thoroughly vetted carriers that meet strict safety, insurance, and
                performance requirements, ensuring reliable service for every shipment.
              </p>
            </div>
            <div className="otr-card">
              <h3 className="otr-card-title">Real-Time Shipment Visibility</h3>
              <p className="otr-card-text">
                Advanced tracking systems provide shipment updates throughout the transportation
                process, allowing customers to stay informed at every stage.
              </p>
            </div>
            <div className="otr-card">
              <h3 className="otr-card-title">Dedicated Logistics Professionals</h3>
              <p className="otr-card-text">
                Every shipment is managed by experienced freight specialists who coordinate carrier
                communication, scheduling, and issue resolution from pickup to delivery.
              </p>
            </div>
            <div className="otr-card">
              <h3 className="otr-card-title">Competitive Market Rates</h3>
              <p className="otr-card-text">
                Our carrier relationships and market expertise allow us to secure dependable capacity while
                maintaining competitive transportation costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="otr-industries">
        <div className="container">
          <div className="otr-section-label">INDUSTRIES WE SERVE</div>
          <div className="otr-industries-grid">
            <div className="otr-industry-item">
              <h3>Manufacturing</h3>
              <p>Reliable transportation solutions supporting production schedules and supply chain continuity.</p>
            </div>
            <div className="otr-industry-item">
              <h3>Retail &amp; E-Commerce</h3>
              <p>Scalable freight services designed to support inventory replenishment and customer fulfillment.</p>
            </div>
            <div className="otr-industry-item">
              <h3>Food &amp; Beverage</h3>
              <p>Safe and compliant transportation for temperature-sensitive and perishable products.</p>
            </div>
            <div className="otr-industry-item">
              <h3>Construction</h3>
              <p>Transportation solutions for equipment, machinery, and building materials.</p>
            </div>
            <div className="otr-industry-item">
              <h3>Automotive</h3>
              <p>Efficient freight coordination supporting just-in-time supply chain operations.</p>
            </div>
            <div className="otr-industry-item">
              <h3>Energy &amp; Industrial</h3>
              <p>Specialized logistics solutions for heavy equipment and industrial freight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="otr-commitment">
        <div className="container">
          <div className="otr-commitment-inner">
            <div className="otr-section-label">OUR COMMITMENT</div>
            <h2 className="otr-section-title otr-section-title-light">Delivering Freight with Confidence</h2>
            <p className="otr-commitment-text">
              At Supply Stream Corp, we understand that transportation impacts every part of your
              business. Our mission is to provide dependable freight brokerage solutions that improve
              efficiency, reduce complexity, and create long-term value for our customers.
            </p>
            <p className="otr-commitment-text">
              We don&apos;t simply move freight&mdash;we build transportation partnerships that help businesses
              grow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="otr-cta">
        <div className="container">
          <div className="otr-cta-inner">
            <span className="otr-cta-badge">READY TO SHIP?</span>
            <h2 className="otr-cta-title">Let&apos;s Build a Smarter Freight Strategy</h2>
            <p className="otr-cta-text">
              Partner with Supply Stream Corp for reliable freight brokerage services backed by industry
              expertise, carrier relationships, and dedicated customer support.
            </p>
            <div className="otr-cta-actions">
              <Link to="/contact-us" className="otr-cta-btn otr-cta-btn-primary">
                Request a Freight Quote Today <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
