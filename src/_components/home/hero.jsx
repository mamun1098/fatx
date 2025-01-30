"use client";
import Grid from "@mui/material/Grid2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CommonHero = ({ slides, isHigher }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation happens only once
      easing: "ease-in-out", // Easing style
    });
  }, []);
  return (
    <section className={`hero-area ${isHigher ? "higher" : "normal"}`}>
      <Grid container className="hero-wrapper">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination]}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <Grid
                container
                className="wrapper-content"
                sx={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}>
                <Grid
                  className="gradient-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                />
                <Grid container className="hero-content">
                  <Grid container className="container">
                    <Grid container className="row">
                      <Grid className="col-lg-6">
                        <Grid
                          className="text-content"
                          data-aos="fade-right"
                          data-aos-duration="800">
                          <h1>
                            Your <span className="yellow">Global Success </span>
                            Partner
                          </h1>
                          <p className="text">
                            Fatxme becomes your passport to a world filled with
                            opportunities. Join us on this innovation journey.
                          </p>
                          <a href="#" className="button yellow">
                            Get Started
                          </a>
                        </Grid>
                      </Grid>
                      <Grid className="col-lg-6">
                        <Grid
                          className="image"
                          data-aos="fade-left"
                          data-aos-duration="800">
                          <Image
                            src="/images/hero-01.png"
                            width={680}
                            height={380}
                            alt="Hero Image"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </section>
  );
};

export default CommonHero;
