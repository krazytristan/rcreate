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
          Who{" "}
          <span style={{ color: "#AE7533" }}>
            We Serve
          </span>
        </h2>

        <p
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          style={{ color: "#94A591" }}
        >
          We specialize in supporting founders and home service CEOs who want
          reliable, professional, and scalable support for operations,
          marketing, and online presence.
        </p>
      </motion.div>

      {/* AUDIENCE CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {audiences.map((item, i) => (
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
