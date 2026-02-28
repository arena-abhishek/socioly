"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
      });
    } catch {
      console.log("Fallback mode");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-8 md:p-12 mb-[-120px] md:mb-0">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Get in Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          placeholder="First Name"
          className="input-style"
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          className="input-style"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="input-style"
        />

        <input
          type="email"
          placeholder="Enter Email Address"
          className="input-style"
          required
        />

        <textarea
          placeholder="Write Message..."
          className="input-style md:col-span-2 h-36"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}