"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingFeature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation happens only once
      easing: "ease-in-out", // Easing style
    });
  }, []);

  return (
    <section className="featured-area">
      <Grid className="container">
        <Grid className="row">
          <Grid className="col-lg-6">
            <Grid
              className="featured-item"
              data-aos="fade-up"
              data-aos-duration="800">
              <h2 className="title">
                Our stunning upcoming <span>featured Services</span>
              </h2>
              <Grid className="btn-box">
                <Link
                  href="/"
                  className="single-btn button white
                ">
                  Get started
                </Link>
                <Link
                  href="/"
                  className="single-btn button white
                ">
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="col-lg-6">
            <Grid className="row">
              <Grid className="col-lg-6">
                <Grid
                  className="small-item"
                  data-aos="fade-up"
                  data-aos-duration="900">
                  <Grid className="image">
                    <Image
                      src="/images/ico01.svg"
                      width="35"
                      height="35"
                      alt="icon"
                    />
                  </Grid>
                  <h3>
                    MT4/MT5 <br /> trading
                  </h3>
                </Grid>
              </Grid>
              <Grid className="col-lg-6">
                <Grid
                  className="small-item"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <Grid className="image">
                    <Image
                      src="/images/ico02.svg"
                      width="35"
                      height="35"
                      alt="icon"
                    />
                  </Grid>
                  <h3>CryptocFATx Coin (Exclusiveurrency</h3>
                </Grid>
              </Grid>
              <Grid className="col-lg-12">
                <Grid
                  className="small-item item-line"
                  data-aos="fade-up"
                  data-aos-duration="1100">
                  <Grid className="image">
                    <Image
                      src="/images/ico02.svg"
                      width="35"
                      height="35"
                      alt="icon"
                    />
                  </Grid>
                  <h3>Copy Trading</h3>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default UpcomingFeature;
