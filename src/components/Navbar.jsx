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
  FaChevronDown,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

import Owner from "./Owner";
import Career from "./Career";

const menuGroups = [
  {
    label: "Main",
    items: [
      { label: "Home", id: "hero", icon: <FaHome /> },
      { label: "About", id: "about", icon: <FaInfoCircle /> },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Services", id: "services", icon: <FaCogs /> },
      { label: "How It Works", id: "how-it-works", icon: <FaListOl /> },
      { label: "Benefits", id: "benefits", icon: <FaHandHoldingHeart /> },
      { label: "Philosophy", id: "partnership-philosophy", icon: <FaLightbulb /> },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Audience", id: "serve", icon: <FaUsers /> },
      { label: "Testimonials", id: "testimonials", icon: <FaCommentDots /> },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Contact", id: "contact", icon: <FaEnvelope /> },
      { label: "Ready to Elevate?", id: "ready-to-elevate", icon: <FaRocket /> },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [active, setActive] = useState("hero");
  const [ownerOpen, setOwnerOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* Responsive detection */
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Scroll progress + active section */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      setScrolled(scrollTop > 40);

      const scrollPosition = scrollTop + 200;

      menuGroups.forEach((group) => {
        group.items.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActive(id);
            }
          }
        });
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
      setDropdown(null);
      setActive(id);
    }
  };

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-accent z-[60]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500
        ${scrolled ? "w-[85%] md:w-[75%] py-2 shadow-xl" : "w-[95%] md:w-[90%] py-3"}
        rounded-3xl
        backdrop-blur-2xl
        border border-neutral-border
        bg-white/60`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 h-16">
          {/* Logo */}
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

          {/* Desktop navigation */}
          {!isMobileView && (
            <div className="flex items-center gap-10">
              {menuGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(group.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  {/* Category button */}
                  <button className="flex items-center gap-2 font-medium text-primary hover:text-accent transition">
                    {group.label}
                    <FaChevronDown className="text-xs" />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdown === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute top-10 left-0
                        bg-white
                        rounded-2xl
                        border border-neutral-border
                        shadow-xl
                        p-3
                        w-56"
                      >
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                          }}
                        >
                          {group.items.map((item) => (
                            <motion.button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              variants={{
                                hidden: { opacity: 0, y: -5 },
                                visible: { opacity: 1, y: 0 },
                              }}
                              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition
                              ${active === item.id ? "bg-accent/10 text-accent" : "hover:bg-neutral-100"}`}
                            >
                              {item.icon}
                              {item.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Career */}
              <button
                onClick={() => setCareerOpen(true)}
                className="flex items-center gap-2 font-medium text-primary hover:text-accent transition"
              >
                <FaBriefcase />
                Career
              </button>

              {/* Team */}
              <button
                onClick={() => setOwnerOpen(true)}
                className="flex items-center gap-2 font-medium text-primary hover:text-accent transition"
              >
                <FaUsers />
                Team
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          {isMobileView && (
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-primary"
            >
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && isMobileView && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}       // start slightly above
              animate={{ opacity: 1, y: 0 }}         // slide into place
              exit={{ opacity: 0, y: -30 }}          // slide up while fading
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="px-6 pb-6 flex flex-col gap-3"
            >
              {menuGroups.map((group) => (
                <MobileDropdown
                  key={group.label}
                  group={group}
                  active={active}
                  scrollToSection={scrollToSection}
                />
              ))}

              <motion.button
                onClick={() => setCareerOpen(true)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="py-3 rounded-xl text-primary hover:bg-accent/10 flex items-center gap-2"
              >
                <FaBriefcase /> Career
              </motion.button>

              <motion.button
                onClick={() => setOwnerOpen(true)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="py-3 rounded-xl text-primary hover:bg-accent/10 flex items-center gap-2"
              >
                <FaUsers /> Team
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modals */}
      <Owner isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
      <Career isOpen={careerOpen} onClose={() => setCareerOpen(false)} />
    </>
  );
}

/* Mobile dropdown component */
function MobileDropdown({ group, active, scrollToSection }) {
  const [groupOpen, setGroupOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Group header */}
      <button
        onClick={() => setGroupOpen(!groupOpen)}
        className="flex justify-between items-center py-3 px-4 rounded-xl text-primary hover:bg-accent/10 font-medium"
      >
        {group.label}
        <FaChevronDown
          className={`ml-2 transition-transform ${groupOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown items */}
      <AnimatePresence>
        {groupOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-2 mt-2 pl-4"
          >
            {group.items.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ delay: index * 0.05, duration: 0.25, ease: "easeOut" }}
                className={`py-2 rounded-xl text-primary hover:bg-accent/10 flex items-center gap-2 ${
                  active === item.id ? "bg-accent/10 text-accent" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}