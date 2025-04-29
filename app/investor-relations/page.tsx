import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const InvestorRelationsPage = () => {
  return (
    <div>
      <NavBar />

      <main className="flex flex-col items-center justify-center w-full overflow-hidden px-6 pt-28 pb-16 bg-white text-[#000121]">
        
        {/* Heading */}
        <section className="text-center mb-8">
          <h1 className="font-ivy text-[min(6vw,6vh)] font-bold text-[#000121]">
            Investor Relations
          </h1>
          <div className="mx-auto mt-4 mb-8 h-1 w-32 bg-[#032f92] relative">
            <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 bg-white"></div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl w-full space-y-6 text-left font-poppins text-gray-700 text-base leading-relaxed">
          <p><strong>Astratinvest Quant Long Short Fund</strong></p>
          <p>Registration Number – [Your Registration Number]</p>
          <p>Category III – AIF</p>
          <p>Registered Office – [Your Registered Office Address]</p>
          <p>Investment Manager – Astratinvest Financial Advisors Private Limited</p>
          <p>Registered Office – [Your Registered Office Address]</p>

          <p>Dear Investors,</p>
          <p>
            At Astratinvest, investor satisfaction is our foremost agenda. <strong>In case of any grievance or complaint:</strong>
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Please get in touch with our compliance officer at <a href="mailto:compliance@astratinvest.com" className="text-[#3959E6] underline">compliance@astratinvest.com</a></li>
            <li>You may also approach our escalation officer at <a href="mailto:escalations@astratinvest.com" className="text-[#3959E6] underline">escalations@astratinvest.com</a></li>
            <li>If not satisfied, you may lodge your grievance with SEBI at <a href="https://scores.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#3959E6] underline">https://scores.gov.in/</a> or contact SEBI offices via their toll-free helpline 1800 22 7575 / 1800 266 7575.</li>
            <li>If still unresolved, you can initiate dispute resolution through the ODR portal at <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-[#3959E6] underline">https://smartodr.in/login</a></li>
          </ul>

          <p><strong>Note:</strong> The dispute resolution through ODR will not be possible if:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>The complaint is not first raised with the compliance officer and subsequently on the SCORES portal.</li>
            <li>The dispute is pending before any arbitral process, court, or tribunal.</li>
            <li>The dispute is non-arbitrable under Indian law.</li>
            <li>The dispute is time-barred under the law of limitation.</li>
          </ol>

          <p>Thank you,</p>
          <p>Team Astratinvest</p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default InvestorRelationsPage;
