import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 px-6 md:px-16 bg-[#FCFAF4] border-t border-[#FFEDD6] overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#AE7533]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND SECTION */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
                alt="RCREATE Logo"
                className="w-9 h-9 object-contain"
              />
              <span className="text-xl font-bold tracking-wide text-[#2D5D46]">
                RCREATE
              </span>
            </div>

            <p className="text-sm text-[#5E6F66] max-w-sm mx-auto md:mx-0">
              Reliable virtual assistants helping founders streamline operations,
              improve marketing, and scale with confidence.
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              {[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full text-[#2D5D46] hover:text-[#AE7533] transition hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#2D5D46]">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-[#5E6F66]">
              <a href="#about" className="hover:text-[#AE7533] transition">
                About
              </a>
              <a href="#services" className="hover:text-[#AE7533] transition">
                Services
              </a>
              <a href="#how-it-works" className="hover:text-[#AE7533] transition">
                How It Works
              </a>
              <a href="#contact" className="hover:text-[#AE7533] transition">
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#2D5D46]">Contact</h4>
            <p className="text-sm text-[#5E6F66]">
              Email:
            </p>
            <a
              href="mailto:hello@rcreateva.com"
              className="text-[#AE7533] font-semibold hover:underline text-sm"
            >
              hello@rcreateva.com
            </a>

            <p className="text-sm text-[#5E6F66] pt-2">
              Serving globally with remote support.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-[#FFEDD6] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94A591]">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#2D5D46]">
              RCREATE VA
            </span>
            . All rights reserved.
          </p>

          {/* BACK TO TOP */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#2D5D46] hover:text-[#AE7533] transition"
          >
            Back to Top <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
