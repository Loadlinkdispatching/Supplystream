export default function PrivacyPolicy() {
  return (
    <section className="section" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', marginBottom: 10, color: 'var(--color-primary)' }}>Supply Stream Corporation – Privacy Policy</h1>
        <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', marginBottom: 30, color: 'var(--color-accent)', fontWeight: 400 }}>Privacy Policy</h2>
        <p style={{ marginBottom: 30, lineHeight: 1.8, color: '#444' }}>This Privacy Policy explains how Supply Stream Corporation collects, uses, stores, and protects customer and carrier information.</p>

        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: 15, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Information Collected:</h3>
        <ul style={{ marginBottom: 30, paddingLeft: 20, lineHeight: 2, color: '#444' }}>
          <li>Full Name</li>
          <li>Company Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>MC/DOT Details (if applicable)</li>
          <li>Freight &amp; Load Information</li>
          <li>Billing &amp; Payment Information</li>
          <li>Carrier/Driver Details</li>
        </ul>

        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: 15, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Use of Information:</h3>
        <p style={{ marginBottom: 30, lineHeight: 1.8, color: '#444' }}>Information may be used for freight brokerage services, load coordination, carrier dispatching, customer communication, shipment tracking, billing, appointment scheduling, compliance verification, and customer support.</p>

        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: 15, letterSpacing: '0.1em', textTransform: 'uppercase' }}>SMS Privacy Disclosure:</h3>
        <p style={{ marginBottom: 30, lineHeight: 1.8, color: '#444' }}>Mobile opt-in, SMS consent, and phone numbers collected for SMS communication purposes will not be shared with any third parties or affiliates for marketing purposes.</p>

        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: 15, letterSpacing: '0.1em', textTransform: 'uppercase' }}>SMS Communications:</h3>
        <p style={{ marginBottom: 30, lineHeight: 1.8, color: '#444' }}>Users may receive load offers, dispatch updates, shipment notifications, rate confirmations, follow-up messages, appointment reminders, and customer support communications.</p>
        <p style={{ marginBottom: 30, lineHeight: 1.8, color: '#444' }}>Standard message and data rates may apply. Users may opt out anytime by replying STOP.</p>
      </div>
    </section>
  );
}
