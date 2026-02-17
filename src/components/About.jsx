// src/components/About.jsx
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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
  const sectionRef = useRef(null);

  /* 🔥 Parallax Scroll Effect */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imageShift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      {/* ================= CINEMATIC BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={aboutCards[active].bg}
            src={aboutCards[active].bg}
            alt="About Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ y: imageShift }}
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
        </AnimatePresence>

        {/* 🌫 Gradient Mask Instead of Solid Overlay */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 bg-gradient-to-b
            from-neutral-background/95
            via-neutral-background/85
            to-neutral-background"
        />

        {/* Accent Glow */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-accent/15 blur-[160px] rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
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

          {/* Accent Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/40" />

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
                {/* Marker */}
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
                        active === i ? "bg-white scale-110" : "bg-accent/60"
                      }`}
                  />
                </div>

                {/* Glass Card */}
                <motion.div
                  animate={{
                    scale: active === i ? 1.03 : 1,
                    opacity: active === i ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-white/80 backdrop-blur-xl border border-neutral-border rounded-2xl p-8 shadow-soft"
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
