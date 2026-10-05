import { Link } from 'react-router-dom';

const pages = [
  ['Home', '/'],
  ['Load Tracking', '/load-tracking'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact-us'],
  ['OTR', '/otr'],
  ['Drayage', '/services/drayage'],
  ['FTL', '/services/ftl'],
  ['Hazmat', '/services/hazmat'],
  ['Warehousing', '/services/warehousing'],
  ['Warehousing & Storage', '/services/warehousing-storage'],
  ['Transportation', '/services/transportation'],
  ['Supply Chain Solutions', '/services/supply-chain'],
  ['End-to-End Transportation', '/services/end-to-end'],
  ['Privacy Policy', '/privacy-policy'],
  ['Terms & Conditions', '/terms-and-conditions'],
];

export default function Sitemap() {
  return (
    <section className="section" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', marginBottom: 30, color: 'var(--color-primary)' }}>
          Sitemap
        </h1>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          {pages.map(([label, path]) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
