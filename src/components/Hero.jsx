// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* VIDEO */
import bgVideo from "../assets/hero-bg.mp4";

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

const titleWords = [
  "Leading",
  "Executive",
  "Virtual",
  "Assistant",
  "Solutions",
];

const phrases = [
  "Scale smarter",
  "Operate efficiently",
  "Lead confidently",
];

export default function Hero() {

  const videoRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  /* VIDEO AUTOPLAY */
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    videoRef.current.play().catch(() => {});
  }, []);

  /* PHRASE LOOP */
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* MODAL SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
  }, [openModal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation:", formData);
    setOpenModal(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-primary text-white overflow-hidden px-5 sm:px-6"
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

      {/* Glow */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-accent/20 blur-[140px] rounded-full" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN */}
        <div className="text-center lg:text-left">

          {/* TITLE */}
          <h1 className="font-heading text-[40px] md:text-[42px] lg:text-[56px] leading-tight tracking-tight flex flex-wrap gap-2 justify-center lg:justify-start">

            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                }}
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-accent"
            >
              for Growing Businesses
            </motion.span>

          </h1>

          {/* MOBILE ANIMATION */}
          <div className="md:hidden mt-6 h-8 flex justify-center lg:justify-start">

            <AnimatePresence mode="wait">

              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-accent font-semibold text-xl"
              >
                {phrases[phraseIndex]}
              </motion.span>

            </AnimatePresence>

          </div>

          {/* DESKTOP PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hidden md:block mt-6 text-[16px] md:text-[17px] lg:text-[18px] text-white/80 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            <strong>Scale smarter. Operate efficiently. Lead confidently.</strong>
            <br /><br />
            Rcreate Virtual Assistance Services provides high-level executive,
            operations, and marketing support for founders and service-based businesses worldwide.
            <br /><br />
            From internal systems to external visibility, we manage the execution —
            so you can focus on scaling strategically.
          </motion.p>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center lg:items-start gap-8">

          {/* CTA */}
          <motion.button
            onClick={() => setOpenModal(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-accent text-white font-semibold shadow-xl"
          >
            Book Your Free Consultation
          </motion.button>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-6 text-center">
              <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-accent">
                <CountUp end={9} duration={2} />+
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-muted mt-1">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-6 text-center">
              <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-accent">
                <CountUp end={300} duration={2} separator="," />+
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-muted mt-1">
                Businesses Served
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* TOOL STRIP */}
      <div className="absolute bottom-6 left-0 w-full overflow-hidden opacity-70">

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
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

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpenModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0 }}
              className="fixed z-50 top-1/2 left-1/2 w-[95%] sm:w-[500px] bg-white rounded-3xl p-8"
            >

              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-heading text-primary mb-6 text-center">
                Book Your Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-neutral-border bg-white text-primary"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-neutral-border bg-white text-primary"
                />

                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-neutral-border bg-white text-primary appearance-none"
                />

                <input
                  type="time"
                  name="time"
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-neutral-border bg-white text-primary appearance-none"
                />

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Confirm Booking
                </button>

              </form>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}