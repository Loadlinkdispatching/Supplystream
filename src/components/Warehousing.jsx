import { Link } from 'react-router-dom';

export default function Warehousing() {
  return (
    <>
      {/* Hero */}
      <section className="warehousing-hero">
        <div className="container">
          <div className="warehousing-hero-content">
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
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
              <span>Real-Time Visibility</span>
            </div>
            <span className="warehousing-banner-sep">|</span>
            <div className="warehousing-banner-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="warehousing-overview">
        <div className="container">
          <div className="warehousing-section-label">OVERVIEW</div>
          <h2 className="warehousing-section-title">Warehousing Solutions for Modern Supply Chains</h2>
          <p className="warehousing-section-desc">
            Supply Stream Corp provides comprehensive warehousing solutions designed to optimize inventory management, streamline distribution, and reduce operational costs. Our strategically located facilities, advanced technology systems, and experienced teams ensure your goods are stored, managed, and moved with precision.
          </p>
          <p className="warehousing-section-desc">
            Whether you need short-term storage, long-term distribution, or value-added services, our warehousing solutions are built to scale with your business and adapt to changing market demands.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="warehousing-services">
        <div className="container">
          <div className="warehousing-section-label">OUR SERVICES</div>
          <div className="warehousing-services-grid">
            <div className="warehousing-service-card">
              <h3 className="warehousing-service-title">Storage &amp; Inventory Management</h3>
              <p className="warehousing-service-text">
                Secure, organized storage solutions with real-time inventory tracking, cycle counting, and complete visibility through our warehouse management system.
              </p>
              <ul className="warehousing-service-list">
                <li>Real-Time WMS Integration</li>
                <li>Cycle Counting &amp; Accuracy</li>
                <li>Flexible Space Options</li>
                <li>Inventory Reporting</li>
              </ul>
            </div>
            <div className="warehousing-service-card">
              <h3 className="warehousing-service-title">Distribution &amp; Fulfillment</h3>
              <p className="warehousing-service-text">
                Efficient order processing and distribution services that move products from warehouse to customer with speed, accuracy, and reliability.
              </p>
              <ul className="warehousing-service-list">
                <li>Order Pick &amp; Pack</li>
                <li>Cross-Docking Operations</li>
                <li>Multi-Channel Fulfillment</li>
                <li>Optimized Route Planning</li>
              </ul>
            </div>
            <div className="warehousing-service-card">
              <h3 className="warehousing-service-title">Value-Added Services</h3>
              <p className="warehousing-service-text">
                Customizable services that prepare your products for market, including kitting, labeling, assembly, and quality inspections.
              </p>
              <ul className="warehousing-service-list">
                <li>Kitting &amp; Bundle Assembly</li>
                <li>Custom Labeling &amp; Tagging</li>
                <li>Product Inspection</li>
                <li>Returns Management</li>
              </ul>
            </div>
            <div className="warehousing-service-card">
              <h3 className="warehousing-service-title">Temperature-Controlled Storage</h3>
              <p className="warehousing-service-text">
                Specialized warehousing for temperature-sensitive products, with continuous monitoring and compliance with industry regulations.
              </p>
              <ul className="warehousing-service-list">
                <li>Cold &amp; Frozen Storage</li>
                <li>Temperature Monitoring</li>
                <li>FDA-Compliant Facilities</li>
                <li>Pharmaceutical Ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="warehousing-benefits">
        <div className="container">
          <div className="warehousing-section-label">WHY CHOOSE SUPPLY STREAM CORP</div>
          <div className="warehousing-grid warehousing-grid-4">
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Strategic Locations</h3>
              <p className="warehousing-card-text">
                Warehouses positioned near major transportation hubs, ports, and population centers for optimal distribution efficiency.
              </p>
            </div>
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Technology-Driven Operations</h3>
              <p className="warehousing-card-text">
                Advanced WMS technology providing real-time visibility, automated reporting, and seamless integration with your systems.
              </p>
            </div>
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Scalable Capacity</h3>
              <p className="warehousing-card-text">
                Flexible space and labor solutions that scale with your business, from seasonal peaks to long-term growth.
              </p>
            </div>
            <div className="warehousing-card">
              <h3 className="warehousing-card-title">Experienced Teams</h3>
              <p className="warehousing-card-text">
                Skilled warehouse professionals dedicated to accuracy, safety, and continuous improvement in every operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="warehousing-industries">
        <div className="container">
          <div className="warehousing-section-label">INDUSTRIES WE SERVE</div>
          <div className="warehousing-industries-grid">
            <div className="warehousing-industry-item">
              <h3>Retail &amp; E-Commerce</h3>
              <p>Fulfillment and distribution solutions supporting omnichannel retail operations and direct-to-consumer delivery.</p>
            </div>
            <div className="warehousing-industry-item">
              <h3>Food &amp; Beverage</h3>
              <p>Temperature-controlled warehousing and distribution for perishable goods with full compliance.</p>
            </div>
            <div className="warehousing-industry-item">
              <h3>Manufacturing</h3>
              <p>Raw material storage, work-in-process inventory, and finished goods management for production facilities.</p>
            </div>
            <div className="warehousing-industry-item">
              <h3>Pharmaceutical</h3>
              <p>cGMP-compliant warehousing with cold chain capabilities for pharmaceutical and life sciences products.</p>
            </div>
            <div className="warehousing-industry-item">
              <h3>Automotive</h3>
              <p>Just-in-time inventory management and parts distribution supporting automotive supply chains.</p>
            </div>
            <div className="warehousing-industry-item">
              <h3>Electronics</h3>
              <p>Secure, climate-controlled storage with specialized handling for high-value electronic components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="warehousing-commitment">
        <div className="container">
          <div className="warehousing-commitment-inner">
            <div className="warehousing-section-label">OUR COMMITMENT</div>
            <h2 className="warehousing-section-title warehousing-section-title-light">Warehousing You Can Count On</h2>
            <p className="warehousing-commitment-text">
              At Supply Stream Corp, we believe warehousing is more than storage — it is a strategic advantage. Our facilities and systems are designed to improve inventory accuracy, reduce handling costs, and accelerate order fulfillment for our clients.
            </p>
            <p className="warehousing-commitment-text">
              We are committed to operational excellence, continuous improvement, and building partnerships that help businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="warehousing-cta">
        <div className="container">
          <div className="warehousing-cta-inner">
            <span className="warehousing-cta-badge">GET STARTED</span>
            <h2 className="warehousing-cta-title">Need Warehousing Solutions?</h2>
            <p className="warehousing-cta-text">
              Partner with Supply Stream Corp for reliable warehousing services backed by industry expertise, advanced technology, and dedicated support teams.
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
