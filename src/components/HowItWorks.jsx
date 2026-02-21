// src/components/HowItWorks.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Book a Discovery Call",
    description:
      "Schedule a strategy session so we can understand your business, goals, and operational challenges.",
  },
  {
    number: "02",
    title: "Needs Assessment",
    description:
      "We evaluate workflows, priorities, and support requirements to design a structured solution.",
  },
  {
    number: "03",
    title: "VA Matching",
    description:
      "We align you with a trained, dependable virtual assistant suited to your needs.",
  },
  {
    number: "04",
    title: "Onboarding & Setup",
    description:
      "Systems, communication channels, and expectations are structured for seamless integration.",
  },
  {
    number: "05",
    title: "Ongoing Optimization",
    description:
      "Continuous refinement, reporting, and strategic alignment to ensure long-term growth.",
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
      className="relative py-36 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN */}
        <div>
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            How <span className="text-accent">It Works</span>
          </h2>

          <p className="text-neutral-muted text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
            A structured, transparent process designed to integrate reliable
            virtual support seamlessly into your business.
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
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-10 bg-white/60 backdrop-blur-xl border border-neutral-border shadow-soft"
            >
              {/* Large Step Number (Background) */}
              <div className="absolute -top-6 right-6 text-7xl font-bold text-accent/10 select-none">
                {steps[index].number}
              </div>

              <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                {steps[index].title}
              </h3>

              <p className="text-neutral-muted leading-relaxed">
                {steps[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex items-center justify-between mt-10">

            {/* PREV */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300"
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
                      ? "w-8 bg-accent"
                      : "w-3 bg-neutral-muted/40 hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FaArrowRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
