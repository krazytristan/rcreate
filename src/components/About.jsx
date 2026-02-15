// src/components/About.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const aboutCards = [
  {
    title: "Right-Hand Support",
    desc: "Dependable virtual assistants who work as an extension of your business—handling daily tasks so you can focus on leadership and growth.",
    icon: "🤝",
  },
  {
    title: "Done-For-You Operations",
    desc: "From admin work and client communication to marketing and website creation, our trained VAs keep operations smooth.",
    icon: "⚙️",
  },
  {
    title: "Long-Term Partnership",
    desc: "We build lasting support partnerships that ensure consistency, efficiency, and a strong online presence 24/7.",
    icon: "📈",
  },
];

const backgroundImages = [bg1, bg2, bg3];

export default function About() {
  const [currentBg, setCurrentBg] = useState(0);

  /* AUTO BACKGROUND SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* BACKGROUND CROSSFADE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF4]/90 via-[#FCFAF4]/85 to-[#FCFAF4]/95 backdrop-blur-[2px]" />

      {/* LUXURY GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#AE7533]/20 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46]">
            About{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              Rcreate Virtual Assistance Services
            </span>
          </h2>

          <p className="font-body text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#5E6F66]">
            At Rcreate Virtual Assistance Services, we provide right-hand virtual
            assistance for founders and home service CEOs. Our trained virtual
            assistants manage your admin, operations, client communication,
            marketing, and website or landing page creation—so you can focus on
            growth, strategy, and scaling your business with confidence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-12">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-10 text-center bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full text-3xl shadow-md bg-gradient-to-tr from-[#FCFAF4] to-[#FFE8C4] text-[#AE7533]">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-heading text-2xl mb-4 text-[#2D5D46]">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-body text-base leading-relaxed text-[#5E6F66]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
