import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBriefcase, FaTools, FaUsers } from "react-icons/fa";

const audiences = [
  {
    title: "Home Service Businesses",
    description:
      "Cleaning, window, landscaping, junk hauling, and construction businesses that need reliable back-office, marketing, and operational support.",
    icon: <FaTools />,
  },
  {
    title: "Founders & CEOs",
    description:
      "Busy founders who need a dependable right-hand virtual assistant to manage daily operations while they focus on growth and strategy.",
    icon: <FaBriefcase />,
  },
  {
    title: "Service-Based Agencies",
    description:
      "Agencies and small business owners looking for scalable, professional support for admin, marketing, and online presence.",
    icon: <FaUsers />,
  },
];

export default function WhoWeServe() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="serve"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#AE7533]/15 blur-[130px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46] leading-tight">
            Who{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#5E6F66] leading-relaxed max-w-xl mb-12">
            We specialize in supporting founders and home service CEOs who want
            reliable, professional, and scalable support for operations,
            marketing, and online presence.
          </p>

          {/* ACTIVE CARD */}
          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-white/40 shadow-xl"
              >
                <h3 className="font-heading text-2xl mb-4 text-[#2D5D46]">
                  {audiences[active].title}
                </h3>

                <p className="text-[#5E6F66] leading-relaxed">
                  {audiences[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — ICON ONLY SELECTOR */}
        <div className="flex md:flex-col justify-center items-center gap-10">

          {audiences.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              whileHover={{ scale: 1.1 }}
              className={`w-24 h-24 flex items-center justify-center rounded-full text-3xl transition-all duration-300
                ${
                  active === i
                    ? "bg-[#AE7533] text-white shadow-2xl"
                    : "bg-white/70 text-[#AE7533] border border-[#AE7533]/30"
                }`}
            >
              {item.icon}
            </motion.button>
          ))}

        </div>

      </div>
    </section>
  );
}
