"use client";
import React, { useRef } from "react";
import logo from "@/public/PrimaryLogoTransparent.png";
import logo2 from "@/public/PrimaryLogo2.svg";
import logo3 from "@/public/PrimaryLogoFinal.svg";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

import { Separator } from "./ui/separator";
const NavBar = () => {
  const containerMain = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerMain} className="fixed top-0 z-[50] w-full">
      <div className="navbar-wrapper flex h-fit items-center justify-center border-b border-white/10 bg-[#000121] backdrop-blur-lg">
        <div className="navbar-container flex w-[80%] items-center justify-between py-2">
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL}`}
            className="flex items-center justify-center gap-3"
          >
            <Image src={logo3} alt={""} className="h-auto w-[3.5rem]" />
            {/* <Image src={logo} alt={""} className="w-[15rem] h-auto" /> */}
            <p className="font-ivy text-[min(3vw,3vh)] tracking-widest text-white">
              ASTRATINVEST
            </p>
          </Link>
          <div className="group flex h-full cursor-pointer items-center justify-center gap-10 px-6 pr-0 transition-all">
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/research/quantitative-model`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              Research
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/blog`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              Blogs
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/about-us`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              About Us
            </Link>
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="h-auto w-[2.5rem] text-white transition-all hover:text-[#3959E5]" />
              </SheetTrigger>
              <SheetContent className="realtive z-[200] border-0 bg-[#000121]/70 text-white">
                <SheetHeader className="font-ivy">
                  <SheetTitle className="text-start text-white xsPhone:mt-5 xsPhone:text-[min(7vh,7vw)] tablet:mt-0 tablet:text-[min(4vh,4vw)]">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <Separator className="xsPhone:mt-10 tablet:mt-0" />
                <div className="mt-[2rem] flex flex-col gap-4">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP_URL}/research/quantitative-model`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    Research
                  </Link>

                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP_URL}/blog`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    Blogs
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_APP_URL}/about-us`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    About Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            {/* <div
              className="menu-btn z-[5] cursor-pointer space-y-2 rounded-full bg-black/30 px-3 py-6 phone:right-6 smTablet:right-20"
              onClick={() => {
                onMenuClick();
              }}
            >
              <div className="menu-icon-1 h-1 w-[2.5rem] rounded-xl bg-white"></div>
              <div className="menu-icon-2 h-1 w-[2.5rem] rounded-xl bg-white"></div>
            </div> */}
            {/* Menu Container */}
            {/* <div
              id={"menu-container"}
              className="menu-container absolute left-[50%] top-[0%] z-[200] h-screen w-screen translate-x-[-50%] translate-y-[0%] bg-transparent text-white backdrop-blur-xl"
              style={{ opacity: 0, display: "none" }}
            >
              <div className="menu-wrapper flex h-full w-full items-center justify-center">
                <div className="menu-content font-warsaw flex flex-col justify-items-center text-center text-[min(10vh,10vw)]">
                  <Link
                    href={"#home"}
                    onClick={() => {
                      onMenuClose();
                    }}
                    className="menu-item relative overflow-hidden"
                    style={{
                      opacity: 0,
                    }}
                  >
                    <span className="menu-text">Home</span>
                  </Link>
                  <Link
                    href={"#pricing"}
                    onClick={() => {
                      onMenuClose();
                    }}
                    className="menu-item relative overflow-hidden"
                    style={{
                      opacity: 0,
                    }}
                  >
                    <span className="menu-text">Pricing</span>
                  </Link>
                  <Link
                    href={"#contact-form-div"}
                    onClick={() => {
                      onMenuClose();
                    }}
                    className="menu-item relative overflow-hidden"
                    style={{
                      opacity: 0,
                    }}
                  >
                    <span className="menu-text">Contact</span>
                  </Link>
                  <Link
                    href={"#our-work"}
                    onClick={() => {
                      onMenuClose();
                    }}
                    className="menu-item relative overflow-hidden"
                    style={{
                      opacity: 0,
                    }}
                  >
                    <span className="menu-text">Work</span>
                  </Link>
                </div>
              </div> */}
            {/* Menu Close Button */}
            {/* <div
                className="fixed z-[5] cursor-pointer space-y-2 rounded-full bg-black/30 px-3 py-6 phone:right-6 smTablet:right-20"
                onClick={() => {
                  onMenuClose();
                }}
              >
                <div className="menu-close-1 h-1 w-[2.5rem] rounded-xl bg-white"></div>
                <div className="menu-close-2 h-1 w-[2.5rem] rounded-xl bg-white"></div>
              </div>
            </div> */}
            {/* <div className="bg-cyan-200 h-full flex justify-center items-center right-0 px-6 font-poppins font-semibold tracking-wide gap-1">
            Request a Demo <ArrowUpRight className="w-7 h-auto" />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
