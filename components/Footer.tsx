import Image from "next/image";
import Primarylogo from "@/public/PrimaryLogo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="flex w-screen items-center justify-center bg-[#000121] font-poppins">
      <div className="w-[85%] py-6 tablet:py-8">
        <div className="ml-0 flex w-full xsPhone:flex-col xsPhone:gap-10 tablet:justify-between smLaptop:flex-row smLaptop:gap-0">
          <div className="space-y-10 xsPhone:w-full smLaptop:w-[70%]">
            <a
              href="https://astratinvest.com/"
              className="flex w-fit items-center gap-8"
            >
              <Image
                src={Primarylogo}
                className="h-auto w-[8rem]"
                alt="AstratInvest Logo"
              />
              <p className="w-full text-center font-ivy text-white xsPhone:text-[min(6vh,6vw)] tablet:text-[min(5vh,5vw)]">
                ASTRATINVEST
              </p>
            </a>
            <p className="w-[90%] text-gray-500">
              AStratinvest, AIF SEBI Registration: IN/AIF3/25-26/1795
            </p>
          </div>
          <div className="grid gap-8 xsPhone:hidden tablet:grid tablet:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">
                Explore
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://astratinvest.com/about-us"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://astratinvest.com/blog"
                    className="hover:underline"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">
                Research
              </h2>
              <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400">
                <li className="">
                  <a
                    href="https://astratinvest.com/research/quantitative-model"
                    className="hover:underline"
                  >
                    Quantitative Model
                  </a>
                </li>
{/*                 <li>
                  <a
                    href="https://astratinvest.com/research/performance-record"
                    className="hover:underline"
                  >
                    Performance Record
                  </a>
                </li>
                <li> */}
                  <a
                    href="https://astratinvest.com/research/case-studies"
                    className="hover:underline"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="https://astratinvest.com/research/risk-management"
                    className="hover:underline"
                  >
                    Risk Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="mb-6 grid gap-8 xsPhone:grid tablet:hidden tablet:grid-cols-3"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-semibold uppercase text-white dark:text-white">
                Explore
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 font-medium text-gray-500 dark:text-gray-400">
                <a
                  href="https://astratinvest.com/about-us"
                  className="hover:underline"
                >
                  About Us
                </a>

                <a
                  href="https://astratinvest.com/blog"
                  className="hover:underline"
                >
                  Blogs
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm font-semibold uppercase text-white dark:text-white">
                Research
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 font-medium text-gray-500 dark:text-gray-400">
                <a
                  href="https://astratinvest.com/research/quantitative-model"
                  className="hover:underline"
                >
                  Quantitative Model
                </a>

                <a
                  href="https://astratinvest.com/research/performance-record"
                  className="hover:underline"
                >
                  Performance Record
                </a>

                <a
                  href="https://astratinvest.com/research/case-studies"
                  className="hover:underline"
                >
                  Case Studies
                </a>

                <a
                  href="https://astratinvest.com/research/risk-management"
                  className="hover:underline"
                >
                  Risk Management
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm font-semibold uppercase text-white dark:text-white">
                Legal
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 font-medium text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>

                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 xsPhone:hidden sm:mx-auto tablet:block lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="https://astratinvest.com/" className="hover:underline">
              AStratinvest™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
