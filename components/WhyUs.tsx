"use client";
import Image from "next/image";
import shivam from "@/public/Teams/shivam.jpeg";
import aakash from "@/public/Teams/aakash.jpeg";
import { Gem, Mail, Star } from "lucide-react";
import Globe from "./magicui/globe";
import { COBEOptions } from "cobe";

const features = [
  {
    title: "Data Driven Insights",
  },
  {
    title: "Bespoke Quant Models",
  },
  {
    title: "Diverse Risk Management",
  },
  {
    title: "Multibagger Approach",
  },
  {
    title: "Personalised Attention",
  },
  {
    title: "Higher Alphas",
  },
];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [26.92358390003461, 75.80322905347191], size: 0.1 },
    { location: [19.10760712370692, 72.85170785325592], size: 0.1 },
  ],
};

const WhyUs = () => {
  return (
    <>
      <div className="flex h-fit w-screen flex-col items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          <div className="mb-[5rem] mt-[10rem] flex w-[80%] flex-col items-center justify-center gap-5">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000121_40%,#15a_100%)]"></div>
            <h1 className="text-center font-ivy text-[min(11.5vh,11.5vw)] font-normal tracking-wider text-[#FFFFFF]">
              Why Choose AstratInvest?
            </h1>
            <p className="w-full text-center font-poppins text-[min(2.5vh,2.5vw)] font-light tracking-wide text-[#FFFFFF]">
              New generations of investors have different needs. With current
              platforms and solutions, it&apos;s impossible to meet their
              demands in time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-screen flex-col items-center justify-center gap-[5rem] bg-[#ECF0FB] py-[5rem]">
        <div className="flex items-center justify-center">
          <h1 className="w-[80%] text-center font-poppins text-[min(4vh,4vw)] font-extralight tracking-wider">
            Build winner{" "}
            <span className="font-ivy_thin_italic font-semibold text-[#395E95]">
              {" "}
              value propositions{" "}
            </span>
            for the new generation with us
          </h1>
        </div>

        <div className="relative grid h-fit w-[80%] gap-[3rem] xsPhone:grid-cols-2 smTablet:grid-cols-3">
          {features.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex h-auto flex-col items-center justify-center gap-6 rounded-lg bg-[#fafafa] p-10"
              >
                <h2 className="text-center font-ivy tracking-widest text-[#3959E5] phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,3vw)]">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#000121] py-[5rem] font-poppins text-[min(2.5vh,2.5vw)] text-white">
        <div className="w-[80%] space-y-10">
          <div className="flex w-full items-start justify-start gap-6">
            <div className="flex w-[5%] items-center justify-center">
              <Gem className="mt-2 h-auto w-[70%] text-[#e7aeff]" />
            </div>
            <p className="w-[95%] leading-loose">
              We offer a disciplined and comprehensive investment approach
              driven by a robust philosophy. We maintain a keen focus on
              professional discipline, avoiding impulsive decisions, market
              noise, and short-term trading. Instead, we only react to our
              extensive data driven strategy.
            </p>
          </div>
          <div className="flex w-full items-start justify-start gap-6">
            <div className="flex w-[5%] items-center justify-center">
              <Gem className="mt-2 h-auto w-[70%] text-[#e7aeff]" />
            </div>
            <p className="w-[95%] leading-loose">
              Risk management is at the core of our investment process.
              Throughout the investment lifecycle, we continuously monitor and
              manage our portfolios, screening for potential red flags such as
              poor corporate governance, high leverage, or expensive valuations.
              This approach aligns with Ben Graham&apos;s principle of avoiding
              permanent capital loss.
            </p>
          </div>
          <div className="flex w-full items-start justify-start gap-6">
            <div className="flex w-[5%] items-center justify-center">
              <Gem className="mt-2 h-auto w-[70%] text-[#e7aeff]" />
            </div>
            <p className="w-[95%] leading-loose">
              We specialize in constructing portfolios geared towards uncovering
              multibagger opportunities. Our investment philosophy emphasizes a
              structured process flow, encompassing portfolio construction,
              stock selection criteria, and comprehensive risk assessment. This
              holistic approach is underpinned by a bullish and confident
              stance, aiming to deliver superior returns while safeguarding your
              investments.
            </p>
          </div>
          <div className="flex w-full items-start justify-start gap-6">
            <div className="flex w-[5%] items-center justify-center">
              <Gem className="mt-2 h-auto w-[70%] text-[#e7aeff]" />
            </div>
            <p className="w-[95%] leading-loose">
              By choosing our services, you can benefit from our unwavering
              commitment to focus, discipline, and a robust investment
              philosophy tailored to identify compelling opportunities while
              effectively managing risks.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-[4rem] bg-[#ECF0FB] py-[5rem]">
        <div className="flex w-full flex-col items-center justify-center bg-[#ECF0FB] text-center">
          <p className="w-[30%] font-poppins text-[min(4.7vh,4.7vw)] font-thin tracking-wide text-[#000121]">
            This evolution is possible thanks to{" "}
            <span className="font-ivy_thin_italic text-[#3959E5]">
              our team
            </span>
          </p>
          <div className="flex">
            <button className="my-[1.7rem] flex gap-2 rounded-full border-2 bg-[#3959E5] px-[1.75rem] py-[0.75rem] text-[#FFFFFF] transition duration-300 hover:bg-[#24325e]">
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
                className="lucide lucide-calendar-days"
              >
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

        <div className="h-ful grid w-[85%] items-center justify-center gap-16 bg-[#ECF0FB] xsPhone:grid-cols-1 smTablet:grid-cols-2 smLaptop:grid-cols-3">
          <div className="flex h-full w-full flex-col items-start justify-center bg-[#FFFFFF] text-[#000000]">
            {" "}
            <div className="aspect-auto w-full">
              <Image
                src={shivam}
                alt={""}
                className="aspect-square h-auto w-fit object-cover"
              />
            </div>
            <div className="w-full space-y-6 p-6 text-center font-poppins font-light">
              <p className="font-ivy text-[#3959E5] smLaptop:text-[min(3.5vh,3.5vw)]">
                Shivam Agrawal
              </p>
              <p>B.E. BITS Pilani</p>
              <p>M.Sc. Mathematics, BITS Pilani</p>
              <p>Previous Quant Analytics Specialist at Wells Fargo</p>
              <p className="flex w-full items-center justify-center gap-2 bg-[#3959E5] p-2 tracking-wider text-white underline">
                <Mail />
                shivam.agrawal@astratinvest.com
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-[#FFFFFF] text-[#000000]">
            {" "}
            <div className="aspect-auto w-full">
              <Image
                src={aakash}
                alt={""}
                className="aspect-square h-auto w-fit object-cover"
              />
            </div>
            <div className="w-full space-y-6 p-6 text-center font-poppins font-light">
              <p className="font-ivy text-[#3959E5] smLaptop:text-[min(3.5vh,3.5vw)]">
                Akash Gupta
              </p>
              <p>B.E. BITS Pilani</p>
              <p>M.Sc. Finance, World Quant</p>
              <p>Previous Tech Lead, Software and AI at Reliance Jio</p>
              <p className="flex w-full items-center justify-center gap-2 bg-[#3959E5] p-2 tracking-wider text-white underline">
                <Mail />
                akash.gupta@astratinvest.com
              </p>
            </div>
          </div>
          <div className="h-full w-full bg-[#FFFFFF] text-[#000000]">
            {" "}
            <div className="aspect-auto w-full">
              <Image
                src={aakash}
                alt={""}
                className="aspect-square h-auto w-fit object-cover"
              />
            </div>
            <div className="w-full space-y-6 p-6 text-center font-poppins font-light">
              <p className="font-ivy text-[#3959E5] smLaptop:text-[min(3.5vh,3.5vw)]">
                Akash Gupta
              </p>
              <p>B.E. BITS Pilani</p>
              <p>M.Sc. Finance, World Quant</p>
              <p>Previous Tech Lead, Software and AI at Reliance Jio</p>
              <p className="flex w-full items-center justify-center gap-2 bg-[#3959E5] p-2 tracking-wider text-white underline">
                <Mail />
                akash.gupta@astratinvest.com
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 aspect-square w-[400px]">
          <Globe className="w-full" config={GLOBE_CONFIG} />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
