import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaInbox,
  FaCogs,
  FaComments,
  FaBullhorn,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    title: "Admin Support",
    desc: "Inbox management, calendar scheduling, CRM updates, and document organization—so no task slips through the cracks.",
    icon: <FaInbox />,
  },
  {
    title: "Operations Support",
    desc: "Workflow management, SOP implementation, project coordination, and internal team communication.",
    icon: <FaCogs />,
  },
  {
    title: "Communication Support",
    desc: "Client follow-ups, appointment confirmations, inquiries, and feedback collection handled professionally.",
    icon: <FaComments />,
  },
  {
    title: "Marketing Support",
    desc: "Social media scheduling, engagement management, email campaigns, and lead nurturing automation.",
    icon: <FaBullhorn />,
  },
  {
    title: "Landing Page & Website Creation",
    desc: "High-converting landing pages or websites with copywriting, SEO-friendly design, and mobile responsiveness.",
    icon: <FaGlobe />,
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  const SLIDE_DURATION = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden bg-[#FCFAF4]"
    >
      {/* SOFT GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#AE7533]/15 blur-[120px] rounded-full" />

      {/* HEADER */}
      <div className="relative max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46]"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-body text-lg md:text-xl max-w-3xl mx-auto text-[#5E6F66]"
        >
          Done-for-you virtual support designed to simplify operations, enhance
          communication, and help your business grow with ease.
        </motion.p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="rounded-3xl p-12 text-center bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full text-3xl bg-gradient-to-tr from-[#FCFAF4] to-[#FFE8C4] text-[#AE7533] shadow-md">
              {services[index].icon}
            </div>

            {/* TITLE */}
            <h3 className="font-heading text-3xl mb-6 text-[#2D5D46]">
              {services[index].title}
            </h3>

            {/* DESCRIPTION */}
            <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#5E6F66]">
              {services[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* DOT NAVIGATION */}
        <div className="flex justify-center gap-4 mt-12">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[#AE7533]"
                  : "w-3 bg-[#94A591] opacity-60 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
