"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";

const CryptoInvest = ({
  targetDate,
  progress,
  softcapDays,
  tokenPrice,
  totalTokens,
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderCircle = (value, max, label) => {
    const circumference = 235.6; // Full stroke length
    const progress = (value / max) * circumference;

    return (
      <Grid className="single-count">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="37.5"
            fill="none"
            stroke="#3d434f"
            strokeWidth="5"
          />
          <circle
            cx="40"
            cy="40"
            r="37.5"
            fill="none"
            stroke="#FFBA00"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
          />
        </svg>
        <Grid className="count-value">{value}</Grid>
        <Grid className="count-label">{label}</Grid>
      </Grid>
    );
  };
  console.log("Progress:", progress);

  return (
    <Grid className="crypto-invest-area">
      <Grid className="container">
        <Grid className="row">
          <Grid className="col-lg-6">
            <Grid className="content">
              <h2>Hurry to invest in cryptocurrency</h2>
              <p>
                We are a cutting-edge investment platform dedicated to helping
                you grow your wealth.
              </p>
              <span>
                Our innovative ROI investment packages offer competitive
                returns, ensuring your money works as hard as you do. With a
                commitment to security and transparency, we provide a reliable
                and rewarding investment experience.
              </span>
            </Grid>
          </Grid>
          <Grid className="col-lg-5 offset-lg-1">
            <Grid className="count-wrapper">
              <h4 className="title">Distribution Ends In:</h4>
              <Grid className="wrapp">
                {renderCircle(timeLeft.days, 365, "Days")}
                {renderCircle(timeLeft.hours, 24, "Hours")}
                {renderCircle(timeLeft.minutes, 60, "Minutes")}
                {renderCircle(timeLeft.seconds, 60, "Seconds")}
              </Grid>
              <Button className="buy-btn" type="button">
                Buy FATx Tokens
              </Button>
              <div className="progress-container">
                <div className="progress-top">
                  <span>80</span>
                  <span className="info">100</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    // style={{ width: `${progress || 0}%` }}></div>
                    style={{ width: `55 %` }}></div>
                </div>
                <div className="progress-bottom">
                  <span className="b-title">Softcap in 976 days</span>
                  <span className="b-title">Hardcap</span>
                </div>
                <div className="progress-details">
                  <div className="single-d">
                    <p>Token Price:</p>
                    <span>$0.0023</span>
                  </div>
                  <div className="single-d align-right">
                    <p>Total FATx Tokens:</p>
                    <span>6803.0122</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoInvest;
