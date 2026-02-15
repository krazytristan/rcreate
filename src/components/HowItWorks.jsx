// src/components/HowItWorks.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section
      id="how-it-works"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN — TEXT */}
        <div>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight text-[#2D5D46] mb-6 leading-tight">
            How{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              It Works
            </span>
          </h2>

          <p className="text-[#5E6F66] text-lg md:text-xl leading-relaxed max-w-xl">
            A simple, structured process designed to integrate reliable virtual
            support into your business seamlessly. From discovery to long-term
            partnership, we ensure clarity and consistency every step of the way.
          </p>
        </div>

        {/* RIGHT COLUMN — CAROUSEL */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-10 bg-white/70 backdrop-blur-md border border-white/40 shadow-xl relative"
            >
              {/* LARGE STEP NUMBER */}
              <div className="absolute -top-6 right-6 text-6xl font-bold text-[#AE7533]/10 select-none">
                {steps[index].number}
              </div>

              <h3 className="font-heading text-2xl md:text-3xl text-[#2D5D46] mb-4">
                {steps[index].title}
              </h3>

              <p className="text-[#5E6F66] leading-relaxed">
                {steps[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION CONTROLS */}
          <div className="flex items-center justify-between mt-10">

            {/* PREV */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#AE7533]/40 text-[#AE7533] hover:bg-[#AE7533] hover:text-white transition-all duration-300"
            >
              <FaArrowLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-3">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-[#AE7533]"
                      : "w-3 bg-[#94A591] opacity-50 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#AE7533]/40 text-[#AE7533] hover:bg-[#AE7533] hover:text-white transition-all duration-300"
            >
              <FaArrowRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
