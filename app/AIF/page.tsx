"use client";
import { useState } from "react";

const AIFForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyAOmzg8JjOeqIQlcXbuPMotwbjE4YM3KI8k5NJwu0iplaJeMlmbxLZ_MbiKq5I4loz/exec", {
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[90%] max-w-md bg-white/5 p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-4 text-center">Register Interest in AIF</h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="rounded-md p-3 bg-white/10"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="rounded-md p-3 bg-white/10"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Your Phone Number"
          className="rounded-md p-3 bg-white/10"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Anything you want to tell us?"
          className="rounded-md p-3 bg-white/10"
          rows={4}
        />

        <button
          type="submit"
          className="mt-4 rounded-md bg-[#3959E5] p-3 font-semibold text-white hover:bg-[#2d45b5]"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AIFForm;
