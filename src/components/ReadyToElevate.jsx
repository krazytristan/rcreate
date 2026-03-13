import { motion } from "framer-motion";

export default function ReadyToElevate() {
  return (
    <section
      id="ready-to-elevate"
      className="relative py-20 md:py-32 px-6 bg-neutral-background overflow-hidden"
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[900px] h-[500px] bg-accent/10 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto rounded-[32px] border border-neutral-border bg-white/70 backdrop-blur-xl p-10 md:p-16 shadow-soft text-center"
      >

        <h2 className="font-heading text-4xl md:text-6xl text-primary leading-tight mt-6">
          Ready to <span className="text-accent">Elevate Your Business?</span>
        </h2>

        <p className="text-neutral-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
          If you’re done juggling everything and ready to scale with clarity, structure, and
          support — Rcreate Virtual Assistance Services is your partner.
        </p>

        <p className="text-neutral-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-4">
          Let’s work together to streamline your operations, strengthen your presence, and grow with confidence.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-white font-semibold shadow-premium hover:scale-[1.02] transition-all duration-300"
          >
            Book a Discovery Call
          </a>
        </div>
      </motion.div>
    </section>
  );
}