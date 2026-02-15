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
    <section className="relative py-20 px-6 bg-[#FCFAF4] overflow-hidden font-body">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h3 className="font-heading text-3xl md:text-4xl text-[#2D5D46] leading-tight mb-5">
          Trusted by Growing Businesses
        </h3>

        <p className="text-[#5E6F66] text-lg max-w-2xl mx-auto leading-relaxed">
          Supporting founders, service businesses, and agencies with
          reliable virtual assistance and marketing systems.
        </p>
      </div>

      {/* FADE GRADIENT EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FCFAF4] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FCFAF4] to-transparent z-10" />

      {/* DESKTOP AUTO-SLIDER */}
      <div className="hidden md:block relative">
        <motion.div
          className="flex gap-20 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] opacity-70 hover:opacity-100 transition duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE SCROLL VERSION */}
      <div className="md:hidden flex gap-12 overflow-x-auto px-2 pb-2">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[140px] flex items-center justify-center opacity-80"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-14 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
