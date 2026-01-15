import { motion } from "framer-motion";
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
];

/* ===============================
   TESTIMONIALS COMPONENT
================================ */
export default function Testimonials() {
  return (
    <section className="bg-[#FFF7ED] py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-maroon text-center mb-12">
        Testimonials / Social Proof
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#FFEDD6] rounded-3xl p-8 shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <FaQuoteLeft className="text-[#AE7533] text-3xl absolute top-6 left-6" />
            <FaQuoteRight className="text-[#AE7533] text-3xl absolute bottom-6 right-6" />

            <p className="text-[#2D5D46] text-base md:text-lg leading-relaxed mb-4">
              {item.quote}
            </p>
            <span className="text-[#AE7533] font-bold text-sm md:text-base">
              — {item.author}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
