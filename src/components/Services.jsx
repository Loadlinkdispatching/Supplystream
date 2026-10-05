import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="section service-intro" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">COMMITTED TO DELIVERING <br />LOGISTICS EXCELLENCE</h2>
          <p className="section-desc">We provide streamlined freight brokerage, drayage, and transportation solutions designed to keep your supply chain moving efficiently and on schedule.</p>
        </div>
        <div className="service-cards">
          <div className="service-card" onClick={() => navigate('/services/supply-chain')} style={{cursor: 'pointer'}}>
            <div className="service-card-icon">
              <img src="/assets/images/icon-supply-chain.png" alt="Supply Chain Solutions" />
            </div>
            <h3 className="service-card-title">Supply Chain Solutions</h3>
            <p className="service-card-desc">Scalable solutions for your supply chain management</p>
          </div>
          <div className="service-card" onClick={() => navigate('/services/end-to-end')} style={{cursor: 'pointer'}}>
            <div className="service-card-icon">
              <img src="/assets/images/icon-transportation.png" alt="End-to-End Transportation" />
            </div>
            <h3 className="service-card-title">End-to-End Transportation</h3>
            <p className="service-card-desc">Effective, efficient shipment options</p>
          </div>
          <div className="service-card" onClick={() => navigate('/services/warehousing')} style={{cursor: 'pointer'}}>
            <div className="service-card-icon">
              <img src="/assets/images/icon-logistics.png" alt="Contract Logistics" />
            </div>
            <h3 className="service-card-title">Contract Logistics (Warehousing &amp; Distribution)</h3>
            <p className="service-card-desc">Holistic logistic management for enhanced efficiency</p>
          </div>
          <div className="service-card" onClick={() => navigate('/otr')} style={{cursor: 'pointer'}}>
            <div className="service-card-icon">
              <img src="/assets/images/icon-digital.png" alt="Over-the-Road Freight" />
            </div>
            <h3 className="service-card-title">Over-the-Road Freight</h3>
            <p className="service-card-desc">Reliable OTR brokerage with nationwide coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
