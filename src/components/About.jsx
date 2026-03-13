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

  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imageShift = useTransform(scrollYProgress, [0, 1], [0, -60]);

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
      className="relative py-20 md:py-32 lg:py-40 px-5 sm:px-6 bg-neutral-background overflow-hidden"
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
            transition={{ duration: 1 }}
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

        <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-accent/15 blur-[160px] rounded-full" />

      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* LEFT SIDE */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-heading text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] mb-6 md:mb-8 text-primary leading-tight"
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
            className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted leading-relaxed max-w-xl mb-10 md:mb-12"
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
                  transition={{ duration: 0.5 }}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                />
              </AnimatePresence>

              {/* PREV */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2
                w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-xl
                border border-neutral-border
                text-primary hover:bg-accent hover:text-white transition"
              >
                ‹
              </button>

              {/* NEXT */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2
                w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-xl
                border border-neutral-border
                text-primary hover:bg-accent hover:text-white transition"
              >
                ›
              </button>

            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-5 md:mt-6">
              {aboutCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    i === imageIndex
                      ? "w-6 sm:w-8 bg-accent"
                      : "w-2 sm:w-3 bg-neutral-muted/40 hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative">

          {/* Timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-accent/40" />

          <div className="space-y-8 md:space-y-16">

            {aboutCards.map((card, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10 text-center md:text-left cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >

                {/* Circle indicator */}
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
                    scale: active === i ? 1.02 : 1,
                    opacity: active === i ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white/80 backdrop-blur-xl border border-neutral-border rounded-2xl p-6 md:p-8 shadow-soft"
                >
                  <h3 className="font-heading text-[18px] md:text-[20px] mb-3 text-primary">
                    {card.title}
                  </h3>

                  <p className="text-neutral-muted text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
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