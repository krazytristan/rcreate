// src/components/About.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import background images from assets
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

  // Cycle background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#FCFAF4]/70 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        {/* HEADER */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#2D5D46]">
            About <span className="text-[#AE7533]">Rcreate Virtual Assistance Services</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#94A591]">
            At Rcreate Virtual Assistance Services, we provide right-hand virtual
            assistance for founders and home service CEOs. Our trained virtual
            assistants manage your admin, operations, client communication,
            marketing, and website or landing page creation—so you can focus on
            growth, strategy, and scaling your business with confidence.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {aboutCards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-8 text-center shadow-lg bg-[#FFEDD6] relative z-20 transform transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* ICON */}
              <div
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full text-3xl shadow-md bg-gradient-to-tr from-[#FCFAF4] to-[#FFE8C4] text-[#AE7533]"
                aria-label={`${card.title} icon`}
              >
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#2D5D46]">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-base leading-relaxed text-[#2D5D46CC]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
