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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT: CONTACT INFO */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-center md:text-left">
          <p className="text-sm md:text-base" style={{ color: "#2D5D46" }}>
            Contact:{" "}
            <span className="font-semibold">hello@rcreateva.com</span>
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full transition hover:scale-110"
              style={{ color: "#2D5D46" }}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full transition hover:scale-110"
              style={{ color: "#2D5D46" }}
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full transition hover:scale-110"
              style={{ color: "#2D5D46" }}
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
            Rcreate VA
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
