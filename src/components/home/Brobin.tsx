import React from "react";
import Image from "next/image";
import weirdLogo from "../../../image/hire.svg";
import fiverrLogo from "../../../image/fiverr.svg";
import upworkLogo from "../../../image/upwork.svg";
import guruLogo from "../../../image/guru.svg";

const Brobin = () => {
  return (
    <div className="p-20">
      <div className="h-[430px] flex flex-col justify-center items-center w-[1400px] rounded-xl bg-gradient-to-br from-[#2f1169] via-[#2a1359] to-black ">
        <div className="text-5xl text-white font-semibold">
          Hire Us On Your Preferred Platform
        </div>

        <div id="ele-3-B" className="mt-8 grid  grid-cols-2 gap-8">
          <span
            id="ele-3-B-p1"
            className="border w-[570px] bg-white bg-opacity-15 border-white mt-5 rounded-lg p-5 flex items-center gap-5"
          >
            <Image
              src={weirdLogo}
              alt="Guru Logo"
              className="h-[40px] w-[40px]"
            />
            <div id="ele-3-B-p1-Text" className="flex flex-col gap-1">
              <p className="text-white text-xl font-semibold">
                Hire Us Directly
              </p>
              <p className="text-[#9087a3] font-semibold">
                Get custom solutions directly from our team.
              </p>
            </div>
            <button className="px-5 font-medium py-3 text-[#1b2235] bg-white rounded-lg hover:bg-slate-100 hover:scale-110 hover:transition-transform duration-150">
              Hire Us
            </button>
          </span>

          <span
            id="ele-3-B-p2"
            className="border w-[570px] bg-white bg-opacity-15 border-white mt-5 rounded-lg p-5 flex items-center gap-5"
          >
            <Image
              src={fiverrLogo}
              alt="Fiverr Logo"
              className="h-[40px] w-[40px]"
            />
            <div id="ele-3-B-p1-Text" className="flex flex-col gap-1">
              <p className="text-white text-xl font-semibold">
                Hire Us on Fiverr
              </p>
              <p className="text-[#9087a3] font-semibold">
                Exceptional services tailored to your needs.
              </p>
            </div>
            <button className="px-5 font-medium py-3 text-[#1b2235] bg-white rounded-lg hover:bg-slate-100 hover:scale-110 hover:transition-transform duration-150">
              Hire Us
            </button>
          </span>

          <span
            id="ele-3-B-p3"
            className="border w-[570px] bg-white bg-opacity-15 border-white mt-5 rounded-lg p-5 flex items-center gap-5"
          >
            <Image
              src={upworkLogo}
              alt="Upwork Logo"
              className="h-[40px] w-[40px] mr-3"
            />
            <div id="ele-3-B-p1-Text" className="flex flex-col gap-1">
              <p className="text-white text-xl font-semibold">
                Hire Us on Upwork
              </p>
              <p className="text-[#9087a3] font-semibold">
                Top-rated talent ready to deliver.
              </p>
            </div>
            <button className="px-5 font-medium py-3 ml-20 text-[#1b2235] bg-white rounded-lg hover:bg-slate-100 hover:scale-110 hover:transition-transform duration-150">
              Hire Us
            </button>
          </span>
          <span
            id="ele-3-B-p4"
            className="border w-[570px] bg-white bg-opacity-15 border-white mt-5 rounded-lg p-5 flex items-center gap-5"
          >
            <Image
              src={guruLogo}
              alt="Guru Logo"
              className="h-[40px] w-[40px]"
            />
            <div id="ele-3-B-p1-Text" className="flex flex-col gap-1">
              <p className="text-white text-xl font-semibold">
                Hire Us on GURU
              </p>
              <p className="text-[#9087a3] font-semibold">
                Professional expertise at your fingertips.
              </p>
            </div>
            <button className="px-5 font-medium py-3 text-[#1b2235] bg-white rounded-lg hover:bg-slate-100 hover:scale-110 hover:transition-transform duration-150">
              Hire Us
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Brobin;
