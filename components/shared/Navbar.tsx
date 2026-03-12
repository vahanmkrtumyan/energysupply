"use client";
import navbarData from "@/public/data/navbarData";
import logoWhite from "@/public/images/logo.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActive } from "./Functions";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import Sidebar from "./Sidebar";

const Navbar = ({ cls, logo }: { cls?: string; logo?: StaticImageData | string }) => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <header id="header" className={`header w-100 ${cls} ${fixedHeader ? "fixed" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu" className="d-flex justify-content-between align-items-center position-relative">
            <Link href="/">
              <Image src={logo || logoWhite} alt="" height={64}/>
            </Link>
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
                    <span className={`${isActive(path, submenus || []) ? "active" : ""}`}>
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
            <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3">
               <Link href="/contact-us" className="primary-btn">
                Ստանալ գնառաջարկ <i className="ti ti-arrow-up-right"></i>
              </Link>
              
              <button onClick={() => setMobileMenu(true)} className="toggle-menu">
                <i className="ti ti-menu-2"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Search search={search} setSearch={setSearch} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default Navbar;
