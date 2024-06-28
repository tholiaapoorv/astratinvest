"use client";
import React from "react";
import Image from "next/image";
import blog1 from "@/public/1.jpeg";
import { TbArrowUpRight } from "react-icons/tb";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import SanityImage from "./SanityImage";
const BlogCard = ({
  imageSrc,
  title,
  description,
  date,
}: {
  imageSrc: SanityImageSource;
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-12  mx-auto my-auto">
      <div className="flex flex-col justify-center items-start gap-5">
        <SanityImage src={imageSrc} className="h-auto w-fit rounded-3xl" />
        <div className="flex justify-between w-full font-poppins font-extralight phone:text-[min(3vh,3vw)] smTablet:text-[min(1.6vh,1.6vw)]">
          <p className=" ">Author: AstratInvest </p> &nbsp; &nbsp; &nbsp;
          <p className=" ">{new Date(date).toUTCString()}</p>
        </div>
        <p className="font-semibold phone:text-[min(4.5vh,4.5vw)] smTablet:text-[min(2.8vw,2.8vh)] tracking-wide font-poppins  ">
          {title}
        </p>
        <p className="font-extralight phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vw,1.8vh)] font-poppins line-clamp-2">
          {description}
        </p>
        <div className="w-full">
          <button className="p-3 phone:text-[min(3.5vw,3.5vh)] smTablet:text-[min(1.8vw,1.8vh)] w-full border font-ivy flex gap-1 justify-center items-center border-[#000121] text-[#000121] hover:bg-[#000121] hover:text-white transition cursor-pointer tracking-wide">
            Learn More <TbArrowUpRight className="phone:w-5 h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
