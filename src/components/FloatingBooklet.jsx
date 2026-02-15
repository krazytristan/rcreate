import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

/* ===============================
   TESTIMONIALS DATA
================================ */
const testimonials = [
  {
    quote:
      "Rcreate’s VA and marketing support has transformed how I run my business—everything runs smoothly and efficiently.",
    author: "CEO, Home Services Business",
  },
  {
    quote:
      "Their team handles admin, communication, marketing, and even built our website—allowing me to focus entirely on growth and strategy.",
    author: "Founder, Service Agency",
  },
];

/* ===============================
   TESTIMONIALS COMPONENT
================================ */
export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden">
      
      {/* SOFT LUXURY GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      {/* HEADER */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight text-[#2D5D46] mb-6">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>

        <p className="font-body text-lg md:text-xl text-[#5E6F66]">
          Real results from founders and service businesses who trust us with
          their operations, marketing, and growth.
        </p>
      </motion.div>

      {/* TESTIMONIAL CARDS */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="relative rounded-3xl p-10 bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* QUOTE ICONS */}
            <FaQuoteLeft className="text-[#AE7533]/30 text-3xl absolute top-6 left-6" />
            <FaQuoteRight className="text-[#AE7533]/30 text-3xl absolute bottom-6 right-6" />

            {/* QUOTE TEXT */}
            <p className="font-body text-base md:text-lg leading-relaxed mb-8 text-[#5E6F66]">
              “{item.quote}”
            </p>

            {/* AUTHOR */}
            <span className="font-heading text-sm md:text-base text-[#2D5D46]">
              — {item.author}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
