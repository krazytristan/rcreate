// src/components/WhoWeHelp.jsx
import { motion } from "framer-motion";


import logo1 from "../assets/1.jpg";
import logo2 from "../assets/2.jpg";
import logo3 from "../assets/3.jpg";
import logo4 from "../assets/4.jpg";
import logo5 from "../assets/5.jpg";
import logo6 from "../assets/6.jpg";
import logo7 from "../assets/7.jpg";
import logo8 from "../assets/8.jpg";
import logo9 from "../assets/9.jpg";
import logo10 from "../assets/10.jpg";
import logo11 from "../assets/11.jpg";
import logo12 from "../assets/12.jpg";
import logo13 from "../assets/13.jpg";
import logo14 from "../assets/14.jpg";
import logo15 from "../assets/15.jpg";
import logo16 from "../assets/16.jpg";
import logo17 from "../assets/17.jpg";
import logo18 from "../assets/18.jpg";
import logo19 from "../assets/19.jpg";
import logo20 from "../assets/20.jpg";
import logo21 from "../assets/21.jpg";
import logo22 from "../assets/22.jpg";
import logo23 from "../assets/23.jpg";
import logo24 from "../assets/24.jpg"; 
import logo25 from "../assets/25.jpg";
import logo26 from "../assets/26.jpg";
import logo27 from "../assets/27.jpg"; 
import logo28 from "../assets/28.jpg";
import logo29 from "../assets/29.jpg";
import logo30 from "../assets/30.jpg";
import logo31 from "../assets/31.jpg";
import logo32 from "../assets/32.jpg";
import logo33 from "../assets/33.jpg";
import logo34 from "../assets/34.jpg";
import logo35 from "../assets/35.jpg";
import logo36 from "../assets/36.jpg";
import logo37 from "../assets/37.jpg";
import logo38 from "../assets/38.jpg";
import logo39 from "../assets/39.jpg";

/* ===============================
   LOGO DATA
================================ */
const logos = [
  { name: "Client 1", src: logo1 },
  { name: "Client 2", src: logo2 },
  { name: "Client 3", src: logo3 },
  { name: "Client 4", src: logo4 },
  { name: "Client 5", src: logo5 },
  { name: "Client 6", src: logo6 },
  { name: "Client 7", src: logo7 },
  { name: "Client 8", src: logo8 },
  { name: "Client 9", src: logo9 },
  { name: "Client 10", src: logo10 },
  { name: "Client 11", src: logo11 },
  { name: "Client 12", src: logo12 },
  { name: "Client 13", src: logo13 },
  { name: "Client 14", src: logo14 },
  { name: "Client 15", src: logo15 },
  { name: "Client 16", src: logo16 },
  { name: "Client 17", src: logo17 },
  { name: "Client 18", src: logo18 },
  { name: "Client 19", src: logo19 },
  { name: "Client 20", src: logo20 },
  { name: "Client 21", src: logo21 },
  { name: "Client 22", src: logo22 },
  { name: "Client 23", src: logo23 },
  { name: "Client 24", src: logo24 },
  { name: "Client 25", src: logo25 },
  { name: "Client 26", src: logo26 },
  { name: "Client 27", src: logo27 },
  { name: "Client 28", src: logo28 },
  { name: "Client 29", src: logo29 },
  { name: "Client 30", src: logo30 },
  { name: "Client 31", src: logo31 },
  { name: "Client 32", src: logo32 },
  { name: "Client 33", src: logo33 },
  { name: "Client 34", src: logo34 },
  { name: "Client 35", src: logo35 },
  { name: "Client 36", src: logo36 },
  { name: "Client 37", src: logo37 },
  { name: "Client 38", src: logo38 },
  { name: "Client 39", src: logo39 },
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
