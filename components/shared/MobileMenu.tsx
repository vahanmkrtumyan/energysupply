"use client";
import navbarData from "@/public/data/navbarData";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
type Props = {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ mobileMenu, setMobileMenu }: Props) => {
  const path = usePathname();
  return (
    <>
      <header className={`mobile-menu d-lg-none mini-scrollbar ${mobileMenu ? "open" : ""}`}>
        <div className="container g-0 g-lg-1">
          <nav id="navbar-menu-mobile" className="px-2 px-lg-0">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link href="/">
                <Image src={logo} height={64} alt="" />
              </Link>
              <i className="ti ti-x text-white fs-2 close-menu" onClick={() => setMobileMenu(false)}></i>
            </div>
            <ul className="mb-0 menu">
              {navbarData.map(({ title, link }, i) =>
                 (
                  <li key={i}>
                    <Link href={link} onClick={() => setMobileMenu(false)} className={`d-flex align-items-center ${path == link ? "active" : ""}`}>
                      {title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          
          </nav>
        </div>
      </header>
      <div className="mobile-menu-overlay d-lg-none" onClick={() => setMobileMenu(false)}></div>
    </>
  );
};

export default MobileMenu;
