// src/components/HowItWorks.jsx
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a Discovery Call",
    description:
      "Schedule a free strategy call so we can understand your business, goals, and current challenges.",
  },
  {
    number: "02",
    title: "Needs Assessment",
    description:
      "We evaluate your workflows, priorities, and support requirements to design a tailored solution.",
  },
  {
    number: "03",
    title: "VA Matching",
    description:
      "We match you with a trained, dependable virtual assistant aligned with your business needs.",
  },
  {
    number: "04",
    title: "Onboarding",
    description:
      "We set up systems, communication channels, and clear expectations for a smooth transition.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Continuous support, optimization, and strategic alignment to ensure long-term success.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      {/* HEADER */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight text-[#2D5D46] mb-6">
          How{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            It Works
          </span>
        </h2>

        <p className="text-[#5E6F66] text-lg md:text-xl">
          A simple, structured process designed to integrate reliable virtual
          support into your business seamlessly.
        </p>
      </motion.div>

      {/* STEPS */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-10 bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
          >
            {/* NUMBER */}
            <div className="absolute -top-6 left-6 text-5xl font-bold text-[#AE7533]/15 select-none">
              {step.number}
            </div>

            <div className="relative z-10">
              <h3 className="font-heading text-xl md:text-2xl text-[#2D5D46] mb-4">
                {step.title}
              </h3>

              <p className="font-body text-[#5E6F66] leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
