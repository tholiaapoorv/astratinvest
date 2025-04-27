import React from "react";
import { Button } from "@/components/ui/button";
import AIFForm from "@/components/AIFForm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const AIFPage = () => {
  return (
    <div>
      <NavBar />

      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center bg-[#000121] w-full pt-28 pb-16 px-6 text-center">
          <h1 className="font-ivy text-[min(7vw,7vh)] text-white font-bold leading-tight mb-6">
            Astratinvest Quant Long Short Fund
          </h1>
          <p className="text-white/70 font-poppins max-w-2xl mb-8 text-lg">
            A Category III Alternative Investment Fund focused on quantitative strategies for consistent, risk-adjusted returns.
          </p>
          <Button className="rounded-lg bg-[#3959E6] p-6 text-lg font-semibold hover:bg-[#2d45b5]" asChild>
            <a href="#register-interest">Register Interest</a>
          </Button>
        </section>

        {/* What is an AIF? */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-[#F3F4F6] text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-6">
            What is an Alternative Investment Fund (AIF)?
          </h2>
          <p className="max-w-3xl font-poppins text-gray-700 text-lg">
            Alternative Investment Funds (AIFs) are privately pooled investment vehicles regulated by SEBI that collect funds from investors to invest in accordance with a defined investment policy for the benefit of their investors. They typically cater to high-net-worth individuals, family offices, and institutions, offering unique strategies not easily available through public markets.
          </p>
          <h3 className="text-2xl font-bold text-[#000121] mt-10 mb-4">AIF Industry in India</h3>
          <p className="max-w-3xl font-poppins text-gray-700 text-lg">
            The AIF industry in India has grown exponentially, with total Assets Under Management (AUM) crossing ₹12 lakh crore (~$150 billion) by March 2025, reflecting a 36-fold increase since 2013. Today, over 1,500 SEBI-registered funds operate across strategies like private equity, venture capital, real estate, and hedge fund-like structures under Category III AIFs.
          </p>
        </section>

        {/* About the Fund */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-white text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-6">
            About the Fund
          </h2>
          <p className="max-w-3xl font-poppins text-gray-700 text-lg">
            Astratinvest Quant Long Short Fund is an open-ended Category III AIF, leveraging multi-factor models, machine learning, and volatility-based risk management strategies. Our aim is to generate consistent alpha while maintaining lower drawdowns compared to traditional equity strategies.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-white text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-12">
            Why Choose Astratinvest?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { title: "Quantitative Edge", desc: "Advanced data analytics, machine learning models, and multi-factor strategies to capture alpha opportunities with precision." },
              { title: "Robust Risk Management", desc: "Dynamic exposure control, position sizing, stop-losses, and hedging mechanisms to protect investor capital across market cycles." },
              { title: "Transparency & Integrity", desc: "Disciplined, data-driven decision making with detailed monthly reporting and strict adherence to SEBI guidelines." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-[#F3F4F6] rounded-xl shadow-md">
                <h3 className="font-bold text-xl text-[#3959E6] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fund Overview Table */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-[#F3F4F6] text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-12">
            Fund Overview
          </h2>
          <div className="max-w-5xl w-full">
            <table className="min-w-full table-auto border border-gray-200">
              <tbody className="text-gray-700 text-left">
                {[
                  { label: "Fund Name", value: "Astratinvest Quant Long Short Fund" },
                  { label: "Fund Type", value: "Category III Alternative Investment Fund" },
                  { label: "Fund Structure", value: "Open-ended Equity Scheme" },
                  { label: "Investment Manager", value: "Astratinvest Financial Advisors Private Limited" },
                  { label: "Trustee", value: "Orbis Trusteeship Services Private Limited" },
                  { label: "Legal Advisor", value: "Vaish Associates Advocates" },
                  { label: "Custodian", value: "Orbis Financial Corporation Limited" },
                  { label: "Benchmark(s)", value: "NIFTY 50 & BSE 500" },
                  { label: "Minimum Corpus", value: "₹ 20 crores" },
                  { label: "Sponsor Commitment", value: "5% of Corpus or ₹10 crore, whichever is lower" },
                ].map((item, idx) => (
                  <tr key={idx} className="border-t border-gray-200">
                    <td className="py-4 px-6 font-semibold">{item.label}</td>
                    <td className="py-4 px-6">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fund Snapshot */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-white text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-12">
            Fund Snapshot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { title: "Fund Category", value: "Category III AIF" },
              { title: "Fund Structure", value: "Open-ended Equity Scheme" },
              { title: "Investment Style", value: "Quantitative, Dynamic, Long/Short Equity Strategies" },
              { title: "Minimum Investment", value: "INR 1 Crore" },
              { title: "Benchmark", value: "NIFTY 50 & BSE 500" },
              { title: "Target Objective", value: "Long-term capital appreciation" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-[#F3F4F6] rounded-xl">
                <h4 className="font-semibold text-lg text-[#3959E6] mb-2">{item.title}</h4>
                <p className="text-[#000121] text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interest Registration Form */}
        <section id="register-interest" className="flex flex-col items-center justify-center w-full py-20 px-6 bg-[#000121] text-white">
          <h2 className="font-ivy text-[min(5vw,5vh)] font-bold mb-8">Register Your Interest</h2>
          <p className="mb-10 font-poppins text-center text-white/70 max-w-2xl">
            Please fill the form below to know more about Astratinvest Quant Long Short Fund. Our team will get in touch with you within 3 working days.
          </p>
          <div className="w-full max-w-4xl">
            <AIFForm />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIFPage;
