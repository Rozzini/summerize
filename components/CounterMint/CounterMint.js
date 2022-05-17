import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white rounded-3xl flex justify-center mb-20">
      <button className="bg-redsummerize rounded-3xl item w-16 h-16" onClick={() => { if (count > 0) setCount(count - 1);}}>
        -
      </button>
      <div className="text-center w-32 pt-2">{count}</div>
      <button className="bg-redsummerize rounded-3xl item w-16 h-16" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default function CounterMint() {
  return (
    <div className="container mx-auto flex px-5 items-center justify-center flex-col">
      <Counter />
      <button
        className="bg-redsummerize text-white font-bold py-2 px-4 rounded-md"
        onClick={() => {
          authenticate({ provider: "metamask" });
        }}
      >
        <h2>mint</h2>
      </button>
    </div>
  );
}
