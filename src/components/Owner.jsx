// src/components/Owner.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import ownerImage from "../assets/reg.png";

export default function Owner({ isOpen, onClose }) {

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
                       w-[95%] md:w-[90%] lg:w-[75%]
                       max-h-[90vh]
                       rounded-3xl
                       bg-white/70 backdrop-blur-2xl
                       border border-neutral-border
                       shadow-soft
                       overflow-hidden flex flex-col"
          >
            {/* Subtle Glow Layer */}
            <div className="absolute -inset-1 bg-accent/5 blur-2xl rounded-3xl -z-10" />

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-border">
              <h2 className="font-heading text-xl md:text-2xl text-primary">
                The Story Behind Rcreate
              </h2>
              <button
                onClick={onClose}
                className="text-accent text-2xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-8 overflow-y-auto">

              <div className="grid md:grid-cols-2 gap-14">

                {/* LEFT COLUMN */}
                <div className="space-y-12">

                  {/* PROFILE */}
                  <section className="flex flex-col items-center text-center space-y-5">
                    <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-premium border border-neutral-border">
                      <img
                        src={ownerImage}
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-accent/10 blur-xl -z-10" />
                    </div>

                    <h3 className="font-heading text-2xl text-accent">
                      Founder & Visionary
                    </h3>

                    <p className="font-body text-neutral-muted leading-relaxed text-sm max-w-md">
                      Rcreate was built to empower business owners with
                      structured systems, strategic marketing foundations,
                      and operational clarity that supports sustainable growth.
                    </p>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-4 pt-3">
                      {[FaLinkedinIn, FaFacebookF, FaInstagram].map(
                        (Icon, i) => (
                          <motion.a
                            key={i}
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full
                                       bg-white/60 backdrop-blur-xl
                                       border border-neutral-border
                                       flex items-center justify-center
                                       text-primary hover:text-accent transition"
                          >
                            <Icon size={14} />
                          </motion.a>
                        )
                      )}
                    </div>
                  </section>

                  {/* VALUES */}
                  <section className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-neutral-border">
                    <h4 className="font-heading text-lg mb-4 text-primary">
                      What We Stand For
                    </h4>
                    <ul className="space-y-3 font-body text-neutral-muted text-sm">
                      <li>• Integrity & transparency</li>
                      <li>• Systems designed to scale</li>
                      <li>• Purpose-driven execution</li>
                      <li>• Sustainable business growth</li>
                    </ul>
                  </section>

                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-12">

                  {/* JOURNEY */}
                  <section className="space-y-5">
                    <h4 className="font-heading text-xl text-primary">
                      Our Journey
                    </h4>

                    <div className="space-y-8 border-l-2 border-accent/40 pl-6 relative">
                      {[
                        {
                          year: "2021",
                          text: "The idea was born — structured and reliable virtual support for growing businesses.",
                        },
                        {
                          year: "2022",
                          text: "Launched with a focused team committed to quality execution and long-term trust.",
                        },
                        {
                          year: "2023",
                          text: "Expanded into marketing systems and website development.",
                        },
                        {
                          year: "Today",
                          text: "Building scalable systems that empower founders worldwide.",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="relative"
                        >
                          <span className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-accent" />
                          <h5 className="font-semibold text-primary">
                            {item.year}
                          </h5>
                          <p className="font-body text-neutral-muted text-sm">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* QUOTE */}
                  <section>
                    <p className="italic font-body text-accent text-center md:text-left">
                      “Strong systems create sustainable success.”
                    </p>
                  </section>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
