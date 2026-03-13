import { motion } from "framer-motion";

const philosophyPoints = [
  "Your VA becomes familiar with your business operations",
  "We stay aligned with your goals and priorities",
  "We optimize and improve systems as you grow",
  "We adapt to your preferred tools and workflows",
];

export default function PartnershipPhilosophy() {
  return (
    <section
      id="partnership-philosophy"
      className="relative py-20 md:py-32 px-6 bg-neutral-background overflow-hidden"
    >
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-16 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.38em] uppercase text-neutral-muted">
            Partnership Philosophy
          </span>

          <h2 className="font-heading text-4xl md:text-6xl mt-6 text-primary leading-tight">
            Ongoing partnerships, <span className="text-accent">not just contracts</span>
          </h2>

          <p className="text-neutral-muted text-lg md:text-xl leading-relaxed max-w-2xl mt-6">
            At Rcreate, we build long-term support relationships designed to grow with your
            business. We stay close to your operations, align with your priorities, and refine
            systems continuously so your support becomes more valuable over time.
          </p>
        </motion.div>

        <div className="space-y-5">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-neutral-border bg-white/70 backdrop-blur-xl p-6 md:p-7 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-white font-semibold shadow-premium flex-shrink-0">
                  ✓
                </div>
                <p className="text-neutral-muted text-base md:text-lg leading-relaxed">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="rounded-3xl border border-accent/20 bg-accent/5 p-6 md:p-7"
          >
            <p className="text-primary text-base md:text-lg leading-relaxed font-medium">
              You get consistent, dependable, and strategic support — not just someone who checks tasks off a list.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}