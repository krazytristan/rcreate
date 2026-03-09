import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaTools,
  FaUsers,
  FaBullhorn,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const audiences = [
  {
    title: "Busy Professionals, Coaches, Agencies & Service-Based Businesses",
    description:
      "We support digital marketing agencies, medical and wellness clinics, home service providers (cleaning, hauling, pressure washing), online coaches, consultants, and small to scaling businesses seeking structured operational support.",
    icon: <FaUsers />,
  },
  {
    title: "Digital Marketing Agencies",
    description:
      "Agencies that need reliable backend support for admin systems, client coordination, workflow structure, and scalable execution.",
    icon: <FaBullhorn />,
  },
  {
    title: "Medical & Wellness Clinics",
    description:
      "Healthcare and wellness providers looking for organized administrative systems, appointment coordination, and operational efficiency.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Home Service Businesses",
    description:
      "Cleaning, hauling, landscaping, pressure washing, and construction companies that need dependable back-office, marketing, and operational support.",
    icon: <FaTools />,
  },
  {
    title: "Online Coaches & Consultants",
    description:
      "Professionals who require streamlined systems for client onboarding, content management, scheduling, and digital presence.",
    icon: <FaBriefcase />,
  },
  {
    title: "Founders & CEOs Who Need a Right-Hand VA",
    description: `If you’re:
✔ Overwhelmed with admin  
✔ Lost in day-to-day operations  
✔ Struggling to grow because you're managing everything yourself  

We provide the executive support system that frees you to lead.`,
    icon: <FaBriefcase />,
  },
];

export default function WhoWeServe() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % audiences.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? audiences.length - 1 : prev - 1
    );
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % audiences.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="serve"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] mt-6 text-primary leading-tight">
            Who <span className="text-accent">We Serve</span>
          </h2>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted leading-relaxed max-w-xl mt-6 mb-12">
            We partner with ambitious professionals and service-based businesses
            who need structure, clarity, and high-level execution support to scale
            sustainably.
          </p>

          {/* SLIDER CARD */}
          <div className="relative min-h-[260px] overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.div
                key={active}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) nextSlide();
                  if (info.offset.x > 80) prevSlide();
                }}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-10 bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft whitespace-pre-line cursor-grab"
              >

                <h3 className="font-heading text-[20px] md:text-[24px] lg:text-[28px] mb-4 text-primary">
                  {audiences[active].title}
                </h3>

                <p className="text-neutral-muted leading-relaxed">
                  {audiences[active].description}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* MOBILE SLIDE DOTS */}
          <div className="flex gap-2 mt-6 lg:hidden">
            {audiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 bg-accent"
                    : "w-2 bg-neutral-border"
                }`}
              />
            ))}
          </div>

        </motion.div>

        {/* DESKTOP ICON SELECTOR */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-8 flex-wrap">

          <button
            onClick={prevSlide}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-neutral-border text-accent hover:bg-accent hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {audiences.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className={`relative w-24 h-24 flex items-center justify-center rounded-full text-3xl transition-all duration-300
                ${
                  active === i
                    ? "bg-accent text-white shadow-premium"
                    : "bg-white/60 backdrop-blur-xl text-accent border border-neutral-border"
                }`}
              >
                {item.icon}

                {active === i && (
                  <motion.div
                    layoutId="serveGlow"
                    className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10"
                  />
                )}

              </motion.button>

              {active === i && (
                <motion.div
                  layoutId="serveIndicator"
                  className="mt-3 w-8 h-1 bg-accent rounded-full"
                />
              )}

            </div>
          ))}

          <button
            onClick={nextSlide}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-neutral-border text-accent hover:bg-accent hover:text-white transition"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}