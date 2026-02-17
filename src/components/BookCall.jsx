import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function CTAForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  /* Lock scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* Close on ESC */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ================= FLOATING CTA BUTTON ================= */}
      <motion.div
        className="fixed right-6 bottom-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.button
          onClick={() => {
            setOpen(true);
            setSubmitted(false);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-premium"
          aria-label="Book Free Call"
        >
          <FaPhoneAlt className="text-xl" />

          {/* Soft Pulse Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/20 -z-10"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.button>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[92%] sm:w-[480px] md:w-[580px]
                         rounded-3xl bg-white/70 backdrop-blur-2xl
                         border border-neutral-border shadow-soft overflow-hidden"
              initial={{ opacity: 0, scale: 0.85, y: "-50%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              {/* Accent Depth Layer */}
              <div className="absolute -inset-2 bg-accent/5 blur-3xl rounded-3xl -z-10" />

              {/* HEADER */}
              <div className="px-6 py-6 border-b border-neutral-border flex justify-between items-center">
                <div>
                  <span className="text-xs tracking-[0.35em] uppercase text-neutral-muted">
                  </span>
                  <h2 className="font-heading text-xl md:text-2xl text-primary mt-2">
                    Book Your Free Strategy Call
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-accent text-2xl hover:scale-110 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8 text-center">

                {!submitted ? (
                  <>
                    <p className="text-base md:text-lg mb-6 text-neutral-muted leading-relaxed">
                      Discover how structured executive support,
                      marketing systems, and automation can
                      elevate your operations and unlock scalable growth.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent transition"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 rounded-xl border border-neutral-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent transition"
                      />

                      <button
                        type="submit"
                        className="mt-2 bg-accent text-white font-semibold py-3 rounded-xl shadow-premium hover:scale-105 transition duration-300"
                      >
                        Continue →
                      </button>
                    </form>

                    <p className="mt-4 text-sm text-neutral-muted">
                      Takes less than 30 seconds.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <h3 className="font-heading text-2xl text-primary">
                      You're In!
                    </h3>

                    <p className="text-neutral-muted text-base leading-relaxed">
                      Your details have been received.
                      Secure your complimentary strategy session below.
                    </p>

                    <a
                      href="[GHL Booking Link]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-premium hover:scale-105 transition"
                    >
                      Schedule My Call →
                    </a>
                  </motion.div>
                )}

              </div>

              {/* FOOTER */}
              <div className="text-center text-sm py-4 border-t border-neutral-border text-neutral-muted">
                Strategic systems. Structured growth. Sustainable scale.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
