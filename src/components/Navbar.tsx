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
        className="flex flex-row gap-72 justify-center items-center opacity-100"
      >
        <div className="flex justify-center items-center">
          <Image src={logoPic} className="w-[150px] h-[35px]" alt="LOGO" />
        </div>

        <div
          id="nb-list"
          className="flex text-[#27306a] text-lg font-medium justify-center align-middle "
        >
          <ul className="flex flex-row p-5 gap-6">
            <li className="pr-3">Home</li>
            <li className="pr-3">Services</li>
            <li className="pr-3">Blogs</li>
            <li className="pr-3">Careers</li>
            <li>Appeal</li>
          </ul>
        </div>

        <div id="nb-Btn" className="flex  justify-center align-middle ">
          <button className=" bg-[#ffffff] border border-[#16205f] text-[#16205f] rounded-md py-3 px-3.5 border-2 font-semibold text-xs color-[#ffffff]">
            CONTACT US
          </button>
        </div>
      </div>
      {/* <div
        id="NavBar--copy"
        className="h-[70px] w-screen bg-green-300 absolute z-18 top-0 "
      >
        <div
          id="nb-elements"
          className="flex flex-row gap-72 justify-center items-center opacity-100"
        >
          <span>
            <p>Second</p>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
