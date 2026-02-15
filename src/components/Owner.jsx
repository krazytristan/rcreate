// src/components/Owner.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import ownerImage from "../assets/reg.png";

export default function Owner({ isOpen, onClose }) {
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
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="
              fixed z-50 top-1/2 left-1/2
              w-[95%] md:w-[80%] lg:w-[65%]
              max-h-[90vh]
              bg-white/90 backdrop-blur-xl
              border border-white/40
              rounded-3xl shadow-2xl
              overflow-hidden flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#AE7533]/20">
              <h2 className="font-heading text-xl md:text-2xl text-[#2D5D46]">
                The Story Behind Rcreate
              </h2>
              <button
                onClick={onClose}
                className="text-[#AE7533] text-2xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-8 overflow-y-auto space-y-12 text-[#2D5D46]">

              {/* OWNER PROFILE */}
              <section className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-[#AE7533]/30">
                  <img
                    src={ownerImage}
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left space-y-3">
                  <h3 className="font-heading text-2xl text-[#AE7533]">
                    Founder & Visionary
                  </h3>

                  <p className="font-body text-[#5E6F66] leading-relaxed max-w-xl">
                    Rcreate was built with a simple mission — to empower business
                    owners with reliable support, strong systems, and marketing
                    strategies that create real growth. What started as a vision
                    became a commitment to excellence, integrity, and impact.
                  </p>

                  {/* SOCIAL LINKS */}
                  <div className="flex justify-center md:justify-start gap-4 pt-3">
                    {[FaLinkedinIn, FaFacebookF, FaInstagram].map(
                      (Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="
                            p-3 rounded-full
                            bg-[#2D5D46] text-white
                            hover:bg-[#AE7533]
                            transition duration-300
                          "
                        >
                          <Icon />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </section>

              {/* JOURNEY */}
              <section className="space-y-6">
                <h4 className="font-heading text-xl text-[#2D5D46]">
                  Our Journey
                </h4>

                <div className="space-y-6 border-l-2 border-[#AE7533]/40 pl-6">
                  {[
                    {
                      year: "2021",
                      text: "The idea was born — a vision to provide structured, reliable virtual support for growing businesses.",
                    },
                    {
                      year: "2022",
                      text: "Launched with a focused team dedicated to quality execution and client trust.",
                    },
                    {
                      year: "2023",
                      text: "Expanded services into marketing systems and website development.",
                    },
                    {
                      year: "Today",
                      text: "Continuing to build scalable support systems that help founders grow confidently.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="relative"
                    >
                      <span className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-[#AE7533]" />
                      <h5 className="font-semibold text-[#2D5D46]">
                        {item.year}
                      </h5>
                      <p className="font-body text-[#5E6F66] text-sm">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* VALUES */}
              <section className="bg-[#FCFAF4] rounded-2xl p-6 border border-[#AE7533]/10">
                <h4 className="font-heading text-lg mb-4 text-[#2D5D46]">
                  What We Stand For
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4 font-body text-[#5E6F66] text-sm">
                  <li>• Integrity & transparency</li>
                  <li>• Systems that scale</li>
                  <li>• Purpose-driven execution</li>
                  <li>• Sustainable business growth</li>
                </ul>
              </section>

              {/* CLOSING QUOTE */}
              <p className="text-center italic font-body text-[#AE7533]">
                “Strong systems create sustainable success.”
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
