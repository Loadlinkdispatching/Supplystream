import { Link } from 'react-router-dom';

const industries = [
  {
    name: 'OTR', href: '/otr',
    icon: '/assets/images/industry/otr.png', hoverIcon: '/assets/images/industry/hover-otr.png',
    thumb: '/assets/images/industry/thumb-otr.jpeg', thumbStyle: { marginLeft: '200px' },
    desc: 'Streamlining your logistics', iconStyle: { width: '120px', height: '120px' }, imgStyle: { marginTop: '30px' }
  },
  {
    name: 'Drayage', href: '/services/drayage',
    icon: '/assets/images/industry/drayage.png', hoverIcon: '/assets/images/industry/hover-drayage.png',
    thumb: '/assets/images/industry/thumb-drayage.png',
    desc: 'Turn changes into advantages', iconStyle: { width: '120px', height: '120px' }, imgStyle: { marginTop: '30px' }
  },
  {
    name: 'FTL', href: '/services/ftl',
    icon: '/assets/images/industry/ftl.png', hoverIcon: '/assets/images/industry/hover-ftl.png',
    thumb: '/assets/images/industry/thumb-ftl.png',
    desc: 'Stay cool and connected as tastes change', iconStyle: { width: '120px', height: '120px' }, imgStyle: { marginTop: '30px' }
  },
  {
    name: 'Hazmat', href: '/services/hazmat',
    icon: '/assets/images/industry/hazmat.png', hoverIcon: '/assets/images/industry/hover-hazmat.png',
    thumb: '/assets/images/industry/thumb-hazmat.png',
    desc: 'Ensure the integrity of your medical or pharmaceutical cargo', iconStyle: { width: '120px', height: '120px' }, imgStyle: { marginTop: '10px' }
  },
  {
    name: 'Warehousing', href: '/services/warehousing',
    icon: '/assets/images/industry/warehousing.png', hoverIcon: '/assets/images/industry/hover-warehousing.png',
    thumb: '/assets/images/industry/thumb-warehousing.png',
    desc: 'Get the right goods on the right shelves at the right time', iconStyle: { width: '120px', height: '120px' }, imgStyle: { marginTop: '18px' }
  },
  {
    name: 'Transportation', href: '/services/transportation',
    icon: '/assets/images/industry/transportation.png', hoverIcon: '/assets/images/industry/hover-transportation.png',
    thumb: '/assets/images/industry/thumb-transportation.png',
    desc: 'Anticipate disruption with end-to-end supply chain visibility',
    iconStyle: { width: '150px', height: '150px', marginTop: '15px' }, imgStyle: {}
  },
];

export default function IndustryVerticals() {
  return (
    <section className="section industry-section" id="industries">
      <div className="industry-wrapper">
        <div className="industry-header">
          <h2 className="section-title">INSIGHT INTO YOUR FREIGHT OPERATIONS</h2>
          <div className="industry-header-desc">
            <p>As an extension of your team, we provide the expertise, carrier network, and transportation solutions needed to keep your freight moving efficiently. From FTL and LTL shipments to drayage services, we deliver reliable logistics support that adds value across every stage of your supply chain.</p>
          </div>
        </div>
        <div className="iv-icon-set-container">
          <div className="iv-icon-set-thumbnail-mobile"></div>
          <div className="iv-icon-set-swiper">
            <div className="iv-icon-set-grid swiper-wrapper">
              {industries.map((item, i) => (
                <div className="icon-set-wrapper swiper-slide" key={i}>
                  <Link to={item.href} className="icon-set-item">
                    <div className="icon-set-item-icons">
                      <div className="icon-set-item-icon" style={item.iconStyle}>
                        <img src={item.icon} alt="Icon" style={item.imgStyle} />
                      </div>
                      <div className="icon-set-item-icon-hover">
                        <img src={item.hoverIcon} alt="Icon" />
                      </div>
                    </div>
                    <div className="icon-set-item-title">
                      <p>{item.name}</p>
                    </div>
                  </Link>
                  <div className="iv-icon-set-item-thumbnail">
                    <img src={item.thumb} alt={item.name} style={item.thumbStyle} />
                    <div className="iv-icon-set-item-thumbnail-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination swiper-pagination-iv-icon-set"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
