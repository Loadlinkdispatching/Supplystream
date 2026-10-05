const regions = [
  { id: 'americas', name: 'Americas', count: '4' },
  { id: 'state', name: 'State', count: '48' },
  { id: 'canada', name: 'Canada', count: '2' },
  { id: 'cross_border', name: 'Cross Border', count: '3' },
  { id: 'mexico', name: 'Mexico', count: '1' },
];

export default function About() {

  return (
    <section className="section about-section" id="about">
      <div className="about-us-wrapper">
        <div className="about-us">
          <div className="about-us-content">
            <div className="about-us-text-wrapper">
              <div className="com-title right">
                <h2 className="section-title light" style={{ textAlign: 'center', margin: '0 auto' }}>
                  DELIVERING<br />END TO END<br />TRANSPORTATION
                </h2>
                <div className="com-title-desc">
                  <p>We provide reliable freight transportation solutions across an extensive network, offering Full Truckload (FTL), Less-Than-Truckload (LTL), and Drayage services.&nbsp;</p>
                  <p>Our experienced logistics team ensures efficient, cost-effective, and timely deliveries tailored to your shipping needs.</p>
                </div>
              </div>
            </div>

            <div className="about-us-content-map-container">
              <div className="about-us-content-map">
                {regions.map((region) => (
                  <div className="about-us-content-map-marker" data-region={region.id} key={region.id}>
                    <div className="about-us-content-map-marker-item">
                      <p>{region.name}</p>
                      <div className="about-us-content-map-marker-item-content">
                        <p>{region.count}</p>
                        <span>bases</span>
                      </div>
                    </div>
                    <div className="about-us-content-map-marker-item-bg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-more">
          <a href="/about-us">LEARN MORE ABOUT US</a>
        </div>
      </div>
    </section>
  );
}
