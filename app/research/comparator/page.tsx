import Image from "next/image";
import Research1 from "@/public/research1.svg";
import multiasset1 from "@/public/Multi-asset1.svg";
import multiasset2 from "@/public/Multi-asset2.svg";
import multiasset3 from "@/public/Multi-asset3.svg";
import Quant from "@/public/Quant.jpeg";
const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-[3.5rem] mt-10 py-6">
        <div className="flex flex-col justify-center items-center gap-7">
          <h1 className="font-poppins font-semibold tracking-[0.35em] text-[#3959E5] smLaptop:text-[min(2.35vh,2.35vw)] ">
            COMPARATOR
          </h1>
          <p className="w-[65%] text-center font-poppins font-light tracking-wider smLaptop:text-[min(2.1vh,2.1vw)] text-pretty leading-relaxed text-[#000000]">
            Designed to equip financial advisors with the precision and agility
            essential in an ever-evolving financial landscape, the Comparator
            empowers you with the insights to thrive.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-center font-poppins text-[min(4.5vh,4.5vw)] font-extralight my-4">
            Key{" "}
            <span className=" text-[#3959E5] font-ivy_thin_italic italic">
              benefits
            </span>
          </p>
          <div className="flex gap-3 w-[75%]">
            <div className="border-2 p-7 rounded-xl bg-[#FFFFFF] space-y-3 ">
              <Image src={multiasset1} alt="" className="h-auto w-[4.2rem]" />
              <p className="font-poppins text-[min(2.3vw,2.3vh)] font-light w-[85%] text-[#3959E5]">
                Compare multiple assets in multiple dimensions
              </p>
            </div>
            <div className="border-2 p-7 rounded-xl bg-[#FFFFFF] space-y-3">
              <Image src={multiasset2} alt="" className="h-auto w-[4.2rem]" />
              <p className="font-poppins text-[min(2.3vw,2.3vh)] font-light w-[85%] text-[#3959E5]">
                Inform your decision-making process
              </p>
            </div>
            <div className="border-2 p-7 rounded-xl bg-[#FFFFFF] space-y-3">
              <Image src={multiasset3} alt="" className="h-auto w-[4.2rem]" />
              <p className="font-poppins text-[min(2.3vw,2.3vh)] font-light w-[85%] text-[#3959E5]">
                Make it available to your team and clients
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center font-poppins text-[min(4.5vh,4.5vw)] font-extralight my-4">
          Key{" "}
          <span className=" text-[#3959E5] font-ivy_thin_italic italic">
            features
          </span>
        </p>
        <div className="flex">
          {/* <div className="w-[50%] flex justify-center items-center">
            <Image
              src={Quant}
              alt=""
              className="h-auto w-[60%] drop-shadow-md rounded-xl"
            />
          </div> */}
          <div className="w-full h-[50ch] grid grid-cols-2 grid-rows-2 gap-10 px-[5rem] ">
            <div className="w-auto h-auto bg-white rounded-2xl"></div>
            <div className="w-auto h-auto bg-white rounded-2xl"></div>
            <div className="w-auto h-auto bg-white rounded-2xl"></div>
            <div className="w-auto h-auto bg-white rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
