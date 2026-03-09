"use client";
import navbarData from "@/public/data/navbarData";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "../shared/Cart";
import { isActive } from "../shared/Functions";
import MobileMenu from "../shared/MobileMenu";
import Search from "../shared/Search";
import Sidebar from "../shared/Sidebar";
const Navbar = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState(false);
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
      <header id="header" className={`header index-2 w-100 mini-scrollbar ${fixedHeader ? "fixed" : ""}`}>
        <div className="container-big px-0 px-md-2">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <ul className="mb-0 menu p-0 py-xxl-2 align-items-lg-center">
              <li className="d-none d-lg-block px-xxl-4">
                <a className="align-items-center gap-2 d-none d-xl-flex outline-btn primary" href="tel:3165550116">
                  <i className="ti ti-phone-call fs-4"></i>(316) 555-0116
                </a>
              </li>
              {navbarData.slice(0, 3).map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link className="d-flex align-items-center" href={link}>
                      {title}
                    </Link>
                  </li>
                ) : type ? (
                  <li className="submenu mega-menu" key={id}>
                    <span className={`${isActive(path, submenus) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown mega-dropdown">
                      {submenus.map(({ id, title, link, img }) => (
                        <li key={id}>
                          <Link href={link}>
                            <div className="home-img">
                              <Image src={img} alt="" />
                            </div>
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="submenu" key={id}>
                    <span className={`${isActive(path, submenus) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown">
                      {submenus?.map(({ id, title, link }) => (
                        <li key={id}>
                          <Link href={link}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
            <ul className="mb-0 menu p-0 py-xxl-2 align-items-lg-center">
              {navbarData.slice(3).map(({ id, title, link, submenus, type }) =>
                link ? (
                  <li key={id}>
                    <Link className={`d-flex align-items-center ${path == link ? "active" : ""}`} href={link}>
                      {title}
                    </Link>
                  </li>
                ) : type ? (
                  <li className="submenu mega-menu" key={id}>
                    <span className={`${isActive(path, submenus) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown mega-dropdown">
                      {submenus.map(({ id, title, link, img }) => (
                        <li key={id}>
                          <Link href={link}>
                            <div className="home-img">
                              <Image src={img} alt="" />
                            </div>
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="submenu" key={id}>
                    <span className={`${isActive(path, submenus) ? "active" : ""}`}>
                      {title} <i className="ti ti-chevron-down"></i>
                    </span>
                    <ul className="submenu-dropdown">
                      {submenus?.map(({ id, title, link }) => (
                        <li key={id}>
                          <Link className={`${path == link ? "active" : ""}`} href={link}>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
              <div className="d-flex gap-2 gap-xxl-2 align-items-center">
                <button onClick={() => setSearch(true)} className="search-popup-btn text-white xl-text">
                  <i className="ti ti-search"></i>
                </button>
                <Cart />
                <Link href="/contact-us" className="secondary3-btn d-none d-lg-block">
                  Get a Quote <i className="ti ti-arrow-up-right"></i>
                </Link>
                <button onClick={() => setSidebarOpen(true)} className="show-offcanvas bg-transparent border-0 d-none d-xl-block fs-3">
                  <i className="ti ti-layout-grid"></i>
                </button>
              </div>
            </ul>
            <div onClick={() => setMobileMenu(true)} className="toggle-menu">
              <i className="ti ti-menu-2"></i>
            </div>
          </nav>
        </div>
      </header>
      <Search search={search} setSearch={setSearch} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default Navbar;
