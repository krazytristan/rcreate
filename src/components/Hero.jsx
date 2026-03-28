import { useEffect, useState } from "react";
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

/* CAROUSEL IMAGES */
const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

/* TEXT */
const titleWords = [
  "Leading",
  "Executive",
  "Virtual",
  "Assistant",
  "Solutions",
];

const phrases = [
  "Scale smarter.",
  "Operate efficiently.",
  "Lead confidently.",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  /* CAROUSEL AUTO */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* PHRASE LOOP */
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* MODAL LOCK */
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
    <section className="relative min-h-screen flex items-center bg-primary text-white px-6 py-12 overflow-hidden">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">

          {/* TITLE */}
          <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[52px] leading-tight flex flex-wrap gap-2 justify-center md:justify-start">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}

            <span className="text-accent">
              for Growing Businesses
            </span>
          </h1>

          {/* MOBILE PHRASE */}
          <div className="md:hidden h-8 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-accent font-semibold"
              >
                {phrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* DESCRIPTION */}
          <p className="hidden md:block text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
            <strong className="text-accent">
              Scale smarter. Operate efficiently. Lead confidently.
            </strong>
            <br /><br />
            Rcreate Virtual Assistance Services provides high-level executive,
            operations, and marketing support for founders and service-based businesses worldwide.
            <br /><br />
            Focus on scaling — we handle execution.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setOpenModal(true)}
            className="px-8 py-3 rounded-full bg-accent text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Book a Reservation
          </button>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-xl font-bold text-accent">
                <CountUp end={9} duration={2} />+
              </h3>
              <p className="text-xs text-neutral-muted uppercase">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-xl font-bold text-accent">
                <CountUp end={300} duration={2} separator="," />+
              </h3>
              <p className="text-xs text-neutral-muted uppercase">
                Businesses Served
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - CAROUSEL */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-xl">

          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="carousel"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === i ? "bg-accent" : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* TOOL STRIP */}
      <div className="absolute bottom-6 left-0 w-full overflow-hidden opacity-60">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/60">
              <span className="text-accent text-lg">
                {toolIcons[tool]}
              </span>
              {tool}
            </div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setOpenModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0 }}
              className="fixed z-50 top-1/2 left-1/2 w-[95%] sm:w-[400px] bg-white rounded-2xl p-6"
            >
              <h2 className="text-xl font-heading text-primary mb-4 text-center">
                Book Your Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full p-3 border rounded-lg" />
                <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="w-full p-3 border rounded-lg" />
                <input type="date" name="date" required onChange={handleChange} className="w-full p-3 border rounded-lg" />
                <input type="time" name="time" required onChange={handleChange} className="w-full p-3 border rounded-lg" />

                <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold">
                  Confirm
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}