"use client";
//@ts-ignore
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Info = () => {
  const handleDownloadCv = () => {
    const fileUrl = "/kevinroanFebResume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "kevinroanCv.pdf";
    link.click();
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 md:py-0 lg:pl-14">
      <motion.div
        className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 "
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1 className="text-4xl md:text-6xl my-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-100 font-bold">
          Kevin Roan
        </motion.h1>
        <motion.h3
          className="text-xl md:text-2xl my-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h3>
        <motion.h3
          className="text-xl md:text-2xl my-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          UI/UX Designer
        </motion.h3>
        <motion.p
          className="text-[#505050] leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I am a 22-year-old professional Web Developer with a Bachelor's degree
          in Computer Application. Since graduating, I've been working as a
          Freelance Web Developer. Most of my projects involve developing
          frontend applications using React and TypeScript.
        </motion.p>
        <motion.button
          onClick={handleDownloadCv}
          className="bg-white text-black font-semibold px-6 py-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Download CV
        </motion.button>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 lg:w-3/5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/threejscard.png"
            alt="Card Image"
            width={300}
            height={200}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
