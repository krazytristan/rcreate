import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function CTAForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* FLOATING CTA BUTTON */}
      <motion.div
        className="fixed right-0 top-1/4 z-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: -50, right: 50 }}
        dragElastic={0.2}
      >
        <button
          onClick={() => {
            setOpen(true);
            setSubmitted(false);
          }}
          className="flex items-center justify-center bg-[#FFEDD6] text-[#2D5D46] font-bold 
                     px-4 py-4 rounded-l-full shadow-lg hover:shadow-2xl transition text-2xl sm:text-3xl"
          title="Book Your Free Call"
          aria-label="Open Booking Form"
        >
          <FaPhoneAlt />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* MODAL */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[95%] sm:w-[480px] md:w-[520px] 
                         bg-[#FCFAF4] text-[#2D5D46] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
              initial={{ scale: 0.85, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              {/* HEADER */}
              <div className="bg-[#FFEDD6] px-6 py-4 flex justify-between items-center rounded-t-3xl">
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#2D5D46]">
                  Free VA + Marketing + Website Call
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl sm:text-3xl text-[#AE7533]"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div className="flex-1 p-6 text-center">
                {!submitted ? (
                  <>
                    <p className="text-base sm:text-lg md:text-xl mb-6 text-[#2D5D46CC]">
                      Ready to reclaim your time, streamline operations, grow your marketing, and launch your website or landing page? Fill out the form below to schedule your free call.
                    </p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 sm:p-4 rounded-xl border border-[#AE7533] text-[#2D5D46] placeholder-[#94A591] focus:outline-none focus:ring-2 focus:ring-[#AE7533] text-base sm:text-lg"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 sm:p-4 rounded-xl border border-[#AE7533] text-[#2D5D46] placeholder-[#94A591] focus:outline-none focus:ring-2 focus:ring-[#AE7533] text-base sm:text-lg"
                      />
                      <button
                        type="submit"
                        className="bg-[#AE7533] text-[#FCFAF4] font-bold px-6 py-3 sm:py-4 rounded-xl
                                   shadow-lg hover:shadow-2xl hover:scale-105 transition text-base sm:text-lg"
                      >
                        Submit & Book Call
                      </button>
                    </form>

                    <p className="mt-4 text-sm sm:text-base text-[#94A591]">
                      Optional: Receive a free checklist to prepare for your call.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D5D46]">Thank You!</h3>
                    <p className="text-base sm:text-lg text-[#2D5D46CC]">
                      Your submission has been received. We'll contact you shortly to schedule your free call.
                    </p>
                    <a
                      href="[GHL Booking Link]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-[#AE7533] text-[#FCFAF4] font-bold px-6 py-3 sm:py-4 rounded-xl
                                 shadow-lg hover:shadow-2xl hover:scale-105 transition text-base sm:text-lg"
                    >
                      Book Your Call Now
                    </a>
                  </motion.div>
                )}
              </div>

              {/* FOOTER */}
              <div className="bg-[#FFEDD6] text-[#2D5D46CC] px-6 py-3 text-center text-sm sm:text-base rounded-b-3xl">
                We'll guide you step by step to maximize your business growth.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
