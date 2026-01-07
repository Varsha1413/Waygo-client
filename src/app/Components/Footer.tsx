'use client';

export default function SkyscannerFooter() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-column">
            <button className="location-selector">
              India - English (UK) - ₹ INR
            </button>
          </div>

          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">Privacy Settings</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Cookie policy</h3>
            <ul>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Company Details</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <h3 className="mt">Company</h3>
            <h3 className="mt">Partners</h3>
            <h3 className="mt">Trips</h3>
          </div>
        </div>

        <div className="copyright">1.1.0.0 ©GoVoyager</div>
      </footer>

      <div className="international-sites">
        <h2>International Sites</h2>

        <div className="sites-grid">
          {sites.map((site, index) => (
            <a key={index} href="#" className="site-link">
              <span className="flag">{site.flag}</span>
              <span>{site.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .footer {
          background: #00204e;
          color: white;
          padding: 20px 60px;
          border-radius: 8px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 20px;
        }

        .footer-column h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .mt {
          margin-top: 20px;
        }

        ul {
          list-style: none;
        }

        li {
          margin-bottom: 12px;
        }

        a {
          color: white;
          text-decoration: none;
          font-size: 14px;
          opacity: 0.9;
        }

        a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .location-selector {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 12px 16px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          width: 100%;
          max-width: 250px;
        }

        .copyright {
          text-align: center;
          font-size: 14px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 40px;
          opacity: 0.8;
        }

        .international-sites {
          background: white;
          padding: 10px 60px;
          border-radius: 8px;
        }

        .international-sites h2 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #161616;
        }

        .sites-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .site-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #161616;
          font-size: 14px;
          padding: 5px 0;
        }

        .site-link:hover {
          color: #0770e3;
        }

        .flag {
          font-size: 18px;
          width: 24px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }

          .sites-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 30px 20px;
          }

          .footer-top {
            grid-template-columns: 1fr;
          }

          .international-sites {
            padding: 30px 20px;
          }

          .sites-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

/* DATA */
const sites = [
  { flag: '🇬🇧', label: 'Cheap flights' },
  { flag: '🇦🇺', label: 'Australia - Cheap flights' },
  { flag: '🇨🇳', label: '中国 - 机票' },
  { flag: '🇭🇰', label: '香港 - 機票' },
  { flag: '🇮🇳', label: 'India - Flight tickets' },
  { flag: '🇮🇩', label: 'Indonesia - Tiket Pesawat' },
  { flag: '🇯🇵', label: '日本 - 航空券' },
  { flag: '🇲🇾', label: 'Malaysia - flights' },
  { flag: '🇲🇽', label: 'México - vuelos' },
  { flag: '🇳🇿', label: 'New Zealand - Cheap flights' },
  { flag: '🇵🇭', label: 'Philippines - flights' },
  { flag: '🇷🇺', label: 'Россия - авиабилеты' },
  { flag: '🇸🇬', label: 'Singapore - flights' },
  { flag: '🇰🇷', label: '대한민국 - 항공권' },
  { flag: '🇹🇼', label: '台灣 - 機票' },
  { flag: '🇹🇭', label: 'ไทย - ตั๋วเครื่องบิน' },
  { flag: '🇺🇸', label: 'USA - flights' },
  { flag: '🇻🇳', label: 'Việt Nam - các chuyến bay' },
];
