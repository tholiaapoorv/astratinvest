import Image from "next/image";
import blog1 from "@/public/1.jpeg";
import { TbArrowUpRight } from "react-icons/tb";

const Blogs = () => {
  return (
    <div className="bg-white w-screen h-auto ">
      <div className="flex flex-col justify-center items-center m-9 ">
        {/* top */}
        <div className="flex justify-center items-center my-8">
          <h1 className="text-[#000122] font-ivy font-semibold bg-[#FFFFFF] text-[min(6.5vh,6.5vw)] tracking-wide ">
            Exploring Financial Frontiers
          </h1>
        </div>

        {/* bottom */}
        <div className="flex justify-center items-center gap-12 w-[90%] mx-16 my-4">
          <div>
            <Image src={blog1} alt="" className="h-auto w-[44rem]" />
            <div className="flex gap-2 font-poppins font-extralight text-[min1.50vh,1.50vw)]">
              <p className="pt-10 pb-4">
                Financial News Private Equity Assets{" "}
              </p>{" "}
              &nbsp; &nbsp; &nbsp;
              <p className="pt-10 pb-4">May 29, 2024</p>
            </div>
            <p className="font-semibold text-[min(2.75vh,2.75vw)] tracking-wide font-poppins pb-4 ">
              How to select a Private fund equity?
            </p>
            <p className="font-extralight text-[min1.50vh,1.50vw)] font-poppins pb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque beatae quos reprehenderit quo veritatis corrupti
              officia accusamus officiis....
            </p>
            <div className="">
              <button className="p-3 border font-ivy flex gap-1 justify-center items-center border-[#000121] text-[#000121] hover:bg-[#000121] hover:text-white transition cursor-pointer tracking-wide">
                Learn More About Private Funds{" "}
                <TbArrowUpRight className="w-6 h-auto" />
              </button>
            </div>
          </div>

          <div>
            <Image src={blog1} alt="" className="h-auto w-[44rem]" />
            <div className="flex gap-2 font-poppins font-extralight text-[min1.50vh,1.50vw)]">
              <p className="pt-10 pb-4">
                Financial News Private Equity Assets{" "}
              </p>{" "}
              &nbsp; &nbsp; &nbsp;
              <p className="pt-10 pb-4">May 29, 2024</p>
            </div>
            <p className="font-semibold text-[min(2.75vh,2.75vw)] tracking-wide font-poppins pb-4 ">
              How to select a Private fund equity?
            </p>
            <p className="font-extralight text-[min1.50vh,1.50vw)] font-poppins pb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque beatae quos reprehenderit quo veritatis corrupti
              officia accusamus officiis....
            </p>
            <div className="">
              <button className="p-3 border font-ivy flex gap-1 justify-center items-center border-[#000121] text-[#000121] hover:bg-[#000121] hover:text-white transition cursor-pointer tracking-wide">
                Learn More About Private Funds{" "}
                <TbArrowUpRight className="w-6 h-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
