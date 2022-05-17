import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import CounterMint from "../components/CounterMint/CounterMint";

export default function Home() {
  return (
    <div>
      <Image
        className="object-center object-cover pointer-events-none"
        src="/img/BackGround.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative">
        <Navbar />
        <Hero />
        <CounterMint />
      </div>
    </div>
  );
}
