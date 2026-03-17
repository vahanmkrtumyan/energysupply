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
                <h3 className="text-white pb-3">Հղումներ</h3>
                <ul className="contact list-unstyled quick-link">
                  <li>
                    <Link href="/#about">Մեր մասին</Link>
                  </li>
                  {/* <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">Կապ մեզ հետ</Link>
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
                      <a href="tel:015800900" className="text-white">
                        015800900
                      </a>
                  
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-mail"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <a href="mailto:info@e-supply.am" className="text-white">
                        info@e-supply.am
                      </a>
                    </div>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon">
                      <i className="ti ti-map-pin-search"></i>
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <p className="text-white">Երևան, Հրաչյա Քոչար 4</p>
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
