// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 OPTION 1: Mailto (simple connection)
    window.location.href = `mailto:yourcompany@email.com?subject=New Inquiry from ${formData.name}&body=
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}

Message:
${formData.message}
    `;

    // 🔥 OPTION 2: Replace with API / GHL / backend later
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      {/* Header */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl text-[#2D5D46] mb-6">
          Contact{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            Us
          </span>
        </h2>

        <p className="text-[#5E6F66] text-lg md:text-xl">
          Let’s discuss how we can support your business growth.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-10 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533]"
        />

        <input
          type="text"
          name="business"
          placeholder="Business Name"
          value={formData.business}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533]"
        />

        <textarea
          name="message"
          placeholder="Tell us about your needs..."
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533]"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-[#AE7533] text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Submit Inquiry →
        </button>
      </motion.form>
    </section>
  );
}
