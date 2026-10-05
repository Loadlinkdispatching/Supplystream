import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { email, message: 'Newsletter subscription', company: 'Supply Stream Corp' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setShowModal(true);
      setEmail('');
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/images/yl-logo.png" alt="Supply Stream Corp" className="footer-logo" />
              <p className="footer-brand-desc">
                Global logistics &amp; supply chain management — delivering world-class service everywhere.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-col-links">
                <li><Link to="/otr">OTR</Link></li>
                <li><Link to="/services/drayage">Drayage</Link></li>
                <li><Link to="/services/ftl">FTL</Link></li>
                <li><Link to="/services/hazmat">Hazmat</Link></li>
                <li><Link to="/services/warehousing">Warehousing</Link></li>
                <li><Link to="/services/end-to-end">End-to-End Transportation</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-col-links">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/sitemap">Sitemap</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-col-links">
                <li><span>info@supplystreamcorp.com</span></li>
                <li className="footer-phone"><span>+1 (347) 205-8368</span></li>
                <li className="footer-phone"><span>1223 DESMOND CT FL 3, BROOKLYN, NY, 11235</span></li>
              </ul>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/supply-stream-corp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/share/18fYHvbN6b/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-col-title">Stay Updated</h4>
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="footer-newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="footer-newsletter-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>You're Subscribed!</h3>
            <p>Thank you for subscribing. We'll get back to you shortly.</p>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
      <div className="footer-bar">
        <div className="container">
          <div className="footer-bar-inner">
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            </div>
            <p className="footer-copy">&copy; 2025 Supply Stream Corp. All rights reserved.</p>
            <button className="scroll-top visible" onClick={scrollToTop} aria-label="Scroll to top">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
