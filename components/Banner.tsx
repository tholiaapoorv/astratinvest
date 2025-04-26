"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-[5rem] bg-white text-center py-4 text-black font-ivy text-base sm:text-lg tracking-wide shadow"
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
