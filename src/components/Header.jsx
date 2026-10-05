import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  const handleNavClick = (e) => {
    const link = e.currentTarget;
    const parent = link.closest('.nav-item');
    if (window.innerWidth <= 991) {
      if (parent?.classList.contains('has-mega')) {
        e.preventDefault();
        parent.classList.toggle('active');
      } else if (menuOpen) {
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-logo" aria-label="Home" onClick={() => setMenuOpen(false)}>
            <img src="/assets/images/yl-logo.png" alt="Supply Stream Corp" className="logo-img" />
          </Link>
        </div>
        <button
          className={`mobile-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`header-right${menuOpen ? ' open' : ''}`} id="main-nav-wrapper">
          <nav className="main-nav" id="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
              </li>
              <li className="nav-item has-mega">
                <a className="nav-link" onClick={handleNavClick}>
                  Services <i className="fas fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    <div className="mega-col mega-col-links">
                      <ul className="mega-main-links mega-main-links-vertical">
                        <li><Link to="/services/supply-chain" onClick={() => setMenuOpen(false)}>Supply Chain Solutions</Link></li>
                        <li><Link to="/services/end-to-end" onClick={() => setMenuOpen(false)}>End-to-End Transportation</Link></li>
                        <li><Link to="/services/warehousing-storage" onClick={() => setMenuOpen(false)}>Warehousing &amp; Storage</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item has-mega">
                <a className="nav-link" onClick={handleNavClick}>
                  Transportation Domain <i className="fas fa-chevron-down nav-arrow"></i>
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    <div className="mega-col mega-col-links">
                      <ul className="mega-main-links mega-main-links-vertical">
                        <li><Link to="/otr" onClick={() => setMenuOpen(false)}>OTR</Link></li>
                        <li><Link to="/services/drayage" onClick={() => setMenuOpen(false)}>Drayage</Link></li>
                        <li><Link to="/services/ftl" onClick={() => setMenuOpen(false)}>FTL</Link></li>
                        <li><Link to="/services/hazmat" onClick={() => setMenuOpen(false)}>Hazmat</Link></li>
                        <li><Link to="/services/transportation" onClick={() => setMenuOpen(false)}>Transportation</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/load-tracking" className="nav-link" onClick={handleNavClick}>Load Tracking</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link" onClick={handleNavClick}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link" onClick={handleNavClick}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
