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
            A Category III Alternative Investment Fund focused on quantitative strategies for consistent risk-adjusted returns.
          </p>
          <Button className="rounded-lg bg-[#3959E6] p-6 text-lg font-semibold hover:bg-[#2d45b5]" asChild>
            <a href="#register-interest">Register Interest</a>
          </Button>
        </section>

        {/* About the Fund */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-white text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-6">
            About the Fund
          </h2>
          <p className="max-w-3xl font-poppins text-gray-700 text-lg">
            Astratinvest Quant Long Short Fund is an open-ended Category III AIF, leveraging multi-factor models and volatility-based risk management strategies. Our aim is to generate consistent alpha while maintaining lower drawdowns compared to traditional equity strategies.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-[#F3F4F6] text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-12">
            Why Choose Astratinvest?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl w-full">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-[#3959E6] mb-4">Quantitative Edge</h3>
              <p className="text-gray-600 text-sm">Advanced models blending momentum, volatility, and quality factors for superior risk-adjusted returns.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-[#3959E6] mb-4">Risk Management Focus</h3>
              <p className="text-gray-600 text-sm">Systematic hedging strategies, dynamic exposure control, and volatility overlays for capital protection.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-bold text-xl text-[#3959E6] mb-4">Transparency & Integrity</h3>
              <p className="text-gray-600 text-sm">Data-driven decision making with detailed monthly reporting and absolute adherence to SEBI regulations.</p>
            </div>
          </div>
        </section>

        {/* Fund Snapshot */}
        <section className="flex flex-col items-center justify-center w-full py-20 px-6 bg-white text-center">
          <h2 className="font-ivy text-[min(5vw,5vh)] text-[#000121] font-bold mb-12">
            Fund Snapshot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { title: "Fund Category", value: "AIF Category III" },
              { title: "Fund Structure", value: "Open-ended" },
              { title: "Investment Style", value: "Multi-Factor Quantitative" },
              { title: "Minimum Investment", value: "INR 1 Crore" },
              { title: "Benchmark", value: "Nifty 50 TRI" },
              { title: "Target Return", value: "15%+ IRR (Targeted, Not Guaranteed)" },
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
