import * as React from "react";
import NavComponent from "../components/Navigation/NavComponent";
import Footer from "../components/Footer/Footer";
export default function Profile() {
    return ( 
        <div className=" text-black font-poppins bg-gradient-to-tr from-[#FFDC83] via-[#FFB9B9] to-[#00C5E8] ">
      <NavComponent />
      <Footer />
    </div>
    );
}