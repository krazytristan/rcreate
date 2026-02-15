// src/components/WhyChoose.jsx
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Trained Virtual Assistants",
  "Clear & Consistent Communication",
  "Strong Accountability & Reporting",
  "Flexible Support Plans",
  "Fast & Structured Onboarding",
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      {/* HEADER */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight text-[#2D5D46] mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            RCreate
          </span>
        </h2>

        <p className="text-[#5E6F66] text-lg md:text-xl">
          We combine structured systems, trained professionals, and strategic
          support to help your business scale confidently.
        </p>
      </motion.div>

      {/* BULLET GRID */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex items-start gap-4 rounded-3xl p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaCheckCircle className="text-[#AE7533] text-xl mt-1 flex-shrink-0" />
            <span className="font-body text-[#5E6F66] text-base md:text-lg">
              {point}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
