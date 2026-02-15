import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTasks, FaBullseye, FaChartLine, FaCogs } from "react-icons/fa";

const benefits = [
  {
    title: "Delegate Low-Value Tasks",
    description:
      "Let your assistant handle repetitive tasks and marketing execution so you can focus on strategic leadership and growth.",
    icon: <FaTasks />,
  },
  {
    title: "Never Miss Opportunities",
    description:
      "Stay on top of leads, follow-ups, and campaigns with consistent execution and reliable systems.",
    icon: <FaBullseye />,
  },
  {
    title: "Focus on Growth",
    description:
      "Spend your time on high-impact decisions that move your business forward instead of daily operations.",
    icon: <FaChartLine />,
  },
  {
    title: "Streamline Operations",
    description:
      "Integrate marketing, operations, and your online presence into one efficient workflow.",
    icon: <FaCogs />,
  },
];

export default function Benefits() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="benefits"
      className="relative py-28 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#AE7533]/15 blur-[130px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN — ICONS */}
        <div className="flex md:flex-col justify-center items-center gap-8 md:gap-10">

          {benefits.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              whileHover={{ scale: 1.1 }}
              className={`w-20 h-20 flex items-center justify-center rounded-full text-2xl transition-all duration-300
                ${
                  active === i
                    ? "bg-[#AE7533] text-white shadow-xl"
                    : "bg-white/70 text-[#AE7533] border border-[#AE7533]/30"
                }`}
            >
              {item.icon}
            </motion.button>
          ))}

        </div>

        {/* RIGHT COLUMN — TEXT + POPUP CARD */}
        <div>

          {/* HEADER */}
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46] leading-tight">
            Why a{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              Right-Hand VA
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#5E6F66] leading-relaxed mb-12 max-w-xl">
            Maximize efficiency and accelerate growth by leveraging professional
            support for operations, marketing, and your online presence.
          </p>

          {/* ACTIVE CARD */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-white/40 shadow-xl"
              >
                <h3 className="font-heading text-2xl mb-4 text-[#2D5D46]">
                  {benefits[active].title}
                </h3>

                <p className="text-[#5E6F66] leading-relaxed">
                  {benefits[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
