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

    window.location.href = `mailto:yourcompany@email.com?subject=New Inquiry from ${formData.name}&body=
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}

Message:
${formData.message}
    `;
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-[#2D5D46] mb-6 leading-tight">
            Let’s{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="text-[#5E6F66] text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Ready to simplify your operations and scale with confidence?
            Share your details and we’ll get back to you with a tailored
            support strategy.
          </p>

          {/* OPTIONAL CONTACT INFO STYLE BLOCK */}
          <div className="space-y-4 text-[#5E6F66]">
            <p><strong>Email:</strong> yourcompany@email.com</p>
            <p><strong>Availability:</strong> Monday – Friday</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-10 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533] bg-white/80"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533] bg-white/80"
          />

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533] bg-white/80"
          />

          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-[#94A591]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533] bg-white/80"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#AE7533] text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            Submit Inquiry →
          </button>
        </motion.form>

      </div>
    </section>
  );
}
