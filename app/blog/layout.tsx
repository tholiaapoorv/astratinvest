import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogLayout from "@/components/layouts/BlogLayout";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative mb-12 overflow-x-clip">
        <NavBar />
        <BlogLayout />
        <div className="mt-12 flex w-full items-center justify-center">
          <div className="flex h-full w-[95%] flex-col items-center justify-center rounded-[2rem] bg-[#ECF0FB] phone:gap-[2rem] phone:py-[2.5rem] smLaptop:gap-[4.5rem] smLaptop:py-[5rem]">
            <div className="flex flex-col items-center justify-center gap-7">
              <p className="text-center font-poppins font-extralight phone:text-[min(6vh,6vw)] smTablet:text-[min(4.5vh,4.5vw)]">
                Dive Deep Into{" "}
                <span className="font-ivy_thin_italic italic text-[#3959E5]">
                  Quant.
                </span>
              </p>
              <p className="text-pretty text-center font-poppins font-light leading-relaxed tracking-wider text-[#000000] phone:w-[80%] phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] laptop:w-[65%]">
                Designed to equip financial advisors with the precision and
                agility essential in an ever-evolving financial landscape, the
                Comparator empowers you with the insights to thrive.
              </p>
            </div>
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <Loader2 className="h-auto w-10 animate-spin text-[#000121]" />
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
