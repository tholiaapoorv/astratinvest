"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // starts 50px above and invisible
      animate={{ opacity: 1, y: 0 }} // animates to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // smooth timing
      className="w-full mt-[4rem] bg-white text-center py-3 text-black font-poppins text-sm sm:text-base tracking-wide shadow"
    >
      We&apos;ve just launched our Category III AIF!&nbsp;
      <Link
        href="/AIF"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Click here
      </Link>
      &nbsp;to know more.
    </motion.div>
  );
};

export default Banner;
