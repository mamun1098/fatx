"use client";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Grid className="footer-top">
        <Grid className="container">
          <Grid className="row">
            <Grid className="col-lg-5">
              <Grid className="left-wrap">
                <Link href="#" className="logo">
                  <Image
                    src="/images/footer-logo.svg"
                    width="155"
                    height="45"
                    alt="Logo"
                  />
                </Link>
                <address className="addres">
                  <p className="addr">
                    <b>Corporate Head Office:</b> 3787 Jerry Dove Drive,
                    Florence, South Carolina, 29501, United States.{" "}
                  </p>
                  <Grid className="item">
                    <strong>Phone:</strong>
                    <Link href="tel:+843-496-7759"> 843-496-7759 </Link>
                  </Grid>
                  <Grid className="item">
                    <strong>Fax:</strong>
                    <Link href="tel:+843-496-7759"> 02-222264303 </Link>
                  </Grid>

                  <Grid className="item">
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:info@fatx.me" target="_blank">
                      info@fatx.me
                    </Link>
                  </Grid>
                </address>
              </Grid>
            </Grid>
            <Grid className="col-lg-7">
              <Grid className="widget-wrapper">
                <Grid className="widget-list">
                  <span className="widget-title">Quick Links</span>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/upcoming">Upcoming</Link>
                    </li>
                    <li>
                      <Link href="/employeer">Employeer</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </Grid>
                <Grid className="widget-list">
                  <span className="widget-title">Others</span>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/how-it-works">How it works</Link>
                    </li>
                    <li>
                      <Link href="/terms-and-condition">
                        Terms and condition
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                  </ul>
                </Grid>
                <Grid className="widget-list">
                  <span className="widget-title">About us</span>
                  <ul className="footer-menu">
                    <li>
                      <Link href="/company-profile">Company profile</Link>
                    </li>
                    <li>
                      <Link href="/web-mail">Web mail</Link>
                    </li>
                    <li>
                      <Link href="/board-of-directors">Board of Directors</Link>
                    </li>
                    <li>
                      <Link href="/senior-management">Senior Management</Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="footer-bottom">
        <Grid className="container">
          <Grid className="row align-items-center">
            <Grid className="col-12">
              <Grid className="bottom-wrapper">
                <p className="text-center">
                  &copy; {new Date().getFullYear()} All rights reserved
                </p>
                <Grid className="social-icons">
                  <Link href="/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                  </Link>
                  <Link href="/" target="_blank" aria-label="Telegram">
                    <FaTelegram />
                  </Link>
                  <Link href="/" target="_blank" aria-label="TikTok">
                    <FaTiktok />
                  </Link>
                  <Link href="/" target="_blank" aria-label="YouTube">
                    <FaYoutube />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
