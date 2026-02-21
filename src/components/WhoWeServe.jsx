import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBriefcase, FaTools, FaUsers } from "react-icons/fa";

const audiences = [
  {
    title: "Home Service Businesses",
    description:
      "Cleaning, landscaping, junk hauling, and construction companies that need reliable back-office, marketing, and operational support.",
    icon: <FaTools />,
  },
  {
    title: "Founders & CEOs",
    description:
      "Busy founders who require a dependable right-hand virtual assistant to manage daily execution while focusing on growth and strategy.",
    icon: <FaBriefcase />,
  },
  {
    title: "Service-Based Agencies",
    description:
      "Agencies and small business owners seeking scalable, structured support for admin, marketing, and digital presence.",
    icon: <FaUsers />,
  },
];

export default function WhoWeServe() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="serve"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            Who{" "}
            <span className="text-accent">
              We Serve
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-muted leading-relaxed max-w-xl mt-6 mb-12">
            We partner with founders and service-based businesses seeking
            structured, professional support that enables clarity, efficiency,
            and long-term growth.
          </p>

          {/* ACTIVE CARD */}
          <div className="relative min-h-[220px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-10 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft"
              >
                <h3 className="font-heading text-2xl mb-4 text-primary">
                  {audiences[active].title}
                </h3>

                <p className="text-neutral-muted leading-relaxed">
                  {audiences[active].description}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>

        {/* RIGHT COLUMN — ICON SELECTOR */}
        <div className="relative flex md:flex-col justify-center items-center gap-12">

          {/* Vertical Accent Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent/20" />

          {audiences.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className={`relative w-24 h-24 flex items-center justify-center rounded-full text-3xl transition-all duration-300
                  ${
                    active === i
                      ? "bg-accent text-white shadow-premium"
                      : "bg-white/60 backdrop-blur-xl text-accent border border-neutral-border"
                  }`}
              >
                {item.icon}

                {/* Active Glow */}
                {active === i && (
                  <motion.div
                    layoutId="serveGlow"
                    className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10"
                  />
                )}
              </motion.button>

              {/* Active Indicator */}
              {active === i && (
                <motion.div
                  layoutId="serveIndicator"
                  className="mt-3 w-8 h-1 bg-accent rounded-full"
                />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
