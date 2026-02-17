// src/components/WhoWeHelp.jsx
import { motion } from "framer-motion";

/* ===============================
   LOGO DATA
================================ */
const logos = [
  { name: "Client 1", src: "/logos/logo1.png" },
  { name: "Client 2", src: "/logos/logo2.png" },
  { name: "Client 3", src: "/logos/logo3.png" },
  { name: "Client 4", src: "/logos/logo4.png" },
  { name: "Client 5", src: "/logos/logo5.png" },
  { name: "Client 6", src: "/logos/logo6.png" },
];

export default function WhoWeHelp() {
  return (
    <section className="relative py-32 px-6 bg-neutral-background overflow-hidden">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-border to-transparent" />

      {/* Soft Accent Glow */}
      <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/10 blur-[140px] rounded-full" />

      <div className="relative z-20 max-w-5xl mx-auto text-center">

        {/* HEADER */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl text-primary leading-tight mb-6"
        >
          Trusted by Growing Businesses
        </motion.h3>

        {/* ORIGINAL SHORT DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-neutral-muted text-lg leading-relaxed mb-14"
        >
          Supporting founders, service-based companies, and agencies
          with structured operations, marketing systems, and reliable
          virtual assistance.
        </motion.p>

        {/* 🔥 NEW EXECUTIVE AUTHORITY COPY (NO CARD) */}
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-xl md:text-2xl text-primary mb-6"
        >
          We Don’t Just Provide Virtual Assistants —{" "}
          <span className="text-accent">
            We Build Executive Support Partnerships
          </span>
        </motion.h4>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-neutral-muted text-base md:text-lg leading-relaxed"
        >
          <p>
            At <span className="font-semibold text-primary">Rcreate Virtual Assistance Services</span>, 
            we match busy founders, CEOs, coaches, and service-based businesses 
            with highly capable Virtual Assistants who act like right-hand partners — not task workers.
          </p>

          <p>
            Our VAs don’t just complete tasks. They think ahead, solve problems,
            and manage daily execution across operations, admin, communications,
            and marketing — so you can lead, not manage.
          </p>

          <p>
            We work with businesses of all sizes around the world, helping you
            streamline internal processes and strengthen your external presence.
          </p>
        </motion.div>

      </div>

      {/* Side Fade Edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-background to-transparent z-10" />

      {/* DESKTOP AUTO-SLIDER */}
      <div className="hidden md:block relative mt-24">
        <motion.div
          className="flex gap-24 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] opacity-60 hover:opacity-100 transition duration-500"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden flex gap-14 overflow-x-auto px-2 pb-2 mt-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[150px] flex items-center justify-center opacity-70"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-14 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-border to-transparent" />

    </section>
  );
}
