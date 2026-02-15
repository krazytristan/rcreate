// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaListOl,
  FaCheckCircle,
  FaHandHoldingHeart,
  FaUsers,
  FaCommentDots,
  FaEnvelope,
} from "react-icons/fa";
import Owner from "./Owner";

const links = [
  { label: "Home", id: "hero", icon: <FaHome /> },
  { label: "About", id: "about", icon: <FaInfoCircle /> },
  { label: "Services", id: "services", icon: <FaCogs /> },
  { label: "Process", id: "how-it-works", icon: <FaListOl /> },
  { label: "Why", id: "why-choose", icon: <FaCheckCircle /> },
  { label: "Benefits", id: "benefits", icon: <FaHandHoldingHeart /> },
  { label: "Audience", id: "serve", icon: <FaUsers /> },
  { label: "Reviews", id: "testimonials", icon: <FaCommentDots /> },
  { label: "Contact", id: "contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [ownerOpen, setOwnerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Responsive */
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Scroll Detection */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      setScrolled(window.scrollY > 40);

      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[85%] z-50 rounded-3xl backdrop-blur-2xl border shadow-lg transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.75)"
            : "rgba(255,255,255,0.45)",
          borderColor: "rgba(174,117,51,0.25)",
        }}
      >
        <div className="flex justify-between items-center px-6 md:px-10 h-20">

          {/* LOGO */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
              alt="RCREATE Logo"
              className="w-9 h-9 object-contain transition-transform group-hover:scale-110"
            />
            <span className="font-heading text-lg tracking-wide text-[#2D5D46]">
              RCREATE
            </span>
          </div>

          {/* DESKTOP NAV */}
          {!isMobileView && (
            <div className="flex items-center gap-10 relative">

              {links.map(({ id, icon, label }) => {
                const isActive = active === id;

                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex flex-col items-center gap-1 relative pb-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#AE7533]/20 text-[#AE7533]"
                            : "text-[#2D5D46] hover:bg-[#AE7533]/10"
                        }
                      `}
                    >
                      {icon}
                    </motion.div>

                    <span
                      className={`text-xs font-medium transition-all duration-300
                        ${
                          isActive
                            ? "text-[#AE7533]"
                            : "text-[#2D5D46]"
                        }
                      `}
                    >
                      {label}
                    </span>

                    {/* SLIDING LINE INDICATOR */}
                    {isActive && (
                      <motion.div
                        layoutId="navLine"
                        className="absolute -bottom-1 h-[2px] w-8 bg-[#AE7533] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                );
              })}

              {/* OWNER BUTTON */}
              <button
                onClick={() => setOwnerOpen(true)}
                className="flex flex-col items-center gap-1 text-[#2D5D46] hover:text-[#AE7533] transition"
              >
                <FaHandHoldingHeart className="text-xl" />
                <span className="text-xs">Owner</span>
              </button>

            </div>
          )}

          {/* MOBILE BUTTON */}
          {isMobileView && (
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-[#2D5D46]"
            >
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && isMobileView && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6 flex flex-col gap-3"
            >
              {links.map(({ label, id }) => {
                const isActive = active === id;

                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`py-2 rounded-lg text-center transition
                      ${
                        isActive
                          ? "bg-[#AE7533]/20 text-[#AE7533]"
                          : "text-[#2D5D46] hover:bg-[#AE7533]/10"
                      }
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Owner isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
    </>
  );
}
