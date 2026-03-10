import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? benefits.length - 1 : prev - 1
    );
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % benefits.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="benefits"
      className="relative pt-8 py-40 px-6 bg-neutral-background overflow-hidden"
    >

      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT — ICON SELECTOR (DESKTOP ONLY) */}
        <div className="hidden lg:flex relative flex-col justify-center items-center gap-14">

          {/* Vertical Accent Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent/20" />

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

                {active === i && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10"
                  />
                )}

              </motion.button>

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

          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] mt-6 text-primary leading-tight">
            Why a <span className="text-accent">Right-Hand VA</span>
          </h2>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted leading-relaxed mt-6 mb-12 max-w-xl">
            Maximize efficiency and accelerate growth through structured
            operational support designed for clarity, execution, and scale.
          </p>

          {/* ACTIVE CARD */}
          <div className="relative min-h-[240px] overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.div
                key={active}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) nextSlide();
                  if (info.offset.x > 80) prevSlide();
                }}
                initial={{ opacity: 0, rotateX: 10, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full rounded-3xl p-12 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft cursor-grab"
              >

                <h3 className="font-heading text-[20px] md:text-[24px] lg:text-[28px] mb-4 text-primary">
                  {benefits[active].title}
                </h3>

                <p className="text-neutral-muted leading-relaxed">
                  {benefits[active].description}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* MOBILE DOTS */}
          <div className="flex justify-center items-center gap-2 mt-6 lg:hidden">
            {benefits.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 bg-accent"
                    : "w-2 bg-neutral-border"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}