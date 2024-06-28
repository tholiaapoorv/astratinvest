import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import BlogLayout from "@/components/layouts/BlogLayout";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <NavBar />
        <div className=" w-full min-h-screen flex justify-center items-center mt-12 bg-[#ECF0FB]">
          {/* <div className="bg-[#ECF0FB] w-[95%] rounded-[2rem] h-full phone:py-[2.5rem] smLaptop:py-[5rem] flex flex-col justify-center items-center phone:gap-[2rem]  smLaptop:gap-[4.5rem]">
          <Suspense>{children}</Suspense>
        </div> */}
          <Suspense
            fallback={
              <div className="w-screen h-screen flex justify-center items-center">
                <Loader2 className="animate-spin w-10 h-auto text-[#000121]" />
              </div>
            }>
            {children}
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
