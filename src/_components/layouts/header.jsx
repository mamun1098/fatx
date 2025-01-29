"use client";

import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5"; // Icons for hamburger and close menu

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Grid className="header-area">
      <Grid className="main-header">
        <Grid className="container">
          <Grid className="row align-items-center">
            <Grid className="col-lg-10 col-7">
              <Grid className="left-wrapper">
                <Link href="/" className="logo">
                  <Image
                    src="/images/logo-circle.svg"
                    width="65"
                    height="65"
                    alt="Logo"
                  />
                  Fatx
                </Link>
                <ul className="main-menu">
                  <li>
                    <Link href="/">Home </Link>
                  </li>
                  <li>
                    <Link href="#aboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link href="#packages">Packages</Link>
                  </li>
                  <li>
                    <Link href="#howItWorks">How It Works</Link>
                  </li>
                </ul>
                <Link
                  className="mail-to"
                  href="mailto:info@fatx.me"
                  target="_blank">
                  info@fatx.me
                </Link>
              </Grid>
            </Grid>

            <Grid className="col-lg-2 col-5 d-none d-lg-block">
              <Grid className="header-button">
                <Link href="/form-reservation" className="button yellow">
                  Réservez
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
