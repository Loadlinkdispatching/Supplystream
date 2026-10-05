import { useEffect, useRef } from 'react';

const stats = [
  { value: 10, label: 'Distribution Centers & Offices', suffix: '', type: 'number' },
  { value: 3, label: 'Countries & Regions', suffix: '', type: 'number' },
  { value: 500, label: 'USA WAREHOUSING PARTNERS', suffix: '', type: 'number' },
  { value: 99, label: 'Customer Retention', suffix: '%', type: 'percent' },
  { value: 98, label: 'On-Time Delivery', suffix: '%', type: 'percent' },
];

const radius = 54;
const circumference = 2 * Math.PI * radius;

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = el.querySelectorAll('.stat-number-value');
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = current;
              }
            }, 30);
          });

          const rings = el.querySelectorAll('.stat-ring-circle');
          rings.forEach((ring) => {
            const pct = parseInt(ring.getAttribute('data-pct'), 10);
            const offset = circumference - (pct / 100) * circumference;
            ring.style.strokeDashoffset = offset;
          });

          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" id="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className={`stat-item stat-item--${stat.type}`} key={i}>
              {stat.type === 'percent' ? (
                <div className="stat-ring">
                  <svg width="130" height="130" viewBox="0 0 130 130">
                    <circle
                      cx="65" cy="65" r={radius}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="6"
                    />
                    <circle
                      className="stat-ring-circle"
                      cx="65" cy="65" r={radius}
                      fill="none"
                      stroke="#fff"
                      strokeWidth="6"
                      strokeLinecap="round"
                      data-pct={stat.value}
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: circumference,
                        transition: 'stroke-dashoffset 1.5s ease 0.3s',
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                      }}
                    />
                  </svg>
                  <div className="stat-ring-number">
                    <span className="stat-number-value" data-count={stat.value}>{stat.value}</span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                </div>
              ) : (
                <div className="stat-number">
                  <span className="stat-number-value" data-count={stat.value}>{stat.value}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
              )}
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
