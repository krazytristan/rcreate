import { motion } from "framer-motion";

const posts = [
  {
    title: "How Executive VAs Increase Founder Productivity by 40%",
    category: "Operations",
    excerpt:
      "Discover how structured delegation and operational systems free up leadership time and unlock scalable growth.",
    date: "March 12, 2025",
  },
  {
    title: "The Hidden Cost of Not Having Backend Systems",
    category: "Strategy",
    excerpt:
      "Many businesses stall not because of marketing — but because of inefficient execution and workflow bottlenecks.",
    date: "February 28, 2025",
  },
  {
    title: "Automation vs Delegation: What Should You Prioritize?",
    category: "Growth",
    excerpt:
      "Understanding when to automate and when to delegate can dramatically improve business efficiency.",
    date: "February 10, 2025",
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="relative py-32 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/10 blur-[160px] rounded-full" />

      <div className="relative z-20 max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          </span>

          <h2 className="font-heading text-4xl md:text-5xl text-primary mt-6 leading-tight">
            Strategic <span className="text-accent">Insights</span>
          </h2>

          <p className="text-neutral-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Thought leadership, operational strategies, and scalable systems
            designed for founders and service-based businesses.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white/70 backdrop-blur-2xl border border-neutral-border shadow-soft p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-accent">
                  {post.category}
                </span>

                <h3 className="font-heading text-xl text-primary mt-4 leading-snug">
                  {post.title}
                </h3>

                <p className="text-neutral-muted text-sm mt-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <span className="text-xs text-neutral-muted">
                  {post.date}
                </span>

                <button className="text-accent text-sm font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL CTA */}
        <div className="text-center mt-20">
          <button className="border border-accent text-accent px-8 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
