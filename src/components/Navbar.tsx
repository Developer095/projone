import Image from "next/image";
import React from "react";
import logoPic from "../../image/logo.webp";

const Navbar = () => {
  return (
    <div
      id="NavBar"
      className="px-5 border-b bg-opacity-35 bg-white sticky z-20 top-0"
    >
      <div
        id="nb-elements"
        className="flex flex-row justify-center items-center backdrop-blur-md opacity-100 gap-72"
      >
        <div className="flex justify-center items-center">
          <Image
            src={logoPic}
            className="w-[90px] h-[35px] md:w-[150px] h-[35px] hover:cursor-pointer"
            alt="LOGO"
          />
        </div>

        <div
          id="nb-list"
          className="flex text-[#27306a]  font-medium justify-center align-middle text-md md:text-lg"
        >
          <ul className="flex flex-row p-5 gap-6">
            <li className="pr-3 hover:cursor-pointer">Home</li>
            <li className="pr-3 hover:cursor-pointer">Services</li>
            <li className="pr-3 hover:cursor-pointer">Blogs</li>
            <li className="pr-3 hover:cursor-pointer">Careers</li>
            <li className="hover:cursor-pointer">Appeal</li>
          </ul>
        </div>

        <div id="nb-Btn" className="flex justify-center align-middle ">
          <button className=" bg-[#ffffff]  border-[#16205f] text-[#16205f] rounded-md py-[10px] px-[16px] border font-semibold text-xs color-[#ffffff] hover:scale-110 hover:transition-transform duration-150">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
