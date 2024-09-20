"use client";
import * as React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center  justify-center">
      <h3 className="text-xl md:text-2xl my-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-100 font-bold">
        Contact Me
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col"
      >
        <input
          type="text"
          className="bg-black border-[0.5px] text-white text-sm p-3 border-[#222222]"
          placeholder="Message "
          required
        />
        <input
          type="email"
          className="bg-black border-[0.5px] text-white text-sm p-3 my-3
          border-[#222222]
          "
          placeholder="Email"
          required
        />
        <button
          className="border my-3 hover:bg-white hover:text-[black] transition ease-in-out duration-100 border-[#22222]
          py-1
          "
        >
          Send now
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;
