"use client";
import React, { useRef } from "react";
import logo from "@/public/PrimaryLogoTransparent.png";
import logo2 from "@/public/PrimaryLogo2.svg";
import logo3 from "@/public/PrimaryLogoFinal.svg";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MenuIcon } from "lucide-react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = () => {
  const containerMain = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      // tl.fromTo(
      //   ".navbar-container",
      //   {
      //     display: "none",
      //     visibility: "hidden",
      //     opacity: 0,
      //     duration: 0.2,
      //     ease: "circ",
      //   },
      //   {
      //     opacity: 1,
      //     display: "flex",
      //     visibility: "visible",
      //     ease: "power1",
      //     scrollTrigger: {
      //       trigger: "navbar-wrapper",
      //       start: "10% top",

      //       markers: true,
      //       scrub: 1,
      //     },
      //   }
      // );
    },
    { scope: containerMain }
  );

  return (
    <div ref={containerMain} className="fixed top-0 w-full z-[100]">
      <div className="navbar-wrapper border-b h-fit relative backdrop-blur-lg bg-[#000121] z-[10] border-white/10 flex justify-center items-center ">
        <div className="navbar-container flex justify-between items-center w-[80%] py-2 ">
          <div className="flex justify-center items-center gap-3">
            <Image src={logo3} alt={""} className="w-[3.5rem] h-auto" />
            {/* <Image src={logo} alt={""} className="w-[15rem] h-auto" /> */}
            <p className="text-white font-ivy tracking-widest text-[min(3vw,3vh)]">
              ASTRATINVEST
            </p>
          </div>
          <div className="h-full flex justify-center items-center gap-10 px-6 pr-0 group  transition-all cursor-pointer">
            <p className="text-white font-poppins tracking-wide flex justify-center items-center gap-2">
              Services <ChevronDown />
            </p>
            <p className="text-white font-poppins tracking-wide flex justify-center items-center gap-2">
              Why Us ?
            </p>
            <p className="text-white font-poppins tracking-wide flex justify-center items-center gap-2">
              Blogs
            </p>
            <MenuIcon className="text-white w-[2.5rem] h-auto hover:text-cyan-200 transition-all" />
          </div>
          {/* <div className="bg-cyan-200 h-full flex justify-center items-center right-0 px-6 font-poppins font-semibold tracking-wide gap-1">
            Request a Demo <ArrowUpRight className="w-7 h-auto" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
