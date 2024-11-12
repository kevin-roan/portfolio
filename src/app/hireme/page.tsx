"use client";
import * as React from "react";

const Hireme = () => {
  return (
    <div className="flex items-center flex-col justify-center p-4 gap-4 ">
      <input
        type="text"
        className="bg-black border-[0.5px] text-white text-sm p-3 border-[#222222] w-full"
        placeholder="Your Requirement"
        required
      />
      <input
        type="number"
        className="bg-black border-[0.5px] text-white text-sm p-3 border-[#222222] w-full"
        placeholder="Maximum Budget in INR"
        required
      />
      <input
        type="text"
        className="bg-black border-[0.5px] text-white text-sm p-3 border-[#222222] w-full"
        placeholder="Contact Number"
        required
      />
      <input
        type="text"
        className="bg-black border-[0.5px] text-white text-sm p-3 border-[#222222] w-full"
        placeholder="Prefered time for a call"
        required
      />
      <button
        className="border my-3 hover:bg-white hover:text-[black] transition ease-in-out duration-100 border-[#22222]
          py-1
          w-40
          self-end
          "
      >
        Book a call
      </button>
    </div>
  );
};

export default Hireme;
