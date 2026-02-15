// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
import bgVideo from "../assets/hero-bg.mp4";
import hero1 from "../assets/va1.jpg";
import hero2 from "../assets/va2.jpg";
import hero3 from "../assets/va3.jpg";
import hero4 from "../assets/va4.jpg";
import hero5 from "../assets/va5.jpg";

/* TOOL MAP */
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
const images = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    videoRef.current.play().catch(() => {});
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 scroll-mt-32 font-body"
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5D46]/95 via-[#2D5D46]/90 to-black/90" />

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/20 blur-[180px] rounded-full" />

      <div className="relative z-20 max-w-6xl mx-auto w-full">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block px-5 py-2 rounded-full bg-[#FFEDD6]/10 backdrop-blur-md text-sm text-[#FFEDD6] border border-[#FFEDD6]/30 tracking-widest uppercase"
        >
          9+ Years Supporting Growing Businesses
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#FCFAF4] max-w-4xl"
        >
          Reliable Virtual Assistants
          <br />
          <span className="bg-gradient-to-r from-[#AE7533] via-[#FFEDD6] to-[#94A591] bg-clip-text text-transparent">
            for Growing Businesses
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-lg md:text-xl text-[#FFEDD6] max-w-2xl leading-relaxed font-body"
        >
          Save time, streamline operations, and scale confidently with
          experienced virtual assistants tailored specifically to your
          business goals.
        </motion.p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-5 font-body">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-3 rounded-full bg-[#AE7533] text-[#FCFAF4] font-medium shadow-xl hover:bg-[#c1843d] transition-all duration-300"
          >
            Get Started →
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="px-10 py-3 rounded-full border border-[#FFEDD6] text-[#FFEDD6] hover:bg-[#FFEDD6] hover:text-[#2D5D46] transition-all duration-300"
          >
            Explore Services
          </button>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 sm:flex gap-14 font-body">
          <div>
            <h3 className="text-4xl font-semibold text-[#AE7533]">
              <CountUp end={9} duration={2} />+
            </h3>
            <p className="text-sm text-[#94A591] tracking-wide uppercase">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-[#AE7533]">
              <CountUp end={300} duration={2} separator="," />+
            </h3>
            <p className="text-sm text-[#94A591] tracking-wide uppercase">
              Businesses Served
            </p>
          </div>
        </div>

        {/* TOOLS MARQUEE */}
        <div className="mt-16 overflow-hidden font-body">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFEDD6]/10 backdrop-blur-md text-sm text-[#FCFAF4] border border-[#FFEDD6]/20 whitespace-nowrap"
              >
                <span className="text-[#AE7533] text-lg">
                  {toolIcons[tool]}
                </span>
                {tool}
              </div>
            ))}
          </motion.div>
        </div>

        {/* IMAGE CAROUSEL */}
        <div className="relative mt-20 overflow-hidden [perspective:1200px]">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {[...images, ...images].map((img, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.08,
                }}
                className="relative w-72 md:w-80 h-44 md:h-52 rounded-3xl overflow-hidden bg-[#FCFAF4]/10 border border-[#FFEDD6]/20 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FCFAF4]/10 to-transparent pointer-events-none" />
                <img
                  src={img}
                  alt="Virtual Assistant Showcase"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
