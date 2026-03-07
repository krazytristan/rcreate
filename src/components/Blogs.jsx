import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // Track if all posts are shown

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []);

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

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
          <h2 className="font-heading text-4xl md:text-5xl text-primary mt-6 leading-tight">
            Strategic <span className="text-accent">Insights</span>
          </h2>

          <p className="text-neutral-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Thought leadership, operational strategies, and scalable systems
            designed for founders and service-based businesses.
          </p>
        </div>

        {/* BLOG GRID */}
        {loading ? (
          <p className="text-center text-neutral-muted">Loading blogs...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-neutral-muted">
            No blogs found in the database.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {displayedPosts.map((post, index) => (
              <motion.div
                key={post.id}
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
                  <span className="text-xs text-neutral-muted">{post.date}</span>

                  <button className="text-accent text-sm font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* VIEW ALL / SHOW LESS CTA */}
        {posts.length > 3 && (
          <div className="text-center mt-20">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-accent text-accent px-8 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition"
            >
              {showAll ? "Show Less" : "View All Articles"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}