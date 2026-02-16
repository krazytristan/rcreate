// src/components/Team.jsx
import { motion } from "framer-motion";

import member1 from "../assets/va1.jpg";
import member2 from "../assets/va2.jpg";
import member3 from "../assets/va3.jpg";
import member4 from "../assets/va3.jpg";

const teamMembers = [
  {
    name: "Operations Manager",
    role: "Workflow & Systems Lead",
    image: member1,
  },
  {
    name: "Marketing Strategist",
    role: "Digital Campaign Specialist",
    image: member2,
  },
  {
    name: "Client Success Lead",
    role: "Communication & Retention",
    image: member3,
  },
  {
    name: "Web & Automation Specialist",
    role: "Funnels & Tech Systems",
    image: member4,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-36 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto text-center">

        {/* 🔥 SECTION NUMBER */}
        <span className="text-sm tracking-[0.4em] uppercase text-neutral-muted">
          09 / Team
        </span>

        <h2 className="font-heading text-4xl md:text-5xl text-primary mt-6 mb-6">
          Meet the <span className="text-accent">Team</span>
        </h2>

        <p className="text-neutral-muted text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          A structured, professional team committed to delivering consistent
          execution, operational clarity, and strategic support for growing businesses.
        </p>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/70 backdrop-blur-xl border border-neutral-border rounded-3xl p-6 shadow-soft hover:shadow-premium transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <h3 className="font-heading text-lg text-primary mb-2">
                {member.name}
              </h3>

              <p className="text-sm text-neutral-muted">
                {member.role}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
