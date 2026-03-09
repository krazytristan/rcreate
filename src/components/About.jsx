// src/components/About.jsx
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

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
  const [imageIndex, setImageIndex] = useState(0);
  const sectionRef = useRef(null);

  /* PARALLAX */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imageShift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % aboutCards.length);
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? aboutCards.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={aboutCards[active].bg}
            src={aboutCards[active].bg}
            alt="About Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{ y: imageShift }}
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
        </AnimatePresence>

        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 bg-gradient-to-b
          from-neutral-background/95
          via-neutral-background/85
          to-neutral-background"
        />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-accent/15 blur-[160px] rounded-full" />

      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-start">

        {/* LEFT SIDE */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-heading text-[32px] md:text-[42px] lg:text-[56px] mb-8 text-primary leading-tight"
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
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted leading-relaxed max-w-xl mb-12"
          >
            Rcreate Virtual Assistance Services delivers structured operational
            support for founders and service-based businesses. We integrate
            directly into your systems, strengthen workflows, and elevate
            daily execution — so leadership remains focused on long-term growth.
          </motion.p>

          {/* IMAGE SLIDER */}
          <div className="relative w-full max-w-xl">

            <div className="relative overflow-hidden rounded-2xl shadow-premium border border-neutral-border">

              <AnimatePresence mode="wait">
                <motion.img
                  key={imageIndex}
                  src={aboutCards[imageIndex].bg}
                  alt="About Visual"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[300px] object-cover"
                />
              </AnimatePresence>

              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2
                w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl
                border border-neutral-border
                text-primary hover:bg-accent hover:text-white transition"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2
                w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl
                border border-neutral-border
                text-primary hover:bg-accent hover:text-white transition"
              >
                ›
              </button>

            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-6">
              {aboutCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === imageIndex
                      ? "w-8 bg-accent"
                      : "w-3 bg-neutral-muted/40 hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative">

          {/* Timeline line (desktop only) */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-accent/40" />

          <div className="space-y-10 md:space-y-20">

            {aboutCards.map((card, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-center md:text-left cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >

                {/* Circle indicator (desktop only) */}
                <div
                  className={`hidden md:flex relative w-12 h-12 rounded-full items-center justify-center border transition-all duration-300
                  ${
                    active === i
                      ? "bg-accent border-accent shadow-premium"
                      : "bg-white border-accent/40"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300
                    ${active === i ? "bg-white scale-110" : "bg-accent/60"}`}
                  />
                </div>

                {/* Card */}
                <motion.div
                  animate={{
                    scale: active === i ? 1.03 : 1,
                    opacity: active === i ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white/80 backdrop-blur-xl border border-neutral-border rounded-2xl p-8 shadow-soft"
                >
                  <h3 className="font-heading text-[20px] md:text-xl mb-3 text-primary">
                    {card.title}
                  </h3>

                  <p className="text-neutral-muted text-[16px] md:text-sm leading-relaxed">
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