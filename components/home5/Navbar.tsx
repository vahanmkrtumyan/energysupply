"use client";
import navbarData from "@/public/data/navbarData";
import logoBlack from "@/public/images/logo-black.png";
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
      <header id="header" className={`header w-100 shop mini-scrollbar ${fixedHeader ? "fixed" : ""}`}>
        <div className="container-big px-0">
          <nav id="navbar-menu" className="d-flex px-lg-0 justify-content-between align-items-center position-relative">
            <div className="d-flex align-items-center gap-3">
              <Link href="/">
                <Image src={logoBlack} alt="" />
              </Link>
              {/* <!-- menu --> */}
              <ul className="mb-0 menu d-none d-lg-flex mini-scrollbar">
                {navbarData.map(({ id, title, link, submenus }) =>
                  link ? (
                    <li key={id}>
                      <Link className={`d-flex align-items-center ${path == link ? "active" : ""}`} href={link}>
                        {title}
                      </Link>
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
              </ul>
            </div>
            <div className="d-flex align-items-center gap-2 gap-md-3">
              <button onClick={() => setSearch(true)} className="xl-text search-popup-btn">
                <i className="ti ti-search"></i>
              </button>
              <Cart />
              <Link href="/contact-us" className="primary-btn d-none d-lg-block">
                Get Quote <i className="ti ti-arrow-up-right"></i>
              </Link>
              <button onClick={() => setSidebarOpen(true)} className="show-offcanvas bg-transparent border-0 d-none d-xl-block fs-3 ">
                <i className="ti ti-layout-grid"></i>
              </button>
              <button onClick={() => setMobileMenu(true)} className="toggle-menu">
                <i className="ti ti-menu-2"></i>
              </button>
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
