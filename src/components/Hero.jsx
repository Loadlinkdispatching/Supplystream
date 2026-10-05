export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src="/assets/videos/yusen-logistics-video-211222.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Your Supply Chain</span>
            <span className="hero-title-line hero-title-line-accent">Simplified.</span>
          </h1>
          <div className="hero-actions">
            <a href="#services" className="hero-btn hero-btn-primary">Explore Solutions</a>
            <a href="#industries" className="hero-btn hero-btn-secondary">View Industries</a>
          </div>
        </div>
      </div>
    </section>
  );
}
