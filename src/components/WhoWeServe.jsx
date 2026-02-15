import { motion } from "framer-motion";
import { FaBriefcase, FaTools, FaUsers } from "react-icons/fa";

const audiences = [
  {
    title: "Home Service Businesses",
    description:
      "Cleaning, window, landscaping, junk hauling, and construction businesses that need reliable back-office, marketing, and operational support.",
    icon: <FaTools />,
  },
  {
    title: "Founders & CEOs",
    description:
      "Busy founders who need a dependable right-hand virtual assistant to manage daily operations while they focus on growth and strategy.",
    icon: <FaBriefcase />,
  },
  {
    title: "Service-Based Agencies",
    description:
      "Agencies and small business owners looking for scalable, professional support for admin, marketing, and online presence.",
    icon: <FaUsers />,
  },
];

export default function WhoWeServe() {
  return (
    <section
      id="serve"
      className="relative py-28 px-6 overflow-hidden bg-[#FCFAF4]"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#AE7533]/15 blur-[130px] rounded-full" />

      {/* HEADER */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46]">
          Who{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            We Serve
          </span>
        </h2>

        <p className="font-body text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#5E6F66]">
          We specialize in supporting founders and home service CEOs who want
          reliable, professional, and scalable support for operations,
          marketing, and online presence.
        </p>
      </motion.div>

      {/* AUDIENCE CARDS */}
      <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {audiences.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl p-10 text-center bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full text-3xl bg-gradient-to-tr from-[#FCFAF4] to-[#FFE8C4] text-[#AE7533] shadow-md">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-heading text-xl md:text-2xl mb-4 text-[#2D5D46]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="font-body text-base leading-relaxed text-[#5E6F66]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
