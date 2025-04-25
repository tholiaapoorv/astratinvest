"use client";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from "react-confetti";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import z from "zod";

const AIFForm = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);
  const [confetti, showConfetti] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const accountRef = useRef<HTMLSelectElement>(null);
  const contactRef = useRef<HTMLSelectElement>(null);
  const referralRef = useRef<HTMLSelectElement>(null);
  const consent1Ref = useRef<HTMLInputElement>(null);
  const consent2Ref = useRef<HTMLInputElement>(null);
  const consent3Ref = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6).max(15),
    account_type: z.string().min(1),
    contact_method: z.string().min(1),
    referral: z.string().optional(),
    consent1: z.boolean().refine(Boolean, { message: "Required" }),
    consent2: z.boolean().refine(Boolean, { message: "Required" }),
    consent3: z.boolean().refine(Boolean, { message: "Required" }),
  });

  useEffect(() => {
    showConfetti(false);
    setIsSubmitting(false);
  }, []);

  return (
    <div className="h-full w-full">
      <section className="relative flex h-full items-center justify-center bg-[#000121] text-white">
        <div className="flex flex-col items-center justify-center px-4 py-8 phone:w-[95%] lg:py-16 smLaptop:w-[80%]">
          {confetti && (
            <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
          )}
          <h2 className="mb-4 text-center font-ivy text-[min(6.5vh,6.5vw)] font-extrabold tracking-wide text-white">
            Register Interest in AIF
          </h2>
          <p className="mb-8 text-center font-poppins text-white/70 smLaptop:mb-12">
            Share your details and our team will get in touch within 3 working days.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              const captchaValue = recaptcha?.current?.getValue();
              if (!captchaValue) {
                toast.error("Please verify the reCAPTCHA!");
                setIsSubmitting(false);
                return;
              }

              const parsed = formSchema.safeParse({
                first_name: firstNameRef.current?.value,
                last_name: lastNameRef.current?.value,
                email: emailRef.current?.value,
                phone: phoneRef.current?.value,
                account_type: accountRef.current?.value,
                contact_method: contactRef.current?.value,
                referral: referralRef.current?.value,
                consent1: consent1Ref.current?.checked,
                consent2: consent2Ref.current?.checked,
                consent3: consent3Ref.current?.checked,
              });

              if (!parsed.success) {
                parsed.error.errors.forEach((err) => toast.error(err.message));
                recaptcha.current?.reset();
                setIsSubmitting(false);
                return;
              }

              const res = await fetch("https://script.google.com/macros/library/d/1tJyg9MC13GQkyZRItk_6BYbmKeyQYsMkgtHq8vk2cf_Xg07e5t5Wi779/2", {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(parsed.data),
              });

              showConfetti(true);
              recaptcha.current?.reset();
              toast.success("Submitted successfully! We’ll be in touch soon.");
              setIsSubmitting(false);
            }}
            className="w-full space-y-6 font-poppins"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input ref={firstNameRef} required placeholder="First Name*" className="p-4 bg-white/10 rounded-md text-white" />
              <input ref={lastNameRef} required placeholder="Last Name*" className="p-4 bg-white/10 rounded-md text-white" />
            </div>
            <input ref={emailRef} required placeholder="Email*" type="email" className="p-4 w-full bg-white/10 rounded-md text-white" />
            <input ref={phoneRef} required placeholder="Phone Number*" type="tel" className="p-4 w-full bg-white/10 rounded-md text-white" />

            <select ref={accountRef} required className="p-4 w-full bg-white/10 rounded-md text-white">
              <option value="">Account Type*</option>
              <option value="Resident Indian">Resident Indian</option>
              <option value="NRI">NRI</option>
              <option value="Proprietorship">Proprietorship</option>
              <option value="HUF">HUF</option>
              <option value="LLP - Partnership">LLP - Partnership</option>
              <option value="Company & BD Corp">Company & BD Corp</option>
              <option value="Societies">Societies</option>
              <option value="Trust">Trust</option>
              <option value="AOP or BOI">AOP or BOI</option>
              <option value="Bank-Registered Entities">Bank-Registered Entities</option>
              <option value="NRI Entity">NRI Entity</option>
              <option value="Investor through POA">Investor through POA</option>
            </select>

            <select ref={contactRef} required className="p-4 w-full bg-white/10 rounded-md text-white">
              <option value="">How should we reach out?*</option>
              <option value="Call with Sales">Call with Sales</option>
              <option value="Deck on Email">Deck on Email</option>
            </select>

            <select ref={referralRef} className="p-4 w-full bg-white/10 rounded-md text-white">
              <option value="">How did you hear about us?</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="TV">TV</option>
              <option value="Podcast">Podcast</option>
              <option value="FB / Insta / LinkedIn">FB / Insta / LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="Other">Other</option>
            </select>

            <div className="text-sm space-y-2">
              <label className="flex gap-2 items-start">
                <input ref={consent1Ref} type="checkbox" required />
                As per SEBI regulations, AIF requires a minimum investment of ₹1 Crore.*
              </label>
              <label className="flex gap-2 items-start">
                <input ref={consent2Ref} type="checkbox" required />
                I consent to allow Astratinvest to contact me.*
              </label>
              <label className="flex gap-2 items-start">
                <input ref={consent3Ref} type="checkbox" required />
                I seek information on my own accord without solicitation or advertisement.*
              </label>
            </div>

            <ReCAPTCHA
              ref={recaptcha}
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => showConfetti(false)}
              className="flex w-full items-center justify-center rounded-lg bg-[#3959E6] p-4 text-white font-medium hover:bg-[#2d45b5]"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AIFForm;
