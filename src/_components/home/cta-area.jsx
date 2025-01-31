"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CTAArea = () => {
  return (
    <Grid className="cta-area">
      <Grid className="container">
        <Grid className="row">
          <Grid className="col-lg-12">
            <Grid
              className="block-wrapper"
              sx={{
                backgroundImage: `url('/images/ctbg.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}>
              <Grid
                className="content"
                data-aos="fade-up"
                data-aos-duration="800">
                <h2>
                  Join ambitious professionals and unlock your dream career
                  today
                </h2>
                <p>
                  Unlock your true potential and discover a world of
                  opportunities that align with your skills, interests, and
                  aspirations
                </p>
                <form action="#" className="field-box">
                  <TextField
                    id="outlined-basic"
                    label="Your mail address"
                    variant="outlined"
                    className="input-field"
                  />
                  <Button
                    className="submit-btn"
                    type="submit"
                    variant="contained">
                    Join Us
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CTAArea;
