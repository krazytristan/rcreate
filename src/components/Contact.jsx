import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_mur95n2";
    const templateID = "template_02eoxvk";
    const publicKey = "2AMx19wzcXVWTaMED";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      business: formData.business,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", business: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message, please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative pt-10 md:pt-20 lg:pt-28 pb-20 px-6 bg-neutral-background overflow-hidden"
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
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted"></span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            Let’s <span className="text-accent">Work Together</span>
          </h2>

          <p className="text-neutral-muted text-lg md:text-xl leading-relaxed max-w-lg mt-6 mb-12">
            Ready to simplify operations and scale with confidence? Share your details and we’ll respond with a tailored support strategy.
          </p>

          <div className="space-y-4 text-neutral-muted">
            <p>
              <span className="font-semibold text-primary">Email:</span> team.rcreatevaservices@gmail.com
            </p>
            <p>
              <span className="font-semibold text-primary">Availability:</span> 24 Hours
            </p>
            <p>
              <span className="font-semibold text-primary">Response Time:</span> Within 24 hours
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
          <div className="absolute -inset-1 bg-accent/5 blur-2xl rounded-3xl -z-10" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />

          <textarea
            name="message"
            placeholder="Tell us about your needs..."
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl bg-accent text-white font-semibold shadow-premium hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Submit Inquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}