import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer position-relative pt-120">
      <div className="position-relative overflow-x-hidden">
        <div className="container footer-up">
          <div className="row g-3 g-lg-4">
            <div className="col-md-6 col-xl-4">
              <div className="footer-card">
                <Link href="/">
                  <Image src={logo} className="img-fluid mb-4" alt="" height={80}/>
                </Link>
                <p className="mb-4 pb-lg-3 text-white">Ձեր էներգետիկ ծախսերի օպտիմալացումը սկսվում է ճիշտ մատակարարից</p>
              
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="footer-card">
                <h3 className="text-white pb-3">Quik Link</h3>
                <ul className="contact list-unstyled quick-link">
                  <li>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Կապ մեզ հետ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="footer-card">
                <h3 className="text-white pb-3">Կապ</h3>
                <ul className="contact">
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-phone-call"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <a href="tel:(808)555-0111" className="text-white">
                        (808) 555-0111
                      </a>
                  
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-mail"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <a href="mailto:info@energysupply.com" className="text-white">
                        info@energysupply.com
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-map-pin-search"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="text-white">2118 Thornridge Cir. Syracuse, Connecticut</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
