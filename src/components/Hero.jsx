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
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    videoRef.current.play().catch(() => {});
  }, []);

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

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Leading Executive Virtual Assistant Solutions
            <br />
            <span className="text-accent">
              for Growing Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-lg text-white/80 max-w-xl leading-relaxed"
          >
            <strong>Scale smarter. Operate efficiently. Lead confidently.</strong>
            <br /><br />
            Rcreate Virtual Assistance Services provides high-level executive,
            operations, and marketing support for founders, CEOs,
            and service-based businesses worldwide.
            <br /><br />
            From internal systems to external visibility, we manage the execution —
            so you can focus on scaling strategically.
            <br /><br />
            All-in-one support. Structured systems. Long-term partnership.
          </motion.p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-6">
            <button
              onClick={() => setOpenModal(true)}
              className="px-10 py-3 rounded-full bg-accent text-white font-medium shadow-premium hover:scale-105 transition duration-300"
            >
              Book a Reservation
            </button>
          </div>

          {/* Stats */}
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

        {/* RIGHT SIDE IMAGES */}
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

      {/* TOOL STRIP RESTORED */}
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

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpenModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed z-50 top-1/2 left-1/2 w-[95%] sm:w-[500px]
                         bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-heading text-primary mb-6 text-center">
                Book Your Appointment
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl"
                />

                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl"
                />

                <input
                  type="time"
                  name="time"
                  required
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl"
                />

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Confirm Reservation
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
