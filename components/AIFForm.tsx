"use client";
import { useState } from "react";

const AIFForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    account_type: "",
    contact_method: "",
    referral: "",
    consent1: false,
    consent2: false,
    consent3: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_WEBAPP_URL", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#000121] text-white">
        <h1 className="text-2xl font-bold">Thank you for submitting! 🎉</h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#000121] text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-[90%] max-w-lg bg-white/5 p-8 rounded-xl"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Register Interest in AIF</h1>

        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
          placeholder="First Name*"
          className="rounded-md p-3 bg-white/10"
        />

        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
          placeholder="Last Name*"
          className="rounded-md p-3 bg-white/10"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email*"
          className="rounded-md p-3 bg-white/10"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number*"
          className="rounded-md p-3 bg-white/10"
        />

        <select
          name="account_type"
          value={formData.account_type}
          onChange={handleChange}
          required
          className="rounded-md p-3 bg-white/10"
        >
          <option value="" disabled>
            Account Type*
          </option>
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

        <select
          name="contact_method"
          value={formData.contact_method}
          onChange={handleChange}
          required
          className="rounded-md p-3 bg-white/10"
        >
          <option value="" disabled>
            How should we reach out?*
          </option>
          <option value="Call with Sales">Call with Sales</option>
          <option value="Deck on Email">Deck on Email</option>
        </select>

        <select
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className="rounded-md p-3 bg-white/10"
        >
          <option value="" disabled>
            How did you hear about us?
          </option>
          <option value="Website">Website</option>
          <option value="Referral">Referral</option>
          <option value="TV">TV</option>
          <option value="Podcast">Podcast</option>
          <option value="FB / Insta / LinkedIn">FB / Insta / LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Other">Other</option>
        </select>

        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-2">
            <input type="checkbox" name="consent1" checked={formData.consent1} onChange={handleChange} required />
            <label>As per SEBI regulations, AIF requires a minimum investment of Rs. 1 Crore.*</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" name="consent2" checked={formData.consent2} onChange={handleChange} required />
            <label>I consent to allow Astratinvest to contact me.*</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" name="consent3" checked={formData.consent3} onChange={handleChange} required />
            <label>I seek information on my own accord without solicitation or advertisement.*</label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#3959E5] p-3 font-semibold text-white hover:bg-[#2d45b5]"
          disabled={loading}
        >
          {loading ? "Submitting..." : (
            <>
              Submit
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AIFForm;
