// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaHandHoldingHeart,
  FaUsers,
  FaCommentDots,
} from "react-icons/fa";
import Owner from "./Owner";

// Navbar links
const links = [
  { label: "Home", id: "hero", icon: <FaHome /> },
  { label: "About", id: "about", icon: <FaInfoCircle /> },
  { label: "Services", id: "services", icon: <FaCogs /> },
  { label: "Benefits", id: "benefits", icon: <FaHandHoldingHeart /> },
  { label: "Who We Serve", id: "serve", icon: <FaUsers /> },
  { label: "Testimonials", id: "testimonials", icon: <FaCommentDots /> },
];

// Mobile animation
const mobileLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.25 },
  }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [ownerOpen, setOwnerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  // Responsive detection
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      setScrolled(scrollPos > 50);

      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (window.location.hash === "#hero" || window.scrollY < 100)
      window.location.reload();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] z-50 rounded-3xl backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.35)"
            : "rgba(255,255,255,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* LOGO (FIXED PATH) */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo.jpg`}
              alt="RCREATE Logo"
              className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 object-contain"
            />
            <span className="text-[clamp(16px,2.5vw,24px)] sm:text-[clamp(18px,2.8vw,28px)] md:text-[clamp(20px,2.5vw,32px)] font-bold tracking-wide text-[#2D5D46]">
              RCREATE
            </span>
          </div>

          {/* Desktop Links */}
          {!isMobileView && (
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 font-semibold">
              {links.map(({ id, icon, label }) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    title={label}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#FFDCA0]/60 shadow-lg"
                          : "hover:bg-[#FFDCA0]/30"
                      }
                      hover:scale-110`}
                    style={{ color: "#2D5D46" }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        textShadow:
                          "0px 0px 8px rgba(255,215,100,0.8)",
                      }}
                      className="text-lg"
                    >
                      {icon}
                    </motion.div>
                  </a>
                );
              })}

              {/* About Owner */}
              <button
                onClick={() => setOwnerOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-[#FFDCA0]/30 hover:scale-110"
                style={{ color: "#2D5D46" }}
                title="About Owner"
              >
                <FaHandHoldingHeart className="text-lg" />
              </button>
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobileView && (
            <button
              onClick={() => setOpen(!open)}
              className="text-3xl sm:text-4xl"
              style={{ color: "#2D5D46" }}
              aria-label="Toggle Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && isMobileView && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border-t rounded-b-3xl backdrop-blur-xl shadow-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              <div className="flex flex-col px-4 sm:px-6 py-4 font-semibold gap-1">
                {links.map(({ label, id }, i) => {
                  const isActive = active === id;
                  return (
                    <motion.a
                      key={id}
                      href={`#${id}`}
                      custom={i}
                      variants={mobileLinkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded-lg text-center transition-all hover:bg-white/20"
                      style={{
                        backgroundColor: isActive
                          ? "rgba(255,237,214,0.6)"
                          : "transparent",
                        color: isActive ? "#AE7533" : "#2D5D46",
                      }}
                    >
                      {label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Owner Modal */}
      <Owner isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
    </>
  );
}
