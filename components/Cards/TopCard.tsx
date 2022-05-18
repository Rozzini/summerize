import { EthIcon } from "../EthIcon/EthIcon";
interface Props {
  name: string;
  image: string;
  price: number;
  percentage: number;
  total: number;
  id: number;
}

export const TopCard = () => {
  return (
    <div className="w-96 h-screen relative flex justify-center items-center">
      <div className="relative bottom-0 left-10 w-96 ">
        <div className="flex flex-col text-sm  rounded-b-xl py-3 bg-white text-black">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <div className="flex flex-col ml-3">
                <h1>Virtual Art</h1>
                <p>by @wwwzy</p>
              </div>
            </div>
            <div className="flex fill-pink-500 text-pink-500 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              80
            </div>
          </div>
          <div className="flex justify-between pt-6">
            <h1 className="text-gray-300 text-lg">Price</h1>
            <p className="flex items-center">
              4.55
              <EthIcon />
            </p>
          </div>
          <button className="mx-1 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg font-bold rounded-lg p-[2px] ">
            <div className="bg-black text-white py-4 rounded-lg">Mint</div>
          </button>
        </div>
      </div>
      <div className="absolute top-96 right-0">
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="242"
            height="242"
            className="rounded-xl"
          />
        </div>
    </div>
  );
};
