// src/components/Owner.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import ownerImage from "../assets/reg.png"; // ✅ CORRECT IMPORT

export default function Owner({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60"
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              fixed z-50 top-1/2 left-1/2
              w-[95%] md:w-[75%] lg:w-[60%]
              max-h-[90vh]
              bg-[#FFEDD6]
              rounded-3xl shadow-2xl
              overflow-hidden flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#2D5D46]">
              <h2 className="text-lg md:text-xl font-bold text-[#FCFAF4]">
                Our Story
              </h2>
              <button
                onClick={onClose}
                className="text-[#FCFAF4] text-2xl hover:text-[#AE7533] transition"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-8 overflow-y-auto space-y-10 text-[#2D5D46]">

              {/* OWNER PROFILE */}
              <section className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-[#AE7533]/30">
                  <img
                    src={ownerImage} // ✅ FIXED
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-bold text-[#AE7533]">
                    Founder & Visionary
                  </h3>
                  <p className="text-[#94A591] leading-relaxed max-w-xl">
                    Built from passion and purpose, the journey began with a
                    simple goal — create meaningful impact, lead with integrity,
                    and build something that truly helps people grow.
                  </p>

                  {/* SOCIAL LINKS */}
                  <div className="flex justify-center md:justify-start gap-4 pt-2">
                    {[FaLinkedinIn, FaFacebookF, FaInstagram].map(
                      (Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="
                            p-2 rounded-full
                            bg-[#2D5D46] text-[#FCFAF4]
                            hover:bg-[#AE7533]
                            transition
                          "
                        >
                          <Icon />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </section>

              {/* STORY TIMELINE */}
              <section className="space-y-6">
                <h4 className="text-xl font-bold text-[#AE7533]">
                  Our Journey
                </h4>

                <div className="space-y-4 border-l-2 border-[#AE7533]/40 pl-6">
                  {[
                    { year: "2021", text: "The idea was born — a vision to support growth through service and leadership." },
                    { year: "2022", text: "Launched with a small but dedicated team focused on quality and trust." },
                    { year: "2023", text: "Expanded services, strengthened partnerships, and built a strong community." },
                    { year: "Today", text: "Continuing to grow, innovate, and create meaningful impact." },
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
                      <h5 className="font-semibold">{item.year}</h5>
                      <p className="text-[#94A591] text-sm">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* VALUES */}
              <section className="bg-[#FCFAF4] rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-semibold mb-3">
                  What We Stand For
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-[#94A591] text-sm">
                  <li>• Integrity & transparency</li>
                  <li>• Purpose-driven work</li>
                  <li>• Community empowerment</li>
                  <li>• Sustainable growth</li>
                </ul>
              </section>

              {/* QUOTE */}
              <p className="text-center italic text-[#AE7533]">
                “A strong vision, guided by values, creates lasting impact.”
              </p>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
