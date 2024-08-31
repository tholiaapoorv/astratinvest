"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { PrimaryLogo } from "@/components/ui/PrimaryLogo";

import SplitType from "split-type";
import OurWork from "@/components/OurWork";
import Tagline from "@/components/Tagline";
import HomePageStats from "@/components/HomePageStats";
import Spline from "@splinetool/react-spline";
import SplineScene from "@/components/SplineScene";
import JimSimons from "@/components/JimSimons";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import KnowAboutYourStocks from "@/components/KnowAboutYourStocks";
import { Testimonials } from "@/components/Testimonials";
import Blogs from "@/components/Blogs";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      //* Loader Start GSAP Timeline
      const loaderTimeline = gsap.timeline({
        onComplete: () => {
          // * INSTANCE FOR SMOOTH SCROLLING WITH LOCOMOTIVE SCROLL v5@beta
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
              .default;
            const locomotiveScroll = new LocomotiveScroll({
              smooth: true,
              smartphone: {
                smooth: true,
              },
            });
          })();
        },
      });

      loaderTimeline
        .fromTo(
          [".logo-loader", ".progress-bg", ".progress", ".logo-container"],
          {
            opacity: 0,
          },
          { opacity: 1, ease: "power2.in", duration: 1, display: "flex" },
        )
        .fromTo(".logo-word", { opacity: 0 }, { opacity: 1, stagger: 0.08 });

      //* Loader Progress Bar GSAP Timeline
      const loaderTimeline2 = gsap
        .timeline({
          delay: 1,
        })
        .fromTo(
          ".progress",
          {
            width: 0,
          },
          {
            width: "30%",
            ease: "none",
            duration: 1,
          },
        )
        .to(".progress", {
          width: "50%",
          ease: "none",
        })
        .to(".progress", {
          width: "70%",
          ease: "none",
        })
        .to(".progress", {
          width: "100%",
          ease: "power1",
        })
        .to([".logo-loader", ".logo-word", ".progress", ".progress-bg"], {
          opacity: 0,
        });

      //* Home Reveal GSAP Timeline
      const HomeRevealTimeline = gsap.timeline({
        delay: 4,
        onComplete: () => {
          // ! DO NOT REMOVE THE BELOW GSAP TWEEN LINES AS THEY ARE REQUIRED FOR INSERTING A PIN SPACER WHICH WILL IN-TURN HELP IN RENDERING OF OTHER GSAP ANIMATION TIMELINES ON THE PAGE
          // const horDiv = gsap.utils.toArray(".hor-div");
          ScrollTrigger.update();
          gsap.to(".spline-scene", {
            scrollTrigger: {
              start: "5% 20%",
              end: "bottom center",
              trigger: ".spline-scene",
              pin: true,
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        },
      });

      HomeRevealTimeline.fromTo(
        ".loader-div",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          display: "none",
        },
      ).fromTo(
        ".scroll-content",
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: 1,
          display: "flex",
        },
      );
    },
    { scope: mainContainer },
  );

  return (
    <div ref={mainContainer}>
      {/* Loader Container */}
      <div className="loader-div flex h-screen w-screen items-center justify-center">
        <div
          className="logo-container flex h-full w-full flex-col items-center justify-center gap-14"
          style={{ opacity: 0, display: "none" }}
        >
          <div>
            <PrimaryLogo />
          </div>
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute left-[50%] flex translate-x-[-50%] items-center justify-start phone:w-[50%] smTablet:w-[30%] smLaptop:w-[20%]">
              <div className="progress-bg relative h-2 w-full rounded-xl bg-white/10"></div>
              <div className="progress absolute h-2 w-full rounded-xl bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scrollable Container */}
      <div
        className="scroll-content relative flex h-fit flex-col items-center justify-center"
        style={{ display: "none" }}
      >
        <NavBar />
        <Hero />
        <Tagline />
        <HomePageStats />
        <SplineScene />
        <JimSimons />
        <Testimonials />
        {/* <OurWork /> */}
        {/* <PreFooter /> */}
        <Blogs />
        <KnowAboutYourStocks />
        <Footer />
      </div>
    </div>
  );
}
