import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  // FETCH FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const nextSlide = () => {
    setIndex((prev) =>
      testimonials.length ? (prev + 1) % testimonials.length : 0
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      testimonials.length
        ? (prev - 1 + testimonials.length) % testimonials.length
        : 0
    );
  };

  if (!testimonials.length) return null;

  return (
    <section
      id="testimonials"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT COLUMN */}
        <div>
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

        {/* RIGHT COLUMN */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-12 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft"
            >
              <FaQuoteLeft className="text-4xl mb-6 text-accent/30" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, idx) => (
                    <FaStar key={idx} className="text-sm text-accent" />
                  )
                )}
              </div>

              <p className="text-neutral-muted leading-relaxed mb-8 text-lg">
                “{testimonials[index].quote}”
              </p>

              <span className="font-heading text-sm text-neutral-muted/80">
                — {testimonials[index].author}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-12">

            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              <FaArrowLeft />
            </button>

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