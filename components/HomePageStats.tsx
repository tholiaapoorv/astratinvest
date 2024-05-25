import React, { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            xPercent: -120,
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
            xPercent: 130,
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
      {/* Laptop and Tablet 825ME section */}
      <div className="smTablet:flex phone:hidden flex w-[95%]  justify-center items-center word-wrapper">
        <div className="left-word bg-[#F3F4F6] font-ivy smTablet:text-[min(12vw,12vh)] smLaptop:text-[min(20vw,20vh)] relative z-[2] ">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            825
          </p>
        </div>

        <div className="absolute z-[1] flex justify-center items-center w-2/3 gap-6 font-poppins text-[min(3vw,3vh)]">
          <hr
            className="h-[0.12rem] bg-yellow-500 w-[10%] hr"
            style={{ width: 0 }}
          />
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            Last Year
          </p>
          <hr
            className="h-[0.12rem] bg-yellow-500  w-[10%] hr"
            style={{ width: 0 }}
          />
        </div>

        <div className="text-[#081B74] bg-[#F3F4F6] right-word font-ivy smTablet:text-[min(12vw,12vh)] smLaptop:text-[min(20vw,20vh)] relative z-[2]">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            M€
          </p>
        </div>
      </div>

      {/* Phone 825ME section */}
      <div className="phone:flex smTablet:hidden flex flex-col w-[95%] justify-center items-center word-wrapper">
        <div className=" bg-[#F3F4F6] flex font-ivy text-[min(15vw,15vh)] relative z-[2] ">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            825M€
          </p>
        </div>

        <div className="flex justify-center items-center w-2/3 gap-2 font-poppins text-[min(3vw,3vh)]">
          <hr className="h-[0.12rem] bg-yellow-500 w-[20%] " />
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            Last Year
          </p>
          <hr className="h-[0.12rem] bg-yellow-500  w-[20%]" />
        </div>
      </div>

      {/* Text section */}
      <div className="w-[85%] flex flex-col justify-center items-start phone:gap-10 smTablet:gap-14">
        <div className="">
          <p className="font-ivy tracking-wide phone:text-[min(4.2vh,4.2vw)] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(5vw,5vh)] bg-clip-text text-transparent bg-gradient-to-b from-[#081B74] via-[#081B74] to-[#000121]">
            A recognized tailor-made approach
          </p>
        </div>
        <div>
          <div className="border-l-2 smTablet:pl-10 phone:pl-4 smTablet:w-[65%] phone:w-[90%] border-yellow-500">
            <p className="font-poppins text text-neutral-700 phone:text-[min(3vw,3vh)] smTablet:text-[min(2vw,2vh)] smLaptop:text-[min(2.2vw,2.2vh)]">
              Like the bee, with fidelity and perseverance, we love a job well
              done. Organized, collective and agile, we guide you to make the
              right choices and increase your assets.
            </p>
          </div>
        </div>

        <div className="flex phone:flex-col smTablet:flex-row justify-center items-center w-full gap-6">
          <div className="bg-gradient-to-b to-[#000121] from-[#081B74] text-white phone:p-6 smLaptop:p-10 smTablet:w-1/3 phone:w-full flex flex-col gap-6">
            <div>
              <p className="font-light phone:text-[min(3.2vw,3.2vh)] smTablet:text-[min(2vw,2vh)] smLaptop:text-[min(2.2vw,2.2vh)]">
                Ranking
              </p>
              <p className="font-semibold phone:text-[min(4.5vw,4.5vh)] smTablet:text-[min(3vw,3vh)] smLaptop:text-[min(3.5vw,3.5vh)] tracking-wide">
                Unavoidable
              </p>
            </div>
            <div className="phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)] text-white/90">
              Best Quant Firm
            </div>
          </div>
          <div className="bg-white text-[#000121] phone:p-6 smLaptop:p-10 smTablet:w-1/3 phone:w-full flex flex-col gap-6">
            <div>
              <p className="font-light phone:text-[min(3.2vw,3.2vh)] smTablet:text-[min(2vw,2vh)] smLaptop:text-[min(2.2vw,2.2vh)]">
                Ranking
              </p>
              <p className="font-semibold phone:text-[min(4.5vw,4.5vh)] smTablet:text-[min(3vw,3vh)] smLaptop:text-[min(3.5vw,3.5vh)] tracking-wide">
                Unavoidable
              </p>
            </div>
            <div className="phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)] text-[#000121]/90">
              Best Quant Firm
            </div>
          </div>
          <div className="bg-white text-[#000121] phone:p-6 smLaptop:p-10 smTablet:w-1/3 phone:w-full flex flex-col gap-6">
            <div>
              <p className="font-light phone:text-[min(3.2vw,3.2vh)] smTablet:text-[min(2vw,2vh)] smLaptop:text-[min(2.2vw,2.2vh)]">
                Ranking
              </p>
              <p className="font-semibold phone:text-[min(4.5vw,4.5vh)] smTablet:text-[min(3vw,3vh)] smLaptop:text-[min(3.5vw,3.5vh)] tracking-wide">
                Unavoidable
              </p>
            </div>
            <div className="phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] smLaptop:text-[min(2vw,2vh)] text-[#000121]/90">
              Best Quant Firm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageStats;
