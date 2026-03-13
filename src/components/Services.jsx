// src/components/Services.jsx
import { useState, useEffect } from "react";
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
    closing: "We transform scattered processes into streamlined systems.",
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
    button: {
      label: "Visit Website",
      url: "https://horizon-it.vercel.app",
    },
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section
      id="services"
      className="relative pt-12 md:pt-20 lg:pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={services[index].bg}
            src={services[index].bg}
            alt="Service Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 bg-gradient-to-b
           from-neutral-background/95
           via-neutral-background/80
           to-neutral-background"
        />
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-accent/15 blur-[160px] rounded-full" />
      </div>

      {/* HEADER */}
      <div className="relative z-20 max-w-5xl mx-auto text-center mb-20 text-primary">
        <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px]">
          Our <span className="text-accent">Services</span>
        </h2>

        <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted mt-6 max-w-2xl mx-auto">
          Structured support designed to simplify operations and scale your
          business with clarity and confidence.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl p-12 bg-white/85 backdrop-blur-xl border border-neutral-border shadow-soft text-left"
          >
            <h3 className="font-heading text-[20px] md:text-[24px] lg:text-[28px] text-primary mb-6">
              {services[index].title}
            </h3>

            <ul className="space-y-3 text-neutral-muted text-[16px]">
              {services[index].content.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <p className="text-primary font-medium mt-6">
              {services[index].closing}
            </p>

            {/* BUTTON FOR WEBSITE SERVICE */}
            {services[index].button && (
              <a
                href={services[index].button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-4 bg-accent text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                {services[index].button.label}
              </a>
            )}
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-12">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-neutral-border text-primary hover:bg-accent hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i ? "bg-accent w-8" : "bg-neutral-border w-3"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-white hover:opacity-90 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* SEE HOW WE CAN HELP BUTTON */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-accent text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            See How We Can Help
          </button>
        </div>
      </div>
    </section>
  );
}