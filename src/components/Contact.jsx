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

    const subject = encodeURIComponent(
      `New Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}

Message:
${formData.message}
    `);

    window.location.href = `mailto:yourcompany@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 blur-[200px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            Let’s{" "}
            <span className="text-accent">
              Work Together
            </span>
          </h2>

          <p className="text-neutral-muted text-lg md:text-xl leading-relaxed max-w-lg mt-6 mb-12">
            Ready to simplify operations and scale with confidence?
            Share your details and we’ll respond with a tailored
            support strategy.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-neutral-muted">
            <p>
              <span className="font-semibold text-primary">Email:</span>{" "}
              yourcompany@email.com
            </p>
            <p>
              <span className="font-semibold text-primary">Availability:</span>{" "}
              Monday – Friday
            </p>
            <p>
              <span className="font-semibold text-primary">Response Time:</span>{" "}
              Within 24 hours
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-12 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft space-y-6"
        >
          {/* Subtle Glow Layer */}
          <div className="absolute -inset-1 bg-accent/5 blur-2xl rounded-3xl -z-10" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />

          {/* Business */}
          <input
            type="text"
            name="business"
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-accent text-white font-semibold shadow-premium hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            Submit Inquiry →
          </button>
        </motion.form>

      </div>
    </section>
  );
}
