"use client";
import React from "react";
import { BookOpen } from "lucide-react";

const BlogLayout = () => {
  return (
    <div className="bg-transparent h-full w-screen mt-[5rem] flex flex-col justify-center items-center">
      <div className="absolute z-[-1] rounded-full blur-[100px] right-0 top-0 bg-gradient-to-br from-pink-500 via-sky-700 to-[#257194] w-[min(30vw,30vh)] h-[min(40vw,40vh)] -rotate-45"></div>
      <div className="absolute z-[-1] rounded-full blur-[100px] left-[5rem] top-[10rem] bg-gradient-to-bl from-pink-100 to-pink-900 w-[min(30vw,30vh)] h-[min(30vw,30vh)]"></div>
      <div className="absolute z-[-1] rounded-full blur-[100px] left-[20rem] top-[10rem] bg-gradient-to-bl from-purple-200 to-purple-900 w-[min(20vw,20vh)] h-[min(20vw,20vh)]"></div>

      <div className="flex flex-col justify-center items-center gap-0">
        <BookOpen className="mt-[3rem] h-auto w-[4.2rem] text-[#3959e6]" />

        <div className="flex flex-col  justify-center items-center gap-2 ">
          <p className="text-[#FFFFFF] text-[min(11.5vh,11.5vw)] font-ivy ">
            Blogs
          </p>
          <p className="text-[#FFFFFF] w-[80%] text-center font-poppins font-extralight tracking-wider phone:text-[min(3vh,3vw)] smTablet:text-[min(2.3vh,2.3vw)] leading-relaxed">
            Let us be the compass that guides you towards effective portfolio
            management. Harness real-time data and cutting-edge analytics to
            uncover investment insights, evaluate market trends, and fine-tune
            your strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
