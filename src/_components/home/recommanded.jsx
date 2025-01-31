"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Recommanded = () => {
  return (
    <section className="recommanded-area">
      <Grid className="container">
        <Grid className="top-content">
          <Grid className="row">
            <Grid className="col-lg-6">
              <Grid
                className="image"
                data-aos="fade-up"
                data-aos-duration="800">
                <Image
                  src="/images/photo-content.png"
                  width="467"
                  height="325"
                  alt="image"
                />
              </Grid>
            </Grid>
            <Grid className="col-lg-6">
              <Grid
                className="left-top-content"
                data-aos="fade-up"
                data-aos-duration="800">
                <span className="tag">WORLDLEADER</span>
                <h2>
                  Why others
                  <span>
                    {" "}
                    recommend us
                    <Link className="button dark" href="/">
                      {" "}
                      View More
                    </Link>
                  </span>
                </h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="bottom-content">
          <Grid className="item-wrapper">
            <Grid
              className="single-item"
              data-aos="fade-up"
              data-aos-duration="800">
              <Image
                src="/images/01.png"
                width="291"
                height="138"
                alt="image"
              />
              <h3 className="title">Innovations in Action</h3>
              <p>
                We stay at the forefront of the latest innovations and implement
                them for your success.
              </p>
            </Grid>
            <Grid
              className="single-item"
              data-aos="fade-up"
              data-aos-duration="900">
              <Image
                src="/images/01.png"
                width="291"
                height="138"
                alt="image"
              />
              <h3 className="title">Annual Yield of 30%</h3>
              <p>
                Our investment strategies deliver an impressive 30% annual
                yield.
              </p>
            </Grid>
            <Grid
              className="single-item"
              data-aos="fade-up"
              data-aos-duration="1000">
              <Image
                src="/images/01.png"
                width="291"
                height="138"
                alt="image"
              />
              <h3 className="title">Expert Trader</h3>
              <p>
                Our large team of traders, ensures reliable market trade for us
                and makes continuos profit
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Recommanded;
