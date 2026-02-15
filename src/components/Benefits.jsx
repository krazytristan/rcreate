import { motion } from "framer-motion";
import { FaTasks, FaBullseye, FaChartLine, FaCogs } from "react-icons/fa";

const benefits = [
  {
    title: "Delegate Low-Value Tasks",
    description:
      "Let your assistant handle repetitive tasks and marketing execution so you can focus on strategic leadership and growth.",
    icon: <FaTasks />,
  },
  {
    title: "Never Miss Opportunities",
    description:
      "Stay on top of leads, follow-ups, and campaigns with consistent execution and reliable systems.",
    icon: <FaBullseye />,
  },
  {
    title: "Focus on Growth",
    description:
      "Spend your time on high-impact decisions that move your business forward instead of daily operations.",
    icon: <FaChartLine />,
  },
  {
    title: "Streamline Operations",
    description:
      "Integrate marketing, operations, and your online presence into one efficient workflow.",
    icon: <FaCogs />,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-28 px-6 overflow-hidden bg-[#FCFAF4]"
    >
      {/* SOFT GLOW BACKGROUND */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#AE7533]/15 blur-[130px] rounded-full" />

      {/* HEADER */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-6 text-[#2D5D46]">
          Why a{" "}
          <span className="bg-gradient-to-r from-[#AE7533] to-[#2D5D46] bg-clip-text text-transparent">
            Right-Hand VA + Marketing + Website
          </span>
        </h2>

        <p className="font-body text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#5E6F66]">
          Maximize efficiency and accelerate growth by leveraging professional
          support for operations, marketing, and your online presence.
        </p>
      </motion.div>

      {/* BENEFIT CARDS */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {benefits.map((item, i) => (
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
