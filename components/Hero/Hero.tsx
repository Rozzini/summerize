/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  const data = ["HOME", "GALLERY", "BLOG", "KNET"];

  return (
    <div className=" items-center relative  min-h-screen flex justify-around relative flex-wrap px-5">
      <>
        <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[320px] filter top-0  left-0 opacity-75"></div>
      </>

      <div className="max-w-2xl relative">
        <h1 className=" text-4xl md:text-4xl font-poppins text-left uppercase">
          Marketplace to Create, Buy<br></br>& Sell NFTs{" "}
        </h1>
        <p className=" text-sm md:text-sm text-left font-poppins my-9">
          Nft Marketplace brings together artists, creators and crypto
          enthusiasts on a<br></br>
          single platform ro create and explore top NFTs.
        </p>
        <div className="flex justify-between max-w-xs my-5 ">
          <button className="bg-[#EC303B] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
            Mint NFT
          </button>
          <button className="text-[#EC303B] px-8 py-2 text-2xl font-bold flex items-center">
            Explore
          </button>
        </div>
      </div>
      <>
        <div className="flex flex-col  bg-white rounded-xl border border-gray-500  p-4 relative">
          <>
            <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[120px] filter top-0  right-48 opacity-75"></div>
          </>
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
              alt="nft-gif"
              width="430"
              height="430"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col  rounded-b-xl py-4 ">
            <div className="flex justify-between"></div>
            <div className="flex  justify-between font-mono"></div>
          </div>

          <>
            <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[320px] filter bottom-0  right-0 opacity-75"></div>
          </>
        </div>
      </>
    </div>
  );
}
