"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExplorArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensures animation happens only once
      easing: "ease-in-out", // Easing style
    });
  }, []);
  return (
    <section className="explore-area">
      <Grid className="container">
        <Grid className="row">
          <Grid className="col-lg-12">
            <h2 data-aos="fade-up" data-aos-duration="800">
              Explore Top Trading Pairs
            </h2>
            <Grid className="wrapper">
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="800">
                <h3>BTC/USDT</h3>
                <Grid className="icon">
                  <Image
                    src="/images/i-01.png"
                    width="155"
                    height="90"
                    alt="icon"
                  />
                </Grid>
                <p>
                  Trade the world’s most valuable cryptocurrency with the
                  stability of Tether
                </p>
              </Grid>
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="900">
                <h3>ETH/USDT</h3>
                <Grid className="icon">
                  <Image
                    src="/images/i-02.png"
                    width="155"
                    height="90"
                    alt="icon"
                  />
                </Grid>
                <p>Ethereum’s versatility meets the reliability of USDT</p>
              </Grid>
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1000">
                <h3>ADA/USDT</h3>
                <Grid className="icon">
                  <Image
                    src="/images/i-03.png"
                    width="106"
                    height="106"
                    alt="icon"
                  />
                </Grid>
                <p>Cardano’s innovation paired with stable trading power</p>
              </Grid>
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1100">
                <h3>SOL/USDT</h3>
                <Grid className="icon">
                  <Image
                    src="/images/i-04.png"
                    width="155"
                    height="90"
                    alt="icon"
                  />
                </Grid>
                <p>High-speed Solana trading with USDT stability.</p>
              </Grid>
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1200">
                <h3>BTC/ETH</h3>
                <Grid className="icon">
                  <Image
                    src="/images/i-05.png"
                    width="155"
                    height="90"
                    alt="icon"
                  />
                </Grid>
                <p>High-speed Solana trading with USDT stability.</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default ExplorArea;
