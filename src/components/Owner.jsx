import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import founderImage from "../assets/reg.png";
import team1 from "../assets/va1.jpg";
import team2 from "../assets/va2.jpg";
import team3 from "../assets/va3.jpg";
import team4 from "../assets/va4.jpg";

export default function Owner({ isOpen, onClose }) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const teamMembers = [
    { name: "Team Member 1", img: team1 },
    { name: "Team Member 2", img: team2 },
    { name: "Team Member 3", img: team3 },
    { name: "Team Member 4", img: team4 },
  ];

  const howItWorks = [
    "Discovery & Strategy Alignment",
    "System Integration & Setup",
    "Dedicated VA Assignment",
    "Ongoing Optimization & Growth"
  ];

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

                  {/* FOUNDER */}
                  <section className="flex flex-col items-center text-center space-y-5">
                    <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-premium border border-neutral-border">
                      <img
                        src={founderImage}
                        alt="Founder & CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="font-heading text-2xl text-accent">
                      Founder & CEO
                    </h3>

                    <p className="font-semibold text-primary">
                      Ms. REGINE S. CANDIDO
                    </p>

                    <p className="font-body text-neutral-muted leading-relaxed text-sm max-w-md">
                      Rcreate was built to empower business owners with
                      structured systems, strategic marketing foundations,
                      and operational clarity that supports sustainable growth.
                    </p>

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

                  {/* OUR JOURNEY (Moved Here) */}
                  <section className="space-y-6">
                    <h4 className="font-heading text-xl text-primary text-center md:text-left">
                      Our Journey
                    </h4>

                    <div className="space-y-6 border-l-2 border-accent/40 pl-6 relative">
                      {[
                        { year: "2021", text: "The idea was born — structured virtual support for growing businesses." },
                        { year: "2022", text: "Launched with a focused team committed to excellence." },
                        { year: "2023", text: "Expanded into marketing systems and website development." },
                        { year: "Today", text: "Building scalable systems for founders worldwide." }
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

                {/* RIGHT COLUMN */}
                <div className="space-y-12">

                  {/* HOW IT WORKS (Added Back) */}
                  <section>
                    <h4 className="font-heading text-xl text-primary mb-6">
                      How It Works
                    </h4>

                    <div className="space-y-4">
                      {howItWorks.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white/60 backdrop-blur-xl border border-neutral-border rounded-xl p-4 text-sm text-neutral-muted"
                        >
                          {step}
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  {/* TEAM (Moved Right) */}
                  <section>
                    <h4 className="font-heading text-lg text-primary mb-6">
                      The RCreate Team
                    </h4>

                    <div className="grid grid-cols-4 gap-4">
                      {teamMembers.map((member, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="flex flex-col items-center text-center"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-border shadow-soft">
                            <img
                              src={member.img}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-neutral-muted mt-2">
                            {member.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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
