"use client";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const SplineScene = () => {
  return (
    <div
      className={
        "smLaptop:h-[120vh] phone:h-[80vh] w-screen spline-scene-wrap flex flex-col justify-start items-center relative"
      }>
      <div
        className={
          "relative top-[5.5rem] spline-scene-container flex justify-center items-center"
        }>
        <div className="w-[80%] text-center spline-scene quant-model-text-wrapper">
          <p
            className={
              "quant-model-text text-white font-poppins phone:text-[min(5vw,5vh)] smTablet:text-[min(3.5vw,3.5vh)] smLaptop:text-[min(4vw,4vh)] tracking-wide leading-relaxed"
            }>
            We have developed
            <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
              proprietary quantitative models
            </span>
            in-house over many years, enabling us to systematically identify
            attractive investment opportunities while proactively
            <span className="text-[#e7aeff] font-ivy_thin_italic mx-2">
              managing portfolio risks.
            </span>
          </p>
        </div>
      </div>
      <Spline
        className={""}
        scene="https://prod.spline.design/fgJ6cS4W1-Vnsk78/scene.splinecode"
      />
    </div>
  );
};

export default SplineScene;
