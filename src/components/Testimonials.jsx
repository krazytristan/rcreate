// src/components/Testimonials.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

/* ===============================
   TESTIMONIALS DATA
================================ */
const testimonials = [
  {
    quote:
      "Rcreate’s VA and marketing support has transformed how I run my business—everything runs smoothly!",
    author: "CEO, Home Services",
  },
  {
    quote:
      "Their team handles admin, communication, marketing, and even built our website—allowing me to focus on growth.",
    author: "Founder, Service Agency",
  },
  {
    quote:
      "We’ve doubled our client engagement thanks to their social media management and strategy guidance.",
    author: "Marketing Director, Home Improvement",
  },
  {
    quote:
      "Their virtual assistants seamlessly integrate into our operations, saving us time and reducing stress.",
    author: "Operations Manager, Cleaning Services",
  },
  {
    quote:
      "The team is responsive, professional, and goes above and beyond to help our business scale.",
    author: "Entrepreneur, Landscaping Services",
  },
];

/* ===============================
   TESTIMONIALS COMPONENT
================================ */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#FCFAF4" }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold mb-14 text-center tracking-wide"
        style={{ color: "#AE7533" }}
      >
        Testimonials
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="rounded-3xl p-8 shadow-lg relative z-10"
            style={{ backgroundColor: "#FFEDD6", color: "#2D5D46" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuoteLeft
              className="text-3xl absolute top-6 left-6"
              style={{ color: "#AE7533" }}
            />
            <FaQuoteRight
              className="text-3xl absolute bottom-6 right-6"
              style={{ color: "#AE7533" }}
            />

            <p className="text-base md:text-lg leading-relaxed mb-4">{testimonials[current].quote}</p>
            <span
              className="font-bold text-sm md:text-base"
              style={{ color: "#94A591" }}
            >
              — {testimonials[current].author}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                current === i ? "bg-[#AE7533]" : "bg-[#94A591]/50"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
