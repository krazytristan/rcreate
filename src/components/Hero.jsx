// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";
import hero1 from "../assets/Logo.png";
import hero2 from "../assets/images1.jpg";
import hero3 from "../assets/images2.jpg";

const heroImages = [hero1, hero2, hero3];

// Floating shapes animation
const floatVariants = {
  animate: {
    y: [0, -15, 0],
    x: [0, 15, 0],
    transition: { repeat: Infinity, duration: 10, ease: "easeInOut" },
  },
};

// Generate interactive stars
const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 5,
  }));

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [stars, setStars] = useState(generateStars(25));

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Hover effect: stars move away from cursor
  const handleMouseMove = (e) => {
    const hero = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - hero.left;
    const mouseY = e.clientY - hero.top;

    setStars((prev) =>
      prev.map((star) => ({
        ...star,
        x: star.x + (star.x / 100 - mouseX / hero.width) * 3,
        y: star.y + (star.y / 100 - mouseY / hero.height) * 3,
      }))
    );
  };

  const headlineText = [
    "Your",
    "Right-Hand Virtual Assistant",
    "for Busy Founders & Home Service CEOs",
  ];

  const sentence = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-12"
      style={{ backgroundColor: "#FCFAF4" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setStars(generateStars(25))}
    >
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #FFEDD6 0%, #AE7533 40%, #2D5D46 80%)",
          backgroundSize: "400% 400%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            top: `${star.y}%`,
            left: `${star.x}%`,
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: star.delay }}
        />
      ))}

      {/* Floating shapes */}
      <motion.div
        className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEDD6] rounded-full opacity-40 top-1/4 left-1/5"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-[#AE7533] rounded-full opacity-30 top-3/4 right-1/4"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-[#2D5D46] rounded-full opacity-20 top-1/2 left-3/4"
        variants={floatVariants}
        animate="animate"
      />

      {/* Logo */}
      <div className="absolute top-6 left-4 sm:left-6 z-20 flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
        <span className="font-bold tracking-wide text-[#2D5D46] text-base sm:text-lg md:text-xl">
          RCREATE
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit bg-[#FFEDD6] text-[#AE7533]">
            Trusted Virtual Support for Growing Businesses
          </span>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 break-words text-[#FCFAF4] shadow-lg"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {headlineText.map((wordText, i) => (
              <motion.span key={i} className="block md:inline" variants={word}>
                {wordText}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-xl mb-8 md:mb-10 text-[#FCFAF4]/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We handle admin, operations, client communication, marketing, and
            website creation — so you can focus on growth without burnout.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 25px rgba(46, 64, 45, 0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg transition bg-[#2D5D46] text-[#FCFAF4] hover:bg-[#3C6B54] w-full sm:w-auto text-center"
            >
              Message Us Now! →
            </motion.button>

            <motion.a
              href="#services"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition border border-[#2D5D46] text-[#FCFAF4] hover:bg-[#2D5D46] hover:text-[#FCFAF4] w-full sm:w-auto text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(46, 64, 45, 0.3)",
              }}
            >
              Explore Services
            </motion.a>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-sm text-[#FCFAF4]/80">
            ✓ No contracts • ✓ No pressure • ✓ 100% free readiness call
          </p>
        </motion.div>

        {/* RIGHT - Hero Image Carousel */}
        <div className="relative w-full flex justify-center md:justify-end mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              alt="Hero"
              className="relative z-10 rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: [0, -5, 0], scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
          <motion.div
            className="absolute -inset-6 rounded-3xl blur-2xl opacity-70"
            style={{ backgroundColor: "#FFEDD6" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] bg-[#FFEDD6] rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D5D46]">
                  Message Us Now!
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-2xl text-[#AE7533] hover:text-[#2D5D46] transition"
                >
                  ✕
                </button>
              </div>

              <p className="text-[#2D5D46]/90 mb-6 text-sm sm:text-base">
                Fill out the form or contact us to schedule your free strategy
                session. We’ll discuss how we can help your business grow
                without the overwhelm.
              </p>

              <form className="flex flex-col gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 sm:p-4 rounded-xl border border-[#AE7533] focus:outline-none focus:ring-2 focus:ring-[#AE7533] transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 sm:p-4 rounded-xl border border-[#AE7533] focus:outline-none focus:ring-2 focus:ring-[#AE7533] transition"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="p-3 sm:p-4 rounded-xl border border-[#AE7533] focus:outline-none focus:ring-2 focus:ring-[#AE7533] transition"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 rounded-full font-bold text-[#FCFAF4] bg-[#2D5D46] hover:bg-[#AE7533] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
