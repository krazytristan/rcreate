// src/components/Hero.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

/* ICONS */
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaWordpress,
  FaMicrosoft,
  FaChartLine,
} from "react-icons/fa";
import {
  SiZapier,
  SiNotion,
  SiCanva,
  SiClickup,
  SiSquarespace,
  SiMailchimp,
  SiZoho,
  SiTrello,
  SiAsana,
  SiBuffer,
  SiHootsuite,
  SiWix,
} from "react-icons/si";

/* ASSETS */
import hero1 from "../assets/Logo.png";
import hero2 from "../assets/images1.jpg";
import hero3 from "../assets/images2.jpg";
import bgVideo from "../assets/hero-bg.mp4";

/* SLIDES */
const slides = [
  { image: hero1 },
  { image: hero2 },
  { image: hero3 },
];

/* TOOLS */
const toolIcons = {
  HighLevel: <FaChartLine />,
  Squarespace: <SiSquarespace />,
  Zapier: <SiZapier />,
  ClickUp: <SiClickup />,
  Notion: <SiNotion />,
  Canva: <SiCanva />,
  "Meta (Facebook & Instagram)": <FaFacebook />,
  Mailchimp: <SiMailchimp />,
  "Zoho CRM": <SiZoho />,
  Trello: <SiTrello />,
  Asana: <SiAsana />,
  Microsoft: <FaMicrosoft />,
  Buffer: <SiBuffer />,
  Hootsuite: <SiHootsuite />,
  "Google Workspace": <FaGoogle />,
  "Creator Studio": <FaInstagram />,
  WordPress: <FaWordpress />,
  Wix: <SiWix />,
};

const tools = Object.keys(toolIcons);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const SLIDE_DURATION = 7000;

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  /* SAFE VIDEO AUTOPLAY */
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    videoRef.current.play().catch(() => {});
  }, []);

  /* SCROLL HANDLER */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 scroll-mt-32"
    >
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* IMAGE CROSSFADE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2d]/90 via-[#2D5D46]/85 to-black/80" />

      {/* SOFT LUXURY GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#AE7533]/20 blur-[180px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto w-full">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm text-white tracking-wide border border-white/20"
        >
          9+ Years Supporting Growing Businesses
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl leading-tight text-white tracking-tight max-w-4xl"
        >
          Reliable Virtual Assistants for{" "}
          <span className="bg-gradient-to-r from-[#AE7533] via-[#FFEDD6] to-[#94A591] bg-clip-text text-transparent">
            Growing Businesses
          </span>
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 font-body text-lg md:text-xl text-white/85 max-w-2xl"
        >
          We provide trained, dependable virtual assistants to help business
          owners save time, streamline operations, and scale with confidence.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {/* GET STARTED */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full bg-[#AE7533] text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            Get Started →
          </button>

          {/* EXPLORE SERVICES */}
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 rounded-full border border-white/40 text-white backdrop-blur-md hover:bg-white hover:text-[#2D5D46] transition duration-300"
          >
            Explore Services
          </button>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:flex gap-12 text-white"
        >
          <div>
            <h3 className="font-heading text-3xl">
              <CountUp end={9} duration={2} />+
            </h3>
            <p className="text-sm text-white/70">Years Experience</p>
          </div>

          <div>
            <h3 className="font-heading text-3xl">
              <CountUp end={300} duration={2} separator="," />+
            </h3>
            <p className="text-sm text-white/70">Businesses Served</p>
          </div>
        </motion.div>

        {/* TOOLS CAROUSEL */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm text-white whitespace-nowrap"
              >
                <span className="text-[#AE7533] text-lg">
                  {toolIcons[tool]}
                </span>
                {tool}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
