import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

import team1 from "../assets/1.jpg"; // card image
import team2 from "../assets/2.jpg"; // card image
import team3 from "../assets/3.jpg"; // card image

import team1Modal from "../assets/VA-Founder-Regine Candido.jpg"; // modal image
import team2Modal from "../assets/VA-Co Founder.jpg"; // modal image

import exec1 from "../assets/VA-Erika Antoinette Paala.jpg";
import exec2 from "../assets/VA-Bernalyn Malabanan.jpg";
import exec3 from "../assets/VA-Gennevie Glinogo.jpg";
import exec4 from "../assets/3.jpg";
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

import TeamModal from "./TeamModal";

const teamCategories = [
  {
    title: "Internal Team",
    description:
      "Leads strategic operations, client systems, and executive-level support.",
    image: team1, // card image
    expandable: true,
    leaders: [
      {
        src: team1, // fallback
        modalImage: team1Modal, // modal image
        name: "Regine Candido",
        role: "Founder and Chief Executive Officer",
        bio: "Regine is the founder of the agency and the driving force behind its vision of helping businesses grow through reliable and strategic remote support.",
      },
      {
        src: team2, // fallback
        modalImage: team2Modal, // modal image
        name: "Arnaldo Arias Jr.",
        role: "Co Founder and Finance Manager",
        bio: "Arnaldo oversees the financial management and operational structure of the agency and ensures internal processes remain organized and sustainable.",
      },
    ],
  },
  {
    title: "Executive Partners",
    description:
      "Focused on workflow optimization, client success, and leadership guidance.",
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
    description:
      "Builds automation workflows, manages websites, funnels, and landing pages.",
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

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamCategories.map((category, index) => (
          <motion.div
            key={index}
            layoutId={!isMobile ? `card-${index}` : undefined}
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
              <h3 className="font-heading text-xl text-primary mb-2">
                {category.title}
              </h3>
              <p className="text-neutral-muted text-sm leading-relaxed mb-2">
                {category.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hire Button */}
      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Hire Our Experts
        </a>
      </div>

      {/* Modal */}
      {ReactDOM.createPortal(
        <TeamModal
          activeCategory={activeIndex !== null ? teamCategories[activeIndex] : null}
          onClose={() => setActiveIndex(null)}
          isMobile={isMobile}
        />,
        document.body
      )}
    </section>
  );
}