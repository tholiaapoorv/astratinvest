"use client";
import React, { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Tagline = () => {
  const containerMain = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let typeSplit = new SplitType(".tagline-word", {
        types: ["words", "lines", "chars"],
        tagName: "span",
      });
      gsap
        .timeline({
          onUpdate: () => ScrollTrigger.update(),
        })
        .from(typeSplit.lines, {
          yPercent: 100,
          stagger: 0.3,
          duration: 0.9,
          ease: "power1",
          opacity: 0,
          scrollTrigger: {
            trigger: ".tagline-wrapper",
            start: "top 80%",
            end: "60% center",
            scrub: true,
            // snap: 1,
            //   pin: true,
            // markers: true,
          },
        })
        .from(typeSplit.words, {
          opacity: 0.3,
          duration: 1.1,
          ease: "power1",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".tagline-wrapper",
            start: "top 80%",
            end: "60% center",
            scrub: true,
            // snap: 1,
            //   pin: true,
            // markers: true,
          },
        });
    },
    { scope: containerMain, dependencies: [] }
  );

  return (
    <div
      ref={containerMain}
      className=" smTablet:h-fit smLaptop:h-[100vh] tagline-container phone:h-fit phone:pt-[5vh] phone:py-[12vh] smTablet:pb-[12vh] smLaptop:pt-[5vh] smLaptop:pb-[7vh] w-full flex justify-center items-center bg-gradient-to-b from-[#000121] via-[#000121] to-black/50 relative">
      <div className="tagline-wrapper h-full w-[80%] flex flex-col phone:gap-6 smLaptop:gap-2  smTablet:gap-10 justify-center smTablet:items-center  phone:items-center text-start">
        <p className="tagline-word overflow-hidden text-white/90 smLaptop:text-[min(6vh,6vw)] laptop:text-[min(5vh,5vw)] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vw,3.5vh)] font-poppins">
          Objectivity and risk management are etched into
          <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
            AStratinvest&apos;s
          </span>
          DNA.
        </p>
        <p className="tagline-word overflow-hidden text-white/90 smLaptop:text-[min(6vh,6vw)] laptop:text-[min(5vh,5vw)] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vw,3.5vh)]  font-poppins">
          Our goal is to provide our clients with sustainable
          <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
            alpha generation
          </span>
          and benchmark outperformance.
        </p>
        <p className="tagline-word overflow-hidden text-white/90 smLaptop:text-[min(6vh,6vw)] laptop:text-[min(5vh,5vw)] phone:text-[min(5vh,5vw)] smTablet:text-[min(3.5vw,3.5vh)] font-poppins">
          Our models are purposefully designed to capture the nuances and
          complexities inherent to Indian stocks and market microstructure
        </p>
      </div>
    </div>
  );
};

export default Tagline;
