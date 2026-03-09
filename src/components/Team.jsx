import { motion } from "framer-motion";

import team1 from "../assets/1.jpg";
import team2 from "../assets/2.jpg";
import team3 from "../assets/3.jpg";
import team4 from "../assets/4.jpg";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Executive Virtual Assistant",
    image: team1,
    description:
      "Leads strategic operations, client systems, and executive-level support for scaling businesses.",
  },
  {
    name: "Michael Smith",
    role: "Operations Specialist",
    image: team2,
    description:
      "Focused on workflow optimization, project management systems, and operational efficiency.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing & Content Manager",
    image: team3,
    description:
      "Manages digital presence, content strategy, and marketing automation systems.",
  },
  {
    name: "David Lee",
    role: "Client Support Manager",
    image: team4,
    description:
      "Ensures seamless communication, onboarding systems, and client relationship management.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-40 px-6 bg-neutral-background overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] text-primary leading-tight">
            Meet Our <span className="text-accent">Team</span>
          </h2>

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-muted mt-6 leading-relaxed">
            Behind every successful partnership is a team dedicated to
            organization, execution, and long-term operational support.
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/70 backdrop-blur-xl border border-neutral-border shadow-soft overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 text-center">

                <h3 className="font-heading text-xl text-primary mb-1">
                  {member.name}
                </h3>

                <p className="text-accent text-sm font-medium mb-4">
                  {member.role}
                </p>

                <p className="text-neutral-muted text-sm leading-relaxed">
                  {member.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}