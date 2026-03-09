import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "We support founders, coaches, agencies, service-based businesses, and executives globally.",
  },
  {
    question: "How do you match VAs?",
    answer:
      "We pair you with a VA based on your needs, business type, tools you use, and communication style.",
  },
  {
    question: "Can VAs support marketing & websites?",
    answer:
      "Yes — from updates to email flows, social scheduling, landing pages, and more.",
  },
  {
    question: "What’s the commitment?",
    answer:
      "We offer flexible monthly support packages tailored to your business needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click 'Book a Discovery Call' and our team will guide you through the onboarding process and match you with the right assistant.",
  },
];

export default function FrequentlyAsk() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >

      {/* Accent Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] text-primary leading-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted mt-6 leading-relaxed">
            Everything you need to know about working with our Virtual Assistants.
          </p>

        </motion.div>

        {/* FAQ ITEMS */}
        <div className="space-y-6">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileHover={{ y: -2 }}
                className="rounded-2xl bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft overflow-hidden"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >

                  <h3 className="font-heading text-lg text-primary group-hover:text-accent transition">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-accent"
                  >
                    <FaPlus />
                  </motion.div>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 pb-6 text-neutral-muted leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}