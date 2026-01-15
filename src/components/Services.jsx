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

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#FCFAF4" }}
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          style={{ color: "#2D5D46" }}
        >
          Our <span style={{ color: "#AE7533" }}>Services</span>
        </h2>

        <p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: "#94A591" }}
        >
          Done-for-you virtual support designed to simplify operations, enhance
          communication, and help your business grow with ease.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-3xl p-10 shadow-md text-center"
            style={{ backgroundColor: "#FFEDD6" }}
          >
            {/* ICON */}
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full text-3xl"
              style={{
                backgroundColor: "#FCFAF4",
                color: "#AE7533",
              }}
            >
              {services[index].icon}
            </div>

            {/* TITLE */}
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#2D5D46" }}
            >
              {services[index].title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: "#2D5D46CC" }}
            >
              {services[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* DOT NAVIGATION */}
        <div className="flex justify-center gap-3 mt-10">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-3 h-3 rounded-full transition"
              style={{
                backgroundColor: i === index ? "#AE7533" : "#94A591",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
