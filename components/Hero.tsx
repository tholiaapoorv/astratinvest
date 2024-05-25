"use client";
import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useRef,
  useState,
} from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronDown } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const containerMain = useRef<HTMLDivElement>(null);
  // const containerTagline = useRef<HTMLDivElement>(null);

  // const Tagline1 = useRef<HTMLHeadingElement>(null);
  // const Tagline2 = useRef<HTMLHeadingElement>(null);
  // const Desc1 = useRef<HTMLHeadingElement>(null);
  // const Desc2 = useRef<HTMLHeadingElement>(null);

  // const taglines = [Tagline1, Tagline2];
  // const descs = [Desc1, Desc2];

  // const [currentTag, setCurrentTag] = useState(0);
  // const [currentDesc, setCurrentDesc] = useState(0);

  // const [nextClick, setNextClick] = useState<MouseEventHandler>(() => {});
  // const [prevClick, setPrevClick] = useState<MouseEventHandler>(() => {});

  // console.log(currentTag);

  // const { contextSafe } = useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       yoyo: true,
  //       repeatRefresh: true,
  //       repeatDelay: 5,
  //       repeat: 10,
  //       onRepeat: () => {
  //         setCurrentTag(0);
  //         setCurrentDesc(0);
  //       },
  //     });
  //     tl.fromTo(
  //       [taglines[currentTag].current, descs[currentDesc].current],
  //       {
  //         opacity: 1,
  //         display: "block",
  //         duration: 3,
  //       },
  //       {
  //         opacity: 0,
  //         display: "none",
  //         duration: 3,
  //       }
  //     );

  //     // .to([taglines[1].Tagline2, taglines[1].Desc2], {
  //     //   opacity: 0,
  //     //   display: "none",
  //     //   duration: 3,
  //     // })
  //     // .to([taglines[0].Tagline1, taglines[0].Desc1], {
  //     //   opacity: 1,
  //     //   display: "block",
  //     //   duration: 3,
  //     // });
  //   },
  //   { scope: containerMain }
  // );

  // const onBtnClick = contextSafe(() => {
  //   const tl = gsap.timeline();
  //   tl.to([".hero-tagline-1", ".hero-desc-1"], {
  //     opacity: 0,
  //     display: "none",
  //   }).to([".hero-tagline-2", ".hero-desc-2"], {
  //     opacity: 1,
  //     display: "block",
  //   });
  // });
  // const onBtnClickPrev = contextSafe(() => {
  //   const tl = gsap.timeline();
  //   tl.to([".hero-tagline-2", ".hero-desc-2"], {
  //     opacity: 0,
  //     display: "none",
  //   }).to([".hero-tagline-1", ".hero-desc-1"], {
  //     opacity: 1,
  //     display: "block",
  //   });
  // });

  return (
    <div className="h-fit w-screen" ref={containerMain}>
      <div className="bg-[#000121] h-screen relative">
        <div className="w-full text-center absolute mt-[8rem]">
          <div className="text-white uppercase font-poppins phone:tracking-[0.3em] smTablet:tracking-[0.5em] phone:text-[min(3.6vh,3.6vw)] smTablet:text-[min(2vh,2vw)]">
            AI Technology for the <br className="phone:block smLaptop:hidden" />
            investor of the future
          </div>
        </div>
        {/* Center Taglines */}

        <Carousel
          autoPlay
          animationHandler={"fade"}
          stopOnHover={false}
          infiniteLoop
          interval={6000}
          showStatus={false}
          swipeable={false}
          transitionTime={550}
          showIndicators={false}
          showThumbs={false}
          className="w-full absolute translate-y-[-50%] top-[50%] translate-x-[-50%] left-[50%] ">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="hero-tagline-1 text-white font-ivy text-center text-pretty smTablet:text-[min(11vw,11vh)] phone:text-[min(12.5vw,12.5vh)] leading-tight">
              Maximize <br className="smLaptop:hidden phone:block" />
              Risk Adjusted Returns
            </h1>
            <h4 className="hero-desc-1 font-poppins leading-relaxed phone:w-[80%] smTablet:w-full text-white text-center smTablet:text-[min(3.4vw,3.4vh)] phone:text-[min(4.4vw,4.4vh)] tracking-wide font-extralight text-pretty">
              Reduce underlying costs actively managing risk, <br />
              and systematically harvesting tax loses
            </h4>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="hero-tagline-2 text-white font-ivy text-center text-pretty smTablet:text-[min(11vw,11vh)] phone:text-[min(12.5vw,12.5vh)] leading-tight">
              Engage with a <br className="smLaptop:hidden phone:block" />
              New Generation
            </h1>
            <h4 className="hero-desc-2 font-poppins leading-relaxed phone:w-[80%] smTablet:w-full text-white text-center smTablet:text-[min(3.4vw,3.4vh)] phone:text-[min(4.4vw,4.4vh)] tracking-wide font-extralight text-pretty">
              Offer extreme personalization, value added digital experiences,
              <br />
              and co-create with your customers
            </h4>
          </div>
        </Carousel>
        <div className="w-full text-center absolute bottom-[3rem] flex flex-col justify-center items-center gap-2">
          <div className="text-white font-poppins tracking-widest phone:text-[min(3.6vh,3.6vw)] smTablet:text-[min(2vh,2vw)]">
            scroll down
          </div>
          <ChevronDown className="text-white" />
        </div>
        <Spline scene="https://draft.spline.design/AbBnjgb4jBrVONM1/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;
