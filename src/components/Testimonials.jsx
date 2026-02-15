import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

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
      "Communication was excellent and instructions were followed perfectly. Always courteous and delivered work on time. Would recommend any time.",
    author: "Client, Virtual Assistant Project",
  },
  {
    rating: 5,
    quote:
      "Helpful and reliable with every task needed. Effort was consistently appreciated, and we look forward to working together again.",
    author: "Client, Digital Marketing Project",
  },
  {
    rating: 5,
    quote:
      "Amazing to work with as ongoing support for our business. The contract ended due to internal reasons and had nothing to do with performance or work quality.",
    author: "Client, Home Services Business",
  },
  {
    rating: 5,
    quote:
      "Handled social media design, customer communication, quoting, scheduling, and coordination with field staff. A true asset to operations.",
    author: "Client, Office & Operations Support",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden bg-[#FCFAF4]"
    >
      {/* SOFT GLOW BACKGROUND */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/15 blur-[150px] rounded-full" />

      {/* HEADER */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46]">
          Client{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <p className="font-body text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#5E6F66]">
          Trusted by founders, service businesses, and agencies who value
          reliability, professionalism, and measurable results.
        </p>
      </motion.div>

      {/* TESTIMONIAL GRID */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl p-10 bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* QUOTE ICON */}
            <FaQuoteLeft className="text-3xl mb-6 text-[#AE7533]/40" />

            {/* STAR RATING */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: item.rating }).map((_, idx) => (
                <FaStar
                  key={idx}
                  className="text-sm text-[#AE7533]"
                />
              ))}
            </div>

            {/* QUOTE */}
            <p className="font-body text-base leading-relaxed mb-8 text-[#5E6F66]">
              “{item.quote}”
            </p>

            {/* AUTHOR */}
            <span className="font-heading text-sm text-[#94A591]">
              — {item.author}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
