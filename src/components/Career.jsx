import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const positions = [
  {
    title: "Executive Virtual Assistant",
    type: "Full-Time • Remote",
    description:
      "Support founders with inbox management, calendar coordination, client communication, and operational systems. Operate as a right-hand partner — not just a task executor.",
  },
  {
    title: "Marketing Systems Specialist",
    type: "Contract • Remote",
    description:
      "Manage automation workflows, CRM systems, digital campaigns, and execution systems across multiple platforms.",
  },
  {
    title: "Web & Funnel Developer",
    type: "Project-Based • Remote",
    description:
      "Build high-converting landing pages, funnels, and optimized website systems focused on performance and scalability.",
  },
];

export default function Career({ isOpen, onClose }) {
  const [active, setActive] = useState(null);

  /* Lock scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="fixed z-50 top-1/2 left-1/2
                       w-[95%] md:w-[85%] lg:w-[70%]
                       max-h-[90vh]
                       rounded-3xl
                       bg-white/70 backdrop-blur-2xl
                       border border-neutral-border
                       shadow-soft
                       overflow-hidden flex flex-col"
          >
            {/* Subtle Glow */}
            <div className="absolute -inset-1 bg-accent/5 blur-2xl rounded-3xl -z-10" />

            {/* HEADER */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-border">
              <div>
                <h2 className="font-heading text-2xl text-primary">
                  Careers at RCreate
                </h2>
                <p className="text-sm text-neutral-muted mt-1">
                  Join our growing remote team
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-accent text-2xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-10 overflow-y-auto space-y-6">

              {positions.map((job, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/60 backdrop-blur-xl border border-neutral-border overflow-hidden"
                >
                  {/* JOB HEADER */}
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="w-full text-left px-8 py-6 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-heading text-xl text-primary">
                        {job.title}
                      </h3>
                      <p className="text-sm text-neutral-muted mt-1">
                        {job.type}
                      </p>
                    </div>

                    <span className="text-accent text-xl">
                      {active === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* EXPANDABLE */}
                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-8"
                      >
                        <p className="text-neutral-muted leading-relaxed mb-6">
                          {job.description}
                        </p>

                        <a
                          href="mailto:careers@rcreateva.com"
                          className="inline-flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-xl font-medium shadow-premium hover:scale-105 transition"
                        >
                          Apply Now
                          <FaArrowRight size={14} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* GENERAL APPLICATION */}
              <div className="pt-10 text-center border-t border-neutral-border">
                <p className="text-neutral-muted mb-6">
                  Don’t see your role? We’re always open to exceptional talent.
                </p>

                <a
                  href="mailto:careers@rcreateva.com"
                  className="inline-block border border-accent text-accent px-8 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition"
                >
                  Submit General Application
                </a>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
