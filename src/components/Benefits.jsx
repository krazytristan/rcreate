import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTasks, FaBullseye, FaChartLine, FaCogs } from "react-icons/fa";

const benefits = [
  {
    title: "Delegate Low-Value Tasks",
    description:
      "Allow your assistant to manage repetitive tasks and execution while you focus on strategic leadership and expansion.",
    icon: <FaTasks />,
  },
  {
    title: "Never Miss Opportunities",
    description:
      "Stay ahead of leads, follow-ups, and campaigns with consistent execution and reliable operational systems.",
    icon: <FaBullseye />,
  },
  {
    title: "Focus on Growth",
    description:
      "Invest your time in high-impact decisions that move your business forward rather than daily operations.",
    icon: <FaChartLine />,
  },
  {
    title: "Streamline Operations",
    description:
      "Integrate marketing, operations, and digital systems into one efficient and scalable workflow.",
    icon: <FaCogs />,
  },
];

export default function Benefits() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="benefits"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT — ICON SELECTOR */}
        <div className="relative flex md:flex-col justify-center items-center gap-8 md:gap-14">

          {/* Vertical Accent Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent/20" />

          {benefits.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">

              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className={`relative w-20 h-20 flex items-center justify-center rounded-full text-2xl transition-all duration-300
                  ${
                    active === i
                      ? "bg-accent text-white shadow-premium"
                      : "bg-white/60 backdrop-blur-xl text-accent border border-neutral-border"
                  }`}
              >
                {item.icon}

                {/* Glow Pulse for Active */}
                {active === i && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10"
                  />
                )}
              </motion.button>

              {/* Active Indicator */}
              {active === i && (
                <motion.div
                  layoutId="activeIndicator"
                  className="mt-3 w-8 h-1 bg-accent rounded-full"
                />
              )}

            </div>
          ))}
        </div>

        {/* RIGHT — CONTENT */}
        <div>

          {/* SECTION LABEL */}
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            Why a{" "}
            <span className="text-accent">
              Right-Hand VA
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-muted leading-relaxed mt-6 mb-12 max-w-xl">
            Maximize efficiency and accelerate growth through structured
            operational support designed for clarity, execution, and scale.
          </p>

          {/* ACTIVE CARD */}
          <div className="relative min-h-[240px] perspective-[1200px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, rotateX: 10, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full rounded-3xl p-12 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft"
              >
                <h3 className="font-heading text-2xl mb-4 text-primary">
                  {benefits[active].title}
                </h3>

                <p className="text-neutral-muted leading-relaxed">
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
