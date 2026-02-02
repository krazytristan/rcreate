import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

/* ICONS (SAFE ONLY) */
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
  CapCut: <FaChartLine />,
  Canva: <SiCanva />,
  "Meta (Facebook & Instagram)": <FaFacebook />,
  ActiveCampaign: <FaChartLine />,
  Mailchimp: <SiMailchimp />,
  "Zoho CRM": <SiZoho />,
  Trello: <SiTrello />,
  "Monday.com": <FaChartLine />,
  Asana: <SiAsana />,
  Dubsado: <FaChartLine />,
  Microsoft: <FaMicrosoft />,
  Buffer: <SiBuffer />,
  Later: <FaChartLine />,
  Hootsuite: <SiHootsuite />,
  "Google Workspace": <FaGoogle />,
  "Creator Studio": <FaInstagram />,
  Kartra: <FaChartLine />,
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
  const headlinePalette = ["#FFEDD6", "#AE7533", "#2D5D46"];

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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center px-4 sm:px-6 md:px-12"
    >
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

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-[#2D5D46]/60 to-[#AE7533]/40" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto text-center md:text-left">
        <span className="inline-block mb-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white">
          Trusted Virtual Support for Founders
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
          {slides[current].title.map((w, i) => (
            <span
              key={i}
              style={{ color: headlinePalette[i % 3] }}
              className="mr-2 inline-block"
            >
              {w}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-white/90 max-w-xl mx-auto md:mx-0">
          {slides[current].description}
        </p>

        {/* CTA */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center md:justify-start">
          <button
            onClick={() => setModal(true)}
            className="px-10 py-4 rounded-full bg-[#2D5D46] text-white font-semibold hover:bg-[#3C6B54]"
          >
            Message Us →
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="px-10 py-4 rounded-full border border-white/70 text-white hover:bg-white/10"
          >
            Explore Services
          </button>
        </div>

        {/* TOOLS CAROUSEL */}
        <div className="mt-14 overflow-hidden">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4">
            Tools & Platforms We Use
          </p>

          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium"
              >
                <span className="text-lg text-[#AE7533]">
                  {toolIcons[tool]}
                </span>
                <span>{tool}</span>
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
              className="fixed top-1/2 left-1/2 z-50 bg-[#FFEDD6] p-8 rounded-3xl w-[90%] md:w-[500px]"
              initial={{ scale: 0.85, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, x: "-50%", y: "-50%" }}
            >
              <h3 className="text-2xl font-medium text-[#2D5D46] mb-4">
                Let’s Work Together
              </h3>
              <form className="flex flex-col gap-4">
                <input className="p-4 rounded-xl" placeholder="Name" />
                <input className="p-4 rounded-xl" placeholder="Email" />
                <textarea className="p-4 rounded-xl" placeholder="Message" />
                <button className="bg-[#2D5D46] text-white py-3 rounded-full hover:bg-[#3C6B54]">
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
