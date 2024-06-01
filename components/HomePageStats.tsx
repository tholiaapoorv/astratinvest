import React, { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaIndianRupeeSign } from "react-icons/fa6";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const HomePageStats = () => {
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl2 = gsap.timeline({});

      tl2
        .fromTo(
          ".left-word",
          {
            xPercent: 0,
          },
          {
            xPercent: -100,
            ease: "ease",
            scrollTrigger: {
              trigger: ".word-wrapper",

              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          }
        )
        .fromTo(
          ".right-word",
          {
            xPercent: 0,
          },
          {
            xPercent: 80,
            ease: "ease",
            scrollTrigger: {
              trigger: ".word-wrapper",

              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          },
          "-=1"
        )
        .fromTo(
          ".hr",
          {
            width: 0,
          },
          {
            width: "25%",
            ease: "ease",
            scrollTrigger: {
              trigger: ".word-wrapper",

              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          },
          "-=2"
        );
    },
    { scope: mainContainer }
  );
  return (
    <div
      ref={mainContainer}
      className="bg-[#F3F4F6] w-full  h-fit phone:pb-[4rem] smTablet:pb-[6rem] pt-[3rem]  flex flex-col justify-center items-center gap-14">
      {/* Laptop and Tablet section */}
      <div className="smTablet:flex phone:hidden flex w-[80%]  justify-center items-center word-wrapper">
        <div className="left-word bg-[#F3F4F6] font-ivy smTablet:text-[min(12vw,12vh)] smLaptop:text-[min(20vw,20vh)] relative z-[2] ">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            56%
          </p>
        </div>

        <div className="absolute z-[1] flex justify-center items-center w-2/3 gap-6 font-poppins text-[min(3vw,3vh)]">
          <hr
            className="h-[0.12rem] bg-yellow-500 w-[10%] hr"
            style={{ width: 0 }}
          />
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            Assets Under Recommendation
          </p>
          <hr
            className="h-[0.12rem] bg-yellow-500  w-[10%] hr"
            style={{ width: 0 }}
          />
        </div>

        <div className="text-[#081B74] bg-[#F3F4F6] right-word font-ivy smTablet:text-[min(12vw,12vh)] smLaptop:text-[min(20vw,20vh)] relative z-[2]">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            CAGR
          </p>
        </div>
      </div>

      {/* Phone section */}
      <div className="phone:flex smTablet:hidden flex flex-col w-[95%] justify-center items-center word-wrapper">
        <div className=" bg-[#F3F4F6] flex font-ivy text-[min(15vw,15vh)] relative z-[2] ">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            56% CAGR
          </p>
        </div>

        <div className="flex justify-center items-center w-2/3 gap-2 font-poppins text-[min(3vw,3vh)]">
          <hr className="h-[0.12rem] bg-yellow-500 w-[20%] " />
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            Assets Under Recommendation
          </p>
          <hr className="h-[0.12rem] bg-yellow-500  w-[20%]" />
        </div>
      </div>

      {/* Text section */}
      <div className="w-[80%] flex flex-col justify-center items-start phone:gap-10 smTablet:gap-14">
        <div className="">
          <p className="font-ivy tracking-wide phone:text-[min(4.2vh,4.2vw)] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(5vw,5vh)] bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            Our bespoke quant models navigate India &apos;s market intricacies
            adeptly
          </p>
        </div>
        <div>
          <div className="border-l-2 smTablet:pl-10 phone:pl-4 smTablet:w-[65%] phone:w-[90%] border-yellow-500">
            <p className="font-poppins text text-neutral-700 phone:text-[min(3vw,3vh)] smTablet:text-[min(2vw,2vh)] smLaptop:text-[min(2.2vw,2.2vh)]">
              Unlike generic quantitative strategies imported from Western
              markets, our models are purposefully designed to capture the
              nuances and complexities inherent to Indian stocks and market
              microstructure.
            </p>
          </div>
        </div>

        <div className="phone:grid-cols-1 phone:grid-rows-3 smTablet:grid smTablet:grid-cols-3 smTablet:grid-rows-1 justify-center items-center w-full gap-6 phone:space-y-6 smTablet:space-y-0 ">
          <div className="bg-gradient-to-b min-h-full to-[#000121] from-[#081B74] text-white phone:p-6 smLaptop:p-10 smTablet:w-full phone:w-full flex flex-col gap-6">
            <div>
              <p className="font-semibold text-[#F3F4F6] font-poppins phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(3vw,3vh)] tracking-wide">
                Trade Execution & Risk Management
              </p>
            </div>
            <div className="phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)] text-[#F3F4F6]/90 font-poppins">
              Real-time risk monitoring and dynamic position-sizing/rebalancing
              based on forecasted risk/return profiles.
            </div>
          </div>
          <div className="bg-gradient-to-b min-h-full to-[#000121] from-[#081B74] text-white phone:p-6 smLaptop:p-10 smTablet:w-full phone:w-full flex flex-col gap-6">
            <div>
              <p className="font-semibold text-[#F3F4F6] font-poppins phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(3vw,3vh)] tracking-wide">
                Quantitative Research & Strategy Development
              </p>
            </div>
            <div className="phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)] text-[#F3F4F6]/90 font-poppins">
              Our team leverages deep quantitative expertise and cutting-edge
              techniques to develop proprietary alpha models.
            </div>
          </div>
          <div className="bg-gradient-to-b min-h-full to-[#000121] from-[#081B74] text-white phone:p-6 smLaptop:p-10 smTablet:w-full phone:w-full flex flex-col gap-6">
            <div>
              <p className="font-semibold text-[#F3F4F6] font-poppins phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(3vw,3vh)] tracking-wide">
                Compounded Annual Growth Rate (CAGR)
              </p>
            </div>
            <div className="phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)] text-[#F3F4F6]/90 font-poppins">
              56% CAGR over last 7 years vs. 14% Nifty returns , 71% CAGR over
              last 3 years , 108% returns in live market last year.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageStats;
