// "use client";
// import { HoverEffect } from "@/components/ui/card-hover-effect";
// import { testimonial } from "@/types";
// import { Skeleton, Stack } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Testimonials() {
//   const [testimonials, setTestimonials] = useState<testimonial[]>();

//   useEffect(() => {
//     axios
//       .get(`${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`)
//       .then((data) => {
//         setTestimonials(data.data);
//       })
//       .catch((err) => {
//         console.log("Error getting testimonials", err);
//       });
//   }, []);
//   return (
//     <div className=" py-20 relative w-screen flex flex-col justify-center items-center">
//       <div className="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff25_1px,#000121_1px)] bg-[size:20px_20px]"></div>
//       <p className="text-white font-ivy phone:text-[min(10vw,10vh)] smTablet:text-[min(7vh,7vw)] w-full text-center">
//         Hear What Our Clients Have to Say
//       </p>
//       <div className="w-[80%]">
//         {testimonials && testimonials.length !== 0 ? (
//           <HoverEffect items={testimonials} />
//         ) : (
//           <div className="w-full h-full smTablet:grid smTablet:grid-cols-2 smLaptop:grid-cols-3 phone:grid-cols-1 phone:space-y-10 smTablet:space-y-0 gap-10 mt-10">
//             <Skeleton
//               variant="rectangular"
//               width={"100%"}
//               height={"12rem"}
//               sx={{ bgcolor: "white" }}
//             />
//             <Skeleton
//               variant="rectangular"
//               width={"100%"}
//               height={"12rem"}
//               sx={{ bgcolor: "white" }}
//             />
//             <Skeleton
//               variant="rectangular"
//               width={"100%"}
//               height={"12rem"}
//               sx={{ bgcolor: "white" }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div
      id={"testimonials"}
      className="h-full w-full py-[5rem] rounded-md flex flex-col antialiased bg-[#000121] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className="text-white font-ivy phone:text-[min(10vw,10vh)] smTablet:text-[min(7vh,7vw)] w-full text-center">
        Hear What Our Clients Have to Say
      </p>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className="mt-[4.5rem] font-poppins b"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We're thrilled with the outstanding work done by Bitspectron on our ethnic wear ecommerce site. From the sleek design to seamless user experience, every detail reflects their expertise and understanding of our brand. Their proactive approach, timely communication, and innovative solutions made the process smooth and enjoyable. Highly recommend them for any business looking to enhance their online presence. Thanks for exceeding our expectations! ",
    name: "Neelesh Chandani",
    title: "Founder - kurtiveda.com",
  },
  {
    quote:
      "Impressed with the website developed by Bitspectron for our SaaS solution FlashAI. It's very sleek, user-friendly, and perfectly captures our brand essence. Highly recommend their services for top-notch website development. Thanks, Bitspectron!",
    name: "Team at FlashAI",
    title: "",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
