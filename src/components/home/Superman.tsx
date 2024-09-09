import React from "react";

const Superman = () => {
  return (
    <div className="bg-white p-20">
      <div
        id="ele-1"
        className="bg-gradient-to-br rounded-xl h-[380px] flex flex-col gap-5 items-center justify-center from-[#1b1a1d] via[#2a1455] to-[#2f1269]"
      >
        <div className="text-white flex flex-col gap-4 items-center justify-center">
          <span className="font-bold text-5xl">
            Get Your Project Cost Estimation
          </span>
          <span className="font-semibold text-xl">
            Avoid Financial Constraints from Limiting Your Potential
          </span>
          <button className="mt-3 bg-white text-[#4916af] rounded-full px-4 py-3">
            Assess Your Calculations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Superman;
