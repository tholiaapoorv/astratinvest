import NavBar from "@/components/NavBar";
import Research from "@/components/Research";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <Research />
      <div className=" w-full flex justify-center items-center mt-12">
        <div className="bg-[#ECF0FB] w-[95%] rounded-[2rem] h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
