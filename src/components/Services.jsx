import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInbox,
  FaCogs,
  FaComments,
  FaBullhorn,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    title: "Admin Support",
    desc: "Inbox management, scheduling, CRM updates, and document systems.",
    details:
      "We structure and optimize administrative systems, manage scheduling workflows, streamline CRM processes, and create organized digital infrastructures that scale with your business.",
    icon: <FaInbox />,
  },
  {
    title: "Operations Support",
    desc: "Workflow optimization and structured coordination.",
    details:
      "We implement scalable SOP systems, oversee task management, coordinate projects, and ensure operational clarity across departments.",
    icon: <FaCogs />,
  },
  {
    title: "Communication Support",
    desc: "Professional client communication handling.",
    details:
      "We manage confirmations, inquiries, follow-ups, and ongoing communication while maintaining brand-aligned professionalism.",
    icon: <FaComments />,
  },
  {
    title: "Marketing Support",
    desc: "Campaign coordination and content scheduling.",
    details:
      "We execute social scheduling strategies, oversee engagement workflows, and coordinate email and marketing campaigns.",
    icon: <FaBullhorn />,
  },
  {
    title: "Website & Landing Pages",
    desc: "Conversion-focused digital presence.",
    details:
      "We design high-performing websites and landing pages with strategic copywriting, SEO structure, and performance optimization.",
    icon: <FaGlobe />,
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  /* Scroll Lock */
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  return (
    <section
      id="services"
      className="relative py-36 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary">
            Structured Support{" "}
            <span className="text-accent">Built for Growth</span>
          </h2>

          <p className="text-lg text-neutral-muted mt-6 max-w-2xl mx-auto">
            Premium virtual assistance designed to simplify operations,
            strengthen communication, and scale your business confidently.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl p-8 bg-white/60 backdrop-blur-xl border border-neutral-border shadow-soft transition-all duration-300 hover:shadow-premium"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full text-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="font-heading text-xl mb-3 text-primary">
                {service.title}
              </h3>

              <p className="text-neutral-muted text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              <button
                onClick={() => setSelected(service)}
                className="text-sm font-medium text-accent hover:underline"
              >
                Learn More →
              </button>
            </motion.div>
          ))}

        </div>
      </div>

      {/* EXECUTIVE MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal Container */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-6"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative max-w-xl w-full bg-white rounded-3xl p-10 shadow-premium border border-neutral-border">

                {/* Subtle Glow */}
                <div className="absolute -inset-1 bg-accent/10 blur-2xl rounded-3xl -z-10" />

                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 text-neutral-muted hover:text-primary transition"
                >
                  <FaTimes />
                </button>

                {/* Icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full text-xl bg-accent text-white">
                  {selected.icon}
                </div>

                <h3 className="font-heading text-2xl mb-4 text-primary">
                  {selected.title}
                </h3>

                <p className="text-neutral-muted leading-relaxed mb-8">
                  {selected.details}
                </p>

                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="inline-block px-8 py-3 rounded-full bg-accent text-white font-medium hover:scale-105 transition duration-300"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
