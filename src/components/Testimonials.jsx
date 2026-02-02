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
      className="py-20 px-6"
      style={{ backgroundColor: "#FCFAF4" }}
    >
      {/* HEADER */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          style={{ color: "#2D5D46" }}
        >
          Client{" "}
          <span style={{ color: "#AE7533" }}>
            Testimonials
          </span>
        </h2>

        <p
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          style={{ color: "#94A591" }}
        >
          Trusted by founders, service businesses, and agencies who value
          reliability, professionalism, and results.
        </p>
      </motion.div>

      {/* TESTIMONIAL CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-3xl p-8 shadow-sm hover:shadow-lg transition relative"
            style={{ backgroundColor: "#FFEDD6" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* QUOTE ICON */}
            <FaQuoteLeft
              className="text-3xl mb-4 opacity-30"
              style={{ color: "#AE7533" }}
            />

            {/* STAR RATING */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: item.rating }).map((_, idx) => (
                <FaStar
                  key={idx}
                  className="text-sm"
                  style={{ color: "#AE7533" }}
                />
              ))}
            </div>

            {/* QUOTE */}
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#2D5D46CC" }}
            >
              “{item.quote}”
            </p>

            {/* AUTHOR */}
            <span
              className="text-sm font-semibold"
              style={{ color: "#94A591" }}
            >
              — {item.author}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
