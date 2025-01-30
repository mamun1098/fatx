"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InvestmentSuccess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensures animation happens only once
      easing: "ease-in-out", // Easing style
    });
  }, []);

  return (
    <section className="investment-success-area">
      <Grid className="container">
        <Grid className="row align-items-center">
          <Grid className="col-lg-6">
            <Grid
              className="featured-item"
              data-aos="fade-up"
              data-aos-duration="800">
              <h2 className="title">
                A Seamless <span>Investment</span> experience with Us
              </h2>
              <Grid className="btn-box">
                <Link href="/" className="single-btn button white">
                  View More
                </Link>
              </Grid>
            </Grid>
            <Grid
              className="success-image"
              sx={{
                backgroundImage: `url('/images/success-img.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
              data-aos="fade-up"
              data-aos-duration="900"></Grid>
          </Grid>
          <Grid className="col-lg-5 offset-lg-1">
            <Grid className="content">
              <h3 data-aos="fade-up" data-aos-duration="800">
                Personalized Investment & Success
              </h3>
              <p data-aos="fade-up" data-aos-duration="900">
                At our company, we believe in forging strong, in-person
                agreements with our clients. We work closely together to achieve
                your financial goals, ensuring a tailored approach to your
                investments.
              </p>
              <Grid className="btn" data-aos="fade-up" data-aos-duration="1000">
                <Link href="/" className="button dark">
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default InvestmentSuccess;
