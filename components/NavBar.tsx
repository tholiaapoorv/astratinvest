"use client";
import React, { useRef } from "react";
import logo from "@/public/PrimaryLogoTransparent.png";
import logo3 from "@/public/PrimaryLogoFinal.svg";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";

const NavBar = () => {
  const containerMain = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerMain} className="fixed top-0 z-[50] w-full">
      <div className="navbar-wrapper flex h-fit items-center justify-center border-b border-white/10 bg-[#000121] backdrop-blur-lg">
        <div className="navbar-container flex w-[80%] items-center justify-between py-2">
          
          {/* Logo */}
          <Link href={`https://www.astratinvest.com/`} className="flex items-center justify-center gap-3">
            <Image src={logo3} alt={""} className="h-auto w-[3.5rem]" />
            <p className="font-ivy text-[min(3vw,3vh)] tracking-widest text-white">
              ASTRATINVEST
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="group flex h-full cursor-pointer items-center justify-center gap-10 px-6 pr-0 transition-all">
            <Link
              href={`https://www.astratinvest.com/AIF`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              AIF
            </Link>

            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/research/quantitative-model`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              Research
            </Link>

            <Link
              href={`https://www.astratinvest.com/blog`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              Blogs
            </Link>

            <Link
              href={`https://www.astratinvest.com/about-us`}
              className="flex items-center justify-center gap-2 font-poppins tracking-wide text-white transition hover:text-[#3959E5] xsPhone:hidden smLaptop:flex"
            >
              About Us
            </Link>

            {/* Mobile Hamburger Menu */}
            <Sheet>
              <SheetTrigger className="smLaptop:hidden">
                <MenuIcon className="h-auto w-[2.5rem] text-white transition-all hover:text-[#3959E5]" />
              </SheetTrigger>

              <SheetContent className="relative z-[200] border-0 bg-[#000121]/70 text-white">
                <SheetHeader className="font-ivy">
                  <SheetTitle className="text-start text-white xsPhone:mt-5 xsPhone:text-[min(7vh,7vw)] tablet:mt-10 tablet:text-[min(4vh,4vw)]">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <Separator className="xsPhone:mt-10 tablet:mt-10" />

                {/* Hamburger Menu Links */}
                <div className="mt-[2rem] flex flex-col gap-6">
                  <Link
                    href={`https://www.astratinvest.com/AIF`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    AIF
                  </Link>

                  <Link
                    href={`https://www.astratinvest.com/research/quantitative-model`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    Research
                  </Link>

                  <Link
                    href={`https://www.astratinvest.com/blog`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    Blogs
                  </Link>

                  <Link
                    href={`https://www.astratinvest.com/about-us`}
                    className="font-poppins tracking-wider transition hover:text-[#3959E5] xsPhone:text-[min(6vw,6vh)] tablet:text-[min(3vw,3vh)]"
                  >
                    About Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
