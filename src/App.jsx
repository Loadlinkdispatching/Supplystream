import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import IndustryVerticals from './components/IndustryVerticals';
import LoadTracking from './components/LoadTracking';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OTR from './components/OTR';
import Drayage from './components/Drayage';
import FTL from './components/FTL';
import Hazmat from './components/Hazmat';
import Warehousing from './components/Warehousing';
import WarehousingStorage from './components/WarehousingStorage';
import TransportationPage from './components/Transportation';
import SupplyChainPage from './components/SupplyChain';
import EndToEnd from './components/EndToEnd';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
  useEffect(() => {
    const scrollBtn = document.getElementById('scroll-top-btn');

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollBtn) {
        scrollBtn.classList.toggle('visible', scrollY > 400);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const header = document.getElementById('site-header');

    const onResize = () => {
      if (header) header.style.height = '';
    };

    const handleAnchorClick = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    window.addEventListener('resize', onResize);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <About />
      <IndustryVerticals />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/load-tracking" element={
            <main><LoadTracking /></main>
          } />
          <Route path="/about-us" element={
            <main><AboutUs /></main>
          } />
          <Route path="/contact-us" element={
            <main><ContactUs /></main>
          } />
          <Route path="/otr" element={
            <main><OTR /></main>
          } />
          <Route path="/services/drayage" element={
            <main><Drayage /></main>
          } />
          <Route path="/services/ftl" element={
            <main><FTL /></main>
          } />
          <Route path="/services/hazmat" element={
            <main><Hazmat /></main>
          } />
          <Route path="/services/warehousing" element={
            <main><Warehousing /></main>
          } />
          <Route path="/services/warehousing-storage" element={
            <main><WarehousingStorage /></main>
          } />
          <Route path="/services/transportation" element={
            <main><TransportationPage /></main>
          } />
          <Route path="/services/supply-chain" element={
            <main><SupplyChainPage /></main>
          } />
          <Route path="/services/end-to-end" element={
            <main><EndToEnd /></main>
          } />
          <Route path="/privacy-policy" element={
            <main><PrivacyPolicy /></main>
          } />
          <Route path="/terms-and-conditions" element={
            <main><TermsConditions /></main>
          } />
          <Route path="/sitemap" element={
            <main><Sitemap /></main>
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
