import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogLayout from "@/components/layouts/BlogLayout";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative overflow-x-clip mb-12">
        <NavBar />
        <BlogLayout />
        <div className=" w-full flex justify-center items-center mt-12">
          <div className="bg-[#ECF0FB] w-[95%] rounded-[2rem] h-full phone:py-[2.5rem] smLaptop:py-[5rem] flex flex-col justify-center items-center phone:gap-[2rem]  smLaptop:gap-[4.5rem]">
            <div className="flex flex-col justify-center items-center gap-7">
              <p className="text-center font-poppins phone:text-[min(6vh,6vw)] smTablet:text-[min(4.5vh,4.5vw)] font-extralight">
                Dive Deep Into{" "}
                <span className=" text-[#3959E5] font-ivy_thin_italic italic">
                  Quant.
                </span>
              </p>
              <p className="laptop:w-[65%]  phone:w-[80%] text-center font-poppins font-light tracking-wider phone:text-[min(3vh,3vw)] smTablet:text-[min(1.8vh,1.8vw)] text-pretty leading-relaxed text-[#000000]">
                Designed to equip financial advisors with the precision and
                agility essential in an ever-evolving financial landscape, the
                Comparator empowers you with the insights to thrive.
              </p>
            </div>
            <Suspense
              fallback={
                <div className="w-full h-full flex justify-center items-center">
                  <Loader2 className="animate-spin w-10 h-auto text-[#000121]" />
                </div>
              }>
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
