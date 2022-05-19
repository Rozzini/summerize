import React from "react";
import { TopCard } from "../Cards/TopCard";

const data = [
  {
    image: "./img/nft1.png",
  },
  {
    image: "./img/nft1.png",
  },
  {
    image: "./img/nft1.png",
  },
];

export default function TopLiveMints() {
  return (
    <div className="flex flex-col px-10 ">
      <div className="flex py-10 ">
        <h1 className="text-poppins text-5xl sm:text-[80px]">Top Live Mints</h1>
      </div>
      <div className="flex flex-wrap justify-center  items-center ">
        {/* <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full justify-center items-center  grid-rows-4 gap-10"> */}

        {data.map((n, index) => {
          return  <TopCard image={n.image} key={index} />;
        })}
      </div>
    </div>
  );
}