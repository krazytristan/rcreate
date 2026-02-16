// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

/* ICONS */
import {
  FaGoogle,
  FaFacebook,
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

/* TOOL MAP */
const toolIcons = {
  HighLevel: <FaChartLine />,
  Squarespace: <SiSquarespace />,
  Zapier: <SiZapier />,
  ClickUp: <SiClickup />,
  Notion: <SiNotion />,
  Canva: <SiCanva />,
  Meta: <FaFacebook />,
  Mailchimp: <SiMailchimp />,
  "Zoho CRM": <SiZoho />,
  Trello: <SiTrello />,
  Asana: <SiAsana />,
  Microsoft: <FaMicrosoft />,
  Buffer: <SiBuffer />,
  Hootsuite: <SiHootsuite />,
  Google: <FaGoogle />,
  WordPress: <FaWordpress />,
  Wix: <SiWix />,
};

const tools = Object.keys(toolIcons);
const images = [hero1, hero2, hero3];

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
      className="relative min-h-screen flex items-center bg-primary text-white overflow-hidden px-6"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-neutral-dark/95" />

      {/* Accent Glow */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-accent/20 blur-[140px] rounded-full" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none
        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]
        [background-size:3px_3px]"
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* SECTION NUMBER */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-white/50"
          >
            01 / Hero
          </motion.span>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 mb-8 inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-md text-xs tracking-[0.25em] uppercase border border-white/10"
          >
            9+ Years of Operational Excellence
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Executive-Level
            <br />
            Virtual Support
            <br />
            <span className="text-accent">
              That Scales With You
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-lg text-white/80 max-w-xl leading-relaxed"
          >
            We streamline operations, automate workflows, and manage
            daily execution so you can focus on leadership,
            innovation, and strategic expansion.
          </motion.p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-3 rounded-full bg-accent text-white font-medium shadow-premium hover:scale-105 transition duration-300"
            >
              Book Consultation
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="px-10 py-3 rounded-full border border-white/30 hover:bg-white hover:text-primary transition duration-300"
            >
              Our Services
            </button>
          </div>

          {/* STATS */}
          <div className="mt-16 flex gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 shadow-soft">
              <h3 className="text-3xl font-semibold text-accent">
                <CountUp end={9} duration={2} />+
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-muted mt-1">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 shadow-soft">
              <h3 className="text-3xl font-semibold text-accent">
                <CountUp end={300} duration={2} separator="," />+
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-muted mt-1">
                Businesses Served
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL STACK */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative w-[420px] h-[420px]">
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Virtual Assistant"
                className={`absolute rounded-3xl shadow-premium border border-white/10 object-cover
                  ${i === 0 ? "w-80 top-0 left-0 z-30" : ""}
                  ${i === 1 ? "w-72 top-20 right-0 z-20" : ""}
                  ${i === 2 ? "w-64 bottom-0 left-20 z-10" : ""}
                `}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* TOOL STRIP */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-70">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-white/60">
              <span className="text-accent text-lg">
                {toolIcons[tool]}
              </span>
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
