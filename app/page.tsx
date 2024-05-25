"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import primaryLogo from "@/public/PrimaryLogo.svg";
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

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const loaderTimeline = gsap.timeline({
        onComplete: () => {
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

      //* Loader Start GSAP Timeline
      loaderTimeline
        .fromTo(
          [".logo-loader", ".progress-bg", ".progress", ".logo-container"],
          {
            opacity: 0,
          },
          { opacity: 1, ease: "power2.in", duration: 1, display: "flex" }
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
          }
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
          // * Horizontal Scroll Timeline
          ScrollTrigger.update();
          const horDiv = gsap.utils.toArray(".hor-div");
          const container = document.querySelector(".hor-container");
          const horDivContent = document.querySelector(".hor-div");
          console.log(container?.scrollWidth);
          const text = new SplitType(".anim-work");
          function getScroll() {
            console.log(window.innerWidth);
            if (window.innerWidth >= 1010) return -100 * (horDiv.length - 0.4);
            return -100 * (horDiv.length + 0.2);
          }
          const horScrollTween = gsap.to(horDiv, {
            xPercent: () => getScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: ".hor-container-wrap",
              start: "5% 20%",
              end: () => `+=${container?.scrollWidth!}`,
              pin: true,
              scrub: 1,
              // snap: 1 / horDiv.length,
              // markers: true,
              invalidateOnRefresh: true,
            },
            delay: 0.8,
          });
          const tl = gsap.timeline();
          tl.from(text.chars, {
            y: "100%",
            opacity: 0,
            kerning: 2,
            stagger: { each: 0.06 },
            duration: 0.5,
            transformOrigin: "left top",
            rotationZ: 8,
            scrollTrigger: {
              trigger: ".hor-div-work",
              start: "top 95%",
              end: "bottom center",
              scrub: 1,
              // markers: true,
              // snap: 1,
            },
          }).fromTo(
            ".anim-work",
            {
              fontSize: "min(17vh,17vw)",
            },
            {
              fontSize: "min(15vh,15vw)",
              ease: "power1.inOut",
              duration: 0.5,
              scrollTrigger: {
                trigger: ".hor-div-work",
                // start: "300% 20%",
                // end: "500% 20%",
                start: "center center",
                end: "200% center",
                // markers: true,
                scrub: 1,
                // snap: 1 / (horDiv.length - 1),
                // markers: true,
                invalidateOnRefresh: true,
              },
            }
          );
          horDiv.forEach((section: any) => {
            let text = section.querySelector(".anim");
            gsap.from(text, {
              y: -130,
              opacity: 0,
              duration: 3,
              ease: "elastic",
              scrollTrigger: {
                trigger: section,
                containerAnimation: horScrollTween,
                start: "left center",
                // end: "center center",
                // markers: true,
              },
            });
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
        }
      ).fromTo(
        ".scroll-content",
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: 1,
          display: "flex",
        }
      );
    },
    { scope: mainContainer }
  );

  return (
    <div ref={mainContainer}>
      {/* Loader Container */}
      <div className="loader-div h-screen w-screen flex justify-center items-center">
        <div
          className="h-full w-full flex flex-col justify-center items-center gap-14 logo-container"
          style={{ opacity: 0, display: "none" }}>
          <div>
            <PrimaryLogo />
          </div>
          <div className="w-full flex justify-center items-center relative">
            <div className="smLaptop:w-[20%] smTablet:w-[30%] phone:w-[50%] flex justify-start items-center absolute translate-x-[-50%] left-[50%]">
              <div className="w-full h-2 bg-white/10 rounded-xl relative progress-bg"></div>
              <div className="w-full h-2 bg-white rounded-xl absolute progress"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scrollable Container */}
      <div
        className="scroll-content h-fit relative flex flex-col justify-center items-center"
        style={{ display: "none" }}>
        <NavBar />
        <Hero />
        <Tagline />
        <HomePageStats />
        <SplineScene />
        <JimSimons />
        <OurWork />
        {/* <PreFooter /> */}
        <Footer />
      </div>
    </div>
  );
}
