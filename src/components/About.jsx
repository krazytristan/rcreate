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
    bg: bg1,
  },
  {
    title: "Done-For-You Operations",
    desc: "From admin work and client communication to marketing and website creation, our trained VAs keep operations smooth.",
    icon: "⚙️",
    bg: bg2,
  },
  {
    title: "Long-Term Partnership",
    desc: "We build lasting support partnerships that ensure consistency, efficiency, and a strong online presence 24/7.",
    icon: "📈",
    bg: bg3,
  },
];

export default function About() {
  const [active, setActive] = useState(null);
  const [bgImage, setBgImage] = useState(bg1);

  const isMobile = () => window.innerWidth < 768;

  const handleInteraction = (index) => {
    if (isMobile()) {
      setActive(active === index ? null : index);
      setBgImage(aboutCards[index].bg);
    }
  };

  const handleHover = (index) => {
    if (!isMobile()) {
      setActive(index);
      setBgImage(aboutCards[index].bg);
    }
  };

  const handleLeave = () => {
    if (!isMobile()) {
      setActive(null);
    }
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND IMAGE (Animated on Active) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FCFAF4]/95 backdrop-blur-sm" />

      <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* LEFT TEXT */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-[#2D5D46]">
            About{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              Rcreate Virtual Assistance Services
            </span>
          </h2>

          <p className="text-lg text-[#5E6F66] leading-relaxed">
            We provide right-hand virtual assistance for founders and home
            service CEOs. Our trained VAs manage admin, operations,
            communication, marketing, and website creation so you can focus on growth.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Vertical Gold Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#AE7533]/40" />

          <div className="space-y-16">

            {aboutCards.map((card, i) => (
              <div
                key={i}
                className={`flex items-start gap-10 relative ${
                  i % 2 !== 0 ? "ml-6" : ""
                }`} // staggered spacing
              >

                {/* ICON */}
                <motion.div
                  onClick={() => handleInteraction(i)}
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={handleLeave}
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl cursor-pointer transition-all duration-300
                    ${
                      active === i
                        ? "bg-[#AE7533] text-white shadow-xl"
                        : "bg-white text-[#AE7533] border border-[#AE7533]/30"
                    }`}
                >
                  {card.icon}
                </motion.div>

                {/* CONTENT */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-lg"
                    >
                      <h3 className="font-heading text-xl mb-2 text-[#2D5D46]">
                        {card.title}
                      </h3>
                      <p className="text-[#5E6F66] text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
