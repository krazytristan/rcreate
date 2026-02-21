import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* ===============================
   TESTIMONIALS DATA
================================ */
const testimonials = [
  {
    rating: 5,
    quote:
      "An excellent resource. Timely, consistent, and delivers work with an unparalleled work ethic.",
    author: "Client, Studio Project",
  },
  {
    rating: 5,
    quote:
      "Communication was excellent and instructions were followed perfectly. Always courteous and delivered work on time.",
    author: "Client, Virtual Assistant Project",
  },
  {
    rating: 5,
    quote:
      "Helpful and reliable with every task needed. Effort was consistently appreciated.",
    author: "Client, Digital Marketing Project",
  },
  {
    rating: 5,
    quote:
      "Amazing to work with as ongoing support for our business. The contract ended due to internal reasons.",
    author: "Client, Home Services Business",
  },
  {
    rating: 5,
    quote:
      "Handled social media design, customer communication, scheduling, and coordination with staff. A true asset.",
    author: "Client, Office & Operations Support",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT COLUMN */}
        <div>
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            Client{" "}
            <span className="text-accent">
              Testimonials
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-muted leading-relaxed mt-6 max-w-xl">
            Trusted by founders, service businesses, and agencies who value
            reliability, professionalism, and measurable results.
          </p>
        </div>

        {/* RIGHT COLUMN — CAROUSEL */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-12 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl mb-6 text-accent/30" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, idx) => (
                    <FaStar
                      key={idx}
                      className="text-sm text-accent"
                    />
                  )
                )}
              </div>

              {/* Quote */}
              <p className="text-neutral-muted leading-relaxed mb-8 text-lg">
                “{testimonials[index].quote}”
              </p>

              {/* Author */}
              <span className="font-heading text-sm text-neutral-muted/80">
                — {testimonials[index].author}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-12">

            {/* PREV */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FaArrowLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
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
