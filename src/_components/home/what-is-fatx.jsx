"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const WhatIsFatx = () => {
  return (
    <section className="what-is-fatx">
      <Grid className="container">
        <Grid className="wrapper-block">
          <Grid className="row">
            <Grid className="col-lg-6">
              <Grid
                className="content"
                data-aos="fade-right"
                data-aos-duration="800">
                <span>ABOUT US</span>
                <h2>What is FATx?</h2>
                <p>
                  fatx empowers investors with a platform that offers
                  exceptional returns and minimal risk. Our innovative
                  investment packages are designed to suit a variety of
                  financial goals, providing daily ROI and flexible reinvestment
                  options. With a secure and transparent system, fatx ensures
                  that your investments are protected and your earnings are
                  maximized. Join our growing community of investors and
                  experience the benefits of a smart, reliable, and lucrative
                  investment platform.
                </p>
              </Grid>
            </Grid>
            <Grid className="col-lg-6">
              <Grid
                className="right-image text-center"
                data-aos="fade-left"
                data-aos-duration="800">
                <Image
                  src="/images/w-fatx.png"
                  width="535"
                  height="535"
                  alt="image"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="row">
            <Grid className="col-lg-3">
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="800">
                <Image
                  src="/images/wi-01.svg"
                  width="34"
                  height="34"
                  alt="icon"
                />
                <h3>High daily and monthly ROI</h3>
                <p>
                  Unlock the potential for significant earnings with our high
                  daily and monthly ROI plans. Whether you're looking to grow
                  your investment steadily
                </p>
              </Grid>
            </Grid>
            <Grid className="col-lg-3">
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="900">
                <Image
                  src="/images/wi-02.svg"
                  width="34"
                  height="34"
                  alt="icon"
                />
                <h3>Flexible investment options</h3>
                <p>
                  Experience the freedom of Flexible Investment Options tailored
                  to suit your financial goals. Whether you're a cautious
                  beginner or an experienced investor
                </p>
              </Grid>
            </Grid>
            <Grid className="col-lg-3">
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1000">
                <Image
                  src="/images/wi-03.svg"
                  width="34"
                  height="34"
                  alt="icon"
                />
                <h3>Zero knowledge required</h3>
                <p>
                  With experience in all market conditions, we recognize what
                  processes and solutions.
                </p>
              </Grid>
            </Grid>
            <Grid className="col-lg-3">
              <Grid
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1100">
                <Image
                  src="/images/wi-04.svg"
                  width="34"
                  height="34"
                  alt="icon"
                />
                <h3>
                  Risk <br /> Management
                </h3>
                <p>
                  With experience in all market conditions, we recognize what
                  processes and solutions.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default WhatIsFatx;
