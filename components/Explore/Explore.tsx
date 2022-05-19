import React from "react";
import { Card } from "../Cards/Card";

const data = [
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
  {
    image: "./img/nft5.png",
  },
];

export default function Explore() {
  return (
    <div className="pt-80 px-10">
      <h1 className="text-poppins text-5xl sm:text-[80px]">Explore</h1>
      <div className="flex flex-wrap gap-10 container mx-auto justify-center items-center">
        {data.map((n, index) => {
          return <Card image={n.image} key={index} />
        })}
      </div>
    </div>
  );
}
