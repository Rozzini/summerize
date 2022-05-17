import ConnectWallet from "../ConnectWallet/ConnectWallet";

export default function Navbar() {
  return (
    <nav className="">
      <div className="w-3/5 mx-auto pt-40 ">
        <div className="bg-white bg-opacity-50 rounded-xl relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
              <a
                  href="#"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  SUMMER NFT
                </a>

                <a
                  href="#"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My NFTs
                </a>

                <a
                  href="#"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mint
                </a>

                <a
                  href="#"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>

                <ConnectWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
