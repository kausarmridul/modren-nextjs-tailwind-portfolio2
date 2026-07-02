"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const openMenu = () => setShowNav(true);
  const closeMenu = () => setShowNav(false);
  return (
    <>
      <Navbar openMenu={openMenu} />
      <MobileNav showNav={showNav} closeMenu={closeMenu} />
    </>
  );
};

export default ResponsiveNav;
