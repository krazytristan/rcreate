import { motion } from "framer-motion";
import {
  FaInbox,
  FaCogs,
  FaComments,
  FaBullhorn,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    title: "Admin Support",
    desc: "Inbox management, calendar scheduling, CRM updates, and document organization.",
    icon: <FaInbox />,
  },
  {
    title: "Operations Support",
    desc: "Workflow management, SOP implementation, and project coordination.",
    icon: <FaCogs />,
  },
  {
    title: "Communication Support",
    desc: "Client follow-ups, confirmations, and inquiries handled professionally.",
    icon: <FaComments />,
  },
  {
    title: "Marketing Support",
    desc: "Social media scheduling, engagement management, and email campaigns.",
    icon: <FaBullhorn />,
  },
  {
    title: "Website & Landing Pages",
    desc: "High-converting websites with copywriting and SEO-friendly design.",
    icon: <FaGlobe />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-[#FCFAF4] overflow-hidden font-body"
    >
      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#AE7533]/10 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT COLUMN — VERTICAL AUTO CAROUSEL */}
        <div className="relative h-[500px] overflow-hidden">

          <motion.div
            className="flex flex-col gap-8"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...services, ...services].map((service, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full text-xl bg-gradient-to-tr from-[#FCFAF4] to-[#FFE8C4] text-[#AE7533] shadow-md">
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="font-heading text-xl mb-2 text-[#2D5D46]">
                      {service.title}
                    </h3>
                    <p className="text-[#5E6F66] text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN — TEXT */}
        <div>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46] leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#5E6F66] leading-relaxed max-w-xl">
            Done-for-you virtual support designed to simplify operations,
            enhance communication, and help your business grow with ease.
            We act as your right-hand team — so you can focus on strategy,
            leadership, and scaling confidently.
          </p>
        </div>

      </div>
    </section>
  );
}
