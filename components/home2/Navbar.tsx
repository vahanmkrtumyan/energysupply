"use client";
import navbarData from "@/public/data/navbarData";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "../shared/Cart";
import MobileMenu from "../shared/MobileMenu";
import Search from "../shared/Search";
const Navbar = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const path = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    });
  }, []);
  return (
    <>
      <header id="header" className={`header index-2 w-100 ${fixedHeader ? "fixed" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <Link className="d-lg-none" href="/">
              <Image src={logo} alt="" />
            </Link>
            <a className="align-items-center gap-2 d-none d-xl-flex outline-btn primary" href="tel:3165550116">
              <i className="ti ti-phone-call fs-4"></i>(316) 555-0116
            </a>
            <ul className="mb-0 menu align-items-lg-center">
              <li className="d-none d-lg-block px-xxl-5">
                <Link href="/">
                  <Image src={logo} alt="" />
                </Link>
              </li>
              {navbarData.slice(3).map(({ id, title, link }) =>
                (
                  <li key={id}>
                    <Link className={`d-flex align-items-center ${path == link ? "active" : ""}`} href={link}>
                      {title}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link href="/contact-us" className="primary-btn d-lg-none">
                  Get a Quote <i className="ti ti-arrow-up-right"></i>
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2 gap-sm-3 gap-xxl-4">
              <button onClick={() => setSearch(true)} className="search-popup-btn text-white xl-text">
                <i className="ti ti-search"></i>
              </button>
              <Cart />
              <Link href="/contact-us" className="primary-btn d-none d-lg-block">
                Get a Quote <i className="ti ti-arrow-up-right"></i>
              </Link>
              <div className="toggle-menu" onClick={() => setMobileMenu(true)}>
                <i className="ti ti-menu-2"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Search search={search} setSearch={setSearch} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default Navbar;
