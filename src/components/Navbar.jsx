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
  FaHandshake,
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
      { label: "Philosophy", id : "partnership-philosophy", icon: <FaHandshake /> },
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
      { label: "Ready to Elevate?", id : "ready-to-elevate", icon: <FaRocket />},
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
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

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

            if (
              scrollPosition >= top &&
              scrollPosition < top + height
            ) {
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
        ${
          scrolled
            ? "w-[85%] md:w-[75%] py-2 shadow-xl"
            : "w-[95%] md:w-[90%] py-3"
        }
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
                        transition={{ duration: 0.2 }}
                        className="absolute top-10 left-0
                        bg-white
                        rounded-2xl
                        border border-neutral-border
                        shadow-xl
                        p-3
                        w-56"
                      >
                        {group.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition
                              ${
                                active === item.id
                                  ? "bg-accent/10 text-accent"
                                  : "hover:bg-neutral-100"
                              }
                            `}
                          >
                            {item.icon}
                            {item.label}
                          </button>
                        ))}
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

        {/* Mobile menu */}
        <AnimatePresence>
          {open && isMobileView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-6 pb-6 flex flex-col gap-3"
            >
              {menuGroups.map((group) =>
                group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="py-3 rounded-xl text-primary hover:bg-accent/10"
                  >
                    {item.label}
                  </button>
                ))
              )}

              <button
                onClick={() => setCareerOpen(true)}
                className="py-3 rounded-xl text-primary hover:bg-accent/10"
              >
                Career
              </button>

              <button
                onClick={() => setOwnerOpen(true)}
                className="py-3 rounded-xl text-primary hover:bg-accent/10"
              >
                Team
              </button>

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