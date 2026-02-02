import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-16 border-t"
      style={{
        backgroundColor: "#FCFAF4",
        borderColor: "#FFEDD6",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT: BRAND + CONTACT */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 text-center md:text-left">
          
          {/* LOGO + NAME */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
              alt="RCREATE Logo"
              className="w-8 h-8 object-contain"
            />
            <span
              className="text-lg font-bold tracking-wide"
              style={{ color: "#2D5D46" }}
            >
              RCREATE
            </span>
          </div>

          {/* CONTACT */}
          <p
            className="text-sm md:text-base"
            style={{ color: "#2D5D46" }}
          >
            Contact:{" "}
            <a
              href="mailto:hello@rcreateva.com"
              className="font-semibold hover:underline"
              style={{ color: "#AE7533" }}
            >
              hello@rcreateva.com
            </a>
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full transition-all hover:scale-110"
              style={{ color: "#2D5D46" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#AE7533")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D5D46")}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full transition-all hover:scale-110"
              style={{ color: "#2D5D46" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#AE7533")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D5D46")}
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full transition-all hover:scale-110"
              style={{ color: "#2D5D46" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#AE7533")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D5D46")}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT: COPYRIGHT */}
        <p
          className="text-sm md:text-base text-center md:text-right"
          style={{ color: "#94A591" }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold" style={{ color: "#2D5D46" }}>
            RCREATE VA
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
