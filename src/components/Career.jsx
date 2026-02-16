import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const positions = [
  {
    title: "Executive Virtual Assistant",
    type: "Full-Time • Remote",
    description:
      "Support founders with inbox management, calendar coordination, client communication, and operational systems.",
  },
  {
    title: "Marketing Systems Specialist",
    type: "Contract • Remote",
    description:
      "Manage social media scheduling, automation workflows, CRM systems, and campaign execution.",
  },
  {
    title: "Web & Funnel Developer",
    type: "Project-Based • Remote",
    description:
      "Build and optimize landing pages, funnels, and website systems focused on conversions and performance.",
  },
];

export default function Career() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="career"
      className="relative py-32 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/10 blur-[160px] rounded-full" />

      <div className="relative z-20 max-w-6xl mx-auto">

        {/* SECTION NUMBER */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
            12 / Careers
          </span>

          <h2 className="font-heading text-4xl md:text-5xl text-primary mt-6 leading-tight">
            Join Our{" "}
            <span className="text-accent">
              Growing Team
            </span>
          </h2>

          <p className="text-neutral-muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            We’re building a team of structured, reliable professionals
            who thrive in operational excellence and long-term partnerships.
          </p>
        </div>

        {/* POSITIONS */}
        <div className="space-y-6">
          {positions.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/70 backdrop-blur-2xl border border-neutral-border shadow-soft overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full text-left px-8 py-6 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-heading text-xl text-primary">
                    {job.title}
                  </h3>
                  <p className="text-sm text-neutral-muted mt-1">
                    {job.type}
                  </p>
                </div>

                <span className="text-accent text-xl">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8 text-neutral-muted"
                  >
                    <p className="leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <a
                      href="mailto:careers@rcreateva.com"
                      className="inline-block bg-accent text-white px-6 py-3 rounded-xl font-medium shadow-premium hover:scale-105 transition"
                    >
                      Apply Now →
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* GENERAL APPLICATION CTA */}
        <div className="text-center mt-20">
          <p className="text-neutral-muted mb-6">
            Don’t see a role that fits? We’re always open to exceptional talent.
          </p>

          <a
            href="mailto:careers@rcreateva.com"
            className="inline-block border border-accent text-accent px-8 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition"
          >
            Submit General Application
          </a>
        </div>
      </div>
    </section>
  );
}
