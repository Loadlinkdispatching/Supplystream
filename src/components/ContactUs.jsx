import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    address: '',
    message: '',
    privacy: false,
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website,
          address: formData.address,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '', address: '', message: '', privacy: false });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-hero-badge">Get In Touch</span>
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-desc">
              Have a question about our logistics solutions? Our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Left - Info Cards */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <h3>Email Us</h3>
                <p>info@supplystreamcorp.com</p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="cf-section">
                    <h3 className="cf-section-title">Personal Information</h3>
                    <div className="cf-row">
                      <div className="cf-group">
                        <label htmlFor="firstName">First Name <span className="cf-req">*</span></label>
                        <input type="text" id="firstName" name="firstName" placeholder="John" required value={formData.firstName} onChange={handleChange} />
                      </div>
                      <div className="cf-group">
                        <label htmlFor="lastName">Last Name <span className="cf-req">*</span></label>
                        <input type="text" id="lastName" name="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="cf-row">
                      <div className="cf-group">
                        <label htmlFor="email">Email Address <span className="cf-req">*</span></label>
                        <input type="email" id="email" name="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="cf-group">
                        <label htmlFor="phone">Phone <span className="cf-req">*</span></label>
                        <input type="text" id="phone" name="phone" placeholder="+1 (555) 123-4567" required value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="cf-section">
                    <h3 className="cf-section-title">Company Details</h3>
                    <div className="cf-row">
                      <div className="cf-group">
                        <label htmlFor="company">Company Name <span className="cf-req">*</span></label>
                        <input type="text" id="company" name="company" placeholder="Your Company Name" required value={formData.company} onChange={handleChange} />
                      </div>
                      <div className="cf-group">
                        <label htmlFor="website">Website</label>
                        <input type="text" id="website" name="website" placeholder="www.yourwebsite.com" value={formData.website} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="cf-group cf-group-full">
                      <label htmlFor="address">Address <span className="cf-req">*</span></label>
                      <input type="text" id="address" name="address" placeholder="Street, City, Postal Code" required value={formData.address} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="cf-section">
                    <h3 className="cf-section-title">How Can We Help?</h3>
                    <div className="cf-group cf-group-full">
                      <label htmlFor="message">Message <span className="cf-req">*</span></label>
                      <textarea id="message" name="message" placeholder="Tell us about your logistics needs..." rows={6} required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="cf-checkbox">
                      <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} required />
                      <label htmlFor="privacy">
                        I accept the <a href="https://www.yusen-logistics.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> <span className="cf-req">*</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="cf-submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                    {!sending && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
                  </button>
                  {status === 'success' && <p style={{ color: 'green', marginTop: 12 }}>✓ Message sent successfully!</p>}
                  {status === 'error' && <p style={{ color: 'red', marginTop: 12 }}>✗ Failed to send. Please try again or email us directly.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
