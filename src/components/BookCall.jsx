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
      {/* FLOATING BUTTON */}
      <motion.div
        className="fixed right-6 bottom-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <button
          onClick={() => {
            setOpen(true);
            setSubmitted(false);
          }}
          className="w-16 h-16 rounded-full bg-[#AE7533] text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
          aria-label="Book Free Call"
        >
          <FaPhoneAlt className="text-xl" />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* MODAL */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[92%] sm:w-[480px] md:w-[540px] 
                         bg-white/80 backdrop-blur-xl border border-white/40 
                         text-[#2D5D46] rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
            >
              {/* HEADER */}
              <div className="px-6 py-5 border-b border-[#AE7533]/20 flex justify-between items-center">
                <h2 className="font-heading text-xl md:text-2xl">
                  Book Your Free Strategy Call
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="text-[#AE7533] text-2xl hover:scale-110 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8 text-center">
                {!submitted ? (
                  <>
                    <p className="font-body text-base md:text-lg mb-6 text-[#5E6F66]">
                      Let’s discuss how a dedicated VA + marketing + website
                      support can streamline your operations and accelerate growth.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 rounded-xl border border-[#AE7533]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533] transition"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 rounded-xl border border-[#AE7533]/40 focus:outline-none focus:ring-2 focus:ring-[#AE7533] transition"
                      />

                      <button
                        type="submit"
                        className="mt-2 bg-[#AE7533] text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
                      >
                        Submit & Continue →
                      </button>
                    </form>

                    <p className="mt-4 text-sm text-[#94A591]">
                      Takes less than 30 seconds.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <h3 className="font-heading text-2xl">
                      Thank You!
                    </h3>

                    <p className="font-body text-[#5E6F66] text-base">
                      We’ve received your details. Click below to secure your
                      free call slot.
                    </p>

                    <a
                      href="[GHL Booking Link]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#AE7533] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
                    >
                      Book Your Call →
                    </a>
                  </motion.div>
                )}
              </div>

              {/* FOOTER */}
              <div className="text-center text-sm py-4 border-t border-[#AE7533]/20 text-[#94A591]">
                Let’s build systems that scale your business.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
