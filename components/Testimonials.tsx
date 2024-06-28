"use client";
import { testimonial } from "@/types";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaQuoteRight } from "react-icons/fa6";
import { Variants, motion } from "framer-motion";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<testimonial[]>();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`)
      .then((data) => {
        setTestimonials(data.data);
      })
      .catch((err) => {
        console.log("Error getting testimonials", err);
      });
  }, []);
  const items: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "circOut",
        duration: 0.55,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "circOut",
        duration: 0.55,
      },
    },
  };

  return (
    <div
      id={"testimonials"}
      className="h-full w-full py-[8rem] rounded-md flex flex-col antialiased bg-[#000121] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.p
        whileInView={"visible"}
        initial={"hidden"}
        variants={items}
        className="text-[#e7aeff] font-bold relative z-[10] font-poppins tracking-[0.18em] italics phone:text-[min(10vw,10vh)] smTablet:text-[min(2.5vh,2.5vw)] w-fit text-center mb-6">
        <FaQuoteRight className="absolute translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] w-[5rem] h-auto z-[-1] text-[#232d57]" />
        TESTIMONIALS
      </motion.p>
      <motion.p
        whileInView={"visible"}
        initial={"hidden"}
        variants={items}
        className="text-white relative overflow-hidden z-[10] font-ivy phone:text-[min(10vw,10vh)] smTablet:text-[min(7vh,7vw)] w-full text-center">
        Don&apos;t Just Take Our Word For It
      </motion.p>
      <motion.p
        whileInView={"visible"}
        initial={"hidden"}
        variants={items}
        className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 relative z-[10] font-poppins font-light phone:text-[min(4vw,4vh)] smTablet:text-[min(2.6vh,2.6vw)] tracking-wider w-full text-center mt-4">
        Read What Our Clients Have To Say About Us
      </motion.p>
      {testimonials && testimonials.length ? (
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="mt-[4.5rem] font-poppins b"
        />
      ) : (
        <div className="w-[80%] h-full smTablet:grid smTablet:grid-cols-2 smLaptop:grid-cols-3 phone:grid-cols-1 phone:space-y-10 smTablet:space-y-0 gap-10 mt-10">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"12rem"}
            sx={{ bgcolor: "white" }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"12rem"}
            sx={{ bgcolor: "white" }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"12rem"}
            sx={{ bgcolor: "white" }}
          />
        </div>
      )}
    </div>
  );
}

// const testimonials = [
//   {
//     quote:
//       "We're thrilled with the outstanding work done by Bitspectron on our ethnic wear ecommerce site. From the sleek design to seamless user experience, every detail reflects their expertise and understanding of our brand. Their proactive approach, timely communication, and innovative solutions made the process smooth and enjoyable. Highly recommend them for any business looking to enhance their online presence. Thanks for exceeding our expectations! ",
//     name: "Neelesh Chandani",
//     title: "Founder - kurtiveda.com",
//   },
//   {
//     quote:
//       "Impressed with the website developed by Bitspectron for our SaaS solution FlashAI. It's very sleek, user-friendly, and perfectly captures our brand essence. Highly recommend their services for top-notch website development. Thanks, Bitspectron!",
//     name: "Team at FlashAI",
//     title: "",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
