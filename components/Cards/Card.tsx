interface Props {
  image: string;
}

export const Card = ({ image }: Props) => {
  return (
    <div className="bg-white relative w-[300px] h-[332px] mt-12 mb-12 mx-4 shadow-2xl rounded-xl ">
      <img
        src={image}
        alt="title"
        className="pt-4 mx-auto rounded-t-xl sm:rounded-none rounded-lg"
      />
      <h1 className="pl-2 font-semibold">Jacob Jones</h1>
      <div className="absolute top-[210px] left-[9px]">
        <img
          src="./NftCard/artist.png"
          alt="title"
          className="inline pt-4 rounded-t-xl sm:rounded-none rounded-lg object-left"
        />
      </div>
      <div className="absolute top-[228px] left-[45px]">
        <p className="text-xs">Owned by</p>
        <p className="text-xs">Roger Herwitz</p>
      </div>

      <div className="absolute top-[210px] right-[85px]">
        <img
            src="../NftCard/cryp.png"
            alt="title"
            className="pt-4 rounded-t-xl sm:rounded-none rounded-lg"
          />
        </div>

        <div className="absolute top-[228px] right-[15px]">
          <h2 className="text-right text-xs text-[#52575C]">Price</h2>
          <h1 className="text-xs text-black">10.50 SMR</h1>
        </div>

        <div className="absolute bottom-[24px] right-[25px]">
        <p className="text-sm text-[#52575C]">
        <img
            src="../NftCard/simpleLike.png"
            alt="title"
            className="inline pr-2 pb-1 rounded-t-xl sm:rounded-none rounded-lg"
          />
          234
          </p>
        </div>

      <div className="absolute top-[280px] left-[9px]">
        <button className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
          Mint
        </button>
      </div>
    </div>
  );
};
