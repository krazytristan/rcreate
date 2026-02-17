// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaListOl,
  FaHandHoldingHeart,
  FaUsers,
  FaCommentDots,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

import Owner from "./Owner";
import Career from "./Career";

const links = [
  { label: "Home", id: "hero", icon: <FaHome /> },
  { label: "About", id: "about", icon: <FaInfoCircle /> },
  { label: "Services", id: "services", icon: <FaCogs /> },
  { label: "How It Works", id: "how-it-works", icon: <FaListOl /> },
  { label: "Benefits", id: "benefits", icon: <FaHandHoldingHeart /> },
  { label: "Audience", id: "serve", icon: <FaUsers /> },
  { label: "Testimonials", id: "testimonials", icon: <FaCommentDots /> },
  { label: "Contact", id: "contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [ownerOpen, setOwnerOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
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

  /* Scroll Detection (disabled when modal open) */
  useEffect(() => {
    if (careerOpen || ownerOpen) return;

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
  }, [careerOpen, ownerOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      setActive(id);
    }
  };

  const openCareer = () => {
    setOpen(false);
    setCareerOpen(true);
  };

  const openTeam = () => {
    setOpen(false);
    setOwnerOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${scrolled ? "w-[85%] md:w-[75%] py-2 shadow-xl" : "w-[95%] md:w-[90%] py-3"}
        rounded-3xl backdrop-blur-2xl border border-neutral-border bg-white/60`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 h-16">

          {/* LOGO */}
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-neutral-border flex items-center justify-center shadow-soft transition group-hover:scale-105">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
                alt="Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>

          {/* DESKTOP NAV */}
          {!isMobileView && (
            <div className="flex items-center gap-8 relative">

              {/* SCROLL LINKS */}
              {links.map(({ id, icon, label }) => {
                const isActive = active === id;

                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex flex-col items-center gap-1 relative pb-2 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                        ${
                          isActive
                            ? "bg-accent/20 text-accent"
                            : "text-primary group-hover:bg-accent/10"
                        }
                      `}
                    >
                      {icon}
                    </motion.div>

                    <span
                      className={`text-xs font-medium transition-all duration-300
                        ${isActive ? "text-accent" : "text-primary"}
                      `}
                    >
                      {label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-1 h-[2px] w-8 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                );
              })}

              {/* CAREER */}
              <button
                onClick={openCareer}
                className="flex flex-col items-center gap-1 relative pb-2 group"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-primary group-hover:bg-accent/10 transition-all duration-300"
                >
                  <FaBriefcase />
                </motion.div>

                <span className="text-xs font-medium text-primary">
                  Career
                </span>
              </button>

              {/* TEAM */}
              <button
                onClick={openTeam}
                className="flex flex-col items-center gap-1 relative pb-2 group"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-primary group-hover:bg-accent/10 transition-all duration-300"
                >
                  <FaUsers />
                </motion.div>

                <span className="text-xs font-medium text-primary">
                  Team
                </span>
              </button>

            </div>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobileView && (
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-primary"
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
              {links.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="py-3 rounded-xl text-primary hover:bg-accent/10 transition"
                >
                  {label}
                </button>
              ))}

              <button
                onClick={openCareer}
                className="py-3 rounded-xl text-primary hover:bg-accent/10 transition"
              >
                Career
              </button>

              <button
                onClick={openTeam}
                className="py-3 rounded-xl text-primary hover:bg-accent/10 transition"
              >
                Team
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* MODALS */}
      <Owner isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
      <Career isOpen={careerOpen} onClose={() => setCareerOpen(false)} />
    </>
  );
}
