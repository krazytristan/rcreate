// src/components/Team.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import team1 from "../assets/1.jpg";
import team2 from "../assets/2.jpg";
import team3 from "../assets/3.jpg";
import exec1 from "../assets/2.jpg";
import exec2 from "../assets/2.jpg";
import exec3 from "../assets/2.jpg";
import exec4 from "../assets/2.jpg";
import exec5 from "../assets/2.jpg";
import exec6 from "../assets/2.jpg";
import dev1 from "../assets/3.jpg";
import dev2 from "../assets/3.jpg";
import dev3 from "../assets/3.jpg";
import dev4 from "../assets/3.jpg";
import dev5 from "../assets/3.jpg";
import dev6 from "../assets/3.jpg";
import dev7 from "../assets/3.jpg";
import dev8 from "../assets/3.jpg";
import dev9 from "../assets/3.jpg";

const teamCategories = [
  {
    title: "Internal Team",
    description: "Leads strategic operations, client systems, and executive-level support.",
    image: team1,
    note: "CEO, Executive Assistant, Operations Manager",
    expandable: false,
  },
  {
    title: "Executive Partners",
    description: "Focused on workflow optimization, client success, and leadership guidance.",
    image: team2,
    expandable: true,
    photos: [
      { src: exec1, name: "Partner 1" },
      { src: exec2, name: "Partner 2" },
      { src: exec3, name: "Partner 3" },
      { src: exec4, name: "Partner 4" },
      { src: exec5, name: "Partner 5" },
      { src: exec6, name: "Partner 6" },
    ],
  },
  {
    title: "Technical & Web Developers",
    description: "Builds automation workflows, manages websites, funnels, and landing pages.",
    image: team3,
    expandable: true,
    photos: [
      { src: dev1, name: "Developer 1" },
      { src: dev2, name: "Developer 2" },
      { src: dev3, name: "Developer 3" },
      { src: dev4, name: "Developer 4" },
      { src: dev5, name: "Developer 5" },
      { src: dev6, name: "Developer 6" },
      { src: dev7, name: "Developer 7" },
      { src: dev8, name: "Developer 8" },
      { src: dev9, name: "Developer 9" },
    ],
  },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative pt-12 md:pt-20 lg:pt-28 pb-20 px-6 bg-neutral-background overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] text-primary leading-tight">
          How It <span className="text-accent">Started</span>
        </h2>
        <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted mt-6 leading-relaxed">
          Behind every successful partnership is a team dedicated to
          organization, execution, and operational support.
        </p>
      </div>

      {/* 3 Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamCategories.map((category, index) => (
          <motion.div
            key={index}
            layoutId={!isMobile && category.expandable ? `card-${index}` : undefined}
            className={`rounded-3xl bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft overflow-hidden cursor-pointer ${
              category.expandable ? "hover:shadow-lg transition" : ""
            }`}
            onClick={() => category.expandable && setActiveIndex(index)}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-heading text-xl text-primary mb-2">{category.title}</h3>
              <p className="text-neutral-muted text-sm leading-relaxed mb-2">{category.description}</p>
              {category.note && (
                <p className="text-accent text-sm font-medium mt-4">{category.note}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hire Our Experts Button */}
      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Hire Our Experts
        </a>
      </div>

      {/* Expandable Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            onClick={() => setActiveIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <motion.div
              layoutId={!isMobile ? `card-${activeIndex}` : undefined}
              className={`bg-white rounded-xl w-full ${isMobile ? "max-w-md" : "max-w-6xl"} cursor-auto relative`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: isMobile ? 0.85 : 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }}
              exit={{ scale: isMobile ? 0.85 : 1, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 font-bold text-xl z-10"
                onClick={() => setActiveIndex(null)}
              >
                &times;
              </button>

              {/* Scrollable content */}
              <div
                className="overflow-y-auto p-6"
                style={{
                  maxHeight: isMobile
                    ? "calc(100vh - 64px - 72px)" // 64px top + 72px estimated bottom navbar height
                    : "calc(100vh - 64px - 32px)", // desktop
                }}
              >
                {teamCategories[activeIndex].photos ? (
                  <div className={`grid gap-4 ${isMobile ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"}`}>
                    {teamCategories[activeIndex].photos.map((photo, i) => (
                      <div key={i} className="text-center">
                        <img
                          src={photo.src}
                          alt={photo.name}
                          className={`w-full ${isMobile ? "h-32" : "h-40"} object-cover rounded`}
                        />
                        <p className="text-sm font-medium mt-1">{photo.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={teamCategories[activeIndex].image}
                      alt={teamCategories[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl text-primary mb-2">
                    {teamCategories[activeIndex].title}
                  </h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">
                    {teamCategories[activeIndex].description}
                  </p>
                  {teamCategories[activeIndex].note && (
                    <p className="text-accent text-sm font-medium mt-4">
                      {teamCategories[activeIndex].note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}