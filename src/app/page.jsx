/**
 * Title: Home
 * Description: Description of the component
 * Author: Kaji Hasibur Rahman
 * Date: 2025-01-03
 */

import Grid from "@mui/material/Grid2";
import PublicLayout from "@/_components/layouts";
import CommonHero from "@/_components/home/hero";
import WhatIsFatx from "@/_components/home/what-is-fatx";
import UpcomingFeature from "@/_components/home/upcoming-features";
import InvestmentSuccess from "@/_components/home/investment-success";
import CTAArea from "@/_components/home/cta-area";
import ExplorArea from "@/_components/home/explore";
import { Fragment } from "react";
// import Image from "next/image";

const slides = [
  {
    backgroundImage: "/images/hero-bg-1.png",
    subtitle: "Louez facilement, profitez pleinement !",
    titleHighlight: "Tout ce dont vous avez besoin",
    title: "pour vos événements en quelques clics !",
  },
  {
    backgroundImage: "/images/hero-bg-1.png",
    subtitle: "Louez facilement, profitez pleinement !",
    titleHighlight: "Tout ce dont vous avez besoin",
    title: "pour vos événements en quelques clics !",
  },
];
const Home = async () => {
  return (
    <Fragment>
      <PublicLayout>
        <div className="home">
          <CommonHero slides={slides} isHigher={true} />
          <InvestmentSuccess />
          <WhatIsFatx />
          <UpcomingFeature />
          <ExplorArea />
          <CTAArea />
        </div>
      </PublicLayout>
    </Fragment>
  );
};

export default Home;
