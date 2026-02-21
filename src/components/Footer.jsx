import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-28 pb-14 px-6 md:px-16 bg-neutral-background border-t border-neutral-border overflow-hidden">

      {/* Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

          {/* BRAND */}
          <div className="space-y-6">

            {/* Logo Circle */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-neutral-border flex items-center justify-center shadow-soft">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
                  alt="Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-neutral-muted max-w-sm mx-auto md:mx-0 leading-relaxed">
              Reliable virtual assistants helping founders streamline operations,
              strengthen marketing systems, and scale with clarity and confidence.
            </p>

            {/* Socials */}
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <motion.a
                href="https://www.linkedin.com/company/rcreate-virtual-assistance-services/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-xl border border-neutral-border flex items-center justify-center text-primary hover:text-accent transition"
              >
                <FaLinkedinIn size={14} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/rcreatevaservices"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-xl border border-neutral-border flex items-center justify-center text-primary hover:text-accent transition"
              >
                <FaFacebookF size={14} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/rcreatevaservices/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-xl border border-neutral-border flex items-center justify-center text-primary hover:text-accent transition"
              >
                <FaInstagram size={14} />
              </motion.a>
            </div>
          </div>
          
          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="font-heading text-primary text-lg">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm text-neutral-muted">
              <a href="#about" className="hover:text-accent transition">
                About
              </a>
              <a href="#services" className="hover:text-accent transition">
                Services
              </a>
              <a href="#how-it-works" className="hover:text-accent transition">
                Process
              </a>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h4 className="font-heading text-primary text-lg">
              Contact
            </h4>

            <div className="text-sm text-neutral-muted space-y-3">
              <p>Email:</p>

              <a
                href="mailto:hello@rcreateva.com"
                className="text-accent font-semibold hover:underline"
              >
                hello@rcreateva.com
              </a>

              <p className="pt-2">
                Serving clients globally with remote support.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-6 border-t border-neutral-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-muted">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">
              RCREATE Virtual Assistance
            </span>
            . All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-primary hover:text-accent transition"
          >
            Back to Top
            <FaArrowUp size={14} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
