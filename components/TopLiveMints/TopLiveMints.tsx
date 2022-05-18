import React from "react";
import { TopCard } from "../Cards/TopCard";

export default function TopLiveMints() {
  const number = [1, 2, 3];
  return (
    <div>
      <h1 className="text-5xl font-mono font-bold text-center py-20">
        Top Live Mints
      </h1>
      <div className="flex flex-wrap gap-10 container mx-auto justify-center items-center">
        {number.map((n) => {
          return <TopCard key={n} />
        })}
      </div>
    </div>
  );
}
