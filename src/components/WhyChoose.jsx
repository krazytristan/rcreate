// src/components/WhyChoose.jsx
import { motion } from "framer-motion";
import { FaGlobe, FaSyncAlt } from "react-icons/fa";

const steps = [
  "Understand your business needs",
  "Match you based on skills, experience, and personality",
  "Provide custom onboarding aligned with your processes",
  "Deliver ongoing support and optimization as you grow",
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative pt-12 md:pt-20 lg:pt-28 pb-20 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-12">

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl text-primary leading-tight"
          >
            What Makes <span className="text-accent">RCreate</span> Different
          </motion.h2>

          {/* BLOCK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                Global, Experienced & Proactive Support
              </h3>
            </div>

            <p className="text-neutral-muted text-lg leading-relaxed max-w-xl">
              Our Virtual Assistants aren’t just task-doers — they’re trained
              professionals who anticipate needs, manage priorities, and integrate seamlessly into your workflow.
            </p>

            <p className="text-neutral-muted text-lg leading-relaxed max-w-xl">
              From CRM management to managing your online presence, we implement
              structured systems that allow you to operate at your highest level.
            </p>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                <FaSyncAlt />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                Strategic Matching, Not Random Placement
              </h3>
            </div>

            <p className="text-neutral-muted text-lg leading-relaxed max-w-xl">
              We don’t just assign a VA and leave you to figure out the rest.
              Every engagement is structured around precision, alignment, and long-term scalability.
            </p>

            {/* Gradient Highlight */}
            <div className="relative inline-block mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent blur-xl rounded-full" />
              <p className="relative text-primary font-semibold text-xl px-4 py-2">
                No guesswork. No mismatch. Just results.
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN — CENTERED */}
        <div className="space-y-10 self-center">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-start gap-6"
            >
              {/* Step Number */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-white font-semibold text-lg shadow-premium flex-shrink-0"
              >
                {index + 1}
              </motion.div>

              <div className="bg-white/60 backdrop-blur-xl border border-neutral-border rounded-3xl p-6 shadow-soft hover:shadow-premium transition-all duration-300">
                <p className="text-neutral-muted text-base md:text-lg">
                  {step}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}