import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        id="ele-1"
        className="px-5 pt-24 flex flex-col gap-4 justify-center items-center text-5xl font-semibold mb-6"
      >
        <span className="text-[#16205f]">Build seamless UIs and reliable</span>
        <span className="text-[#16205f]">
          backends with
          <span className="text-[#5900ff]"> Fullstack Engineering</span>
        </span>
      </div>

      <div
        id="ele-1 pt-2"
        className="flex justify-center items-center font-normal"
      >
        <p className="mb-8 mt-4 max-w-[500px] text-center md:mt-8 text-[#16205f]">
          Manage every aspect of your project with our full stack development
          expertise.
        </p>
      </div>

      <div id="ele-1 btn" className="flex justify-center items-center">
        <button className="bg-[#6919ff] px-4 py-2 rounded-md font-normal text-white hover:bg-[#864fea]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
