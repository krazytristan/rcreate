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
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN — TEXT */}
        <div>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46] leading-tight">
            Client{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#5E6F66] leading-relaxed max-w-xl">
            Trusted by founders, service businesses, and agencies who value
            reliability, professionalism, and measurable results.
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
              {/* QUOTE ICON */}
              <FaQuoteLeft className="text-3xl mb-6 text-[#AE7533]/40" />

              {/* STAR RATING */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, idx) => (
                    <FaStar
                      key={idx}
                      className="text-sm text-[#AE7533]"
                    />
                  )
                )}
              </div>

              {/* QUOTE */}
              <p className="text-[#5E6F66] leading-relaxed mb-8">
                “{testimonials[index].quote}”
              </p>

              {/* AUTHOR */}
              <span className="font-heading text-sm text-[#94A591]">
                — {testimonials[index].author}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
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
              {testimonials.map((_, i) => (
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
