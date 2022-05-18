/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import HeroSection from "../components/Hero/Hero";
import NavComponent from "../components/Navigation/NavComponent";
import NftCollection from "../components/NftCollection/NftCollection";

export default function Home() {
  return (
    <article className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-lg text-white font-poppins">
      <NavComponent />
      <HeroSection />
      <NftCollection />
    </article>
  );
}
