import Image from "next/image";
import youngman from "@/public/young_man.svg";
import oldman from "@/public/old_man.svg";

const WhyUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[10rem] mb-[5rem] gap-5 ">
        <h1 className="font-ivy text-[#FFFFFF]  text-[min(11.5vh,11.5vw)] font-normal tracking-wider">
          New times require new tools
        </h1>
        <p className="font-poppins text-[#FFFFFF] w-[45%] text-[min(2.5vh,2.5vw)] text-center font-light tracking-wide">
          New generations of investors have different needs. With current
          platforms and solutions, it’s impossible to meet their demands in
          time.
        </p>
        <div className="flex justify-center items-center gap-[7rem] mt-[5rem]">
          <div className="border-2 h-auto w-[20rem] text-[#FFFFFF] rounded-xl bg-[#000122] flex flex-col justify-center items-center gap-3 p-3">
            <Image src={oldman} alt="" className="h-auto w-[4rem]" />
            <button className="text-[#FFFFFF] rounded-2xl bg-[#07335B] px-5 py-3">
              Baby boomers
            </button>
            <p> hellooooo</p>
          </div>
          <div className="border-2 h-auto w-auto text-[#FFFFFF] rounded-full bg-[#000122] flex flex-col justify-center items-center gap-3 p-14">
            <Image src={oldman} alt="" className="h-auto w-[4rem]" />
            <button className="text-[#FFFFFF] rounded-2xl bg-[#07335B] px-5 py-3">
              Baby boomers
            </button>
            <p> hellooooo</p>
          </div>
          <div className="border-2 h-[26rem] w-[20rem] text-[#FFFFFF] rounded-xl bg-[#000122] flex flex-col justify-center items-center gap-3 p-3">
            <Image src={oldman} alt="" className="h-auto w-[4rem]" />
            <button className="text-[#FFFFFF] rounded-2xl bg-[#07335B] px-5 py-3">
              Baby boomers
            </button>
            <p> hellooooo</p>
          </div>
        </div>
      </div>
      <div className="bg-[#ECF0FB] w-screen h-auto">
        <div className="flex justify-center items-center py-[5rem]">
          <h1 className=" font-poppins  text-[min(4vh,4vw)] font-extralight tracking-wider w-[80%] text-center">
            Build winner{" "}
            <span className="text-[#395E95]  font-ivy_thin_italic font-semibold ">
              {" "}
              value propositions{" "}
            </span>
            for the new generation with us
          </h1>
        </div>

        <div className="flex justify-center items-center gap-11 pb-[4rem] ">
          <div className="bg-[#FFFFFF] text-[#000000] h-[16rem] w-[19rem]">
            {" "}
            data
          </div>
          <div className="bg-[#FFFFFF] text-[#000000] h-[16rem] w-[19rem]">
            {" "}
            data
          </div>
          <div className="bg-[#FFFFFF] text-[#000000] h-[16rem] w-[19rem]">
            {" "}
            data
          </div>
          <div className="bg-[#FFFFFF] text-[#000000] h-[16rem] w-[19rem]">
            {" "}
            data
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center text-center bg-[#01193A] py-[5rem]">
            <p className="font-poppins font-thin w-[30%] text-[min(4.7vh,4.7vw)] text-[#FFFFFF] tracking-wide">
              This evolution is possible thanks to{" "}
              <span className="font-ivy_thin_italic text-[#3959E5]">
                our team
              </span>
            </p>
            <div className="flex">
              <button className="text-[#FFFFFF] border-2 bg-[#3959E5] hover:bg-[#4D75FD] transition duration-300  rounded-full py-[0.75rem] px-[1.75rem] my-[1.7rem] flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-days">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                Get in Touch With Us
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-16 pb-[4rem] bg-[#01193A] ">
            <div className="bg-[#FFFFFF] text-[#000000] h-[16rem] w-[28rem] rounded-2xl">
              {" "}
              data
            </div>
            <div className="bg-[#FFFFFF] text-[#000000] h-[16rem] w-[28rem] rounded-2xl">
              {" "}
              data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
