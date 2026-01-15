// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Owner from "./Owner";

// Static links
const links = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Benefits", id: "benefits" },
  { label: "Who We Serve", id: "serve" },
  { label: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [ownerOpen, setOwnerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  // Responsive screen detection with debounce
  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMobileView(window.innerWidth < 768);
        if (window.innerWidth >= 768) setOpen(false);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation variants
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.25 },
    }),
  };

  // Scroll to top function for logo click
  const handleLogoClick = () => {
    if (window.location.hash === "#hero" || window.scrollY < 100) {
      // Already at top or on home, refresh page
      window.location.reload();
    } else {
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 shadow-sm border-b" style={{ backgroundColor: "#FCFAF4", borderColor: "#94A59133" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
          {/* Logo as Home Button */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img src="/Logo.jpg" alt="Logo" className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 object-contain" />
            <span className="text-[clamp(16px,2.5vw,24px)] sm:text-[clamp(18px,2.8vw,28px)] md:text-[clamp(20px,2.5vw,32px)] font-bold tracking-wide text-[#2D5D46]">
              RCREATE
            </span>
          </div>

          {/* Desktop Links */}
          {!isMobileView && (
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 font-semibold">
              {links.map(({ label, id }) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="relative transition-all duration-200 hover:text-[#AE7533]"
                    style={{ color: isActive ? "#AE7533" : "#2D5D46", fontSize: "clamp(14px, 1.2vw, 18px)" }}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                        style={{ backgroundColor: "#AE7533" }}
                      />
                    )}
                  </a>
                );
              })}

              {/* About Owner Button */}
              <button
                onClick={() => setOwnerOpen(true)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all hover:bg-[#FFDCA0]"
                style={{ color: "#2D5D46", backgroundColor: "#FFEDD6", fontSize: "clamp(12px, 1vw, 16px)" }}
              >
                About Owner
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t"
              style={{ backgroundColor: "#FCFAF4", borderColor: "#94A59133" }}
            >
              <div className="flex flex-col px-4 sm:px-6 py-4 font-semibold">
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
                      className="px-3 py-2 rounded-lg text-center transition-all duration-200"
                      style={{
                        backgroundColor: isActive ? "#FFEDD6" : "transparent",
                        color: isActive ? "#AE7533" : "#2D5D46",
                        fontSize: "clamp(14px, 2vw, 18px)",
                      }}
                    >
                      {label}
                    </motion.a>
                  );
                })}

                <motion.button
                  custom={links.length}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={() => {
                    setOwnerOpen(true);
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg font-semibold text-center transition-all duration-200 mt-1"
                  style={{ backgroundColor: "#FFEDD6", color: "#2D5D46", fontSize: "clamp(14px, 2vw, 18px)" }}
                >
                  About Owner
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* About Owner Modal */}
      <Owner isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
    </>
  );
}
