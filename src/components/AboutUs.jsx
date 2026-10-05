import { Link } from 'react-router-dom';

const fadeIn = {
  animation: 'aboutFadeIn 0.6s ease forwards',
};

const stagger = (i) => ({
  animation: 'aboutFadeInUp 0.6s ease forwards',
  animationDelay: `${0.1 + i * 0.1}s`,
});

function StatCard({ value, label, i }) {
  return (
    <div
      style={{
        ...stagger(i),
        textAlign: 'center',
        padding: '40px 24px',
        background: 'var(--color-white)',
        border: '1px solid var(--color-light-gray)',
        borderRadius: 16,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(6, 24, 61, 0.12)';
        e.currentTarget.style.borderColor = 'var(--color-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'var(--color-light-gray)';
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1, marginBottom: 8, fontFamily: 'var(--font-mono)' }}>{value}</div>
      <div style={{ fontSize: 14, color: 'var(--color-mid-gray)', fontWeight: 500, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
    </div>
  );
}

function ValueCard({ icon, label, desc, i }) {
  return (
    <div
      style={{
        ...stagger(i),
        textAlign: 'center',
        padding: '36px 24px',
        borderRadius: 16,
        background: 'var(--color-white)',
        border: '1px solid var(--color-light-gray)',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(6, 24, 61, 0.1)';
        e.currentTarget.style.borderColor = 'var(--color-accent)';
        const ic = e.currentTarget.querySelector('.vi');
        if (ic) { ic.style.background = 'var(--color-accent)'; ic.style.transform = 'rotateY(360deg)'; }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'var(--color-light-gray)';
        const ic = e.currentTarget.querySelector('.vi');
        if (ic) { ic.style.background = 'var(--color-primary)'; ic.style.transform = ''; }
      }}
    >
      <div className="vi" style={{ width: 64, height: 64, background: 'var(--color-primary)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.6s ease', transformStyle: 'preserve-3d' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d={icon} /></svg>
      </div>
      <h4 style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-primary)', marginBottom: 8, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{label}</h4>
      <p style={{ fontSize: 14, color: 'var(--color-mid-gray)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function LeadershipCard({ initials, name, title, image }) {
  return (
    <div
      style={{
        background: 'var(--color-white)',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--color-light-gray)',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(6, 24, 61, 0.15)';
        e.currentTarget.style.borderColor = 'var(--color-accent)';
        const img = e.currentTarget.querySelector('.li-img');
        if (img) img.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'var(--color-light-gray)';
        const img = e.currentTarget.querySelector('.li-img');
        if (img) img.style.transform = '';
      }}
    >
      {image ? (
        <div className="li-img" style={{ width: '100%', height: 300, background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.4s ease' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      ) : (
        <div className="li-img" style={{ width: '100%', height: 300, background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 56, fontWeight: 700, fontFamily: 'var(--font-mono)', transition: 'transform 0.4s ease' }}>{initials}</div>
      )}
      <div style={{ padding: 24 }}>
        <h4 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 4, fontFamily: 'var(--font-bold)', textAlign: 'center', letterSpacing: '0.02em' }}>{name}</h4>
        {title && <p style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 500, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{title}</p>}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>

      {/* Hero */}
      <section style={{ background: 'url(/assets/images/industry/WhatsApp%20Image%202026-06-16%20at%2012.33.21%20AM.jpeg) center/cover no-repeat', height: '90vh', minHeight: 600, position: 'relative', overflow: 'hidden' }}>
        <div className="container">
        </div>
      </section>

      {/* Announcement Banner */}
      <div style={{ background: 'var(--color-primary)', padding: '16px 20px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap', color: 'white', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'aboutPulse 2s infinite', display: 'inline-block' }}></span>
            <span>24/7 Monitoring</span>
          </div>
          <span style={{ opacity: 0.2 }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 4 4 4 8c0 5 8 12 8 12s8-7 8-12c0-4-4-6-8-6zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
            <span>Real-Time Tracking</span>
          </div>
          <span style={{ opacity: 0.2 }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            <span>Dedicated Support</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section">
        <div className="container" style={fadeIn}>
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--color-accent)', textTransform: 'uppercase', fontWeight: 700, wordSpacing: '-0.3em' }}>About Us</span>
            <div style={{ width: 60, height: 3, background: 'var(--color-accent)', margin: '24px auto 32px', borderRadius: 2 }} />
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--color-mid-gray)', fontFamily: 'var(--font-primary)', fontWeight: 400, lineHeight: 1.8, marginBottom: 40 }}>
              Supply Stream Corporation is a trusted freight brokerage company with years of experience in delivering reliable logistics solutions across North America. We specialize in OTR, drayage, warehousing, and end-to-end transportation services tailored to meet diverse shipping needs.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Efficient Coordination</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-mid-gray)', lineHeight: 1.6, margin: 0 }}>Seamless coordination across every leg of your shipment from pickup to final delivery.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Dependable Carrier Support</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-mid-gray)', lineHeight: 1.6, margin: 0 }}>Strong carrier partnerships backed by rigorous vetting and performance standards.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Service Quality</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-mid-gray)', lineHeight: 1.6, margin: 0 }}>Unwavering focus on communication, reliability, and cost-effective solutions.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Complete Logistics Management</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-mid-gray)', lineHeight: 1.6, margin: 0 }}>End-to-end solutions that simplify transportation and keep supply chains running.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section style={{ background: 'var(--color-off-white)', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>By The Numbers</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--color-primary)', marginTop: 16, fontFamily: 'var(--font-mono)', fontWeight: 400, lineHeight: 1.2 }}>Built on a foundation of results</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            <StatCard value="48+" label="States" i={0} />
            <StatCard value="1K" label="Annual Shipments" i={1} />
            <StatCard value="99.3%" label="On-Time Delivery" i={2} />
            <StatCard value="3" label="Countries Served" i={3} />
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Trusted By Industry Leaders</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--color-primary)', marginTop: 16, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>Over Factoring Partners</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24, alignItems: 'center', justifyItems: 'center' }}>
            {[
              { name: 'RTS Financial', highlight: true },
              { name: 'Apex Capital', highlight: false },
              { name: 'Triumph', highlight: false },
              { name: 'eCapital', highlight: false },
              { name: 'OTR Solutions', highlight: false },
              { name: 'Love Financial', highlight: false },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  ...stagger(i),
                  padding: '24px 20px',
                  background: item.highlight ? 'var(--color-white)' : 'var(--color-off-white)',
                  borderRadius: 12,
                  textAlign: 'center',
                  fontWeight: 700,
                  color: item.highlight ? 'var(--color-primary)' : 'var(--color-mid-gray)',
                  fontSize: 15,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  filter: item.highlight ? 'grayscale(0%)' : 'grayscale(100%)',
                  opacity: item.highlight ? 1 : 0.5,
                  transform: item.highlight ? 'scale(1.08)' : 'none',
                  boxShadow: item.highlight ? '0 8px 30px rgba(6, 24, 61, 0.08)' : 'none',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                  width: '100%',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.background = 'var(--color-white)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(6, 24, 61, 0.08)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'var(--color-off-white)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.color = 'var(--color-mid-gray)'; }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>What Drives Us</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--color-primary)', marginTop: 16, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 24 }}>
            <ValueCard icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" label="Reliability" desc="Consistent on-time performance across every mode and market." i={0} />
            <ValueCard icon="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" label="Transparency" desc="Real-time visibility and data-driven insights across the supply chain." i={1} />
            <ValueCard icon="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" label="Proactivity" desc="Anticipating disruptions and resolving issues before they impact operations." i={2} />
            <ValueCard icon="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" label="People First" desc="Dedicated account teams and 24/7 operational support, not automated responses." i={3} />
            <ValueCard icon="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" label="Continuous Improvement" desc="Kaizen-driven processes that optimize efficiency and reduce cost." i={4} />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ background: 'var(--color-off-white)', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-primary)', marginTop: 16, marginBottom: 20, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>Our Trusted Partners</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 30 }}>
            <LeadershipCard initials="TA" name="LoadMatch" image="/assets/images/industry/WhatsApp Image 2026-06-17 at 12.45.06 AM.png" />
            <LeadershipCard initials="FV" name="Carrier Source" image="/assets/images/industry/ChatGPT Image Jun 17, 2026, 01_07_22 AM.png" />
            <LeadershipCard initials="MH" name="Carrier Partner" image="/assets/images/industry/ChatGPT Image Jun 17, 2026, 01_21_48 AM.png" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--color-accent)" style={{ opacity: 0.15, marginBottom: 24 }}><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-primary)', lineHeight: 1.6, fontWeight: 400, fontStyle: 'italic', marginBottom: 40, fontFamily: 'var(--font-italic)' }}>
              &ldquo;Supply Stream Corp has been instrumental in optimizing our global supply chain operations. Their integrated approach, proactive risk management, and consistent on-time performance have made them an indispensable partner across our network.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ background: 'var(--color-off-white)', padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Our Approach</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--color-primary)', marginTop: 16, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>End-to-End Supply Chain Solutions</h2>
            <p style={{ fontSize: 17, color: 'var(--color-mid-gray)', lineHeight: 1.6, maxWidth: 560, margin: '16px auto 0' }}>From strategic network design to final-mile delivery, we manage every link in the supply chain with precision and accountability.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { num: '01', title: 'Supply Chain Design', desc: 'We analyze your needs and design a tailored logistics strategy that optimizes cost, speed, and reliability.' },
              { num: '02', title: 'Global Movement', desc: 'We manage ocean, air, and ground transportation through our integrated global network across 3 countries.' },
              { num: '03', title: 'Warehousing & Fulfillment', desc: 'Over 10 distribution centers provide storage, pick-and-pack, and value-added services close to your markets.' },
              { num: '04', title: 'Last-Mile Delivery', desc: 'Final-mile delivery with real-time tracking, proof of delivery, and full visibility from origin to destination.' },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  ...stagger(i),
                  textAlign: 'center',
                  padding: '36px 24px',
                  background: 'var(--color-white)',
                  borderRadius: 16,
                  border: '1px solid var(--color-light-gray)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(6, 24, 61, 0.1)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'var(--color-light-gray)'; }}
              >
                <div style={{ width: 56, height: 56, background: 'var(--color-primary)', color: 'white', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontFamily: 'var(--font-mono)', boxShadow: '0 4px 15px rgba(6, 24, 61, 0.2)' }}>{step.num}</div>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-primary)', marginBottom: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--color-mid-gray)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section style={{ position: 'relative', background: 'var(--color-primary)', padding: '100px 20px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(10, 36, 99, 0.15) 0%, transparent 70%)' }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#fff', marginBottom: 24, padding: '8px 20px', border: '1px solid rgba(255, 255, 255, 0.4)', borderRadius: 20, textTransform: 'uppercase' }}>Ready When You Are</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: 20, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>Let&apos;s Move Forward<br />Together</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>Whether you require global freight forwarding, contract logistics, or a fully integrated supply chain partnership, our team has the infrastructure and expertise to deliver.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
            <Link to="/contact-us" className="hero-btn hero-btn-primary" style={{ padding: '16px 40px', fontSize: 15 }}>Contact Us <span style={{ marginLeft: 6 }}>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
