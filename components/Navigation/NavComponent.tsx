/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Auth from "../Auth/Auth";
import Transak from "../Transak/Transak";

const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Top NFT's",
    href: "/TOP",
  },
  {
    name: "Blog",
    href: "/BLOG",
  },
];

export default function NavComponent() {
  return (
    <div className="sticky w-11/12 mx-auto pt-8">
      <div className="bg-white rounded-xl relative flex items-center justify-between h-16">
            <div className="flex justify-start">
              <div className="pl-6 text-black text-2xl font-krona-one font-mono">
                SUMMER.NFT
              </div>
            </div>
            <div className="text-black font-popins flex justify-end space-x-4 pr-6">
              <a
                href="#"
                className="text-[#F5634A] px-3 py-2 font-medium"
              >
                Home
              </a>

              <a
                href="#"
                className="text-black-300 px-3 py-2 font-medium"
              >
                Top NFTs
              </a>

              <a
                href="#"
                className="text-black-300 px-3 py-2 font-medium"
              >
                Blog
              </a>
              <Transak />

              <a
                href="/profile"
                className="text-black-300 px-3 py-2 font-medium"
              >
                Profile
              </a>

              <Auth />
        </div>
      </div>
    </div>

    // <div className="sticky top-20  rounded-md text-black bg-white  text-xl font-bold drop-shadow-xl flex-row transition-colors duration-500  ">
    //   <div className="flex justify-between items-center sm:px-8 px-2 py-6 sm:justify-between sm:space-x-10">
    //     <div className="flex justify-start">
    //       <div className="h-10 text-black text-2xl font-krono-one font-mono">SUMMER.NFT</div>
    //     </div>
    //     <div className="hidden sm:block ">
    //       <ul className=" flex items-center h-full justify-center ">
    //         {navData.map((n, index) => {
    //           return (
    //             <li key={index} className="mx-5 text-xl">
    //               {n.name}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //     <div className="hidden lg:block">
    //       <Auth />
    //     </div>
    //   </div>
    // </div>
  );
}
