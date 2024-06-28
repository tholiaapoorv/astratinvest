"use client";
import React from "react";
import { TbArrowLeft, TbArrowRight, TbArrowUpRight } from "react-icons/tb";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        {/* top */}
        <div className="flex items-center justify-center gap-4">
          {/* left */}
          <div className="flex w-[50%] flex-col gap-3 p-[6rem]">
            <h1 className="font-ivy text-[min(8vh,8vw)] font-bold tracking-wide">
              Case Studies
            </h1>
            <p className="w-[95%] font-poppins text-[min(2.2vh,2.2vw)] font-light tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aperiam qui commodi, inventore earum voluptates error reiciendis
              optio fugit, fugiat ullam debitis id. Libero saepe velit cum
              aspernatur porro{" "}
            </p>
          </div>
          {/* right */}
          <div className="flex w-[50%] flex-col items-end justify-center p-[6rem] text-start">
            <p className="font-poppins">UI/UX</p>
            <hr className="h-[0.15rem] w-[15rem] bg-gray-300" />
            <p className="font-poppins">UI/UX</p>
            <hr className="h-[0.15rem] w-[15rem] bg-gray-300" />
            <p className="font-poppins">UI/UX</p>
            <hr className="h-[0.15rem] w-[15rem] bg-gray-300" />
            <p className="font-poppins">UI/UX</p>
            <hr className="h-[0.15rem] w-[15rem] bg-gray-300" />
          </div>
        </div>

        {/* bottom */}

        <div>
          <div className="grid h-[70ch] w-full grid-cols-2 grid-rows-2 gap-10 px-[5rem] pb-8">
            <div className="h-auto w-auto bg-white"></div>
            <div className="h-auto w-auto bg-white"></div>
            <div className="h-auto w-auto bg-white"></div>
            <div className="h-auto w-auto bg-white"></div>
          </div>

          <div className="flex items-center justify-center px-[6rem] pb-5">
            <button className="flex w-full cursor-pointer items-center justify-center gap-1 border-2 border-[#000121] bg-white p-3 font-ivy tracking-wide text-[#000121] transition hover:bg-[#000121] hover:text-white">
              All Case Studies
              <TbArrowRight className="h-auto w-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
