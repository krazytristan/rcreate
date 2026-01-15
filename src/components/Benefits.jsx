import { motion } from "framer-motion";
import { FaTasks, FaBullseye, FaChartLine, FaCogs } from "react-icons/fa";

const benefits = [
  {
    title: "Delegate Low-Value Tasks",
    description:
      "Let your assistant handle repetitive tasks and marketing chores so you can focus on strategy.",
    icon: <FaTasks />,
  },
  {
    title: "Never Miss Opportunities",
    description:
      "Stay on top of leads, follow-ups, and campaigns with consistent execution.",
    icon: <FaBullseye />,
  },
  {
    title: "Focus on Growth",
    description:
      "Spend your energy on high-level decisions that drive your business forward.",
    icon: <FaChartLine />,
  },
  {
    title: "Streamline Operations",
    description:
      "Integrate marketing efforts, operations, and online presence for a smoother workflow.",
    icon: <FaCogs />,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 px-6"
      style={{ backgroundColor: "#FCFAF4" }}
    >
      {/* HEADER */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          style={{ color: "#2D5D46" }}
        >
          Why a{" "}
          <span style={{ color: "#AE7533" }}>
            Right-Hand VA + Marketing + Website
          </span>
        </h2>

        <p
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          style={{ color: "#94A591" }}
        >
          Maximize efficiency and growth by leveraging professional support for operations, marketing, and online presence.
        </p>
      </motion.div>

      {/* BENEFIT CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-3xl p-8 shadow-sm transition hover:shadow-lg text-center"
            style={{ backgroundColor: "#FFEDD6" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* ICON */}
            <div
              className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full text-3xl shadow"
              style={{
                backgroundColor: "#FCFAF4",
                color: "#AE7533",
              }}
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ color: "#2D5D46" }}
            >
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="text-base leading-relaxed"
              style={{ color: "#2D5D46CC" }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
