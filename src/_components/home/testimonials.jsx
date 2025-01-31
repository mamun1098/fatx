"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = () => {
  return (
    <Grid className="testimonials-area">
      <Grid
        className="testimoni-banner"
        sx={{
          backgroundImage: `url('/images/global.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   backgroundPosition: "center",
          position: "relative",
        }}>
        <Grid className="container">
          <Grid className="col-lg-5 offset-lg-7">
            <Grid className="title-text">
              <h2>
                What Our <span>Clients</span> Say
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="testimoni-wrapper">
        <Grid className="container">
          <Grid className="row">
            <Grid className="col-lg-12">
              <Swiper
                loop={false}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={16}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}>
                <SwiperSlide className="swiper-slide">
                  <Grid className="single-item left-corner">
                    <p>
                      "Unbelievable returns! I've never seen such consistent 30%
                      annual growth. Thanks to this company, my investments are
                      truly flourishing."
                    </p>
                    <h4 className="name">Sarah T.</h4>
                    <span className="company">CEO, Network</span>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Grid className="single-item right-corner">
                    <p>
                      "Their use of cutting-edge tech and AI is mind-blowing. It
                      feels like I have a team of experts working around the
                      clock to ensure my investments are in safe hands."
                    </p>
                    <h4 className="name">michael sh.</h4>
                    <span className="company">CEO, Penta</span>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Grid className="single-item right-bottom-corner">
                    <p>
                      "I used to be skeptical about trading, but this company's
                      expertise and guidance have turned me into a confident
                      investor. A solid 30% annual yield speaks for itself!"
                    </p>
                    <h4 className="name">Alex b.</h4>
                    <span className="company">Director, Vision</span>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Grid className="single-item left-corner">
                    <p>
                      "Unbelievable returns! I've never seen such consistent 30%
                      annual growth. Thanks to this company, my investments are
                      truly flourishing."
                    </p>
                    <h4 className="name">Sarah T.</h4>
                    <span className="company">CEO, Network</span>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Grid className="single-item right-bottom-corner">
                    <p>
                      "I used to be skeptical about trading, but this company's
                      expertise and guidance have turned me into a confident
                      investor. A solid 30% annual yield speaks for itself!"
                    </p>
                    <h4 className="name">Alex b.</h4>
                    <span className="company">Director, Vision</span>
                  </Grid>
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
