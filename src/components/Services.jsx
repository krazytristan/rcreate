// src/components/Services.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bg1 from "../assets/back1.jpg";
import bg2 from "../assets/back2.jpg";
import bg3 from "../assets/back3.jpg";
import bg4 from "../assets/back4.jpg";

const services = [
  {
    title: "Executive Support",
    bg: bg1,
    content: [
      "Calendar & email management",
      "Inbox organization & follow-ups",
      "Meeting coordination",
      "Documentation & file organization",
      "Travel arrangements",
      "Executive communications",
    ],
    closing: "We become your structured right-hand support system.",
  },
  {
    title: "Operations & Systems Management",
    bg: bg2,
    content: [
      "CRM setup and management",
      "SOP creation & documentation",
      "Workflow optimization",
      "Project management support",
      "Task tracking & accountability",
      "Team & vendor coordination",
    ],
    closing:
      "We transform scattered processes into streamlined systems.",
  },
  {
    title: "Marketing & Online Presence Support",
    bg: bg3,
    content: [
      "Email marketing management",
      "Social media content creation & scheduling",
      "Canva graphics & branded materials",
      "Funnel setup & automation support",
      "Lead tracking & database management",
    ],
    closing:
      "From backend organization to front-facing visibility — we manage both.",
  },
  {
    title: "Website Creation & Development",
    bg: bg4,
    content: [
      "Professional, mobile-friendly websites",
      "Conversion-focused landing pages",
      "Strategic layouts designed for lead generation",
      "Clean, modern designs aligned with your brand",
      "Website updates and ongoing maintenance",
    ],
    closing:
      "We focus on structure, clarity, and user experience — ensuring your website drives action.",
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="services"
      className="relative py-36 px-6 overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={services[index].bg}
            src={services[index].bg}
            alt="Service Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Mask (like About.jsx) */}
        <div
          className="absolute inset-0 bg-gradient-to-b
            from-neutral-background/95
            via-neutral-background/80
            to-neutral-background"
        />

        {/* Accent Glow */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-accent/15 blur-[160px] rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-5xl mx-auto text-center mb-16 text-primary">
        <h2 className="font-heading text-4xl md:text-6xl">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="text-neutral-muted mt-6 max-w-2xl mx-auto">
          Structured support designed to simplify operations and scale your
          business with clarity and confidence.
        </p>
      </div>

      {/* ================= CARD SLIDER ================= */}
      <div className="relative z-20 max-w-4xl mx-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl p-10 bg-white/85 backdrop-blur-xl border border-neutral-border shadow-soft text-left"
          >
            <h3 className="font-heading text-2xl text-primary mb-6">
              {services[index].title}
            </h3>

            <ul className="space-y-3 text-neutral-muted text-sm md:text-base mb-6">
              {services[index].content.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <p className="text-primary font-medium">
              {services[index].closing}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ================= PAGINATION ================= */}
        <div className="flex flex-col items-center mt-10 space-y-6">

          <div className="text-primary font-semibold">
            <span className="text-accent text-xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-neutral-muted">
              {" "}
              / {String(services.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i
                    ? "bg-accent w-6"
                    : "bg-neutral-border w-2"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-6">
            <button
              onClick={prev}
              className="px-6 py-3 rounded-full bg-white border border-neutral-border text-primary hover:bg-accent hover:text-white transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="px-6 py-3 rounded-full bg-accent text-white hover:opacity-90 transition"
            >
              <FaChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}