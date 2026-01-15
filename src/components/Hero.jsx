import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

import hero1 from "../assets/Logo.png";
import hero2 from "../assets/images1.jpg";
import hero3 from "../assets/images2.jpg";
import bgVideo from "../assets/hero-bg.mp4";

const heroImages = [hero1, hero2, hero3];

const float = {
  animate: {
    y: [0, -15, 0],
    x: [0, 12, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    opacity: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 4,
  }));

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(false);
  const [stars, setStars] = useState(generateStars(30));
  const videoRef = useRef(null);
  const x = useMotionValue(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  // VIDEO AUTOPLAY WITH VOLUME FADE-IN
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Gradually increase volume to 0.3
            let vol = 0;
            const fade = setInterval(() => {
              if (vol < 0.3) {
                vol += 0.01;
                videoRef.current.volume = vol;
              } else {
                clearInterval(fade);
              }
            }, 100);
          })
          .catch(() => {
            videoRef.current.muted = true;
            videoRef.current.play();
          });
      }
    }
  }, []);

  // STAR PARALLAX
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setStars((prev) =>
      prev.map((s) => ({
        ...s,
        x: Math.min(100, Math.max(0, s.x + mx * 0.2)),
        y: Math.min(100, Math.max(0, s.y + my * 0.2)),
      }))
    );
  };

  // SMOOTH SCROLL
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // HANDLE DRAG SWIPE
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) {
      setCurrent((p) => (p + 1) % heroImages.length);
    } else if (info.offset.x > 50) {
      setCurrent((p) => (p - 1 + heroImages.length) % heroImages.length);
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden flex items-center px-6"
    >
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* GRADIENT OVERLAY */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(174,117,51,0.3), transparent 60%), linear-gradient(120deg, rgba(15,23,42,0.85), rgba(45,93,70,0.7), rgba(15,23,42,0.85))",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-black/25" />

      {/* STARS */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute bg-white rounded-full pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.y}%`,
            left: `${s.x}%`,
            opacity: s.opacity,
          }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: s.delay }}
        />
      ))}

      {/* FLOATING ORBS */}
      <motion.div
        className="absolute w-16 h-16 bg-[#AE7533]/40 rounded-full blur-xl top-1/4 left-1/5"
        variants={float}
        animate="animate"
      />
      <motion.div
        className="absolute w-12 h-12 bg-[#2D5D46]/40 rounded-full blur-xl bottom-1/4 right-1/4"
        variants={float}
        animate="animate"
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="text-white">
          <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur">
            Trusted Virtual Support for Founders
          </span>

          {/* HEADLINE WITH GRADIENT ANIMATION */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
            Your{" "}
            <motion.span
              className="bg-gradient-to-r from-[#FFEDD6] via-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              Right-Hand
            </motion.span>{" "}
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#AE7533] via-[#FFEDD6] to-[#2D5D46] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["100% 0%", "0% 0%", "100% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              Virtual Assistant
            </motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed">
            Admin, marketing, systems, and websites — so you can scale without
            burnout.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button
              onClick={() => setModal(true)}
              className="px-10 py-4 rounded-full bg-[#2D5D46] text-white font-semibold shadow-2xl hover:bg-[#3C6B54] transition"
            >
              Message Us →
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="px-10 py-4 rounded-full border border-white/70 hover:bg-white/15 transition"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT — DEPTH CAROUSEL */}
        <div className="relative h-[480px] flex items-center justify-center">
          {heroImages.map((img, i) => {
            const isActive = i === current;
            const offset =
              i === (current + 1) % heroImages.length
                ? 80
                : i === (current - 1 + heroImages.length) % heroImages.length
                ? -80
                : 0;

            return (
              <motion.img
                key={i}
                src={img}
                className="absolute w-[320px] rounded-3xl shadow-2xl cursor-grab"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{
                  x: offset,
                  scale: isActive ? 1 : 0.82,
                  opacity: isActive ? 1 : 0.25,
                  filter: isActive ? "blur(0)" : "blur(10px)",
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ duration: 0.9 }}
              />
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setModal(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-[#FFEDD6] p-8 rounded-3xl w-[90%] md:w-[500px]"
              initial={{ scale: 0.85, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, x: "-50%", y: "-50%" }}
            >
              <h3 className="text-2xl font-medium text-[#2D5D46] mb-4">
                Let’s Work Together
              </h3>
              <form className="flex flex-col gap-4">
                <input className="p-4 rounded-xl" placeholder="Name" />
                <input className="p-4 rounded-xl" placeholder="Email" />
                <textarea className="p-4 rounded-xl" placeholder="Message" />
                <button className="bg-[#2D5D46] text-white py-3 rounded-full hover:bg-[#3C6B54] transition">
                  Submit
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
