"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExplorArea = () => {
  return (
    <section className="explore-area">
      <Grid className="container">
        <Grid className="row">
          <Grid className="col-lg-12">
            <h2>Explore Top Trading Pairs</h2>
            <Grid className="wrapper">
              <Grid className="single-item">
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
              <Grid className="single-item">
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
              <Grid className="single-item">
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
              <Grid className="single-item">
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
              <Grid className="single-item">
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
