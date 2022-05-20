/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import HeroSection from "../components/Hero/Hero";
import NavComponent from "../components/Navigation/NavComponent";
import Explore from "../components/Explore/Explore";
import TopLiveMints from "../components/TopLiveMints/TopLiveMints"
import Footer from "../components/Footer/Footer"
import LearnAndEarn from "../components/LearnAndEarn/LearnAndEarn"

export default function Home() {
  return (
    <div className=" text-black font-poppins bg-gradient-to-tr from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
      <NavComponent />
      <HeroSection />
      <TopLiveMints />
      <Explore />
      <LearnAndEarn />
      <Footer />
    </div>
  );
}
