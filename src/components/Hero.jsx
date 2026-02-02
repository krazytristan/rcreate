import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

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

import hero1 from "../assets/Logo.png";
import hero2 from "../assets/images1.jpg";
import hero3 from "../assets/images2.jpg";
import bgVideo from "../assets/hero-bg.mp4";

/* ===========================
   COLOR PALETTE
=========================== */
const COLORS = {
  light: "#FCFAF4",
  green: "#2D5D46",
  cream: "#FFEDD6",
  brown: "#AE7533",
  sage: "#94A591",
};

/* ===========================
   SLIDES CONFIG
=========================== */
const slides = [
  {
    image: hero1,
    title: ["Right-Hand", "Virtual", "Assistant"],
    description:
      "Admin, marketing, systems, and websites — so you can scale without burnout.",
    kenBurns: { scale: [1, 1.12], x: ["0%", "-4%"], y: ["0%", "-3%"] },
  },
  {
    image: hero2,
    title: ["Build", "Systems", "Faster"],
    description:
      "We streamline operations and automate workflows so your business runs itself.",
    kenBurns: { scale: [1, 1.15], x: ["0%", "4%"], y: ["0%", "-2%"] },
  },
  {
    image: hero3,
    title: ["Design", "Launch", "Scale"],
    description:
      "From branding to websites — everything you need to grow with confidence.",
    kenBurns: { scale: [1, 1.1], x: ["0%", "-3%"], y: ["0%", "3%"] },
  },
];

/* ===========================
   TOOLS + ICON MAP
=========================== */
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
  const [modal, setModal] = useState(false);
  const videoRef = useRef(null);
  const progressControls = useAnimation();

  const SLIDE_DURATION = 5000;
  const headlinePalette = [COLORS.cream, COLORS.brown, COLORS.sage];

  /* AUTO SLIDE */
  useEffect(() => {
    progressControls.start({
      width: ["0%", "100%"],
      transition: { duration: SLIDE_DURATION / 1000, ease: "linear" },
    });

    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
      progressControls.start({
        width: ["0%", "100%"],
        transition: { duration: SLIDE_DURATION / 1000, ease: "linear" },
      });
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [progressControls]);

  /* VIDEO */
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    videoRef.current.play();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-4 sm:px-6 lg:px-12">
      {/* VIDEO */}
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

      {/* KEN BURNS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: slides[current].kenBurns.scale,
            x: slides[current].kenBurns.x,
            y: slides[current].kenBurns.y,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* PALETTE OVERLAYS */}
      <div className="absolute inset-0 bg-[#2D5D46]/55" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCFAF4]/30 via-[#2D5D46]/60 to-[#AE7533]/40" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full text-center md:text-left">
        <span
          className="inline-block mb-4 px-4 py-2 rounded-full backdrop-blur text-xs sm:text-sm"
          style={{ backgroundColor: `${COLORS.sage}33`, color: COLORS.light }}
        >
          Trusted Virtual Support for Founders
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          {slides[current].title.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-2"
              style={{ color: headlinePalette[i % 3] }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="mt-4 sm:mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-[#FCFAF4]">
          {slides[current].description}
        </p>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => setModal(true)}
            className="px-8 py-3 rounded-full font-semibold transition"
            style={{ backgroundColor: COLORS.green, color: COLORS.light }}
          >
            Message Us →
          </button>
          <button
            className="px-8 py-3 rounded-full border transition"
            style={{ borderColor: COLORS.cream, color: COLORS.cream }}
          >
            Explore Services
          </button>
        </div>

        {/* TOOLS */}
        <div className="mt-12 overflow-hidden">
          <p className="text-xs uppercase tracking-widest text-[#FFEDD6]/70 mb-4">
            Tools & Platforms We Use
          </p>

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur text-xs sm:text-sm"
                style={{ backgroundColor: `${COLORS.light}1A`, color: COLORS.light }}
              >
                <span style={{ color: COLORS.brown }}>{toolIcons[tool]}</span>
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 z-20"
        animate={progressControls}
        style={{ backgroundColor: headlinePalette[current % 3] }}
      />

      {/* MODAL */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setModal(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 p-6 rounded-3xl w-[92%] sm:w-[500px]"
              style={{ backgroundColor: COLORS.light }}
              initial={{ scale: 0.85, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, x: "-50%", y: "-50%" }}
            >
              <h3
                className="text-xl font-medium mb-4"
                style={{ color: COLORS.green }}
              >
                Let’s Work Together
              </h3>
              <form className="flex flex-col gap-3">
                <input className="p-3 rounded-xl border" placeholder="Name" />
                <input className="p-3 rounded-xl border" placeholder="Email" />
                <textarea className="p-3 rounded-xl border" placeholder="Message" />
                <button
                  className="py-3 rounded-full text-white font-medium"
                  style={{ backgroundColor: COLORS.green }}
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
