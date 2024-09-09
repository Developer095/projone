import React from "react";

const LoisLane = () => {
  return (
    <div className="px-56 py-20 flex flex-row relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3399.385750808407!2d74.323583!3d31.568468!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM0JzA2LjUiTiA3NMKwMTknMzQuMiJF!5e0!3m2!1sen!2sus!4v1725722385148!5m2!1sen!2sus"
        className="w-[700px] h-[720px] border-0 border-hidden border-opacity-0 rounded-bl-3xl"
        loading="lazy"
      ></iframe>

      <div
        id="Form"
        className="py-8 px-10 h-min bg-white w-max rounded-tl-3xl absolute top-52 right-32  z-10"
      >
        <div className=" flex flex-col items-left justify-left gap-10">
          <span className="text-4xl font-bold text-[#16205f]">
            Got any Questions?
          </span>
          <span className="flex flex-col gap-1 justify-center items-left">
            <div className="flex flex-row gap-5">
              <span className="flex flex-col">
                <label htmlFor="nameIn">Your Name</label>
                <input
                  className="border-2 rounded-md border-gray-400 mb-4 h-[42px] w-[240px]"
                  id="nameIn"
                  type="text"
                  name="Fname"
                  placeholder="   Name"
                  required
                ></input>
              </span>

              <span className="flex flex-col">
                <label htmlFor="emailIn">Email</label>
                <input
                  className="border-2 border-gray-400 h-[42px] mb-4 rounded-md w-[240px]"
                  id="emailIN"
                  type="email"
                  placeholder="   Enter Email"
                  name="Email"
                  required
                ></input>
              </span>
            </div>

            <div id="dropMenu" className="flex flex-col">
              <label>I'm interested in:</label>
            </div>

            <label htmlFor="detailsIn">Details</label>
            <input
              className="border-2 border-gray-400 rounded-md text-top mb-4 h-[120px] w-[300px]"
              id="detailsIN"
              type="text"
              placeholder="   Details"
              name="Details"
              required
            ></input>

            <button className="text-white rounded-md py-2 px-4 w-max inline bg-[#5900ff]">
              GET CONSULTATION →
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoisLane;
