import React from "react";
import JimSimonsImage from "@/public/JimSimons.jpeg";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { TbArrowUpRight } from "react-icons/tb";
const JimSimons = () => {
  return (
    <div className="h-fit py-20 w-screen bg-[#F3F4F6] flex justify-center items-center">
      <div className="smLaptop:w-[90%] phone:w-[95%] h-[100%] flex smLaptop:flex-row phone:flex-col  justify-center smLaptop:items-start phone:items-center gap-14">
        <div className="flex flex-col justify-center items-center smLaptop:w-[50%] phone:w-[70%] relative">
          <Image
            src={JimSimonsImage}
            alt={""}
            className="h-auto w-fit max-w-[90%] grayscale"
          />
          <p className="absolute smLaptop:bottom-[-5vh] smTablet:bottom-[-3.5vh] phone:bottom-[-2.3vh] text-[min(7vh,7vw)] text-transparent bg-white bg-clip-text mix-blend-exclusion font-ivy font-bold">
            Jim Simons
          </p>
        </div>
        <div className="smLaptop:w-[50%] phone:w-full h-full flex flex-col justify-between items-start gap-10 px-10">
          <div className="flex flex-col justify-center items-start gap-10">
            <p className="font-ivy phone:text-[min(10vw,10vh)] smTablet:text-[min(7vh,7vw)] w-full phone:text-center smLaptop:text-start smLaptop:text-[min(7vh,7vw)] text-[#000121]">
              The <span className="text-[#3959e6]">{`"Quant King"`}</span>
            </p>
            <div>
              <p className="font-poppins font-light italic phone:text-[min(4vh,4vw)] smTablet:text-[min(2.8vh,2.8vw)] smLaptop:text-[min(2.5vh,2.5vw)] text-[#000121]/80">
                {/* “Past performance is the best predictor of success.” */}
                {`"The advantage scientists bring into investing is that they have a certain rigor, a certain critical attitude, that can be very useful."`}
              </p>
            </div>
          </div>
          <div className="font-poppins text-[#000121]/80 leading-relaxed phone:text-justify smLaptop:text-start tracking-wide phone:text-[min(3vw,3vh)] smTablet:text-[min(2.5vh,2.5vw)] smLaptop:text-[min(2vh,2vw)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="">
            <button className="p-4 border font-ivy flex gap-1 justify-center items-center border-[#000121] text-[#000121] hover:bg-[#000121] hover:text-white transition cursor-pointer tracking-wide">
              Learn More About Quant <TbArrowUpRight className="w-6 h-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JimSimons;
