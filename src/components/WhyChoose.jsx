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
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight text-[#2D5D46] mb-6 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              RCreate
            </span>
          </h2>

          <p className="text-[#5E6F66] text-lg md:text-xl leading-relaxed max-w-xl">
            We combine structured systems, trained professionals, and strategic
            support to help your business scale confidently. Our approach is
            built on accountability, consistency, and measurable growth.
          </p>
        </motion.div>

        {/* RIGHT COLUMN — BULLET STACK */}
        <div className="space-y-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaCheckCircle className="text-[#AE7533] text-xl flex-shrink-0" />

              <span className="text-[#5E6F66] text-base md:text-lg">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
