// src/components/WhoWeHelp.jsx
import { motion } from "framer-motion";

/* ===============================
   LOGO DATA
   Replace src with your real logo paths
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
    <section className="relative py-16 px-6 bg-[#FCFAF4] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="font-heading text-2xl md:text-3xl text-[#2D5D46] mb-4">
          Trusted by Growing Businesses
        </h3>
        <p className="text-[#5E6F66] max-w-2xl mx-auto">
          Supporting founders, service businesses, and agencies with reliable virtual assistance and marketing systems.
        </p>
      </div>

      {/* DESKTOP AUTO-SLIDER */}
      <div className="hidden md:block relative">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[140px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* MOBILE SCROLL VERSION */}
      <div className="md:hidden flex gap-10 overflow-x-auto scrollbar-hide px-2">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[120px] flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
