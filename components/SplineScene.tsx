"use client";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import { Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const SplineScene = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({});
      const splitType = new SplitType(".quant-model-text", {
        types: ["words", "lines"],
      });
      const splitTypeGhost = new SplitType(".quant-model-text-ghost", {
        types: ["words", "lines"],
      });

      console.log(splitType.lines);

      tl.fromTo(
        splitType.words,
        { opacity: 0 },
        {
          opacity: 1,

          ease: "none",
          duration: 50,
          stagger: { each: 5 },
          scrollTrigger: {
            trigger: ".spline-scene-container",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    },
    { scope: mainContainerRef }
  );
  return (
    <div
      ref={mainContainerRef}
      className={
        "smLaptop:h-[120vh] phone:h-[80vh] w-screen spline-scene-wrap flex flex-col justify-start items-center relative"
      }>
      <div
        className={
          "relative top-[5.5rem] spline-scene-container flex justify-center items-center"
        }>
        <div className="absolute spline-scene"></div>
        <div className="w-[80%] text-center  quant-model-text-wrapper relative">
          <p
            className={
              "quant-model-text text-white font-poppins phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(4vw,4vh)] tracking-wide leading-relaxed overflow-hidden"
            }>
            Our investment approach relies on a
            <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
              sophisticated quantitative system
            </span>
            that processes vast financial data to evaluate opportunities and
            risks. This powerhouse integrates advanced mathematical and
            financial engineering techniques to
            <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
              identify investments
            </span>
            and
            <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
              manage portfolio risks
            </span>
            in real-time.
          </p>
          <p
            className={
              "quant-model-text-ghost absolute z-[-1] top-0 text-white/10 font-poppins phone:text-[min(4vw,4vh)] smTablet:text-[min(2.5vw,2.5vh)] smLaptop:text-[min(4vw,4vh)] tracking-wide leading-relaxed overflow-hidden"
            }>
            Our investment approach relies on a
            <span className="text-[#e7aeff]/10 font-ivy_thin_italic mx-2">
              sophisticated quantitative system
            </span>
            that processes vast financial data to evaluate opportunities and
            risks. This powerhouse integrates advanced mathematical and
            financial engineering techniques to
            <span className="text-[#e7aeff]/10 font-ivy_thin_italic mx-2">
              identify investments
            </span>
            and
            <span className="text-[#e7aeff]/10 font-ivy_thin_italic mx-2">
              manage portfolio risks
            </span>
            in real-time.
          </p>
        </div>
      </div>

      <Spline
        className={"spline-main-scene z-[-2]"}
        scene="https://prod.spline.design/fgJ6cS4W1-Vnsk78/scene.splinecode"
      />
    </div>
  );
};

export default SplineScene;
