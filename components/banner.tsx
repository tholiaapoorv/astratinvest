"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full bg-white text-center py-3 text-black font-poppins text-sm sm:text-base tracking-wide shadow">
      We&apos;ve just launched our Category III AIF!&nbsp;
      <Link
        href="/AIF"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Click here
      </Link>
      &nbsp;to know more.
    </div>
  );
};

export default Banner;
