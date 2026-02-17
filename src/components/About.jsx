import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const aboutCards = [
  {
    title: "Right-Hand Executive Support",
    desc: "Structured virtual assistants who operate as an extension of your leadership team — managing daily execution while you focus on growth strategy.",
    bg: bg1,
  },
  {
    title: "Done-For-You Operational Systems",
    desc: "From client communication and admin to marketing systems and digital assets, we streamline and optimize backend processes.",
    bg: bg2,
  },
  {
    title: "Long-Term Strategic Partnership",
    desc: "We build consistent, scalable partnerships that strengthen efficiency, brand presence, and operational stability.",
    bg: bg3,
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="about"
      className="relative py-36 px-6 bg-neutral-background overflow-hidden"
    >
      {/* 🔥 BACKGROUND IMAGE LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={aboutCards[active].bg}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutCards[active].bg}
            alt="About Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 🔥 DARK OVERLAY (Adjusted so image shows clearly) */}
      <div className="absolute inset-0 bg-neutral-background/85 backdrop-blur-[2px]" />

      {/* Accent Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-start">

        {/* LEFT SIDE */}
        <div>
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
            03 / About
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mt-6 mb-10 text-primary leading-tight"
          >
            Built to Support{" "}
            <span className="text-accent">
              Visionary Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-muted leading-relaxed max-w-xl"
          >
            Rcreate Virtual Assistance Services delivers structured operational
            support for founders and service-based businesses. We integrate
            directly into your systems, strengthen workflows, and elevate
            daily execution — so leadership remains focused on long-term growth.
          </motion.p>
        </div>

        {/* RIGHT SIDE — TIMELINE */}
        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/30" />

          <div className="space-y-20">
            {aboutCards.map((card, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-10 cursor-pointer group"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300
                  ${
                    active === i
                      ? "bg-accent border-accent shadow-premium"
                      : "bg-white border-accent/40"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300
                      ${
                        active === i ? "bg-white scale-110" : "bg-accent/50"
                      }`}
                  />
                </div>

                <motion.div
                  animate={{
                    scale: active === i ? 1.03 : 1,
                    opacity: active === i ? 1 : 0.75,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-white/85 backdrop-blur-xl border border-neutral-border rounded-2xl p-8 shadow-soft"
                >
                  <h3 className="font-heading text-xl mb-3 text-primary">
                    {card.title}
                  </h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
