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
        <div className="mt-12 flex min-h-screen w-full items-center justify-center bg-[#ECF0FB]">
          {/* <div className="bg-[#ECF0FB] w-[95%] rounded-[2rem] h-full phone:py-[2.5rem] smLaptop:py-[5rem] flex flex-col justify-center items-center phone:gap-[2rem]  smLaptop:gap-[4.5rem]">
          <Suspense>{children}</Suspense>
        </div> */}
          <Suspense
            fallback={
              <div className="flex h-screen w-screen items-center justify-center">
                <Loader2 className="h-auto w-10 animate-spin text-[#000121]" />
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
