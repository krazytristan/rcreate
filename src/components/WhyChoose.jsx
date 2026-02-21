// src/components/WhyChoose.jsx
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Trained & Vetted Virtual Assistants",
  "Clear, Structured Communication",
  "Strong Accountability & Reporting",
  "Flexible, Scalable Support Plans",
  "Fast & Seamless Onboarding",
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative py-36 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

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
            Why Choose{" "}
            <span className="text-accent">
              RCreate
            </span>
          </h2>

          <p className="text-neutral-muted text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
            We combine structured systems, trained professionals, and strategic
            execution to help your business scale confidently. Our approach is
            rooted in clarity, accountability, and measurable results.
          </p>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-5 rounded-3xl p-6 bg-white/60 backdrop-blur-xl border border-neutral-border shadow-soft hover:shadow-premium transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0">
                <FaCheckCircle className="text-lg" />
              </div>

              <span className="text-neutral-muted text-base md:text-lg">
                {point}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
